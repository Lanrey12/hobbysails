const passport = require ('passport'),
LocalStrategy = require ('passport-local').Strategy,
bcrypt = require ('bcrypt-nodejs');

//
passport.serializeUser (function(user, cb){
   cb(null, user.id);
});

//
passport.deserializeUser (function(id, cb){
  user.findone({id}).exec(function(err, user){
    cb(err, user);
  });
})

//
passport.use(new LocalStrategy({
    usernameField: 'username',
    passportField: 'password'

},(function(username, password, cb){

    user.findone({username: username}).exec(function(err, user){
    if (err) return cb(err);
    if (!user) return cb(null, false, {message:'invalid username'});

    bcrypt.compare (password, user.password, function(err, res){
        if (!res) return cb(null, false, {message: 'invalid password'});
       return cb(null, user, {message: 'password ok!'});
    })
  });
})));
