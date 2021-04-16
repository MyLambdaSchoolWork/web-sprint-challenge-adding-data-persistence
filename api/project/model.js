const db = require('../../data/dbConfig.js')

module.exports = {
  getProjects,
  getProjectById,
  insert,
}

function getProjects(){
  return db('projects')
}

function getProjectById(project_id){
  return db('projects')
    .where({ project_id })
    .first()
}

async function insert(project){
  const [id] = await db('projects').insert(project)
  return getProjectById(id)
}
