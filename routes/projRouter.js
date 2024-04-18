import express from 'express'
import { getAllProjects } from '../controller/projectController.js'
import {getAllAssignedProjects} from '../controller/projectAcontroller.js'

const asRouter = express.Router()
const projRouter = express.Router()

projRouter.get('/', getAllProjects)
asRouter.get('/', getAllAssignedProjects)

export {projRouter, asRouter}