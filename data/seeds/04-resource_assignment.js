
exports.seed = async function(knex) {
  return knex('resource_assignments').insert([
    { resource_id: 1, project_id: 1},
    { resource_id: 2, project_id: 1},
    { resource_id: 2, project_id: 2},
    { resource_id: 3, project_id: 2},
  ])
}
