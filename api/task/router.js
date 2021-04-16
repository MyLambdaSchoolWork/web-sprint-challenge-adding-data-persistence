const router = require('express').Router()

const tasks = require('./model.js')
const projects = require('../project/model.js')

// middleware but it's only used here.
// I'd move it to a middleware file if there was more than one,
// or if it was used multiple places
async function checkProjectId(req, res, next){
  if(typeof(req.body.project_id) === 'number'){
    const project = await projects.getProjectById(req.body.project_id)
    project
      ? next()
      : res.status(400).json(`Project with id ${req.body.project_id} does not exist`)
  } else {
    res.status(400).json('project_id integer required')
  }
}

router.get('/', async (_, res) => {
  const allTasks = await tasks.getTasks()
  res.status(200).json(allTasks.map( task => ({
    ...task,
    task_completed: task.task_completed === 1 // there's gotta be a better way...
  })))
})

router.post('/', checkProjectId, async (req, res) => {
  const {
    task_description,
    task_notes,
    task_completed = false,
    project_id,
  } = req.body

  if(typeof(task_description) === 'string'){
    const newTask = await tasks.insert({
      task_description,
      task_notes,
      task_completed,
      project_id,
    })
    res.status(201).json({
      ...newTask,
      task_completed: newTask.task_completed === 1
    })
  } else {
    res.status(400).json('task_description string required')
  }
})

module.exports = router
