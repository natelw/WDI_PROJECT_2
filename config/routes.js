const express = require('express');
const router  = express.Router();
const registration  = require('../controllers/registration');
const session       = require('../controllers/session');
const Sheet = require('../models/sheet');
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
router.get('/sheets', (req, res) => {
  Sheet
    .find()
    .exec()
    .then((sheets) => {
      res.render('sheets/index', { sheets });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
});

// NEW
router.get('/sheets/new', (req, res) => res.render("sheets/new"));
// SHOW
router.get('/sheets/:id', (req, res) => res.render("sheets/show"));
// CREATE
router.post('/sheets', (req, res) => res.send("CREATE"));
// EDIT
router.get('/sheets/:id/edit', (req, res) => res.render("sheets/edit"));
// UPDATE
router.put('/sheets/:id', (req, res) => res.send("UPDATE"));
// DELETE
router.delete('/sheets/:id', (req, res) => res.send("DELETE"));



module.exports = router;
