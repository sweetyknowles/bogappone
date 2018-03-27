const mongoose = require("mongoose");
const { CreatureSchema } = require("../db/schemas/CreatureSchema");

const Creature = mongoose.model("Creature", CreatureSchema);

module.exports = {
  Creature
};
