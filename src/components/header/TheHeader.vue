<template>
  <header class="flex justify-between border-b-2 pt-6 pb-7 border-light-grayish-blue">
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