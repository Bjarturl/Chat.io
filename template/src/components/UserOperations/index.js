import React from 'react';
import { socket } from '../../services/socketService';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// Operations that an "op" user can perform
export const UserOperations = ({ name, room }) => {

    var opUser = () => { // Op the selected user
        document.getElementById("default-option").selected = true;
        socket.emit('op', {user: name, room: room}, function(success){
            if(!success) {
                alert("Failed to op user.");
            }
        });
    }

    var kickUser = () => { // Kick the selected user
        document.getElementById("default-option").selected = true;
        socket.emit('kick', {user: name, room: room}, function(success){
            if(!success) {
                alert("Failed to kick user.");
            }
        });
    }

    var banUser = () => { // Ban the selected user
        document.getElementById("default-option").selected = true;
        socket.emit('ban', {user: name, room: room}, function(success){
            if(!success) {
                alert("Failed to ban user.");
            } 
        });
    }

    return (
        <>
            <select id="user-ops">
                <option id="default-option" value="" ></option>
                <option value="op" onClick={ () => { opUser() } }>Grant op</option>
                <option value="kick" onClick={ () => { kickUser() } }>Kick</option>
                <option value="ban" onClick={ () => { banUser() } }>Ban</option>
            </select>
        </>
    );
}

const mapStateToProps = reduxStoreState => {
    return {
        room: reduxStoreState.room
    };
};

UserOperations.propTypes = {
    name: PropTypes.string,
    room: PropTypes.string
}

export default connect( mapStateToProps )(UserOperations);