<template>
  <div>中央控制器</div>
</template>

<script>
// import Header from "./components/Header";
// import MainNav from "./components/MainNav";
// import Loading from "./components/Loading";

// import { loading, header, nav } from './store'

export default {
  name: 'App',
  components: {
    // Header,
    // MainNav,
    // Loading,
  },
  setup() {
    return {
      test: '测试'
    }
  }
}
</script>

<style>
html,
body,
#micro_web_main_app {
  width: 100%;
  /*height: 100%;*/
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sub-container {
  min-height: 100%;
  position: relative;
}

#micro-container {
  min-height: 100%;
  width: 100%;
}
</style>
