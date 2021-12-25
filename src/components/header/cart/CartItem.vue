<template>
  <div class="cart-item flex">
      <div class="product-image mr-3 h-12 w-12 flex-shrink-0 flex-grow-0 overflow-hidden bg-primary-orange-pale rounded-md">
          <img :src="getImgUrl" class="object-cover" alt="">
      </div>
      <div class="product-title text-sm xl:text-xs flex-shrink-0 flex-grow-0 w-[70%] mr-1 font-Kumbh-Sans ">
          <p class="text-gray-400 overflow-hidden whitespace-nowrap mb-1 text-ellipsis"> {{ item.title }} </p>
          <p>
              <span class="text-gray-400">
                  ${{ discountPrice }}
              </span> 
              <span class="text-gray-400 mr-1">
                  x {{ item.quantity }}
              </span> 
              <span class="text-gray-800 font-bold">
                  {{ discountPrice * item.quantity }}
              </span>
          </p>
      </div>
      <div class="delete-action flex flex-shrink-0 flex-grow-0  items-center justify-center cursor-pointer" @click="removeProduct">
          <svg class="stroke-slate-400 hover:stroke-slate-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
      </div>
  </div>
</template>

<script setup>
import {  computed } from 'vue';
import { useStore } from 'vuex';
// props
const props = defineProps({
    item:{
        type: Object,
        default: ()=>{
            {}
        }
    }
});

// accessing store
const store = useStore();

// computed methods
const discountPrice = computed(()=>{
    return (Math.floor(props.item.price - (props.item.price * (props.item.discount/100)))).toFixed(2)
})

const removeProduct = computed(()=>{
    store.commit('cart/removeProductFromCart', props.item)
})

// methods
const getImgUrl = computed(()=>{
    return `/images/${props.item.image}`;
})

</script>

<style scoped>
.card-item{
    overflow-wrap: break-word;
    min-width: 0;
    min-height: 0;
}
</style>