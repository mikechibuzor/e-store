<template>
  <div class="checkout-container xl:px-32 custom-breakpoint1:px-48 pt-10 pb-10">
      <div class="first-half">
          <h3 class="text-3xl font-bold text-black mb-8">Your Cart</h3>
          <ul>
              <cart-item v-for="prodItem in products" :id="prodItem.id" :key="prodItem.id" :item="prodItem"></cart-item>
          </ul>
          <h1 class="text-3xl font-bold mt-14 font-Kumbh-Sans">Total: ${{ store.getters['cart/cartTotalPrice'].toFixed(2) }} </h1>
      </div>
      <div class="second-half w-3/5 bg-gray-100 rounded-md px-12 pt-10 pb-8 shadow">
          <h5 class="font-medium font-Kumbh-Sans tracking-wider text-2xl">Card Details</h5>
          <form action="" class="mt-10 ">
              <div class="form-element mb-6">
                  <div class="ch-cont flex gap-4">
                    <label for="card-type-master" class="check-container cursor-pointer h-10 w-28 relative">
                        <input type="radio" name="card-type" id="card-type-master" class="relative z-30"/>
                        <div class="img absolute w-full h-full top-0">
                            <img src="../assets/images/master-card.png" alt="master-card" class="h-full  w-full object-cover " />
                        </div>
                    </label>                    
                    <label for="card-type-verve" class="check-container cursor-pointer h-10 w-28 relative">
                        <input type="radio" name="card-type" id="card-type-verve" class="relative z-30"/>
                        <div class="img absolute w-full h-full top-0">
                            <img src="../assets/images/verve.png" alt="master-card" class="h-full  w-full object-cover " />
                        </div>
                    </label>                    
                    <label for="card-type-visa" class="check-container cursor-pointer h-10 w-28 relative">
                        <input type="radio" name="card-type" id="card-type-visa" class="relative z-30"/>
                        <div class="img absolute w-full h-full top-0">
                            <img src="../assets/images/visa.png" alt="master-card" class="h-full  w-full object-cover " />
                        </div>
                    </label>                    
                  </div>
              </div>

              <div class="form-element flex flex-col mb-6">
                  <label for="card-number" class="text-sm mb-2">Card Number</label>
                  <input type="text" name="card-number" id="card-number" class="w-full px-4 py-2 rounded outline-none border-none">
              </div>

              <div class="form-group mb-6 flex gap-4">
                  <div class="form-element flex flex-col mb-6">
                  <label for="card-number" class="text-sm mb-2">Expiry Date</label>
                  <input type="text" name="card-number" id="card-number" class="w-full px-4 py-2 rounded outline-none border-none">
              </div>
              <div class="form-element flex flex-col mb-6">
                  <label for="card-number" class="text-sm mb-2">Cvv</label>
                  <input type="text" name="card-number" id="card-number" class="w-full px-4 py-2 rounded outline-none border-none">
              </div>
              </div>
              <div class="form-element">
                  <button class="text-white text-sm font-bold font-Kumbh-Sans rounded-lg px-8 flex items-center justify-center py-5 bg-primary-orange-1 w-full" >
                        Checkout
                    </button>
              </div>
          </form>
      </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';

import CartItem from '../components/header/cart/CartItem.vue';

// accessing store
const store = useStore();

// computed
const products = computed(()=>{
    return store.getters['cart/cartProducts'];
})
</script>

<style scoped>
.checkout-container{
    display: grid;
    grid-template-columns: 40% 60%;
}

input[type="radio"]{
    display: none;
}

input[type="radio"]:checked+.img{ 
    border: 4px solid hsl(26, 100%, 55%);
    transform: scale(1.1)
 } 
</style>