import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message, nick, date, time }) => {
    return (
        <div className="message">
            <div className="msgdate">{date} {time} </div>
            {
                <div className="msg-content"> {nick}: {message}</div>
            }
        </div>
    );
}

Message.propTypes = { //Prop validation
    message: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string,

}

export default Message;
