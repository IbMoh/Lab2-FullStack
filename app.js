import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'


dotenv.config()
const port = process.env.PORT
const app = express()
connectDb()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req,res) => {
    res.send("helloo")
})

app.listen(port, () => {
    console.log(`listening on port: ${process.env.PORT}`);
})