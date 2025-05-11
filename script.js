export function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function reverseString(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }

    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]; // Concatenar caracteres en orden inverso
    }
    return reversedString;
}

export const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    substract(num1, num2) {
        return num1 - num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
    divide(num1, num2) {
        return num1 / num2;
    }
}

export function caesarCipher(string, shift) {
    if (typeof string !== 'string' || typeof shift !== 'number') {
        return '';
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();

    return string.split('').map(char => {
        if (alphabet.includes(char)) {
            const newIndex = (alphabet.indexOf(char) + shift) % 26;
            return alphabet[newIndex < 0 ? newIndex + 26 : newIndex];
        } else if (alphabetUpper.includes(char)) {
            const newIndex = (alphabetUpper.indexOf(char) + shift) % 26;
            return alphabetUpper[newIndex < 0 ? newIndex + 26 : newIndex];
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}

export function analyzeArray(arr) {
    const averageFunc = arr => {
        const sum = arr.reduce((acc, val) => {
            return acc + val;
        }, 0);
        return sum / arr.length;
    }

    const minFunc = arr => {
        let min = Infinity;
        arr.forEach(element => {
            if (element < min) min = element;
        });
        return min;
    }

    const maxFunc = arr => {
        let max = -Infinity;
        arr.forEach(element => {
            if (element > max) max = element;
        });
        return max;
    }

    const average = averageFunc(arr);
    const min = minFunc(arr);
    const max = maxFunc(arr);
    const length = arr.length;

    return { average, min, max, length}
}