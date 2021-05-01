import express from 'express'
import cors from 'cors'
import './configs/db_config.js'

const usersController = require('./controllers/userController');
const moviesController = require('./controllers/movieController')
const membersController = require('./controllers/memberController')
const subscriptionsController = require('./controllers/subscriptionsController')


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cookieParser = require("cookie-parser");


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());
app.use(cookieParser());


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use('/api/users', usersController);
app.use('/api/movies', moviesController);
app.use('/api/members', membersController);
app.use('/api/subscriptions', subscriptionsController);



const port = process.env.PORT || 8000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));