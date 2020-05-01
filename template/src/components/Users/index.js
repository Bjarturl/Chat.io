import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../services/socketService';
import User from '../User';
import PropTypes from 'prop-types';

// Gets a list of users in a certain room
export class Users extends React.Component {
    componentDidMount() {
        socket.on('banned', (room, banned, banner) => {
            if(room == this.props.room) {
                socket.emit('kick', {user: banned, room: room}, function(success){});

                this.setState(prevState => ({
                    banned: [...prevState.banned, banned]
                  }));
            }
        });

        socket.on('updateusers', (room, users, ops) => {
            if(room == this.props.room) { // Only update list for the current room
                this.setState({users: [], ops: []}); 
                
                // Update ops list for this room
                for(var key in ops) { 
                    if(users[key] != ops[key]) { // Make sure users with ops are actually in room
                        users[key] = ops[key]    
                    }
                    if(!this.state.banned.includes(ops[key])) {
                        this.setState(prevState => ({ 
                            ops: [...prevState.ops, ops[key]]
                          }));
                    }
                }

                // Update user list
                for(var key in users) {
                    if(!this.state.banned.includes(ops[key])) {
                        this.setState(prevState => ({
                            users: [...prevState.users, users[key]]
                          }));
                    }
                    
                }
            }
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            ops: [],
            banned: []
        };
    }
    render() {
        const { users, ops } = this.state;
        return (
            <div>
                {
                    users.map((user) =>
                    <User 
                    key={user}
                    name={user} 
                    ops={ops}
                    className="user-element" 
                    />)
                }
            </div>
        );
    }
};

const mapStateToProps = reduxStoreState => {
    return {
        room: reduxStoreState.room
    };
};

Users.propTypes = { //Prop validation
    room: PropTypes.string
}
export default connect( mapStateToProps )(Users);