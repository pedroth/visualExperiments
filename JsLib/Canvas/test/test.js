var test=function(t){var i={};function e(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=i,e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(a,n,function(i){return t[i]}.bind(null,n));return a},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=2)}([function(t,i,e){var a=e(1);function n(t,i){var e=[];return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e}function s(t){var i=[];return i[0]=Math.floor(t[0]),i[1]=Math.floor(t[1]),i}function r(t,i){var e=[];return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function h(t,i){return t[0]*i[0]+t[1]*i[1]}function o(t){return h(t,t)}function c(t){return Math.sqrt(h(t,t))}function u(t,i){var e=[];return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e}function l(t,i){var e=[];return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e}function d(t,i,e){var a=e[1]/t[1];return[a,(-t[0]*a+e[0])/i]}function g(t,i,e){var a=e[0]/t[0];return[a,(-t[1]*a+e[1])/i]}var f=function(t){this.canvas=t,this.ctx=t.getContext("2d"),this.image=this.ctx.getImageData(0,0,t.width,t.height),this.imageData=this.image.data};f.prototype.getSize=function(){return[this.canvas.height,this.canvas.width]},f.prototype.paintImage=function(){this.ctx.putImageData(this.image,0,0)},f.prototype.getCanvas=function(){return this.canvas},f.prototype.clearImage=function(t){this.useCanvasCtx(i=>{var e=i.getSize();i.ctx.fillStyle="rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")",i.ctx.globalCompositeOperation="source-over",i.ctx.fillRect(0,0,e[1],e[0])},!0)},f.prototype.useCanvasCtx=function(t,i=!1){i||this.ctx.putImageData(this.image,0,0),t(this),this.image=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),this.imageData=this.image.data},f.prototype.getImageIndex=function(t){return 4*(this.canvas.width*t[0]+t[1])},f.prototype.getPxl=function(t){var i=this.getImageIndex(t);return[this.imageData[i],this.imageData[i+1],this.imageData[i+2],this.imageData[i+3]]},f.prototype.drawPxl=function(t,i){var e=this.getImageIndex(t);this.imageData[e]=i[0],this.imageData[e+1]=i[1],this.imageData[e+2]=i[2],this.imageData[e+3]=i[3]},f.prototype.drawLine=function(t,i,e){e.points=[t,i];var a=[];a.push(t),a.push(i);for(var n=[],s=[],o=0;o<a.length;o++){0<=(f=a[o])[0]&&f[0]<this.canvas.height&&0<=f[1]&&f[1]<this.canvas.width?n.push(f):s.push(f)}if(2!=n.length){var c=[],u=[i[0]-t[0],i[1]-t[1]];c.push(d(u,-(this.canvas.height-1),[-t[0],-t[1]])),c.push(g(u,-(this.canvas.width-1),[this.canvas.height-1-t[0],-t[1]])),c.push(d(u,this.canvas.height-1,[this.canvas.height-1-t[0],this.canvas.width-1-t[1]])),c.push(g(u,this.canvas.width-1,[-t[0],this.canvas.width-1-t[1]]));var l=[];for(o=0;o<c.length;o++){var f;0<=(f=c[o])[0]&&f[0]<=1&&0<=f[1]&&f[1]<=1&&l.push(f)}if(0!=l.length)if(n.length>0){var p=[t[0]+l[0][0]*u[0],t[1]+l[0][0]*u[1]];this.drawLineInt(n.pop(),p,e)}else{var m=[t[0]+l[0][0]*u[0],t[1]+l[0][0]*u[1]];for(o=1;o<l.length;o++){if(h(u=r(p=[t[0]+l[o][0]*u[0],t[1]+l[o][0]*u[1]],m),u)>.001)return void this.drawLineInt(m,p,e)}this.drawLineInt(m,m,e)}}else this.drawLineInt(n[0],n[1],e)},f.prototype.drawLineInt=function(t,i,e){t=s(t),i=s(i);var a=[-1,0,1],o=a.length,c=o*o,u=[];u[0]=t[0],u[1]=t[1];var l=r(i,t),d=[];for(d[0]=-l[1],d[1]=l[0],e(u,e.points,this);u[0]!==i[0]||u[1]!==i[1];){for(var g=Number.MAX_VALUE,f=[],p=0;p<c;p++){var m=a[p%o],v=a[Math.floor(p/o)],w=r(n(u,[m,v]),t),y=Math.abs(h(w,d))-h(w,l);g>y&&(g=y,f=[m,v])}e(u=n(u,f),e.points,this)}e(u,e.points,this)},f.prototype.drawPolygon=function(t,i,e=f.isInsidePolygon){let a=[[Number.MAX_VALUE,Number.MAX_VALUE],[Number.MIN_VALUE,Number.MIN_VALUE]];for(let i=0;i<t.length;i++)a[0]=u(t[i],a[0]),a[1]=l(t[i],a[1]);let n=r(this.getSize(),[1,1]),h=[0,0];a[0]=s(u(n,l(h,a[0]))),a[1]=s(u(n,l(h,a[1])));for(var o=a[0][0];o<a[1][0];o++)for(var c=a[0][1];c<a[1][1];c++){var d=[o,c];e(d,t)&&i(d,t,this)}},f.prototype.drawTriangle=function(t,i,e,a){var n=[t,i,e];this.drawPolygon(n,a,f.isInsideConvex)},f.prototype.drawQuad=function(t,i,e,a,n){this.drawPolygon([t,i,e,a],n)},f.prototype.drawImage=function(t,i){"isReady"in t&&!t.isReady||this.useCanvasCtx(e=>e.ctx.drawImage(t,i[1],i[0]))},f.prototype.drawCircle=function(t,i,e){var a=function(t,i){var e=[];return e[0]=t[0]*i,e[1]=t[1]*i,e}([1,1],i),h=[r(t,a),n(t,a)],o=this.getSize();h[0]=s(u(r(o,[1,1]),l([0,0],h[0]))),h[1]=s(u(r(o,[1,1]),l([0,0],h[1])));for(var c=h[0][0];c<=h[1][0];c++)for(var d=h[0][1];d<=h[1][1];d++){var g=[c,d];this.isInsideCircle(g,t,i)&&e(g,[t,i],this)}},f.prototype.isInsideCircle=function(t,i,e){return o(r(t,i))<=e*e},f.prototype.addEventListener=function(t,i,e){this.canvas.addEventListener(t,i,e)},f.prototype.drawString=function(t,i,e){this.useCanvasCtx(a=>{e(a.ctx),a.ctx.fillText(i,t[1],t[0])})},f.isInsidePolygon=function(t,i){for(var e=[],a=0,n=i.length,s=0;s<n;s++)e[0]=r(i[(s+1)%n],t),e[1]=r(i[s],t),a+=Math.acos(h(e[0],e[1])/(c(e[0])*c(e[1])));return Math.abs(a-2*Math.PI)<.001},f.isInsideConvex=function(t,i){for(var e=i.length,a=[],n=[],s=0;s<e;s++){a[s]=r(i[(s+1)%e],i[s]);let o=[-a[s][1],a[s][0]],c=r(t,i[s]);n[s]=h(c,o)}let o=a[0][0]*a[1][1]-a[0][1]*a[1][0]>0?1:-1;for(s=0;s<e;s++){if(n[s]*o<0)return!1}return!0},f.simpleShader=function(t){return(i,e,a)=>a.drawPxl(i,t)},f.colorShader=function(t){return f.interpolateTriangleShader((i,e,a,n)=>{for(var s=[0,0,0,0],r=0;r<e.length;r++)s[0]=s[0]+t[r][0]*n[r],s[1]=s[1]+t[r][1]*n[r],s[2]=s[2]+t[r][2]*n[r],s[3]=s[3]+t[r][3]*n[r];a.drawPxl(i,s)})},f.interpolateQuadShader=function(t){return function(i,e,a){var n=[e[0],e[1],e[2]],s=[e[2],e[3],e[0]],r=f.triangleBaryCoord(i,n);r[0]>0&&r[1]>0&&r[2]>0&&Math.abs(r[0]+r[1]+r[2]-1)<1e-10?t(i,e,a,[r[0],r[1],r[2],0]):(r=f.triangleBaryCoord(i,s),t(i,e,a,[r[2],0,r[0],r[1]]))}},f.interpolateTriangleShader=function(t){return(i,e,a)=>{alpha=f.triangleBaryCoord(i,e),t(i,e,a,alpha)}},f.interpolateLineShader=function(t){return(i,e,a)=>{var n=r(e[1],e[0]),s=r(i,e[0]),c=o(n),u=h(s,n);t(i,e,a,0==c?0:u/c)}},f.quadTextureShader=function(t,i,e=f.bilinearInterpolation){let h=null;return f.interpolateQuadShader((o,c,d,g)=>{t.isReady&&null!=h||(h=new f(a.getImageCanvas(t)));const p=h,m=p.getSize(),v=[0,0];for(let t=0;t<i.length;t++)v[0]=v[0]+i[t][0]*g[t],v[1]=v[1]+i[t][1]*g[t];var w=[(1-v[1])*(m[1]-1),(m[0]-1)*v[0]],y=s(w=l([0,0],u(r([m[0],m[1]],[1,1]),w))),I=[p.getPxl(y),p.getPxl(n(y,[1,0])),p.getPxl(n(y,[1,1])),p.getPxl(n(y,[0,1]))],x=e(I,r(w,y));d.drawPxl(o,x)})},f.triangleCache=(()=>{const t=[];return{constains:i=>null!=t[i%3],get:i=>t[i%3],set:(i,e)=>t[i%3]=e}})(),f.triangleHash=t=>{return[t[0][0],t[1][0],t[2][0],t[0][1],t[1][1],t[2][1]].reduce((t,i)=>31*t+i,1)},f.triangleBaryCoord=function(t,i){const e=f.triangleHash(i),a=[t[0]-i[0][0],t[1]-i[0][1]];if(!f.triangleCache.constains(e)){const t=[i[1][0]-i[0][0],i[1][1]-i[0][1]],a=[i[2][0]-i[0][0],i[2][1]-i[0][1]],n=t[0]*a[1]-t[1]*a[0];f.triangleCache.set(e,{triangle:i,u:t.map(t=>t/n),v:a.map(t=>t/n),det:n,hash:e})}const n=f.triangleCache.get(e),s=n.u,r=n.v;if(0==n.det)return[0,0,0];var h=[r[1]*a[0]-r[0]*a[1],s[0]*a[1]-s[1]*a[0]];return[1-h[0]-h[1],h[0],h[1]]},f.bilinearInterpolation=function(t,i){for(var e=[],a=0;a<t.length;a++){var n=t[0][a]+(t[3][a]-t[0][a])*i[1],s=n+(t[1][a]+(t[2][a]-t[1][a])*i[1]-n)*i[0];e.push(s)}return e},f.createCanvas=function(t,i){},t.exports=f},function(t,i){var e={getImageCanvas:function(t){var i=document.createElement("canvas");i.width=t.width,i.height=t.height;var e=i.getContext("2d");return e.fillStyle="rgba(0, 0, 0, 0)",e.globalCompositeOperation="source-over",e.fillRect(0,0,i.width,i.height),e.drawImage(t,0,0),i},getDataFromImage:function(t){return canvas=e.getImageCanvas(t),canvas.getContext("2d").getImageData(0,0,t.width,t.height)},loadImage:function(t){var i=new Image;return i.src=t,i.isReady=!1,i.onload=()=>i.isReady=!0,i},generateImageReadyPredicate:function(t){return()=>t.isReady}};t.exports=e},function(t,i,e){const a=e(0),n=e(3),s=e(1),r=e(4),h=e(5);function o(t,i){return[t+(i-t)*Math.random(),t+(i-t)*Math.random()]}function c(t,i,e){const a=[];return a[0]=t[0]+i[0]*(1-e)+i[0]*e,a[1]=t[1]+i[1]*(1-e)-i[1]*e,a}const u=a.simpleShader([0,255,0,255]),l=a.simpleShader([0,0,255,255]),d=a.simpleShader([255,0,0,255]),g=[new function(t){this.divName=t,this.canvasLines=new n(document.getElementById("canvasLines"),[[-1,1],[-1,1]]),this.isFirstIte=!0,this.a=[-1,1],this.v=[.1,.1],this.n=[1,-1],this.speed=.01,this.points=function(t,i){const e=[];return e.push([t[0]+i[0],t[1]+i[1]]),e.push([t[0]-i[0],t[1]-i[1]]),e}(this.a,this.v),this.colorInterShader=function(t,i,e,a){const n=[0,0,0,255],s=[255,255,255,255],r=[s[0]-n[0],s[1]-n[1],s[2]-n[2],s[3]-n[3]];e.drawPxl(t,[n[0]+r[0]*a,n[1]+r[1]*a,n[2]+r[2]*a,n[3]+r[3]*a])},this.update=function(){if(this.isFirstIte){const t=100;for(let i=0;i<t;i++){const t=o(-1,1),i=o(-1,1);this.canvasLines.drawLine(t,i,u)}for(let i=0;i<t;i++){const t=o(-3,3),i=o(-3,3);this.canvasLines.drawLine(t,i,l)}this.canvasLines.drawLine([0,0],[2,2],d),this.canvasLines.drawLine([0,0],[-2,-2],a.interpolateLineShader(this.colorInterShader)),this.canvasLines.paintImage(),this.isFirstIte=!1}else this.canvasLines.drawLine(this.points[0],this.points[1],a.interpolateLineShader(this.colorInterShader)),this.points[0]=[this.points[0][0]+this.speed*this.n[0],this.points[0][1]+this.speed*this.n[1]],this.points[1]=[this.points[1][0]+this.speed*this.n[0],this.points[1][1]+this.speed*this.n[1]],this.canvasLines.paintImage()}}("test1"),new function(t){this.divName=t,this.canvasPoints=new a(document.getElementById("canvasPoints")),this.i=0,this.j=0,this.t=0,this.img=s.loadImage("resources/R.png"),this.update=function(){this.canvasPoints.clearImage([0,0,0,255]),this.canvasPoints.drawPxl([this.i,this.j],[255,0,0,255]),this.canvasPoints.drawPxl([this.i+1,this.j],[255,0,0,255]),this.canvasPoints.drawPxl([this.i-1,this.j],[255,0,0,255]),this.canvasPoints.drawPxl([this.i,this.j-1],[255,0,0,255]),this.canvasPoints.drawPxl([this.i,this.j+1],[255,0,0,255]),this.canvasPoints.drawImage(this.img,[this.i+10,this.j]),this.canvasPoints.paintImage(),this.t++;const t=this.canvasPoints.getSize();this.i=this.t%t[0],this.j=Math.floor(this.t/t[0])}}("test2"),new function(t){this.divName=t,this.triangleShader=a.colorShader([[255,0,0,255],[0,255,0,255],[0,0,255,255]]),this.canvasTriangles=new a(document.getElementById("canvasTriangles")),this.samples=25,this.avgTime=0,this.ite=this.samples;const i=this.canvasTriangles.getSize();this.animeTriangle=[o(0,i[0]),o(0,i[0]),o(0,i[0])],this.average=[0,0],this.diff=[];for(let t=0;t<this.animeTriangle.length;t++)this.average[0]+=this.animeTriangle[t][0],this.average[1]+=this.animeTriangle[t][1];this.average[0]/=3,this.average[1]/=3;for(let t=0;t<this.animeTriangle.length;t++)this.diff[t]=[this.animeTriangle[t][0]-this.average[0],this.animeTriangle[t][1]-this.average[1]];this.animeCircle=o(0,i[0]),this.t=0,this.update=function(){const t=this.canvasTriangles.getSize();if(this.ite>0){this.canvasTriangles.drawLine([0,Math.floor(t[0]/10)],[t[1],Math.floor(t[0]/10)],d),this.canvasTriangles.drawLine([Math.floor(t[1]/10),0],[Math.floor(t[1]/10),t[0]],l),this.canvasTriangles.drawLine([0,0],[t[0]-1,t[1]-1],u);const i=o(0,t[0]),e=o(0,t[0]),a=o(0,t[0]),n=(new Date).getTime();this.canvasTriangles.drawTriangle(i,e,a,l),this.avgTime+=((new Date).getTime()-n)/1e3,this.canvasTriangles.paintImage(),this.ite--,0==this.ite&&console.log(this.avgTime/this.samples)}else{this.canvasTriangles.clearImage([250,250,250,255]);const i=Math.sin(this.t/(2*Math.PI*10)),e=i*i;this.canvasTriangles.drawTriangle(c(this.average,this.diff[0],e),c(this.average,this.diff[1],e),c(this.average,this.diff[2],e),this.triangleShader),this.canvasTriangles.drawCircle(this.animeCircle,e*t[0]*.25,l),this.t++,this.canvasTriangles.paintImage()}}}("test3"),new function(t){this.divName=t,this.canvasTexture=new n(document.getElementById("canvasTexture"),[[-1,1],[-1,1]]),this.oldTime=(new Date).getTime(),this.texture=s.loadImage("resources/R.png"),this.t=0,this.quad=[[-.25,-.25],[.45,-.25],[.25,.45],[-.25,.25]],this.shader=new r(a.quadTextureShader(this.texture,[[0,0],[1,0],[1,1],[0,1]]),a.simpleShader([255,0,255,255]),s.generateImageReadyPredicate(this.texture)),this.update=function(){const t=.001*((new Date).getTime()-this.oldTime);this.oldTime=(new Date).getTime(),this.canvasTexture.clearImage([0,0,0,255]),this.canvasTexture.drawString([-.95,.9],"FPS : "+1/t,function(t){t.fillStyle="white",t.font="bold 16px Arial"});const i=Math.cos(3*this.t),e=.5*i*i,a=[];for(let t=0;t<this.quad.length;t++)a.push([e*this.quad[t][0],e*this.quad[t][1]]);this.canvasTexture.drawQuad(a[0],a[1],a[2],a[3],this.shader.get()),this.t+=t,this.canvasTexture.paintImage()}}("test4")],f=h.builder();for(let t=0;t<g.length;t++)f.push(h.simulatorBuilder().addBaseSimulator(g[t]).checkIfCanDraw(t=>$(`#${t.divName}`).is(":visible")).draw(t=>t.update()).start(t=>$(`#${t.divName}`).slideDown()).end(t=>$(`#${t.divName}`).slideUp()).build());const p=f.build();t.exports.default={run:function(t){p.runSimulation(t)}}},function(t,i,e){var a=e(0),n=function(t,i){if(a.call(this,t),2!=i.length||2!=i[0].length&&2!=i[1].length)throw"camera space must be 2-dim array with 2-dim arrays representing an interval";this.cameraSpace=i};(n.prototype=Object.create(a.prototype)).constructor=n,n.prototype.integerTransform=function(t){return[-(this.canvas.height-1)/(this.cameraSpace[1][1]-this.cameraSpace[1][0])*(t[1]-this.cameraSpace[1][1]),(this.canvas.width-1)/(this.cameraSpace[0][1]-this.cameraSpace[0][0])*(t[0]-this.cameraSpace[0][0])]},n.prototype.inverseTransform=function(t){return[this.cameraSpace[0][0]+(this.cameraSpace[0][1]-this.cameraSpace[0][0])/(this.canvas.width-1)*t[1],this.cameraSpace[1][1]-(this.cameraSpace[1][1]-this.cameraSpace[1][0])/(this.canvas.height-1)*t[0]]},n.prototype.drawLine=function(t,i,e){y1=this.integerTransform(t),y2=this.integerTransform(i),a.prototype.drawLine.call(this,y1,y2,e)},n.prototype.drawTriangle=function(t,i,e,n){y1=this.integerTransform(t),y2=this.integerTransform(i),y3=this.integerTransform(e),a.prototype.drawTriangle.call(this,y1,y2,y3,n)},n.prototype.drawQuad=function(t,i,e,n,s){y1=this.integerTransform(t),y2=this.integerTransform(i),y3=this.integerTransform(e),y4=this.integerTransform(n),a.prototype.drawQuad.call(this,y1,y2,y3,y4,s)},n.prototype.drawCircle=function(t,i,e){y=this.integerTransform(t),z=this.integerTransform([i,0])[1]-this.integerTransform([0,0])[1],a.prototype.drawCircle.call(this,y,z,e)},n.prototype.drawImage=function(t,i){a.prototype.drawImage.call(this,t,this.integerTransform(i))},n.prototype.drawString=function(t,i,e){y=this.integerTransform(t),a.prototype.drawString.call(this,y,i,e)},n.prototype.setCamera=function(t){if(2!=t.length||2!=t[0].length&&2!=t[1].length)throw"camera space must be 2-dim array with 2-dim arrays representing an interval";this.cameraSpace=t},t.exports=n},function(t,i){const e=function(t,i){this.left=t,this.right=i,this.predicate=()=>!0};e.prototype.chooseLeftIf=function(t){return this.predicate=t,this},e.prototype.get=function(){return this.predicate(this.left,this.right)?this.left:this.right},e.of=function(t,i){return new e(t,i)},t.exports=e},function(t,i){var e={builder:function(){return new function(){this.simulations=[],this.push=function(t){return this.simulations.push(t),this},this.build=function(){return new e.SimManager(this.simulations)}}},SimManager:function(t){this.stateIndexApplicationOpen=0,this.simulations=t,this.closeState=function(t){t>0&&this.simulations[t-1].end()},this.openState=function(t){this.simulations[t-1].start()},this.clickOperator=function(t,i){var e=i!=t;return e?(this.closeState(i),this.openState(t)):this.closeState(i),e?t:0},this.simulate=function(t){this.simulations[t].draw(),this.simulations[t].checkIfCanDraw()&&requestAnimationFrame(()=>this.simulate(t))},this.runSimulation=function(t){this.stateIndexApplicationOpen=this.clickOperator(t+1,this.stateIndexApplicationOpen),requestAnimationFrame(()=>this.simulate(t))},this.apply=function(t,i){return i(this.simulations[t]),this},this.init=function(){return this.simulations.forEach(t=>t.init()),this}},simulatorBuilder:function(){return new function(){var t=function(){throw"Undefined obligatory function"};this.simulator={base:{},init:t,checkIfCanDraw:t,draw:()=>t,start:()=>t,end:()=>t},this.addBaseSimulator=function(t){return this.simulator.base=t,this},this.init=function(t){return this.simulator.init=()=>t(this.simulator.base),this},this.checkIfCanDraw=function(t){return this.simulator.checkIfCanDraw=()=>t(this.simulator.base),this},this.draw=function(t){return this.simulator.draw=()=>t(this.simulator.base),this},this.start=function(t){return this.simulator.start=()=>t(this.simulator.base),this},this.end=function(t){return this.simulator.end=()=>t(this.simulator.base),this},this.build=function(){return this.simulator}}}};t.exports=e}]).default;