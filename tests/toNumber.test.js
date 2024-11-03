import toNumber from '../scripts/toNumber.js';

describe('toNumber.js general tests', () => {
    test('should return the number when input is already a number', () => {
        expect(toNumber(4)).toBe(4);
        expect(toNumber(0)).toBe(0);
        expect(toNumber('0')).toBe(0);
        expect(toNumber(-Infinity)).toBe(-Infinity);
    });

    test('should convert numeric strings to their equivalent numbers', () => {
        expect(toNumber('4')).toBe(4);
        expect(toNumber('   3.5   ')).toBe(3.5);
        expect(toNumber('0b1010')).toBe(10);
        expect(toNumber('0o12')).toBe(10);
        expect(toNumber('0x1A')).toBe(26);
    });

    test('should return NaN for non-numeric or invalid strings', () => {
        expect(toNumber('abc')).toBeNaN();
        expect(toNumber('+0x123')).toBeNaN();
    });

    test('should correctly convert objects with number-like properties to numbers', () => {
        expect(toNumber({ valueOf: () => 5 })).toBe(5);
        expect(toNumber({ toString: () => '6' })).toBe(6);
        const objWithoutValueOfFunction = { valueOf: "not a function" };
        expect(toNumber(objWithoutValueOfFunction)).toBeNaN();
    });

    test('should handle various non-numeric values, returning NaN or zero appropriately', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
        expect(toNumber(NaN)).toBeNaN();
    });

    test('should return NaN when input is a Symbol', () => {
        const symbol = Symbol('symbol');
        expect(toNumber(symbol)).toBeNaN();
    });
});

/**
 * Scenario 1: Search product
 */
describe('scenario 1: Search functionality tests', () => {
    test("should correctly parse numeric filter inputs as numbers", () => {
        expect(toNumber("10")).toBe(10);
        expect(toNumber("20.99")).toBe(20.99);
    });

    test('should trim whitespace around numeric search strings before conversion', () => {
        expect(toNumber('   23.5   ')).toBe(23.5);
    });

    test("should return NaN for invalid numeric filter inputs that are non-numeric", () => {
        expect(toNumber("apple")).toBeNaN();
        expect(toNumber(undefined)).toBeNaN();
    });
});

/**
 * Scenario 2: Shopping cart functionality
 */
describe('scenario 2: Shopping cart tests', () => {
    test('should convert valid string quantity to a number when adding to cart', () => {
        expect(toNumber('3')).toBe(3);
        expect(toNumber('7.5')).toBe(7.5);
    });

    test('should handle invalid quantity input by returning NaN', () => {
        expect(toNumber('three')).toBeNaN();
        expect(toNumber(Symbol('quantity'))).toBeNaN();
        expect(toNumber({ quantity: 'five' })).toBeNaN();
    });

    test('should return zero or NaN appropriately for null or undefined quantities', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
    });

    test('should handle quantity set to zero for item removal', () => {
        expect(toNumber('0')).toBe(0);
    });

    test('should correctly interpret and sum valid item quantities in cart', () => {
        const quantities = ['5', '2.5', '10'];
        const total = quantities.reduce((sum, qty) => sum + toNumber(qty), 0);
        expect(total).toBe(17.5);
    });

    test('should hamdle prices correctly when adding to cart', () => {
        expect(toNumber('19.99')).toBe(19.99);
        expect(toNumber('7.5')).toBe(7.5);
    });

    test('should return zero or NaN appropriately for null or undefined prices', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
    });

    test('should handle zero price when the cart is empty', () => {
        expect(toNumber('0')).toBe(0);
    });

    test('should correctly interpret and sum valid item prices in cart', () => {
        const prices = ['19.99', '5.25', '2.50'];
        const total = prices.reduce((sum, price) => sum + toNumber(price), 0);
        expect(total).toBe(27.74);
    });
});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product tests', () => {
    test('should trim input whitespace before converting to number for validation', () => {
        expect(toNumber('   100 ')).toBe(100);
    });

    test('should correctly convert price and quantity strings to numbers', () => {
        expect(toNumber('29.99')).toBe(29.99);
        expect(toNumber('10')).toBe(10);
    });

    test('should handle non-numeric price values by returning NaN or zero as appropriate', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
    });

    test('should handle non-numeric quantity values by returning NaN or zero as appropriate', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
    });
});