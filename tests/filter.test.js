import filter from "../scripts/filter.js";

describe("filter.js general tests", () => {
	test("filters array based on a condition", () => {
		const numbers = [1, 2, 3, 4, 5];
		const evenNumbers = filter(numbers, num => num % 2 === 0);
		expect(evenNumbers).toEqual([2, 4]);
	});

	test("returns empty array for empty input", () => {
		const emptyArray = [];
		const filtered = filter(emptyArray, x => x > 0);
		expect(filtered).toEqual([]);
	});

	test("returns empty array when no items match condition", () => {
		const numbers = [1, 2, 3];
		const filtered = filter(numbers, num => num > 3);
		expect(filtered).toEqual([]);
	});
});

/**
 * Scenario 1
 */
describe("scenario 1: Product Search", () => {
	test("filters products by category", () => {
		const products = [
			{ id: 1, name: "Apple", category: "Fruits" },
			{ id: 2, name: "Cereal", category: "Breakfast" },
			{ id: 3, name: "Banana", category: "Fruits" },
		];
		const electronicProducts = filter(
			products,
			product => product.category === "Fruits"
		);
		expect(electronicProducts).toEqual([
			{ id: 1, name: "Apple", category: "Fruits" },
			{ id: 3, name: "Banana", category: "Fruits" },
		]);
	});

	test("filters products by price range", () => {
		const products = [
			{ id: 1, name: "Banana", price: 5 },
			{ id: 2, name: "Cereal", price: 15 },
			{ id: 3, name: "Apple", price: 2 },
		];
		const affordableProducts = filter(
			products,
			product => product.price < 10
		);
		expect(affordableProducts).toEqual([
			{ id: 1, name: "Banana", price: 5 },
			{ id: 3, name: "Apple", price: 2 },
		]);
	});
});

/**
 * Scenario 2
 */
describe("scenario 2", () => {
	test("filters products by isNew property", () => {
		const products = [
			{ id: 1, name: "Banana", isNew: true },
			{ id: 2, name: "Cereal", isNew: false },
			{ id: 3, name: "Apple", isNew: true },
		];
		const newProducts = filter(products, product => product.isNew);
		expect(newProducts).toEqual([
			{ id: 1, name: "Banana", isNew: true },
			{ id: 3, name: "Apple", isNew: true },
		]);
	});
});
