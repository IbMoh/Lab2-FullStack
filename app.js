import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url';
import {empRouter} from './routes/empRoutes.js'
import { connectDb } from './config/db.js'
import { projRouter, asRouter } from './routes/projRouter.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config()
const port = process.env.PORT
const app = express()
connectDb()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'lab2-react', 'dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lab2-react', 'dist', 'index.html'));
})

app.use('/api/employees', empRouter)
app.use('/api/projects', projRouter)
app.use('/api/project_assignments', asRouter)

app.listen(port, () => {
    console.log(`listening on port: ${process.env.PORT}`);
})