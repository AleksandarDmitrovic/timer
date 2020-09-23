const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What time would you like the timer to beep? :) (ctrl + c to exit) ", (answer) => {
  let timer;
  let time = answer;
  const edgeCases = (time === undefined || time < 0 || isNaN(Number(time)));

  if (time === 'b') {
    process.stdout.write('\.');
  } else if (edgeCases) {
    console.log(`${time} is not a number`);
  } else {
    timer = time * 1000;
    process.stdout.write(`setting timer for ${time} seconds:->`);
    setTimeout(() => {
      process.stdout.write('\n\.\n');
      process.stdout.write('\x07');
    }, timer);
  }
  rl.on('SIGINT', function() {
    process.stdout.write("Thanks for using me, ciao! \n");
    rl.close();
  });
});