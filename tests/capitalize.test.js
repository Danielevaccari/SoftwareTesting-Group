import capitalize from "../scripts/capitalize.js";

describe("capitalize", () => {
	// Test if the function correctly capitalizes a string
	test("should capitalize the first letter of a string", () => {
		expect(capitalize("fred")).toBe("Fred");
	});

	// Test if the function handles an all uppercase string
	test("should convert all uppercase to only first letter capitalized", () => {
		expect(capitalize("FRED")).toBe("Fred");
	});

	// Test if the function handles an all lowercase string
	test("should capitalize the first letter of an all lowercase string", () => {
		expect(capitalize("fred")).toBe("Fred");
	});

	// Test for an empty string
	test("should return an empty string for an empty input", () => {
		expect(capitalize("")).toBe("");
	});

	// Test for a string with numbers and special characters
	test("should capitalize the first letter in a mixed string", () => {
		expect(capitalize("123aBC!@#dEf")).toBe("123abc!@#def");
	});

	// Test for non-string inputs to ensure `toString` works
	test("should work with non-string inputs", () => {
		expect(capitalize(123)).toBe("123");
		expect(capitalize(null)).toBe("Null");
		expect(capitalize(undefined)).toBe("Undefined");
	});

	// Test if the function does not alter single character strings
	test("should return the same character for single character strings", () => {
		expect(capitalize("a")).toBe("A");
		expect(capitalize("A")).toBe("A");
	});
});
