
exports.seed = async function(knex) {
  return knex('projects').insert([
    { project_name: 'Code Website' },
    { project_name: 'Make Dinner' },
  ])
}
