import { expect } from "@jest/globals";
import add from "../scripts/add.js";

describe("add.js", () => {
	it("should add two positive numbers", () => {
		expect(add(6, 4)).toBe(10);
	});

	it("should add a positive and a negative number", () => {
		expect(add(6, -4)).toBe(2);
	});

	it("should return the augend when addend is 0", () => {
		expect(add(6, 0)).toBe(6);
	});

	it("should handle floating point numbers", () => {
		expect(add(0.1, 0.2)).toBeCloseTo(0.3); // Using toBeCloseTo to handle floating point precision issues
	});

	it("should add negative numbers", () => {
		expect(add(-5, -3)).toBe(-8);
	});
});
