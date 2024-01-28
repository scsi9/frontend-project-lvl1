import randomNumber from "../random.js";
import runGame from "../bin/brain-games.js";

let rules = "What number is missing in the progression?";

let round = () => {
  let step = Math.ceil(randomNumber() / 10);
  let pass = Math.ceil(randomNumber() / 10);
  let begin = Math.ceil(randomNumber() / 10);
  let passNumber;

  function progress(begin, step) {
    for (let y = 1; y <= 10; y++) {
      let vievStep = begin + step * (y - 1);
      if (y === pass) {
        console.log("...");
        passNumber = vievStep;
        continue;
      }
      console.log(vievStep);
    }
    return passNumber;
  }

  const question = progress(begin, step);
  const answer = String(passNumber);

  return [question, answer];
};

const progressionGame = () => runGame(rules, round);

export default progressionGame;
