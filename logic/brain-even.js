import randomNumber from "../random.js";
import runGame from "../bin/brain-games.js";

function even(number) {
  return number % 2 === 0;
}

let rules = "Answer 'yes' if the number is even, otherwise answer 'no'.";

let round = () => {
  let question = randomNumber();
  let answer = even(question) ? "yes" : "no";
  return [question, answer];
};

const evenGame = () => runGame(rules, round);

export default evenGame;
