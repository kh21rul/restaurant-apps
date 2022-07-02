const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        console.log(message.data);
        console.log(JSON.parse(message.data));
    },
};

export default WebSocketInitiator;