<template>
  <div class="app">
    <Header></Header>
    <Menu></Menu>
    <MainContainer></MainContainer>
  </div>
</template>

<script>
import Header from "./Header";
import Menu from "./Menu";
import MainContainer from "./MainContainer";

export default {
  components: {
    Header,
    Menu,
    MainContainer
  },
  name: "article"
}
</script>

<style scoped>
.app {
  height: 1800px
}
</style>