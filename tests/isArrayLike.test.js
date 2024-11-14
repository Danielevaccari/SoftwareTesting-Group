import isArrayLike from '../scripts/isArrayLike.js';

/**
 * Scenario 2: Shopping cart tests
 */
describe('scenario 2: Shopping cart tests', () => {
    test('should return true for an array representing cart items', () => {
        const cartItems = ['apple', 'banana', 'grapes'];
        expect(isArrayLike(cartItems)).toBe(true);
    });

    test('should return true for an arguments object representing cart items', () => {
        function cart() {
            return isArrayLike(arguments);
        }
        expect(cart('apple', 'banana')).toBe(true); 
    });

    test('should return true for a string representation of cart items', () => {
        const cartString = 'apple, banana, grapes';
        expect(isArrayLike(cartString)).toBe(true);
    });

    test('should return false for an object representing cart items', () => {
        const cartObject = { apple: 2, banana: 3 };
        expect(isArrayLike(cartObject)).toBe(false);
    });

    test('should return false for a shopping cart function', () => {
        const cartFunction = () => { return ['apple', 'banana']; };
        expect(isArrayLike(cartFunction)).toBe(false);
    });
});
