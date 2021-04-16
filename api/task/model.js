// build your `Task` model here
const db = require('../../data/dbConfig.js')

module.exports = {
  getTasks,
  getTaskById,
  insert,
}

function getTasks(){
  return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_notes',
      't.task_description',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
}

function getTaskById(task_id){
  return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_notes',
      't.task_description',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .where({task_id})
    .first()
}

async function insert(task){
  const [id] = await db('tasks').insert(task)
  return getTaskById(id)
}
