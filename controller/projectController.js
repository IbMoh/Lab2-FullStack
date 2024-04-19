import Project from "../models/projectSchema.js";

const getAllProjects = async (req,res) => {
    try{
        const proj = await Project.find()
        res.status(200).json({proj})
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

const createProject = async (req, res) => {
    try {
        const {project_code, project_name, project_description} = req.body

        const existingProjectCode = await Project.findOne({ project_code })
        if (existingProjectCode) {
            return res.status(400).json({ error: 'Project code must be unique' })
        }

        const proj = await Project.create({project_code, project_name, project_description})
        if(!project_code || !project_name || !project_description){
            res.status(404)
            throw new Error("Please provide us with all details on the project you're creating :)")
        }
        res.status(201).json({proj})

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

export {getAllProjects, createProject}