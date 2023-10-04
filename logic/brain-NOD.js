import randomNumber from "../random.js";
import runGame from "../welcome.js";

let rules = "Find the greatest common divisor of given numbers.";

let round = () => {
  let number1 = randomNumber();
  let number2 = randomNumber();

  function common(number1, number2) {
    let nod;
    while (number1 != number2) {
      if (number1 > number2) {
        number1 = number1 - number2;
      } else {
        number2 = number2 - number1;
      }
    }
    nod = number1;
    return nod;
  }

  const question = `${number1} ${number2}`;
  const answer = String(common(number1, number2));

  return [question, answer];
};

const NODeGame = () => runGame(rules, round);

export default NODeGame;
