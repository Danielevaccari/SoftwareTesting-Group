import toNumber from '../scripts/toNumber.js';

/**
 * Scenario 1: Search product
 */
describe('scenario 1: Search functionality tests', () => {
    test("should correctly parse numeric filter inputs as numbers", () => {
        expect(toNumber("10")).toBe(10);
        expect(toNumber("20.99")).toBe(20.99);
        expect(toNumber('0b1010')).toBe(10);
        expect(toNumber('0o12')).toBe(10);
        expect(toNumber('0x1A')).toBe(26);
    });

    test('should trim whitespace around numeric search strings before conversion', () => {
        expect(toNumber('   23.5   ')).toBe(23.5);
    });

    test("should return NaN for invalid numeric filter inputs that are non-numeric", () => {
        expect(toNumber("apple")).toBeNaN();
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('+0x123')).toBeNaN();
    });

    test("should handle empty strings and return zero for filter inputs", () => {
        expect(toNumber("")).toBe(0);
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

    test('should handle invalid quantity by returning zero or NaN', () => {
        expect(toNumber('three')).toBeNaN();
        expect(toNumber(Symbol('quantity'))).toBeNaN();
        expect(toNumber({ quantity: 'five' })).toBeNaN();
        expect(toNumber(NaN)).toBeNaN();
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
    });

    test('should handle quantity set to zero for item removal', () => {
        expect(toNumber('0')).toBe(0);
    });

    test('should correctly interpret and sum valid item prices in cart', () => {
        const prices = ['19.99', '5.25', '2.50'];
        const total = prices.reduce((sum, price) => sum + toNumber(price), 0);
        expect(total).toBe(27.74);
    });

    test('should handle prices correctly when adding to cart', () => {
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

    test('should correctly convert cart objects with number-like properties to numbers', () => {
        expect(toNumber({ valueOf: () => 5 })).toBe(5);
        expect(toNumber({ toString: () => '6' })).toBe(6);
        const objWithoutValueOfFunction = { valueOf: "not a function" };
        expect(toNumber(objWithoutValueOfFunction)).toBeNaN();
    });
});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product tests', () => {
    test('should trim input whitespace before converting to number for validation', () => {
        expect(toNumber('   100 ')).toBe(100);
    });

    test('should handle string numeric values in numeric fields (ex: Price and Quantity)', () => {
        expect(toNumber('29.99')).toBe(29.99);
        expect(toNumber('10')).toBe(10);
    });

    test('should handle non-numeric input values in numeric fields (ex: Price and Quantity)', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber('')).toBe(0);
        expect(toNumber({})).toBeNaN();
    });

});