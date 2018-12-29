<template>
  <div class="work">
    <div class="container">
      <div
        class="back-arrow-container"
        v-if="['project'].indexOf($route.name) > -1"
        v-on:click="hideProjects()"
      >
        <img
          id="back-arrow"
          :src="require(`@/assets/img/projects/back.png`)"
          alt
          width="25"
          height="25"
        >
        <span>back</span>
      </div>
      <transition name="slide-fade" appear>
        <router-view v-bind:url="this.$route.path.split('/work/').pop()"></router-view>
      </transition>
      <gallery-component></gallery-component>
    </div>
  </div>
</template>

<script>
var images = require.context("@/assets/img/projects/", false, /\*$/);

import GalleryComponent from "@/views/content/Gallery.vue";
import imagesLoaded from "vue-images-loaded";
import Router from "vue-router";

export default {
  name: "Work",
  components: {
    GalleryComponent
  },
  directives: {
    imagesLoaded
  },
  methods: {
    hideProjects: function() {
      this.$router.push({ path: "/work" });
    },
    imgUrl: function(path) {
      return images("./" + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import "../../assets/sass/colors.scss";

.back-arrow-container {
  height: 36px;
  display: flex;
  align-items: center;
  position: absolute;
  cursor: pointer;
  span {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-left: 20px;
    opacity: 0.7;
  }
  @media screen and (max-width: $desktop) {
    position: relative;
    float: left;
    margin-left: 5vw;
    height: 72px;
  }
}
</style>
