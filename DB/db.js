const mongoose = require('mongoose');

function connectToDB(){
    console.log("Connecting to:", process.env.DB_CONNECT); 
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch(err => console.log(err))
}

module.exports = connectToDB;  
