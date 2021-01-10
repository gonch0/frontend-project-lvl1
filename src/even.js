import readlineSync from 'readline-sync';

const MAX_RANDOM_INT = 100;
const MAX_ITERATIONS = 20;
const MAX_WINS_COUNT = 3;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function iterate(randomInt) {
  const answer = readlineSync.question(randomInt);

  const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
  return false;
}

export default function even() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n Answer "yes" if the number is even, otherwise answer "no".`);
  const randomInt = getRandomInt(MAX_RANDOM_INT);

  let i = 0;
  let winsCount = 0;

  while (i < MAX_ITERATIONS) {
    if (winsCount === MAX_WINS_COUNT) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    i += 1;
    if (iterate(randomInt)) {
      winsCount += 1;
    }
  }

  return false;
}
