!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VisualExp=e():t.VisualExp=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){var n=r(1);function a(t,e){var r=[];return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r}function i(t){var e=[];return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function o(t,e){var r=[];return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r}function s(t,e){return t[0]*e[0]+t[1]*e[1]}function c(t){return s(t,t)}function h(t){return Math.sqrt(s(t,t))}function u(t,e){var r=[];return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r}function l(t,e){var r=[];return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r}function p(t,e,r){var n=r[1]/t[1];return[n,(-t[0]*n+r[0])/e]}function f(t,e,r){var n=r[0]/t[0];return[n,(-t[1]*n+r[1])/e]}var d=function(t){this.canvas=t,this.ctx=t.getContext("2d"),this.image=this.ctx.getImageData(0,0,t.width,t.height),this.imageData=this.image.data};d.prototype.getSize=function(){return[this.canvas.height,this.canvas.width]},d.prototype.paintImage=function(){this.ctx.putImageData(this.image,0,0)},d.prototype.getCanvas=function(){return this.canvas},d.prototype.clearImage=function(t){this.useCanvasCtx(e=>{var r=e.getSize();e.ctx.fillStyle="rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")",e.ctx.globalCompositeOperation="source-over",e.ctx.fillRect(0,0,r[1],r[0])},!0)},d.prototype.useCanvasCtx=function(t,e=!1){e||this.ctx.putImageData(this.image,0,0),t(this),this.image=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),this.imageData=this.image.data},d.prototype.getImageIndex=function(t){return 4*(this.canvas.width*t[0]+t[1])},d.prototype.getPxl=function(t){var e=this.getImageIndex(t);return[this.imageData[e],this.imageData[e+1],this.imageData[e+2],this.imageData[e+3]]},d.prototype.drawPxl=function(t,e){var r=this.getImageIndex(t);this.imageData[r]=e[0],this.imageData[r+1]=e[1],this.imageData[r+2]=e[2],this.imageData[r+3]=e[3]},d.prototype.drawLine=function(t,e,r){r.points=[t,e];var n=[];n.push(t),n.push(e);for(var a=[],i=[],c=0;c<n.length;c++){0<=(d=n[c])[0]&&d[0]<this.canvas.height&&0<=d[1]&&d[1]<this.canvas.width?a.push(d):i.push(d)}if(2!=a.length){var h=[],u=[e[0]-t[0],e[1]-t[1]];h.push(p(u,-(this.canvas.height-1),[-t[0],-t[1]])),h.push(f(u,-(this.canvas.width-1),[this.canvas.height-1-t[0],-t[1]])),h.push(p(u,this.canvas.height-1,[this.canvas.height-1-t[0],this.canvas.width-1-t[1]])),h.push(f(u,this.canvas.width-1,[-t[0],this.canvas.width-1-t[1]]));var l=[];for(c=0;c<h.length;c++){var d;0<=(d=h[c])[0]&&d[0]<=1&&0<=d[1]&&d[1]<=1&&l.push(d)}if(0!=l.length)if(a.length>0){var g=[t[0]+l[0][0]*u[0],t[1]+l[0][0]*u[1]];this.drawLineInt(a.pop(),g,r)}else{var m=[t[0]+l[0][0]*u[0],t[1]+l[0][0]*u[1]];for(c=1;c<l.length;c++){if(s(u=o(g=[t[0]+l[c][0]*u[0],t[1]+l[c][0]*u[1]],m),u)>.001)return void this.drawLineInt(m,g,r)}this.drawLineInt(m,m,r)}}else this.drawLineInt(a[0],a[1],r)},d.prototype.drawLineInt=function(t,e,r){t=i(t),e=i(e);var n=[-1,0,1],c=n.length,h=c*c,u=[];u[0]=t[0],u[1]=t[1];var l=o(e,t),p=[];for(p[0]=-l[1],p[1]=l[0],r(u,r.points,this);u[0]!==e[0]||u[1]!==e[1];){for(var f=Number.MAX_VALUE,d=[],g=0;g<h;g++){var m=n[g%c],y=n[Math.floor(g/c)],v=o(a(u,[m,y]),t),x=Math.abs(s(v,p))-s(v,l);f>x&&(f=x,d=[m,y])}r(u=a(u,d),r.points,this)}r(u,r.points,this)},d.prototype.drawPolygon=function(t,e,r=d.isInsidePolygon){let n=[[Number.MAX_VALUE,Number.MAX_VALUE],[Number.MIN_VALUE,Number.MIN_VALUE]];for(let e=0;e<t.length;e++)n[0]=u(t[e],n[0]),n[1]=l(t[e],n[1]);let a=o(this.getSize(),[1,1]),s=[0,0];n[0]=i(u(a,l(s,n[0]))),n[1]=i(u(a,l(s,n[1])));for(var c=n[0][0];c<n[1][0];c++)for(var h=n[0][1];h<n[1][1];h++){var p=[c,h];r(p,t)&&e(p,t,this)}},d.prototype.drawTriangle=function(t,e,r,n){var a=[t,e,r];this.drawPolygon(a,n,d.isInsideConvex)},d.prototype.drawQuad=function(t,e,r,n,a){this.drawPolygon([t,e,r,n],a)},d.prototype.drawImage=function(t,e){"isReady"in t&&!t.isReady||this.useCanvasCtx(r=>r.ctx.drawImage(t,e[1],e[0]))},d.prototype.drawCircle=function(t,e,r){var n=function(t,e){var r=[];return r[0]=t[0]*e,r[1]=t[1]*e,r}([1,1],e),s=[o(t,n),a(t,n)],c=this.getSize();s[0]=i(u(o(c,[1,1]),l([0,0],s[0]))),s[1]=i(u(o(c,[1,1]),l([0,0],s[1])));for(var h=s[0][0];h<=s[1][0];h++)for(var p=s[0][1];p<=s[1][1];p++){var f=[h,p];this.isInsideCircle(f,t,e)&&r(f,[t,e],this)}},d.prototype.isInsideCircle=function(t,e,r){return c(o(t,e))<=r*r},d.prototype.addEventListener=function(t,e,r){this.canvas.addEventListener(t,e,r)},d.prototype.drawString=function(t,e,r){this.useCanvasCtx(n=>{r(n.ctx),n.ctx.fillText(e,t[1],t[0])})},d.isInsidePolygon=function(t,e){for(var r=[],n=0,a=e.length,i=0;i<a;i++)r[0]=o(e[(i+1)%a],t),r[1]=o(e[i],t),n+=Math.acos(s(r[0],r[1])/(h(r[0])*h(r[1])));return Math.abs(n-2*Math.PI)<.001},d.isInsideConvex=function(t,e){for(var r=e.length,n=[],a=[],i=0;i<r;i++){n[i]=o(e[(i+1)%r],e[i]);let c=[-n[i][1],n[i][0]],h=o(t,e[i]);a[i]=s(h,c)}let c=n[0][0]*n[1][1]-n[0][1]*n[1][0]>0?1:-1;for(i=0;i<r;i++){if(a[i]*c<0)return!1}return!0},d.simpleShader=function(t){return(e,r,n)=>n.drawPxl(e,t)},d.colorShader=function(t){return d.interpolateTriangleShader((e,r,n,a)=>{for(var i=[0,0,0,0],o=0;o<r.length;o++)i[0]=i[0]+t[o][0]*a[o],i[1]=i[1]+t[o][1]*a[o],i[2]=i[2]+t[o][2]*a[o],i[3]=i[3]+t[o][3]*a[o];n.drawPxl(e,i)})},d.interpolateQuadShader=function(t){return function(e,r,n){var a=[r[0],r[1],r[2]],i=[r[2],r[3],r[0]],o=d.triangleBaryCoord(e,a);o[0]>0&&o[1]>0&&o[2]>0&&Math.abs(o[0]+o[1]+o[2]-1)<1e-10?t(e,r,n,[o[0],o[1],o[2],0]):(o=d.triangleBaryCoord(e,i),t(e,r,n,[o[2],0,o[0],o[1]]))}},d.interpolateTriangleShader=function(t){return(e,r,n)=>{alpha=d.triangleBaryCoord(e,r),t(e,r,n,alpha)}},d.interpolateLineShader=function(t){return(e,r,n)=>{var a=o(r[1],r[0]),i=o(e,r[0]),h=c(a),u=s(i,a);t(e,r,n,0==h?0:u/h)}},d.quadTextureShader=function(t,e,r=d.bilinearInterpolation){let s=null;return d.interpolateQuadShader((c,h,p,f)=>{t.isReady&&null!=s||(s=new d(n.getImageCanvas(t)));const g=s,m=g.getSize(),y=[0,0];for(let t=0;t<e.length;t++)y[0]=y[0]+e[t][0]*f[t],y[1]=y[1]+e[t][1]*f[t];var v=[(1-y[1])*(m[1]-1),(m[0]-1)*y[0]],x=i(v=l([0,0],u(o([m[0],m[1]],[1,1]),v))),w=[g.getPxl(x),g.getPxl(a(x,[1,0])),g.getPxl(a(x,[1,1])),g.getPxl(a(x,[0,1]))],S=r(w,o(v,x));p.drawPxl(c,S)})},d.triangleCache=(()=>{const t=[];return{constains:e=>null!=t[e%3],get:e=>t[e%3],set:(e,r)=>t[e%3]=r}})(),d.triangleHash=t=>[t[0][0],t[1][0],t[2][0],t[0][1],t[1][1],t[2][1]].reduce((t,e)=>31*t+e,1),d.triangleBaryCoord=function(t,e){const r=d.triangleHash(e),n=[t[0]-e[0][0],t[1]-e[0][1]];if(!d.triangleCache.constains(r)){const t=[e[1][0]-e[0][0],e[1][1]-e[0][1]],n=[e[2][0]-e[0][0],e[2][1]-e[0][1]],a=t[0]*n[1]-t[1]*n[0];d.triangleCache.set(r,{triangle:e,u:t.map(t=>t/a),v:n.map(t=>t/a),det:a,hash:r})}const a=d.triangleCache.get(r),i=a.u,o=a.v;if(0==a.det)return[0,0,0];var s=[o[1]*n[0]-o[0]*n[1],i[0]*n[1]-i[1]*n[0]];return[1-s[0]-s[1],s[0],s[1]]},d.bilinearInterpolation=function(t,e){for(var r=[],n=0;n<t.length;n++){var a=t[0][n]+(t[3][n]-t[0][n])*e[1],i=a+(t[1][n]+(t[2][n]-t[1][n])*e[1]-a)*e[0];r.push(i)}return r},d.createCanvas=function(t,e){const r=document.createElement("canvas");return r.setAttribute("width",t[0]),r.setAttribute("height",t[1]),document.getElementById(e).appendChild(r),r},t.exports=d},function(t,e){var r={getImageCanvas:function(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var r=e.getContext("2d");return r.fillStyle="rgba(0, 0, 0, 0)",r.globalCompositeOperation="source-over",r.fillRect(0,0,e.width,e.height),r.drawImage(t,0,0),e},getDataFromImage:function(t){return canvas=r.getImageCanvas(t),canvas.getContext("2d").getImageData(0,0,t.width,t.height)},loadImage:function(t){var e=new Image;return e.src=t,e.isReady=!1,e.onload=()=>e.isReady=!0,e},generateImageReadyPredicate:function(t){return()=>t.isReady}};t.exports=r},function(t,e,r){const{Sort:n,ArrayUtils:a}=r(3),i=r(9),o={};function s(t){for(var e=t.split("/"),r=0,n=1,a=0;a<e.length;a++)r+=parseFloat(e[a])*n,n*=100;return r}o.DomBuilder=i,o.retrieveAndAppend=async function(t,e){console.log(`Reading from ${t}.. appending on ${e}`);const r=await fetch(t).then(t=>t.text());$(`#${e}`).html(r)},o.readDb=async function(){const t=(new Date).getTime();if(!localStorage.db||t-localStorage.db.time>864e5){const e=await fetch("resources/db/db.json").then(t=>t.json());localStorage.db=JSON.stringify({time:t,data:e})}return JSON.parse(localStorage.db).data},o.sortDb=function(t){return n.quicksort(t.experiments,(t,e)=>s(t.date)-s(e.date)<0)},o.randomDb=function(t){return a.randomPermute(t.experiments)},o.createCardFromData=function(t){var e;return console.log("Create Card From Data",t),i.of("div").attr("class","card simplePaper").append(i.of("a").attr("href",t.url).append(i.of("img").attr("class","card-img-top card-plugin").attr("src",t.imageSrc).attr("href",t.url).attr("alt",t.title).build()).build()).append(i.of("div").attr("class","card-body").append(i.of("a").attr("href",t.url).append(i.of("h3").attr("class","card-title title").inner(t.title).build()).build()).append(i.of("div").append((e=t.tags,e.map(t=>i.of("a").attr("class","badge badge-light").attr("href",`/?q=${t}`).inner(t).build()))).build()).append(i.of("p").attr("class","border-top").inner(t.date).build()).build()).build()},o.retrieveAndAppend("resources/templates/nav/nav.html","indexContainer"),t.exports=o},function(t,e,r){const n=r(0),a=r(4),i=r(1),o=r(5),s=r(7),c=r(8),h={};h.Canvas=n,h.Canvas2D=a,h.ImageIO=i,h.Stream=o,h.ArrayUtils=s,h.Sort=c,t.exports=h},function(t,e,r){var n=r(0),a=function(t,e){if(n.call(this,t),2!=e.length||2!=e[0].length&&2!=e[1].length)throw"camera space must be 2-dim array with 2-dim arrays representing an interval";this.cameraSpace=e};(a.prototype=Object.create(n.prototype)).constructor=a,a.prototype.integerTransform=function(t){return[-(this.canvas.height-1)/(this.cameraSpace[1][1]-this.cameraSpace[1][0])*(t[1]-this.cameraSpace[1][1]),(this.canvas.width-1)/(this.cameraSpace[0][1]-this.cameraSpace[0][0])*(t[0]-this.cameraSpace[0][0])]},a.prototype.inverseTransform=function(t){return[this.cameraSpace[0][0]+(this.cameraSpace[0][1]-this.cameraSpace[0][0])/(this.canvas.width-1)*t[1],this.cameraSpace[1][1]-(this.cameraSpace[1][1]-this.cameraSpace[1][0])/(this.canvas.height-1)*t[0]]},a.prototype.drawLine=function(t,e,r){y1=this.integerTransform(t),y2=this.integerTransform(e),n.prototype.drawLine.call(this,y1,y2,r)},a.prototype.drawTriangle=function(t,e,r,a){y1=this.integerTransform(t),y2=this.integerTransform(e),y3=this.integerTransform(r),n.prototype.drawTriangle.call(this,y1,y2,y3,a)},a.prototype.drawQuad=function(t,e,r,a,i){y1=this.integerTransform(t),y2=this.integerTransform(e),y3=this.integerTransform(r),y4=this.integerTransform(a),n.prototype.drawQuad.call(this,y1,y2,y3,y4,i)},a.prototype.drawCircle=function(t,e,r){y=this.integerTransform(t),z=this.integerTransform([e,0])[1]-this.integerTransform([0,0])[1],n.prototype.drawCircle.call(this,y,z,r)},a.prototype.drawImage=function(t,e){n.prototype.drawImage.call(this,t,this.integerTransform(e))},a.prototype.drawString=function(t,e,r){y=this.integerTransform(t),n.prototype.drawString.call(this,y,e,r)},a.prototype.setCamera=function(t){if(2!=t.length||2!=t[0].length&&2!=t[1].length)throw"camera space must be 2-dim array with 2-dim arrays representing an interval";this.cameraSpace=t},t.exports=a},function(t,e,r){var n=r(6),a=function(t,e=(t=>t),r=(t=>!0)){this.gen=t,this.mapFunction=e,this.filterPredicate=r};a.prototype.state=function(){return this.gen.state},a.prototype.hasNext=function(){return this.gen.hasNext(this.filteredState())},a.prototype.filteredState=function(){for(var t=this.state();this.gen.hasNext(t)&&!this.filterPredicate(this.gen.peek(t));)t=this.gen.next(t);return t},a.prototype.head=function(){let t=this.filteredState();if(this.gen.hasNext(t))return this.gen.peek(t);throw"No head element exception"},a.prototype.tail=function(){return new a(a.generatorOf(this.gen.next(this.filteredState()),this.gen.next,this.gen.peek,this.gen.hasNext),this.mapFunction,this.filterPredicate)},a.prototype.map=function(t){return new a(this.gen,n.of(t).compose(this.mapFunction).get(),this.filterPredicate)},a.prototype.reduce=function(t,e){for(var r=this;r.hasNext();){let n=r.head();t=e(t,r.mapFunction(n)),r=r.tail()}return t},a.prototype.forEach=function(t){for(var e=this;e.hasNext();){let r=e.head();t(e.mapFunction(r)),e=e.tail()}},a.prototype.collect=function(t){return this.reduce(t.identity,t.reduce)},a.prototype.filter=function(t){return new a(this.gen,this.mapFunction,e=>this.filterPredicate(e)&&t(e))},a.prototype.take=function(t){return new a(a.generatorOf({i:0,stream:this},t=>({i:t.i+1,stream:t.stream.tail()}),t=>t.stream.head(),e=>e.stream.hasNext()&&e.i<t),this.mapFunction,this.filterPredicate).collect(a.Collectors.toArray())},a.prototype.takeWhile=function(t){return new a(a.generatorOf(this,t=>t.tail(),t=>t.head(),e=>e.hasNext()&&t(e.head())),this.mapFunction,this.filterPredicate).collect(a.Collectors.toArray())},a.prototype.zip=function(t){return new a(a.generatorOf([this,t],t=>[t[0].tail(),t[1].tail()],t=>[t[0].head(),t[1].head()],t=>t[0].hasNext()&&t[1].hasNext()))},a.prototype.flatMap=function(t){return new a(a.generatorOf({baseStream:this,flatStream:null},e=>{if(!e.flatStream||!e.flatStream.hasNext()){let r=e.baseStream;return{baseStream:r.tail(),flatStream:t(r.head()).tail()}}return{baseStream:e.baseStream,flatStream:e.flatStream.tail()}},e=>e.flatStream&&e.flatStream.hasNext()?e.flatStream.head():t(e.baseStream.head()).head(),e=>e.flatStream?e.baseStream.hasNext()||e.flatStream.hasNext():e.baseStream.hasNext()&&t(e.baseStream.head()).hasNext()))},a.ofHeadTail=function(t,e){return new a(a.generatorOf({h:t,supplier:e},t=>{let e=t.supplier();return e.hasNext()?{h:e.head(),supplier:()=>e.tail()}:{h:null,supplier:null}},t=>t.h,t=>null!=t.h))},a.of=function(t){var e=[{name:"Array",predicate:t=>t.constructor===Array},{name:"Generator",predicate:t=>"function"==typeof t.hasNext&&"function"==typeof t.next&&"function"==typeof t.peek},{name:"Stream",predicate:t=>t.__proto__==a.prototype}],r={Array:t=>new a(a.generatorOf({i:0,array:t},t=>({i:t.i+1,array:t.array}),t=>t.array[t.i],t=>t.i<t.array.length)),Generator:t=>new a(t),Stream:t=>new a(t.gen,t.mapFunction,t.filterPredicate)};for(let n=0;n<e.length;n++)if(e[n].predicate(t))return r[e[n].name](t);throw`Iterable ${t} does not have a stream`},a.range=function(t,e,r=1){return new a(a.generatorOf(t,t=>t+r,t=>t,t=>null==e||t<e))},a.generatorOf=function(t,e,r,n){return new function(){this.state=t,this.next=e,this.peek=r,this.hasNext=n}},a.Collectors={toArray:()=>new function(){this.identity=[],this.reduce=(t,e)=>(t.push(e),t)}},t.exports=a},function(t,e){const r=function(t){this.f=t};r.prototype.compose=function(t){return new r(e=>this.f(t(e)))},r.prototype.leftCompose=function(t){return new r(e=>t(this.f(e)))},r.prototype.apply=function(t){return this.f(t)},r.prototype.get=function(){return this.f},r.of=function(t){return new r(t)},t.exports=r},function(t,e){var r={concat:function(t,e){return t.concat(e)},arrayEquals:function(t,e){if(t.length!=e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!=e[r])return!1;return!0},permute:function(t,e){for(var r=t.slice(),n=Math.min(t.length,e.length),a=0;a<n;a++)r[e[a]]=t[a];return r},randomPermute:function(t){const e=[...t];for(let r=t.length-1;r>0;r--){const t=Math.floor(Math.random()*(r+1)),n=e[r];e[r]=e[t],e[t]=n}return e},swap:function(t,e,r){var n=t[e];return t[e]=t[r],t[r]=n,t},findJsArrayDim:function(t){return t instanceof Array?r.concat(r.findJsArrayDim(t[0]),[t.length]):[]},unpackJsArray:function(t){if(t instanceof Array){for(var e=[],n=0;n<t.length;n++)e=r.concat(e,r.unpackJsArray(t[n]));return e}return[t]},range:function(t,e,r=1){for(var n=[],a=t;a<e;a+=r)n.push(a);return n},binaryOp:function(t,e,r){var n=t.length<e.length?t.slice():e.slice();for(let a=0;a<n.length;a++)n[a]=r(t[a],e[a]);return n}};t.exports=r},function(t,e){const r={};function n(t,e,r){if(e>=0&&e<t.length&&r>=0&&r<t.length){var n=t[e];t[e]=t[r],t[r]=n}}r.quicksort=function(t,e=((t,e)=>t-e)){const r=t.length,a=[...t],i=[];for(i.push(0),i.push(r-1);i.length>0;){const t=i.pop(),r=i.pop();if(r<t){const o=r+Math.floor((t-r)*Math.random()),s=a[o];n(a,o,t);let c=r;for(let i=r;i<t;i++)e(a[i],s)<=0&&(n(a,i,c),c++);n(a,c,t),i.push(r),i.push(c-1),i.push(c+1),i.push(t)}}return a},r.REVERSE_SORT_COMPARATOR=(t,e)=>e-t,t.exports=r},function(t,e){class r{constructor(t){this.element=t}attr(t,e){return this.element.setAttribute(t,e),this}append(t){return t instanceof Array?t.forEach(t=>this.element.appendChild(t)):this.element.appendChild(t),this}inner(t){return this.element.innerHTML=t,this}build(){return this.element}static of(t){return e=t,("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?new r(t):new r(document.createElement(t));var e}}t.exports=r}])}));