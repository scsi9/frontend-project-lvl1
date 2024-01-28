import randomNumber from "../random.js";
import runGame from "../bin/brain-games.js";

let rules = "What is the result of the expression?";

let round = () => {
  let number1 = randomNumber();
  let number2 = randomNumber();

  let operator;

  if (number1 > number2) {
    operator = "-";
  } else if (number1 && number2 < 20) {
    operator = "*";
  } else {
    operator = "+";
  }

  let calculate = (number1, number2, operator) => {
    if (operator === "-") {
      return number1 - number2;
    } else if (operator === "*") {
      return number1 * number2;
    } else {
      return number1 + number2;
    }
  };

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));

  return [question, answer];
};

const calcGame = () => runGame(rules, round);

export default calcGame;
