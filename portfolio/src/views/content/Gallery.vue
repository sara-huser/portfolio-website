<template>
  <div>
    <div class="buttons-container" v-if="['work'].indexOf($route.name) > -1">
      <div class="button active" id="all-button" v-on:click="filter('all')">All</div>
      <div class="button" id="design-button" v-on:click="filter('design')">Design</div>
      <div class="button" id="development-button" v-on:click="filter('development')">Development</div>
    </div>
    <transition-group
      class="columns is-multiline"
      id="transition_group"
      name="slide-fade"
      mode="out-in"
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
    >
      <gallery-item-component
        v-scroll-to="'html'"
        v-if="['work'].indexOf($route.name) > -1"
        v-for="(project) in filteredItems($store.state.work_page.projects)"
        v-on:click.native="showProject(project)"
        v-bind:size="'is-half'"
        v-bind:type="project.type"
        v-bind:text="project.text"
        v-bind:description="project.description"
        v-bind:subheader="project.subheader"
        v-bind:image="project.image"
        v-bind:classes="project.classes"
        v-bind:url="project.url"
        v-bind:id="project.id"
        :key="project.id"
      ></gallery-item-component>
    </transition-group>
  </div>
</template>

<script>
import GalleryItemComponent from "@/views/content/components/GalleryItem.vue";
import Velocity from "velocity-animate";

export default {
  name: "GalleryComponent",
  components: {
    GalleryItemComponent
  },
  data() {
    return {
      title: "",
      description: "",
      subheader: "",
      projectId: null,
      numImages: null,
      accordionActive: false,
      currentTag: "all",
      options: {
        getSortData: {
          id: "id"
        },
        sortBy: "id"
      }
    };
  },
  methods: {
    showProject: function(project) {
      this.title = project.text;
      this.description = project.description;
      this.subheader = project.subheader;
      this.projectId = project.id;
      this.numImages = project.numImages;
      this.$router.push({ path: "/work/" + project.url });
    },
    filter: function(tag) {
      this.currentTag = tag;
      var buttons = document.querySelectorAll(".button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
      document.getElementById(tag + "-button").classList.add("active");
    },
    filteredItems: function(projects) {
      var filter = this.currentTag;
      return projects.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(10px)";
      el.style.transition = "all, transform 300ms ease-out";
    },
    enter: function(el, done) {
      var nodes = Array.prototype.slice.call(
        document.getElementById("transition_group").children
      );
      var delay = nodes.indexOf(el) * 150;
      if (this.leaveAnimationActive) {
        delay += 200;
      }
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 1, transform: "translateY(0px)" },
          { complete: done }
        );
      }, delay);
    },
    beforeLeave: function() {
      this.leaveAnimationActive = true;
    },
    leave: function(el, done) {
      Velocity(
        el,
        {
          opacity: 0
        },
        { complete: done }
      );
    },
    afterLeave: function() {
      this.leaveAnimationActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import "../../assets/sass/colors.scss";

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  @media screen and (max-width: $tablet) {
    padding-bottom: 0;
    padding-top: 30px;
  }
  .button {
    background: transparent;
    border: transparent;
    transition: 0.3s all ease;
    text-transform: uppercase;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      background: #dddddd;
    }
    &.active {
      background: #072d3d;
      color: white;
    }
  }
}

.fadeIn-bottom {
  top: 80%;
}
</style>
