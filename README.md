# csvc-uploader

Link: </b>https://csv-uploader-drjc.onrender.com  

## Tools/Technologies
* [Node Js](https://nodejs.org/en/)
* [Express Js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/2)

*[multer]($ npm install --save multer)

## Minimum Requirements
You must be aware with basics of above  and have basic environment set up with you.

## Step by Step Implementation
Step - 1 Set up a new project and create index.js and directory structure as following:
   * project_name
     - config (will contain different config files)
     - models (will contain models to be used in the project)
        
Step - 2 Now the common step of initializing node package manager in the project:

dirname: \project_name> npm init

This will create a new directory *node_modules* in the structure if you will notice.
 
Step - 3 Install [express js](https://www.npmjs.com/package/express) 

dirname: \project_name> npm install express

and update index.js with following code:

 // using express js framework
const express = require('express');

// port for running 
const port = 5000;

// app intialization
const app = express();

// checking the server
app.listen(port,(err) => {
    if(err){console.log(`Error in running the sever ${err}`);}

    console.log(`Express server is up and running on port ${port}`);
});

If everyting was fine then it would have started the server and you will receive console output as:

dirname: \project_name> Express Server is up and running on port 5000

Step - 4 Now we will make user model to that will be the main entity in our project:
  - We need some libraries before hand:-
    - [mongoose](https://www.npmjs.com/package/mongoose) to interact with mongo db.
 
dirname: \project_name> npm install mongoose

Step - 5 We will define our first config file *mongoose.js* (under config folder) to establish connection with the database, so set up *mongoose.js* as defined and then update index.js with following:

// app intialization
const app = express();

// for database
const db = require('./config/mongoose');


  
If everything is created as it is, then we are done with creating the project and now it time to see it working.

## Testing and Working 
Step - 1 We will start the api and check if it is working by calling
- http://localhost:5000

You can see csv uploader page on port 5000 (on chrome)
STEPS to submit :-
    1. choose file on your system 
    
     2. click on submit button 
     
      3. you can see your output on vs code (upload  file folder)
      
       4. you can also see tha files on mongoose and studio 3T.


