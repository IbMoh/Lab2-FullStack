import Employee from '../models/employeeSchema.js'

const getAllEmp = async (req,res) => {
    try{
        const emp = await Employee.find()
        res.status(200).json({emp})
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

export {getAllEmp}