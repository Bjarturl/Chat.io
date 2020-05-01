import React from 'react';
import { connect } from 'react-redux';
import { updateRoom } from '../../actions/roomActions';
import { socket } from '../../services/socketService';
import PropTypes from 'prop-types';

// Individual rooms and their properties
export const Room = ({ updateRoom, name, pass, className }) => {

    function validatePassword() { // Validates that the password is correct
        if(pass == "") {
            return true;
        }
        var inp = window.prompt("Enter room password: ");
        if(inp == pass) {
            return true;
        } else {
            return false;
        }
    }

    function joinRoom() { // Called when user clicks on a room
        if(!validatePassword(pass)) {
            alert("Invalid password!");
            return;
        }
        
        socket.emit("joinroom", {room: name, pass: pass }, function(success){
            if(success) {
                updateRoom(name);
            } else {
                alert("You can't join this room.");
            }
        });
    }

    return (
        <>
            <div className={className} onClick={ () => {
                    joinRoom();
                }}>{ name }</div>
           
        </>
    );
}

Room.propTypes = { //Prop validation
    updateRoom: PropTypes.func,
    name: PropTypes.string, 
    pass: PropTypes.string, 
    className: PropTypes.string,
}

export default connect(null, { updateRoom })(Room);
