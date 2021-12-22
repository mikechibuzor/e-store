<template>
  <header class="ml-14 mr-8 md:mx-8 xl:mx-32 custom-breakpoint1:mx-48 flex justify-between shadow xl:shadow-none xl:border-b-2 pt-6 pb-7 xl:border-light-grayish-blue">
      <!-- left section of header -->
      <section class="flex items-center">
          <the-logo></the-logo>
          <nav-bar></nav-bar>
      </section>
      
      <!-- right section of header -->
      <section class="flex items-center">
          <the-cart></the-cart>
          <user-profile></user-profile>
      </section>
  </header>
</template>

<script setup>
import NavBar from './navbar/NavBar.vue';
import TheCart from './cart/TheCart.vue';
import UserProfile from './user-profile/UserProfile.vue';
import TheLogo from './logo/TheLogo.vue';
</script>

<style>

</style>