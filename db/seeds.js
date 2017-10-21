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
  }],(err, users) => {
    if(err) console.log(err);
    if(users) console.log(`${users.length} users created!`);

    mongoose.connection.close();
  });
