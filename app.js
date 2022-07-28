// Sum All Odd Fibonacci Numbers


function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  
  sumFibs(4);


  // Sum All Primes

  function sumPrimes(num) {
    
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }


  //Smallest Common Multiple


  function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;

    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1, 5]);