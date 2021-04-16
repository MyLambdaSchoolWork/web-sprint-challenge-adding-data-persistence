// build your `Resource` model here
const db = require('../../data/dbConfig.js')

module.exports = {
  getResources,
}

function getResources(){
  return db('resources')
}