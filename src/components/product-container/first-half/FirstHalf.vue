<template>
  <div class="first-half relative ">
        <div class="main-display cursor-pointer shadow xl:rounded-xl xl:mt-16 custom-breakpoint:mt-24 flex items-center"  @click="emit('toggleModal')">
            <div class="img xl:rounded-xl xl:h-height55 custom-breakpoint:h-height50  overflow-hidden">
                <img class="h-full w-full object-cover" :src="getImgUrl" alt="">
            </div>
        </div>
        <div class="thumbnails hidden xl:flex justify-between pt-7 custom-breakpoint:pt-9">
            <div v-for="(image, index) in images" :key="image" :class="{'active-thumb-nail': index === imageIndex }" class="single-thumb bg-white cursor-pointer hover:opacity-60 border rounded-lg overflow-hidden" @click="changeMainDisplayImage(index)">
                <img :src="`/images/${image}`" class="h-full w-full" alt="">
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
</template>

<script setup>
import { ref, computed } from 'vue';

// props
const props = defineProps({
    images:{
        type: [],
        default: ()=>{
            []
        }
    }
});

// emits
const emit = defineEmits(['toggleModal'])

// reactive variable
const imageIndex = ref(0);


// computed methods
const getImgUrl = computed(()=>{
    return `/images/${props.images[imageIndex.value]}`;
})

// methods
const changeMainDisplayImage = (index)=>{
    imageIndex.value = index;
}


</script>

<style scoped>

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
</style>