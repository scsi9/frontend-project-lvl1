import readlineSync from "readline-sync";

const run = (rules, round) => {
  console.log("Welcome to the Brain Games!");

  let name = readlineSync.question("Your name? ");
  console.log("Hello" + " " + name);
  console.log(rules);

  const maxRound = 3;

  for (let i = 0; i < maxRound; i++) {
    const [question, answer] = round();
    console.log(`Question: ${question}`);

    let yourAnswer = readlineSync.question("Your answer is:");

    if (yourAnswer !== answer) {
      console.log(
        `'${yourAnswer}' is wrong answer : (. Correct answer was '${answer}'`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log(`Correct!`);
  }
  console.log(`Congratulations, ${name}`);
};

export default run;
