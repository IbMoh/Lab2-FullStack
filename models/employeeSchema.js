import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema ({

    employee_id: {
        type: Int64,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    full_name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

})

export default mongoose.model("Employee", employeeSchema)