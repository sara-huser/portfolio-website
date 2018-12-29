<template>
  <div class="main">
    <section-component
      v-for="(section) in $store.state.about_page.sections"
      v-bind:id="section.id"
      v-bind:text="section.text"
      v-bind:image="section.image"
      v-bind:buttonText="section.buttonText"
      v-bind:buttonLink="section.buttonLink"
      v-bind:calloutImage="section.calloutImage"
      :key="section.id"
    ></section-component>
  </div>
</template>

<script>
import SectionComponent from "@/views/content/Section.vue";

export default {
  name: "About",
  components: { SectionComponent }
};
</script>

<style>
</style>
