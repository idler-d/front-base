<template>
  <!-- 头部 -->
  <header class="navbar has-sidebar">
    <div class="navbar-wrapper">
      <div class="header-container">
        <div class="logo-container">
          <a href="#" ><img class="logo" src="@/assets/logo.png" alt="Logo"></a>
        </div>
        <div class="header-content">
          <div class="social-links">
            <a  target="_blank" title="github" class="social-link">
              <Github />
            </a>
          </div>
<!--          <button class="reset-btn menu-hamburger hamburger"></button>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Github from "@/components/icon/Github";
export default {
  name: "Header",
  components: {Github}
}
</script>

<style scoped>
:root {
  --prism-scheme: light;
  --prism-foreground: #6e6e6e;
  --prism-background: #f4f4f4;
  --prism-comment: #a8a8a8;
  --prism-string: #555555;
  --prism-literal: #333333;
  --prism-keyword: #000000;
  --prism-function: #4f4f4f;
  --prism-deleted: #333333;
  --prism-class: #333333;
  --prism-builtin: #757575;
  --prism-property: #333333;
  --prism-namespace: #4f4f4f;
  --prism-punctuation: #ababab;
  --prism-decorator: var(--prism-class);
  --prism-operator: var(--prism-punctuation);
  --prism-number: var(--prism-literal);
  --prism-boolean: var(--prism-literal);
  --prism-variable: var(--prism-literal);
  --prism-constant: var(--prism-literal);
  --prism-symbol: var(--prism-literal);
  --prism-interpolation: var(--prism-literal);
  --prism-selector: var(--prism-keyword);
  --prism-keyword-control: var(--prism-keyword);
  --prism-regex: var(--prism-string);
  --prism-json-property: var(--prism-property);
  --prism-inline-background: var(--prism-background);
  --prism-comment-style: italic;
  --prism-url-decoration: underline;
  --prism-line-number: #a5a5a5;
  --prism-line-number-gutter: #333333;
  --prism-line-highlight-background: #eeeeee;
  --prism-selection-background: #aaaaaa;
  --prism-marker-color: var(--prism-foreground);
  --prism-marker-opacity: .4;
  --prism-marker-font-size: .8em;
  --prism-font-size: 1em;
  --prism-line-height: 1.5em;
  --prism-font-family: monospace;
  --prism-inline-font-size: var(--prism-font-size);
  --prism-block-font-size: var(--prism-font-size);
  --prism-tab-size: 2;
  --prism-block-padding-x: 1em;
  --prism-block-padding-y: 1em;
  --prism-block-margin-x: 0;
  --prism-block-margin-y: .5em;
  --prism-block-radius: .3em;
  --prism-inline-padding-x: .3em;
  --prism-inline-padding-y: .1em;
  --prism-inline-radius: .3em
}

header {
  display: block;
}

.navbar {
  top: 0;
  left: 0;
  position: relative;
  z-index: var(--nav-z-index)
}

.navbar-wrapper {
  position: relative;
  border-bottom: 1px solid var(--border-color);
  height: var(--header-height);
  padding: 0 12px 0 24px;
  background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  top: 0
}

.navbar-wrapper .header-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto
}

.navbar-wrapper .header-container .header-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1
}

.social-link {
  color: var(--text-color)
}

.social-links {
  height: 24px;
  padding: 0 12px
}

.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height)
}


@media screen and (min-width: 768px) {
  .navbar-wrapper .header-content {
    padding-top:1px
  }
}

@media screen and (min-width: 768px) {
  .navbar-wrapper {
    padding:0 12px 0 32px
  }
}

@media screen and (min-width: 960px) {
  .navbar {
    position: sticky;
    width: 100%
  }
}

@media screen and (min-width: 1280px) {
  .navbar-wrapper {
    padding:0 32px
  }
}

@media screen and (min-width: 1440px) {
  .navbar-wrapper .header-container {
    max-width:calc(var(--vp-screen-max-width))
  }
}

@media screen and (min-width: 1680px) {
  .navbar-wrapper .header-container {
    max-width:calc(var(--vp-screen-max-width))
  }
}


</style>