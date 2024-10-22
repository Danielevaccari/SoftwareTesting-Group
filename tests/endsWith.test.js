import endsWith from "../scripts/endsWith";

describe("endsWith", () => {
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
});
