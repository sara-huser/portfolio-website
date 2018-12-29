<template>
  <div id="app">
    <navigation-component></navigation-component>
    <div class="main-content">
      <transition
        appear
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <img
          v-show="['about', 'contact'].indexOf($route.name) > -1"
          class="portrait is-hidden-mobile"
          v-bind:src="imgUrl('sara_half.png')"
        >
      </transition>
      <router-view/>
    </div>
  </div>
</template>

<script>
var images = require.context("@/assets/img/", false, /\.*/);

import NavigationComponent from "@/views/content/navigation/Navigation.vue";

export default {
  name: "App",
  components: { NavigationComponent },
  methods: {
    imgUrl: function(path) {
      return images("./" + path);
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1 }, { duration: 300 });
    },
    leave: function(el, done) {
      Velocity(el, { opacity: 0 }, { complete: done });
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

img {
  &.portrait {
    position: fixed;
    left: 0;
    max-width: 50vw;
    top: 7rem;
    @media screen and (max-width: $widescreen) {
      width: 50vw;
    }
    @media screen and (max-width: $desktop) {
      top: 12rem;
    }
  }
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
