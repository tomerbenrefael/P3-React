import express from 'express'
import cors from 'cors'
import './configs/db_config.js'
import moviesController from './movies/moviesController.js'
import membersController from './members/membersController.js'
import usersController from './users/usersController.js'
import subscriptionsController from './subscriptions/subscriptionsController.js'


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

app.use('/users', usersController);
app.use('/movies', moviesController);
app.use('/members', membersController);
app.use('/subscriptions', subscriptionsController);



const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));