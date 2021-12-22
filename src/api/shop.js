/**
 * Mocking client-server processing
 */
const _products = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    about: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
              outer sole, they'll withstand everything the weather can offer.`,
    price: 250.0,
    discount: 50,
    images: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
  },
];

export default {
  async getProducts() {
    await wait(100);
    return _products;
  },

  async buyProducts(products) {
    await wait(100);
    if (
      // simulate random checkout failure.
      Math.random() > 0.5 ||
      navigator.webdriver
    ) {
      return;
    } else {
      throw new Error("Checkout error");
    }
  },
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
