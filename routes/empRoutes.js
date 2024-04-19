import express from 'express'
import { getAllEmp, createEmployee } from '../controller/employeeController.js'

const empRouter = express.Router()

empRouter.get('/', getAllEmp).post('/', createEmployee)

export {empRouter}