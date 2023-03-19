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

# The Enala Foods Restaurant Chat Bot 
This is a Restaurant Chat Bot interface that allows customers to place orders, check order history, and cancel orders. The chatbot stores user sessions based on devices and does not require authentication.

## Features
 * Chat interface: The chatbot interface is designed to resemble a conversation with a human being. It is easy to use and intuitive.

 * User Session Management: The chatbot stores user sessions based on devices. This means that when a customer returns to the chatbot page from the same device, they will be able to resume their previous conversation with the bot.

 * Order Management: When a customer lands on the chatbot page, the bot sends them several options. These include:

 * Select 1 to Place an order
 * Select 99 to checkout order
 * Select 98 to see order history
 * Select 97 to see current order
 * Select 0 to cancel order

 * Order Placement: When a customer selects “1”, the bot returns a list of items from the restaurant. The customer can select preferred items from the list using the same number select system and place an order.
 * Order Checkout: When a customer selects “99”, the bot responds with “order placed” if there is an order. If there is no order, the bot responds with “No order to place”. The customer is also given an option to place a new order.
 * Order History: When a customer selects “98”, the bot returns all placed orders.
 * Current Order: When a customer selects “97”, the bot returns the current order.
 * Order Cancellation: When a customer selects “0”, the bot cancels the order if there is one.

## Technologies Used
The chatbot was built using the following technologies:
 
 * Backend: Node.js, Express.js, express-session, dotenv
 * Frontend: HTML, CSS, JS, Socket.io


## How to Use
To use the chatbot, simply navigate to the chatbot page on your device. When the page loads, the chatbot will display the available options. From there, you can select the option that you want and proceed with the conversation.



## Dependencies
The Chat Bot uses the following dependencies:

* express
* express-session
* socket.io
* dotenv



## Chat-bot Preview
* https://enalafoodsbot.onrender.com/
<img alt="site-preview" src="/img/desktop-preview.jpg">



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
