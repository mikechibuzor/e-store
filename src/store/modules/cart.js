import shop from "../../api/shop";
// import nested from "./nested";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null,
});

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.products.find(
        (product) => product.id === id
      );
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
        discount: product.discount,
        image: product.images[0],
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return (
        total +
        Math.floor(product.price - product.price * (product.discount / 100))
      );
    }, 0);
  },
};

// actions
const actions = {
  async checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    try {
      await shop.buyProducts(products);
      commit("setCheckoutStatus", "successful");
    } catch (e) {
      console.error(e);
      commit("setCheckoutStatus", "failed");
      // rollback to the cart saved before sending the request
      commit("setCartItems", { items: savedCartItems });
    }
  },

  addProductToCart({ state, commit }, product) {
    commit("setCheckoutStatus", null);
    if (product.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", { id: product.id });
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      // remove 1 item from stock
      commit(
        "products/decrementProductInventory",
        { id: product.id },
        { root: true }
      );
    }
  },

  removeProductFromCart({ state, commit }, { id }) {
    state.items = state.items.filter((item) => item.id !== id);
    commit("products/resetProductInventory", { id }, { root: true });
  },

  decrementItemQuantity({ state, commit, dispatch }, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    if (!cartItem) {
      return;
    }
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      // add 1 item from stock
      commit("products/incrementProductInventory", { id }, { root: true });
    } else {
      dispatch("removeProductFromCart", { id });
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
