#Step 1: 
-> Command: npm init -y
=> with this command we will get a package.json file.

#Step 2:
-> Command: npm i express
=> we install express by npm.

#Step 3: 
-> Code: const express = require('express');
=> we require express in our project.

#Step 4: 
-> const app = express();
=> Its a function, so we have to call it. And we store it in a variable.

#Step 5: 
-> Making Demo Sample API which will send a response.
=> Code: 
app.get('/', (req, res) => {
    res.send("Hello World!")
});

#Step 6:
-> Code: module.exports = app;
=> we export our app variable from app.js file for using express in another file.

#Step 7:
-> Command: npm i dotenv
=> we install dotenv for making our credentials secret.

#Step 8:
-> Code: 
const dotenv = require('dotenv')
dotenv.config();
=> we require dotenv & config it.

#Step 9:
-> Command: npm i cors
=> we install cors, it will manage which websites can hit our API.

#Step 10:
-> Code: const cors = require('cors');
=> we require cors in a variable named cors.

#Step 11: 
-> Code: app.use(cors());
=> Initially we are not giving any particular website for accessing our API, so it will allow all website to hit our API. If we give any particular website in cors([website.com]), then it will just accept the request from this particular website.

#Step 12: 
-> File Create: .env
=> we create a .env file, our all credentials will be stored in this file. Then we can use the credentials safely.

#Step 13:
-> Code: PORT=4000
=> we initialize our PORT in .env file

#Step 14:
-> Code: const PORT = process.env.PORT || 3000;
=> Its means that our port will be 4000 or 3000. We use process.env.[our secret credentials name that we defined in .env file], by this method we can use our secret data safely.

#Step 15: 
-> File Create: server.js
=> We create a new file server.js

#Step 16:
-> Code: const http = require('http');
=> we require http in our server.js file

#Step 17:
-> Code: const app = require('./app');
=> we require our express holding variable called app in our server.js file

#Step 18:
-> Code: const server = http.createServer(app);
=> we create our server with http createServer method, and pass our express as a argument in the createServer() function's parameter.

#Step 19:
-> Code:
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
=> we make listen method in out server variable, where we define out server. With listen() takes two parameter, one is out port, and second is a arrow function which will be initially called whenever our server is start.

#Step 20:
-> Change in package.json file:  ["main": "index.js"] turn this into ["main": "server.js"]
=> Turn this index.js file into server.js file, because for our application the server.js file the entry point or main point of the application, because we create our server on this file.

#Step 21:
-> Command: npx nodemon
=> we have to start our server with nodemon. If our server is running with nodemon, we do not have the restart the server for seeing our newly add changes in server, whenever we make any changes in our server, nodemon will detect it automatically & also restart our server automatically. So we can see our changes live in server.

###Success: If we run this command, we can see our server is running successfully. We setup our basic server properly.

#Step 22:
-> Command: npm i mongoose
=> We install mongoose in our application, we use mongoose for this project.

#Step 23:
-> Create a Folder & File: DB/db.js
=> We created a DB folder in the root of our application, inside DB folder we make a db.js file. We use a local database as of now. Later we connect a real database to our project.

#Step 24:
-> Code: const mongoose = require('mongoose');
=> We require mongoose in our db.js file

#Step 25:
-> Code:
function connectToDB(){
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log(" ");
        })
        .catch(err => console.log(err))
}
=> we make a function which will connect our application with Database. Its a code for connecting the DB.

#Step 26:
-> Code: module.exports = connectToDB;
=> We export our function which will connect the DB with our application.

#Step 27:
-> Code: const connectToDB = require('./DB/db');
=> We require connectToDB function in a variable at app.js file

#Step 28:
-> Code: connectToDB();
=> We call the variable which contains our function for making DB connection.

###Success: We are successfully connected to our application with a local Database.

#Step 29:
-> Create Folder: models
=> We create a folder named 'models' in the root of our application. We make schemas in this folder.

#Step 30:
-> Create File: models > user.model.js
=> We crate a file for write our schema for user.

#Step 31:
-> Command: npm i bcrypt
=> we install 'bcrypt' for hashing password.

#Step 32: 
-> Command: npm i jsonwebtoken
=> we install 'jsonwebtoken' for making a secure authentication.

#Step 33:
-> Code: const bcrypt = require('bcrypt')
-> Code: const jwt = require('jsonwebtoken')
=> we require both bcrypt and jwt in out user.model.js file

#Step 34:
=> We create methods in our user.model.js file with bcrypt & jwt

#Step 35:
-> Code: const userModel = mongoose.model('user', userSchema)
=> Finally we create model for our user.

#Step 36:
-> Code: module.exports = userModel
=> We export our user model.

#Step 37:
-> Create Folder: Controllers
=> We create a folder named 'Controllers' in the root of our application.

#Step 38:
-> Create File: Controllers > user.controller.js
=> We make a controller for user model

#Step 39:
-> Code: const userModel = require('../models/user.model')
=> We require userModel in our user.controller.js file

#Step 40:
-> Create Folder & File: routes > user.routes.js
=> We create a Folder named 'routes' and a file named 'user.routes.js'

#Step 41: 
-> Code: const express = require('express');
-> Code: const router = express.Router();
=> We require express in our user.routes.js file and call the Router function of express.

#Step 42:
-> module.exports = router;
=> We export our router contained variable from user.routes.js file for further use.

#Step 43:
-> Command: npm i express-validator
=> We install express-validator in our project. This is use for validate the user input in express application.

#Step 44:
-> Code: const { body} = require('express-validator')
=> we require body from express-validator

#Step 45:
=> we validate our data with express-validator in user.routes.js file

#Step 46:
-> Create Folder & File: Services > user.service.js
=> We create a folder named 'Services' and a file named 'user.service.js'

#Step 47:
-> Code: const userModel = require('../models/user.model')
=> we Require userModel in user.service.js file

#Step 48:
=> we create createUser function in user.service.js

#Step 49:
-> const userService = require('../Services/user.service')
=> we require our createUser function in variable named 'userService' on user.controller.js file

#Step 50:
-> const { validationResult } = require('express-validator')
=> we require validationResult from 'express-validator' in user.controller.js file

#Step 51:
=> we make registerUser function in user.controller.js file

#Step 52:
=> Insider registerUser function we hashed our password and generate our JWT Token

#Step 53:
-> Code: const userRoutes = require('./routes/user.routes')
=> we require user.routes.js in our app.js file in a variable named userRoutes

#Step 54:
-> Code: app.use(express.json())
=> we use express.json() in our application

#Step 55: 
-> Code: app.use('/user', userRoutes)
=> we configure our userRoutes with our application









