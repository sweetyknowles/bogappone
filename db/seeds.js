require('dotenv').config()
const mongoose = require('mongoose')

const {Creature}= require('../models/Creature')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection



//async allows to wait for the promises 
const saved = async () => {
  await Creature.remove()
  const zoda = new Creature({name: 'zoda', description: 'redMist'})
  await zoda.save()
  const tinshen = new Creature({name: 'tinshen', description: 'Lord of Horizon'})
  await tinshen.save()
  db.close()
}

saved()