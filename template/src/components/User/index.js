import React from 'react';
import { connect } from 'react-redux';
import UserOperations from '../UserOperations';
import { socket } from '../../services/socketService';
import { updateRoom } from '../../actions/roomActions';

import PropTypes from 'prop-types';

// Properties of each individual user
export const User = ({ name, ops, user, updateRoom }) => {
    var sendPrivatechat = () => { // Function that sends a private message between users
        var msg = window.prompt("Enter private message:"); // Prompt user for message
        if(msg == "" || msg == null) return; // Do nothing if user cancelled or message is empty

        // Send message through socket
        socket.emit("privatemsg", {nick: name, message: msg }, function(success) {
            if(!success) {
                alert("Message failed to send!");
            }  
        });
    }

    var userOps = ops.includes(name) // Does THIS user have ops?
    var currUserOps = ops.includes(user); // Does the current user have ops?
    socket.on('kicked', (room, kicked, kicker) => {
        if(user == kicked) {
            updateRoom("");
        }
    })
    return (
        <>
        <div id="userline">
            {
                name == user
                ?
                    <p>{userOps ? "+" + name : name }</p>
                :
                    <>
                        <p onClick={()=> {sendPrivatechat();}}>{userOps ? "+" + name : name }</p>
                        {currUserOps ? <UserOperations name={ name } /> : <></>}
                    </>
            }
            
        </div>
            
        </>
    );
}

const mapStateToProps = reduxStoreState => {
    return {
        user: reduxStoreState.user
    };
};



User.propTypes = { //Prop validation
    name: PropTypes.string,
    user: PropTypes.string,
    ops: PropTypes.array.isRequired,
    updateRoom: PropTypes.func
}
export default connect( mapStateToProps, { updateRoom })(User);


