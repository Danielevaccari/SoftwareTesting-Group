import createCaseFirst from "./.internal/createCaseFirst.js";

/////////////////////////////////////////
////// Daniele Vaccari 2024.10.20
////// This file is not part of our tests but is included because our tests files call it as a dependency
/////////////////////////////////////////

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst("toUpperCase");

export default upperFirst;
