const numbers = process.argv.slice(2).map(parseFloat); 

if (numbers.some(isNaN) || numbers.length === 0) {
  console.log("Пожалуйста, укажите числа для вычисления среднего арифметического.");
} else {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  console.log(`Среднее арифметическое: ${average}`);
}
