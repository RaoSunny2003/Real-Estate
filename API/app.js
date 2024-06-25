import express, { json } from "express"
import cookieParser from "cookie-parser";
import authRouter from "./Routes/auth.route.js";
import * as dotenv from 'dotenv'

const app = express();
const port = 3000;

dotenv.config()
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, console.log(`Server is running on Port no. ${port}`))