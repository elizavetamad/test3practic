function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const number = 17;
  const result = isPrime(number);
  console.log(`${number} является простым числом: ${result}`);
  