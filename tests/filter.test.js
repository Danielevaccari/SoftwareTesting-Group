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
		expect(filtered).toEqual([[]]);
	});

	test("returns empty array when no items match condition", () => {
		const numbers = [1, 2, 3];
		const filtered = filter(numbers, num => num > 3);
		expect(filtered).toEqual([[]]);
	});

	/**
	 * Scenario 1
	 */
	describe("scenario 1: Product Search", () => {
		test("filters products by category", () => {
			const products = [
				{ id: 1, name: "Laptop", category: "Electronics" },
				{ id: 2, name: "Book", category: "Books" },
				{ id: 3, name: "Smartphone", category: "Electronics" },
			];
			const electronicProducts = filter(
				products,
				product => product.category === "Electronics"
			);
			expect(electronicProducts).toEqual([
				{ id: 1, name: "Laptop", category: "Electronics" },
				{ id: 3, name: "Smartphone", category: "Electronics" },
			]);
		});

		test("filters products by price range", () => {
			const products = [
				{ id: 1, name: "Shoes", price: 50 },
				{ id: 2, name: "Jacket", price: 150 },
				{ id: 3, name: "Hat", price: 20 },
			];
			const affordableProducts = filter(
				products,
				product => product.price < 100
			);
			expect(affordableProducts).toEqual([
				{ id: 1, name: "Shoes", price: 50 },
				{ id: 3, name: "Hat", price: 20 },
			]);
		});
	});

	/**
	 * Scenario 2
	 */
	describe("scenario 2", () => {
		test("filters out products not in stock", () => {
			const cartItems = [
				{ id: 1, name: "Item1", stock: 5 },
				{ id: 2, name: "Item2", stock: 0 },
				{ id: 3, name: "Item3", stock: 10 },
			];
			const availableItems = filter(cartItems, item => item.stock > 0);
			expect(availableItems).toEqual([
				{ id: 1, name: "Item1", stock: 5 },
				{ id: 3, name: "Item3", stock: 10 },
			]);
		});

		test("filters products by isNew property", () => {
			const products = [
				{ id: 1, name: "Product A", isNew: true },
				{ id: 2, name: "Product B", isNew: false },
				{ id: 3, name: "Product C", isNew: true },
			];
			const newProducts = filter(products, product => product.isNew);
			expect(newProducts).toEqual([
				{ id: 1, name: "Product A", isNew: true },
				{ id: 3, name: "Product C", isNew: true },
			]);
		});
	});
});
