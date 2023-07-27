<template>
  <!-- 头部菜单 -->
  <div class="sub-nav py-3 flex items-center">
    <button class="reset-btn sidebar-button flex items-center" aria-expanded="false">
      <i class="el-icon mr-2" style="font-size:20px;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="11" height="2" fill="#606266"></rect>
          <rect x="2" y="11" width="14" height="2" fill="#606266"></rect>
          <rect x="2" y="15" width="8" height="2" fill="#606266"></rect>
          <rect x="2" y="3" width="16" height="2" fill="#606266"></rect>
        </svg>
      </i>
      <span class="leading-6">Menu</span>
    </button>
    <button ariadisabled="false" type="button" class="el-button is-link go-back-top show height-5" style="">
      <span>Back to top</span>
    </button>
  </div>
  <!-- 左侧菜单 -->

</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>


.sub-nav {
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: border-color var(--el-transition-duration),background-color var(--el-transition-duration-fast);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  z-index: var(--sub-nav-z-index);
  overflow: hidden
}

@media (max-width: 767px) {
  .sub-nav {
    padding:0 24px
  }
}

.sub-nav .go-back-top {
  transform: translateY(100%);
  opacity: 0
}

.sub-nav .go-back-top.show {
  transform: translateY(0);
  opacity: 1
}

@media screen and (min-width: 960px) {
  .sub-nav {
    display:none!important
  }
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

button.reset-btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer
}
.sidebar-button {
  cursor: pointer;
  color: var(--text-color)
}

.leading-6 {
  line-height: 1.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

</style>