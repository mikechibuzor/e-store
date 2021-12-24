<template>
  <div class="cart-container absolute left-[2%] xl:-left-32 top-[5.3rem] xl:top-10 bg-white w-[95%] xl:w-72 rounded-lg shadow-2xl">
      <section class="head px-4 py-4 border-b">
          <h3 class="font-bold text-black">Cart</h3>
      </section>
      <!-- empty cart -->
      <section v-if="!products.length" class="empty-cart py-16 px-6 flex items-center justify-center">
          <p class="font-Kumbh-Sans text-gray-500 font-bold text-sm">Your cart is empty.</p>
      </section>

      <!-- not empty cart -->
      <section v-else class="body px-4 py-3">
          <ul>
              <cart-item v-for="prodItem in products" :id="prodItem.id" :key="prodItem.id" :item="prodItem"></cart-item>
          </ul>
            <!-- checkout -->
            <section class="w-full px-4 py-4 xl:py-3">
                <button class="text-white text-sm font-bold font-Kumbh-Sans rounded-lg px-8 flex items-center justify-center py-3 bg-primary-orange-1 w-full">Checkout</button>
            </section>
      </section>

    
  </div>
</template>

<script setup>

import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import CartItem from './CartItem.vue';

// accessing store
const store = useStore();

// computed
const products = computed(()=>{
    return store.getters['cart/cartProducts'];
})

const total = computed(()=>{
    store.getters['cart/cartTotalPrice'];
});

onMounted(()=>{
    // console.log(store.getters['cart/cartProducts']);
})
</script>

<style scoped>
.card-container{
    z-index: 50;
}

</style>