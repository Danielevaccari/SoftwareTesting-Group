import isEmpty from '../scripts/isEmpty.js';

/**
 * Scenario 1: Search functionality
 */
describe('scenario 1: Search functionality tests', () => {
    test('should return true for null search input', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('should return true for empty string in search input', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('should return false for non-empty search input', () => {
        expect(isEmpty("Apple Juice")).toBe(false);
    });

    test('should return true for an empty array of search results', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for a non-empty array of search results', () => {
        expect(isEmpty(['Apple', 'Juice', 'Snacks'])).toBe(false);
    });

    test('should return true for undefined search input', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for empty arguments object in search functionality', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc()).toBe(true);
    });

    test('should return false for non-empty arguments object in search functionality', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc(1, 2, 3)).toBe(false);
    });

});

/**
 * Scenario 2: Shopping cart functionality
 */
describe('scenario 2: Shopping cart Tests', () => {
    test('should return true for an empty shopping cart object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for a shopping cart with items', () => {
        expect(isEmpty({ apple: 2, banana: 3 })).toBe(false);
    });

    test('should return true for an empty array representing cart items', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for a non-empty array representing cart items', () => {
        expect(isEmpty(['apple', 'banana'])).toBe(false);
    });

    test('should return true for an empty map representing cart items', () => {
        const cartMap = new Map();
        expect(isEmpty(cartMap)).toBe(true);
    });

    test('should return false for a non-empty map representing cart items', () => {
        const cartMap = new Map([['apple', 3]]);
        expect(isEmpty(cartMap)).toBe(false);
    });

});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product tests', () => {
    test('should return true for an empty input fields', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('should return false for a non-empty input fields', () => {
        expect(isEmpty("Organic Olive Oil")).toBe(false);
    });

    test('should return true for an empty array of product features', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for a non-empty array of product features', () => {
        expect(isEmpty(['Gluten-Free', 'Vegan', 'Non-GMO'])).toBe(false);
    });

    test('should return true for undefined product input', () => {
        expect(isEmpty(undefined)).toBe(true);
    });
});