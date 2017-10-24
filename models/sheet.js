const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({
  charName: { type: String, required: true },
  charClass: { type: String, required: true },
  charLevel: Number,
  charRace: { type: String, required: true },
  charExp: Number,
  charStr: Number,
  charDex: Number,
  charCon: Number,
  charInt: Number,
  charWis: Number,
  charCha: Number,
  charMaxHp: Number,
  charAc: Number,
  charSpells: String,
  charTraits: String,
  charSkills: String,
  charEquip: String,
  charBio: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Sheet', sheetSchema);
