import { dockStart } from '@nlpjs/basic';

let nlp = null;

export async function botrplyMessage(message) {
  if (!nlp) {
    const dock = await dockStart('./corpus/conf.json'); // ✅ CORRECT PATH NOW
    nlp = dock.get('nlp');

    if (!nlp) {
      throw new Error('❌ NLP instance not found. Check your conf.json or corpus path.');
    }
    await nlp.train();
  }

  const response = await nlp.process('en', message);
  return response.answer;
}
