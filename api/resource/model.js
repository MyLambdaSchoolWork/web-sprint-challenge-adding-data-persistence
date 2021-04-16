const db = require('../../data/dbConfig.js')

module.exports = {
  getResources,
  getResourceById,
  insert,
}

function getResources(){
  return db('resources')
}

function getResourceById(resource_id){
  return db('resources')
    .where({resource_id})
    .first()
}

async function insert(resource){
  const [id] = await db('resources').insert(resource)
  return getResourceById(id)
}
