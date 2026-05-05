import{a3 as pt,f as ut,ap as mt,a2 as ft,J as q,j as vt,H as gt,o as Ct,c as wt,s as bt,aq as xt,ak as yt,A as Vt}from"./framework.cbxun9lb.js";var b=class{onStart;onRestart;onDispose;constructor(t,e,n,s,a,o){this.container=t,this.augment=o,this.options=e,this.onStart=n.subscribe,this.onDispose=s.subscribe,this.onRestart=a.subscribe}options},Jt=`.JSON-Canvas-Viewer {
  --contentTransition: color 200ms, opacity 200ms, text-shadow 200ms, fill 200ms;
  --containerTransition:
  	background 200ms, opacity 200ms, box-shadow 200ms, border 200ms, filter 200ms,
  	backdrop-filter 200ms;
  color: var(--text);
  fill: var(--text);
  stroke: var(--text);
  background-color: var(--background);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.JSON-Canvas-Viewer.JCV-numb, .JSON-Canvas-Viewer.JCV-numb * {
  pointer-events: none !important;
}
.JSON-Canvas-Viewer .JCV-full, .JSON-Canvas-Viewer .JCV-overlay-container .JCV-click-layer, .JSON-Canvas-Viewer .JCV-overlay-container .JCV-link-iframe,
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-audio,
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-video, .JSON-Canvas-Viewer .JCV-overlay-container .JCV-content {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.JSON-Canvas-Viewer .JCV-flex-center, .JSON-Canvas-Viewer .JCV-overlay-container .JCV-content.JCV-markdown-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.JSON-Canvas-Viewer .JCV-border-shadow-bg {
  background: var(--background-secondary);
  border: 1px solid var(--border) !important;
  box-shadow: var(--shadow);
}
.JSON-Canvas-Viewer .JCV-button {
  cursor: pointer;
  font-size: 18px;
  height: 32px;
  border: none;
  transition: var(--containerTransition);
  background-color: var(--background-secondary);
  text-align: center;
  width: 32px;
  padding: 5px 0px;
}
.JSON-Canvas-Viewer .JCV-button svg {
  width: 100%;
  height: 100%;
}
.JSON-Canvas-Viewer .JCV-button:hover {
  background-color: var(--border);
}
.JSON-Canvas-Viewer .JCV-button.JCV-collapse-button {
  border-radius: 8px;
  transition: transform 200ms, background-color 200ms;
}
.JSON-Canvas-Viewer .JCV-collapsed .JCV-collapse-button {
  transform: rotate(180deg);
}
.JSON-Canvas-Viewer .JCV-main-canvas {
  width: 100%;
  height: 100%;
  transform-origin: top left;
}
.JSON-Canvas-Viewer .JCV-overlays {
  position: absolute;
  transform-origin: top left;
  will-change: transform;
}
.JSON-Canvas-Viewer .JCV-overlay-container {
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  user-select: none;
  contain: strict;
  content-visibility: auto;
  background-color: var(--overlay-card);
  transition: var(--containerTransition);
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-overlay-border {
  box-sizing: border-box;
  pointer-events: none;
  position: absolute;
  color: var(--overlay-border);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: var(--overlay-border-width);
  border-style: solid;
  border-radius: 12px;
  transition: var(--containerTransition);
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-content {
  overflow: hidden;
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-content.JCV-markdown-content {
  position: absolute;
  padding: 0 7px;
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-content.JCV-markdown-content.rtl {
  direction: rtl;
  text-align: right;
}
.JSON-Canvas-Viewer .JCV-overlay-container.JCV-active {
  user-select: auto;
  pointer-events: auto;
}
.JSON-Canvas-Viewer .JCV-overlay-container.JCV-active .JCV-overlay-border {
  border: 4px solid var(--overlay-active);
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-link-iframe,
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-audio,
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-video {
  border: none;
  background: transparent;
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-click-layer {
  background: transparent;
  pointer-events: auto;
}
.JSON-Canvas-Viewer .JCV-overlay-container.JCV-active .JCV-click-layer {
  pointer-events: none;
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.JSON-Canvas-Viewer .JCV-overlay-container.JCV-active .JCV-img {
  pointer-events: auto;
}
.JSON-Canvas-Viewer .JCV-overlay-container .JCV-parsed-content-wrapper {
  font-family: sans-serif;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  padding: 10px 6px;
  pointer-events: none;
  overflow: hidden;
  scrollbar-gutter: stable both-edges;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@supports not (scrollbar-gutter: stable both-edges) {
  .JSON-Canvas-Viewer .JCV-overlay-container .JCV-parsed-content-wrapper {
    padding: 10px;
  }
}
.JSON-Canvas-Viewer .JCV-overlay-container.JCV-active .JCV-parsed-content-wrapper {
  overflow: auto;
  pointer-events: auto;
}
.JSON-Canvas-Viewer .JCV-markdown-content ::-webkit-scrollbar {
  width: 4px;
}
.JSON-Canvas-Viewer .JCV-markdown-content ::-webkit-scrollbar-track {
  background-color: transparent;
}
.JSON-Canvas-Viewer .JCV-markdown-content ::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.25);
}
.JSON-Canvas-Viewer .JCV-markdown-content ::-webkit-scrollbar-thumb:hover {
  background: rgba(30, 30, 30, 0.75);
}
.JSON-Canvas-Viewer .JCV-markdown-content p {
  font-size: 16px;
  line-height: 21px;
}
.JSON-Canvas-Viewer .JCV-markdown-content img {
  width: 100%;
  border-radius: 8px;
}
.JSON-Canvas-Viewer .JCV-markdown-content h1 {
  font-size: 25px;
}
.JSON-Canvas-Viewer .JCV-markdown-content h2 {
  font-size: 23px;
}
.JSON-Canvas-Viewer .JCV-markdown-content h3 {
  font-size: 22px;
}
.JSON-Canvas-Viewer .JCV-markdown-content h4 {
  font-size: 20px;
}
.JSON-Canvas-Viewer .JCV-markdown-content h5 {
  font-size: 19px;
}
.JSON-Canvas-Viewer .JCV-markdown-content h6 {
  font-size: 17px;
}
.JSON-Canvas-Viewer .JCV-markdown-content p,
.JSON-Canvas-Viewer .JCV-markdown-content h1,
.JSON-Canvas-Viewer .JCV-markdown-content h2,
.JSON-Canvas-Viewer .JCV-markdown-content h3,
.JSON-Canvas-Viewer .JCV-markdown-content h4,
.JSON-Canvas-Viewer .JCV-markdown-content h5,
.JSON-Canvas-Viewer .JCV-markdown-content h6,
.JSON-Canvas-Viewer .JCV-markdown-content ol,
.JSON-Canvas-Viewer .JCV-markdown-content ul {
  margin: 0;
}
.JSON-Canvas-Viewer .JCV-markdown-content h1,
.JSON-Canvas-Viewer .JCV-markdown-content h2 {
  font-weight: 800;
}
.JSON-Canvas-Viewer .JCV-markdown-content h3,
.JSON-Canvas-Viewer .JCV-markdown-content h4 {
  font-weight: 700;
}
.JSON-Canvas-Viewer .JCV-markdown-content h5,
.JSON-Canvas-Viewer .JCV-markdown-content h6 {
  font-weight: 600;
}
.JSON-Canvas-Viewer .JCV-markdown-content code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 4px;
  border-radius: 8px;
}
pre .JSON-Canvas-Viewer .JCV-markdown-content code {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.JSON-Canvas-Viewer .JCV-markdown-content pre:has(code),
.JSON-Canvas-Viewer .JCV-markdown-content table {
  margin: 6px 0;
}
.JSON-Canvas-Viewer .JCV-markdown-content strong {
  color: rgb(254, 142, 124);
}
.JSON-Canvas-Viewer .JCV-markdown-content em {
  color: rgb(90, 255, 178);
}
.JSON-Canvas-Viewer .JCV-markdown-content a {
  text-decoration: none;
  color: rgb(109, 173, 208);
  font-weight: 800;
  font-style: italic;
  cursor: pointer;
  transition: var(--contentTransition);
}
.JSON-Canvas-Viewer .JCV-markdown-content a:hover {
  color: rgb(134, 211, 253);
}
.JSON-Canvas-Viewer .JCV-markdown-content hr {
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
}
.JSON-Canvas-Viewer .JCV-markdown-content li {
  margin: 5px 0;
}
.JSON-Canvas-Viewer .JCV-markdown-content ul {
  padding-left: 16px;
}
.JSON-Canvas-Viewer .JCV-markdown-content ol {
  padding-left: 15px;
  padding-right: 7.5px;
}
.JSON-Canvas-Viewer .JCV-markdown-content table {
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}
.JSON-Canvas-Viewer .JCV-markdown-content table th,
.JSON-Canvas-Viewer .JCV-markdown-content table td {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.06);
  text-align: left;
}
.JSON-Canvas-Viewer .JCV-markdown-content table th {
  background: rgba(255, 255, 255, 0.12);
  font-weight: bold;
}
`;const f=Error("[JSONCanvasViewer] Resource hasn't been set up or has been disposed.");function A(i,t){let e=document.createElement("style");e.innerHTML=t,i.appendChild(e)}function T(i,t,e,n,s,a){i.beginPath(),i.moveTo(t+a,e),i.lineTo(t+n-a,e),i.quadraticCurveTo(t+n,e,t+n,e+a),i.lineTo(t+n,e+s-a),i.quadraticCurveTo(t+n,e+s,t+n-a,e+s),i.lineTo(t+a,e+s),i.quadraticCurveTo(t,e+s,t,e+s-a),i.lineTo(t,e+a),i.quadraticCurveTo(t,e,t+a,e),i.closePath()}function z(i,t){let e=i.x+i.width/2,n=i.y+i.height/2;switch(t){case"top":return{x:e,y:i.y};case"bottom":return{x:e,y:i.y+i.height};case"left":return{x:i.x,y:n};case"right":return{x:i.x+i.width,y:n};default:return{x:e,y:n}}}function nt(i,t,e){let n=window.devicePixelRatio??1,s=i.getContext("2d");if(!s)throw Error("[JSONCanvasViewer] This error is unexpected, probably caused uncontrollable runtime errors. Please contact the developer and show how to reproduce.");i.width=Math.round(t*n),i.height=Math.round(e*n),s.setTransform(1,0,0,1,0,0),s.scale(n,n)}function v(i=!1,t=!1){let e=t?async(...n)=>{if(i){let s=[...e.subs].reverse();for(let a of s)await a(...n)}else for(let s of e.subs)await s(...n)}:(...n)=>{if(i){let s=[...e.subs].reverse();for(let a of s)a(...n)}else for(let s of e.subs)s(...n)};return e.subs=new Set,e.subscribe=n=>{e.subs.add(n)},e.unsubscribe=n=>{e.subs.delete(n)},e}var x=class extends b{onToggleFullscreen=v();data={canvasBaseDir:"./",canvasData:{edges:[],nodes:[]},container:document.createElement("div"),edgeMap:{},nodeBounds:{centerX:0,centerY:0,height:0,maxX:0,maxY:0,minX:0,minY:0,width:0},nodeMap:{},offsetX:0,offsetY:0,scale:1};constructor(...t){super(...t);let e=this.options.container;for(;e.firstElementChild;)e.firstElementChild.remove();e.innerHTML="";let n=this.options.shadowed?e.attachShadow({mode:"open"}):e;A(n,Jt+this.options.extraCSS),this.data.container.classList.add("JSON-Canvas-Viewer"),n.appendChild(this.data.container),this.augment({onToggleFullscreen:this.onToggleFullscreen,resetView:this.resetView,toggleFullscreen:this.toggleFullscreen}),this.onStart(this.start),this.onRestart(this.start),this.onDispose(this.dispose)}start=()=>{let t={edges:[],nodes:[],...this.options.canvas};Object.assign(this.data,{canvasBaseDir:this.processBaseDir(this.options.attachmentDir),canvasData:t,edgeMap:{},nodeBounds:this.calculateNodeBounds(t),nodeMap:{},offsetX:0,offsetY:0,scale:1}),this.data.canvasData.nodes.forEach(e=>{let n={box:this.getNodeBox(e),ref:e};if(this.data.nodeMap[e.id]=n,e.type==="file"){let s=e.file.split("/").pop()??"";if(n.fileName=s,!e.file.startsWith("http://")&&!e.file.startsWith("https://")){let a=this.options.attachments?.[s];a?e.file=a:this.options.noAttachmentRelocation||(e.file=this.data.canvasBaseDir+s)}}}),this.data.canvasData.edges.forEach(e=>{this.data.edgeMap[e.id]={box:this.getEdgeBox(e),ref:e}}),this.resetView()};processBaseDir=t=>t?t?.slice(-1)==="/"?t:`${t}/`:"./";getNodeBox=t=>({bottom:t.y+t.height,left:t.x,right:t.width+t.x,top:t.type==="file"||t.type==="group"?t.y-40:t.y});getEdgeBox=t=>{let e=this.data.nodeMap,n=e[t.fromNode].ref,s=e[t.toNode].ref,a=z(n,t.fromSide),o=z(s,t.toSide),r={bottom:Math.max(a.y,o.y),left:Math.min(a.x,o.x),right:Math.max(a.x,o.x),top:Math.min(a.y,o.y)},l=r.right-r.left,h=r.bottom-r.top,c=Math.min(l,h),p=Math.log2(Math.max(l,h)/(c===0?1:c))*10;return{bottom:r.bottom+p,left:r.left-p,right:r.right+p,top:r.top-p}};calculateNodeBounds(t){let e=1/0,n=1/0,s=-1/0,a=-1/0;t.nodes.forEach(l=>{e=Math.min(e,l.x),n=Math.min(n,l.y),s=Math.max(s,l.x+l.width),a=Math.max(a,l.y+l.height)});let o=s-e,r=a-n;return{centerX:e+o/2,centerY:n+r/2,height:r,maxX:s,maxY:a,minX:e,minY:n,width:o}}toggleFullscreen=async t=>{!document.fullscreenElement&&(!t||t==="enter")?(await this.data.container.requestFullscreen(),this.onToggleFullscreen("enter")):document.fullscreenElement&&(!t||t==="exit")&&(await document.exitFullscreen(),this.onToggleFullscreen("exit"))};resetView=()=>{let t=this.data.nodeBounds,e=this.data.container;if(!t||!e)return;let n=t.width+200,s=t.height+200,a=e.clientWidth,o=e.clientHeight,r=a/n,l=o/s,h=Math.round(Math.min(r,l)*1e3)/1e3,c=t.centerX,p=t.centerY,d={offsetX:a/2-c*h,offsetY:o/2-p*h,scale:h};this.data.offsetX=d.offsetX,this.data.offsetY=d.offsetY,this.data.scale=d.scale};middleViewer=()=>{let t=this.data.container;return{height:t.clientHeight,width:t.clientWidth,x:t.clientWidth/2,y:t.clientHeight/2}};dispose=()=>{this.data.container.remove()}};const m=(i,t,e)=>i>=t&&i<=e,Mt=i=>{if(typeof i=="number")return m(i,0,1);if(typeof i=="string"){const t=parseFloat(i);return!isNaN(t)&&(i.endsWith("%")?m(t/100,0,1):m(t,0,1))}return!1},N=i=>{const t=i.trim();return t?t.endsWith("%")?Number(t.slice(0,-1))/100*255:Number(t):NaN},St=i=>typeof i=="string"?Nt(i):typeof i=="object"&&i!==null&&Ot(i),Ot=i=>{const{red:t,green:e,blue:n,alpha:s}=i;return m(t,0,255)&&m(e,0,255)&&m(n,0,255)&&(s===void 0||m(s,0,1))},Nt=i=>{const t=i.match(/^rgba?\(\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*(?:[,/]\s*([01]?\.?\d+%?))?\s*\)$/);if(!t)return!1;const[,e,n,s,a]=t,o=N(e),r=N(n),l=N(s);return!!(m(o,0,255)&&m(r,0,255)&&m(l,0,255))&&(a===void 0||Mt(a))},Et=i=>{const t=i.trim().toLowerCase().match(/^(-?[\d.]+)(deg|rad|grad|turn)?$/);if(!t)return NaN;const e=parseFloat(t[1]),n=t[2];if(isNaN(e))return NaN;let s;switch(n){case"rad":s=180*e/Math.PI;break;case"grad":s=e/400*360;break;case"turn":s=360*e;break;default:s=e}return(s%360+360)%360},st=i=>{if(typeof i=="number"){if(!m(i,0,1))throw new Error("Alpha value must be between 0 and 1");return i}if(typeof i=="string"){const t=i.trim();let e;if(t.endsWith("%")?e=Number(t.slice(0,-1))/100:e=Number(t),isNaN(e))throw new Error(`Invalid alpha value: "${i}"`);if(!m(e,0,1))throw new Error("Alpha value must be between 0 and 1");return e}throw new Error("Invalid alpha value format")},at=i=>{if(typeof i!="string")throw new Error("Invalid HSL color format");const t=i.match(/^hsla?\(\s*(-?[\d.]+(?:deg|rad|grad|turn)?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i);if(!t)throw new Error("Invalid HSL color format");const[,e,n,s,a]=t,o=Et(e),r=parseFloat(n),l=parseFloat(s);if(isNaN(o)||isNaN(r)||isNaN(l)||!m(r,0,100)||!m(l,0,100))throw new Error("Invalid HSL color values");return a!==void 0?{hue:o,saturation:r,lightness:l,alpha:st(a)}:{hue:o,saturation:r,lightness:l,alpha:1}},ot=i=>{if(typeof i!="string")throw new Error("Invalid RGB color format");const t=i.match(/^rgba?\(\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i);if(!t)throw new Error("Invalid RGB color format");const[,e,n,s,a]=t,o=N(e),r=N(n),l=N(s);if(!m(o,0,255)||!m(r,0,255)||!m(l,0,255))throw new Error("RGB values must be between 0 and 255");return{red:o,green:r,blue:l,alpha:a!==void 0?st(a):1}},F=i=>{if(typeof i!="string")throw new Error("Invalid Hex color format.");const t=i.match(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(!t)throw new Error("Invalid Hex color format.");let e=t[1];e.length!==3&&e.length!==4||(e=e.split("").map(r=>r+r).join(""));const n=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16);let o=1;if(e.length===8){const r=parseInt(e.substring(6,8),16);o=Number((r/255).toFixed(2))}return{red:n,green:s,blue:a,alpha:o}},zt=i=>{if(typeof i=="string"){if(i.startsWith("#"))return"hex";if(i.startsWith("rgb"))return"rgbString";if(i.startsWith("hsl"))return"hslString"}if(typeof i=="object"&&i!==null){if("red"in i&&"green"in i&&"blue"in i)return"rgb";if("hue"in i&&"saturation"in i&&"lightness"in i)return"hsl"}throw new Error("Invalid color format")},kt=i=>{if(typeof i!="object"||i===null)throw new Error("Invalid color format. Expected an RGB or HSL object.");if("red"in i&&"green"in i&&"blue"in i){const{red:t,green:e,blue:n,alpha:s}=i;return s===void 0||s===1?`rgb(${t}, ${e}, ${n})`:`rgba(${t}, ${e}, ${n}, ${s})`}if("hue"in i&&"saturation"in i&&"lightness"in i){const{hue:t,saturation:e,lightness:n,alpha:s}=i;return s===void 0||s===1?`hsl(${t}, ${e}%, ${n}%)`:`hsla(${t}, ${e}%, ${n}%, ${s})`}throw new Error("Invalid color format. Expected an RGB or HSL object.")},E=i=>{if(!St(i))throw new Error("Invalid RGB color format");const t=typeof i=="string"?ot(i):i,{red:e,green:n,blue:s,alpha:a}=t,o=e/255,r=n/255,l=s/255,h=Math.max(o,r,l),c=Math.min(o,r,l),p=h-c;let d=0,u=0;const g=(h+c)/2;if(p!==0){switch(u=g>.5?p/(2-h-c):p/(h+c),h){case o:d=(r-l)/p+(r<l?6:0);break;case r:d=(l-o)/p+2;break;case l:d=(o-r)/p+4}d*=60}return{hue:Math.round(d),saturation:Math.round(100*u),lightness:Math.round(100*g),alpha:a}},Dt=i=>{const t=F(i);return E(t)},_t=i=>{const t=zt(i);if(t==="hsl")return i;if(t==="rgb")return E(i);if(t==="hex")return Dt(i);if(t==="hslString")return at(i);if(t==="rgbString")return E(i);throw new Error("Invalid color format")},P=i=>{const t=_t(i);return kt(t)};var _=class extends b{theme="light";onChangeTheme=v();definedColors={dark:{0:{hue:0,lightness:40,saturation:0},1:{hue:358,lightness:65,saturation:100},2:{hue:23,lightness:63,saturation:86},3:{hue:39,lightness:70,saturation:91},4:{hue:153,lightness:45,saturation:80},5:{hue:217,lightness:62,saturation:100},6:{hue:259,lightness:75,saturation:100}},light:{0:{hue:0,lightness:72,saturation:0},1:{hue:358,lightness:55,saturation:81},2:{hue:19,lightness:58,saturation:87},3:{hue:41,lightness:52,saturation:79},4:{hue:150,lightness:37,saturation:100},5:{hue:221,lightness:59,saturation:100},6:{hue:257,lightness:62,saturation:81}}};namedColors={dark:{background:"rgb(30, 30, 30)","background-secondary":"rgb(37, 37, 40)",border:"hsla(0, 0%, 30%, 0.7)",dots:"hsla(0, 0%, 40%, 0.3)",shadow:"0px 0px 8px rgb(0, 0, 0, 0.2)",text:"rgb(242, 242, 242)"},light:{background:"rgb(250, 250, 250)","background-secondary":"rgb(255, 255, 255)",border:"hsla(0, 0%, 82%, 0.7)",dots:"hsla(0, 0%, 72%, 0.4)",shadow:"0px 0px 8px rgb(0, 0, 0, 0.1)",text:"rgb(30, 30, 30)"}};colorCache={dark:{},light:{}};constructor(...t){super(...t);let e=this.options.colors;e&&["light","dark"].forEach(n=>{if(!(n in e))return;let s=e[n];s&&Object.entries(s).forEach(([a,o])=>{if(!o)return;let r=this.namedColors[n],l=this.definedColors[n];if(a in r)r[a]=o;else if(a in l){let h=this.parseColor(o);if(!h){console.warn(`[JSON Canvas Viewer] Color ${o} unsupported.`);return}l[a]=h}})}),this.changeTheme(this.options.theme??"light"),this.augment({changeTheme:this.changeTheme,onChangeTheme:this.onChangeTheme})}hslProcessor=t=>{let{hue:e,saturation:n,lightness:s}=t,a=this.theme==="dark"?{active:t,background:{...t,alpha:.1},border:{...t,alpha:.7},card:{hue:e,lightness:s/3,saturation:n/3},text:t.lightness>=70?"rgb(30, 30, 30)":"rgb(242, 242, 242)"}:{active:t,background:{...t,alpha:.1},border:{...t,alpha:.7},card:e===0?{hue:e,lightness:100,saturation:n}:{hue:e,lightness:90,saturation:n*.4},text:t.lightness>=70?"rgb(30, 30, 30)":"rgb(242, 242, 242)"};return{active:P(a.active),background:P(a.background),border:P(a.border),card:P(a.card),text:a.text}};parseColor=t=>{if(t.startsWith("rgb"))return E(ot(t));if(t.startsWith("#"))return E(F(t));if(t.startsWith("hsl"))return at(t)};getColor=(t="0")=>{let e=this.theme,n;if(this.colorCache[e][t])return this.colorCache[e][t];n=t in this.definedColors[e]?this.hslProcessor(this.definedColors[e][t]):this.hslProcessor(E(F(t)));let s={...n,"border-width":t==="0"?"1px":"2px"};return this.colorCache[e][t]=s,s};getNamedColor=t=>this.namedColors[this.theme][t];changeTheme=t=>{this.theme=t??(this.theme==="dark"?"light":"dark");let e=this.container.get(x).data.container;Object.entries(this.namedColors[this.theme]).forEach(([n,s])=>{e.style.setProperty(`--${n}`,s)}),this.onChangeTheme(this.theme)}},B=class extends b{animationId;resizeAnimationId;DM;SM;resizeObserver;perFrame={lastOffsets:{x:0,y:0},lastScale:1};lastResizeCenter={};onResize=v();onRefresh=v();constructor(...t){super(...t),this.DM=this.container.get(x),this.SM=this.container.get(_),this.resizeObserver=new ResizeObserver(this.onResizeCallback),this.SM.onChangeTheme.subscribe(this.refresh),this.augment({onRefresh:this.onRefresh,onResize:this.onResize,refresh:this.refresh}),this.onStart(this.start),this.onRestart(this.refresh),this.onDispose(this.dispose)}start=()=>{this.resizeObserver.observe(this.DM.data.container),this.animationId=requestAnimationFrame(this.draw)};draw=()=>{(this.perFrame.lastScale!==this.DM.data.scale||this.perFrame.lastOffsets.x!==this.DM.data.offsetX||this.perFrame.lastOffsets.y!==this.DM.data.offsetY)&&this.refresh(),this.animationId=requestAnimationFrame(this.draw)};refresh=()=>{this.perFrame={lastOffsets:{x:this.DM.data.offsetX,y:this.DM.data.offsetY},lastScale:this.DM.data.scale},this.onRefresh()};onResizeCallback=()=>{this.resizeAnimationId=requestAnimationFrame(()=>{let t=this.DM.middleViewer();this.lastResizeCenter.x&&this.lastResizeCenter.y&&(this.DM.data.offsetX=this.DM.data.offsetX+t.x-this.lastResizeCenter.x,this.DM.data.offsetY=this.DM.data.offsetY+t.y-this.lastResizeCenter.y),this.lastResizeCenter.x=t.x,this.lastResizeCenter.y=t.y,this.onResize(t.width,t.height),this.refresh()})};dispose=()=>{this.animationId&&cancelAnimationFrame(this.animationId),this.resizeAnimationId&&cancelAnimationFrame(this.resizeAnimationId),this.resizeObserver.disconnect()}},k=class{dispatch;constructor(t,e,n,s,a,o,r,l){this.augment=t,this.getNthPointer=n,this.toTargetCoords=s,this.window=a,this.pointers=o,this.element=r,this.options=l,this.dispatch=e}onPointerDown;onPointerUp;onPointerMove;onWheel;onStart;onStop;dispose;modifiers};function O(i,t=0){return i[i.length-1-t]}function Bt(i,t){for(let[e,n]of Object.entries(i))e in t||(t[e]=n)}var It=class extends k{#t=-1/0;#e=0;onPointerDown=(t,e,n)=>{if(n.size===2){let s=this.getNthPointer(0);s.interrupted=!0,e.interrupted=!0}};onPointerUp=(t,e)=>{if(e.interrupted)return;let n=this.options.clickMoveThreshold??5;if(Math.abs(e.records[0].x-t.clientX)>=n||Math.abs(e.records[0].y-t.clientY)>=n)return;let s=O(e.records).timestamp,a=this.options.clickStreakWindow??400;s-this.#t<=a?this.#e++:this.#e=1,this.#t=s;let o=this.toTargetCoords({x:t.clientX,y:t.clientY});this.dispatch("trueClick",{...o,target:e.target,streak:this.#e})}},Pt=class extends k{onPointerMove=(i,t,e)=>{let n=O(t.records,1);if(e.size===1){let s=i.clientX-n.x,a=i.clientY-n.y;this.dispatch("drag",{deltaX:s,deltaY:a,x:i.clientX,y:i.clientY})}}},Lt=class extends k{#t={lastDistance:0,lastMidpoint:{x:0,y:0}};#e(){let t=O(this.getNthPointer(0).records),e=O(this.getNthPointer(1).records),n=t.x-e.x,s=t.y-e.y;return Math.sqrt(n*n+s*s)}#i(){let t=O(this.getNthPointer(0).records),e=O(this.getNthPointer(1).records);return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}onPointerDown=(t,e,n)=>{n.size===2&&(this.#t.lastDistance=this.#e(),this.#t.lastMidpoint=this.toTargetCoords(this.#i()))};onPointerMove=(t,e,n)=>{if(n.size!==2)return;let s=this.#e(),a=this.#i(),o=s/this.#t.lastDistance;this.#t.lastDistance=s;let r=this.toTargetCoords(a),l=r.x-this.#t.lastMidpoint.x,h=r.y-this.#t.lastMidpoint.y;this.#t.lastMidpoint=r,this.#n({deltaX:l,deltaY:h}),this.#s(o,r)};#s(t,e){t!==1&&this.dispatch("zoom",{x:e.x,y:e.y,factor:t})}#n(t){t.deltaX===0&&t.deltaY===0||this.dispatch("pan",t)}},$t=class extends k{onWheel=t=>t.preventDefault();#t=t=>t.preventDefault();onStart=()=>{this.element.style.touchAction="none",this.element.addEventListener("gesturestart",this.#t,{passive:!1}),this.element.addEventListener("gesturechange",this.#t,{passive:!1})};onStop=()=>{this.element.style.touchAction="",this.element.removeEventListener("gesturestart",this.#t),this.element.removeEventListener("gesturechange",this.#t)};dispose=this.onStop},Tt=class extends k{constructor(...i){super(...i),Bt({proControlSchema:!1,zoomFactor:.1,lockControlSchema:!1},this.options)}onWheel=i=>{let t=this.options;if(!t.proControlSchema&&!t.lockControlSchema&&(i.ctrlKey||i.shiftKey||Math.abs(i.deltaX)>Math.abs(i.deltaY))&&(t.proControlSchema=!0),t.proControlSchema)if(i.ctrlKey){let e=1-t.zoomFactor*i.deltaY,n=this.toTargetCoords({x:i.clientX,y:i.clientY});this.#t(e,n)}else i.shiftKey&&Math.abs(i.deltaX)<=Math.abs(i.deltaY)?this.#e({deltaX:-i.deltaY,deltaY:-i.deltaX}):this.#e({deltaX:-i.deltaX,deltaY:-i.deltaY});else{let e=1-t.zoomFactor/20*i.deltaY,n=this.toTargetCoords({x:i.clientX,y:i.clientY});this.#t(e,n)}};#t(i,t){this.dispatch("zoom",{x:t.x,y:t.y,factor:i})}#e(i){this.dispatch("pan",i)}},Rt=class extends k{#t={};#e=null;constructor(...i){super(...i);let t=this.options.lubricator;t&&Object.entries(t).forEach(([e,n])=>{let s={sample:{},fields:{}};Object.keys(n.fields).forEach(a=>{s.fields[a]={catch:1,release:1}}),this.#t[e]=s,this.modifiers[e]=this.#i(s,n)})}onStart=()=>{this.#e=requestAnimationFrame(this.#n)};onStop=()=>{this.#e&&cancelAnimationFrame(this.#e),this.#e=null,Object.values(this.#t).forEach(i=>{Object.values(i.fields).forEach(t=>{t.release=1,t.catch=1})})};#i=(i,t)=>e=>e.lubricated?!0:(i.sample=e,this.#s(i.fields,t.fields,e),!1);#s=(i,t,e)=>{Object.entries(i).forEach(([n,s])=>{if(typeof e[n]!="number")return;let a=t[n].countType;a==="sum"?s.catch+=e[n]:a==="product"&&(s.catch*=e[n])})};#n=()=>{let i=this.#t,t=this.options.lubricator;t&&(Object.entries(i).forEach(([e,n])=>{let s=n.sample;s.lubricated=!0;let a=!1;for(let[o,r]of Object.entries(n.fields)){if(r.catch===1)continue;let l=t[e].fields[o].countType,h,c;if(l==="sum"?(c=r.catch-r.release,h=Math.abs(c)):(c=r.catch/r.release,h=this.#a(c)-1),h<=t[e].fields[o].diminishBoundary){a||=!0,s[o]=c,r.release=1,r.catch=1;continue}let p;l==="sum"?(p=c*t[e].decayFactor,r.release+=p):(p=c**+t[e].decayFactor,r.release*=p),s[o]=p,a=!0}a&&this.dispatch(e,s)}),this.#e=requestAnimationFrame(this.#n))};#a=i=>i>1?i:1/i;modifiers={}};const rt={decayFactor:.25,fields:{deltaX:{countType:"sum",diminishBoundary:.5},deltaY:{countType:"sum",diminishBoundary:.5}}},Yt=rt,At={decayFactor:.25,fields:{factor:{countType:"product",diminishBoundary:.01}}};var Ft=class{#t;#e=new Map;#i={};#s={};#n;#a={};options;get#r(){if(!this.#n)throw Error("[Pointeract] Window is not defined.");return this.#n}constructor(t,e){let n=e||[];this.#n=t.element.ownerDocument.defaultView,this.#t=t.element,t.coordinateOutput||="relative",this.options=t,n.forEach(s=>{let a=new s(this.#m,this.dispatch,this.#p,this.#u,this.#r,this.#e,this.#t,this.options);Object.assign(a,{options:t}),this.#i[s.name]=a})}on=(t,e)=>(this.#a[t]||(this.#a[t]=new Set),this.#a[t]?.add(e),this);off=(t,e)=>(this.#a[t]?.delete(e),this);#p=t=>{let e=Error("[Pointeract] Invalid pointer index.");if(t<0||t>=this.#e.size)throw e;let n=0;for(let s of this.#e.values()){if(n===t)return s;n++}throw e};#u=t=>{if(this.options.coordinateOutput==="absolute")return t;let e=this.#t.getBoundingClientRect();return t.x-=e.left,t.y-=e.top,this.options.coordinateOutput==="relative"||(t.x/=e.width,t.y/=e.height),t};dispatch=(...t)=>{let e=t[0],n=t[1],s=!0;for(let o of Object.values(this.#i))if(!(!o.modifiers||!(e in o.modifiers))&&(s=n===void 0?o.modifiers[e]():o.modifiers[e](n),s===!1))return;let a;a=s===!0?n:s,this.#a[e]?.forEach(o=>o(a))};#m=t=>{Object.defineProperties(this,Object.getOwnPropertyDescriptors(t))};#o=(t,...e)=>{Object.values(this.#i).forEach(n=>{let s=n[t];s&&s(...e)})};#l=t=>{t.isPrimary&&this.#e.clear();let e={records:[{x:t.clientX,y:t.clientY,timestamp:Date.now()}],target:t.target,index:this.#e.size};this.#e.set(t.pointerId,e),this.#o("onPointerDown",t,e,this.#e)};#h=t=>{let e=this.#e.get(t.pointerId);e&&(e.records.push({x:t.clientX,y:t.clientY,timestamp:Date.now()}),this.#o("onPointerMove",t,e,this.#e))};#c=t=>{let e=this.#e.get(t.pointerId);e&&(this.#e.delete(t.pointerId),this.#o("onPointerUp",t,e,this.#e))};#d=t=>this.#o("onWheel",t);stop=t=>{let e=()=>{this.#t.removeEventListener("pointerdown",this.#l),this.#r.removeEventListener("pointermove",this.#h),this.#r.removeEventListener("pointerup",this.#c),this.#t.removeEventListener("wheel",this.#d),this.#o("onStop")},n=s=>{if(!(s.name in this.#i))return;let a=this.#i[s.name];a.onStop&&a.onStop(),this.#s[s.name]=a,delete this.#i[s.name]};return t?t.forEach(s=>{n(s)}):e(),this};start=t=>{let e=()=>{this.#t.addEventListener("pointerdown",this.#l),this.#r.addEventListener("pointermove",this.#h),this.#r.addEventListener("pointerup",this.#c),this.#t.addEventListener("wheel",this.#d,{passive:!1}),this.#o("onStart")},n=s=>{if(!(s.name in this.#s))return;let a=this.#s[s.name];a.onStart&&a.onStart(),this.#i[s.name]=a,delete this.#s[s.name]};return t?t.forEach(s=>{n(s)}):e(),this};dispose=()=>{this.stop(),this.#n=null,this.#o("dispose"),this.#a={}}},j=class extends b{pointeract;DM;onClick=v();constructor(...i){super(...i),this.DM=this.container.get(x);let t=Object.assign(this.options.pointeract??{},{coordinateOutput:"relative",element:this.DM.data.container,lubricator:{drag:Yt,pan:rt,zoom:At}});this.pointeract=new Ft(t,[It,Pt,Tt,$t,Lt,Rt]);let e=this.container.get(lt);e.onInteractionStart.subscribe(this.stopInteract),e.onInteractionEnd.subscribe(this.startInteract),this.augment({pan:this.pan,panToCoords:this.panToCoords,zoom:this.zoom,zoomToScale:this.zoomToScale}),this.onStart(this.start),this.onDispose(this.dispose)}start=()=>{this.pointeract.on("pan",this.onPan).on("drag",this.onPan).on("zoom",this.onZoom).on("trueClick",this.onTrueClick).start()};startInteract=()=>{this.pointeract.start()};stopInteract=()=>{this.pointeract.stop()};onPan=i=>{this.truePan({x:i.deltaX,y:i.deltaY})};onZoom=i=>{this.trueZoom(i.factor,i)};trueZoom=(i,t)=>{let e=Math.max(Math.min(this.DM.data.scale*i,20),.05);if(e===this.DM.data.scale)return;let n=e/this.DM.data.scale,s=this.C2C(t);this.DM.data.offsetX=t.x-s.x*n,this.DM.data.offsetY=t.y-s.y*n,this.DM.data.scale=e};truePan=({x:i,y:t})=>{this.DM.data.offsetX+=i,this.DM.data.offsetY+=t};zoom=(i,t)=>{this.pointeract.dispatch("zoom",{factor:i,...t})};pan=({x:i,y:t})=>{this.pointeract.dispatch("pan",{deltaX:i,deltaY:t})};zoomToScale=(i,t)=>{let e=i/this.DM.data.scale;this.pointeract.dispatch("zoom",{factor:e,...t})};panToCoords=({x:i,y:t})=>{this.pointeract.dispatch("pan",{deltaX:i-this.DM.data.offsetX,deltaY:t-this.DM.data.offsetY})};C2C=({x:i,y:t})=>({x:i-this.DM.data.offsetX,y:t-this.DM.data.offsetY});onTrueClick=i=>{let t=i.target?i.target:void 0;if(this.isUIControl(t))return;let e=this.findNodeId(t);this.onClick(e)};isUIControl=i=>i?i.closest(".controls")||i.closest("button")||i.closest("input"):!1;findNodeId=i=>{if(!i)return;let t=i;for(;(!t.id||t.id==="")&&t.parentElement;)t=t.parentElement;if(!(t.id==="overlays"||!t.id||t.id===""))return t.id};dispose=()=>this.pointeract.dispose()};const Xt={audio:/\.(mp3|wav|ogg|opus|aac|m4a|flac)$/i,image:/\.(png|jpg|jpeg|gif|svg|webp|avif|bmp|ico|heic|heif)$/i,markdown:/\.(md|mdx|markdown|txt)$/i,video:/\.(mp4|webm|ogv|mov|m3u8|mpd)$/i},jt=["markdown","image","audio","video"];var lt=class extends b{_overlaysLayer=document.createElement("div");overlays={};selectedId;aborted=!1;eventListeners={};DM;SM;parse;componentDict={audio:({container:t,content:e})=>{let n=document.createElement("audio");n.className="JCV-audio",n.src=e,n.controls=!0,t.appendChild(n)},image:({container:t,content:e})=>{let n=document.createElement("img");n.className="JCV-img",n.src=e,n.loading="lazy",t.appendChild(n)},link:({container:t,content:e})=>{let n=document.createElement("iframe");n.src=e,n.sandbox="allow-scripts allow-same-origin",n.className="JCV-link-iframe",n.loading="lazy",t.appendChild(n)},markdown:async({container:t,content:e})=>{t.classList.add("JCV-markdown-content");let n=document.createElement("div");n.textContent="Loading...",n.classList.add("JCV-parsed-content-wrapper"),t.appendChild(n);let s;try{let a=await(await fetch(e)).text(),o=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(a);s=await this.parse(o?o[2]:a)}catch(a){console.error("[JSON Canvas Viewer] Failed to load markdown:",a),s="Failed to load content."}n.innerHTML=s},text:({container:t,content:e})=>{t.classList.add("JCV-markdown-content");let n=document.createElement("div");n.innerHTML=e,n.classList.add("JCV-parsed-content-wrapper"),t.appendChild(n)},video:({container:t,content:e})=>{let n=document.createElement("video");n.className="JCV-video",n.src=e,n.controls=!0,t.appendChild(n)}};get overlaysLayer(){if(!this._overlaysLayer)throw f;return this._overlaysLayer}onInteractionStart=v();onInteractionEnd=v();onNodeActive=v();onNodeLosesActive=v();constructor(...t){super(...t),this.parse=this.options.parser??(n=>n),this.DM=this.container.get(x),this.SM=this.container.get(_),this.container.get(B).onRefresh.subscribe(this.updateOverlays),this.SM.onChangeTheme.subscribe(this.themeChanged),this._overlaysLayer=document.createElement("div"),this._overlaysLayer.className="JCV-overlays",this._overlaysLayer.id="overlays",this.DM.data.container.appendChild(this.overlaysLayer);let e=this.options.nodeComponents;e&&Object.assign(this.componentDict,e),this.augment({onNodeActive:this.onNodeActive,onNodeLosesActive:this.onNodeLosesActive}),this.onStart(this.start),this.onRestart(this.restart),this.onDispose(this.dispose)}start=()=>{this.container.get(j).onClick.subscribe(this.select),this.renderOverlays()};restart=()=>{this.clearOverlays(),this.renderOverlays()};renderOverlays=()=>{let t=async e=>{switch(e.type){case"text":this.createOverlay(e,await this.parse(e.text),"text");break;case"file":for(let n of jt)if(e.file.match(Xt[n])){this.createOverlay(e,e.file,n);break}break;case"link":this.createOverlay(e,e.url,"link");break}};Object.values(this.DM.data.nodeMap).forEach(async e=>{await t(e.ref)})};themeChanged=()=>{Object.values(this.overlays).forEach(t=>{let e=this.DM.data.nodeMap[t.id].ref,n=this.SM.getColor(e.color);this.setOverlayColor(t,n)})};select=t=>{let e=this.selectedId,n=e?this.overlays[e]:void 0,s=t?this.overlays[t]:void 0;if(n&&e){n.classList.remove("JCV-active");let a=this.DM.data.nodeMap[e];this.onNodeLosesActive(a.ref),a.onLoseActive?.()}if(s&&t){s.classList.add("JCV-active"),this.onInteractionStart();let a=this.DM.data.nodeMap[t];this.onNodeActive(a.ref),a.onActive?.()}else this.onInteractionEnd();this.selectedId=t};updateOverlays=()=>{let t=this.DM.data;this.overlaysLayer.style.transform=`translate(${t.offsetX}px, ${t.offsetY}px) scale(${t.scale})`};createOverlay=(...t)=>{if(this.aborted)return;let e=t[0],n=this.overlays[e.id];if(!n){if(n=this.constructOverlay(...t),this.aborted)return;this.overlaysLayer.appendChild(n),this.overlays[e.id]=n,n.style.left=`${e.x}px`,n.style.top=`${e.y}px`,n.style.width=`${e.width}px`,n.style.height=`${e.height}px`}};constructOverlay=(...t)=>{let e=t[0],n=document.createElement("div");n.classList.add("JCV-overlay-container"),n.id=e.id,this.setOverlayColor(n,this.SM.getColor(e.color));let s=document.createElement("div");s.classList.add("JCV-content"),n.appendChild(s);let a=document.createElement("div");a.className="JCV-click-layer",n.appendChild(a);let o=document.createElement("div");o.className="JCV-overlay-border",n.appendChild(o);let r=this.DM.data.nodeMap[e.id];r.onActive=v(),r.onLoseActive=v(),r.onBeforeUnmount=v(),this.componentDict[t[2]]({container:s,content:t[1],node:t[0],onActive:r.onActive,onBeforeUnmount:r.onBeforeUnmount,onLoseActive:r.onLoseActive});let l=()=>{e.id===this.selectedId&&this.onInteractionStart()},h=()=>{e.id===this.selectedId&&this.onInteractionEnd()};return n.addEventListener("pointerenter",l),n.addEventListener("pointerleave",h),n.addEventListener("touchstart",l),n.addEventListener("touchend",h),this.eventListeners[e.id]=[l,h],n};setOverlayColor=(t,e)=>{Object.entries(e).forEach(([n,s])=>{t.style.setProperty(`--overlay-${n}`,s)})};clearOverlays=()=>{Object.entries(this.overlays).forEach(([t,e])=>{if(this.DM.data.nodeMap[t].onBeforeUnmount?.(),this.eventListeners[t]){let n=this.eventListeners[t][0],s=this.eventListeners[t][1];if(!n||!s)throw f;e.removeEventListener("pointerenter",n),e.removeEventListener("pointerleave",s),e.removeEventListener("touchstart",n),e.removeEventListener("touchend",s),this.eventListeners[t][0]=void 0,this.eventListeners[t][1]=void 0}e.remove(),delete this.overlays[t]})};dispose=()=>{this.aborted=!0,this.clearOverlays(),this.overlaysLayer.remove(),this._overlaysLayer=void 0}},Ht=class extends b{_canvas;ctx;DM;SM;zoomInOptimize={lastCallTime:0,lastDrawnScale:0,lastDrawnViewport:{bottom:0,left:0,right:0,top:0}};get canvas(){if(!this._canvas)throw f;return this._canvas}constructor(...t){super(...t);let e=this.container.get(B);this.SM=this.container.get(_),e.onRefresh.subscribe(this.redraw),e.onResize.subscribe(this.optimizeDPR),this.DM=this.container.get(x),this._canvas=document.createElement("canvas"),this._canvas.className="JCV-main-canvas",this.ctx=this._canvas.getContext("2d"),this.DM.data.container.appendChild(this._canvas),this.onDispose(this.dispose)}optimizeDPR=()=>{let t=this.DM.data.container;nt(this.canvas,t.offsetWidth,t.offsetHeight)};redraw=()=>{let t=this.DM.data.offsetX,e=this.DM.data.offsetY,n=this.DM.data.scale,s=this.getCurrentViewport(t,e,n);if(!this.options.zoomInOptimization){this.trueRedraw(t,e,n,s);return}this.zoomInOptimize.timeout&&(clearTimeout(this.zoomInOptimize.timeout),this.zoomInOptimize.timeout=void 0);let a=Date.now();if(this.isInside(s,this.zoomInOptimize.lastDrawnViewport)&&n!==this.zoomInOptimize.lastDrawnScale&&a-this.zoomInOptimize.lastCallTime<500){this.zoomInOptimize.timeout=window.setTimeout(()=>{this.trueRedraw(t,e,n,s),this.zoomInOptimize.lastCallTime=a,this.zoomInOptimize.timeout=void 0},60),this.fakeRedraw(s,n);return}this.zoomInOptimize.lastCallTime=a,this.trueRedraw(t,e,n,s)};trueRedraw(t,e,n,s){this.zoomInOptimize.lastDrawnViewport=s,this.zoomInOptimize.lastDrawnScale=n,this.canvas.style.transform="",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.save(),this.drawGridDots(n,t,e),this.ctx.translate(t,e),this.ctx.scale(n,n),Object.values(this.DM.data.nodeMap).forEach(a=>{if(this.isOutside(a.box,s))return;let o=a.ref;o.type==="file"?this.drawFile(a):o.type==="group"&&this.drawGroup(o,n)}),Object.values(this.DM.data.edgeMap).forEach(a=>{this.isOutside(a.box,s)||this.drawEdge(a)}),this.ctx.restore()}fakeRedraw(t,e){let n=e/this.zoomInOptimize.lastDrawnScale,s=(this.zoomInOptimize.lastDrawnViewport.left-t.left)*e,a=(this.zoomInOptimize.lastDrawnViewport.top-t.top)*e;this.canvas.style.transform=`translate(${s}px, ${a}px) scale(${n})`}isInside=(t,e)=>t.left>e.left&&t.top>e.top&&t.right<e.right&&t.bottom<e.bottom;isOutside=(t,e)=>t.right<e.left||t.bottom<e.top||t.left>e.right||t.top>e.bottom;getCurrentViewport=(t,e,n)=>{let s=-t/n,a=-e/n,o=this.DM.data.container,r=s+o.clientWidth/n;return{bottom:a+o.clientHeight/n,left:s,right:r,top:a}};drawLabelBar=(t,e,n,s,a,o)=>{let r=30*o,l=6*o,h=8*o,c=16*o,p=6*o;this.ctx.save(),this.ctx.translate(t,e),this.ctx.scale(1/o,1/o),this.ctx.font=`${c}px 'Inter', sans-serif`;let d=this.ctx.measureText(n).width+2*p;this.ctx.translate(0,-r-h),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.moveTo(l,0),this.ctx.lineTo(d-l,0),this.ctx.quadraticCurveTo(d,0,d,l),this.ctx.lineTo(d,r-l),this.ctx.quadraticCurveTo(d,r,d-l,r),this.ctx.lineTo(l,r),this.ctx.quadraticCurveTo(0,r,0,r-l),this.ctx.lineTo(0,l),this.ctx.quadraticCurveTo(0,0,l,0),this.ctx.closePath(),this.ctx.fill(),this.ctx.fillStyle=a,this.ctx.fillText(n,p,r*.65),this.ctx.restore()};drawNodeBackground=t=>{let e=this.SM.getColor(t.color);this.ctx.globalAlpha=1,this.ctx.fillStyle=e.background,T(this.ctx,t.x+1,t.y+1,t.width-2,t.height-2,12),this.ctx.fill(),this.ctx.strokeStyle=e.border,this.ctx.lineWidth=2,T(this.ctx,t.x,t.y,t.width,t.height,12),this.ctx.stroke()};drawGroup=(t,e)=>{if(this.drawNodeBackground(t),t.label){let n=this.SM.getColor(t.color);this.drawLabelBar(t.x,t.y,t.label,n.active,n.text,e)}};drawFile=t=>{this.ctx.fillStyle=this.SM.getColor().text;let e=t.ref;this.ctx.font="16px sans-serif",this.ctx.fillText(t.fileName??"",e.x+5,e.y-10)};drawEdge=t=>{let e=t.ref,n=this.DM.data.nodeMap[e.fromNode].ref,s=this.DM.data.nodeMap[e.toNode].ref,{x:a,y:o}=z(n,e.fromSide),{x:r,y:l}=z(s,e.toSide),h=this.SM.getColor(e.color),c,p,d,u;t.controlPoints?[c,p,d,u]=t.controlPoints:([c,p,d,u]=this.getControlPoints(a,o,r,l,e.fromSide,e.toSide),t.controlPoints=[c,p,d,u]),this.drawCurvedPath(a,o,r,l,c,p,d,u,h.active),this.drawArrowhead(r,l,d,u,h.active),e.label&&this.drawEdgeLabel(a,o,r,l,c,p,d,u,e.label,h.active,h.text)};drawEdgeLabel=(t,e,n,s,a,o,r,l,h,c,p)=>{let d=.5,u=(1-d)**3*t+3*(1-d)**2*d*a+3*(1-d)*d*d*r+d**3*n,g=(1-d)**3*e+3*(1-d)**2*d*o+3*(1-d)*d*d*l+d**3*s;this.ctx.font="18px sans-serif";let w=h.split(`
`),y=0;for(let M of w){let I=this.ctx.measureText(M).width;I>y&&(y=I)}let J=y+16,W=w.length*17+6;this.ctx.fillStyle=c,this.ctx.beginPath(),T(this.ctx,u-J/2,g-W/2-2,J,W,4),this.ctx.fill(),this.ctx.fillStyle=p,this.ctx.textAlign="center",this.ctx.textBaseline="middle";for(let M=0;M<w.length;M++){let I=(M-(w.length-1)/2)*17;this.ctx.fillText(w[M],u,g-2+I)}this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic"};getControlPoints=(t,e,n,s,a,o)=>{let r=n-t,l=s-e,h=((g,w,y)=>Math.max(w,Math.min(y,g)))((Math.min(Math.abs(r),Math.abs(l))+.3*Math.max(Math.abs(r),Math.abs(l)))*.5,60,300),c=t,p=e,d=n,u=s;switch(a){case"top":p=e-h;break;case"bottom":p=e+h;break;case"left":c=t-h;break;case"right":c=t+h;break}switch(o){case"top":u=s-h;break;case"bottom":u=s+h;break;case"left":d=n-h;break;case"right":d=n+h;break}return[c,p,d,u]};drawGridDots=(t,e,n)=>{let s=10*2**-Math.floor(Math.log2(t))*t,a=this.canvas.width,o=this.canvas.height,r=e%s,l=n%s;this.ctx.fillStyle=this.SM.getNamedColor("dots");for(let h=r;h<=a;h+=s)for(let c=l;c<=o;c+=s)this.ctx.beginPath(),this.ctx.arc(h,c,1,0,2*Math.PI),this.ctx.fill()};drawCurvedPath=(t,e,n,s,a,o,r,l,h)=>{this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.bezierCurveTo(a,o,r,l,n,s),this.ctx.strokeStyle=h,this.ctx.lineWidth=2,this.ctx.stroke()};drawArrowhead=(t,e,n,s,a)=>{let o=t-n,r=e-s,l=Math.sqrt(o*o+r*r);if(l===0)return;let h=o/l,c=r/l,p=t-h*12-c*4,d=e-c*12+h*4,u=t-h*12+c*4,g=e-c*12-h*4;this.ctx.beginPath(),this.ctx.fillStyle=a,this.ctx.moveTo(t,e),this.ctx.lineTo(p,d),this.ctx.lineTo(u,g),this.ctx.closePath(),this.ctx.fill()};dispose=()=>{this.zoomInOptimize.timeout&&(clearTimeout(this.zoomInOptimize.timeout),this.zoomInOptimize.timeout=void 0),this.canvas.remove(),this._canvas=void 0}};function H(i){return typeof i=="function"}function Wt(i){const t=[];let e=i;for(;Object.getPrototypeOf(e).name;){const n=Object.getPrototypeOf(e);t.push(n),e=n}return t}function L(i){if(i==null)throw Error("Expected value to be not null or undefined");return i}function qt(i,t=2){const e=[];return i.some((n,s)=>{if(s+t>i.length)return!0;e.push(i.slice(s,s+t))}),e}async function Ut(i,t,e){for(;;)try{return await t()}catch(n){if(!(n instanceof i))throw n;await e(n)}}function U(i,t){if(i.length>1)throw t();const e=i.at(0);if(e===void 0)throw t();return e}function Gt(i){throw new Error("invalid state")}async function Zt(i){return await new Promise(t=>t(i()))}function D(i){return H(i)}function X(i){return"provide"in i&&"useClass"in i}function Kt(i){return"provide"in i&&"useValue"in i}function ht(i){return"provide"in i&&"useFactory"in i}function G(i){return ht(i)&&i.async===!0}function V(i){return"provide"in i&&"useExisting"in i}function $(i){return"provide"in i&&"multi"in i&&i.multi===!0}class ct{description;options;constructor(t,e){this.description=t,this.options=e}toString(){return`InjectionToken "${String(this.description)}"`}}function Z(i){return H(i)}function Qt(i){return i instanceof ct}function C(i){return H(i)?i.name:typeof i=="symbol"?i.description??String(i):i instanceof ct?i.toString():i}function R(i){return D(i)?i:i.provide}const dt=Symbol("injectable");function te(i){return i.hasOwnProperty(dt)}function ee(i){return i[dt]}class ie{container;underConstruction=[];constructor(t){this.container=t}construct(t,e){if(G(t))throw new K(e);try{if(this.underConstruction.includes(t)){const n=[...this.underConstruction,t].map(R).map(C);throw new Q(n)}return this.underConstruction.push(t),this.doConstruct(t)}finally{this.underConstruction.pop()}}async constructAsync(t){try{if(this.underConstruction.includes(t)){const e=[...this.underConstruction,t].map(R).map(C);throw new Q(e)}if(this.underConstruction.push(t),G(t))return[await t.useFactory(this.container)];if(X(t)||D(t)){const e=D(t)?()=>[new t]:()=>[new t.useClass];return Ut(K,async()=>e(),async n=>{await this.container.getAsync(n.token,{multi:!0,optional:!0})})}return V(t)?await this.container.getAsync(t.useExisting,{multi:!0}):this.doConstruct(t)}finally{this.underConstruction.pop()}}doConstruct(t){return D(t)?[new t]:X(t)?[new t.useClass]:Kt(t)?[t.useValue]:ht(t)?[t.useFactory(this.container)]:V(t)?this.container.get(t.useExisting,{multi:!0}):Gt()}}class K extends Error{token;constructor(t){super(`Some providers for token ${C(t)} are async, please use injectAsync() or container.getAsync() instead`),this.token=t}}class Q extends Error{constructor(t){super(`Detected circular dependency: ${t.join(" -> ")}. Please change your dependency graph or use lazy injection instead.`)}}class ne{run(){throw new et}runAsync(){throw new et}}class se{container;constructor(t){this.container=t}run(t){const e=S;try{return S=this,t(this.container)}finally{S=e}}async runAsync(t){const e=S;try{return S=this,await t(this.container)}finally{S=e}}}let S=new ne;function tt(i){return new se(i)}class et extends Error{constructor(){super("You can only invoke inject() or injectAsync() within an injection context")}}class Y{providers=new Map;singletons=new Map;parent;factory;constructor(t){this.parent=t,this.factory=new ie(this),this.bind({provide:Y,useValue:this})}bindAll(...t){return t.forEach(e=>this.bind(e)),this}bind(t){const e=R(t);if(V(t)&&t.provide===t.useExisting)throw Error(`The provider for token ${C(e)} with "useExisting" cannot refer to itself.`);if(!V(t)&&this.singletons.has(e))throw Error(`Cannot bind a new provider for ${C(e)}, since the existing provider was already constructed.`);if(V(t)&&$(t)&&this.existingProviderAlreadyProvided(e,t.useExisting))return this;const n=this.providers.get(e)??[],s=$(t);if(s&&n.some(a=>!$(a)))throw Error(`Cannot bind ${C(e)} as multi-provider, since there is already a provider which is not a multi-provider.`);if(!s&&n.some(a=>$(a))&&!n.every(V))throw Error(`Cannot bind ${C(e)} as provider, since there are already provider(s) that are multi-providers.`);return this.providers.set(e,s?[...n,t]:[t]),Z(e)&&(X(t)||D(t))&&qt([e,...Wt(e)]).forEach(([a,o])=>{const r={provide:o,useExisting:a,multi:!0},l=this.providers.get(o)??[];this.existingProviderAlreadyProvided(o,a)||this.providers.set(o,[...l,r])}),this}unbind(t){const e=R(t);return this.providers.delete(e),this.singletons.delete(e),this}unbindAll(){return this.providers.clear(),this.singletons.clear(),this}get(t,e){if(e?.lazy??!1)return()=>this.get(t,{...e,lazy:!1});this.autoBindIfNeeded(t);const s=e?.optional??!1;if(!this.providers.has(t)){if(this.parent)return this.parent.get(t,{...e,lazy:!1});if(s)return;throw Error(`No provider(s) found for ${C(t)}`)}const a=L(this.providers.get(t));this.singletons.has(t)||tt(this).run(()=>{const l=a.flatMap(h=>this.factory.construct(h,t));this.singletons.set(t,l)});const o=L(this.singletons.get(t));return e?.multi??!1?o:U(o,()=>Error(`Requesting a single value for ${C(t)}, but multiple values were provided. Consider passing "{ multi: true }" to inject all values, or adjust your bindings accordingly.`))}getAsync(t,e){return e?.lazy??!1?()=>this.getAsync(t,{...e,lazy:!1}):Zt(async()=>{this.autoBindIfNeeded(t);const s=e?.optional??!1;if(!this.providers.has(t)){if(this.parent)return this.parent.getAsync(t,{...e,lazy:!1});if(s)return;throw Error(`No provider(s) found for ${C(t)}`)}const a=L(this.providers.get(t));this.singletons.has(t)||await tt(this).runAsync(async()=>{const l=await Promise.all(a.map(h=>this.factory.constructAsync(h)));this.singletons.set(t,l.flat())});const o=L(this.singletons.get(t));return e?.multi??!1?o:U(o,()=>new Error(`Requesting a single value for ${C(t)}, but multiple values were provided. Consider passing "{ multi: true }" to inject all values, or adjust your bindings accordingly.`))})}createChild(){return new Y(this)}has(t){return this.providers.has(t)||(this.parent?.has(t)??!1)}autoBindIfNeeded(t){if(!this.singletons.has(t)){if(Z(t)&&te(t))ee(t).filter(n=>!this.providers.has(n)).forEach(n=>{this.bind({provide:n,useClass:n,multi:!0})});else if(!this.providers.has(t)&&Qt(t)&&t.options?.factory){const e=t.options.async;e?e&&this.bind({provide:t,async:!0,useFactory:t.options.factory}):this.bind({provide:t,async:!1,useFactory:t.options.factory})}}}existingProviderAlreadyProvided(t,e){return(this.providers.get(t)??[]).some(n=>V(n)&&n.provide===t&&n.useExisting===e)}}const ae=[x,_,B,lt,j,Ht];var oe=class{allModules;IO;started=!1;disposed=!1;options;container;onDispose=v(!0);onStart=v();onRestart=v();constructor(i,t){this.container=new Y,this.options=i;let e=s=>{this.container.bind({provide:s,useFactory:()=>new s(this.container,this.options,this.onStart,this.onDispose,this.onRestart,this.augment)})};this.allModules=[...ae,...t??[]],this.allModules.forEach(e),this.allModules.forEach(s=>{this.container.get(s)});let n=this.options.loading??"normal";n==="normal"?this.load():n==="lazy"&&(this.IO=new IntersectionObserver(this.onVisibilityCheck,{rootMargin:"50px",threshold:0}),this.IO.observe(this.options.container))}onVisibilityCheck=i=>{i.forEach(t=>{if(t.isIntersecting){this.load(),this.IO?.disconnect(),this.IO=void 0;return}})};augment=i=>{let t=Object.getOwnPropertyDescriptors(i);Object.defineProperties(this,t)};load=i=>{this.disposed||(i&&Object.assign(this.options,i),this.started?this.onRestart():(this.onStart(),this.started=!0))};dispose=()=>{if(!this.started||this.disposed)return;this.IO?.disconnect(),this.IO=void 0;let i=this.options.container;for(;i.firstChild;)i.firstChild.remove();this.onDispose(),this.container.unbindAll(),this.disposed=!0}};async function re(i){let t=async a=>await le(a,i.parser??(o=>o)),e=i.canvas.nodes??[],n=i.attachmentDir??"./";e.forEach(a=>{if(a.type==="file"&&!a.file.startsWith("http")){let o=a.file.split("/").pop()??"";a.file=i.attachments?.[o]??n+o}});let s=[];return await Promise.all(e.map(async a=>s.push(await t(a)))),s.join("")}async function le(i,t){switch(i.type){case"text":return await t(i.text);case"file":return await he(i,t);case"link":return`<a href="${i.url}" target="_blank" rel="nofollow">${i.url}</a>`;default:return""}}async function he(i,t){return/\.md$/i.exec(i.file)?await ce(i.file,t):/\.(png|jpg|jpeg|gif|svg|webp)$/i.exec(i.file)?`<img src="${i.file}" alt="${i.file.split("/").pop()}">`:/\.(mp3|wav)$/i.exec(i.file)?`<audio src="${i.file}" controls></audio>`:""}async function ce(i,t){let e;try{let n=await(await fetch(i)).text(),s=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(n);e=await t(s?s[2]:n)}catch{e="Failed to load content."}return e}var de=`.JSON-Canvas-Viewer > .JCV-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  transition: transform 200ms;
  border-radius: 8px;
  gap: 10px;
}
.JSON-Canvas-Viewer > .JCV-controls.JCV-collapsed {
  transform: translateX(calc(100% - 30px));
}
.JSON-Canvas-Viewer > .JCV-controls .JCV-controls-content {
  display: flex;
  gap: 1px;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  background: var(--border);
  box-shadow: var(--shadow);
  outline: 1px solid var(--border);
}
.JSON-Canvas-Viewer > .JCV-controls .JCV-zoom-slider {
  width: 100px;
  margin: 0 10px;
}
`;const it='<svg viewBox="-5.28 -5.28 34.56 34.56" fill="none"><path d="M4 9V5.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C4.76 4 5.04 4 5.6 4H9M4 15v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C4.76 20 5.04 20 5.6 20H9m6-16h3.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C20 4.76 20 5.04 20 5.6V9m0 6v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C19.24 20 18.96 20 18.4 20H15" stroke-width="2.4" stroke-linecap="round"/></svg>';var Oe=class extends b{_controlsPanel;_toggleCollapseBtn;_toggleFullscreenBtn;_zoomOutBtn;_zoomSlider;_zoomInBtn;_resetViewBtn;DM;IH;collapsed;get controlsPanel(){if(!this._controlsPanel)throw f;return this._controlsPanel}get toggleCollapseBtn(){if(!this._toggleCollapseBtn)throw f;return this._toggleCollapseBtn}get toggleFullscreenBtn(){if(!this._toggleFullscreenBtn)throw f;return this._toggleFullscreenBtn}get zoomOutBtn(){if(!this._zoomOutBtn)throw f;return this._zoomOutBtn}get zoomSlider(){if(!this._zoomSlider)throw f;return this._zoomSlider}get zoomInBtn(){if(!this._zoomInBtn)throw f;return this._zoomInBtn}get resetViewBtn(){if(!this._resetViewBtn)throw f;return this._resetViewBtn}constructor(...i){super(...i),this.collapsed=this.options.controlsCollapsed??!1,this.DM=this.container.get(x),this.IH=this.container.get(j),this.DM.onToggleFullscreen.subscribe(this.updateFullscreenBtn),this.container.get(B).onRefresh.subscribe(this.updateSlider),this._controlsPanel=document.createElement("div"),this._controlsPanel.className="JCV-controls",this._controlsPanel.classList.toggle("JCV-collapsed",this.collapsed),A(this._controlsPanel,de),this._toggleCollapseBtn=document.createElement("button"),this._toggleCollapseBtn.className="JCV-button JCV-collapse-button JCV-border-shadow-bg",this._toggleCollapseBtn.innerHTML='<svg viewBox="-3.6 -3.6 31.2 31.2" stroke-width=".4"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" /></svg>',this._controlsPanel.appendChild(this._toggleCollapseBtn);let t=document.createElement("div");t.className="JCV-controls-content",this._toggleFullscreenBtn=document.createElement("button"),this._toggleFullscreenBtn.className="JCV-button",this._toggleFullscreenBtn.innerHTML=it,t.appendChild(this._toggleFullscreenBtn),this._zoomOutBtn=document.createElement("button"),this.zoomOutBtn.className="JCV-button",this._zoomOutBtn.innerHTML='<svg viewBox="-1.2 -1.2 26.4 26.4"><path d="M6 12h12" stroke-width="2" stroke-linecap="round" /></svg>',t.appendChild(this._zoomOutBtn),this._zoomSlider=document.createElement("input"),this._zoomSlider.type="range",this._zoomSlider.className="JCV-zoom-slider",this._zoomSlider.min="-30",this._zoomSlider.max="30",this._zoomSlider.value="0",t.appendChild(this._zoomSlider),this._zoomInBtn=document.createElement("button"),this._zoomInBtn.className="JCV-button",this._zoomInBtn.innerHTML='<svg viewBox="-1.2 -1.2 26.4 26.4"><path d="M6 12h12m-6-6v12" stroke-width="2" stroke-linecap="round" /></svg>',t.appendChild(this._zoomInBtn),this._resetViewBtn=document.createElement("button"),this._resetViewBtn.className="JCV-button",this._resetViewBtn.innerHTML='<svg viewBox="-6 -6 30 30" stroke-width=".08"><path d="m14.955 7.986.116.01a1 1 0 0 1 .85 1.13 8 8 0 0 1-13.374 4.728l-.84.84c-.63.63-1.707.184-1.707-.707V10h3.987c.89 0 1.337 1.077.707 1.707l-.731.731a6 6 0 0 0 8.347-.264 6 6 0 0 0 1.63-3.33 1 1 0 0 1 1.131-.848zM11.514.813a8 8 0 0 1 1.942 1.336l.837-.837c.63-.63 1.707-.184 1.707.707V6h-3.981c-.89 0-1.337-1.077-.707-1.707l.728-.729a6 6 0 0 0-9.98 3.591 1 1 0 1 1-1.98-.281A8 8 0 0 1 11.514.813Z" /></svg>',t.appendChild(this._resetViewBtn),this._controlsPanel.appendChild(t),this.DM.data.container.appendChild(this._controlsPanel),this._toggleCollapseBtn.addEventListener("click",this.toggleCollapse),this._zoomInBtn.addEventListener("click",this.zoomIn),this._zoomOutBtn.addEventListener("click",this.zoomOut),this._zoomSlider.addEventListener("input",this.slide),this._resetViewBtn.addEventListener("click",this.DM.resetView),this._toggleFullscreenBtn.addEventListener("click",this.toggleFullscreen),this.augment({toggleControlsCollapse:this.toggleCollapse}),this.onDispose(this.dispose)}toggleCollapse=()=>{this.collapsed=!this.collapsed,this.controlsPanel.classList.toggle("JCV-collapsed",this.collapsed),this.collapsed||this.updateSlider()};zoomIn=()=>this.IH.zoom(1.3,this.DM.middleViewer());zoomOut=()=>this.IH.zoom(1/1.3,this.DM.middleViewer());slide=()=>this.IH.trueZoom(1.1**Number(this.zoomSlider.value)/this.DM.data.scale,this.DM.middleViewer());updateFullscreenBtn=i=>{this.toggleFullscreenBtn.innerHTML=i==="enter"?'<svg viewBox="-40.32 -40.32 176.64 176.64"><path d="M30 60H6a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0V66a5.997 5.997 0 0 0-6-6Zm60 0H66a5.997 5.997 0 0 0-6 6v24a6 6 0 0 0 12 0V72h18a6 6 0 0 0 0-12ZM66 36h24a6 6 0 0 0 0-12H72V6a6 6 0 0 0-12 0v24a5.997 5.997 0 0 0 6 6ZM30 0a5.997 5.997 0 0 0-6 6v18H6a6 6 0 0 0 0 12h24a5.997 5.997 0 0 0 6-6V6a5.997 5.997 0 0 0-6-6Z"/></svg>':it};toggleFullscreen=()=>this.DM.toggleFullscreen();updateSlider=()=>{this.collapsed||(this.zoomSlider.value=String(this.scaleToSlider(this.DM.data.scale)))};scaleToSlider=i=>Math.log(i)/Math.log(1.1);dispose=()=>{this.toggleCollapseBtn.removeEventListener("click",this.toggleCollapse),this.zoomInBtn.removeEventListener("click",this.zoomIn),this.zoomOutBtn.removeEventListener("click",this.zoomOut),this.zoomSlider.removeEventListener("input",this.slide),this.resetViewBtn.removeEventListener("click",this.DM.resetView),this.toggleFullscreenBtn.removeEventListener("click",this.toggleFullscreen),this.controlsPanel.remove(),this._controlsPanel=void 0,this._toggleCollapseBtn=void 0,this._zoomInBtn=void 0,this._zoomOutBtn=void 0,this._zoomSlider=void 0,this._resetViewBtn=void 0,this._toggleFullscreenBtn=void 0}},pe=`.JSON-Canvas-Viewer > .JCV-minimap-container {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  pointer-events: none;
  transition: transform 200ms;
}
.JSON-Canvas-Viewer > .JCV-minimap-container.JCV-collapsed {
  transform: translateX(calc(100% - 30px));
}
.JSON-Canvas-Viewer > .JCV-minimap-container .JCV-toggle-minimap {
  margin: auto 10px 0 0;
  pointer-events: auto;
}
.JSON-Canvas-Viewer > .JCV-minimap-container .JCV-minimap {
  position: relative;
  pointer-events: none;
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 12px;
  transform-origin: 0 0;
}
.JSON-Canvas-Viewer > .JCV-minimap-container .JCV-minimap .JCV-minimap-canvas {
  width: 100%;
  height: 100%;
}
.JSON-Canvas-Viewer > .JCV-minimap-container .JCV-minimap .JCV-viewport-rectangle {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 6px;
  box-sizing: border-box;
  border: 2px dashed var(--text);
}
@container (max-width: 768px) {
  .JSON-Canvas-Viewer > .JCV-minimap-container .JCV-container .JCV-minimap {
    transform: scale(0.6);
  }
  .JSON-Canvas-Viewer > .JCV-minimap-container .JCV-container .JCV-toggle-minimap {
    transform: translateY(-60px);
  }
  .collapsed .JSON-Canvas-Viewer > .JCV-minimap-container .JCV-container .JCV-toggle-minimap {
    transform: translateY(-60px) rotate(180deg);
  }
  .JSON-Canvas-Viewer > .JCV-minimap-container .JCV-container .JCV-minimap-container {
    transform: translateY(60px) translateX(80px);
  }
  .JSON-Canvas-Viewer > .JCV-minimap-container .JCV-container .JCV-minimap-container.JCV-collapsed {
    transform: translateY(60px) translateX(calc(100% - 32px));
  }
}
`,Ne=class extends b{_minimapCtx;_viewportRectangle;_minimap;_minimapContainer;_toggleMinimapBtn;minimapCache={centerX:0,centerY:0,scale:1};DM;SM;collapsed;get minimap(){if(!this._minimap)throw f;return this._minimap}get minimapCtx(){if(!this._minimapCtx)throw f;return this._minimapCtx}get viewportRectangle(){if(!this._viewportRectangle)throw f;return this._viewportRectangle}get minimapContainer(){if(!this._minimapContainer)throw f;return this._minimapContainer}get toggleMinimapBtn(){if(!this._toggleMinimapBtn)throw f;return this._toggleMinimapBtn}constructor(...i){super(...i),this.collapsed=this.options.minimapCollapsed??!1,this.container.get(B).onRefresh.subscribe(this.updateViewportRectangle),this.DM=this.container.get(x),this.SM=this.container.get(_),this._minimapContainer=document.createElement("div"),this._minimapContainer.className="JCV-minimap-container",A(this._minimapContainer,pe),this._toggleMinimapBtn=document.createElement("button"),this._toggleMinimapBtn.className="JCV-button JCV-toggle-minimap JCV-collapse-button JCV-border-shadow-bg",this._toggleMinimapBtn.innerHTML='<svg viewBox="-3.6 -3.6 31.2 31.2" stroke-width=".4"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" /></svg>',this._minimapContainer.appendChild(this._toggleMinimapBtn),this._minimap=document.createElement("div"),this._minimap.className="JCV-minimap JCV-border-shadow-bg";let t=document.createElement("canvas");t.className="JCV-minimap-canvas",t.width=200,t.height=150,this._minimap.appendChild(t),this._minimapCtx=t.getContext("2d"),this._viewportRectangle=document.createElement("div"),this._viewportRectangle.className="JCV-viewport-rectangle",this._minimap.appendChild(this._viewportRectangle),this._minimapContainer.appendChild(this._minimap),this.DM.data.container.appendChild(this._minimapContainer),this._minimapContainer.classList.toggle("JCV-collapsed",this.collapsed),this._toggleMinimapBtn.addEventListener("click",this.toggleCollapse),nt(t,t.width,t.height),this.augment({toggleMinimapCollapse:this.toggleCollapse}),this.onStart(this.start),this.onRestart(this.start),this.onDispose(this.dispose)}toggleCollapse=()=>{this.collapsed=!this.collapsed,this.minimapContainer.classList.toggle("JCV-collapsed",this.collapsed),this.collapsed||this.updateViewportRectangle()};start=()=>{let i=this.DM.data.nodeBounds;if(!i)return;let t=this.minimap.clientWidth,e=this.minimap.clientHeight,n=t/i.width,s=e/i.height;this.minimapCache.scale=Math.min(n,s)*.9,this.minimapCache.centerX=t/2,this.minimapCache.centerY=e/2,this.minimapCtx.clearRect(0,0,t,e),this.minimapCtx.save(),this.minimapCtx.translate(this.minimapCache.centerX,this.minimapCache.centerY),this.minimapCtx.scale(this.minimapCache.scale,this.minimapCache.scale),this.minimapCtx.translate(-i.centerX,-i.centerY);let a=this.DM.data.canvasData;for(let o of a.edges)this.drawMinimapEdge(o);for(let o of a.nodes)this.drawMinimapNode(o);this.minimapCtx.restore()};drawMinimapNode=i=>{let t=this.SM.getColor(i.color);this.minimapCtx.fillStyle=t.border,T(this.minimapCtx,i.x,i.y,i.width,i.height,25),this.minimapCtx.fill()};drawMinimapEdge=i=>{let t=this.DM.data.nodeMap,e=t[i.fromNode].ref,n=t[i.toNode].ref;if(!e||!n)return;let{x:s,y:a}=z(e,i.fromSide),{x:o,y:r}=z(n,i.toSide);this.minimapCtx.beginPath(),this.minimapCtx.moveTo(s,a),this.minimapCtx.lineTo(o,r),this.minimapCtx.strokeStyle=this.SM.getColor(i.color).active,this.minimapCtx.lineWidth=10,this.minimapCtx.stroke()};updateViewportRectangle=()=>{if(this.collapsed)return;let i=this.DM.data.nodeBounds,t=this.DM.data.container,e=this.DM.data.scale;if(!i)return;let n=t.clientWidth/e,s=t.clientHeight/e,a=-this.DM.data.offsetX/e+t.clientWidth/(2*e),o=-this.DM.data.offsetY/e+t.clientHeight/(2*e),r=this.minimapCache.centerX+(a-n/2-i.centerX)*this.minimapCache.scale,l=this.minimapCache.centerY+(o-s/2-i.centerY)*this.minimapCache.scale,h=n*this.minimapCache.scale,c=s*this.minimapCache.scale;this.viewportRectangle.style.left=`${r}px`,this.viewportRectangle.style.top=`${l}px`,this.viewportRectangle.style.width=`${h}px`,this.viewportRectangle.style.height=`${c}px`};dispose=()=>{this.toggleMinimapBtn.removeEventListener("click",this.toggleCollapse),this.minimapCtx.clearRect(0,0,this.minimap.clientWidth,this.minimap.clientHeight),this.minimapContainer.remove(),this._minimapContainer=void 0,this._toggleMinimapBtn=void 0,this._viewportRectangle=void 0,this._minimap=void 0}},ue=`.JSON-Canvas-Viewer.JCV-numb, .JSON-Canvas-Viewer.JCV-numb * {
  pointer-events: none !important;
}
.JSON-Canvas-Viewer .JCV-prevention-container {
  overflow: visible;
  transition: background 200ms, opacity 200ms, box-shadow 200ms, border 200ms, filter 200ms, backdrop-filter 200ms;
}
.JSON-Canvas-Viewer .JCV-prevention-container.JCV-hidden {
  pointer-events: none;
  opacity: 0;
}
.JSON-Canvas-Viewer .JCV-prevention-container .JCV-prevention-banner {
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
  font-size: calc(14px + 0.3vw);
  line-height: calc(17px + 0.3vw);
  text-align: center;
}
`,Ee=class extends b{_preventionContainer;preventMt=!1;DM;preventMistouch={initialX:0,initialY:0,lastX:0,lastY:0,record:!1};get preventionContainer(){if(!this._preventionContainer)throw f;return this._preventionContainer}constructor(...i){super(...i);let t=document.createElement("div");t.className="JCV-prevention-banner JCV-border-shadow-bg",t.textContent=this.options.mistouchPreventerBannerText??"Click on to unlock.",this.DM=this.container.get(x),this._preventionContainer=document.createElement("div"),this._preventionContainer.className="JCV-prevention-container JCV-hidden JCV-full JCV-flex-center",A(this._preventionContainer,ue),this._preventionContainer.appendChild(t),this.DM.data.container.appendChild(this._preventionContainer),this.options.preventMistouchAtStart&&this.startPrevention(),window.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this.augment({endMistouchPrevention:this.endPrevention,startMistouchPrevention:this.startPrevention}),this.onDispose(this.dispose)}onPointerDown=i=>{let t=this.DM.data.container.getBoundingClientRect();i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom?this.preventMt||this.startPrevention():this.preventMt&&(this.preventMistouch.initialX=i.clientX,this.preventMistouch.initialY=i.clientY,this.preventMistouch.lastX=i.clientX,this.preventMistouch.lastY=i.clientY,this.preventMistouch.record=!0)};onPointerMove=i=>{this.preventMistouch.record&&(this.preventMistouch.lastX=i.clientX,this.preventMistouch.lastY=i.clientY)};onPointerUp=()=>{this.preventMistouch.record&&(this.preventMistouch.record=!1,Math.abs(this.preventMistouch.lastX-this.preventMistouch.initialX)+Math.abs(this.preventMistouch.lastY-this.preventMistouch.initialY)<5&&this.endPrevention())};startPrevention=()=>{this.preventionContainer.classList.remove("JCV-hidden"),this.DM.data.container.classList.add("JCV-numb"),this.preventMt=!0};endPrevention=()=>{this.preventMt=!1,this.preventionContainer.classList.add("JCV-hidden"),setTimeout(()=>this.DM.data.container.classList.remove("JCV-numb"),50)};dispose=()=>{window.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.preventionContainer.remove(),this._preventionContainer=void 0}};const me=["innerHTML"],ze=pt({__name:"Viewer",props:{modules:{},canvas:{default:()=>({})},attachmentDir:{},attachments:{},options:{default:()=>({})},isPrerendering:{type:Boolean,default:!1},theme:{}},async setup(i,{expose:t}){let e,n,s=ut("viewerRef"),a,o=yt(),r=i.isPrerendering?([e,n]=mt(()=>re({attachmentDir:i.attachmentDir,attachments:i.attachments,canvas:i.canvas,...i.options})),e=await e,n(),e):"",l=ft();t({viewer:a});function h(c){return({container:p,content:d,node:u,onBeforeUnmount:g,onActive:w,onLoseActive:y})=>{let J=xt({render:()=>c(Vt({content:d,node:u,onActive:w,onLoseActive:y}))});J._context=o.appContext,J.mount(p),g.subscribe(J.unmount)}}return q(()=>i.theme,c=>a?.changeTheme(c)),q(()=>({attachmentDir:i.attachmentDir,attachments:i.attachments,canvas:i.canvas}),({canvas:c,attachmentDir:p,attachments:d})=>a?.load({attachmentDir:p,attachments:d,canvas:c})),vt(()=>{if(!s.value)return;let c=["text","markdown","link","audio","image","video"],p={};for(let d of c){let u=l[d];u&&(p[d]=h(u))}a=new oe(Object.assign(i.options,{attachmentDir:i.attachmentDir,attachments:i.attachments,canvas:i.canvas,container:s.value,nodeComponents:p,theme:i.theme}),i.modules)}),gt(()=>{a?.dispose(),a=void 0}),(c,p)=>(Ct(),wt("section",{ref_key:"viewerRef",ref:s,innerHTML:bt(r),style:{"max-height":"100vh","max-width":"100vw"}},null,8,me))}});export{Ee as a,Oe as c,ze as g,Ne as u};
