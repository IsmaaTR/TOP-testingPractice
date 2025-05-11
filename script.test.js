import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script.js";

//Testing capitalize function
test('Capitalize string', () => {
    expect(capitalize('abcd')).toBe('Abcd');
});
test('Capitalize capitalized string', () => {
    expect(capitalize('ABCD')).toBe('Abcd');
});
test('Capitalize empty string', () => {
    expect(capitalize('')).toBe('');
});
test('Capitalize numbers', () => {
    expect(capitalize('12345')).toBe('12345');
});

//Testing reverseString function
test('Reverse string', () => {
    expect(reverseString('abcd')).toBe('dcba');
});
test('Reverse string with numbers', () => {
    expect(reverseString('Abc123d')).toBe('d321cbA');
});
test('Reverse empty string', () => {
    expect(reverseString('')).toBe('');
});

//Testing calculator object
test('Calculator add', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test('Calculator add negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
});
test('Calculator add floating point numbers', () => {
    expect(calculator.add(1.5, 2.3)).toBeCloseTo(3.8);
});

test('Calculator substract', () => {
    expect(calculator.substract(5, 1)).toBe(4);
});
test('Calculator substract negative numbers', () => {
    expect(calculator.substract(-1, 2)).toBe(-3);
});
test('Calculator substract floating point numbers', () => {
    expect(calculator.substract(5.2, 2.1)).toBeCloseTo(3.1);
});

test('Calculator divide', () => {
    expect(calculator.divide(20, 4)).toBe(5);
});
test('Calculator divide negative numbers', () => {
    expect(calculator.divide(-20, 4)).toBe(-5);
});
test('Calculator divide floating point numbers', () => {
    expect(calculator.divide(10.5, 2.2)).toBeCloseTo(4.77);
});

test('Calculator multiply', () => {
    expect(calculator.multiply(20, 4)).toBe(80);
});
test('Calculator multiply negative numbers', () => {
    expect(calculator.multiply(-20, 4)).toBe(-80);
});
test('Calculator multiply floating point numbers', () => {
    expect(calculator.multiply(4.5, 2)).toBeCloseTo(9);
});

//Testing caesarCipher function
test('Caesar Cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('Caesar Cipher with capital letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('Caesar Ciphe with punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

//Testing analyzeArray function
test('Average', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test('Min', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test('Max', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test('Length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});