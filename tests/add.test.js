import { expect } from "@jest/globals";
import add from "../scripts/add.js";

describe("General tests for add.js", () => {
	test("adds two numbers correctly", () => {
		expect(add(1, 2)).toBe(3);
	});

	test("adds negative numbers", () => {
		expect(add(-1, -2)).toBe(-3);
	});

	test("adds zero to a number", () => {
		expect(add(5, 0)).toBe(5);
	});

	test("handles very large numbers", () => {
		expect(add(Number.MAX_SAFE_INTEGER, 1)).toBeGreaterThan(
			Number.MAX_SAFE_INTEGER
		);
	});

	test("handles very small numbers", () => {
		expect(add(Number.MIN_VALUE, Number.MIN_VALUE)).toBeCloseTo(
			Number.MIN_VALUE * 2
		);
	});

	test("adds zero to zero", () => {
		expect(add(0, 0)).toBe(0);
	});

	test("handles negative and positive addition", () => {
		expect(add(-5, 5)).toBe(0);
	});

	test("adding infinity", () => {
		expect(add(1, Infinity)).toBe(Infinity);
		expect(add(Infinity, -Infinity)).toBeNaN();
	});

	test("behaves with undefined", () => {
		expect(add(undefined, 10)).toBe(10); // Assuming add treats undefined as 0
	});

	test("behaves with null", () => {
		expect(add(null, 10)).toBe(10); // Assuming add treats null as 0
	});

	/**
	 * Scenario 1: Search UI and Filter Options, Products List View (Front-end)
	 */
	describe("Scenario 1", () => {
		test("increments search result count", () => {
			const initialCount = 0;
			expect(add(initialCount, 1)).toBe(1);
		});
	});

	/**
	 * Scenario 2: Cart handling and checkout
	 */
	describe("Scenario 2", () => {
		test("adds item quantity to cart", () => {
			expect(add(0, 1)).toBe(1); // New item added to cart
			expect(add(1, 2)).toBe(3); // Quantity of an existing item increased
		});

		test("calculates total price", () => {
			expect(add(10, 15)).toBe(25); // Adding price of two items
		});

		test("handles decimal prices", () => {
			expect(add(10.99, 5.01)).toBeCloseTo(16.0);
		});

		test("removes item from cart", () => {
			expect(add(2, -2)).toBe(0); // Removing an item completely
		});

		test("applies discount to cart total", () => {
			expect(add(200, -200 * 0.2)).toBe(160); // 20% discount on $200
		});
	});

	/**
	 * Scenario 3: Login and Registration, Add Product (Producer-side)
	 */
	describe("Scenario 3", () => {
		test("decrementing available stock", () => {
			expect(add(50, -10)).toBe(40); // Reducing stock
		});

		test("adding product with no stock", () => {
			expect(add(0, 0)).toBe(0); // Adding a product with no initial stock
		});
	});
});
