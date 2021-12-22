<template>
   <div class="product-container grid grid-cols-2 pl-16 custom-breakpoint:pl-10 ">
      <div class="first-half ">
        <div class="main-display shadow rounded-xl mt-16 custom-breakpoint:mt-24 flex items-center">
            <div class="img rounded-xl h-height55 custom-breakpoint:h-height50  overflow-hidden">
                <img class="h-full w-full" :src="`/images/${product.images[0]}`" alt="">
            </div>
        </div>
        <div class="thumbnails flex justify-between pt-7 custom-breakpoint:pt-9">
            <div v-for="image in product.images" :key="image" class="single-thumb rounded-lg overflow-hidden">
                <img :src="`/images/${image}`" class="h-full w-full" alt="">
            </div>
        </div>
      </div>
      <div class="second-half mt-24 custom-breakpoint:mt-40">
          <h4 class="text-xs font-bold tracking-wider text-primary-orange-1 mb-4 custom-breakpoint2:text-base custom-breakpoint2:mb-6">SNEAKER COMPANY</h4>
          <h1 class="text-5xl font-bold font-Kumbh-Sans custom-breakpoint2:text-6xl">{{ product.title }}</h1>
          <p class="my-6 custom-breakpoint2:my-10 text-dark-grayish-blue custom-breakpoint:text-lg font-Kumbh-Sans custom-breakpoint2:text-lg custom-breakpoint:w-4/5">
              {{ product.about }}
          </p>
          <h4 class="font-Kumbh-Sans font-bold flex w-auto items-center custom-breakpoint:mt-2"><span class="text-3xl custom-breakpoint2:text-4xl">${{ discount }}</span><span class="font-bold px-2 custom-breakpoint2:text-lg custom-breakpoint2:px-3.5 custom-breakpoint2:py-1 py-0.5 text-center text-primary-orange-1 ml-4 rounded-md  bg-primary-orange-pale">{{ product.discount }}%</span></h4>
          <h5 class="line-through custom-breakpoint2:text-lg font-medium font-Kumbh-Sans text-dark-grayish-blue mt-2 custom-breakpoint:mt-4">${{ product.price.toFixed(2) }}</h5>
          <div class="buttons flex items-center mt-6 custom-breakpoint:mt-8  ">
              <div class="counter mr-3 custom-breakpoint:mr-5">
                  <p class="flex items-center px-4 rounded-lg shadow-sm py-3 custom-breakpoint:py-3.5 bg-light-grayish-blue w-40 justify-between">
                      <span class="decrease cursor-pointer inline-block">                          
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="#FF7E1B" viewBox="0 0 24 24" stroke="#FF7E1B">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                      </span>
                      <span class="number cursor-pointer custom-breakpoint2:text-lg inline-block font-bold font-Kumbh-Sans">0</span>
                      <span class="increase cursor-pointer inline-block">                         
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="#FF7E1B" viewBox="0 0 24 24" stroke="#FF7E1B">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                  </p>
              </div>
              <button class="add-to-cart py-3 custom-breakpoint:py-3.5 custom-breakpoint:px-20 px-16 text-white flex items-center bg-primary-orange-1 rounded-lg shadow-sm">
                  <span class="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <span>Add to cart</span>
              </button>
          </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
// props
const props = defineProps({
    product:{
        type: Object,
        default: ()=>{
            {}
        }
    }
});

// computed methods
const discount = computed(()=>{
    return (Math.floor(props.product.price - (props.product.price * (props.product.discount/100)))).toFixed(2)
})
onMounted(()=>{
    console.log(props.product);
})
</script>

<style scoped>
button .add-to-cart{
    box-shadow: 2px 2px 8px 4px #FF7E1B89;
}
.first-half{
    width: 73%;
}

.single-thumb{
    width: 4.7rem;
    /* height: 4.5rem; */
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