const argv = require('yargs').argv

if (!argv.day | !Number.isInteger(argv.day))
  console.error('usage: node app.js --day [number]')

console.log(`day ${argv.day} solution!`)
