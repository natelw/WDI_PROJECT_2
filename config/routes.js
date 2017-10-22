const express = require('express');
const router  = express.Router();
const registration  = require('../controllers/registration');
const session       = require('../controllers/session');

// A home route
router.get('/', (req, res) => res.render('homepage'));
// router.get('/registration/new',(req, res)=> res.render('./registration/new'));
// router.get('/session/new',(req, res)=> res.render('./session/new'));

// RESTful routes
// All URLS should contain the PLURAL... don't chose octopus or people or something silly.
router.route('/register')
  .get(registration.new)
  .post(registration.create);

router.route('/login')
  .get(session.new)
  .post(session.create);

router.route('/logout')
  .get(session.delete);
// INDEX

// NEW

// SHOW

// CREATE

// EDIT

// UPDATE

// DELETE


module.exports = router;
