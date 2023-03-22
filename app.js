const express = require("express");
const path = require("path");
const http = require("http");

const session = require("express-session");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
require("dotenv").config();


// Set the port to 10000 if not specified in the environment
const PORT = process.env.PORT; //|| 10000;

// Set the host to localhost if not specified in the environment
const HOST = process.env.HOST; //||  "localhost";


// Setup and start the server
server.listen(PORT, HOST, () => {
  console.log(`Server is now running on http://${HOST}:${PORT}`);
});


// Connect to MongoDB

const sessionMiddleware = session({
  secret: "session-pass",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
  },
});
            
// Serve the static files
app.use(express.static(path.join(__dirname, "/static")));

const OrderMenu = {
  3: "Yam and Egg Sauce, ₦1100",
  4: "Porridge plaintain, ₦900",
  5: "White Rice and Stew, ₦600",  
  6: "White Rice and Chicken Sauce, ₦900",
  8: "Jollof Rice and Plantain, ₦800",
  9: "Jellof Rice and Chicken, ₦1000",
  11: "Beans and Plantain, ₦700",
  20: "Eba and Egusi Soup, ₦1000",
  30: "Eba and Ofe n'sala, ₦1000",
  40: "Eba and Ofe Akwu, ₦1000",
};

const orderHistory = [];

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Get the unique identifier for the user's device
  const deviceId = socket.handshake.headers["user-agent"];

  // Check if the user already has an existing session
  if (
    socket.request.session[deviceId] &&
    socket.request.session[deviceId].userName
  ) {
    // If the user already has a session, use the existing user name and current order
    socket.emit(
      "bot-message",
      `Welcome back, ${
        socket.request.session[deviceId].userName
      }! You have a current order of ${socket.request.session[
        deviceId
      ].currentOrder.join(", ")}`
    );
  } else {
    // If the user does not have a session, create a new session for the user's device
    socket.request.session[deviceId] = {
      userName: "",
      currentOrder: [],
      deviceId: deviceId, // store the deviceId in the session object
    };
  }

  // Ask for the user's name if not provided already
  if (!socket.request.session[deviceId].userName) {
    socket.emit("bot-message", "Hello and Welcome to Enala Foods Restaurant!\n I am your FoodBot.\n Kindly enter your name");
  } else {
    socket.emit(
      "bot-message",
      `Welcome back, ${
        socket.request.session[deviceId].userName
      }! You have a current order of ${socket.request.session[
        deviceId
      ].currentOrder.join(", ")}`
    );
  }

  let userName = socket.request.session[deviceId].userName;

  // Listen for incoming bot messages
  socket.on("bot-message", (message) => {
    console.log("Bot message received:", message);
    socket.emit("bot-message", message);
  });

  // Listen for incoming user messages
  socket.on("user-message", (message) => {
    console.log("User message received:", message);

    if (!userName) {
      // Save the user's name and update the welcome message
      userName = message;
      socket.request.session[deviceId].userName = userName;
      socket.emit(
        "bot-message",
        `Welcome, ${userName}!\n Select from the service options currently on offer below\n1. Place an order\n99. Checkout order\n98. Order history\n97. Current order\n0. Cancel order`
      );
    } else {
      switch (message) {
        case "1":
          // Generate the list of items dynamically
          const itemOptions = Object.keys(OrderMenu)
            .map((item) => `${item}. ${OrderMenu[item]}`)
            .join("\n");
          socket.emit(
            "bot-message",
            `Select from the menu below to select your desired meal:\n${itemOptions}\n`
          );
          break;
        case "97":
          // Show the user their current order
          if (socket.request.session[deviceId].currentOrder.length > 0) {
            const currentOrder =
              socket.request.session[deviceId].currentOrder.join(", ");
            socket.emit(
              "bot-message",
              `${userName}, you have ordered for: ${currentOrder}\n1. Place an order\n99. Checkout order\n98. Order history\n97. Current order\n0. Cancel order`
            );
          } else {
            socket.emit(
              "bot-message",
              `You don't have any items in your current order yet. Enter '1' to see the menu.`
            );
          }
          break;
        case "99":
          // Checkout the order
          if (socket.request.session[deviceId].currentOrder.length > 0) {
            const currentOrder =
              socket.request.session[deviceId].currentOrder.join(", ");
            orderHistory.push({
              user: userName,
              order: currentOrder,
              date: new Date(),
            });
            socket.emit(
              "bot-message",
              `Thank you for ordering, ${userName}! Your order of ${currentOrder} will be available in a bit.\n1. Place an order\n98. Order history\n0. Cancel order`
            );
            socket.request.session[deviceId].currentOrder = [];
          } else {
            socket.emit(
              "bot-message",
              `You haven\'t placed any order yet. Kindly enter '1' to see the menu.`
            );
          }
          break;
        case "98":
          // Show the order history
          if (orderHistory.length > 0) {
            const history = orderHistory
              .map(
                (order) =>
                  `${order.user} ordered ${
                    order.order
                  } on ${order.date.toDateString()}`
              )
              .join("\n");
            socket.emit(
              "bot-message",
              `${userName}, here is your order history:\n${history}\n1. Place an order\n98. Order history\n0. Cancel order`
            );
          } else {
            socket.emit(
              "bot-message",
              `You have no order history yet, ${userName}. Enter '1' to see the menu.`
            );
          }
          break;
        case "0":
          // Cancel the order
          const currentOrder = socket.request.session[deviceId].currentOrder;
          if (currentOrder.length === 0 && orderHistory.length === 0) {
            socket.emit(
              "bot-message",
              `There is no order currently. Enter '1' to see the menu.`
            );
          } else {
            socket.request.session[deviceId].currentOrder = [];
            orderHistory.length = 0;
            socket.emit(
              "bot-message",
              `Your order request has been cancelled.\n1. Place a new order\n98. Order history`
            );
          }
          break;
        default:
          // Add the item to the current order
          const itemNumber = parseInt(message);
          if (!isNaN(itemNumber) && OrderMenu[itemNumber]) {
            socket.request.session[deviceId].currentOrder.push(
              OrderMenu[itemNumber]
            );
            socket.emit(
              "bot-message",
              `You have added ${OrderMenu[itemNumber]} to your order\n You can add more meal items to your current order from the menu\n Enter '97' to see your current order\n '98' to see order history\n '99' to checkout\n '0' to cancel your order`
            );
          } else {
            socket.emit(
              "bot-message",
              `Invalid input. Enter '1' to see the menu.`
            );
          }
          break;
      }
    }
  });
  
  // Listen for disconnection event
  socket.on("disconnect", () => {
    delete socket.request.session[deviceId];
    console.log("User disconnected:", socket.id);
  });
});


