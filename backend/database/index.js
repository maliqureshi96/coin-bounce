const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING); 
        console.log("Database is working fine");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = dbConnect;
