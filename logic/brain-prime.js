import randomNumber from "../random.js";
import runGame from "../bin/brain-games.js";

let rules = "Answer 'yes' if given number is prime. Otherwise answer 'no'";

let round = () => {
  let number = randomNumber();

  function isPrime(number) {
    if (number < 2) {
      return "no";
    }
    let divider = 2;
    while (divider <= number / 2) {
      if (number % divider === 0) {
        return "no";
      }
      divider += 1;
    }
    return "yes";
  }

  const question = number;
  const answer = String(isPrime(number));

  return [question, answer];
};

const primeGame = () => runGame(rules, round);

export default primeGame;
