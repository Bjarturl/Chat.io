import React from 'react';
import Nickname from '../Nickname';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatWindow from '../ChatWindow';

export const Container = ({children, user }) => {

    return (
        <div className="container">
            { children }
            { 
                user
                ?
                <ChatWindow />
                :
                <Nickname />
            }
        </div>
    );
}

const mapStateToProps = reduxStoreState => {
    return {
        user: reduxStoreState.user
    };
};

Container.propTypes = { //Prop validation
    children: PropTypes.object,
    user: PropTypes.string,
}

export default connect( mapStateToProps )(Container);