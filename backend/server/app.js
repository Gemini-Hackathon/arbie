const mongoose = require('mongoose');
const server = require('./server');
require('dotenv').config();
const port = process.env.PORT || 7777;
const mongo = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/arbie';
mongoose.Promise = global.Promise;
mongoose.connect(mongo)
.then((res) => {
  server.listen(port,(req, res) =>{
    console.log(process.env.NODE_ENV === 'production' ? 'PRODUCTION SERVER' : `Server is listening to port:${port}`);
  });
})
.catch((err) => {
  console.error('ERROR: Cannot Connect To Mongo DB');
});


