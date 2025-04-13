function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const number = 5;
  const result = factorial(number);
  console.log(`Факториал числа ${number} равен ${result}`);
  