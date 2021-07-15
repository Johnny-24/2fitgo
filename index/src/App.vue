<template>
  <div class="wrap">
    <particles-bg type="cobweb" color="#26cc34" :bg="true" />
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'App',
  components: {
    ParticlesBg
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  height: 100vh;
  width: 100%;
}
.wrap {
  height: 100vh;
  width: 100%;
  background: #000e21;
  position: relative;
  z-index: 1;
}
</style>
