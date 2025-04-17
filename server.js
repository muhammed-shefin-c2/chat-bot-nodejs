import dotenv from 'dotenv';
import express from 'express';
import { bots } from './routes/bots.js';

dotenv.config({path: './config/config.env'});

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 7830;

app.use('/bot', bots);

app.listen(PORT, () => {
  console.log(`Listening on ${process.env.NODE_ENV} on ${PORT}`);
})