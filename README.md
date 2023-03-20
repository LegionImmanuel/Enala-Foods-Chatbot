<a name="readme-top"></a>

<!-- Project Shields -->
<div align="center">
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![Twitter][twitter-shield]][twitter-url]
  
</div>


<div>
  <p align="center">
    <a href="https://github.com/LegionImmanuel/Enala-Foods-Chatbot#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://enalafoodsbot.onrender.com/">Demo</a>
    ·
    <a href="https://github.com/LegionImmanuel/Enala-Foods-Chatbot/issues">Report Bugs</a>
    ·
    <a href="https://github.com/LegionImmanuel/Enala-Foods-Chatbot/issues">Request Feature</a>
  </p>
</div>

# <h1 align="center">The Enala Foods Restaurant Chat Bot </h1>
<p align = "center"> This is a Restaurant Chat Bot interface that allows customers to place orders, check order history, and cancel orders. The chatbot stores user sessions based on devices and does not require authentication. </p>

## <h2 align="center">Features</h2>
 * <p align = "center"> Chat interface: The chatbot interface is designed to resemble a conversation with a human being. It is easy to use and intuitive. </p>

 * <p align = "center"> User Session Management: The chatbot stores user sessions based on devices. This means that when a customer returns to the chatbot page from the same device, they will be able to resume their previous conversation with the bot.</p>
 
 * <p align = "center"> Order Management: When a customer lands on the chatbot page, the bot sends them several options. These include:</p>

 * Select 1 to Place an order
 * Select 99 to checkout order
 * Select 98 to see order history
 * Select 97 to see current order
 * Select 0 to cancel order
 <br>

 * Order Placement: When a customer selects “1”, the bot returns a list of items from the restaurant. The customer can select preferred items from the list using the same number select system and place an order.
 * Order Checkout: When a customer selects “99”, the bot responds with “order placed” if there is an order. If there is no order, the bot responds with “No order to place”. The customer is also given an option to place a new order.
 * Order History: When a customer selects “98”, the bot returns all placed orders.
 * Current Order: When a customer selects “97”, the bot returns the current order.
 * Order Cancellation: When a customer selects “0”, the bot cancels the order if there is one.

## <h2 align="center">Technologies Used</h2>
The chatbot was built using the following technologies:
 
 * Backend: Node.js, Express.js, express-session, dotenv
 * Frontend: HTML, CSS, JS, Socket.io


## <h2 align="center">How to Use</h2>
To use the chatbot, simply navigate to the chatbot page on your device. When the page loads, the chatbot will display the available options. From there, you can select the option that you want and proceed with the conversation.



## <h2 align="center">Dependencies</h2>
The Chat Bot uses the following dependencies:

* express
* express-session
* socket.io
* dotenv



## <h2 align="center">Chat-bot Preview</h2>
<p align = "center">
 https://enalafoodsbot.onrender.com/
</p>

### <h3 align="center">Mobile Version</h3>

<p align = "center">
<img alt="site-preview" src="/img/mobile-preview.jpg">
</p>

<br>

### <h3 align="center">Desktop Version</h3>
<p align = "center"><img  alt="site-preview" src="/img/desktop-preview.jpg"></p>



<!-- Markdown Links & Images -->

[contributors-shield]: https://img.shields.io/github/contributors/LegionImmanuel/Enala-Foods-Chatbot.svg?style=for-the-badge
[contributors-url]: https://github.com/LegionImmanuel/Enala-Foods-Chatbot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LegionImmanuel/Enala-Foods-Chatbot.svg?style=for-the-badge
[forks-url]: https://github.com/LegionImmanuel/Enala-Foods-Chatbot/network/members
[stars-shield]: https://img.shields.io/github/stars/LegionImmanuel/Enala-Foods-Chatbot.svg?style=for-the-badge
[stars-url]: https://github.com/LegionImmanuel/Enala-Foods-Chatbot/stargazers
[issues-shield]: https://img.shields.io/github/issues/LegionImmanuel/Enala-Foods-Chatbot.svg?style=for-the-badge
[issues-url]: https://github.com/LegionImmanuel/Enala-Foods-Chatbot/issues
[license-shield]: https://img.shields.io/github/license/LegionImmanuel/Enala-Foods-Chatbot.svg?style=for-the-badge
[license-url]: https://github.com/LegionImmanuel/Enala-Foods-Chatbot/main/LICENSE.md
[twitter-shield]: https://img.shields.io/badge/-@ekwuaziemmanuel-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/ekwuaziemmanuel
[twitter-url]: https://twitter.com/ekwuaziemmanuel
