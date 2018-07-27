/**
 * Register.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt-nodejs');
module.exports = {

  attributes: {

    username:{
      type: 'string',
      required: true,
      description: 'User First Name',
      maxLength: 100,
    },
    FirstName:{
      type: 'string',
      required: true,
      description: 'User First Name',
      maxLength: 100,
    },
    LastName:{
      type: 'string',
      required: true,
      description: 'User Last Name',
      maxLength: 100,
    },  
    
    Sex:{
      type: 'string',
      required: true,
      description: 'User gender',
      maxLength: 120,
    },
    Addhobbies:{
      type: 'string',
      required: true,
      description: 'User hobby',
      maxLength: 120,
    },
    Address:{
      type: 'string',
      required: true,
      description: 'User hobby',
      maxLength: 200,
    },

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
   },

   password:{
    type: 'string',
    required: true,
    description: 'Secured register  password.',
    protect: true,
   },

//beforecreate: function(User,cb){
  //bcrypt.genSalt(10, function(User, salt){
   // bcrypt.hash(User.password, salt, null, function(err, hash){
 //     if (err) return cb(err);
      //User.password = hash;
      //return cb();
    //  })
  //  })
//  }

  },
  datastores:'mongodb'
};

