import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';
import { socket } from '../../services/socketService';
import PropTypes from 'prop-types';

// Set the nick of user from input
export const Nickname = ({ updateUser }) => {
    function updateName(name) { // Updates name if not taken
        if(name[0] == "+") { // Make sure user doesn't pretend to have ops
            alert("You can't have '+' at start of your name");
        }
        socket.emit("adduser", name, function(available){
             if (!available){
                 alert("Name is taken!") 
             } else {
                 updateUser(name);
             }
         });
     }

    return (
        <>
            <div className="nickname">
                <label htmlFor="nick">Select a nickname:</label><br></br>
                <input type="text" id="nickbox" maxLength="10"></input><br></br>
                <button onClick={ () => {
                    updateName(document.getElementById("nickbox").value);
                }}>Enter chat.io</button>
            </div>
        </>
    );
}

Nickname.propTypes = { //Prop validation
    updateUser: PropTypes.func,

}

export default connect(null, { updateUser })(Nickname);
