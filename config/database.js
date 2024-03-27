const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('express','root','Zafer1998@',{
   dialect:'mysql',
   host:'localhost',
   port: 3306 
});


function connection() {
    try {
        sequelize.authenticate().then(() => console.log('connection established'));
    } catch(err) {
        console.error(err);
    }
}

connection();

module.exports = sequelize;