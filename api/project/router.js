const router = require('express').Router()

const projects = require('./model.js')

router.get('/', async (_, res) => {
  const allProjects = await projects.getProjects()
  // I don't like looping through to change 0/1 to false/true.
  // If you know a better way please let me know
  // I tried typeCast but can't get it to work
  res.status(200).json(allProjects.map( project => ({
    ...project,
    project_completed: project.project_completed === 1
  })))
})

router.post('/', async (req, res) => {
  const {
    project_name,
    project_description,
    project_completed = false,
  } = req.body

  if(typeof(project_name) === 'string'){
    const newProject = await projects.insert({ project_name, project_description, project_completed})
    res.status(201).json({
      ...newProject,
      project_completed: newProject.project_completed === 1 // kind of a hack because typeCast doesn't work
    })
  } else {
    res.status(400).json('project_name string required')
  }
})

module.exports = router
