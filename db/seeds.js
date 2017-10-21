const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');
mongoose.connect(dbUri, { useMongoClient: true });

const User = require('../models/user');

User.collection.drop();

User
  .create([{
    firstName: 'Nate',
    lastName: 'Welfare',
    email: 'nate@nate.com',
    userName: 'nafter'
  },{
    firstName: 'Dave',
    lastName: 'Bloggs',
    email: 'dave@blogster.com',
    userName: 'bloggy'
  }])
  .then((users) => {
    console.log(`${users.length} computers created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
