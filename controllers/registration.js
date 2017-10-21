const User = require('../models/user');

function registrationNew(req, res){
  res.render('registration/new');
}

function registrationCreate(req, res){
  User
    .create(req.body)
    .then((user) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));

}
module.exports = {
  new: registrationNew,
  create: registrationCreate

};
// User.find((err, users) => {
//   if (err) return console.log(err);
//   return console.log(users);
