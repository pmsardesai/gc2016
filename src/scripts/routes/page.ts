/// <reference path="../../../typings/express/express.d.ts" />

// get home page
exports.HOME = function(req, res){
  res.render('home');
};