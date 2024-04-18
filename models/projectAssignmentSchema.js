import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectASchema = new Schema ({

    employee_id: {
        type: Number,
        required: true,
    },

    project_code: {
        type: Number,
        required: true
    },

    start_date: {
        type: Date,
        required: true
    },

})

export default mongoose.model("Project_Assignment", projectASchema)