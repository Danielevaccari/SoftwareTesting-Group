import endsWith from "../scripts/endsWith";

describe("endsWith.js general tests", () => {
	test("should return false when string does not end with target", () => {
		expect(endsWith("abc", "b")).toBe(false);
	});

	test("handles empty target string", () => {
		expect(endsWith("abc", "")).toBe(true);
	});

	test("handles empty input string", () => {
		expect(endsWith("", "target")).toBe(false);
	});

	test("handles negative or NaN position", () => {
		expect(endsWith("abc", "c", -1)).toBe(false);
		expect(endsWith("abc", "c", NaN)).toBe(false);
	});

	test("handles position greater than string length", () => {
		expect(endsWith("abc", "c", 100)).toBe(true);
	});

	test("should use the end of string if position is undefined", () => {
		expect(endsWith("abc", "c", undefined)).toBe(true);
	});

	/**
	 * Scenario 1
	 */
	describe("scenario 1", () => {
		test("check if search term ends with a specific char", () => {
			expect(endsWith("abc", "c")).toBe(true);
		});

		test("check if search term ends with a specific suffix", () => {
			expect(endsWith("organic", "ic")).toBe(true);
		});

		test("check if search term has specific char in specific index", () => {
			expect(endsWith("abc", "b", 2)).toBe(true);
		});
	});

	/**
	 * Scenario 3
	 */
	describe("scenario 3", () => {
		test("checks if product descriptions end with certain phrases", () => {
			expect(endsWith("Fresh and delicious", "delicious")).toBe(true);
		});

		test("handles special characters in product names", () => {
			expect(endsWith("Organic Food @", "@")).toBe(true);
		});

		test("verifies product IDs end with expected pattern", () => {
			expect(endsWith("PROD12345", "45")).toBe(true);
		});
	});
});
