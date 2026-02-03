const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

console.log('Testing MongoDB connection...');
console.log('Node Version:', process.version);

mongoose.connect(url, { family: 4 })
    .then(() => {
        console.log("Connected to MongoDB successfully!");
        process.exit(0);
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    });
