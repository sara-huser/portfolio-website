<template>
  <form-component></form-component>
</template>

<script>
import FormComponent from "@/views/content/components/Form.vue";

export default {
  name: "ConditionalFormComponent",
  components: {
    FormComponent
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import "../../../../assets/sass/colors.scss";

.navbar {
  background: transparent;
}

.navbar-item {
  padding: 0.5rem 1.5rem;
}
</style>
