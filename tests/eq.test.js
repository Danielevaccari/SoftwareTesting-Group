import eq from "../scripts/eq.js";

describe("eq.js general tests", () => {
	test("should return false for different objects with same content", () => {
		const object1 = { a: 1 };
		const object2 = { a: 1 };
		expect(eq(object1, object2)).toBe(false);
	});

	test("should handle null and undefined correctly", () => {
		expect(eq(null, null)).toBe(true);
		expect(eq(undefined, undefined)).toBe(true);
	});
});

/**
 * Scenario 1
 */
describe("scenario 1", () => {
	test("should correctly compare product Ids", () => {
		const productId = "PROD123";
		expect(eq(productId, "PROD123")).toBe(true);
		expect(eq(productId, "PROD124")).toBe(false);
	});

	test("should compare product attributes", () => {
		const product = { id: "PROD123", name: "Apple" };
		const sameProduct = { id: "PROD123", name: "Apple" };
		expect(eq(product.id, product.id)).toBe(true);
		expect(eq(product.name, sameProduct.id)).toBe(false);
	});
});

/**
 * Scenario 2
 */
describe("scenario 2", () => {
	test("should compare cart items by reference", () => {
		const item1 = { id: 1, qty: 2 };
		const item2 = { id: 1, qty: 2 };
		expect(eq(item1, item1)).toBe(true);
		expect(eq(item1, item2)).toBe(false);
	});

	test("should compare prices in cart operations", () => {
		const price1 = 10.99;
		const price2 = 10.99;
		expect(eq(price1, price2)).toBe(true);
	});
});
