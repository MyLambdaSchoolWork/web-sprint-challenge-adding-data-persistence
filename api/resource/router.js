const router = require('express').Router()

const resources = require('./model.js')

router.get('/', async (_, res) => {
  const allResources = await resources.getResources()
  res.status(200).json(allResources)
})


// not using middleware
// because this is the only place resource has to be validated
router.post('/', (req, res) => {
  const {
    resource_name,
    resource_description
  } = req.body

  if(typeof(resource_name) === 'string'){
    resources.insert({ resource_name, resource_description})
      .then( newResource => {
        res.status(201).json(newResource)
      })
      .catch( () => {
        res.status(400).json('resource_name must be unique')
      })
  } else {
    res.status(400).json('resource_name required string')
  }
})

module.exports = router
