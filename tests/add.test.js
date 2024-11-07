import { expect } from "@jest/globals";
import add from "../scripts/add.js";

describe("add.js general tests", () => {
	test("adds zero to a number", () => {
		expect(add(5, 0)).toBe(5);
	});

	test("handles negative and positive addition", () => {
		expect(add(-5, 5)).toBe(0);
	});

	test("behaves with undefined and null", () => {
		expect(add(undefined, 10)).toBe(10);
		expect(add(null, 10)).toBe(10);
	});

	/**
	 * Scenario 2
	 */
	describe("scenario 2", () => {
		test("adds to total price", () => {
			expect(add(10, 15)).toBe(25);
		});

		test("adds item quantity to cart", () => {
			expect(add(0, 1)).toBe(1);
			expect(add(1, 2)).toBe(3);
		});

		test("handles decimal prices", () => {
			expect(add(10.99, 5.01)).toBeCloseTo(16.0);
		});

		test("removes item from cart", () => {
			expect(add(2, -2)).toBe(0);
		});
	});
});
