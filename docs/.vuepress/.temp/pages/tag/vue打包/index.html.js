import comp from "C:/Users/86189/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/tag/vue打包/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/vue%E6%89%93%E5%8C%85/\",\"title\":\"Tag vue打包\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag vue打包\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"vue打包\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
