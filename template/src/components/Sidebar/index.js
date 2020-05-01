import React from 'react';
import Rooms from '../Rooms';
import Users from '../Users';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Displays either rooms or users in selected room
export const Sidebar = ({ room }) => {
    return (
        <div className="sidebar">
            {
                room == ""
                ?
                <>
                    <p className="sidebar-header">Rooms</p>
                    <Rooms />
                </>
                :
                <>
                    <div>
                        <p className="sidebar-header">Users</p>
                        <div className ="sidebar-list">
                            <Users room={ room }/>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

const mapStateToProps = reduxStoreState => {
    return {
        room: reduxStoreState.room
    };
};

Sidebar.propTypes = { //Prop validation
    room: PropTypes.string,
}

export default connect( mapStateToProps )(Sidebar);
