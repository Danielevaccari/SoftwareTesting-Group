import capitalize from "../scripts/capitalize.js";

describe("capitalize.js general tests", () => {
	test("should return an empty string for an empty input", () => {
		expect(capitalize("")).toBe("");
	});

	test("should capitalize the first character in a mixed string", () => {
		expect(capitalize("h123aBC!@#dEf")).toBe("H123abc!@#def");
	});

	test("should not work with numeric", () => {
		expect(capitalize(123)).not.toBeString();
	});

	test("should not work with null", () => {
		expect(capitalize(null)).toBeNull();
	});

	test("should not work with undefined", () => {
		expect(capitalize(undefined)).toBeUndefined();
	});
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
});
