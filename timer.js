// process.stdout.write('\x07');
//no beep sound on my OS ^
// process.stdout.write('\.');

let timer;

let args = process.argv.slice(2);


for (let i = 0; i < args.length; i++) {
  const edgeCases = (args[i] === undefined || args[i] < 0 || isNaN(Number(args[i])));

  if (edgeCases) {
    // console.log(`edge case at index ${i}`);
  } else {
    timer = args[i] * 1000;
    setTimeout(() => {
      process.stdout.write('\.');
      process.stdout.write('\x07');
    }, timer);
  }
}
