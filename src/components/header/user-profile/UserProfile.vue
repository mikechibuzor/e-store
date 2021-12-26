<template>
  <div class="user-profile bg-primary-orange-1 cursor-pointer h-6 w-6 xl:h-12 xl:w-12 custom-breakpoint2:h-16 ml-4 xl:ml-10">
      <img src="../../../assets/images/image-avatar.png" class="h-full w-full" alt="">
  </div>
</template>

<script setup>

</script>

<style scoped>
.user-profile{
    border-radius: 50%;
}
.user-profile:hover{
    border: 2px solid hsl(26, 100%, 55%);
}
</style>