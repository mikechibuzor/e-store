<template>
    <!-- hamburger -->
    <div class="hamburger-container block xl:hidden">
      <div class="btn">
        <div class="burger"></div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hamburger-container{
    position: fixed;
    left: 1rem;
    top: 1.7rem;
}
.btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.7rem;
    height: 1rem;
    cursor: pointer;
    transition: all .2s ease-in;
    z-index: 500;
}

.burger {
    width: 75%;
    height: .2rem;
    background-color: black;
    border-radius: 5px;
    transition: all .2s ease-in;
}

.burger::before,
.burger::after {
    content: "";
    position: absolute;
    width: 75%;
    height: .2rem;
    background-color: black;
    border-radius: .4rem;
    transition: all .2s ease-in;
}

.burger::after {
    transform: translateY(.5rem);
}

.burger::before {
    transform: translateY(-.5rem);
}

/* Animation */
.btn.open .burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
}

.btn.open .burger::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.btn.open .burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
}
</style>