const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/post',async (req,res )=>{
        const {title,img} = req.body;
         
})
router.get('/auth/twitter',passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {session:false, failureRedirect: '/login' }),
        function(req, res) {
        
                res.redirect(`http://localhost:5173`)
        });

module.exports = router

