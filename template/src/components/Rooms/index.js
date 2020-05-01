import React from 'react';
import { socket } from '../../services/socketService';
import Room from '../Room';
import RoomCreate from '../RoomCreate';

// List of all available rooms
class Rooms extends React.Component {
    componentDidMount() { //Get all available rooms from socket
        socket.on('roomlist', rooms => {
            this.setState({rooms: []});
            for(var key in rooms) {
                rooms[key].name = key;
                this.setState(prevState => ({
                    rooms: [...prevState.rooms, rooms[key]]
                  }));
            }
        });
        socket.emit("rooms");
    }

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
    }

    render() {
        const { rooms } = this.state;
        return (
            <>
            <div className="sidebar-list">
                {
                    rooms.map((room) =>
                        <Room 
                        key={room.name}
                        name={room.name} 
                        pass={room.password}
                        className="sidebar-element"
                        />)
                }
            </div>
            <button type="button" className="btn btn-info" onClick={() => {
                            socket.emit("rooms");
                    }   }>Refresh room list</button>
            <RoomCreate rooms= { rooms }/>
            </>
        );
    }
};


export default Rooms;