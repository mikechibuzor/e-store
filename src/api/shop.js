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
    inventory: 5,
    category: "men",
  },
  {
    id: 2,
    title: "Women's Air Force 1 High Sculpt Silver",
    about: `It's the iconic basketball original but with a streamlined style for high tops. A sculpted collar without the ankle strap provides a fresh look without added bulk for easy on and off. Softly pebbled leather on the upper, suede accents and minimal branding put a premium spin on the icon.`,
    price: 119.0,
    discount: 35,
    images: [
      "women-air-force.jpg",
      "women-air-force-4.jpg",
      "women-air-force-2.jpg",
      "women-air-force-3.jpg",
    ],
    inventory: 3,
    category: "women",
  },
  {
    id: 3,
    title: "Nike Air Force 1 x Carhartt WIP",
    about: `Nike x Carhartt WIP's footwear collection combines iconic sneaker silhouettes with classic workwear materials. This first-ever collaboration brings street-ready ruggedness to timeless Nike icons with a highly considered feel.`,
    price: 1250.0,
    discount: 15,
    images: [
      "nike-air.jpg",
      "nike-air-2.jpg",
      "nike-air-3.jpg",
      "nike-air-4.jpg",
    ],
    inventory: 3,
    category: "men",
  },
  {
    id: 4,
    title: "FUSE Women's Training Shoes",
    about: `When it comes to performance, FUSE tops the leaderboard. With a 4mm drop, a wide toe box gives you a stable stance while the internal midsole provides shock absorption..`,
    price: 60.0,
    discount: 0.5,
    images: [
      "FUSE-Women's-Training-Shoes (2).jpg",
      "FUSE-Women's-Training-Shoes (3).jpg",
      "FUSE-Women's-Training-Shoes (4).jpg",
      "FUSE-Women's-Training-Shoes (5).jpg",
    ],
    inventory: 3,
    category: "women",
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
