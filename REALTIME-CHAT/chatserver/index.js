const io = require('socket.io')(8000, { cors: { origin: "*" } });

const users = {};
let onlineUsers = 0;

io.on('connection', socket => {
    onlineUsers = onlineUsers + 1;
    socket.emit('userIncrement', onlineUsers);

    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', { name: users[socket.id], onUsers: onlineUsers })
    })

    socket.on('send', data => {
        socket.broadcast.emit('receive', { message: data.message, name: users[socket.id], id: data.id })
    })

    socket.on('liked', id => {
        socket.broadcast.emit('msg-like', id)
    })

    socket.on('disconnect', () => {
        onlineUsers = onlineUsers - 1;
        socket.broadcast.emit('disconnected', { name: users[socket.id], onUsers: onlineUsers })
        delete users[socket.id]
    })


})