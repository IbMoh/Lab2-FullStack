import express from 'express'
import { getAllProjects, createProject } from '../controller/projectController.js'
import {getAllAssignedProjects, createAssignment} from '../controller/projectAcontroller.js'

const asRouter = express.Router()
const projRouter = express.Router()

projRouter.get('/', getAllProjects).post('/', createProject)
asRouter.get('/', getAllAssignedProjects).post('/', createAssignment)

export {projRouter, asRouter}