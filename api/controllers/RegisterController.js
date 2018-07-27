/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');

module.exports = {
//
  login: function(req, res){
    passport.authenticate('local', (err, user, info) => {
      if (err || !user){
        return res.send({message: info.message, user

        });
      }
      req.login(user, (err) => {
        if (err) {res.send (err);}
        sails.log('logged In');
      });
    })(req, res);
  },
  //

  register:function(req, res){

    let data = {

      username: req.body.username,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Sex: req.body.Sex,
      Addhobbies: req.body.Addhobbies,
      Address: req.body.Address,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
    };

    User.create(data).fetch().exec((err, user) => {
      if (err) {return res.send (err);}

      req.login(user, (err) => {
        if (err) {res.send (err);}
        sails.log('logged In');
      });
    });
  }

};
