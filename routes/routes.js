import express from 'express'
import { getAllEmp } from '../controller/employeeController.js'
import { getAllAssignedProjects } from '../controller/projectAcontroller.js'
import {getAllProjects} from '../controller/projectController.js'

const router = express.Router()

router.get('/', getAllEmp).get('/',getAllAssignedProjects).get('/',getAllProjects)

export {router}