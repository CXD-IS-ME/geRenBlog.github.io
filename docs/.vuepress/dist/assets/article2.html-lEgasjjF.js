import{_ as n,o as s,c as a,a as t}from"./app-DMZOAs2V.js";const p={},e=t(`<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">#模糊查询</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">read</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//获取单一数据</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token class-name static-context">UserModel</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断id是否是整型（合不合法）</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name static-context">Validate</span><span class="token operator">::</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;id参数不合法&#39;</span><span class="token punctuation">,</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;查询失败~&#39;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;查询成功~&#39;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","article2.html.vue"]]),r=JSON.parse(`{"path":"/posts/article2.html","title":"模糊查询接口","lang":"en-US","frontmatter":{"title":"模糊查询接口","date":"2024-04-10T00:00:00.000Z","category":["接口"],"tag":["api"]},"headers":[],"git":{},"filePathRelative":"posts/article2.md","excerpt":"<div class=\\"language-php\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token comment\\">#模糊查询</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">read</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$id</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//获取单一数据</span>\\n        <span class=\\"token variable\\">$data</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">UserModel</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$id</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//判断id是否是整型（合不合法）</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token class-name static-context\\">Validate</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">isInteger</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$id</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token string single-quoted-string\\">'id参数不合法'</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">400</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">empty</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$id</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token string single-quoted-string\\">'查询失败~'</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$data</span><span class=\\"token punctuation\\">,</span><span class=\\"token string single-quoted-string\\">'查询成功~'</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}`);export{k as comp,r as data};