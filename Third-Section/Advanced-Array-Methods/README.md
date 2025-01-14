# Statistics Calculator - Advanced Array Methods

![](statistics-calculator.gif)

This document outlines the advanced array methods used in the Statistics Calculator application.

## Statistical Calculations Explained

### Mean (Average)
The mean is calculated by summing all numbers and dividing by the count of numbers.
```javascript
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
```
Example: For [1, 2, 3, 4, 5]
- Sum = 1 + 2 + 3 + 4 + 5 = 15
- Count = 5
- Mean = 15 ÷ 5 = 3

### Median (Middle Value)
The median is found by:
1. Sorting the numbers
2. If odd count: taking the middle number
3. If even count: averaging the two middle numbers
```javascript
const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}
```
Example: 
- Odd count [1, 2, 3, 4, 5] → median = 3
- Even count [1, 2, 3, 4] → median = (2 + 3) ÷ 2 = 2.5

### Mode (Most Frequent)
The mode is found by:
1. Counting occurrences of each number
2. Finding the number(s) with highest frequency
3. If all numbers appear equally often, return null
```javascript
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}
```
Example:
- [1, 2, 2, 3, 4, 4, 4] → mode = 4 (appears three times)
- [1, 1, 2, 2, 3, 3] → mode = "1, 2, 3" (all appear twice)
- [1, 2, 3, 4] → mode = null (all appear once)

### Range (Spread)
The range is the difference between the largest and smallest numbers.
```javascript
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}
```
Example: For [1, 2, 3, 4, 5]
- Max = 5
- Min = 1
- Range = 5 - 1 = 4

### Variance (Average Squared Deviation)
Variance measures spread by:
1. Finding the mean
2. Calculating differences from mean
3. Squaring differences
4. Averaging squared differences
```javascript
const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}
```
Example: For [1, 2, 3, 4, 5]
- Mean = 3
- Differences = [-2, -1, 0, 1, 2]
- Squared = [4, 1, 0, 1, 4]
- Variance = (4 + 1 + 0 + 1 + 4) ÷ 5 = 2

### Standard Deviation
Square root of variance, showing spread in original units.
```javascript
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}
```
Example: For [1, 2, 3, 4, 5]
- Variance = 2
- Standard Deviation = √2 ≈ 1.414

## Array Methods Used

### 1. `reduce()`
Used in multiple functions for accumulating values:

In `getMean()` to calculate average:
```javascript
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
```

In `getVariance()` to sum squared differences:
```javascript
const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}
```

### 2. `toSorted()`
Used in `getMedian()` to create a new sorted array:
```javascript
const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}
```

### 3. `forEach()`
Used in `getMode()` to count occurrences:
```javascript
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  // ... rest of the function
}
```

### 4. `filter()`
Used in multiple places:

In `getMode()` to find numbers with highest frequency:
```javascript
const mode = Object.keys(counts).filter(
  (el) => counts[el] === counts[highest]
);
```

In `calculate()` to remove NaN values:
```javascript
const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
```

### 5. `map()`
Used in `calculate()` to convert strings to numbers:
```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  // ... rest of the function
}
```

### 6. `split()`
Used in `calculate()` to convert input string to array:
```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  // ... rest of the function
}
```

## Additional Array-Related Features

### 1. Spread Operator (...)
Used in `getRange()` to find min and max values:
```javascript
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}
```

### 2. Set Object
Used in `getMode()` to check for unique values:
```javascript
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  // ... rest of the function
}
```

## Example Usage
```javascript
// Input: "1, 2, 2, 3, 4, 4, 4, 5"
calculate();
// Outputs:
// Mean: 3.125
// Median: 3.5
// Mode: 4
// Range: 4
// Variance: 1.609375
```

## Notes
- The calculator handles both single and multiple mode cases
- NaN values are automatically filtered out
- The calculator supports comma-separated input values
- All calculations are performed in real-time as the user inputs values
