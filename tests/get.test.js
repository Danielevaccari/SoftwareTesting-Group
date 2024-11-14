import get from '../scripts/get.js';

/**
 * Scenario 1: Search functionality tests
 */
describe('scenario 1: Search functionality tests', () => {
    test('should return search result based on a valid query', () => {
        const searchData = { query: { term: 'apple', price: 3 } };
        expect(get(searchData, 'query.term')).toBe('apple');
    });

    test('should return default value for missing search item', () => {
        const searchData = { query: { term: 'zbfs', price: 3 } };
        expect(get(searchData, 'query.nonExistingTerm', 'No item found')).toBe('No item found');
        expect(get(null, 'query.term', 'No item searched')).toBe('No item searched');
    });

    test('should return default value for undefined query', () => {
        const searchData = { query: undefined };
        expect(get(searchData, 'query.term', 'default')).toBe('default');
    });

    test('should return correct search from a nested search', () => {
        const searchData = { query: { term: 'apple', price: 5 } };
        expect(get(searchData, ['query', 'price'])).toBe(5);
    });
});

/**
 * Scenario 2: Shopping cart tests
 */
describe('scenario 2: Shopping cart tests', () => {
    test('should return the correct number of items in the cart', () => {
        const cart = { items: { apple: 2, banana: 3 } };
        expect(get(cart, 'items.apple')).toBe(2);
    });

    test('should return the correct cart status', () => {
        const cart = { status: 'empty' };
        expect(get(cart, 'status')).toBe('empty');
    });

    test('should return default value for out of stock products', () => {
        const product = {};
        expect(get(product, 'stock', '0')).toBe('0');
    });
});

/**
 * Scenario 3: Add new product tests
 */
describe('scenario 3: Add new product tests', () => {
    test('should return the product form input details correctly', () => {
        const product = { details: { name: 'Organic Olive Oil', price: 20 } };
        expect(get(product, 'details.name')).toBe('Organic Olive Oil');
    });

    test('should return default value for missing form input details', () => {
        const product = { details: { name: 'Organic Olive Oil' } };
        expect(get(product, 'details.origin', 'Not Available')).toBe('Not Available');
    });
});