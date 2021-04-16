// build your `/api/resources` router here
const router = require('express').Router()

const { getResources } = require('./model')

router.get('/', async (_, res) => {
  const resources = await getResources()
  res.status(200).json(resources)
})

module.exports = router