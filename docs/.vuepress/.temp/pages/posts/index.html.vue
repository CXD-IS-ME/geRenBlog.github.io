<template><div><p>只用于接口开发</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>php think make<span class="token punctuation">:</span>controller index@Blog <span class="token operator">--</span>api
<span class="token comment">//在route下的app.php注册</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'blog'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Blog'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


