function getVibrationValue(char) {
    const charCode = char.toLowerCase().charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
        return charCode - 96;
    }
    return 0;
}

function calculateVibration(name) {
    if (name === '') {
        return '';
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
            sum = sum.toString().split('').map(Number).reduce((a, b) => a + b);
        }
        return sum;
    };

    const vowelVibration = reduceToSingleDigit(vowelSum);
    const consonantVibration = reduceToSingleDigit(consonantSum);
    const finalSum = reduceToSingleDigit(vowelVibration + consonantVibration);

    return `The 3 digit vibration for input '${name}' is ${vowelVibration} | ${consonantVibration} | ${finalSum}`;
}

function processNames() {
    const textareaValue = document.getElementById('namesTextarea').value;
    const names = textareaValue.split(/[\n,]+/).map(name => name.trim());
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    names.forEach(name => {
        if (name) { // To prevent processing empty names
            outputDiv.innerHTML += calculateVibration(name) + '<br>';
        }
    });
}
