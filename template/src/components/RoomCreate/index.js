import React from 'react';
import { connect } from 'react-redux';
import { updateRoom } from '../../actions/roomActions';
import { socket } from '../../services/socketService';
import PropTypes from 'prop-types';

// Form that creates a room from input
export const RoomCreate = ({ updateRoom, rooms }) => {
    var createRoom = (name, pass) => { // Create room from name and pass given
        if(name == "") { return;} 

        var exists = false;
        rooms.forEach((room) => { // Check first if room exists
            if(room.name == document.getElementById("roomname").value) {
                exists = true;
            } 
        });

        if(exists) {
            alert("Room already exists!");
        } else { // If room exists send a joinroom request to server
            socket.emit("joinroom", {room: name, pass: pass }, function(success){
                if(success) {
                    socket.emit("joinroom", {room: name, pass: pass }, function(success){
                        if(success) {
                            updateRoom(name);
                        }
                    });
                } else {
                    alert("Couldn't create room.");
                }
            });
        }
    }
    return (
        <>
            <div className="roomcreate">
                <div id="roomcreate-inputs"> 
                    <p>Create a room</p>
                        <input type="text" id="roomname" placeholder="Room name"></input>
                        <input type="password" id="roompass"  placeholder="Password"></input>
                    </div>
                    <button type="button" onClick={() => {
                        createRoom(document.getElementById("roomname").value, document.getElementById("roompass").value);
                    }}>Create room</button>
            </div>
        </>
    );
}

RoomCreate.propTypes = { //Prop validation
    updateRoom: PropTypes.func,
    rooms: PropTypes.array,

}
export default connect(null, { updateRoom })(RoomCreate);
