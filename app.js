const argv = require('yargs').argv

if (!argv.day | !Number.isInteger(argv.day))
  console.error('usage: node app.js --day [number]')

if (argv.day === 1) {
  console.log('day 1 solution!')
}
