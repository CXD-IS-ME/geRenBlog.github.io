import{_ as n,o as s,c as a,a as t}from"./app-DMZOAs2V.js";const p={},e=t(`<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">#新增</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//获取表单所填数据</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">param</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//验证返回</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//验证</span>
            <span class="token function">validate</span><span class="token punctuation">(</span><span class="token class-name static-context">UserValidate</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ValidateException</span> <span class="token variable">$exception</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$exception</span><span class="token operator">-&gt;</span><span class="token function">getError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//密码加密</span>
        <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;login_pwd&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">sha1</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;login_pwd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//写入数据并返回id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token class-name static-context">UserModel</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;添加失败&#39;</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;添加成功&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","article3.html.vue"]]),r=JSON.parse(`{"path":"/posts/article3.html","title":"新增接口","lang":"en-US","frontmatter":{"title":"新增接口","date":"2024-04-10T00:00:00.000Z","category":["接口"],"tag":["api"]},"headers":[],"git":{},"filePathRelative":"posts/article3.md","excerpt":"<div class=\\"language-php\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token comment\\">#新增</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name type-declaration\\">Request</span> <span class=\\"token variable\\">$request</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//获取表单所填数据</span>\\n        <span class=\\"token variable\\">$data</span> <span class=\\"token operator\\">=</span> <span class=\\"token variable\\">$request</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">param</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//验证返回</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">//验证</span>\\n            <span class=\\"token function\\">validate</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name static-context\\">UserValidate</span><span class=\\"token operator\\">::</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">check</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$data</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ValidateException</span> <span class=\\"token variable\\">$exception</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token variable\\">$exception</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">getError</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">400</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">//密码加密</span>\\n        <span class=\\"token variable\\">$data</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'login_pwd'</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">sha1</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$data</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'login_pwd'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//写入数据并返回id</span>\\n        <span class=\\"token variable\\">$id</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name static-context\\">UserModel</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$data</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">getData</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'id'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">empty</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$id</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'添加失败'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">400</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$id</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string single-quoted-string\\">'添加成功'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}`);export{k as comp,r as data};
