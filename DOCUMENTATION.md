## DOCUMENTATION AND EXPLANATION FOR THE APP.JS FILE //  

#### The main logic is in the socket.on("connection") event handler.
#### This is where we handle the user’s messages and send the bot’s respons* 
#### The first thing we do is to check if the user has a session.
#### If the user does not have a session, we create a new session for the user’s device.
#### We store the user’s name, the current order, and the device ID in the session object.
#### Then, we check if the user has a name.
#### If the user does not have a name, we ask for the user’s name.
#### Otherwise, we welcome the user back and show the user’s current orde* 
#### Next, we listen for incoming messages from the user.
#### If the user has not provided a name, we save the name in the session object.
#### Otherwise, we check the user’s message and respond accordingly.
#### If the user sends a message that is not a number, we send a message saying that the input is invalid.
#### If the user sends a number, we check if the number is a valid menu item number.
#### If the number is not a valid menu item number, we send a message saying that the input is invalid.
#### Otherwise, we add the item to the user’s current orde* 
#### Finally, we listen for the disconnect event.
#### When the user disconnects, we remove the session object from the sessions object.
