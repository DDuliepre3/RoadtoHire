import React from 'react';

function MessageDisplay() {
    render() {
        return (
            <p>{this.props.newMessage} <i>"It Just Be Like That Sometimes"</i></p>
        );
    }
}

export default MessageDisplay;