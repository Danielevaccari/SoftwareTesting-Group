import capitalize from "../scripts/capitalize.js";

describe("capitalize.js general tests", () => {
	test("should return an empty string for an empty input", () => {
		expect(capitalize("")).toBe("");
	});

	test("should capitalize the first letter in a mixed string", () => {
		expect(capitalize("123aBC!@#dEf")).toBe("123abc!@#def");
	});

	test("should work with non-string inputs", () => {
		expect(capitalize(123)).toBe("123");
		expect(capitalize(null)).toBe("Null");
		expect(capitalize(undefined)).toBe("Undefined");
	});

	/**
	 * Scenario 3
	 */
	describe("scenario 3", () => {
		test("capitalizes product name", () => {
			expect(capitalize("honey")).toBe("Honey");
		});

		test("capitalizes correctly two word product name", () => {
			expect(capitalize("organic honey")).toBe("Organic honey");
		});

		test("correctly formats all uppercase characters", () => {
			expect(capitalize("HONEY")).toBe("Honey");
		});

		test("manages inputs with numbers and special chars", () => {
			expect(capitalize("honey #1")).toBe("Honey #1");
		});
	});
});
