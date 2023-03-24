<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      height="125"
      src="./assets/logo.svg"
      width="125"
    >

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink
          rel="noopener noreferrer nofollow"
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          rel="noopener noreferrer nofollow"
          to="/about"
        >
          About
        </RouterLink>
        <RouterLink
          rel="noopener noreferrer nofollow"
          to="/renderless"
        >
          Renderless Component
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  max-height: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  color: var(--color-link);
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  margin-top: 2rem;
  font-size: 12px;
  text-align: center;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
}

.router-link-exact-active {
  color: var(--color-accent);
}

.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
    place-items: center;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    margin-top: 1rem;
    margin-left: -1rem;
    padding: 1rem 0;

    font-size: 1rem;
    text-align: left;
  }
}
</style>
