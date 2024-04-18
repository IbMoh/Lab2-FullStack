import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema ({

    project_code: {
        type: Number,
        required: true
    },

    project_name: {
        type: String,
        required: true
    },

    project_description: {
        type: String,
        required: true
    },

})

export default mongoose.model("Project", projectSchema)