// const mongoose= require('mongoose');
// mongoose.connect('mongodb://localhost:27017/csvdemos', { useNewUrlParser: true })
//   .then(() => console.log('connected to db'))
//   .catch((err) => console.log(err))

// const db= mongoose.connection;

// db.on('error', console.error.bind(console,"Error in connecting the MongoDB"));

// db.once('open',function(){

//     console.log('connected to Database::MongoDB');
// });
//  module.exports=db;





const mongoose = require("mongoose");

// const env = require('./environment');

mongoose.connect('mongodb+srv://paldeepika12501:CtvZqJrPUEEz5ALm@cluster0.mjdyxqz.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

module.exports = db;
