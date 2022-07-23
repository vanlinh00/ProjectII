var UserService = require('../services/userService');

let initIO = (io) => {
    io.on("connection", function (socket) {
        console.log("User connected1111", socket.id);
    })
}

let chat = async function (req, res) {

    res.render('user/chat.ejs', { user: req.user });
}

module.exports = {
    chat: chat,
    initIO:initIO
}
