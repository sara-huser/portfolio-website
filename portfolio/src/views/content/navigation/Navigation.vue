<template>
  <nav class="navbar is-transparent is-spaced">
    <div class="navbar-brand">
      <div class="navbar-burger burger" data-target="navbarBulma" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarBulma" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item is-uppercase" to="/">About</router-link>
        <router-link class="navbar-item is-uppercase" to="/work">Work</router-link>
        <router-link class="navbar-item is-uppercase" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationComponent",
  methods: {
    toggleMenu: function() {
      var burger = document.querySelector(".navbar-burger"),
        menu = document.querySelector(".navbar-menu");
      if (burger.classList.contains("is-active")) {
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
      } else {
        burger.classList.add("is-active");
        menu.classList.add("is-active");
      }
    }
  },
  watch: {
    $route() {
      var burger = document.querySelector(".navbar-burger"),
        menu = document.querySelector(".navbar-menu");
      burger.classList.remove("is-active");
      menu.classList.remove("is-active");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import "../../../assets/sass/colors.scss";

.navbar {
  background: transparent;
}

.navbar-item {
  padding: 0.5rem 1.5rem;
}
</style>
