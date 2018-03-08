const mongoose = require('mongoose')
const CreatureSchemas = require('../db/CreatureSchema')

const Creature= mongoose.model('Creature', CreatureSchemas)

module.exports = { Creature
}
