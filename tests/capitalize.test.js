import capitalize from "../scripts/capitalize.js";

describe("capitalize.js general tests", () => {
	test("should capitalize the first letter of a string", () => {
		expect(capitalize("fred")).toBe("Fred");
	});

	test("should convert all uppercase to only first letter capitalized", () => {
		expect(capitalize("FRED")).toBe("Fred");
	});

	test("should capitalize the first letter of an all lowercase string", () => {
		expect(capitalize("fred")).toBe("Fred");
	});

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
	 * Scenario 1
	 */
	describe("scenario 1", () => {
		test("capitalizes search term", () => {
			expect(capitalize("organic apple")).toBe("Organic apple");
		});

		test("ensures consistent capitalization for search results", () => {
			expect(capitalize("FRESH SPINACH")).toBe("Fresh spinach");
		});

		test("handles numeric and special character search terms", () => {
			expect(capitalize("20% off!")).toBe("20% off!");
		});

		test("capitalizes single character search terms", () => {
			expect(capitalize("a")).toBe("A");
		});
	});

	/**
	 * Scenario 2
	 */
	describe("scenario 2", () => {
		test("capitalizes product names in the cart", () => {
			expect(capitalize("apple juice")).toBe("Apple juice");
		});

		test("preserves product names with special formatting", () => {
			expect(capitalize("PRODUCE OF THE WEEK!")).toBe(
				"Produce of the week!"
			);
		});

		test("handles numeric product identifiers", () => {
			expect(capitalize("SKU-123")).toBe("Sku-123");
		});

		test("capitalizes empty or undefined product names", () => {
			expect(capitalize("")).toBe("");
			expect(capitalize(undefined)).toBe("Undefined");
		});
	});

	/**
	 * Scenario 3
	 */
	describe("scenario 3", () => {
		test("capitalizes the product name for consistency", () => {
			expect(capitalize("organic honey")).toBe("Organic honey");
		});

		test("correctly formats all uppercase entries", () => {
			expect(capitalize("HONEY")).toBe("Honey");
		});

		test("manages inputs with numbers and symbols", () => {
			expect(capitalize("honey #1")).toBe("Honey #1");
		});
	});
});
