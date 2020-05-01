import React from 'react';
import Sidebar from '../Sidebar';
import MessageWindow from '../MessageWindow';

// Contains the entire chat window, sidebar and all
const ChatWindow = () => {
    return (
        <>
            <div className="chat-window">
                <MessageWindow />
                <Sidebar/>
            </div>
        </>
    );
};



export default ChatWindow;