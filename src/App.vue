<template>
  <div class="wrapper px-32">
    <the-header></the-header>
    <router-view v-slot="slotProps">
        <transition name="route" mode="in-out">
          <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
  </div>
</template>

<script setup>
import TheHeader from './components/header/TheHeader.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
.route-enter-from{
  opacity: 0;
  transform: translateY(-.4rem);
}
.route-leave-to{
  opacity: 0;
  transform: translateY(4rem);
}
.route-enter-active{
  transition: all .3s ease-out;
}
.route-leave-active{
    transition: all .3s ease-in;
}
.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}

</style>