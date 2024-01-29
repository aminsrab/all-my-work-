// write-file.js
const fs = require('fs');

const contentToWrite = 'Hello Node';

fs.writeFile('welcome.txt', contentToWrite, (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created with content:', contentToWrite);
});
