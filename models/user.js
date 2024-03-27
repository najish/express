const sequelize = require('../config/database');
const {DataTypes}  = require('sequelize');

const User = sequelize.define('user', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});


User.sync({alter:true}).then(() => {
    console.log('user table: created');
}).catch(err => console.error(err));


module.exports = User;