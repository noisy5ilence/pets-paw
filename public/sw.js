if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e52976256130662c518848c28092a060"},{url:"/_next/static/atPrxmfvqWqdBy2klgu1n/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/atPrxmfvqWqdBy2klgu1n/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/487-5afbf1f0739b8361.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/591-0f95ee939dcf1b95.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/645.619269ddc80500d8.js",revision:"619269ddc80500d8"},{url:"/_next/static/chunks/698-ebe2c5be3cfbaff8.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/741-0fd0b7ca899421d8.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/940-e0233c2c09572773.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/breeds/%5Bbreed%5D/page-d35b1d194d09ad66.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/breeds/page-52ec75c50bd1e1de.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/dislikes/page-44222fc1e5c364c6.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/favorites/page-fa91dee06db7d7f0.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/gallery/page-2edc7c59ee4622c0.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/layout-d08625f9476dacc7.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/likes/page-13b1062336f503eb.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/loading-1a8a06bbe19835cc.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/search/page-50917d1e55d549ad.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/(site)/voting/page-61deb59c8c66da07.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/layout-78eeac2c991e6673.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/app/page-321c6d815fb56aaf.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/bce60fc1-51ca98d7fb65a99c.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/main-7dc99a46da69620b.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/main-app-dc32b073a831b58e.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0603b970a869938d.js",revision:"atPrxmfvqWqdBy2klgu1n"},{url:"/_next/static/css/0725aa988df48752.css",revision:"0725aa988df48752"},{url:"/_next/static/css/1d72b06f7fb8bae6.css",revision:"1d72b06f7fb8bae6"},{url:"/_next/static/css/2650c36926d1d88d.css",revision:"2650c36926d1d88d"},{url:"/_next/static/css/42221bbaac8ef57a.css",revision:"42221bbaac8ef57a"},{url:"/_next/static/css/465ccf395a504e68.css",revision:"465ccf395a504e68"},{url:"/_next/static/css/a78b3faa76217656.css",revision:"a78b3faa76217656"},{url:"/_next/static/css/bc1fbd1a6c23b42c.css",revision:"bc1fbd1a6c23b42c"},{url:"/_next/static/css/e87e2545f7e55479.css",revision:"e87e2545f7e55479"},{url:"/_next/static/css/eb3890637555fac5.css",revision:"eb3890637555fac5"},{url:"/_next/static/css/f6f7fbd9bae96d3f.css",revision:"f6f7fbd9bae96d3f"},{url:"/_next/static/media/breeds.1a61ab2f.png",revision:"d6f406993d6951de4b3847112139164a"},{url:"/_next/static/media/gallery.396e7cd8.png",revision:"b93a069b920a51d9eec0623faa8d9b74"},{url:"/_next/static/media/girl-and-pet.0e650143.png",revision:"0e650143"},{url:"/_next/static/media/loader.117089be.png",revision:"117089be"},{url:"/_next/static/media/loader.a7ab62d5.png",revision:"a7ab62d5"},{url:"/_next/static/media/voting.c8d012c9.png",revision:"1b544076e3dbdf7a7b9cdb83e8d5d08c"},{url:"/breeds.png",revision:"d6f406993d6951de4b3847112139164a"},{url:"/favicon/android-chrome-192x192.png",revision:"4f6c2ed7c32f76a25507688f9824f783"},{url:"/favicon/android-chrome-256x256.png",revision:"f4bc790f79b2f9ab89315cf73aa843d2"},{url:"/favicon/apple-touch-icon.png",revision:"cde0d16fe846d8f59c5419c0adf4ec9f"},{url:"/favicon/browserconfig.xml",revision:"287419f7ecaf619dce044c60c9df248e"},{url:"/favicon/favicon-16x16.png",revision:"68cb1c1ac9794b58e1fadc428e5864a0"},{url:"/favicon/favicon-32x32.png",revision:"6356327e8f3a0a7ae8b8639d0f68d3a2"},{url:"/favicon/favicon.ico",revision:"ab5ba60e26cd0c8098f2b09102e97606"},{url:"/favicon/icon-192x192.png",revision:"d0d7e63b4e816ec8bd4db1728cea2dd5"},{url:"/favicon/icon-256x256.png",revision:"834195c4c65c171083b43f647d83683a"},{url:"/favicon/icon-384x384.png",revision:"c4606bc9849699462b9558ec1b9ecfc6"},{url:"/favicon/icon-512x512.png",revision:"88f35ccde5e1c9ea15646070ad9bc571"},{url:"/favicon/mstile-150x150.png",revision:"696de1938edca69d30f5a903ef215658"},{url:"/favicon/safari-pinned-tab.svg",revision:"a1d0a33441ca434e06e11a68d013698f"},{url:"/favicon/site.webmanifest",revision:"0db93072d2ece9a846c0cedfbfdc3b2f"},{url:"/gallery.png",revision:"b93a069b920a51d9eec0623faa8d9b74"},{url:"/girl-and-pet.png",revision:"317fc1c90db93e76fb77324f0fe1405a"},{url:"/loader.png",revision:"d59af23a5302fc8244864a7b774be995"},{url:"/manifest.json",revision:"0187dd36564cbda7e1245d47518911a2"},{url:"/photo-stub.svg",revision:"ab2a7a60b52d58b887f3dc026da947b7"},{url:"/preview.png",revision:"1a8beaf1aa2bf886d34dcff0819b990c"},{url:"/voting.png",revision:"1b544076e3dbdf7a7b9cdb83e8d5d08c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));