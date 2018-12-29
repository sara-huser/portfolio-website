<template>
  <div id="app">
    <div
      class="form-group"
      :class="{ 'form-group--error': $v.username.$error, 'form-group--loading': $v.username.$pending }"
    >
      <label class="form__label">Username</label>
      <input class="form__input" v-model.trim="$v.username.$model">
    </div>
    <div class="error" v-if="!$v.username.required">Username is required.</div>
    <div class="error" v-if="!$v.username.isUnique">This username is already registered.</div>

    <!--   <pre>{{ $v }}</pre> -->
    <form id="demo">
      <!-- text -->
      <div>
        First name:
        <input type="text" v-model="firstName">
        {{firstName}}
      </div>
      <div>
        Last name:
        <input type="text" v-model="lastName">
        {{lastName}}
      </div>
      <!-- checkbox -->
      <p>
        <input type="checkbox" v-model="checked">
        {{checked ? "yes" : "no"}}
      </p>
      <!-- radio buttons -->
      <p>
        <input type="radio" name="picked" value="one" v-model="picked">
        <input type="radio" name="picked" value="two" v-model="picked">
        {{picked}}
      </p>
      <!-- select -->
      <p>
        <select v-model="selected">
          <option>one</option>
          <option>two</option>
        </select>
        {{selected}}
      </p>
      <!-- multiple select -->
      <p>
        <select v-model="multiSelect" multiple>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        {{multiSelect}}
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent"
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
