const Sequelize = require('sequelize');
const db = require('../util/database'); 

const Post = db.define('posts',{
    post_id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true
    },
    post_title:{
        type : Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    post_text:{
        type : Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    post_pic:{
        type : Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    user_id:{
        type : Sequelize.INTEGER
    }

});

module.exports = Post;