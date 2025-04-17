import { botrplyMessage } from '../corpus/corpus.js';



var savedMessage = ''
export const chatWithBot = async (req, res, next) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ success: false, error: 'Message is required' });
  }

  try {
    const replied = await botrplyMessage(userMessage);
    res.status(200).json({ success: true, reply: `Bot: ${replied}` });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Bot failed to reply', details: error.message });
  }
};
