(function(e){function i(i){for(var t,o,r=i[0],n=i[1],m=i[2],l=0,d=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);c&&c(i);while(d.length)d.shift()();return s.push.apply(s,m||[]),a()}function a(){for(var e,i=0;i<s.length;i++){for(var a=s[i],t=!0,o=1;o<a.length;o++){var n=a[o];0!==u[n]&&(t=!1)}t&&(s.splice(i--,1),e=r(r.s=a[0]))}return e}var t={},u={app:0},s=[];function o(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2c1867fa","chunk-2d0b30b7":"1c1d3f4e"}[e]+".js"}function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var i=[],a=u[e];if(0!==a)if(a)i.push(a[2]);else{var t=new Promise((function(i,t){a=u[e]=[i,t]}));i.push(a[2]=t);var s,n=document.createElement("script");n.charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.src=o(e);var m=new Error;s=function(i){n.onerror=n.onload=null,clearTimeout(l);var a=u[e];if(0!==a){if(a){var t=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;m.message="Loading chunk "+e+" failed.\n("+t+": "+s+")",m.name="ChunkLoadError",m.type=t,m.request=s,a[1](m)}u[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:n})}),12e4);n.onerror=n.onload=s,document.head.appendChild(n)}return Promise.all(i)},r.m=e,r.c=t,r.d=function(e,i,a){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var t in e)r.d(a,t,function(i){return e[i]}.bind(null,t));return a},r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/",r.oe=function(e){throw console.error(e),e};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],m=n.push.bind(n);n.push=i,n=n.slice();for(var l=0;l<n.length;l++)i(n[l]);var c=m;s.push([0,"chunk-vendors"]),a()})({0:function(e,i,a){e.exports=a("56d7")},3585:function(e,i,a){},"56d7":function(e,i,a){"use strict";a.r(i);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("7a23"),u=Object(t["e"])('<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container-fluid"><a class="navbar-brand" href="/">fomula91.github.io</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="/advertise">advertise</a></li><li class="nav-item"><a class="nav-link" href="/bootstrap">bootstrap</a></li></ul></div></div></nav><div></div>',2);function s(e,i){var a=Object(t["t"])("router-view");return Object(t["p"])(),Object(t["d"])(t["a"],null,[u,Object(t["g"])("body",null,[Object(t["g"])(a)])],64)}const o={};o.render=s;var r=o,n={class:"navbar bg-danger position-absolute top-0 start-50 translate-middle-x"},m={class:"contaner-fluid"},l=Object(t["g"])("p",{class:"nav-brand "}," Lorem, ipsum dolor.",-1),c={class:"navbar-nav justify-content-end"},d={class:"nav-item"},p=Object(t["f"])("Home"),b={class:"nav-item"},v=Object(t["f"])("bootstrap");function q(e,i){var a=Object(t["t"])("router-link");return Object(t["p"])(),Object(t["d"])("div",null,[Object(t["g"])("header",n,[Object(t["g"])("div",m,[l,Object(t["g"])("ul",c,[Object(t["g"])("li",d,[Object(t["g"])(a,{to:"/"},{default:Object(t["x"])((function(){return[p]})),_:1})]),Object(t["g"])("li",b,[Object(t["g"])(a,{to:"/bootstrap"},{default:Object(t["x"])((function(){return[v]})),_:1})])])])])])}const f={};f.render=q;var g=f,h=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),y=Object(t["g"])("h1",null," hello ",-1);function O(e,i){return Object(t["p"])(),Object(t["d"])("div",null,[y])}const x={};x.render=O;var j=x,w=Object(t["g"])("h1",null," advertise ",-1);function L(e,i){return Object(t["p"])(),Object(t["d"])("div",null,[w])}const A={};A.render=L;var k=A,P=Object(t["e"])('<body class="nav"><header class="d-flex flex-column align-items-center flex-md-row p-3 bg-primary sticky-top"><h1 class="h5 my-0 me-md-auto">bootstrap</h1><nav class="my-2 my-md-0 me-md-4"><a href=""><i class="bi bi-check cfs-5"></i></a><a href=""><i class="bi bi-circle cfs-5"></i></a><a href=""><i class="bi bi-circle cfs-5"></i></a><a href=""><i class="bi bi-circle cfs-5"></i></a></nav></header></body><section class="container"><div class="p-3 pt-md-5 pb-md-4 text-center"><h3 class="cfs-5 ">bootstrap </h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus veritatis expedita maxime eveniet laudantium rerum, consequatur dolorum perspiciatis id sint aperiam a aliquid architecto. Delectus pariatur adipisci dolores assumenda?</p></div><div class="row mb-5 text-center my-3"><div class="col"><div class="card"><div class="card-header"> JS </div><div class="card-body"><h3 class="card-title text-primary"> no Jquery </h3><ul class="list-unstyled my-4"><li>Lorem ipsum dolor sit amet.</li><li>Lorem.</li></ul></div></div></div><div class="col"><div class="card"><div class="card-header"> JS </div><div class="card-body"><h3 class="card-title text-primary"> no Jquery </h3><ul class="list-unstyled my-4"><li>Lorem ipsum dolor sit amet.</li><li>Lorem.</li></ul></div></div></div><div class="col"><div class="card"><div class="card-header"> JS </div><div class="card-body"><h3 class="card-title text-primary"> no Jquery </h3><ul class="list-unstyled my-4"><li>Lorem ipsum dolor sit amet.</li><li>Lorem.</li></ul></div></div></div></div></section><body><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur voluptates eum culpa quo inventore ea pariatur fuga cupiditate, minima odio accusamus saepe praesentium ut placeat eaque molestias! Ratione, qui. </p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis maiores veniam! Illum ratione quod earum nulla perspiciatis sequi ab, reiciendis, magnam unde fuga totam consectetur in eaque ut quasi quae voluptatibus tempore officia inventore minima delectus eveniet! Aspernatur illo, quae maxime quam praesentium iste facilis velit aut maiores neque obcaecati assumenda et, fugiat asperiores ea. Veritatis impedit eligendi fugit aut! Alias est velit, vitae sed eligendi tempora beatae cumque vel, nisi eos eum in voluptates laudantium quam quibusdam expedita! Error a quasi voluptate aliquid expedita ullam eveniet at voluptates deleniti praesentium quam fugiat, deserunt animi id explicabo sequi impedit. </p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto perspiciatis at, quas quam aut quod sit ab laboriosam iste ea distinctio incidunt provident, necessitatibus vel eaque quis fugit tempore unde ducimus odit excepturi nobis! Non animi natus odit nam beatae minima quod dolor dolorem, quae maiores dolores ad iusto quos illum esse repellat. Architecto cumque provident molestiae eveniet, veniam ratione maiores vel nostrum voluptatibus doloremque ea quia explicabo dignissimos eligendi iure impedit eos molestias. Delectus, veritatis. Unde at, dolorum nam omnis aspernatur quo vitae vero cum impedit quibusdam velit iusto. Ex eos numquam, sit libero unde sequi, repellat tenetur perferendis nostrum, eveniet modi cumque magnam non quos impedit minima quam autem fugiat omnis hic? Odio pariatur eligendi maiores accusamus, earum quam, officia qui recusandae, odit sit repellendus. Voluptatem sed molestias nobis eum quia temporibus natus praesentium est. Impedit minus doloremque alias odio autem placeat voluptas distinctio dignissimos repellendus. Alias ut ipsam ipsa officia laboriosam sit, quae quam maiores eum, dolorem, quidem ea rem vitae error veniam! Possimus recusandae eligendi, repellat est blanditiis dolorum corrupti pariatur commodi veniam, aspernatur aliquid repellendus sit voluptatibus officia. Libero nobis rerum tempore vitae est perferendis fuga quaerat provident, totam aut nesciunt commodi accusantium reprehenderit blanditiis. Dolores deserunt et, tempore sit enim quam incidunt alias tempora dolorem quod quo hic at cum aliquid similique accusantium, veritatis impedit natus obcaecati cumque vitae iste amet. Dolore, eveniet quaerat sunt tempora, modi eius reiciendis inventore odit illum sed ducimus porro, quae alias optio quisquam fugiat ab repellendus? Deserunt nostrum consequuntur harum dolor tenetur nemo quos nisi culpa omnis laudantium odio ex rem rerum distinctio molestiae saepe earum, ea tempore. Ullam assumenda suscipit fugit dignissimos. Harum cum ut nulla inventore similique eius nobis accusamus provident. Iusto accusamus neque excepturi cumque nesciunt veniam, distinctio, ipsam facilis, eveniet officia dicta? Est consectetur impedit labore odio quis consequuntur mollitia molestiae voluptatem incidunt quam possimus pariatur, dignissimos accusamus laudantium eaque sequi accusantium aliquam neque rem doloremque commodi distinctio quisquam nam inventore. Qui, ipsam quibusdam ipsum rerum ab quo earum sunt, alias dolores laborum totam optio, nisi voluptates quis commodi. Cum dolorem quibusdam modi vero nemo saepe doloremque obcaecati natus sit voluptatum impedit accusantium, quae tenetur id aut eum facere quod, earum recusandae, doloribus esse nam. Ullam perspiciatis quisquam, fuga temporibus amet nam et exercitationem quaerat vitae deleniti ab sed quas sequi quasi, ex error perferendis sit praesentium incidunt eius soluta animi. Alias eligendi tempora quisquam saepe deleniti? Aperiam quia quis delectus sit consectetur porro consequuntur quas nemo. Tempora natus animi est voluptas laboriosam molestiae ab voluptatem ipsam itaque commodi eos dolores eum neque, iusto eaque eveniet blanditiis assumenda! Vel sed iure modi ut explicabo beatae dolore velit, quod voluptatum doloribus impedit! Pariatur suscipit iure cumque. Rem voluptate ad expedita quidem illo a, rerum corrupti dolore? Atque ipsum suscipit, accusamus culpa perferendis, numquam ab enim molestias et qui ea iure cumque consequuntur. Accusamus, reiciendis rem molestias sapiente velit sunt quia repudiandae eius inventore eum temporibus error corporis? Corporis distinctio laudantium eligendi eum quod illum magnam reiciendis doloribus temporibus commodi possimus id odio enim dolorem, excepturi minima vero quae minus assumenda quisquam quo consequuntur, atque cum cumque. Facere, sed odio optio illo est magnam perferendis facilis, alias itaque molestiae fuga voluptatibus aliquid culpa, labore cupiditate nesciunt. Iure quas sed enim velit cum unde corrupti fugit, quasi illo reprehenderit. Necessitatibus dolor numquam nobis temporibus, architecto dignissimos dolore impedit quo perferendis repudiandae laudantium harum, labore porro possimus sunt? Recusandae tempora error ducimus nostrum alias aliquid illum, aut necessitatibus! Eos assumenda, vel officiis laborum sed maiores voluptatum quod quam illum rerum aliquid? Unde exercitationem sint eum nemo temporibus veniam nobis consectetur et enim ratione quae reprehenderit cupiditate, tempora ipsa quos voluptatem tempore? Qui excepturi fugiat, aspernatur omnis ut ullam ad. Neque accusamus provident ipsa veniam eum, officia harum, quod, ipsam consequatur blanditiis est perspiciatis enim nostrum sequi at. Sint eveniet fuga tempora sapiente iusto, odit maiores possimus deleniti earum beatae. Asperiores iste omnis harum tenetur dolorem, minima tempora aliquid ducimus a ut, inventore temporibus autem, enim iure debitis? Quibusdam animi fugit, molestias adipisci, modi, asperiores mollitia laborum iure at blanditiis esse? A doloribus enim ipsum, delectus nostrum dolor minus ullam similique eveniet asperiores eum, at aspernatur libero aliquid ea, nesciunt id. Nesciunt molestias tempora aliquam officia explicabo error consequuntur cum praesentium quidem iusto, id nobis similique porro assumenda laudantium corrupti numquam laboriosam quod sequi qui consequatur! Quae maiores eveniet ab dolorem dolores nostrum, culpa sunt molestias amet recusandae odit facilis, vitae sed sequi at, adipisci ut enim exercitationem atque. Aliquam repellendus quam asperiores. Sed aspernatur excepturi ratione numquam aut quos cupiditate doloribus. Consectetur nam quidem voluptas ipsa ipsum nobis voluptate et quo quaerat fugiat est tenetur ducimus culpa officia aspernatur ea, tempore optio. Accusantium, ad repudiandae! Odio veritatis, illo perferendis atque rem soluta aspernatur velit numquam? Repellat error veniam aliquid architecto laboriosam amet omnis pariatur. Iusto quae voluptas amet ratione earum delectus! Optio culpa aliquam reiciendis harum quidem fugit fuga voluptate vero magnam obcaecati, expedita tenetur quod et! Et impedit asperiores ratione fugiat! Eos, ipsum laboriosam ex nam vero animi fugiat amet porro exercitationem at in repellendus! Nobis, at. Blanditiis iure, distinctio perferendis obcaecati ducimus numquam repudiandae unde reprehenderit minus dolore repellendus at laborum sapiente libero ea quibusdam maxime error molestias officia? Sequi, labore esse placeat ullam quam optio natus odit fugiat quas harum debitis corporis amet ut, doloribus saepe enim explicabo? Voluptatibus neque obcaecati modi tempora. Consequatur velit veritatis iure impedit reprehenderit optio nulla ad in fugit vitae eaque itaque blanditiis odit expedita voluptates dolores obcaecati minus consectetur, pariatur animi laborum ea ratione eveniet officiis? Provident velit rem quod eum repudiandae nisi est sunt voluptates quae id atque, corporis facilis, perspiciatis quo odio esse consequuntur praesentium ut placeat, aliquam dolorum illum reiciendis animi sint! Deserunt corrupti labore id in blanditiis, officiis ad iure, suscipit libero repellat tenetur doloribus consequuntur cumque illum aliquam amet velit distinctio! Officia illum modi commodi nam minus totam corporis voluptas. Suscipit commodi recusandae praesentium dolore veniam, voluptatibus molestias soluta? Incidunt labore sapiente iure. </p></body>',3);function S(e,i){return P}const E={};E.render=S;var N=E,J=[{path:"/",name:"Home",component:j},{path:"/global",name:"global",component:function(){return a.e("about").then(a.bind(null,"e348"))}},{path:"/advertise",name:"advertise",component:k},{path:"/bootstrap",name:"bootstrap",component:N},{path:"/test",name:"test",component:function(){return a.e("chunk-2d0b30b7").then(a.bind(null,"2762"))}}],_=Object(h["a"])({history:Object(h["b"])(),routes:J}),C=_,D=(a("3585"),a("cd74"),Object(t["c"])(r).use(C));D.component("Globalcomponents",g),D.mount("#app")}});
//# sourceMappingURL=app.7ff8d85c.js.map