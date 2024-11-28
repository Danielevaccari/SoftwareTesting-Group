import isArrayLike from '../scripts/isArrayLike.js';

/**
 * Scenario 2: Shopping cart tests
 */
describe('scenario 2: Shopping cart tests', () => {
    let cart;
    let products;

    beforeEach(() => {
        products = [
            { name: 'Grapes', price: 5 },
            { name: 'Mixed Berry Granola', price: 6 },
            { name: 'Almond Butter', price: 8 },
        ];
        cart = [];
    });

    test('products list should be array-like on the product listing page', () => {
        expect(products.length).toBeGreaterThan(0);
        expect(isArrayLike(products)).toBe(true);
    });

    test('products in the cart with a numeric "length" property should not be considered array-like', () => {
        const product = { length: 10 };
        expect(isArrayLike(product)).toBe(false);
    });

    test('cart should be array-like and empty initially', () => {
        expect(isArrayLike(cart)).toBe(true);
        expect(cart.length).toBe(0);
    });

    test('cart should not be array-like if it is null or undefined', () => {
        cart = null;
        expect(isArrayLike(cart)).toBe(false);

        cart = undefined;
        expect(isArrayLike(cart)).toBe(false);
    });

    test('should maintain array-like structure when a product is added to the cart', () => {
        cart.push({ ...products[0], quantity: 1 });

        expect(isArrayLike(cart)).toBe(true);
        expect(cart.length).toBe(1);
    });

    test('cart should not be array-like if it is malformed after manipulation', () => {
        cart = { name: 'Mixed Berry Granola', quantity: 1, price: 6 };
        cart.length = 'invalid';
        expect(isArrayLike(cart)).toBe(false);
    });

    test('cart should maintain array-like structure when viewing the cart', () => {
        cart = [
            { name: 'Mixed Berry Granola', quantity: 1, price: 6 },
            { name: 'Cream Cheese', quantity: 2, price: 5 }
        ];

        expect(isArrayLike(cart)).toBe(true);
        expect(cart.length).toBe(2);
    });

    test('removing a product from the cart ensures it remains array-like', () => {
        cart = [
            { name: 'Mixed Berry Granola', quantity: 1, price: 6 },
            { name: 'Cream Cheese', quantity: 2, price: 5 }
        ];
        cart.shift();

        expect(isArrayLike(cart)).toBe(true);
        expect(cart.length).toBe(1);
    });

    test('clearing the cart should ensure it remains array-like and empty', () => {
        cart = [
            { name: 'Mixed Berry Granola', quantity: 1, price: 6 },
            { name: 'Cream Cheese', quantity: 2, price: 5 },
        ];
        cart.length = 0;

        expect(isArrayLike(cart)).toBe(true);
        expect(cart.length).toBe(0);
    });

    test('navigating to the payment page ensures the cart is array-like', () => {
        cart = [
            { name: 'Mixed Berry Granola', quantity: 1, price: 6 },
            { name: 'Cream cheese', quantity: 2, price: 5 },
        ];

        expect(isArrayLike(cart)).toBe(true);
        expect(cart.length).toBeGreaterThan(0);
    });

});
