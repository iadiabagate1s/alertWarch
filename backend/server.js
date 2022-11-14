
// server.js File
const express = require('express'); // Importing express module
const bodyParser = require('body-parser'); // Importing body-parser module
const cors = require('cors'); // Importing cors module
const app = express(); // Creating an express object
  
const port = 8888;  // Setting an port for this application







app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { habitStatus } = require('./db/config.js');
const clientSiteRouter = require('../backend/src/routes/clientSiteRoute.js');
const userRouter = require('../backend/src/routes/userRoutes.js');
const allRoutes = require('../backend/src/routes/index.js');



// app.use('/user', userRouter.router);
// app.use('/clientsite', clientSiteRouter.router);
app.use('/', allRoutes.router);

// Starting server using listen function
app.listen(port, function (err) {
   if(err){
       console.log("Error while starting server");
   }
   else{
       console.log("Server has been started at "+port);
   }
})