import { dockStart } from '@nlpjs/basic';
import readline from 'readline';

(async () => {
  const dock = await dockStart({use: ['Basic']});
  const nlp = dock.get('nlp');
  nlp.addLanguage('en');

  nlp.addDocument('en', 'goodbye for now', 'greeting.bye');
  nlp.addDocument('en', 'bye bye take care', 'greetings.bye');
  nlp.addDocument('en', 'okay see you later', 'greetings.bye');
  nlp.addDocument('en', 'bye for now', 'greetings.bye');
  nlp.addDocument('en', 'i must go', 'greetings.bye');
  nlp.addDocument('en', 'hello', 'greetings.hello');
  nlp.addDocument('en', 'hi', 'greetings.hello');
  nlp.addDocument('en', 'howdy', 'greetings.hello');
  nlp.addDocument('en', 'shefin', 'name.identified');
  nlp.addAnswer('en', 'greetings.bye', 'Till next time');
  nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
  nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
  nlp.addAnswer('en', 'greetings.hello', 'Greetings!');
  nlp.addAnswer('en', 'name.identified', 'nice to meet you shefin');
  await nlp.train();
  console.log('Training comoplete');
  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function ask() {
  rl.question("you: ", async (input) => {
    const response = await nlp.process('en', input);
    console.log(`Bot: ${response.answer || 'i dont understand it yet'} `);
    ask();
  });
}
ask();
  //console.log(response.answer);
})();