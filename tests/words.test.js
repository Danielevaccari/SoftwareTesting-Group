import words from '../scripts/words.js';

describe('words.js general tests', () => {
    test('splits simple ASCII words', () => {
        expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('splits ASCII words with custom pattern', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
    });

    test('splits camelCase words', () => {
        expect(words('camelCaseWords')).toEqual(['camel', 'Case', 'Words']);
    });

    test('splits PascalCase words', () => {
        expect(words('PascalCaseWords')).toEqual(['Pascal', 'Case', 'Words']);
    });

    test('splits snake_case words', () => {
        expect(words('snake_case_words')).toEqual(['snake', 'case', 'words']);
    });

    test('splits hyphenated words', () => {
        expect(words('hyphenated-words-example')).toEqual(['hyphenated', 'words', 'example']);
    });

    test('splits words with numbers', () => {
        expect(words('test123 words')).toEqual(['test', '123', 'words']);
    });

    test('handles empty string input', () => {
        expect(words('')).toEqual([]);
    });

    test('handles special characters without letters', () => {
        expect(words('!@#$%^&*()')).toEqual([]);
    });

    test('splits ordinal words correctly', () => {
        expect(words('1st 2nd 3rd 4th')).toEqual(['1st', '2nd', '3rd', '4th']);
    });

    test('splits words with mixed casing and apostrophes', () => {
        expect(words("It's John's code")).toEqual(["It's", "John's", "code"]);
    });

    test('matches specific pattern if provided', () => {
        expect(words('word1 word2 word3', /\b\w+\b/g)).toEqual(['word1', 'word2', 'word3']);
    });

    test('returns an empty array if pattern does not match any part of the string', () => {
        const input = 'ABC';
        const pattern = /\d+/g;
        expect(words(input, pattern)).toEqual([]);
    });

});
/**
 * Scenario 1: Search product
 */
describe('scenario 1: Search functionality tests', () => {

    test('splits simple product search input correctly', () => {
        const searchInput = 'Apple Juice';
        expect(words(searchInput)).toEqual(['Apple', 'Juice']);
    });

    test('splits search input with multiple filters', () => {
        const searchInput = 'Apple Juice category:Snacks & Beverages price:<10';
        expect(words(searchInput)).toEqual(['Apple', 'Juice', 'category', 'Snacks', 'Beverages', 'price', '10']);
    });

    test('returns "No products found" when input is empty or invalid', () => {
        const searchInput = '';
        expect(words(searchInput)).toEqual([]);
        const invalidInput = '!!!';
        expect(words(invalidInput)).toEqual([]);
    });

    test('supports search quesries with mixed casing', () => {
        expect(words('FarmFresh')).toEqual(['Farm', 'Fresh']);
    });

    test('handles input with special characters for advanced filters', () => {
        const searchInput = 'Apple_Juice category=Snacks & Beverages';
        expect(words(searchInput)).toEqual(['Apple', 'Juice', 'category', 'Snacks', 'Beverages']);
    });

    test('returns empty array when no products are found from the product code', () => {
        const searchInput = 'PRCC123';
        const pattern = /\bPRC\d+\b/g;
        expect(words(searchInput, pattern)).toEqual([]);
    });

});

/**
 * Scenario 3: Add new product
 */
describe('scenario 3: Add new product', () => {

    test('splits product name for title-case validation', () => {
        expect(words('Cold-Pressed Olive Oil')).toEqual(['Cold', 'Pressed', 'Olive', 'Oil']);
    });

    test('matches capitalized words for product title-case validation', () => {
        const productName = 'Cold-Pressed Olive Oil';
        const pattern = /\b[A-Z][a-z]*\b/g;
        expect(words(productName, pattern)).toEqual(['Cold', 'Pressed', 'Olive', 'Oil']);
    });

    test('validates product description with special symbols', () => {
        expect(words('Gluten-Free, Vegan Friendly!')).toEqual(['Gluten', 'Free', 'Vegan', 'Friendly']);
    });

    test('matches alphanumeric product codes', () => {
        const productDetails = 'Product Code: PRC123';
        const pattern = /\bPRC\d+\b/g;
        expect(words(productDetails, pattern)).toEqual(['PRC123']);
    });

});

