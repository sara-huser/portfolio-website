<template>
  <div v-bind:class="[classes, type, 'column']">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img :src="require(`@/assets/img/projects/${this.url}/1.jpg`)" alt>
        </figure>
        <div class="card-content is-overlay is-clipped">
          <div class="card-details fadeIn-bottom">
            <div class="title has-text-white" v-html="this.text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryItemComponent",
  props: [
    "text",
    "type",
    "description",
    "image",
    "buttonText",
    "buttonLink",
    "classes",
    "id",
    "url"
  ]
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/colors.scss";

.card {
  border: none;
  cursor: pointer;
  .image {
    width: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100% !important;
      height: auto !important;
      margin: auto !important;
      position: absolute !important;
      top: -100% !important;
      right: -100% !important;
      bottom: -100% !important;
      left: -100% !important;
    }
  }
  .card-content {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
    .card-details {
      position: absolute;
      text-align: center;
      padding-left: 1em;
      padding-right: 1em;
      width: 100%;
      top: 50%;
      left: 50%;
      opacity: 0;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-transition: all 0.3s ease-in-out 0s;
      -moz-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
  }
  &:hover {
    .card-content {
      opacity: 1;
      .card-details {
        top: 50%;
        left: 50%;
        opacity: 1;
        h3 {
          color: #fff;
          font-weight: 500;
          letter-spacing: 0.15em;
          margin-bottom: 0.5em;
          text-transform: uppercase;
        }
        p {
          color: #fff;
          font-size: 0.8em;
        }
      }
    }
  }
}

.fadeIn-bottom {
  top: 80%;
}
</style>
