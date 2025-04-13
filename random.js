const crypto = require('crypto');

crypto.randomBytes(4, (err, buffer) => {
  if (err) {
    console.error(err);
    return;
  }

  const randomNumber = buffer.readUInt32BE(0) % 100 + 1; 
  console.log(`Случайное число: ${randomNumber}`);
});
