<template><div><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>#创建验证器--在根目录下创建validate（在此目录下创建user类）
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">declare</span> <span class="token punctuation">(</span>strict_types <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\</span>validate</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\</span>Validate</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Validate</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 定义验证规则
     * 格式：'字段名' =>  ['规则1','规则2'...]
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$rule</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'email'</span><span class="token operator">=></span><span class="token string single-quoted-string">'require|unique:user'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'login_pwd|密码'</span><span class="token operator">=></span><span class="token string single-quoted-string">'require|min:6'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'login_act|账号'</span><span class="token operator">=></span><span class="token string single-quoted-string">'require|unique:user'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'name|姓名'</span><span class="token operator">=></span><span class="token string single-quoted-string">'require'</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 定义错误信息
     * 格式：'字段名.规则名' =>  '错误信息'
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$message</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$scene</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'edit'</span><span class="token operator">=></span><span class="token punctuation">[</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


