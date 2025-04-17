import express from 'express';
const router = express.Router();
import { chatWithBot } from '../controller/bots.js';

router.route('/chatbot').post(chatWithBot);

//router.route('/replied').get(sendResponse);

export const bots = router;