if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Pnm3DVP1lMAqb4dyJ9ek7/_buildManifest.js",revision:"e26e73c071ed77d6046f629faa3ece01"},{url:"/_next/static/Pnm3DVP1lMAqb4dyJ9ek7/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/4.c85939830695512f.js",revision:"c85939830695512f"},{url:"/_next/static/chunks/framework-ae4f43955bfa5ddc.js",revision:"ae4f43955bfa5ddc"},{url:"/_next/static/chunks/main-433b718276daae64.js",revision:"433b718276daae64"},{url:"/_next/static/chunks/pages/_app-b3c424cbf2480838.js",revision:"b3c424cbf2480838"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/index-22fcd273179291f8.js",revision:"22fcd273179291f8"},{url:"/_next/static/chunks/pages/login-6bd240ac38dc4c07.js",revision:"6bd240ac38dc4c07"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-58eeafa8bc093119.js",revision:"58eeafa8bc093119"},{url:"/_next/static/css/878510f65abe310b.css",revision:"878510f65abe310b"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/print_clearly.ttf",revision:"6daec8bf4221bea170c85fdfe62bc50a"},{url:"/img/nature.svg",revision:"86a3485bbbf8a9ec60f136b04192ad00"},{url:"/img/rain.svg",revision:"ab26aaf0014a09803f264c5f903cc82b"},{url:"/img/skip.svg",revision:"21301c41177f08bdf57224ecb0ddf15d"},{url:"/manifest.json",revision:"cfe69f4846b521d39290df790243e789"},{url:"/mp3/brown_noise.mp3",revision:"98e7ad2bffb55e4e185a964628753ce9"},{url:"/mp3/fire.mp3",revision:"6acb1e42c72ef8545001bb9ada5ed368"},{url:"/mp3/nature.mp3",revision:"7064cba64973e0b8a9bde7c754e8531b"},{url:"/mp3/rain.mp3",revision:"e0b0f8d49898723624338b78747b049e"},{url:"/mp3/transition.mp3",revision:"550760987374533979b5140a1c8eae50"},{url:"/mp4/backgrounds/aesthetic_1.mp4",revision:"4204eed95b9795d440a2b31cc7cf2559"},{url:"/mp4/backgrounds/anime_1.mp4",revision:"3b57df1895581c867a6698b25a81cc6e"},{url:"/mp4/backgrounds/anime_2.mp4",revision:"8f433c95e438beceefc0d53aedc48cd8"},{url:"/mp4/backgrounds/anime_3.mp4",revision:"c6311485ee5a75bcca315ba40e507b04"},{url:"/mp4/backgrounds/clouds_1.mp4",revision:"0b18eefec35ffb30e75988ec216d1c41"},{url:"/mp4/backgrounds/lofi_1.mp4",revision:"bfe227f31256d4e587734308b9f7cb42"},{url:"/mp4/backgrounds/lofi_2.mp4",revision:"261f01a6d9c5cdd88dfe88109dd9a3d1"},{url:"/mp4/backgrounds/minecraft_1.mp4",revision:"534f4d17dd5f362eca0db0b2a689635e"},{url:"/mp4/backgrounds/simpsons_1.mp4",revision:"f30d7343f2a1121f8ae4fc3a7a4695f7"},{url:"/mp4/backgrounds/simpsons_2.mp4",revision:"cd7aa92d159cbf925d3152f4bedc859f"},{url:"/mp4/backgrounds/train_1.mp4",revision:"3f1b9a415720da90c72d57fa5a97e456"},{url:"/mp4/filters/transition.mp4",revision:"00b5f6a28b38d1250a66e1582d602808"},{url:"/mp4/filters/vhs.mp4",revision:"fddfd4282830e822b4e3bfe5b9abe14c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
