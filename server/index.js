/* body-parse enables parse request
cors enable cross origin request
express routes
nodemon auto refresh server for changes */

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import postRoutes from './routes/posts.js';

/* older versions use const express = require(express)
 newer can use import if you add types and start in package.json
 addition changeses to package.json, added proxy to localhost
 */

 const app = express();
dotenv.config();
 // Sets up bodyParser for future requests
 app.use(bodyParser.json({limit: "30mb", extedned:true}))
 app.use(bodyParser.urlencoded({limit: "30mb", extedned:true}))
 app.use(cors());

  // Every route in postRoutes starts with /posts
app.use('/posts', postRoutes)
const CONNECTION_URL = process.env.CONNECTION_URL;
//  const CONNECTION_URL = 'mongodb+srv://user123:user123@cluster0.55ndp.mongodb.net/test?retryWrites=true&w=majority';
 const PORT = process.env.PORT || 5000;

 // mongoose.connect returns a promis object
 // connect object options, prevent console warnings
 mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Prevent console warnings
mongoose.set('useFindAndModify', false);