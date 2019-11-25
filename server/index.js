const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy());

// this code determines our port from Heroku or 5000 by default
const PORT = process.env.PORT || 5000;
app.listen(PORT);