
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};

exports.cowboy = function(req,res) {
  res.render('cowboy.html');
};
