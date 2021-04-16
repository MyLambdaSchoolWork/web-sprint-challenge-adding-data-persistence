
exports.seed = async function(knex) {
  return knex('tasks').insert([
    { task_description: 'make backend', project_id: 1 },
    { task_description: 'make frontend', task_notes: 'make it pretty', project_id: 1 },
    { task_description: 'idk cook the food', project_id: 2 },
  ])
}
