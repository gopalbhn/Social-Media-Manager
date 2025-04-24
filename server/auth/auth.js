const passport = require("passport");
const express = require("express");
const { User, Twitter_User } = require("../models/userModel");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter");
const googleProvider = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async function (acessToken, refreshToken, profile, cb) {
        console.log("hello world form auth");
        console.log("profile", profile);
        //    let user = await User.findOne({ email: profile.emails[0].value })
        //     if(user){
        //         return cb(null,user)
        //     }else{
        //         return cb(null)
        //     }

        try {
          const existingUser = await User.findOne({
            email: profile.emails[0].value,
          });
          if (existingUser) {
            return cb(null, existingUser);
          }
          const newUser = new User({
            name: profile.name.givenName + profile.name.familyName,
            email: profile.emails[0].value,
          });
          await newUser.save();
          cb(null, newUser);
        } catch (err) {
          cb(err, null);
        }
      }
    )
  );
};

const twitterProvider = () => {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: process.env.TWITTER_CALLBACK_URL,
      },
      async function (token, tokenSecret, profile, cb) {
        try {
          console.log('hello form auth')
          console.log(profile);
          // const existingUser = await Twitter_User.find({ email: profile.id });

          // if (existingUser) {
          //   return cb(null, existingUser);
          // }
          // const newUser = new Twitter_User({
          //   name: "gpal",
          //   pass: "real",
          // });
          cb(null,{
            username:'gopalbhandari'
          })
        } catch (err) {}
      }
    )
  );
};
module.exports = { googleProvider, twitterProvider };
