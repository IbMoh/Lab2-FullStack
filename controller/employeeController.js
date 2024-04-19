import Employee from '../models/employeeSchema.js'
import bcrypt from 'bcrypt'
const rounds = 10

const getAllEmp = async (req,res) => {
    try{
        const emp = await Employee.find()
        res.status(200).json({emp})
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

const createEmployee = async (req, res) => {
    try {
        const {employee_id, email, full_name, password} = req.body

        const existingEmployeeID = await Employee.findOne({ employee_id });
        if (existingEmployeeID) {
            return res.status(400).json({ error: 'Employee code must be unique' });
        }

        const hashedPassword = await bcrypt.hash(password, rounds)

        const emp = await Employee.create({employee_id, email, full_name, password: hashedPassword})
        if(!employee_id || !email || !full_name || !password){
            res.status(404)
            throw new Error("Please Fill in all the needed data :)")
        }
        res.status(201).json({emp})

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export {getAllEmp, createEmployee}