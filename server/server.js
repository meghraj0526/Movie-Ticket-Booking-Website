import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './configs/db.js';

const app = express();
const port = 3000;

await connectDB();

//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => res.send('server is live'))

app.listen(port, () => console.log(`server listening at http://localhost:${port}`));
