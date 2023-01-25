
const arr = process.argv
console.log(arr[2] + arr[3])

let readline = require('readline'); 
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>your name: '
});
rl.prompt();
rl.on('line', (input) => {
  input = input.toLowerCase();
  console.log(input);
  rl.close();
});