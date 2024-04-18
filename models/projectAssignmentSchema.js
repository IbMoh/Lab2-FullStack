import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectASchema = new Schema ({

    employee_id: {
        type: Int64,
        required: true,
    },

    project_code: {
        type: Int64,
        required: true
    },

    start_date: {
        type: Date,
        required: true
    },

})

export default mongoose.model("Project_Assignment", projectASchema)