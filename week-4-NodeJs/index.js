// create a CLI to count the number of lines in a file

const { Command } = require('commander');
const program = new Command();

program
  .name('file counters')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('countLines')
  .description('count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    const fs = require('fs');
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === '\n') {
          total++;
        }
        // console.log(data[i]);
      }
      console.log(`total number of lines in ${file} is ${total}`);
    });
  });

program.parse();