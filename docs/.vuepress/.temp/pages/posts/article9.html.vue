<template><div><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>#注解验证器（下载）
composer require topthink/think-annotation
#然后可以直接在控制器类的方法注释中定义，例如：(可以利用IDE生成规范的注释。如果你使用PHPStorm的话，建议安装PHP Annotations插件：https://plugins.jetbrains.com/plugin/7320-php-annotations)
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\</span>annotation<span class="token punctuation">\</span>Route</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\</span>annotation<span class="token punctuation">\</span>route<span class="token punctuation">\</span>Validate</span><span class="token punctuation">;</span> 
<span class="token keyword">use</span> <span class="token package">app<span class="token punctuation">\</span>validate<span class="token punctuation">\</span>IndexValidate</span><span class="token punctuation">;</span> 

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Index</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * @Validate(IndexValidate::class,scene="create",batch="true")
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
     * @Route("hello")
     */</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token string single-quoted-string">'helloworld'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

然后需要声明上面引用验证器类，例如：

<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\</span>validate</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\</span>Validate</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">IndexValidate</span> <span class="token keyword">extends</span> <span class="token class-name">Validate</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$rule</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'require'</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

   <span class="token keyword">protected</span> <span class="token variable">$message</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
       <span class="token string single-quoted-string">'name.require'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'姓名不能为空'</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$scene</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'create'</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


