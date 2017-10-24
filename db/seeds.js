const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');
mongoose.connect(dbUri, { useMongoClient: true });

const User = require('../models/user');
const Sheet = require('../models/sheet');

 // User.collection.drop();
Sheet.collection.drop();
// User
//   .create([{
//     firstName: 'Nate',
//     lastName: 'Welfare',
//     email: 'nate@nate.com',
//     userName: 'nafter',
//     password: 'password'
//   },{
//     firstName: 'Dave',
//     lastName: 'Bloggs',
//     email: 'dave@blogster.com',
//     userName: 'bloggy',
//     password: 'password'
//   }])
//   .then((users) => {
//     console.log(`${users.length} users created!`);
//
//     return
Sheet.create([{
  charName: 'Blath',
  charClass: 'Ranger',
  charLevel: 3,
  charRace: 'Half-Elf',
  charExp: 1600,
  charStr: 8,
  charDex: 9,
  charCon: 10,
  charInt: 11,
  charWis: 12,
  charCha: 13,
  charMaxHp: 30,
  charAc: 14,
  charSpells: 'talk to animals',
  charTraits: 'beastmaster',
  charSkills: 'nature',
  charEquip: 'longsword +1',
  CreatedBy: 'Admin'
},{
  charName: 'Moffat',
  charClass: 'Druid',
  charLevel: 3,
  charRace: 'Wood Elf',
  charExp: 1300,
  charStr: 8,
  charDex: 9,
  charCon: 10,
  charInt: 11,
  charWis: 12,
  charCha: 13,
  charMaxHp: 30,
  charAc: 14,
  charSpells: 'moonfire',
  charTraits: 'of the Moon',
  charSkills: 'medicine',
  charEquip: 'Staff',
  createdBy: 'Admin'
}])
//    })
  .then((sheets) => {
    console.log(`${sheets.length} character sheets created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
