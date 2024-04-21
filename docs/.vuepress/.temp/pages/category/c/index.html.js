import comp from "C:/Users/86189/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/category/c/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/c/\",\"title\":\"Category C\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category C\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"C\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
