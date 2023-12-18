
export function generateFibonacciObjects(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [{ value: 0, isSelected: false }];
  } else if (n === 2) {
    return [
      { value: 0, isSelected: false },
      { value: 1, isSelected: false },
    ];
  } else {
    let fibonacciSequence = [
      { value: 0, isSelected: false },
      { value: 1, isSelected: false },
    ];

    for (let i = 2; i < n; i++) {
      const nextValue =
        fibonacciSequence[i - 1].value + fibonacciSequence[i - 2].value;
      fibonacciSequence.push({ value: nextValue, isSelected: false });
    }

    return fibonacciSequence;
  }
}

// Example usage:
const numberOfValues = 8;
const fibonacciObjectsArray = generateFibonacciObjects(numberOfValues);
console.log(fibonacciObjectsArray);
