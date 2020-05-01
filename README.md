# Chat.io
A recreation of the mIRC made with React/Redux and Socket.io. This was the final assignment of an advanced Web Programming course in Reykjavík University. NOTE: The server was provided by the teacher but the rest was implemented by me.

## Functionality
All global states reside in the Redux store state. Each component makes use of PropTypes if it accepts props and has a test made with Jest (although the functionality tested is not ideal).
Webpack is setup to bundle all components into a single JS file, run tests, minify the code, enable watch mode and integrate Babel.
The main functionalities of Chat.io include:
* The user specifies a nickname upon arrival and if it's free then he/she can proceed.
* The user can view a list of available chatrooms and create his own, password protection is optional.
* The user can join/leave a chat room.
* Inside a given room the user can send messages that every room member can see in real time.
* Users can send private messages to each other.
* The room creator has "op" and can give other users "op" as well. Having op means you can kick/ban someone from the room.
* Once a user is banned he can't rejoin the room but being kicked allows you to rejoin.

