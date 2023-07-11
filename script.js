function getVibrationValue(char) {
  const charCode = char.toLowerCase().charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    return charCode - 96; // 'a' has vibration value 1, 'b' has vibration value 2, and so on
  }
  return 0; // If the character is not a letter, return 0
}

function calculateVibration() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();

  if (name === '') {
    return; // Exit if input is empty
  }

  let vowelSum = 0;
  let consonantSum = 0;

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    const vibrationValue = getVibrationValue(char);

    if (vibrationValue > 0) {
      if (char.toLowerCase().match(/[aeiou]/)) {
        vowelSum += vibrationValue;
      } else {
        consonantSum += vibrationValue;
      }
    }
  }

  const reduceToSingleDigit = (sum) => {
    while (sum > 9) {
      sum = sum
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
    }
    return sum;
  };

  const vowelVibration = reduceToSingleDigit(vowelSum);
  const consonantVibration = reduceToSingleDigit(consonantSum);
  const finalSum = reduceToSingleDigit(vowelVibration + consonantVibration);

  const outputDiv = document.getElementById('output');
  const result = `The 3 digit vibration for input '${name}' is ${vowelVibration} | ${consonantVibration} | ${finalSum}`;
  outputDiv.innerHTML = result;
}

// Example usage
// You can remove the previous usage example
