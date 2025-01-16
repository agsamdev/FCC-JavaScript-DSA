# Review Algorithm

## Project Description
The Review Algorithm project is designed to analyze and evaluate various algorithms through a structured approach. It aims to provide insights into the decision-making processes involved in algorithmic thinking, allowing users to understand how algorithms can be applied to solve real-world problems.

## Algorithmic Thinking
Algorithmic thinking is a fundamental skill that involves breaking down complex problems into manageable parts and developing step-by-step solutions. In this project, we explore several key algorithms:

- **Sorting Algorithms**: Efficiently organizing data for easier access and manipulation.
- **Search Algorithms**: Techniques for finding specific data points within a dataset.
- **Optimization Algorithms**: Strategies for improving performance and efficiency in various tasks.

Each algorithm is implemented with a focus on clarity and efficiency, showcasing the thought process behind algorithm design and implementation.

## Algorithmic Thinking is a Skill

Algorithmic thinking is a critical skill that involves breaking down problems into smaller, manageable parts and developing efficient solutions. In the `Review-Algorithm` project, we implement several algorithms that demonstrate this thinking:

### Example Algorithm: Detecting Full House
One of the key algorithms in our project is the `detectFullHouse` function, which checks if the rolled dice form a Full House (a combination of three of one kind and two of another). Here’s the code snippet:

```javascript
function detectFullHouse(arr) {
    const counts = {};
    arr.forEach(num => counts[num] = (counts[num] || 0) + 1);
    const values = Object.values(counts);
    return values.includes(3) && values.includes(2);
}
```

### rollDice
The `rollDice` function simulates the rolling of five dice. It generates random numbers between 1 and 6, representing the faces of the dice. The results are then displayed on the user interface.

```javascript
const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};
```

### getHighestDuplicates
The `getHighestDuplicates` function identifies the highest number that appears more than once in the array of rolled dice. It counts occurrences of each number and checks if there are duplicates, updating the game state accordingly.

```javascript
const getHighestDuplicates = (arr) => {
  const counts = {};

  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  let highestCount = 0;

  for (const num of arr) {
    const count = counts[num];
    if (count >= 3 && count > highestCount) {
      highestCount = count;
    }
    if (count >= 4 && count > highestCount) {
      highestCount = count;
    }
  }

  const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

  if (highestCount >= 4) {
    updateRadioOption(1, sumOfAllDice);
  }

  if (highestCount >= 3) {
    updateRadioOption(0, sumOfAllDice);
  }

  updateRadioOption(5, 0);
};
```

### updateStats
The `updateStats` function updates the displayed statistics of the game, including the current number of rolls and the round number.

```javascript
const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};
```

### updateScore
The `updateScore` function calculates and updates the player's score based on their selections and the achieved values. It also maintains a history of scores.

```javascript
const updateScore = (selectedValue, achieved) => {
  score += parseInt(selectedValue);
  totalScoreElement.textContent = score;

  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};
```

### resetGame
The `resetGame` function resets the game state, including the dice values, score, round number, and rolls. It prepares the game for a new round by clearing previous data.

```javascript
const resetGame = () => {
  diceValuesArr = [0, 0, 0, 0, 0];
  score = 0;
  round = 1;
  rolls = 0;

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });

  totalScoreElement.textContent = score;
  scoreHistory.innerHTML = "";

  rollsElement.textContent = rolls;
  roundElement.textContent = round;

  resetRadioOptions();
};
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request detailing your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
