<template>
  <p>Collections page</p>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
     store.dispatch('products/getAllProducts');
    //  console.log(store);
    //  setTimeout(()=>{
    //    console.log(store.getters['products/getProducts']);
    //  },3000)
    })
</script>

<style>

</style>