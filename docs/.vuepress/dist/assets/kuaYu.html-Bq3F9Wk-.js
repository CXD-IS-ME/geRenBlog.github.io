import{_ as e,o as t,c as n,a as s}from"./app-DMZOAs2V.js";const a={},l=s(`<p>在route文件夹下app.php下配置</p><div class="language-ABAP line-numbers-mode" data-ext="ABAP" data-title="ABAP"><pre class="language-ABAP"><code>**解决跨域问题
header(&#39;Content-Type: text/html;charset=utf-8&#39;);
header(&#39;Access-Control-Allow-Origin:*&#39;); // *代表允许任何网址请求
header(&#39;Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE,PUT&#39;); // 允许请求的类型
header(&#39;Access-Control-Allow-Credentials: true&#39;); // 设置是否允许发送 cookies
header(&#39;Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin&#39;); // 设置允许自定义请求头的字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[l];function r(c,d){return t(),n("div",null,o)}const A=e(a,[["render",r],["__file","kuaYu.html.vue"]]),u=JSON.parse(`{"path":"/posts/kuaYu.html","title":"跨域请求","lang":"en-US","frontmatter":{"title":"跨域请求","date":"2024-04-11T00:00:00.000Z"},"headers":[],"git":{},"filePathRelative":"posts/kuaYu.md","excerpt":"<p>在route文件夹下app.php下配置</p>\\n<div class=\\"language-ABAP\\" data-ext=\\"ABAP\\" data-title=\\"ABAP\\"><pre class=\\"language-ABAP\\"><code>**解决跨域问题\\nheader('Content-Type: text/html;charset=utf-8');\\nheader('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求\\nheader('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE,PUT'); // 允许请求的类型\\nheader('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies\\nheader('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin'); // 设置允许自定义请求头的字段\\n</code></pre></div>"}`);export{A as comp,u as data};
