import eq from "../scripts/eq.js";

describe("eq", () => {
	test("should return true for same object references", () => {
		const object = { a: 1 };
		expect(eq(object, object)).toBe(true);
	});

	test("should return false for different objects with same content", () => {
		const object1 = { a: 1 };
		const object2 = { a: 1 };
		expect(eq(object1, object2)).toBe(false);
	});

	test("should return true for primitive values", () => {
		expect(eq("a", "a")).toBe(true);
		expect(eq(1, 1)).toBe(true);
		expect(eq(true, true)).toBe(true);
	});

	test("should treat NaN as equal to NaN", () => {
		expect(eq(NaN, NaN)).toBe(true);
	});

	test("should handle null and undefined correctly", () => {
		expect(eq(null, null)).toBe(true);
		expect(eq(undefined, undefined)).toBe(true);
	});

	test("should handle positive and negative zero", () => {
		expect(eq(0, 0)).toBe(true);
		expect(eq(-0, 0)).toBe(true);
	});

	test("should handle function references", () => {
		const func = () => {};
		expect(eq(func, func)).toBe(true);
		expect(
			eq(
				() => {},
				() => {}
			)
		).toBe(false);
	});

	test("should work with Symbol", () => {
		const sym1 = Symbol("test");
		const sym2 = Symbol("test");
		expect(eq(sym1, sym1)).toBe(true);
		expect(eq(sym1, sym2)).toBe(false); // Symbols are unique
	});
});
