import projectAssignmentSchema from "../models/projectAssignmentSchema.js";

const getAllAssignedProjects = async (req,res) => {
    try{
        const proj = await projectAssignmentSchema.find()
        res.status(200).json({proj})
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}

const createAssignment = async (req, res) => {
    try {
        const {employee_id, project_code, start_date} = req.body

        const assignment = await projectAssignmentSchema.create({employee_id, project_code, start_date})
        if(!employee_id || !project_code || !start_date){
            res.status(404)
            throw new Error("Please provide us with all details on the assignments :)")
        }
        res.status(201).json({assignment})

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

export {getAllAssignedProjects, createAssignment}