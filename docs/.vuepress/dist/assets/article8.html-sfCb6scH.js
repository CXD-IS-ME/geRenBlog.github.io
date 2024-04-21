import{_ as n,o as s,c as a,a as t}from"./app-DMZOAs2V.js";const p={},e=t(`<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>#controller下创建Base基类
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Base</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$msg</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$code</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$request</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token comment">//状态码</span>
            <span class="token string single-quoted-string">&#39;code&#39;</span><span class="token operator">=&gt;</span><span class="token variable">$code</span><span class="token punctuation">,</span>
            <span class="token comment">//消息</span>
            <span class="token string single-quoted-string">&#39;msg&#39;</span><span class="token operator">=&gt;</span><span class="token variable">$msg</span><span class="token punctuation">,</span>
            <span class="token comment">//数据</span>
            <span class="token string single-quoted-string">&#39;data&#39;</span><span class="token operator">=&gt;</span><span class="token variable">$data</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//返回api接口</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span><span class="token variable">$type</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__call</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$arguments</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;msg&#39;</span><span class="token punctuation">,</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//方法错误</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","article8.html.vue"]]),r=JSON.parse(`{"path":"/posts/article8.html","title":"创建公共类","lang":"en-US","frontmatter":{"title":"创建公共类","date":"2024-04-10T00:00:00.000Z","category":["基类（公共）"],"tag":["api"]},"headers":[],"git":{},"filePathRelative":"posts/article8.md","excerpt":"<div class=\\"language-php\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code>#controller下创建Base基类\\n<span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span>\\n\\n<span class=\\"token keyword\\">namespace</span> <span class=\\"token package\\">app<span class=\\"token punctuation\\">\\\\</span>controller</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">use</span> <span class=\\"token package\\">think<span class=\\"token punctuation\\">\\\\</span>Response</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name-definition class-name\\">Base</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$data</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword type-hint\\">string</span> <span class=\\"token variable\\">$msg</span> <span class=\\"token operator\\">=</span> <span class=\\"token string single-quoted-string\\">''</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword type-hint\\">int</span> <span class=\\"token variable\\">$code</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword type-hint\\">string</span> <span class=\\"token variable\\">$type</span> <span class=\\"token operator\\">=</span> <span class=\\"token string single-quoted-string\\">'json'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span> <span class=\\"token class-name return-type\\">Response</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token variable\\">$request</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n            <span class=\\"token comment\\">//状态码</span>\\n            <span class=\\"token string single-quoted-string\\">'code'</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token variable\\">$code</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token comment\\">//消息</span>\\n            <span class=\\"token string single-quoted-string\\">'msg'</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token variable\\">$msg</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token comment\\">//数据</span>\\n            <span class=\\"token string single-quoted-string\\">'data'</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token variable\\">$data</span>\\n        <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">//返回api接口</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token class-name static-context\\">Response</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$request</span><span class=\\"token punctuation\\">,</span><span class=\\"token variable\\">$type</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function-definition function\\">__call</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword type-hint\\">string</span> <span class=\\"token variable\\">$name</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword type-hint\\">array</span> <span class=\\"token variable\\">$arguments</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token variable\\">$this</span><span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token string single-quoted-string\\">'msg'</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">404</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//方法错误</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></code></pre></div>"}`);export{k as comp,r as data};
