import readlineSync from 'readline-sync';

const MAX_RANDOM_INT = 100;
// const MAX_ITERATIONS = 20;
const WINS = 3;

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
  while (i < WINS) {
    if (iterate(randomInt)) {
      i += 1;
    }
  }
}