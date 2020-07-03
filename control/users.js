const users = require('../model/user');

module.exports = {
    addUser(req, res) {
        users.push(req.body);
        res.redirect('/users');
    },

    getUsers(req, res) {
        res.render('users', { title: "Users", users })
    }
}