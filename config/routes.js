/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'get/homepage': {
    view: 'pages/homepage',
  },
  'get/login':{
    view: 'user/login',
  },
  'get/register':{
    view: 'user/register',
  },

  'POST /login': 'RegisterController.login',
  'POST /register': 'RegisterController.register',

};
