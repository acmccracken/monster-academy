const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const monsterSchema = new Schema({
  name: String,
  hp: Number,
  mp: Number,
  attack: Number,
  defense: Number,

}, { timestamps: true });

module.exports = mongoose.model('Monster', monsterSchema);
