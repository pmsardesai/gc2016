/// <reference path="../typings/express/express.d.ts" />

// get Home page
exports.HOME = function(req, res){
  res.render('home');
};