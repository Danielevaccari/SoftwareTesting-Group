import words from '../scripts/words.js';

/**
 * Scenario 1: Search functionality
 */
describe('scenario 1: Search functionality tests', () => {
    test('should split product search input into individual words', () => {
        const searchInput = 'Apple Juice';
        expect(words(searchInput)).toEqual(['Apple', 'Juice']);
    });

    test('should split product search input with custom pattern', () => {
        expect(words('PRC123, PRC234, & PRC345', /\bPRC\d+\b/g)).toEqual(['PRC123', 'PRC234', 'PRC345']);
    });

    test('should split product search input with mixed casing correctly', () => {
        expect(words('greekYogurt')).toEqual(['greek', 'Yogurt']);
        expect(words('CottageCheese')).toEqual(['Cottage', 'Cheese']);
    });

    test('should handle search input with special characters for filters', () => {
        const searchInput = 'Organic-Apple_Juice category=Snacks & Beverages';
        expect(words(searchInput)).toEqual(['Organic', 'Apple', 'Juice', 'category', 'Snacks', 'Beverages']);
    });

    test('should split product search input with numbers', () => {
        expect(words('2tomatoes and onions')).toEqual(['2', 'tomatoes', 'and', 'onions']);
    });

    test('should split search input containing filters and multiple keywords', () => {
        const searchInput = 'Apple Juice category:Snacks & Beverages price:<10';
        expect(words(searchInput)).toEqual(['Apple', 'Juice', 'category', 'Snacks', 'Beverages', 'price', '10']);
    });

    test('should return an empty array for empty or invalid search input', () => {
        expect(words('')).toEqual([]);
        expect(words('!!!')).toEqual([]);
    });

    test('should return an empty array when no product codes match the specified pattern', () => {
        const searchInput = 'PRCC123';
        const pattern = /\bPRC\d+\b/g;
        expect(words(searchInput, pattern)).toEqual([]);
    });
});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product tests', () => {
    test('should match capitalized words in product name for title-case validation using a pattern', () => {
        const productName = 'Cold-Pressed Olive Oil';
        const pattern = /\b[A-Z][a-z]*\b/g;
        expect(words(productName, pattern)).toEqual(['Cold', 'Pressed', 'Olive', 'Oil']);
    });

    test('should validate product description by splitting words with special symbols', () => {
        expect(words('Gluten-Free, Vegan Friendly!')).toEqual(['Gluten', 'Free', 'Vegan', 'Friendly']);
    });

    test('should match alphanumeric product codes using a specific pattern', () => {
        const productDetails = 'Product Code: PRC123';
        const pattern = /\bPRC\d+\b/g;
        expect(words(productDetails, pattern)).toEqual(['PRC123']);
    });

    test('should return empty array if product code does not match pattern', () => {
        const productCode = '123-ABC';
        const pattern = /\bPRC\d+\b/g;
        expect(words(productCode, pattern)).toEqual([]);
    });

    test('should split product names with numbers correctly', () => {
        const productName = 'Juice123';
        expect(words(productName)).toEqual(['Juice', '123']);
    });

    test('should handle producer names with apostrophes', () => {
        expect(words("Jade's Farm Produce")).toEqual(["Jade's", 'Farm', 'Produce']);
    });

    test('should handle empty optional fields', () => {
        const category = '';
        expect(words(category)).toEqual([]);
    });

});