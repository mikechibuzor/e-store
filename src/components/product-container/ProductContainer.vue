<template>
   <div class="product-container relative z-10 grid xl:grid-cols-2 mb-8 xl:mb-5 xl:pl-16 custom-breakpoint:pl-10">
      <div class="first-half relative ">
        <div class="main-display cursor-pointer shadow xl:rounded-xl xl:mt-16 custom-breakpoint:mt-24 flex items-center"  @click="toggleModal">
            <div class="img xl:rounded-xl xl:h-height55 object-cover custom-breakpoint:h-height50  overflow-hidden">
                <img class="h-full w-full object-cover" :src="getImgUrl" alt="">
            </div>
        </div>
        <div class="thumbnails hidden xl:flex justify-between pt-7 custom-breakpoint:pt-9">
            <div v-for="(image, index) in product.images" :key="image" :class="{'active-thumb-nail': index === imageIndex }" class="single-thumb bg-white cursor-pointer hover:opacity-60 border rounded-lg overflow-hidden" @click="changeMainDisplayImage(index)">
                <img :src="`/images/${image}`" class="h-full w-full object-cover" alt="">
            </div>
        </div>
        <div class="main-display-controllers xl:hidden z-30 absolute top-[43%] w-full flex items-center justify-between">
            <div class="previous transition-all duration-300 cursor-pointer bg-white flex items-center justify-center transform translate-x-3 p-2.5 rounded-full" @click="prevDisplay">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <div class="next transition-all duration-300 cursor-pointer bg-white flex items-center justify-center transform -translate-x-3 p-2.5 rounded-full" @click="nextDisplay">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
      </div>
     
      <div class="second-half  mt-6 px-4 xl:px-0 xl:mt-24 custom-breakpoint:mt-40">
          <h4 class="text-xs font-bold tracking-wider text-primary-orange-1 mb-2.5 xl:mb-4 custom-breakpoint2:text-base custom-breakpoint2:mb-6">SNEAKER COMPANY</h4>
          <h1 class="text-3xl xl:text-5xl font-bold font-Kumbh-Sans custom-breakpoint2:text-6xl">{{ product.title }}</h1>
          <p class="my-3 xl:my-6 text-sm xl:text-base custom-breakpoint2:my-10 text-dark-grayish-blue custom-breakpoint:text-lg font-Kumbh-Sans custom-breakpoint2:text-lg custom-breakpoint:w-4/5">
              {{ product.about }}
          </p>
          <h4 class="font-Kumbh-Sans font-bold flex w-auto items-center custom-breakpoint:mt-2"><span class="text-xl xl:text-3xl custom-breakpoint2:text-4xl">${{ discount }}</span><span class="font-bold text-sm xl:text-base px-2 custom-breakpoint2:text-lg custom-breakpoint2:px-3.5 custom-breakpoint2:py-1 py-0.5 text-center text-primary-orange-1 ml-4 rounded-md  bg-primary-orange-pale">{{ product.discount }}%</span></h4>
          <h5 class="text-sm xl:text-base line-through custom-breakpoint2:text-lg font-medium font-Kumbh-Sans text-dark-grayish-blue mt-2 custom-breakpoint:mt-4">${{ product.price.toFixed(2) }}</h5>
          <div class="buttons pb-10 xl:pb-0 w-full grid gap-y-4 xl:flex items-center mt-6 custom-breakpoint:mt-8">
              <div class="counter xl:mr-3 custom-breakpoint:mr-5">
                  <p class="flex items-center px-4 rounded-lg shadow-sm py-3.5 xl:py-3 custom-breakpoint:py-3.5 bg-light-grayish-blue w-full xl:w-40 justify-between">
                      <span class="decrease cursor-pointer inline-block" @click="decreaseProductQuantity(product)">                          
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="#FF7E1B" viewBox="0 0 24 24" stroke="#FF7E1B">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </span>
                      <span class="number cursor-pointer custom-breakpoint2:text-lg inline-block font-bold font-Kumbh-Sans">{{ productQuantity }}</span>
                      <span class="increase cursor-pointer inline-block" @click="increaseProductQuantity(product)">                         
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="#FF7E1B" viewBox="0 0 24 24" stroke="#FF7E1B">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                  </p>
              </div>
              <button class="add-to-cart active:scale-90 transition-all duration-300 hover:opacity-70 py-3.5 xl:py-3 custom-breakpoint:py-3.5 custom-breakpoint:px-20 px-16 text-white flex items-center justify-center xl:justify-start bg-primary-orange-1 rounded-lg shadow-sm" @click="addProductToCart(product)">
                  <span class="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <span>Add to cart</span>
              </button>
          </div>
      </div>

     <transition name="fade">
        <!-- modal-overlay -->
        <div v-if="openModal" class="modal-overlay flex items-center justify-center z-20 fixed left-0 right-0 top-0 bottom-0">
            <div class="modal z-30 relative">
                <div class="close cursor-pointer absolute right-0 top-7"  @click="toggleModal">
                    <span>
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd"/>
                        </svg>
                    </span>
                </div>
                <div class="main-display shadow rounded-xl mt-16 custom-breakpoint:mt-24 flex items-center">
                    <div class="img rounded-xl h-height70 custom-breakpoint:h-height60  overflow-hidden">
                        <img class="h-full w-full object-cover" :src="getImgUrl" alt="">
                    </div>
                </div>
                <div class="thumbnails px-8 flex justify-between pt-7 custom-breakpoint:pt-9">
                    <div v-for="(image, index) in product.images" :key="image" :class="{'active-thumb-nail': index === imageIndex }" class="single-thumb cursor-pointer hover:opacity-60 border rounded-lg overflow-hidden" @click="changeMainDisplayImage(index)">
                        <img :src="`/images/${image}`" class="h-full w-full object-cover" alt="">
                    </div>
                </div>
                <div class="main-display-controllers z-30 absolute top-[43%] w-full flex items-center justify-between">
                    <div class="previous transition-all duration-300 cursor-pointer bg-white flex items-center justify-center transform -translate-x-5 p-2.5 rounded-full" @click="prevDisplay">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div class="next transition-all duration-300 cursor-pointer bg-white flex items-center justify-center transform translate-x-5 p-2.5 rounded-full" @click="nextDisplay">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
     </transition>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

// props
const props = defineProps({
    product:{
        type: Object,
        default: ()=>{
            {}
        }
    }
});

// accessing store
const store = useStore();

// reactive variable
const imageIndex = ref(0);
const openModal = ref(false);
// const productQuantity = ref(0);

// computed methods
const discount = computed(()=>{
    return (Math.floor(props.product.price - (props.product.price * (props.product.discount/100)))).toFixed(2)
})
const getImgUrl = computed(()=>{
    return `/images/${props.product.images[imageIndex.value]}`;
})

const productQuantity = computed(()=>{
 const product = store.getters['cart/cartProducts'].find((cartItem)=> cartItem.id === props.product.id);
 if(product){
   return product.quantity;
 }
 else{
   return 0;
 }
});

// // methods
const changeMainDisplayImage = (index)=>{
    imageIndex.value = index;
}
const prevDisplay = ()=>{
    if(imageIndex.value > 0){
        imageIndex.value--;
    }
}
const nextDisplay =()=>{
    if(imageIndex.value < 3){
        imageIndex.value++;
    }
}
const toggleModal = ()=>{
    // so the modal only shows on desktop element
    if(document.documentElement.offsetWidth < 768){
        return;
    }
    openModal.value = !openModal.value;
}
const addProductToCart = (prod)=>{
  store.dispatch('cart/addProductToCart',prod);
  // productQuantity.value = 1;
}
const increaseProductQuantity = (prod)=>{
  // naming might make this seem confusing but trust that they work the same way
  store.dispatch('cart/addProductToCart',prod);
}
const decreaseProductQuantity = (prod)=>{
  store.dispatch('cart/decrementItemQuantity', prod);
}

</script>

<style scoped>
.product-container{
    overscroll-behavior-y: contain;
    overflow-y: auto;
}
button.add-to-cart{
    box-shadow: 1px 1px 12px 2px #FF7E1B56;
}
.first-half{
    width: 70%;
}

.active-thumb-nail{
    border: 2px solid #FF7E1B;
    opacity: .55;
}

.single-thumb{
    width: 4.7rem;
}
.modal-overlay{
    background: rgba(0, 0, 0, .7);
    z-index: 3000;
    overscroll-behavior-y: contain;
    overflow-y: auto;
}
.modal{
  width: 35%;
}
.previous:hover,
.next:hover{
     box-shadow: 2px 2px 4px #FF7E1B22;
}
.previous:hover svg path,
.next:hover svg path{
    stroke: #FF7E1B;
}

/* modal animation */
.fade-enter-active{
    animation: fade .3s linear forwards;
}
.fade-leave-active{
    animation: fade .3s linear forwards alternate-reverse;
}

@keyframes fade{
    from{
        /* transform: scale(0); */
        opacity: 0;
    }
    to{
        /* transform: scale(1); */
        opacity: 1;
    }
}

@media  screen and (min-width: 1440px) {
    .first-half{
        width: 78%;
    }
    .single-thumb{
    width: 5.5rem;
    /* height: 4.5rem; */
}
}
@media  screen and (min-width: 1600px) {
    .first-half{
        width: 77%;
    }
    .single-thumb{
    width: 5.5rem;
    /* height: 4.5rem; */
}
}
@media  screen and (min-width: 1680px) {
    .first-half{
        width: 84%;
    }
    .single-thumb{
    width: 6.6rem;
    /* height: 4.5rem; */
}
}
@media  screen and (max-width: 768px) {
    .first-half{
        width: 100%;
    }
}
@media  screen and (min-width: 1900px) {
    .first-half{
        width: 71%;
    }
    .single-thumb{
    width: 6.6rem;
    /* height: 4.5rem; */
}
}
</style>