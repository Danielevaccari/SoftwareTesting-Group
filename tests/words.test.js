import words from '../scripts/words.js';

describe('words.js general tests', () => {
    test('should split simple ASCII words', () => {
        expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('should split ASCII words with custom pattern', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
    });

    test('should split camelCase words', () => {
        expect(words('camelCaseWords')).toEqual(['camel', 'Case', 'Words']);
    });

    test('should split PascalCase words', () => {
        expect(words('PascalCaseWords')).toEqual(['Pascal', 'Case', 'Words']);
    });

    test('should split snake_case words', () => {
        expect(words('snake_case_words')).toEqual(['snake', 'case', 'words']);
    });

    test('should split hyphenated words', () => {
        expect(words('hyphenated-words-example')).toEqual(['hyphenated', 'words', 'example']);
    });

    test('should split words with numbers', () => {
        expect(words('test123 words')).toEqual(['test', '123', 'words']);
    });

    test('should return an empty array for an empty string', () => {
        expect(words('')).toEqual([]);
    });

    test('should return an empty array when input contains only special characters', () => {
        expect(words('!@#$%^&*()')).toEqual([]);
    });

    test('should split ordinal words correctly', () => {
        expect(words('1st 2nd 3rd 4th')).toEqual(['1st', '2nd', '3rd', '4th']);
    });

    test('should split words with mixed casing and apostrophes', () => {
        expect(words("It's John's code")).toEqual(["It's", "John's", "code"]);
    });

    test('should match words based on a specific regex pattern if provided', () => {
        expect(words('word1 word2 word3', /\b\w+\b/g)).toEqual(['word1', 'word2', 'word3']);
    });

    test('should returns an empty array when no match is found with the provided pattern', () => {
        const input = 'ABC';
        const pattern = /\d+/g;
        expect(words(input, pattern)).toEqual([]);
    });
});

/**
 * Scenario 1: Search functionality
 */
describe('scenario 1: Search functionality tests', () => {
    test('should split product search input into individual words', () => {
        const searchInput = 'Apple Juice';
        expect(words(searchInput)).toEqual(['Apple', 'Juice']);
    });

    test('should split search input containing filters and multiple keywords', () => {
        const searchInput = 'Apple Juice category:Snacks & Beverages price:<10';
        expect(words(searchInput)).toEqual(['Apple', 'Juice', 'category', 'Snacks', 'Beverages', 'price', '10']);
    });

    test('should return an empty array for empty or invalid search input', () => {
        const searchInput = '';
        expect(words(searchInput)).toEqual([]);
        const invalidInput = '!!!';
        expect(words(invalidInput)).toEqual([]);
    });

    test('should split search queries with mixed casing correctly', () => {
        expect(words('FarmFresh')).toEqual(['Farm', 'Fresh']);
    });

    test('should handle search input with special characters for filters', () => {
        const searchInput = 'Apple_Juice category=Snacks & Beverages';
        expect(words(searchInput)).toEqual(['Apple', 'Juice', 'category', 'Snacks', 'Beverages']);
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
    test('should split product name into title-case words', () => {
        expect(words('Cold-Pressed Olive Oil')).toEqual(['Cold', 'Pressed', 'Olive', 'Oil']);
    });

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
});

