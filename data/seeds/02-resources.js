
exports.seed = async function(knex) {
  return knex('resources').insert([
    { resource_name: 'computer', resource_description: 'rock that can do math' },
    { resource_name: 'person', resource_description: 'someone to do the stuff' },
    { resource_name: 'food ingredients', resource_description: 'rice. only rice.' },
  ])
}
