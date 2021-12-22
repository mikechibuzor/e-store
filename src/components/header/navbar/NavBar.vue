<template>
  <nav class="ml-8">
      <div class="hamburger-button xl:hidden z-30 absolute left-5 top-7" @click="toggleMenu">
        <!-- icon menu -->
        <svg v-if="menuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/>
        </svg>

        <!-- icon close  -->
        <svg v-if="!menuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
        </svg>
      </div>
        <!-- nav-list Desktop -->
        <ul class="fixed hidden xl:static  xl:flex">
            <li class="px-4">
                <router-link to="/collections" title="Collections" class="relative text-center cursor-pointer inline-block text-dark-grayish-blue">Collections</router-link>
            </li>
            <li class="px-4">
                <router-link to="/men" title="Men" class="relative text-center cursor-pointer inline-block text-dark-grayish-blue">Men</router-link>
            </li>
            <li class="px-4">
                <router-link to="/women" title="Women" class="relative text-center cursor-pointer inline-block  text-dark-grayish-blue">Women</router-link>
            </li>
            <li class="px-4">
                <router-link to="/about" title="About" class="relative hover:font-bold text-center inline-block cursor-pointer  text-dark-grayish-blue">About</router-link>
            </li>
            <li class="px-4">
                <router-link to="/contact" title="Contact" class="relative text-center cursor-pointer inline-block text-dark-grayish-blue">Contact</router-link>
            </li>
        </ul> 

        <transition name="fade">
            <div v-if="!menuOpen" class="menu-overlay z-20 fixed xl:hidden left-0 top-0 bottom-0 right-0">
                <ul class="bg-white pt-20 h-screen w-4/6 font-Kumbh-Sans">
                <li class="px-4">
                    <router-link to="/collections" title="Collections" class="mb-4 font-bold text-center cursor-pointer inline-block text-black">Collections</router-link>
                </li>
                <li class="px-4">
                    <router-link to="/men" title="Men" class="mb-4 font-bold text-center cursor-pointer inline-block text-black">Men</router-link>
                </li>
                <li class="px-4">
                    <router-link to="/women" title="Women" class="mb-4 font-bold text-center cursor-pointer inline-block text-black">Women</router-link>
                </li>
                <li class="px-4">
                    <router-link to="/about" title="About" class="mb-4 font-bold text-center cursor-pointer inline-block text-black">About</router-link>
                </li>
                <li class="px-4">
                    <router-link to="/contact" title="Contact" class="mb-4 font-bold text-center cursor-pointer inline-block font-Kumbh-Sans text-black">Contact</router-link>
                </li>
                </ul>  
            </div>
        </transition>
         


  </nav>
</template>
<script setup>
// import HamburgerButton from './hamburger/HamburgerButton.vue';

import { ref } from 'vue';

// reactive variables
const menuOpen = ref(true);

// methods
const toggleMenu = ()=>{
    menuOpen.value = !menuOpen.value; 
}
</script>

<style scoped>
a::after{
    position: absolute;
    content: '';
    height: .2rem;
    border-radius: .1rem;
    background:hsl(26, 100%, 55%);
    bottom: -2.5rem;
    left: 0;
    width: 0%;
    transition: all .3s ease-in-out;
}
a::before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}
a:hover{
    color: black;
    font-weight: 600;
}
a:hover::after{
    width: 100%;
}
a.router-link-active::after{
    width: 100%;
}

.fade-enter-active{
    animation: fade .3s linear forwards;
}

.fade-leave-active{
    animation: fade .3s linear alternate-reverse;
}

@keyframes fade{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

.menu-overlay{
    background-color: rgba(0, 0, 0, .4);
}

.menu-overlay ul{
    box-shadow: 2px 0px 12px rgba(0,0,0,.1);
}
</style>