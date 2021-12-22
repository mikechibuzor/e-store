<template>
  <p>{{ state.title  }}</p>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';

// accessing store
const store = useStore();

// reactive variables
const state = reactive({
  title: null,
})

// computed methods
// const dispData = computed( ()=> store.getters['products/getProducts'][0].title );

// onMounted(() => {
//      store.dispatch('products/getAllProducts');
//     //  console.log(store);
//      setTimeout(()=>{
//        console.log(store.getters['products/getProducts'][0].title);
//      },3000)
//     })
onMounted( 
  async ()=>{
    await store.dispatch('products/getAllProducts');
    state.title = store.getters['products/getProducts'][0].title;
  })
</script>

<style>

</style>