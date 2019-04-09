<template>
  <div id="app">
	
	<router-view></router-view>
	<router-view name="second"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* @import url('./assets/icons/fontawesome/css/all.min.css'); */
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  @import url('./assets/css/circle.css');
  @import url('./assets/scss/main.css');
</style>
