<template><div><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>#controller下创建Base基类
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\</span>Response</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Base</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">create</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$msg</span> <span class="token operator">=</span> <span class="token string single-quoted-string">''</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$code</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'json'</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$request</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token comment">//状态码</span>
            <span class="token string single-quoted-string">'code'</span><span class="token operator">=></span><span class="token variable">$code</span><span class="token punctuation">,</span>
            <span class="token comment">//消息</span>
            <span class="token string single-quoted-string">'msg'</span><span class="token operator">=></span><span class="token variable">$msg</span><span class="token punctuation">,</span>
            <span class="token comment">//数据</span>
            <span class="token string single-quoted-string">'data'</span><span class="token operator">=></span><span class="token variable">$data</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//返回api接口</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span><span class="token variable">$type</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__call</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$arguments</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string single-quoted-string">'msg'</span><span class="token punctuation">,</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//方法错误</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


