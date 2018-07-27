/**
 * Login.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


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
        description: 'Secured login password.',
        protect: true,
       },

       Addhobbies:{
        type: 'string',
        required: true,
        description: 'User hobby',
        maxLength: 120,
      },
  



  },
datastores:'mongodb'
};

