import comp from "C:/Users/86189/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/posts/article5.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article5.html\",\"title\":\"修改接口\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"修改接口\",\"date\":\"2024-04-10T00:00:00.000Z\",\"category\":[\"接口\"],\"tag\":[\"api\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/article5.md\",\"excerpt\":\"<div class=\\\"language-php\\\" data-ext=\\\"php\\\" data-title=\\\"php\\\"><pre class=\\\"language-php\\\"><code><span class=\\\"token comment\\\">#修改</span>\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token function-definition function\\\">update</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name type-declaration\\\">Request</span> <span class=\\\"token variable\\\">$request</span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token punctuation\\\">{</span>\\n        \\n        <span class=\\\"token comment\\\">//获取数据</span>\\n        <span class=\\\"token variable\\\">$data</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token variable\\\">$request</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">param</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token comment\\\">//验证数据</span>\\n        <span class=\\\"token keyword\\\">try</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token comment\\\">//验证</span>\\n            <span class=\\\"token function\\\">validate</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name static-context\\\">UserValidate</span><span class=\\\"token operator\\\">::</span><span class=\\\"token keyword\\\">class</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">scene</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'edit'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">check</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">$data</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span><span class=\\\"token keyword\\\">catch</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">ValidateException</span> <span class=\\\"token variable\\\">$exception</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token keyword\\\">return</span> <span class=\\\"token variable\\\">$this</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">create</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token variable\\\">$exception</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">getError</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">400</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token comment\\\">//修改数据写入</span>\\n        <span class=\\\"token variable\\\">$editedObj</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token class-name static-context\\\">UserModel</span><span class=\\\"token operator\\\">::</span><span class=\\\"token function\\\">update</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">$data</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">getData</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string single-quoted-string\\\">'id'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token keyword\\\">echo</span> <span class=\\\"token variable\\\">$editedObj</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">empty</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">$editedObj</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token keyword\\\">return</span> <span class=\\\"token variable\\\">$this</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">create</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token string single-quoted-string\\\">'修改失败~~'</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">400</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span><span class=\\\"token keyword\\\">else</span><span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token keyword\\\">return</span> <span class=\\\"token variable\\\">$this</span><span class=\\\"token operator\\\">-&gt;</span><span class=\\\"token function\\\">create</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token variable\\\">$editedObj</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token string single-quoted-string\\\">'修改成功~~'</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token number\\\">200</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
export { comp, data }