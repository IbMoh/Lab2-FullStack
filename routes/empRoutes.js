import express from 'express'
import { getAllEmp } from '../controller/employeeController.js'

const empRouter = express.Router()

empRouter.get('/', getAllEmp)

export {empRouter}