import isSymbol from "./isSymbol.js";

/////////////////////////////////////////
////// Daniele Vaccari 2024.10.20
////// This file is not part of our tests but is included because our tests files call it as a dependency
/////////////////////////////////////////

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString(value) {
	// Exit early for strings to avoid a performance hit in some environments.
	if (typeof value === "string") {
		return value;
	}
	if (Array.isArray(value)) {
		// Recursively convert values (susceptible to call stack limits).
		return `${value.map(other =>
			other == null ? other : toString(other)
		)}`;
	}
	if (isSymbol(value)) {
		return value.toString();
	}
	const result = `${value}`;
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

export default toString;