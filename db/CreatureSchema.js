const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CreatureSchema = new Schema({
  name: String,
  description: String
})



module.exports = {
  CreatureSchema
}