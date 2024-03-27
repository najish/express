const User = require('../models/user');
const addUser = async (req,res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        console.log(req.body);
        const user = await User.create({username: username, password: password});
        if(user) {
            console.log('user created');
        }
    } catch(err) {
        console.error(err);
    }

    res.send('add User: post');
}

const editUser = (req,res) => {
    res.send('edit uesr : put');

}

const getUsers = async (req,res) => {

    try {
        const users = await User.findAll();
        if(users) {
            console.log(users);
            res.json(users);
        }
    } catch(err) {
        console.error(err);
    }
    res.send('get users: get');

}

const getUser = async (req,res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        if(user) {
            console.log(user);
            res.json(user);
        }
    } catch(err) {
        console.log('invalid userId');
        res.send('Invalid UserId');
    }

}

module.exports = {
    addUser, editUser, getUser, getUsers
}
