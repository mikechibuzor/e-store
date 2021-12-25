<template>
  <div class="wrapper xl:px-32 custom-breakpoint1:px-48 pb-10">
   <product-container v-for="product in state.allProducts" :key=product.id :product="product"></product-container>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import ProductContainer from '../components/product-container/ProductContainer.vue';

// accessing store
const store = useStore();

// reactive variables
const state = reactive({
  allProducts: null,
})

// computed methods


onMounted( 
  async ()=>{
    await store.dispatch('products/getAllProducts');
    state.allProducts = store.getters['products/getProducts'].filter( product => product.category === 'women' );
  })
</script>

<style>

</style>