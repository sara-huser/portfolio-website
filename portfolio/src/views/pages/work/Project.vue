<template>
  <div id="project-info">
    <div class="header">
      <div class="title" v-html="this.title"></div>
    </div>
    <div
      v-if="this.numImages"
      class="project-images"
      v-bind:projectId="this.projectId"
      v-bind:numImages="this.numImages"
    >
      <div class="project-image" v-for="index in this.numImages" :key="index">
        <img
          v-if="url == 'nouveau-frissons' && index == 2"
          :src="require(`@/assets/img/projects/${url}/${index}.gif`)"
          alt
          v-scroll-reveal
        >
        <img v-else :src="require(`@/assets/img/projects/${url}/${index}.jpg`)" alt v-scroll-reveal>
        <div v-if="index == 1" class="subheader" v-html="subheader" v-scroll-reveal></div>
        <div v-if="index == 2" class="description" v-scroll-reveal>
          <div v-if="type == 'student'" class="label">Student Brief</div>
          {{description}}
          <div v-if="link" class="link">
            <a v-bind:href="link" target="_blank">Visit</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="dev-project">
      <conditional-form-component></conditional-form-component>
    </div>
  </div>
</template>

<script>
var images = require.context("@/assets/img/projects/", false, /\*$/);
import ConditionalFormComponent from "@/views/pages/work/dev/ConditionalForm.vue";

export default {
  name: "ProjectComponent",
  components: { ConditionalFormComponent },
  props: ["url"],
  data() {
    var project = this.$store.getters.getProjectByUrl(this.url);
    return {
      title: project.text,
      description: project.description,
      subheader: project.subheader,
      projectId: project.id,
      numImages: project.numImages,
      type: project.type,
      link: project.link,
      tags: project.tags,
      accordionActive: project.accordionActive,
      options: {
        getSortData: {
          id: "id"
        },
        sortBy: "id"
      }
    };
  },
  methods: {
    imgUrl: function(path) {
      return images("./" + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

#project-info {
  padding-bottom: 84px;
  .project-images {
    .project-image {
      img {
        width: 100%;
        padding-bottom: 30px;
      }
      .subheader {
        font-size: 3.125vw;
        text-align: center;
        max-width: 65vw;
        margin: 14vw auto;
        @media screen and (max-width: $desktop) {
          font-size: 20px;
        }
      }
      .description {
        font-size: 2.125vw;
        text-align: center;
        max-width: 65vw;
        margin: 14vw auto;
        @media screen and (max-width: $desktop) {
          font-size: 16px;
        }
        .label {
          font-size: 0.78125vw;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 20px;
          opacity: 0.7;
          @media screen and (max-width: $desktop) {
            font-size: 12px;
          }
        }
        .link {
          padding-top: 30px;
          a {
            transition: 0.3s all;
          }
        }
      }
    }
  }
  .header {
    text-align: center;
    .title {
      padding-bottom: 30px;
      @media screen and (max-width: $desktop) {
        font-size: 18px;
        padding-bottom: 0;
      }
    }
    @media screen and (max-width: $desktop) {
      float: right;
      display: flex;
      align-items: center;
      height: 72px;
      margin-right: 5vw;
    }
  }

  & > * {
    opacity: 0;
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    transition: all 0.5s linear;

    opacity: 1;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
}

.tile {
  &.item {
    padding: 15px;
    article {
      cursor: pointer;
    }
  }
}

.image {
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: auto;
    margin: auto;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
  }
}

.fadeIn-bottom {
  top: 80%;
}
</style>
