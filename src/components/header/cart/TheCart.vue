<template>
  <div class="cart-container z-20 xl:relative">
    <!-- cart-icon -->
    <div class="cart-icon cursor-pointer relative" @click=" showCart = !showCart ">
      <svg class="h-6 w-6 custom-breakpoint2:w-8 custom-breakpoint2:h-8 fill-[#69707D] hover:fill-black" xmlns="http://www.w3.org/2000/svg">
        <path  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fill-rule="nonzero"/>
      </svg>
      <div v-if="store.getters['cart/cartProducts'].length" class="number-of-carts-products absolute -top-3 left-2 text-xs font-bold bg-primary-orange-1 text-white rounded-full px-1 h-4 w-4 flex items-center justify-center text-center">
        <span>{{ store.getters['cart/cartProducts'].length}}</span>
      </div>
    </div>

    <transition name="slide-fade">
      <!-- shopping cart items -->
      <shopping-cart-list v-if="showCart"></shopping-cart-list>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ShoppingCartList from './ShoppingCartList.vue';

// accessing store
const store = useStore();

// reactive variables
const showCart = ref(false);


</script>

<style scoped>
.slide-fade-enter-active{
    animation: slide-fade .3s ease forwards;
}
.slide-fade-leave-active{
    animation: slide-fade .3s ease forwards alternate-reverse;
}
/* animation for show nav */
@keyframes slide-fade{
    0%{
        opacity: 0;
        transform: translateY(-20%);
    }
    70%{
        opacity: 0.7;
        transform: translateY(10%);
    }
    100%{
        opacity: 1;
        transform: translateY(0%);
    }
}
</style>