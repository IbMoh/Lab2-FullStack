import Project from "../models/projectSchema.js";

const getAllProjects = async (req,res) => {
    try{
        const proj = await Project.find()
        res.status(200).json({proj})
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

export {getAllProjects}