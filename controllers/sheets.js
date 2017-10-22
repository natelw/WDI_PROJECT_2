const express = require('express');
const sheets = require('../controllers/sheets');
const Sheet = require('../models/sheet');
const secureRoute = require('../lib/secureRoute');



function sheetsIndex(req, res) {
  Sheet
    .find()
    .exec()
    .then(sheets => {
      res.render('sheets/index', { sheets });
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
}

function sheetsNew(req, res) {
  res.render('sheets/new');
}

function sheetsShow(req, res) {
  Sheet
    .findById(req.params.id)
    .exec()
    .then(sheet => {
      if (!sheet) return res.status(404).render('error', { error: 'No sheet found.'});
      res.render('sheets/show', { sheet });
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
}

function sheetsCreate(req, res) {
  Sheet
    .create(req.body)
    .then(() => {
      res.redirect('/sheets');
    });
}

function sheetsEdit(req, res)  {
  Sheet
    .findById(req.params.id)
    .exec()
    .then(sheet => {
      if (!sheet) return res.status(404).render('error', { error: 'No sheet found.'});
      res.render('sheets/edit', { sheet });
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
}

function sheetsUpdate(req, res) {
  Sheet
    .findById(req.params.id)
    .exec()
    .then(sheet => {
      if (!sheet) return res.status(404).render('error', { error: 'No sheet found.'});

      for(const field in req.body) {
        sheet[field] = req.body[field];
      }
      return sheet.save();
    })
    .then(sheet => {
      res.redirect(`/sheets/${sheet.id}`);
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
}

function sheetsDelete(req, res) {
  Sheet
    .findById(req.params.id)
    .exec()
    .then(sheet => {
      if (!sheet) return res.status(404).render('error', { error: 'No sheet found.'});
      return sheet.remove();
    })
    .then(() => {
      res.redirect('/sheets');
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
}

module.exports = {
  index: sheetsIndex,
  new: sheetsNew,
  show: sheetsShow,
  create: sheetsCreate,
  edit: sheetsEdit,
  update: sheetsUpdate,
  delete: sheetsDelete
};
