import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('Your name? ');
console.log('Hello' + ' ' + name)