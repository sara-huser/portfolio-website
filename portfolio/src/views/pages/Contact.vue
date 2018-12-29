<template>
  <div class="main">
    <section-component
      v-for="(section) in $store.state.contact_page.sections"
      v-bind:id="section.id"
      v-bind:text="section.text"
      v-bind:icons="section.icons"
      :key="section.id"
    ></section-component>
  </div>
</template>

<script>
import SectionComponent from "@/views/content/Section.vue";

export default {
  name: "Contact",
  components: { SectionComponent }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import "../../assets/sass/colors.scss";

.contact {
  .container {
    .title {
      @media screen and (max-width: $tablet) {
        font-size: 4.5vw;
      }
    }
  }
}
</style>
