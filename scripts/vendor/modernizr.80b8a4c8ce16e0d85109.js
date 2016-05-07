!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(t.s=265)}({243:function(e,t,i){(function(t){e.exports=t.MobileDetect=i(393)}).call(t,i(65))},245:function(e,t){!function(e,t){"use strict";var i=new MobileDetect(navigator.userAgent),n=i.mobileGrade();t.addTest({mobile:!!i.mobile(),phone:!!i.phone(),tablet:!!i.tablet(),mobilegradea:"A"===n}),e.mobileDetect=i}(window,Modernizr)},246:function(e,t){!function(t){!function(e,t,i){function n(e,t){return typeof e===t}function o(){var e,t,i,o,T,r,a;for(var s in B)if(B.hasOwnProperty(s)){if(e=[],t=B[s],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase());for(o=n(t.fn,"function")?t.fn():t.fn,T=0;T<e.length;T++)r=e[T],a=r.split("."),1===a.length?p[a[0]]=o:(!p[a[0]]||p[a[0]]instanceof Boolean||(p[a[0]]=new Boolean(p[a[0]])),p[a[0]][a[1]]=o),h.push((o?"":"no-")+a.join("-"))}}function T(e){var t=f.className,i=p._config.classPrefix||"";if(E&&(t=t.baseVal),p._config.enableJSClass){var n=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");t=t.replace(n,"$1"+i+"js$2")}p._config.enableClasses&&(t+=" "+i+e.join(" "+i),E?f.className.baseVal=t:f.className=t)}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return!!~(""+e).indexOf(t)}function s(){var e=t.body;return e||(e=r(E?"svg":"body"),e.fake=!0),e}function S(e,i,n,o){var T,a,S,l,P="modernizr",b=r("div"),A=s();if(parseInt(n,10))for(;n--;)S=r("div"),S.id=o?o[n]:P+(n+1),b.appendChild(S);return T=r("style"),T.type="text/css",T.id="s"+P,(A.fake?A:b).appendChild(T),A.appendChild(b),T.styleSheet?T.styleSheet.cssText=e:T.appendChild(t.createTextNode(e)),b.id=P,A.fake&&(A.style.background="",A.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(A)),a=i(b,e),A.fake?(A.parentNode.removeChild(A),f.style.overflow=l,f.offsetHeight):b.parentNode.removeChild(b),!!a}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function P(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var T=[];o--;)T.push("("+l(t[o])+":"+n+")");return T=T.join(" or "),S("@supports ("+T+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return i}function b(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,i){return t+i.toUpperCase()}).replace(/^-/,"")}function A(e,t,o,T){function s(){l&&(delete g.style,delete g.modElem)}if(T=n(T,"undefined")?!1:T,!n(o,"undefined")){var S=P(e,o);if(!n(S,"undefined"))return S}for(var l,A,d,G,M,c=["modernizr","tspan"];!g.style;)l=!0,g.modElem=r(c.shift()),g.style=g.modElem.style;for(d=e.length,A=0;d>A;A++)if(G=e[A],M=g.style[G],a(G,"-")&&(G=b(G)),g.style[G]!==i){if(T||n(o,"undefined"))return s(),"pfx"==t?G:!0;try{g.style[G]=o}catch(u){}if(g.style[G]!=M)return s(),"pfx"==t?G:!0}return s(),!1}function d(e,t){return function(){return e.apply(t,arguments)}}function G(e,t,i){var o;for(var T in e)if(e[T]in t)return i===!1?e[T]:(o=t[e[T]],n(o,"function")?d(o,i||t):o);return!1}function M(e,t,i,o,T){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+m.join(r+" ")+r).split(" ");return n(t,"string")||n(t,"undefined")?A(a,t,o,T):(a=(e+" "+v.join(r+" ")+r).split(" "),G(a,t,i))}function c(e,t,n){return M(e,i,i,t,n)}function u(e,t){return e-1===t||e===t||e+1===t}function H(e,t){if("object"==typeof e)for(var i in e)F(e,i)&&H(i,e[i]);else{e=e.toLowerCase();var n=e.split("."),o=p[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return p;t="function"==typeof t?t():t,1==n.length?p[n[0]]=t:(!p[n[0]]||p[n[0]]instanceof Boolean||(p[n[0]]=new Boolean(p[n[0]])),p[n[0]][n[1]]=t),T([(t&&0!=t?"":"no-")+n.join("-")]),p._trigger(e,t)}return p}var B=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var i=this;setTimeout(function(){t(i[e])},0)},addTest:function(e,t,i){B.push({name:e,fn:t,options:i})},addAsyncTest:function(e){B.push({name:null,fn:e})}},p=function(){};p.prototype=C,p=new p;var h=[],f=t.documentElement,E="svg"===f.nodeName.toLowerCase();/*!
	{
	  "name": "Application Cache",
	  "property": "applicationcache",
	  "caniuse": "offline-apps",
	  "tags": ["storage", "offline"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
	  }],
	  "polyfills": ["html5gears"]
	}
	!*/
p.addTest("applicationcache","applicationCache"in e),/*!
	{
	  "name" : "HTML5 Audio Element",
	  "property": "audio",
	  "tags" : ["html5", "audio", "media"]
	}
	!*/
p.addTest("audio",function(){var e=r("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return t}),/*!
	{
	  "name": "Canvas",
	  "property": "canvas",
	  "caniuse": "canvas",
	  "tags": ["canvas", "graphics"],
	  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
	}
	!*/
p.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),/*!
	{
	  "name": "Content Editable",
	  "property": "contenteditable",
	  "caniuse": "contenteditable",
	  "notes": [{
	    "name": "WHATWG spec",
	    "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
	  }]
	}
	!*/
p.addTest("contenteditable",function(){if("contentEditable"in f){var e=r("div");return e.contentEditable=!0,"true"===e.contentEditable}}),/*!
	{
	  "name": "Context menus",
	  "property": "contextmenu",
	  "caniuse": "menu",
	  "notes": [{
	    "name": "W3C spec",
	    "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
	  },{
	    "name": "thewebrocks.com Demo",
	    "href": "http://thewebrocks.com/demos/context-menu/"
	  }],
	  "polyfills": ["jquery-contextmenu"]
	}
	!*/
p.addTest("contextmenu","contextMenu"in f&&"HTMLMenuItemElement"in e),/*!
	{
	  "name": "Cookies",
	  "property": "cookies",
	  "tags": ["storage"],
	  "authors": ["tauren"]
	}
	!*/
p.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(i){return!1}});var I="Moz O ms Webkit",m=C._config.usePrefixes?I.split(" "):[];C._cssomPrefixes=m;var D={elem:r("modernizr")};p._q.push(function(){delete D.elem});var g={style:D.elem.style};p._q.unshift(function(){delete g.style});var v=C._config.usePrefixes?I.toLowerCase().split(" "):[];C._domPrefixes=v,C.testAllProps=M,C.testAllProps=c,/*!
	{
	  "name": "CSS Animations",
	  "property": "cssanimations",
	  "caniuse": "css-animation",
	  "polyfills": ["transformie", "csssandpaper"],
	  "tags": ["css"],
	  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
	  "notes": [{
	    "name" : "Article: 'Dispelling the Android CSS animation myths'",
	    "href": "https://goo.gl/OGw5Gm"
	  }]
	}
	!*/
p.addTest("cssanimations",c("animationName","a",!0)),/*!
	{
	  "name": "Backdrop Filter",
	  "property": "backdropfilter",
	  "authors": ["Brian Seward"],
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "W3C Editor’s Draft specification",
	      "href": "https://drafts.fxtf.org/filters-2/#BackdropFilterProperty"
	    },
	    {
	      "name": "Caniuse for CSS Backdrop Filter",
	      "href": "http://caniuse.com/#feat=css-backdrop-filter"
	    },
	    {
	      "name": "WebKit Blog introduction + Demo",
	      "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
	    }
	  ]
	}
	!*/
p.addTest("backdropfilter",c("backdropFilter"));var V=function(t){var n,o=N.length,T=e.CSSRule;if("undefined"==typeof T)return i;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in T)return"@"+t;for(var r=0;o>r;r++){var a=N[r],s=a.toUpperCase()+"_"+n;if(s in T)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=V;var w=C.prefixed=function(e,t,i){return 0===e.indexOf("@")?V(e):(-1!=e.indexOf("-")&&(e=b(e)),t?M(e,t,i):M(e,"pfx"))};/*!
	{
	  "name": "CSS Background Blend Mode",
	  "property": "backgroundblendmode",
	  "caniuse": "css-backgroundblendmode",
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "CSS Blend Modes could be the next big thing in Web Design",
	      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
	    }, {
	      "name": "Demo",
	      "href": "http://bennettfeely.com/gradients/"
	    }
	  ]
	}
	!*/
p.addTest("backgroundblendmode",w("backgroundBlendMode","text")),/*!
	{
	  "name": "CSS Background Clip Text",
	  "property": "backgroundcliptext",
	  "authors": ["ausi"],
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "CSS Tricks Article",
	      "href": "https://css-tricks.com/image-under-text/"
	    },
	    {
	      "name": "MDN Docs",
	      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
	    },
	    {
	      "name": "Related Github Issue",
	      "href": "https://github.com/Modernizr/Modernizr/issues/199"
	    }
	  ]
	}
	!*/
p.addTest("backgroundcliptext",function(){return c("backgroundClip","text")}),/*!
	{
	  "name": "Background Size Cover",
	  "property": "bgsizecover",
	  "tags": ["css"],
	  "builderAliases": ["css_backgroundsizecover"],
	  "notes": [{
	    "name" : "MDN Docs",
	    "href": "https://developer.mozilla.org/en/CSS/background-size"
	  }]
	}
	!*/
p.addTest("bgsizecover",c("backgroundSize","cover")),/*!
	{
	  "name": "Border Radius",
	  "property": "borderradius",
	  "caniuse": "border-radius",
	  "polyfills": ["css3pie"],
	  "tags": ["css"],
	  "notes": [{
	    "name": "Comprehensive Compat Chart",
	    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
	  }]
	}
	!*/
p.addTest("borderradius",c("borderRadius","0px",!0)),/*!
	{
	  "name": "Box Shadow",
	  "property": "boxshadow",
	  "caniuse": "css-boxshadow",
	  "tags": ["css"],
	  "knownBugs": [
	    "WebOS false positives on this test.",
	    "The Kindle Silk browser false positives"
	  ]
	}
	!*/
p.addTest("boxshadow",c("boxShadow","1px 1px",!0));var N=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=N,/*!
	{
	  "name": "CSS Calc",
	  "property": "csscalc",
	  "caniuse": "calc",
	  "tags": ["css"],
	  "builderAliases": ["css_calc"],
	  "authors": ["@calvein"]
	}
	!*/
p.addTest("csscalc",function(){var e="width:",t="calc(10px);",i=r("a");return i.style.cssText=e+N.join(t+e),!!i.style.length});/*!
	{
	  "name": "CSS Supports",
	  "property": "supports",
	  "caniuse": "css-featurequeries",
	  "tags": ["css"],
	  "builderAliases": ["css_supports"],
	  "notes": [{
	    "name": "W3 Spec",
	    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
	  },{
	    "name": "Related Github Issue",
	    "href": "github.com/Modernizr/Modernizr/issues/648"
	  },{
	    "name": "W3 Info",
	    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
	  }]
	}
	!*/
var y="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;p.addTest("supports",y||L),/*!
	{
	  "name": "CSS Filters",
	  "property": "cssfilters",
	  "caniuse": "css-filters",
	  "polyfills": ["polyfilter"],
	  "tags": ["css"],
	  "builderAliases": ["css_filters"],
	  "notes": [{
	    "name": "MDN article on CSS filters",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
	  }]
	}
	!*/
p.addTest("cssfilters",function(){if(p.supports)return c("filter","blur(2px)");var e=r("a");return e.style.cssText=N.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===i||t.documentMode>9)}),/*!
	{
	  "name": "Flexbox",
	  "property": "flexbox",
	  "caniuse": "flexbox",
	  "tags": ["css"],
	  "notes": [{
	    "name": "The _new_ flexbox",
	    "href": "http://dev.w3.org/csswg/css3-flexbox"
	  }],
	  "warnings": [
	    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
	  ]
	}
	!*/
p.addTest("flexbox",c("flexBasis","1px",!0));var O=C.testStyles=S,R=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),i=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return i||o||n}();R?p.addTest("fontface",!1):O('@font-face {font-family:"font";src:url("https://")}',function(e,i){var n=t.getElementById("smodernizr"),o=n.sheet||n.styleSheet,T=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(T)&&0===T.indexOf(i.split(" ")[0]);p.addTest("fontface",r)}),/*!
	{
	  "name": "CSS Gradients",
	  "caniuse": "css-gradients",
	  "property": "cssgradients",
	  "tags": ["css"],
	  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
	  "notes": [{
	    "name": "Webkit Gradient Syntax",
	    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
	  },{
	    "name": "Linear Gradient Syntax",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
	  },{
	    "name": "W3C Gradient Spec",
	    "href": "https://drafts.csswg.org/css-images-3/#gradients"
	  }]
	}
	!*/
p.addTest("cssgradients",function(){for(var e,t="background-image:",i="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",o=0,T=N.length-1;T>o;o++)e=0===o?"to ":"",n+=t+N[o]+"linear-gradient("+e+"left top, #9f9, white);";p._config.usePrefixes&&(n+=t+"-webkit-"+i);var a=r("a"),s=a.style;return s.cssText=n,(""+s.backgroundImage).indexOf("gradient")>-1});var x=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var i=t(e);return i&&i.matches||!1}:function(t){var i=!1;return S("@media "+t+" { #modernizr { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),i}}();C.mq=x,/*!
	{
	  "name": "CSS Media Queries",
	  "caniuse": "css-mediaqueries",
	  "property": "mediaqueries",
	  "tags": ["css"],
	  "builderAliases": ["css_mediaqueries"]
	}
	!*/
p.addTest("mediaqueries",x("only all")),/*!
	{
	  "name": "CSS :nth-child pseudo-selector",
	  "caniuse": "css-sel3",
	  "property": "nthchild",
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "Related Github Issue",
	      "href": "https://github.com/Modernizr/Modernizr/pull/685"
	    },
	    {
	      "name": "Sitepoint :nth-child documentation",
	      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
	    }
	  ],
	  "authors": ["@emilchristensen"],
	  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
	}
	!*/
O("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),i=!0,n=0;5>n;n++)i=i&&t[n].offsetWidth===n%2+1;p.addTest("nthchild",i)},5),/*!
	{
	  "name": "CSS Opacity",
	  "caniuse": "css-opacity",
	  "property": "opacity",
	  "tags": ["css"]
	}
	!*/
p.addTest("opacity",function(){var e=r("a").style;return e.cssText=N.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),/*!
	{
	  "name": "CSS Pointer Events",
	  "caniuse": "pointer-events",
	  "property": "csspointerevents",
	  "authors": ["ausi"],
	  "tags": ["css"],
	  "builderAliases": ["css_pointerevents"],
	  "notes": [
	    {
	      "name": "MDN Docs",
	      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
	    },{
	      "name": "Test Project Page",
	      "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
	    },{
	      "name": "Test Project Wiki",
	      "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
	    },
	    {
	      "name": "Related Github Issue",
	      "href": "https://github.com/Modernizr/Modernizr/issues/80"
	    }
	  ]
	}
	!*/
p.addTest("csspointerevents",function(){var e=r("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),/*!
	{
	  "name": "CSS Font rem Units",
	  "caniuse": "rem",
	  "authors": ["nsfmc"],
	  "property": "cssremunit",
	  "tags": ["css"],
	  "builderAliases": ["css_remunit"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/css3-values/#relative0"
	  },{
	    "name": "Font Size with rem by Jonathan Snook",
	    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
	  }]
	}
	!*/
p.addTest("cssremunit",function(){var e=r("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),/*!
	{
	  "name": "CSS Transforms",
	  "property": "csstransforms",
	  "caniuse": "transforms2d",
	  "tags": ["css"]
	}
	!*/
p.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&c("transform","scale(1)",!0)}),/*!
	{
	  "name": "CSS Transforms 3D",
	  "property": "csstransforms3d",
	  "caniuse": "transforms3d",
	  "tags": ["css"],
	  "warnings": [
	    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
	  ]
	}
	!*/
p.addTest("csstransforms3d",function(){var e=!!c("perspective","1px",!0),t=p._config.usePrefixes;if(e&&(!t||"webkitPerspective"in f.style)){var i,n="#modernizr{width:0;height:0}";p.supports?i="@supports (perspective: 1px)":(i="@media (transform-3d)",t&&(i+=",(-webkit-transform-3d)")),i+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",O(n+i,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),/*!
	{
	  "name": "CSS Transform Style preserve-3d",
	  "property": "preserve3d",
	  "authors": ["edmellum"],
	  "tags": ["css"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
	  },{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/762"
	  }]
	}
	!*/
p.addTest("preserve3d",c("transformStyle","preserve-3d")),/*!
	{
	  "name": "CSS Transitions",
	  "property": "csstransitions",
	  "caniuse": "css-transitions",
	  "tags": ["css"]
	}
	!*/
p.addTest("csstransitions",c("transition","all",!0)),/*!
	{
	  "name": "CSS vh unit",
	  "property": "cssvhunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vhunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "Similar JSFiddle",
	    "href": "https://jsfiddle.net/FWeinb/etnYC/"
	  }]
	}
	!*/
O("#modernizr { height: 50vh; }",function(t){var i=parseInt(e.innerHeight/2,10),n=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);p.addTest("cssvhunit",n==i)}),/*!
	{
	  "name": "CSS vmax unit",
	  "property": "cssvmaxunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vmaxunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "JSFiddle Example",
	    "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
	  }]
	}
	!*/
O("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var i=t.childNodes[2],n=t.childNodes[1],o=t.childNodes[0],T=parseInt((n.offsetWidth-n.clientWidth)/2,10),r=o.clientWidth/100,a=o.clientHeight/100,s=parseInt(50*Math.max(r,a),10),S=parseInt((e.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);p.addTest("cssvmaxunit",u(s,S)||u(s,S-T))},3),/*!
	{
	  "name": "CSS vmin unit",
	  "property": "cssvminunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vminunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "JSFiddle Example",
	    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
	  }]
	}
	!*/
O("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var i=t.childNodes[2],n=t.childNodes[1],o=t.childNodes[0],T=parseInt((n.offsetWidth-n.clientWidth)/2,10),r=o.clientWidth/100,a=o.clientHeight/100,s=parseInt(50*Math.min(r,a),10),S=parseInt((e.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);p.addTest("cssvminunit",u(s,S)||u(s,S-T))},3),/*!
	{
	  "name": "CSS vw unit",
	  "property": "cssvwunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vwunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "JSFiddle Example",
	    "href": "https://jsfiddle.net/FWeinb/etnYC/"
	  }]
	}
	!*/
O("#modernizr { width: 50vw; }",function(t){var i=parseInt(e.innerWidth/2,10),n=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);p.addTest("cssvwunit",n==i)}),/*!
	{
	  "name": "will-change",
	  "property": "willchange",
	  "notes": [{
	    "name": "Spec",
	    "href": "https://drafts.csswg.org/css-will-change/"
	  }]
	}
	!*/
p.addTest("willchange","willChange"in f.style),/*!
	{
	  "name": "classList",
	  "caniuse": "classlist",
	  "property": "classlist",
	  "tags": ["dom"],
	  "builderAliases": ["dataview_api"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en/DOM/element.classList"
	  }]
	}
	!*/
p.addTest("classlist","classList"in f),/*!
	{
	  "name": "dataset API",
	  "caniuse": "dataset",
	  "property": "dataset",
	  "tags": ["dom"],
	  "builderAliases": ["dom_dataset"],
	  "authors": ["@phiggins42"]
	}
	!*/
p.addTest("dataset",function(){var e=r("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),/*!
	{
	  "name": "Canvas text",
	  "property": "canvastext",
	  "caniuse": "canvas-text",
	  "tags": ["canvas", "graphics"],
	  "polyfills": ["canvastext"]
	}
	!*/
p.addTest("canvastext",function(){return p.canvas===!1?!1:"function"==typeof r("canvas").getContext("2d").fillText}),/*!
	{
	  "name": "Emoji",
	  "property": "emoji"
	}
	!*/
p.addTest("emoji",function(){if(!p.canvastext)return!1;var t=e.devicePixelRatio||1,i=12*t,n=r("canvas"),o=n.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("🐨",0,0),0!==o.getImageData(i,i,1,1).data[0]}),/*!
	{
	  "name": "Orientation and Motion Events",
	  "property": ["devicemotion", "deviceorientation"],
	  "caniuse": "deviceorientation",
	  "notes": [{
	    "name": "W3C Editor's Draft",
	    "href": "http://w3c.github.io/deviceorientation/spec-source-orientation.html"
	  },{
	    "name": "Implementation by iOS Safari (Orientation)",
	    "href": "http://goo.gl/fhce3"
	  },{
	    "name": "Implementation by iOS Safari (Motion)",
	    "href": "http://goo.gl/rLKz8"
	  }],
	  "authors": ["Shi Chuan"],
	  "tags": ["event"],
	  "builderAliases": ["event_deviceorientation_motion"]
	}
	!*/
p.addTest("devicemotion","DeviceMotionEvent"in e),p.addTest("deviceorientation","DeviceOrientationEvent"in e),/*!
	{
	  "name": "Event Listener",
	  "property": "eventlistener",
	  "authors": ["Andrew Betts (@triblondon)"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
	  }],
	  "polyfills": ["eventlistener"]
	}
	!*/
p.addTest("eventlistener","addEventListener"in e),/*!
	{
	  "name": "File API",
	  "property": "filereader",
	  "caniuse": "fileapi",
	  "notes": [{
	    "name": "W3C Working Draft",
	    "href": "https://www.w3.org/TR/FileAPI/"
	  }],
	  "tags": ["file"],
	  "builderAliases": ["file_api"],
	  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
	}
	!*/
p.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader));var X=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=r(t||"div")),e="on"+e,o=e in t,!o&&n&&(t.setAttribute||(t=r("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==i&&(t[e]=i),t.removeAttribute(e)),o):!1}var n=!("onblur"in t.documentElement);return e}();C.hasEvent=X,/*!
	{
	  "name": "Hashchange event",
	  "property": "hashchange",
	  "caniuse": "hashchange",
	  "tags": ["history"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
	  }],
	  "polyfills": [
	    "jquery-hashchange",
	    "moo-historymanager",
	    "jquery-ajaxy",
	    "hasher",
	    "shistory"
	  ]
	}
	!*/
p.addTest("hashchange",function(){return X("hashchange",e)===!1?!1:t.documentMode===i||t.documentMode>7});var F;!function(){var e={}.hasOwnProperty;F=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,i){return e.call(t,i)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),p.hasOwnProperty(e)&&setTimeout(function(){p._trigger(e,p[e])},0)},C._trigger=function(e,t){if(this._l[e]){var i=this._l[e];setTimeout(function(){var e,n;for(e=0;e<i.length;e++)(n=i[e])(t)},0),delete this._l[e]}},p._q.push(function(){C.addTest=H}),/*!
	{
	  "name": "sizes attribute",
	  "async": true,
	  "property": "sizes",
	  "tags": ["image"],
	  "authors": ["Mat Marquis"],
	  "notes": [{
	    "name": "Spec",
	    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
	    },{
	    "name": "Usage Details",
	    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
	    }]
	}
	!*/
p.addAsyncTest(function(){var e,t,i,n=r("img"),o="sizes"in n;!o&&"srcset"in n?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(){H("sizes",2==n.width)},n.onload=i,n.onerror=i,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,"+t+" 8w",n.src=e):H("sizes",o)}),/*!
	{
	  "name": "JSON",
	  "property": "json",
	  "caniuse": "json",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
	  }],
	  "polyfills": ["json2"]
	}
	!*/
p.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),/*!
	{
	  "name": "Fetch API",
	  "property": "fetch",
	  "tags": ["network"],
	  "caniuse": "fetch",
	  "notes": [{
	    "name": "Fetch Living Standard",
	    "href": "https://fetch.spec.whatwg.org/"
	  }],
	  "polyfills": ["fetch"]
	}
	!*/
p.addTest("fetch","fetch"in e),/*!
	{
	  "name": "postMessage",
	  "property": "postmessage",
	  "caniuse": "x-doc-messaging",
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
	  }],
	  "polyfills": ["easyxdm", "postmessage-jquery"]
	}
	!*/
p.addTest("postmessage","postMessage"in e),/*!
	{
	  "name": "QuerySelector",
	  "property": "queryselector",
	  "caniuse": "queryselector",
	  "tags": ["queryselector"],
	  "authors": ["Andrew Betts (@triblondon)"],
	  "notes": [{
	    "name" : "W3C Selectors reference",
	    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
	  }],
	  "polyfills": ["css-selector-engine"]
	}
	!*/
p.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t),/*!
	{
	  "name": "script[async]",
	  "property": "scriptasync",
	  "caniuse": "script-async",
	  "tags": ["script"],
	  "builderAliases": ["script_async"],
	  "authors": ["Theodoor van Donge"]
	}
	!*/
p.addTest("scriptasync","async"in r("script")),/*!
	{
	  "name": "script[defer]",
	  "property": "scriptdefer",
	  "caniuse": "script-defer",
	  "tags": ["script"],
	  "builderAliases": ["script_defer"],
	  "authors": ["Theodoor van Donge"],
	  "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
	  "knownBugs": ["False positive in Opera 12"]
	}
	!*/
p.addTest("scriptdefer","defer"in r("script")),/*!
	{
	  "name": "SVG",
	  "property": "svg",
	  "caniuse": "svg",
	  "tags": ["svg"],
	  "authors": ["Erik Dahlstrom"],
	  "polyfills": [
	    "svgweb",
	    "raphael",
	    "amplesdk",
	    "canvg",
	    "svg-boilerplate",
	    "sie",
	    "dojogfx",
	    "fabricjs"
	  ]
	}
	!*/
p.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
	{
	  "name": "SVG as an <img> tag source",
	  "property": "svgasimg",
	  "caniuse" : "svg-img",
	  "tags": ["svg"],
	  "authors": ["Chris Coyier"],
	  "notes": [{
	    "name": "HTML5 Spec",
	    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
	  }]
	}
	!*/
p.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),/*!
	{
	  "name": "SVG filters",
	  "property": "svgfilters",
	  "caniuse": "svg-filters",
	  "tags": ["svg"],
	  "builderAliases": ["svg_filters"],
	  "authors": ["Erik Dahlstrom"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/SVG11/filters.html"
	  }]
	}
	!*/
p.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(i){}return t}),/*!
	{
	  "name": "Inline SVG",
	  "property": "inlinesvg",
	  "caniuse": "svg-html5",
	  "tags": ["svg"],
	  "notes": [{
	    "name": "Test page",
	    "href": "https://paulirish.com/demo/inline-svg"
	  }, {
	    "name": "Test page and results",
	    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
	  }],
	  "polyfills": ["inline-svg-polyfill"],
	  "knownBugs": ["False negative on some Chromia browsers."]
	}
	!*/
p.addTest("inlinesvg",function(){var e=r("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),/*!
	{
	  "name": "Touch Events",
	  "property": "touchevents",
	  "caniuse" : "touch",
	  "tags": ["media", "attribute"],
	  "notes": [{
	    "name": "Touch Events spec",
	    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
	  }],
	  "warnings": [
	    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
	  ],
	  "knownBugs": [
	    "False-positive on some configurations of Nokia N900",
	    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
	  ]
	}
	!*/
p.addTest("touchevents",function(){var i;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)i=!0;else{var n=["@media (",N.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");O(n,function(e){i=9===e.offsetTop})}return i}),/*!
	{
	  "name": "HTML5 Video",
	  "property": "video",
	  "caniuse": "video",
	  "tags": ["html5"],
	  "knownBugs": [
	    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
	  ],
	  "polyfills": [
	    "html5media",
	    "mediaelementjs",
	    "sublimevideo",
	    "videojs",
	    "leanbackplayer",
	    "videoforeverybody"
	  ]
	}
	!*/
p.addTest("video",function(){var e=r("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(i){}return t}),/*!
	{
	  "name": "matchMedia",
	  "property": "matchmedia",
	  "caniuse" : "matchmedia",
	  "tags": ["matchmedia"],
	  "authors": ["Alberto Elias"],
	  "notes": [{
	    "name": "W3C CSSOM View Module",
	    "href": "https://drafts.csswg.org/cssom-view/#the-mediaquerylist-interface"
	  }, {
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia"
	  }],
	  "polyfills": ["matchmediajs"]
	}
	!*/
p.addTest("matchmedia",!!w("matchMedia",e)),/*!
	{
	  "name": "Shared Workers",
	  "property": "sharedworkers",
	  "caniuse" : "sharedworkers",
	  "tags": ["performance", "workers"],
	  "builderAliases": ["workers_sharedworkers"],
	  "notes": [{
	    "name": "W3C Reference",
	    "href": "https://www.w3.org/TR/workers/"
	  }]
	}
	!*/
p.addTest("sharedworkers","SharedWorker"in e),/*!
	{
	  "name": "Web Workers",
	  "property": "webworkers",
	  "caniuse" : "webworkers",
	  "tags": ["performance", "workers"],
	  "notes": [{
	    "name": "W3C Reference",
	    "href": "https://www.w3.org/TR/workers/"
	  }, {
	    "name": "HTML5 Rocks article",
	    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
	  }, {
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
	  }],
	  "polyfills": ["fakeworker", "html5shims"]
	}
	!*/
p.addTest("webworkers","Worker"in e),o(),T(h),delete C.addTest,delete C.addAsyncTest;for(var W=0;W<p._q.length;W++)p._q[W]();e.Modernizr=p}(t,document),e.exports=t.Modernizr}(window)},265:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=i(246),T=n(o),r={init:function(){this.browser=this.searchString(this.dataBrowser)||"Other",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"},searchString:function(e){for(var t=0;t<e.length;t++){var i=e[t].string;if(this.versionSearchString=e[t].subString,-1!==i.indexOf(e[t].subString))return e[t].identity}return""},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(-1===t)return"";var i=e.indexOf("rv:");return"Trident"===this.versionSearchString&&-1!==i?parseFloat(e.substring(i+3)):parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}]};r.init(),T["default"].addTest("ipad",Boolean(navigator.userAgent.match(/iPad/i))),T["default"].addTest("iphone",Boolean(navigator.userAgent.match(/iPhone/i))),T["default"].addTest("ipod",Boolean(navigator.userAgent.match(/iPod/i))),T["default"].addTest("ios",T["default"].ipad||T["default"].ipod||T["default"].iphone),T["default"].addTest("ie",Boolean("Explorer"===r.browser)),i(243),i(245)},393:function(e,t,i){!function(e,t){e(function(){"use strict";function e(e,t){return null!=e&&null!=t&&e.toLowerCase()===t.toLowerCase()}function i(e,t){var i,n,o=e.length;if(!o||!t)return!1;for(i=t.toLowerCase(),n=0;o>n;++n)if(i===e[n].toLowerCase())return!0;return!1}function n(e){for(var t in e)a.call(e,t)&&(e[t]=new RegExp(e[t],"i"))}function o(e,t){this.ua=e||"",this._cache={},this.maxPhoneWidth=t||600}var T={};T.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",Samsung:"Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo 3DS",Amoi:"Amoi",INQ:"INQ",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",Skyfire:"Skyfire",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",Tizen:"Tizen",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Puffin:"Puffin",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:"Firefox/[VER]",Fennec:"Fennec/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]","UC Browser":"UC Browser[VER]",MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},T.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
tabletPattern:/android|ipad|playbook|silk/i};var r,a=Object.prototype.hasOwnProperty;return T.FALLBACK_PHONE="UnknownPhone",T.FALLBACK_TABLET="UnknownTablet",T.FALLBACK_MOBILE="UnknownMobile",r="isArray"in Array?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},function(){var e,t,i,o,s,S,l=T.mobileDetectRules;for(e in l.props)if(a.call(l.props,e)){for(t=l.props[e],r(t)||(t=[t]),s=t.length,o=0;s>o;++o)i=t[o],S=i.indexOf("[VER]"),S>=0&&(i=i.substring(0,S)+"([\\w._\\+]+)"+i.substring(S+5)),t[o]=new RegExp(i,"i");l.props[e]=t}n(l.oss),n(l.phones),n(l.tablets),n(l.uas),n(l.utils),l.oss0={WindowsPhoneOS:l.oss.WindowsPhoneOS,WindowsMobileOS:l.oss.WindowsMobileOS}}(),T.findMatch=function(e,t){for(var i in e)if(a.call(e,i)&&e[i].test(t))return i;return null},T.findMatches=function(e,t){var i=[];for(var n in e)a.call(e,n)&&e[n].test(t)&&i.push(n);return i},T.getVersionStr=function(e,t){var i,n,o,r,s=T.mobileDetectRules.props;if(a.call(s,e))for(i=s[e],o=i.length,n=0;o>n;++n)if(r=i[n].exec(t),null!==r)return r[1];return null},T.getVersion=function(e,t){var i=T.getVersionStr(e,t);return i?T.prepareVersionNo(i):NaN},T.prepareVersionNo=function(e){var t;return t=e.split(/[a-z._ \/\-]/i),1===t.length&&(e=t[0]),t.length>1&&(e=t[0]+".",t.shift(),e+=t.join("")),Number(e)},T.isMobileFallback=function(e){return T.detectMobileBrowsers.fullPattern.test(e)||T.detectMobileBrowsers.shortPattern.test(e.substr(0,4))},T.isTabletFallback=function(e){return T.detectMobileBrowsers.tabletPattern.test(e)},T.prepareDetectionCache=function(e,i,n){if(e.mobile===t){var r,a,s;return(a=T.findMatch(T.mobileDetectRules.tablets,i))?(e.mobile=e.tablet=a,void(e.phone=null)):(r=T.findMatch(T.mobileDetectRules.phones,i))?(e.mobile=e.phone=r,void(e.tablet=null)):void(T.isMobileFallback(i)?(s=o.isPhoneSized(n),s===t?(e.mobile=T.FALLBACK_MOBILE,e.tablet=e.phone=null):s?(e.mobile=e.phone=T.FALLBACK_PHONE,e.tablet=null):(e.mobile=e.tablet=T.FALLBACK_TABLET,e.phone=null)):T.isTabletFallback(i)?(e.mobile=e.tablet=T.FALLBACK_TABLET,e.phone=null):e.mobile=e.tablet=e.phone=null)}},T.mobileGrade=function(e){var t=null!==e.mobile();return e.os("iOS")&&e.version("iPad")>=4.3||e.os("iOS")&&e.version("iPhone")>=3.1||e.os("iOS")&&e.version("iPod")>=3.1||e.version("Android")>2.1&&e.is("Webkit")||e.version("Windows Phone OS")>=7||e.is("BlackBerry")&&e.version("BlackBerry")>=6||e.match("Playbook.*Tablet")||e.version("webOS")>=1.4&&e.match("Palm|Pre|Pixi")||e.match("hp.*TouchPad")||e.is("Firefox")&&e.version("Firefox")>=12||e.is("Chrome")&&e.is("AndroidOS")&&e.version("Android")>=4||e.is("Skyfire")&&e.version("Skyfire")>=4.1&&e.is("AndroidOS")&&e.version("Android")>=2.3||e.is("Opera")&&e.version("Opera Mobi")>11&&e.is("AndroidOS")||e.is("MeeGoOS")||e.is("Tizen")||e.is("Dolfin")&&e.version("Bada")>=2||(e.is("UC Browser")||e.is("Dolfin"))&&e.version("Android")>=2.3||e.match("Kindle Fire")||e.is("Kindle")&&e.version("Kindle")>=3||e.is("AndroidOS")&&e.is("NookTablet")||e.version("Chrome")>=11&&!t||e.version("Safari")>=5&&!t||e.version("Firefox")>=4&&!t||e.version("MSIE")>=7&&!t||e.version("Opera")>=10&&!t?"A":e.os("iOS")&&e.version("iPad")<4.3||e.os("iOS")&&e.version("iPhone")<3.1||e.os("iOS")&&e.version("iPod")<3.1||e.is("Blackberry")&&e.version("BlackBerry")>=5&&e.version("BlackBerry")<6||e.version("Opera Mini")>=5&&e.version("Opera Mini")<=6.5&&(e.version("Android")>=2.3||e.is("iOS"))||e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||e.version("Opera Mobi")>=11&&e.is("SymbianOS")?"B":(e.version("BlackBerry")<5||e.match("MSIEMobile|Windows CE.*Mobile")||e.version("Windows Mobile")<=5.2,"C")},T.detectOS=function(e){return T.findMatch(T.mobileDetectRules.oss0,e)||T.findMatch(T.mobileDetectRules.oss,e)},T.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},o.prototype={constructor:o,mobile:function(){return T.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return T.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return T.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===t&&(this._cache.userAgent=T.findMatch(T.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===t&&(this._cache.userAgents=T.findMatches(T.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===t&&(this._cache.os=T.detectOS(this.ua)),this._cache.os},version:function(e){return T.getVersion(e,this.ua)},versionStr:function(e){return T.getVersionStr(e,this.ua)},is:function(t){return i(this.userAgents(),t)||e(t,this.os())||e(t,this.phone())||e(t,this.tablet())||i(T.findMatches(T.mobileDetectRules.utils,this.ua),t)},match:function(e){return e instanceof RegExp||(e=new RegExp(e,"i")),e.test(this.ua)},isPhoneSized:function(e){return o.isPhoneSized(e||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===t&&(this._cache.grade=T.mobileGrade(this)),this._cache.grade}},"undefined"!=typeof window&&window.screen?o.isPhoneSized=function(e){return 0>e?t:T.getDeviceSmallerSide()<=e}:o.isPhoneSized=function(){},o._impl=T,o})}(function(t){return"undefined"!=typeof e&&e.exports?function(t){e.exports=t()}:i(516)}())},516:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},65:function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(i=window)}e.exports=i}});
//# sourceMappingURL=modernizr.80b8a4c8ce16e0d85109.js.map