const User = require('../models/user');

function registrationNew(req, res){
  res.render('registration/new');
}

function registrationCreate(req, res) {
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', 'Thanks for registering!');
      req.session.userId = user._id;
      res.redirect('/');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).render('registration/new', { message: 'Passwords do not match' });
      }
      res.status(500).end();
    });
}


module.exports = {
  new: registrationNew,
  create: registrationCreate

};
