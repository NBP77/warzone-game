"use strict";var precacheConfig=[["/index.html","a2f4e09918611e5c44b58de65600f4e2"],["/static/css/main.870a3a05.css","5d792622c5b22942c5a2e0e4738debc0"],["/static/js/main.92061837.js","243f04cd2726ec2687b5271dfd111dbe"],["/static/media/AK-47.7c44089b.mp3","7c44089b937b1bdeedcd57e5f455bdaa"],["/static/media/AK47.ea164ad3.png","ea164ad36823cdc9af6b86868b821162"],["/static/media/AMAX.2ed5b71c.mp3","2ed5b71ce268a4f7222804ff3190b3b3"],["/static/media/AMAX.8b140453.png","8b14045361ece8b926bf88e8e9bfdacb"],["/static/media/AN-94.34dbf958.png","34dbf95889279c0a0c907942dae0d958"],["/static/media/AN-94.aeb79ee2.mp3","aeb79ee277798ee2e32a8d3d4da4f8cd"],["/static/media/AS-VAL.9d7ffc19.mp3","9d7ffc19ad22d0c418b10fb56ae5ba65"],["/static/media/ASVAL.3443ec1c.png","3443ec1c28a734b17514770dd97d7934"],["/static/media/FAL.2ee1ae31.png","2ee1ae319f84603ba3308f726944df2c"],["/static/media/FAL.e23a754a.mp3","e23a754abcd5371596fd087eac201893"],["/static/media/FR 5.56.574e027d.png","574e027d844d4d52733932c77d05f18d"],["/static/media/FR-5.56.92d437d7.mp3","92d437d70c16ad000242d921e4e53bc8"],["/static/media/GRAU.080d8a8c.mp3","080d8a8ce443cd770136432ca0364349"],["/static/media/GRAU.52b1464e.png","52b1464e7cf0cf629d045ca54024c4ae"],["/static/media/HeadShotSound.22f49f2b.mp3","22f49f2bc720c34f736f83687b6b828e"],["/static/media/KILO.f873b519.png","f873b519aec38c20ea363e3b54074266"],["/static/media/Kilo.cd26c351.mp3","cd26c35127c8873c5c85cfdbb68abf7d"],["/static/media/M13.b1091fe7.mp3","b1091fe7f2a1aa763a2e2048d26f69f5"],["/static/media/M13.ef4529ff.png","ef4529ff98e53a4e552165747e8dda39"],["/static/media/M4.37d9c896.png","37d9c896fb555df73a5b4c021c430e8b"],["/static/media/M4.e1b4c786.mp3","e1b4c786ec1fbffdc0b238f17691b9e2"],["/static/media/ODEN.8bbf1810.png","8bbf1810bb30aba74331675769228c76"],["/static/media/Oden.0a8cd612.mp3","0a8cd612ff3ed43bd29b1901790c3f83"],["/static/media/RAM.47b33b45.mp3","47b33b456b280bcccf98f2d34fade013"],["/static/media/RAM.f8ad42e4.png","f8ad42e47b60670834abfe9a41562cf4"],["/static/media/SCAR.726d5547.png","726d5547440d5d5ad6aad919a568a096"],["/static/media/Scar.9b7d006b.mp3","9b7d006ba05a55d820d62c1c6ae904f0"],["/static/media/TeamateDowned.23f6281c.mp3","23f6281c298f0b44de4a8a05e7d7497e"],["/static/media/WarzoneBG.11df808a.jpg","11df808ab1514d49e812ef0a7f0a337b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});