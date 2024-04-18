import projectAssignmentSchema from "../models/projectAssignmentSchema.js";

const getAllAssignedProjects = async (req,res) => {
    try{
        const proj = await projectAssignmentSchema.find()
        res.status(200).json({proj})
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

export {getAllAssignedProjects}