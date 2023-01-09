const mongoose = require('mongoose');
require("dotenv").config();

const endPoint = process.env.DATABASE_ENDPOINT
console.log(endPoint)

module.exports = async function (){
    try {
        mongoose.connect(endPoint)
        console.log('Successfully connect to MongoDB');
    } catch (error) {
        console.log('Failed connecting to MongoDB');
    }
}