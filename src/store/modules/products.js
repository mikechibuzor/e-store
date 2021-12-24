import shop from "../../api/shop";

// initial state
const state = () => ({
  products: [],
});

// getters
const getters = {
  getProducts(state) {
    return state.products;
  },
};

// actions
const actions = {
  async getAllProducts({ commit }) {
    const products = await shop.getProducts();
    commit("setProducts", products);
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  decrementProductInventory(state, { id }) {
    const product = state.products.find((product) => product.id === id);
    product.inventory--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
