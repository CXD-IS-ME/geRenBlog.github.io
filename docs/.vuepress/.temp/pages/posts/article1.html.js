import comp from "C:/Users/86189/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"查询接口\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"查询接口\",\"date\":\"2024-04-10T00:00:00.000Z\",\"category\":[\"接口\"],\"tag\":[\"api\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"<div class=\\\"language-php\\\" data-ext=\\\"php\\\" data-title=\\\"php\\\"><pre class=\\\"language-php\\\"><code><span class=\\\"token comment\\\">#查询</span>\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token function-definition function\\\">index</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token punctuation\\\">{</span>\\n        \\n        <span class=\\\"token comment\\\">//获取数据</span>\\n        <span class=\\\"token variable\\\">$data</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token class-name static-context\\\">UserModel</span><span class=\\\"token operator\\\">::</span><span class=\\\"token function\\\">select</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">$data</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">isEmpty</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token keyword\\\">return</span> <span class=\\\"token variable\\\">$this</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">create</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string single-quoted-string\\\">'数据不存在！'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">204</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">else</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token keyword\\\">return</span> <span class=\\\"token variable\\\">$this</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">create</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">$data</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string single-quoted-string\\\">'请求数据成功！'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">200</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
export { comp, data }