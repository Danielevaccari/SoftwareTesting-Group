import toNumber from '../scripts/toNumber.js';

describe('toNumber.js general tests', () => {
    test('returns the number when input is a number', () => {
        expect(toNumber(4)).toBe(4);
        expect(toNumber(0)).toBe(0);
        expect(toNumber('0')).toBe(0);
        expect(toNumber(-Infinity)).toBe(-Infinity);
    });

    test('converts string inputs to numbers', () => {
        expect(toNumber('4')).toBe(4);
        expect(toNumber('   3.5   ')).toBe(3.5);
        expect(toNumber('0b1010')).toBe(10);
        expect(toNumber('0o12')).toBe(10);
        expect(toNumber('0x1A')).toBe(26);
    });

    test('returns NaN for invalid string inputs', () => {
        expect(toNumber('abc')).toBeNaN();
        expect(toNumber('+0x123')).toBeNaN();
    });

    test('converts objects to numbers correctly', () => {
        expect(toNumber({ valueOf: () => 5 })).toBe(5);
        expect(toNumber({ toString: () => '6' })).toBe(6);
        const objWithoutValueOfFunction = { valueOf: "not a function" };
        expect(toNumber(objWithoutValueOfFunction)).toBeNaN();
    });

    test('converts non-numeric values to numbers', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
        expect(toNumber(NaN)).toBeNaN();
    });

    test('returns NaN for Symbol inputs', () => {
        const symbol = Symbol('symbol');
        expect(toNumber(symbol)).toBeNaN();
    });
});

/**
 * Scenario 1: Search product
 */
describe('scenario 1: Search functionality tests', () => {
    test("parses valid numeric filter inputs", () => {
        expect(toNumber("10")).toBe(10);
        expect(toNumber("20.99")).toBe(20.99);
    });

    test('trims whitespace and converts numeric strings correctly', () => {
        expect(toNumber('   23.5   ')).toBe(23.5);
    });

    test("returns NaN for invalid numeric inputs", () => {
        expect(toNumber("apple")).toBeNaN();
        expect(toNumber(undefined)).toBeNaN();
    });
});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product', () => {
    test('converts price and quantity inputs to numbers', () => {
        expect(toNumber('29.99')).toBe(29.99);
        expect(toNumber('10')).toBe(10);
    });

    test('trims input with whitespace before validating', () => {
        expect(toNumber('   100 ')).toBe(100);
    });

    test('validate product price by converting non-numeric values to numbers', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
    });

    test('validate product quantity by converting non-numeric values to numbers', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
    });
});