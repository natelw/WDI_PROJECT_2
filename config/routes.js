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
router.get('/sheets/:id', (req, res) => {
  Sheet
    .findById(req.params.id)
    .exec()
    .then((sheet) => {
      if(!sheet) return res.status(404).end('Not found');
      res.render('sheets/show', { sheet });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
});
// CREATE
router.post('/sheets', (req, res) => {
  Sheet
    .create(req.body)
    .then(() => {
      res.redirect('/sheets');
    })
    .catch((err) => {
      res.status(500).end(err);
    });
});

// EDIT
router.get('/sheets/:id/edit', (req, res) => {
  Sheet
    .findById(req.params.id)
    .exec()
    .then((sheet) => {
      if(!sheet) return res.status(404).end('Not found');
      res.render('sheets/edit', { sheet });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
});

// UPDATE
router.put('/sheets/:id', (req, res) => {
  Sheet
    .findById(req.params.id)
    .exec()
    .then((sheet) => {
      if(!sheet) return res.status(404).send('Not found');

      for(const field in req.body) {
        sheet[field] = req.body[field];
      }

      return sheet.save();
    })
    .then((sheet) => {
      res.redirect(`/sheets/${sheet.id}`);
    })
    .catch((err) => {
      res.status(500).end(err);
    });
});

// DELETE
router.delete('/sheets/:id', (req, res) => res.send("DELETE"));



module.exports = router;
