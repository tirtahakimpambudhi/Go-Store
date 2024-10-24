export default class Products {
  #datas = [
    {
      id: 1,
      name: "Website E-Commerce ",
      description: "Rp.1.000.000,0",
      img: "/images/web-ecommerce.jpg",
      categories: ["Web", "Online Store"],
      rating: 5,
      purchased: 1000,
    },
    {
      id: 1,
      name: "Website Portfolio ",
      description: "Rp.500.000,0",
      img: "/images/web-portofolio.jpg",
      categories: ["Web", "Portfolio"],
      rating: 5,
      purchased: 1000,
    },
  ];

  // Getter for datas
  get datas() {
    return this.#datas;
  }

  // Setter for datas
  set datas(value) {
    this.#datas = value;
  }

  // Add a new product to the data's array
  addProduct(product) {
    this.#datas.push(product); // Correct way to push into the array
  }

  // Delete a product based on its ID
  deleteProduct(productId) {
    this.#datas = this.#datas.filter((product) => product.id !== productId); // Filter out the product by ID
  }

  // Calculate average rating and purchases
  #calculateAverages() {
    const totalProducts = this.#datas.length;

    const totalRatings = this.#datas.reduce(
      (sum, product) => sum + product.rating,
      0
    );
    const totalPurchases = this.#datas.reduce(
      (sum, product) => sum + product.purchased,
      0
    );

    const avgRating = totalRatings / totalProducts;
    const avgPurchases = totalPurchases / totalProducts;

    return { avgRating, avgPurchases };
  }

  // Generate product recommendations based on average rating and purchases
  recommendations() {
    const { avgRating, avgPurchases } = this.#calculateAverages();

    return this.#datas.filter(
      (data) => data.rating >= avgRating && data.purchased >= avgPurchases
    );
  }

  // Constructor to initialize data's
  constructor() {}
}
