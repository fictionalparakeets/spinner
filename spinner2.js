// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 0
const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer += 200);
};

