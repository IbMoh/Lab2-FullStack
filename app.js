import express from 'express'
import dotenv from 'dotenv'
import {empRouter} from './routes/empRoutes.js'
import { connectDb } from './config/db.js'
import { projRouter, asRouter } from './routes/projRouter.js'


dotenv.config()
const port = process.env.PORT
const app = express()
connectDb()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use('/api/employees', empRouter)
app.use('/api/projects', projRouter)
app.use('/api/assigned', asRouter)

app.listen(port, () => {
    console.log(`listening on port: ${process.env.PORT}`);
})