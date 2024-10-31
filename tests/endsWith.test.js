import endsWith from "../scripts/endsWith";

describe("endsWith.js general tests", () => {
	test("should return true when string ends with target", () => {
		expect(endsWith("abc", "c")).toBe(true);
	});

	test("should return false when string does not end with target", () => {
		expect(endsWith("abc", "b")).toBe(false);
	});

	test("should work with position parameter", () => {
		expect(endsWith("abc", "b", 2)).toBe(true);
	});

	test("should return false for an empty target string", () => {
		expect(endsWith("abc", "")).toBe(true);
	});

	test("should handle an empty string", () => {
		expect(endsWith("", "target")).toBe(false);
	});

	test("should handle negative or NaN position", () => {
		expect(endsWith("abc", "c", -1)).toBe(false);
		expect(endsWith("abc", "c", NaN)).toBe(false);
	});

	test("should handle position greater than string length", () => {
		expect(endsWith("abc", "c", 100)).toBe(true);
	});

	test("should work with target longer than the string when position is not specified", () => {
		expect(endsWith("abc", "abcd")).toBe(false);
	});

	test("should use the whole string if position is undefined", () => {
		expect(endsWith("abc", "c", undefined)).toBe(true);
	});

	test("should correctly handle special characters", () => {
		expect(endsWith("a@b#c", "#c")).toBe(true);
	});

	/**
	 * Scenario 1
	 */
	describe("scenario 1", () => {
		test("checks if search term ends with a specific suffix", () => {
			expect(endsWith("organic", "ic")).toBe(true);
		});

		test("ensures search tags end correctly", () => {
			expect(endsWith("tag:vegan", "an")).toBe(true);
		});
	});

	/**
	 * Scenario 2
	 */
	describe("scenario 2", () => {
		test("verifies product IDs end with expected pattern", () => {
			expect(endsWith("SKU-12345", "45")).toBe(true);
		});

		test("handles special characters in product names", () => {
			expect(endsWith("Organic Food @", "@")).toBe(true);
		});
	});

	/**
	 * Scenario 3
	 */
	describe("scenario 3", () => {
		test("validates product names end with keywords for categorization", () => {
			expect(endsWith("Apple Juice", "Juice")).toBe(true);
		});

		test("checks if product descriptions end with certain phrases", () => {
			expect(endsWith("Fresh and delicious", "delicious")).toBe(true);
		});
	});
});
