import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default userName;