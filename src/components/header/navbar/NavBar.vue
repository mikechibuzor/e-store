<template>
  <nav class="ml-8">
      <!-- nav-list -->
      <ul class="flex">
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
  </nav>
</template>

<script setup>

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
    font-weight: 500;
}
a:hover::after{
    width: 100%;
}
a.router-link-active::after{
    width: 100%;
}
</style>