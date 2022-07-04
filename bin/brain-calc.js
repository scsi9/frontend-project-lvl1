import readlineSync from 'readline-sync'

let max = 100;
let randomNumber = function getRandomInt() {
    return Math.floor(Math.random() * max);
};

console.log('Welcome to the Brain Games!')
let name = readlineSync.question('May I have your name? ');
let welcomeCalc = ('What is the result of the expression?');
console.log('Hello' + ' ' + name);
console.log(welcomeCalc);

for (let i = 0; i <= 3;) {

    let end = ('Congratulations, ' + name + '!')
    if (i === 3) {
        console.log(end);
        break;
    }

    let temp1 = randomNumber();
    let temp2 = randomNumber();
    
    let sign;

    if (temp1 > temp2) {
        sign = '-';
    } else if (temp1 && temp2 < 20) {
        sign = '*';
    } else {
        sign = '+';
    }

    let exam = temp1 + ' ' + sign + ' ' + temp2;
    
    let calc;
    if (temp1 > temp2){
        calc = temp1 - temp2;
    } else if (temp1 && temp2 < 10) {
        calc = temp1 * temp2;
    } else {
        calc = temp1 + temp2;
    }

    console.log(exam);
    console.log("Qestion:" + ' ' + exam);
    let yourAnswer = readlineSync.question('Your answer:');

    if (yourAnswer == calc) {
        console.log('Correct');
        i++;
    } else {
        console.log(yourAnswer + ' is wrong answer;(. Correct answer was ' + calc + ' Lets try again ' + name);
        break;
    }

}
