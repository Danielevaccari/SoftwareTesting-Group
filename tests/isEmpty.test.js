import isEmpty from '../scripts/isEmpty.js';

describe('isEmpty.js general tests', () => {
    test('returns true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('returns true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('returns true for boolean value true', () => {
        expect(isEmpty(true)).toBe(true);
    });

    test('returns true for boolean value false', () => {
        expect(isEmpty(false)).toBe(true);
    });

    test('returns true for number', () => {
        expect(isEmpty(1)).toBe(true);
    });

    test('returns true for empty string', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('returns false for non-empty string', () => {
        expect(isEmpty("abc")).toBe(false);
    });

    test('returns true for empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false for non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('returns true for empty arguments object', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc()).toBe(true);
    });

    test('returns false for non-empty arguments object', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc(1, 2, 3)).toBe(false);
    });

    test('returns true for empty map', () => {
        const map = new Map();
        expect(isEmpty(map)).toBe(true);
    });

    test('returns false for non-empty map', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);
    });

    test('returns true for empty set', () => {
        const set = new Set();
        expect(isEmpty(set)).toBe(true);
    });

    test('returns false for non-empty set', () => {
        const set = new Set([1, 2, 3]);
        expect(isEmpty(set)).toBe(false);
    });

    test('returns true for empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('returns false for non-empty object', () => {
        expect(isEmpty({ key: 'value' })).toBe(false);
    });
});

/**
 * Scenario 1: Search functionality
 */
describe('scenario 1: Search functionality tests', () => {
    test('returns true for null search input', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('returns true for empty string in search input', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('returns false for search input with multiple words', () => {
        expect(isEmpty("Apple Juice")).toBe(false);
    });

    test('returns true for an empty array of search results', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false for a non-empty array of search results', () => {
        expect(isEmpty(['Apple', 'Juice', 'Snacks'])).toBe(false);
    });

});

/**
 * Scenario 2: Shopping cart functionality
 */
describe('scenario 2: Shopping cart Tests', () => {
    test('returns true for an empty shopping cart object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('returns false for a shopping cart with items', () => {
        expect(isEmpty({ apple: 2, banana: 3 })).toBe(false);
    });

    test('returns true for an empty array-like cart items', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false for a non-empty array-like cart items', () => {
        expect(isEmpty(['apple', 'banana'])).toBe(false);
    });
});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product tests', () => {
    test('returns true for an empty input fields', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('returns false for a non-empty input fields', () => {
        expect(isEmpty("Organic Olive Oil")).toBe(false);
    });

    test('returns true for an empty array of product features', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false for a non-empty array of product features', () => {
        expect(isEmpty(['Gluten-Free', 'Vegan', 'Non-GMO'])).toBe(false);
    });
});