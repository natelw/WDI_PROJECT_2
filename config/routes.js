const express = require('express');
const router  = express.Router();
const registration  = require('../controllers/registration');
const session       = require('../controllers/session');
const sheets = require('../controllers/sheets');
const Sheet = require('../models/sheet');
const secureRoute = require('../lib/secureRoute');
// A home route
router.get('/', (req, res) => res.render('homepage'));

router.route('/register')
  .get(secureRoute, registration.new)
  .post(registration.create);

router.route('/login')
  .get(session.new)
  .post(session.create);

router.route('/logout')
  .get(session.delete);

router.route('/sheets')
  .get(sheets.index)
  .post(sheets.create);

router.route('/sheets/new')
  .get(sheets.new);

router.route('/sheets/:id')
  .get(sheets.show)
  .put(sheets.update)
  .delete(sheets.delete);

router.route('/sheets/:id/edit')
  .get(sheets.edit);

module.exports = router;
