import isEmpty from '../scripts/isEmpty.js';

describe('isEmpty.js general tests', () => {
    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for boolean value true', () => {
        expect(isEmpty(true)).toBe(true);
    });

    test('should return true for boolean value false', () => {
        expect(isEmpty(false)).toBe(true);
    });

    test('should return true for number', () => {
        expect(isEmpty(1)).toBe(true);
    });

    test('should return true for empty string', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('should return false for non-empty string', () => {
        expect(isEmpty("abc")).toBe(false);
    });

    test('should return true for empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return true for empty arguments object', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc()).toBe(true);
    });

    test('should return false for non-empty arguments object', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc(1, 2, 3)).toBe(false);
    });

    test('should return true for empty map', () => {
        const map = new Map();
        expect(isEmpty(map)).toBe(true);
    });

    test('should return false for non-empty map', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);
    });

    test('should return true for empty set', () => {
        const set = new Set();
        expect(isEmpty(set)).toBe(true);
    });

    test('should return false for non-empty set', () => {
        const set = new Set([1, 2, 3]);
        expect(isEmpty(set)).toBe(false);
    });

    test('should return true for empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty object', () => {
        expect(isEmpty({ key: 'value' })).toBe(false);
    });
});

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

    test('should return true for an empty object representing product details', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for a non-empty object representing product details', () => {
        expect(isEmpty({ organic: true, weight: '200g' })).toBe(false);
    });
});