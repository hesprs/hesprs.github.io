import{a3 as ot,f as lt,ap as ht,a2 as ct,J as Y,j as dt,H as ut,o as pt,c as mt,s as ft,aq as gt,ak as vt,A as Ct}from"./framework.cbxun9lb.js";var b=class{onStart;onRestart;onDispose;constructor(t,i,n,s,a,r){this.container=t,this.augment=r,this.options=i,this.onStart=n.subscribe,this.onDispose=s.subscribe,this.onRestart=a.subscribe}options},p={round:Vt,resizeCanvasForDPR:yt,applyStyles:wt,drawRoundRect:bt,getAnchorCoord:xt,makeHook:Jt};const v=Error("[JSONCanvasViewer] Resource hasn't been set up or has been disposed.");function wt(e,t){let i=document.createElement("style");i.innerHTML=t,e.appendChild(i)}function bt(e,t,i,n,s,a){e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+n-a,i),e.quadraticCurveTo(t+n,i,t+n,i+a),e.lineTo(t+n,i+s-a),e.quadraticCurveTo(t+n,i+s,t+n-a,i+s),e.lineTo(t+a,i+s),e.quadraticCurveTo(t,i+s,t,i+s-a),e.lineTo(t,i+a),e.quadraticCurveTo(t,i,t+a,i),e.closePath()}function xt(e,t){let i=e.x+e.width/2,n=e.y+e.height/2;switch(t){case"top":return{x:i,y:e.y};case"bottom":return{x:i,y:e.y+e.height};case"left":return{x:e.x,y:n};case"right":return{x:e.x+e.width,y:n};default:return{x:i,y:n}}}function yt(e,t,i){let n=window.devicePixelRatio??1,s=e.getContext("2d");if(!s)throw Error("[JSONCanvasViewer] This error is unexpected, probably caused uncontrollable runtime errors. Please contact the developer and show how to reproduce.");e.width=Math.round(t*n),e.height=Math.round(i*n),s.setTransform(1,0,0,1,0,0),s.scale(n,n)}function Vt(e,t){let i=10**t;return Math.round(e*i)/i}function Jt(e=!1,t=!1){let i=t?async(...n)=>{if(e){let s=Array.from(i.subs).reverse();for(let a of s)await a(...n)}else for(let s of i.subs)await s(...n)}:(...n)=>{if(e){let s=Array.from(i.subs).reverse();for(let a of s)a(...n)}else for(let s of i.subs)s(...n)};return i.subs=new Set,i.subscribe=n=>{i.subs.add(n)},i.unsubscribe=n=>{i.subs.delete(n)},i}var Mt=`.JSON-Canvas-Viewer {
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
`,x=class extends b{onToggleFullscreen=p.makeHook();data={canvasData:{nodes:[],edges:[]},nodeMap:{},edgeMap:{},canvasBaseDir:"./",nodeBounds:{maxX:0,maxY:0,minX:0,minY:0,width:0,height:0,centerX:0,centerY:0},offsetX:0,offsetY:0,scale:1,container:document.createElement("div")};constructor(...t){super(...t);let i=this.options.container;for(;i.firstElementChild;)i.firstElementChild.remove();i.innerHTML="";let n=this.options.shadowed?i.attachShadow({mode:"open"}):i;p.applyStyles(n,Mt+this.options.extraCSS),this.data.container.classList.add("JSON-Canvas-Viewer"),n.appendChild(this.data.container),this.augment({resetView:this.resetView,toggleFullscreen:this.toggleFullscreen,onToggleFullscreen:this.onToggleFullscreen}),this.onStart(this.start),this.onRestart(this.start),this.onDispose(this.dispose)}start=()=>{let t=Object.assign({nodes:[],edges:[]},this.options.canvas);Object.assign(this.data,{canvasData:t,nodeMap:{},edgeMap:{},canvasBaseDir:this.processBaseDir(this.options.attachmentDir),nodeBounds:this.calculateNodeBounds(t),offsetX:0,offsetY:0,scale:1}),this.data.canvasData.nodes.forEach(i=>{let n={ref:i,box:this.getNodeBox(i)};if(this.data.nodeMap[i.id]=n,i.type==="file"){let s=i.file.split("/").pop()??"";if(n.fileName=s,!i.file.startsWith("http://")&&!i.file.startsWith("https://")){let a=this.options.attachments?.[s];a?i.file=a:this.options.noAttachmentRelocation||(i.file=this.data.canvasBaseDir+s)}}}),this.data.canvasData.edges.forEach(i=>{this.data.edgeMap[i.id]={ref:i,box:this.getEdgeBox(i)}}),this.resetView()};processBaseDir=t=>t?t?.slice(-1)==="/"?t:`${t}/`:"./";getNodeBox=t=>({left:t.x,top:t.type==="file"||t.type==="group"?t.y-40:t.y,right:t.width+t.x,bottom:t.y+t.height});getEdgeBox=t=>{let i=this.data.nodeMap,n=i[t.fromNode].ref,s=i[t.toNode].ref,a=p.getAnchorCoord(n,t.fromSide),r=p.getAnchorCoord(s,t.toSide),o={left:Math.min(a.x,r.x),top:Math.min(a.y,r.y),right:Math.max(a.x,r.x),bottom:Math.max(a.y,r.y)},l=o.right-o.left,h=o.bottom-o.top,c=Math.min(l,h),d=Math.log2(Math.max(l,h)/(c===0?1:c))*10;return{left:o.left-d,top:o.top-d,right:o.right+d,bottom:o.bottom+d}};calculateNodeBounds(t){let i=1/0,n=1/0,s=-1/0,a=-1/0;t.nodes.forEach(c=>{i=Math.min(i,c.x),n=Math.min(n,c.y),s=Math.max(s,c.x+c.width),a=Math.max(a,c.y+c.height)});let r=s-i,o=a-n,l=i+r/2,h=n+o/2;return{minX:i,minY:n,maxX:s,maxY:a,width:r,height:o,centerX:l,centerY:h}}toggleFullscreen=async t=>{!document.fullscreenElement&&(!t||t==="enter")?(await this.data.container.requestFullscreen(),this.onToggleFullscreen("enter")):document.fullscreenElement&&(!t||t==="exit")&&(await document.exitFullscreen(),this.onToggleFullscreen("exit"))};resetView=()=>{let t=this.data.nodeBounds,i=this.data.container;if(!t||!i)return;let n=t.width+200,s=t.height+200,a=i.clientWidth,r=i.clientHeight,o=a/n,l=r/s,h=Math.round(Math.min(o,l)*1e3)/1e3,c=t.centerX,d=t.centerY,u={scale:h,offsetX:a/2-c*h,offsetY:r/2-d*h};this.data.offsetX=u.offsetX,this.data.offsetY=u.offsetY,this.data.scale=u.scale};middleViewer=()=>{let t=this.data.container;return{x:t.clientWidth/2,y:t.clientHeight/2,width:t.clientWidth,height:t.clientHeight}};dispose=()=>{this.data.container.remove()}};const g=(e,t,i)=>e>=t&&e<=i,St=e=>{if(typeof e=="number")return g(e,0,1);if(typeof e=="string"){const t=parseFloat(e);return!isNaN(t)&&(e.endsWith("%")?g(t/100,0,1):g(t,0,1))}return!1},M=e=>{const t=e.trim();return t?t.endsWith("%")?Number(t.slice(0,-1))/100*255:Number(t):NaN},Ot=e=>typeof e=="string"?kt(e):typeof e=="object"&&e!==null&&Nt(e),Nt=e=>{const{red:t,green:i,blue:n,alpha:s}=e;return g(t,0,255)&&g(i,0,255)&&g(n,0,255)&&(s===void 0||g(s,0,1))},kt=e=>{const t=e.match(/^rgba?\(\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*(?:[,/]\s*([01]?\.?\d+%?))?\s*\)$/);if(!t)return!1;const[,i,n,s,a]=t,r=M(i),o=M(n),l=M(s);return!!(g(r,0,255)&&g(o,0,255)&&g(l,0,255))&&(a===void 0||St(a))},zt=e=>{const t=e.trim().toLowerCase().match(/^(-?[\d.]+)(deg|rad|grad|turn)?$/);if(!t)return NaN;const i=parseFloat(t[1]),n=t[2];if(isNaN(i))return NaN;let s;switch(n){case"rad":s=180*i/Math.PI;break;case"grad":s=i/400*360;break;case"turn":s=360*i;break;default:s=i}return(s%360+360)%360},K=e=>{if(typeof e=="number"){if(!g(e,0,1))throw new Error("Alpha value must be between 0 and 1");return e}if(typeof e=="string"){const t=e.trim();let i;if(t.endsWith("%")?i=Number(t.slice(0,-1))/100:i=Number(t),isNaN(i))throw new Error(`Invalid alpha value: "${e}"`);if(!g(i,0,1))throw new Error("Alpha value must be between 0 and 1");return i}throw new Error("Invalid alpha value format")},Q=e=>{if(typeof e!="string")throw new Error("Invalid HSL color format");const t=e.match(/^hsla?\(\s*(-?[\d.]+(?:deg|rad|grad|turn)?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i);if(!t)throw new Error("Invalid HSL color format");const[,i,n,s,a]=t,r=zt(i),o=parseFloat(n),l=parseFloat(s);if(isNaN(r)||isNaN(o)||isNaN(l)||!g(o,0,100)||!g(l,0,100))throw new Error("Invalid HSL color values");return a!==void 0?{hue:r,saturation:o,lightness:l,alpha:K(a)}:{hue:r,saturation:o,lightness:l,alpha:1}},tt=e=>{if(typeof e!="string")throw new Error("Invalid RGB color format");const t=e.match(/^rgba?\(\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i);if(!t)throw new Error("Invalid RGB color format");const[,i,n,s,a]=t,r=M(i),o=M(n),l=M(s);if(!g(r,0,255)||!g(o,0,255)||!g(l,0,255))throw new Error("RGB values must be between 0 and 255");return{red:r,green:o,blue:l,alpha:a!==void 0?K(a):1}},$=e=>{if(typeof e!="string")throw new Error("Invalid Hex color format.");const t=e.match(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(!t)throw new Error("Invalid Hex color format.");let i=t[1];i.length!==3&&i.length!==4||(i=i.split("").map(o=>o+o).join(""));const n=parseInt(i.substring(0,2),16),s=parseInt(i.substring(2,4),16),a=parseInt(i.substring(4,6),16);let r=1;if(i.length===8){const o=parseInt(i.substring(6,8),16);r=Number((o/255).toFixed(2))}return{red:n,green:s,blue:a,alpha:r}},Et=e=>{if(typeof e=="string"){if(e.startsWith("#"))return"hex";if(e.startsWith("rgb"))return"rgbString";if(e.startsWith("hsl"))return"hslString"}if(typeof e=="object"&&e!==null){if("red"in e&&"green"in e&&"blue"in e)return"rgb";if("hue"in e&&"saturation"in e&&"lightness"in e)return"hsl"}throw new Error("Invalid color format")},Dt=e=>{if(typeof e!="object"||e===null)throw new Error("Invalid color format. Expected an RGB or HSL object.");if("red"in e&&"green"in e&&"blue"in e){const{red:t,green:i,blue:n,alpha:s}=e;return s===void 0||s===1?`rgb(${t}, ${i}, ${n})`:`rgba(${t}, ${i}, ${n}, ${s})`}if("hue"in e&&"saturation"in e&&"lightness"in e){const{hue:t,saturation:i,lightness:n,alpha:s}=e;return s===void 0||s===1?`hsl(${t}, ${i}%, ${n}%)`:`hsla(${t}, ${i}%, ${n}%, ${s})`}throw new Error("Invalid color format. Expected an RGB or HSL object.")},S=e=>{if(!Ot(e))throw new Error("Invalid RGB color format");const t=typeof e=="string"?tt(e):e,{red:i,green:n,blue:s,alpha:a}=t,r=i/255,o=n/255,l=s/255,h=Math.max(r,o,l),c=Math.min(r,o,l),d=h-c;let u=0,f=0;const m=(h+c)/2;if(d!==0){switch(f=m>.5?d/(2-h-c):d/(h+c),h){case r:u=(o-l)/d+(o<l?6:0);break;case o:u=(l-r)/d+2;break;case l:u=(r-o)/d+4}u*=60}return{hue:Math.round(u),saturation:Math.round(100*f),lightness:Math.round(100*m),alpha:a}},_t=e=>{const t=$(e);return S(t)},Bt=e=>{const t=Et(e);if(t==="hsl")return e;if(t==="rgb")return S(e);if(t==="hex")return _t(e);if(t==="hslString")return Q(e);if(t==="rgbString")return S(e);throw new Error("Invalid color format")},_=e=>{const t=Bt(e);return Dt(t)};var k=class extends b{theme="light";onChangeTheme=p.makeHook();definedColors={light:{0:{hue:0,saturation:0,lightness:72},1:{hue:358,saturation:81,lightness:55},2:{hue:19,saturation:87,lightness:58},3:{hue:41,saturation:79,lightness:52},4:{hue:150,saturation:100,lightness:37},5:{hue:221,saturation:100,lightness:59},6:{hue:257,saturation:81,lightness:62}},dark:{0:{hue:0,saturation:0,lightness:40},1:{hue:358,saturation:100,lightness:65},2:{hue:23,saturation:86,lightness:63},3:{hue:39,saturation:91,lightness:70},4:{hue:153,saturation:80,lightness:45},5:{hue:217,saturation:100,lightness:62},6:{hue:259,saturation:100,lightness:75}}};namedColors={light:{dots:"hsla(0, 0%, 72%, 0.4)",text:"rgb(30, 30, 30)",background:"rgb(250, 250, 250)","background-secondary":"rgb(255, 255, 255)",shadow:"0px 0px 8px rgb(0, 0, 0, 0.1)",border:"hsla(0, 0%, 82%, 0.7)"},dark:{dots:"hsla(0, 0%, 40%, 0.3)",text:"rgb(242, 242, 242)",background:"rgb(30, 30, 30)","background-secondary":"rgb(37, 37, 40)",shadow:"0px 0px 8px rgb(0, 0, 0, 0.2)",border:"hsla(0, 0%, 30%, 0.7)"}};colorCache={dark:{},light:{}};constructor(...t){super(...t);let i=this.options.colors;i&&["light","dark"].forEach(n=>{if(!(n in i))return;let s=i[n];s&&Object.entries(s).forEach(([a,r])=>{if(!r)return;let o=this.namedColors[n],l=this.definedColors[n];if(a in o)o[a]=r;else if(a in l){let h=this.parseColor(r);if(!h){console.warn(`[JSON Canvas Viewer] Color ${r} unsupported.`);return}l[a]=h}})}),this.changeTheme(this.options.theme??"light"),this.augment({changeTheme:this.changeTheme,onChangeTheme:this.onChangeTheme})}hslProcessor=t=>{let{hue:i,saturation:n,lightness:s}=t,a;return a=this.theme==="dark"?{active:t,card:{hue:i,saturation:n/3,lightness:s/3},border:{...t,alpha:.7},background:{...t,alpha:.1},text:t.lightness>=70?"rgb(30, 30, 30)":"rgb(242, 242, 242)"}:{active:t,card:i===0?{hue:i,saturation:n,lightness:100}:{hue:i,saturation:n*.4,lightness:90},border:{...t,alpha:.7},background:{...t,alpha:.1},text:t.lightness>=70?"rgb(30, 30, 30)":"rgb(242, 242, 242)"},{active:_(a.active),card:_(a.card),border:_(a.border),background:_(a.background),text:a.text}};parseColor=t=>{if(t.startsWith("rgb"))return S(tt(t));if(t.startsWith("#"))return S($(t));if(t.startsWith("hsl"))return Q(t)};getColor=(t="0")=>{let i=this.theme,n;if(this.colorCache[i][t])return this.colorCache[i][t];n=t in this.definedColors[i]?this.hslProcessor(this.definedColors[i][t]):this.hslProcessor(S($(t)));let s={...n,"border-width":t==="0"?"1px":"2px"};return this.colorCache[i][t]=s,s};getNamedColor=t=>this.namedColors[this.theme][t];changeTheme=t=>{this.theme=t||(this.theme==="dark"?"light":"dark");let i=this.container.get(x).data.container;Object.entries(this.namedColors[this.theme]).forEach(([n,s])=>{i.style.setProperty(`--${n}`,s)}),this.onChangeTheme(this.theme)}},z=class extends b{animationId=null;resizeAnimationId=null;DM;SM;resizeObserver;perFrame={lastScale:1,lastOffsets:{x:0,y:0}};lastResizeCenter={x:null,y:null};onResize=p.makeHook();onRefresh=p.makeHook();constructor(...t){super(...t),this.DM=this.container.get(x),this.SM=this.container.get(k),this.resizeObserver=new ResizeObserver(this.onResizeCallback),this.SM.onChangeTheme.subscribe(this.refresh),this.augment({refresh:this.refresh,onRefresh:this.onRefresh,onResize:this.onResize}),this.onStart(this.start),this.onRestart(this.refresh),this.onDispose(this.dispose)}start=()=>{this.resizeObserver.observe(this.DM.data.container),this.animationId=requestAnimationFrame(this.draw)};draw=()=>{(this.perFrame.lastScale!==this.DM.data.scale||this.perFrame.lastOffsets.x!==this.DM.data.offsetX||this.perFrame.lastOffsets.y!==this.DM.data.offsetY)&&this.refresh(),this.animationId=requestAnimationFrame(this.draw)};refresh=()=>{this.perFrame={lastScale:this.DM.data.scale,lastOffsets:{x:this.DM.data.offsetX,y:this.DM.data.offsetY}},this.onRefresh()};onResizeCallback=()=>{this.resizeAnimationId=requestAnimationFrame(()=>{let t=this.DM.middleViewer();this.lastResizeCenter.x&&this.lastResizeCenter.y&&(this.DM.data.offsetX=this.DM.data.offsetX+t.x-this.lastResizeCenter.x,this.DM.data.offsetY=this.DM.data.offsetY+t.y-this.lastResizeCenter.y),this.lastResizeCenter.x=t.x,this.lastResizeCenter.y=t.y,this.onResize(t.width,t.height),this.refresh()})};dispose=()=>{this.animationId&&cancelAnimationFrame(this.animationId),this.resizeAnimationId&&cancelAnimationFrame(this.resizeAnimationId),this.resizeObserver.disconnect()}},O=class{dispatch;constructor(t,i,n,s,a,r,o,l){this.augment=t,this.getNthPointer=n,this.toTargetCoords=s,this.window=a,this.pointers=r,this.element=o,this.options=l,this.dispatch=i}onPointerDown;onPointerUp;onPointerMove;onWheel;onStart;onStop;dispose;modifiers};function J(e,t=0){return e[e.length-1-t]}function Pt(e,t){for(let[i,n]of Object.entries(e))i in t||(t[i]=n)}var It=class extends O{#t=-1/0;#e=0;onPointerDown=(t,i,n)=>{if(n.size===2){let s=this.getNthPointer(0);s.interrupted=!0,i.interrupted=!0}};onPointerUp=(t,i)=>{if(i.interrupted)return;let n=this.options.clickMoveThreshold??5;if(Math.abs(i.records[0].x-t.clientX)>=n||Math.abs(i.records[0].y-t.clientY)>=n)return;let s=J(i.records).timestamp,a=this.options.clickStreakWindow??400;s-this.#t<=a?this.#e++:this.#e=1,this.#t=s;let r=this.toTargetCoords({x:t.clientX,y:t.clientY});this.dispatch("trueClick",{...r,target:i.target,streak:this.#e})}},Lt=class extends O{onPointerMove=(e,t,i)=>{let n=J(t.records,1);if(i.size===1){let s=e.clientX-n.x,a=e.clientY-n.y;this.dispatch("drag",{deltaX:s,deltaY:a,x:e.clientX,y:e.clientY})}}},Tt=class extends O{#t={lastDistance:0,lastMidpoint:{x:0,y:0}};#e(){let t=J(this.getNthPointer(0).records),i=J(this.getNthPointer(1).records),n=t.x-i.x,s=t.y-i.y;return Math.sqrt(n*n+s*s)}#i(){let t=J(this.getNthPointer(0).records),i=J(this.getNthPointer(1).records);return{x:(t.x+i.x)/2,y:(t.y+i.y)/2}}onPointerDown=(t,i,n)=>{n.size===2&&(this.#t.lastDistance=this.#e(),this.#t.lastMidpoint=this.toTargetCoords(this.#i()))};onPointerMove=(t,i,n)=>{if(n.size!==2)return;let s=this.#e(),a=this.#i(),r=s/this.#t.lastDistance;this.#t.lastDistance=s;let o=this.toTargetCoords(a),l=o.x-this.#t.lastMidpoint.x,h=o.y-this.#t.lastMidpoint.y;this.#t.lastMidpoint=o,this.#n({deltaX:l,deltaY:h}),this.#s(r,o)};#s(t,i){t!==1&&this.dispatch("zoom",{x:i.x,y:i.y,factor:t})}#n(t){t.deltaX===0&&t.deltaY===0||this.dispatch("pan",t)}},$t=class extends O{onWheel=e=>e.preventDefault();#t=e=>e.preventDefault();onStart=()=>{this.element.style.touchAction="none",this.element.addEventListener("gesturestart",this.#t,{passive:!1}),this.element.addEventListener("gesturechange",this.#t,{passive:!1})};onStop=()=>{this.element.style.touchAction="",this.element.removeEventListener("gesturestart",this.#t),this.element.removeEventListener("gesturechange",this.#t)};dispose=this.onStop},Rt=class extends O{constructor(...e){super(...e),Pt({proControlSchema:!1,zoomFactor:.1,lockControlSchema:!1},this.options)}onWheel=e=>{let t=this.options;if(!t.proControlSchema&&!t.lockControlSchema&&(e.ctrlKey||e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&(t.proControlSchema=!0),t.proControlSchema)if(e.ctrlKey){let i=1-t.zoomFactor*e.deltaY,n=this.toTargetCoords({x:e.clientX,y:e.clientY});this.#t(i,n)}else e.shiftKey&&Math.abs(e.deltaX)<=Math.abs(e.deltaY)?this.#e({deltaX:-e.deltaY,deltaY:-e.deltaX}):this.#e({deltaX:-e.deltaX,deltaY:-e.deltaY});else{let i=1-t.zoomFactor/20*e.deltaY,n=this.toTargetCoords({x:e.clientX,y:e.clientY});this.#t(i,n)}};#t(e,t){this.dispatch("zoom",{x:t.x,y:t.y,factor:e})}#e(e){this.dispatch("pan",e)}},At=class extends O{#t={};#e=null;constructor(...e){super(...e);let t=this.options.lubricator;t&&Object.entries(t).forEach(([i,n])=>{let s={sample:{},fields:{}};Object.keys(n.fields).forEach(a=>{s.fields[a]={catch:1,release:1}}),this.#t[i]=s,this.modifiers[i]=this.#i(s,n)})}onStart=()=>{this.#e=requestAnimationFrame(this.#n)};onStop=()=>{this.#e&&cancelAnimationFrame(this.#e),this.#e=null,Object.values(this.#t).forEach(e=>{Object.values(e.fields).forEach(t=>{t.release=1,t.catch=1})})};#i=(e,t)=>i=>i.lubricated?!0:(e.sample=i,this.#s(e.fields,t.fields,i),!1);#s=(e,t,i)=>{Object.entries(e).forEach(([n,s])=>{if(typeof i[n]!="number")return;let a=t[n].countType;a==="sum"?s.catch+=i[n]:a==="product"&&(s.catch*=i[n])})};#n=()=>{let e=this.#t,t=this.options.lubricator;t&&(Object.entries(e).forEach(([i,n])=>{let s=n.sample;s.lubricated=!0;let a=!1;for(let[r,o]of Object.entries(n.fields)){if(o.catch===1)continue;let l=t[i].fields[r].countType,h,c;if(l==="sum"?(c=o.catch-o.release,h=Math.abs(c)):(c=o.catch/o.release,h=this.#a(c)-1),h<=t[i].fields[r].diminishBoundary){a||=!0,s[r]=c,o.release=1,o.catch=1;continue}let d;l==="sum"?(d=c*t[i].decayFactor,o.release+=d):(d=c**+t[i].decayFactor,o.release*=d),s[r]=d,a=!0}a&&this.dispatch(i,s)}),this.#e=requestAnimationFrame(this.#n))};#a=e=>e>1?e:1/e;modifiers={}};const et={decayFactor:.25,fields:{deltaX:{countType:"sum",diminishBoundary:.5},deltaY:{countType:"sum",diminishBoundary:.5}}},Ft=et,Yt={decayFactor:.25,fields:{factor:{countType:"product",diminishBoundary:.01}}};var Xt=class{#t;#e=new Map;#i={};#s={};#n;#a={};options;get#o(){if(!this.#n)throw Error("[Pointeract] Window is not defined.");return this.#n}constructor(t,i){let n=i||[];this.#n=t.element.ownerDocument.defaultView,this.#t=t.element,t.coordinateOutput||="relative",this.options=t,n.forEach(s=>{let a=new s(this.#m,this.dispatch,this.#u,this.#p,this.#o,this.#e,this.#t,this.options);Object.assign(a,{options:t}),this.#i[s.name]=a})}on=(t,i)=>(this.#a[t]||(this.#a[t]=new Set),this.#a[t]?.add(i),this);off=(t,i)=>(this.#a[t]?.delete(i),this);#u=t=>{let i=Error("[Pointeract] Invalid pointer index.");if(t<0||t>=this.#e.size)throw i;let n=0;for(let s of this.#e.values()){if(n===t)return s;n++}throw i};#p=t=>{if(this.options.coordinateOutput==="absolute")return t;let i=this.#t.getBoundingClientRect();return t.x-=i.left,t.y-=i.top,this.options.coordinateOutput==="relative"||(t.x/=i.width,t.y/=i.height),t};dispatch=(...t)=>{let i=t[0],n=t[1],s=!0;for(let r of Object.values(this.#i))if(!(!r.modifiers||!(i in r.modifiers))&&(s=n===void 0?r.modifiers[i]():r.modifiers[i](n),s===!1))return;let a;a=s===!0?n:s,this.#a[i]?.forEach(r=>r(a))};#m=t=>{Object.defineProperties(this,Object.getOwnPropertyDescriptors(t))};#r=(t,...i)=>{Object.values(this.#i).forEach(n=>{let s=n[t];s&&s(...i)})};#l=t=>{t.isPrimary&&this.#e.clear();let i={records:[{x:t.clientX,y:t.clientY,timestamp:Date.now()}],target:t.target,index:this.#e.size};this.#e.set(t.pointerId,i),this.#r("onPointerDown",t,i,this.#e)};#h=t=>{let i=this.#e.get(t.pointerId);i&&(i.records.push({x:t.clientX,y:t.clientY,timestamp:Date.now()}),this.#r("onPointerMove",t,i,this.#e))};#c=t=>{let i=this.#e.get(t.pointerId);i&&(this.#e.delete(t.pointerId),this.#r("onPointerUp",t,i,this.#e))};#d=t=>this.#r("onWheel",t);stop=t=>{let i=()=>{this.#t.removeEventListener("pointerdown",this.#l),this.#o.removeEventListener("pointermove",this.#h),this.#o.removeEventListener("pointerup",this.#c),this.#t.removeEventListener("wheel",this.#d),this.#r("onStop")},n=s=>{if(!(s.name in this.#i))return;let a=this.#i[s.name];a.onStop&&a.onStop(),this.#s[s.name]=a,delete this.#i[s.name]};return t?t.forEach(s=>{n(s)}):i(),this};start=t=>{let i=()=>{this.#t.addEventListener("pointerdown",this.#l),this.#o.addEventListener("pointermove",this.#h),this.#o.addEventListener("pointerup",this.#c),this.#t.addEventListener("wheel",this.#d,{passive:!1}),this.#r("onStart")},n=s=>{if(!(s.name in this.#s))return;let a=this.#s[s.name];a.onStart&&a.onStart(),this.#i[s.name]=a,delete this.#s[s.name]};return t?t.forEach(s=>{n(s)}):i(),this};dispose=()=>{this.stop(),this.#n=null,this.#r("dispose"),this.#a={}}},A=class extends b{pointeract;DM;onClick=p.makeHook();constructor(...e){super(...e),this.DM=this.container.get(x);let t=Object.assign(this.options.pointeract??{},{coordinateOutput:"relative",element:this.DM.data.container,lubricator:{pan:et,zoom:Yt,drag:Ft}});this.pointeract=new Xt(t,[It,Lt,Rt,$t,Tt,At]);let i=this.container.get(it);i.onInteractionStart.subscribe(this.stopInteract),i.onInteractionEnd.subscribe(this.startInteract),this.augment({pan:this.pan,panToCoords:this.panToCoords,zoom:this.zoom,zoomToScale:this.zoomToScale}),this.onStart(this.start),this.onDispose(this.dispose)}start=()=>{this.pointeract.on("pan",this.onPan).on("drag",this.onPan).on("zoom",this.onZoom).on("trueClick",this.onTrueClick).start()};startInteract=()=>{this.pointeract.start()};stopInteract=()=>{this.pointeract.stop()};onPan=e=>{this.truePan({x:e.deltaX,y:e.deltaY})};onZoom=e=>{this.trueZoom(e.factor,e)};trueZoom=(e,t)=>{let i=Math.max(Math.min(this.DM.data.scale*e,20),.05);if(i===this.DM.data.scale)return;let n=i/this.DM.data.scale,s=this.C2C(t);this.DM.data.offsetX=t.x-s.x*n,this.DM.data.offsetY=t.y-s.y*n,this.DM.data.scale=i};truePan=({x:e,y:t})=>{this.DM.data.offsetX=this.DM.data.offsetX+e,this.DM.data.offsetY=this.DM.data.offsetY+t};zoom=(e,t)=>{this.pointeract.dispatch("zoom",{factor:e,...t})};pan=({x:e,y:t})=>{this.pointeract.dispatch("pan",{deltaX:e,deltaY:t})};zoomToScale=(e,t)=>{let i=e/this.DM.data.scale;this.pointeract.dispatch("zoom",{factor:i,...t})};panToCoords=({x:e,y:t})=>{this.pointeract.dispatch("pan",{deltaX:e-this.DM.data.offsetX,deltaY:t-this.DM.data.offsetY})};C2C=({x:e,y:t})=>({x:e-this.DM.data.offsetX,y:t-this.DM.data.offsetY});onTrueClick=e=>{let t=e.target;if(this.isUIControl(t))return;let i=this.findNodeId(t);this.onClick(i)};isUIControl=e=>e?e.closest(".controls")||e.closest("button")||e.closest("input"):!1;findNodeId=e=>{if(!e)return null;let t=e;for(;(!t.id||t.id==="")&&t.parentElement;)t=t.parentElement;return t.id==="overlays"||!t.id||t.id===""?null:t.id};dispose=()=>this.pointeract.dispose()};const jt={markdown:/\.(md|mdx|markdown|txt)$/i,image:/\.(png|jpg|jpeg|gif|svg|webp|avif|bmp|ico|heic|heif)$/i,audio:/\.(mp3|wav|ogg|opus|aac|m4a|flac)$/i,video:/\.(mp4|webm|ogv|mov|m3u8|mpd)$/i},Ht=["markdown","image","audio","video"];var it=class extends b{_overlaysLayer=document.createElement("div");overlays={};selectedId=null;aborted=!1;eventListeners={};DM;SM;parse;componentDict={text:(t,i)=>{t.classList.add("JCV-markdown-content");let n=document.createElement("div");n.innerHTML=i,n.classList.add("JCV-parsed-content-wrapper"),t.appendChild(n)},markdown:async(t,i)=>{t.classList.add("JCV-markdown-content");let n=document.createElement("div");n.textContent="Loading...",n.classList.add("JCV-parsed-content-wrapper"),t.appendChild(n);let s;try{let a=await(await fetch(i)).text(),r=a.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);s=r?await this.parse(r[2]):await this.parse(a)}catch(a){console.error("[JSON Canvas Viewer] Failed to load markdown:",a),s="Failed to load content."}n.innerHTML=s},link:(t,i)=>{let n=document.createElement("iframe");n.src=i,n.sandbox="allow-scripts allow-same-origin",n.className="JCV-link-iframe",n.loading="lazy",t.appendChild(n)},audio:(t,i)=>{let n=document.createElement("audio");n.className="JCV-audio",n.src=i,n.controls=!0,t.appendChild(n)},image:(t,i)=>{let n=document.createElement("img");n.className="JCV-img",n.src=i,n.loading="lazy",t.appendChild(n)},video:(t,i)=>{let n=document.createElement("video");n.className="JCV-video",n.src=i,n.controls=!0,t.appendChild(n)}};get overlaysLayer(){if(!this._overlaysLayer)throw v;return this._overlaysLayer}onInteractionStart=p.makeHook();onInteractionEnd=p.makeHook();onNodeActive=p.makeHook();onNodeLosesActive=p.makeHook();constructor(...t){super(...t),this.parse=this.options.parser||(n=>n),this.DM=this.container.get(x),this.SM=this.container.get(k),this.container.get(z).onRefresh.subscribe(this.updateOverlays),this.SM.onChangeTheme.subscribe(this.themeChanged),this._overlaysLayer=document.createElement("div"),this._overlaysLayer.className="JCV-overlays",this._overlaysLayer.id="overlays",this.DM.data.container.appendChild(this.overlaysLayer);let i=this.options.nodeComponents;i&&Object.assign(this.componentDict,i),this.augment({onNodeActive:this.onNodeActive,onNodeLosesActive:this.onNodeLosesActive}),this.onStart(this.start),this.onRestart(this.restart),this.onDispose(this.dispose)}start=()=>{this.container.get(A).onClick.subscribe(this.select),this.renderOverlays()};restart=()=>{this.clearOverlays(),this.renderOverlays()};renderOverlays=()=>{let t=async i=>{switch(i.type){case"text":this.createOverlay(i,await this.parse(i.text),"text");break;case"file":for(let n of Ht)if(i.file.match(jt[n])){this.createOverlay(i,i.file,n);break}break;case"link":this.createOverlay(i,i.url,"link");break}};Object.values(this.DM.data.nodeMap).forEach(async i=>{await t(i.ref)})};themeChanged=()=>{Object.values(this.overlays).forEach(t=>{let i=this.DM.data.nodeMap[t.id].ref,n=this.SM.getColor(i.color);this.setOverlayColor(t,n)})};select=t=>{let i=this.selectedId,n=i?this.overlays[i]:null,s=t?this.overlays[t]:null;if(n&&i){n.classList.remove("JCV-active");let a=this.DM.data.nodeMap[i];this.onNodeLosesActive(a.ref),a.onLoseActive?.()}if(s&&t){s.classList.add("JCV-active"),this.onInteractionStart();let a=this.DM.data.nodeMap[t];this.onNodeActive(a.ref),a.onActive?.()}else this.onInteractionEnd();this.selectedId=t};updateOverlays=()=>{let t=this.DM.data;this.overlaysLayer.style.transform=`translate(${t.offsetX}px, ${t.offsetY}px) scale(${t.scale})`};createOverlay=(...t)=>{if(this.aborted)return;let i=t[0],n=this.overlays[i.id];if(!n){if(n=this.constructOverlay(...t),this.aborted)return;this.overlaysLayer.appendChild(n),this.overlays[i.id]=n,n.style.left=`${i.x}px`,n.style.top=`${i.y}px`,n.style.width=`${i.width}px`,n.style.height=`${i.height}px`}};constructOverlay=(...t)=>{let i=t[0],n=document.createElement("div");n.classList.add("JCV-overlay-container"),n.id=i.id,this.setOverlayColor(n,this.SM.getColor(i.color));let s=document.createElement("div");s.classList.add("JCV-content"),n.appendChild(s);let a=document.createElement("div");a.className="JCV-click-layer",n.appendChild(a);let r=document.createElement("div");r.className="JCV-overlay-border",n.appendChild(r);let o=this.DM.data.nodeMap[i.id];o.onActive=p.makeHook(),o.onLoseActive=p.makeHook(),o.onBeforeUnmount=p.makeHook(),this.componentDict[t[2]](s,t[1],t[0],o.onBeforeUnmount,o.onActive,o.onLoseActive);let l=()=>{i.id===this.selectedId&&this.onInteractionStart()},h=()=>{i.id===this.selectedId&&this.onInteractionEnd()};return n.addEventListener("pointerenter",l),n.addEventListener("pointerleave",h),n.addEventListener("touchstart",l),n.addEventListener("touchend",h),this.eventListeners[i.id]=[l,h],n};setOverlayColor=(t,i)=>{Object.entries(i).forEach(([n,s])=>{t.style.setProperty(`--overlay-${n}`,s)})};clearOverlays=()=>{Object.entries(this.overlays).forEach(([t,i])=>{if(this.DM.data.nodeMap[t].onBeforeUnmount?.(),this.eventListeners[t]){let n=this.eventListeners[t][0],s=this.eventListeners[t][1];if(!n||!s)throw v;i.removeEventListener("pointerenter",n),i.removeEventListener("pointerleave",s),i.removeEventListener("touchstart",n),i.removeEventListener("touchend",s),this.eventListeners[t][0]=null,this.eventListeners[t][1]=null}i.remove(),delete this.overlays[t]})};dispose=()=>{this.aborted=!0,this.clearOverlays(),this.overlaysLayer.remove(),this._overlaysLayer=null}},Wt=class extends b{_canvas;ctx;DM;SM;zoomInOptimize={lastDrawnScale:0,lastDrawnViewport:{left:0,right:0,top:0,bottom:0},timeout:null,lastCallTime:0};get canvas(){if(!this._canvas)throw v;return this._canvas}constructor(...e){super(...e);let t=this.container.get(z);this.SM=this.container.get(k),t.onRefresh.subscribe(this.redraw),t.onResize.subscribe(this.optimizeDPR),this.DM=this.container.get(x),this._canvas=document.createElement("canvas"),this._canvas.className="JCV-main-canvas",this.ctx=this._canvas.getContext("2d"),this.DM.data.container.appendChild(this._canvas),this.onDispose(this.dispose)}optimizeDPR=()=>{let e=this.DM.data.container;p.resizeCanvasForDPR(this.canvas,e.offsetWidth,e.offsetHeight)};redraw=()=>{let e=this.DM.data.offsetX,t=this.DM.data.offsetY,i=this.DM.data.scale,n=this.getCurrentViewport(e,t,i);if(!this.options.zoomInOptimization){this.trueRedraw(e,t,i,n);return}this.zoomInOptimize.timeout&&(clearTimeout(this.zoomInOptimize.timeout),this.zoomInOptimize.timeout=null);let s=Date.now();if(this.isInside(n,this.zoomInOptimize.lastDrawnViewport)&&i!==this.zoomInOptimize.lastDrawnScale&&s-this.zoomInOptimize.lastCallTime<500){this.zoomInOptimize.timeout=window.setTimeout(()=>{this.trueRedraw(e,t,i,n),this.zoomInOptimize.lastCallTime=s,this.zoomInOptimize.timeout=null},60),this.fakeRedraw(n,i);return}this.zoomInOptimize.lastCallTime=s,this.trueRedraw(e,t,i,n)};trueRedraw(e,t,i,n){this.zoomInOptimize.lastDrawnViewport=n,this.zoomInOptimize.lastDrawnScale=i,this.canvas.style.transform="",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.save(),this.drawGridDots(i,e,t),this.ctx.translate(e,t),this.ctx.scale(i,i),Object.values(this.DM.data.nodeMap).forEach(s=>{if(this.isOutside(s.box,n))return;let a=s.ref;a.type==="file"?this.drawFile(s):a.type==="group"&&this.drawGroup(a,i)}),Object.values(this.DM.data.edgeMap).forEach(s=>{this.isOutside(s.box,n)||this.drawEdge(s)}),this.ctx.restore()}fakeRedraw(e,t){let i=t/this.zoomInOptimize.lastDrawnScale,n=(this.zoomInOptimize.lastDrawnViewport.left-e.left)*t,s=(this.zoomInOptimize.lastDrawnViewport.top-e.top)*t;this.canvas.style.transform=`translate(${n}px, ${s}px) scale(${i})`}isInside=(e,t)=>e.left>t.left&&e.top>t.top&&e.right<t.right&&e.bottom<t.bottom;isOutside=(e,t)=>e.right<t.left||e.bottom<t.top||e.left>t.right||e.top>t.bottom;getCurrentViewport=(e,t,i)=>{let n=-e/i,s=-t/i,a=this.DM.data.container;return{left:n,top:s,right:n+a.clientWidth/i,bottom:s+a.clientHeight/i}};drawLabelBar=(e,t,i,n,s,a)=>{let r=30*a,o=6*a,l=8*a,h=16*a,c=6*a;this.ctx.save(),this.ctx.translate(e,t),this.ctx.scale(1/a,1/a),this.ctx.font=`${h}px 'Inter', sans-serif`;let d=this.ctx.measureText(i).width+2*c;this.ctx.translate(0,-r-l),this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.moveTo(o,0),this.ctx.lineTo(d-o,0),this.ctx.quadraticCurveTo(d,0,d,o),this.ctx.lineTo(d,r-o),this.ctx.quadraticCurveTo(d,r,d-o,r),this.ctx.lineTo(o,r),this.ctx.quadraticCurveTo(0,r,0,r-o),this.ctx.lineTo(0,o),this.ctx.quadraticCurveTo(0,0,o,0),this.ctx.closePath(),this.ctx.fill(),this.ctx.fillStyle=s,this.ctx.fillText(i,c,r*.65),this.ctx.restore()};drawNodeBackground=e=>{let t=this.SM.getColor(e.color);this.ctx.globalAlpha=1,this.ctx.fillStyle=t.background,p.drawRoundRect(this.ctx,e.x+1,e.y+1,e.width-2,e.height-2,12),this.ctx.fill(),this.ctx.strokeStyle=t.border,this.ctx.lineWidth=2,p.drawRoundRect(this.ctx,e.x,e.y,e.width,e.height,12),this.ctx.stroke()};drawGroup=(e,t)=>{if(this.drawNodeBackground(e),e.label){let i=this.SM.getColor(e.color);this.drawLabelBar(e.x,e.y,e.label,i.active,i.text,t)}};drawFile=e=>{this.ctx.fillStyle=this.SM.getColor().text;let t=e.ref;this.ctx.font="16px sans-serif",this.ctx.fillText(e.fileName??"",t.x+5,t.y-10)};drawEdge=e=>{let t=e.ref,i=this.DM.data.nodeMap[t.fromNode].ref,n=this.DM.data.nodeMap[t.toNode].ref,s=p.getAnchorCoord,{x:a,y:r}=s(i,t.fromSide),{x:o,y:l}=s(n,t.toSide),h=this.SM.getColor(t.color),[c,d,u,f]=[0,0,0,0];if(e.controlPoints?[c,d,u,f]=e.controlPoints:([c,d,u,f]=this.getControlPoints(a,r,o,l,t.fromSide,t.toSide),e.controlPoints=[c,d,u,f]),this.drawCurvedPath(a,r,o,l,c,d,u,f,h.active),this.drawArrowhead(o,l,u,f,h.active),t.label){let m=.5,w=(1-m)**3*a+3*(1-m)**2*m*c+3*(1-m)*m*m*u+m**3*o,E=(1-m)**3*r+3*(1-m)**2*m*d+3*(1-m)*m*m*f+m**3*l;this.ctx.font="18px sans-serif";let D=this.ctx.measureText(t.label).width+16;this.ctx.fillStyle=h.active,this.ctx.beginPath(),p.drawRoundRect(this.ctx,w-D/2,E-20/2-2,D,20,4),this.ctx.fill(),this.ctx.fillStyle=h.text,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(t.label,w,E-2),this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic"}};getControlPoints=(e,t,i,n,s,a)=>{let r=i-e,o=n-t,l=((f,m,w)=>Math.max(m,Math.min(w,f)))((Math.min(Math.abs(r),Math.abs(o))+.3*Math.max(Math.abs(r),Math.abs(o)))*.5,60,300),h=e,c=t,d=i,u=n;switch(s){case"top":c=t-l;break;case"bottom":c=t+l;break;case"left":h=e-l;break;case"right":h=e+l;break}switch(a){case"top":u=n-l;break;case"bottom":u=n+l;break;case"left":d=i-l;break;case"right":d=i+l;break}return[h,c,d,u]};drawGridDots=(e,t,i)=>{let n=10*2**-Math.floor(Math.log2(e))*e,s=this.canvas.width,a=this.canvas.height,r=t%n,o=i%n;this.ctx.fillStyle=this.SM.getNamedColor("dots");for(let l=r;l<=s;l+=n)for(let h=o;h<=a;h+=n)this.ctx.beginPath(),this.ctx.arc(l,h,1,0,2*Math.PI),this.ctx.fill()};drawCurvedPath=(e,t,i,n,s,a,r,o,l)=>{this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.bezierCurveTo(s,a,r,o,i,n),this.ctx.strokeStyle=l,this.ctx.lineWidth=2,this.ctx.stroke()};drawArrowhead=(e,t,i,n,s)=>{let a=e-i,r=t-n,o=Math.sqrt(a*a+r*r);if(o===0)return;let l=a/o,h=r/o,c=e-l*12-h*4,d=t-h*12+l*4,u=e-l*12+h*4,f=t-h*12-l*4;this.ctx.beginPath(),this.ctx.fillStyle=s,this.ctx.moveTo(e,t),this.ctx.lineTo(c,d),this.ctx.lineTo(u,f),this.ctx.closePath(),this.ctx.fill()};dispose=()=>{this.zoomInOptimize.timeout&&(clearTimeout(this.zoomInOptimize.timeout),this.zoomInOptimize.timeout=null),this.canvas.remove(),this._canvas=null}};function F(e){return typeof e=="function"}function qt(e){const t=[];let i=e;for(;Object.getPrototypeOf(i).name;){const n=Object.getPrototypeOf(i);t.push(n),i=n}return t}function B(e){if(e==null)throw Error("Expected value to be not null or undefined");return e}function Gt(e,t=2){const i=[];return e.some((n,s)=>{if(s+t>e.length)return!0;i.push(e.slice(s,s+t))}),i}async function Ut(e,t,i){for(;;)try{return await t()}catch(n){if(!(n instanceof e))throw n;await i(n)}}function X(e,t){if(e.length>1)throw t();const i=e.at(0);if(i===void 0)throw t();return i}function Zt(e){throw new Error("invalid state")}async function Kt(e){return await new Promise(t=>t(e()))}function N(e){return F(e)}function R(e){return"provide"in e&&"useClass"in e}function Qt(e){return"provide"in e&&"useValue"in e}function nt(e){return"provide"in e&&"useFactory"in e}function j(e){return nt(e)&&e.async===!0}function y(e){return"provide"in e&&"useExisting"in e}function P(e){return"provide"in e&&"multi"in e&&e.multi===!0}class st{description;options;constructor(t,i){this.description=t,this.options=i}toString(){return`InjectionToken "${String(this.description)}"`}}function H(e){return F(e)}function te(e){return e instanceof st}function C(e){return F(e)?e.name:typeof e=="symbol"?e.description??String(e):e instanceof st?e.toString():e}function I(e){return N(e)?e:e.provide}const at=Symbol("injectable");function ee(e){return e.hasOwnProperty(at)}function ie(e){return e[at]}class ne{container;underConstruction=[];constructor(t){this.container=t}construct(t,i){if(j(t))throw new W(i);try{if(this.underConstruction.includes(t)){const n=[...this.underConstruction,t].map(I).map(C);throw new q(n)}return this.underConstruction.push(t),this.doConstruct(t)}finally{this.underConstruction.pop()}}async constructAsync(t){try{if(this.underConstruction.includes(t)){const i=[...this.underConstruction,t].map(I).map(C);throw new q(i)}if(this.underConstruction.push(t),j(t))return[await t.useFactory(this.container)];if(R(t)||N(t)){const i=N(t)?()=>[new t]:()=>[new t.useClass];return Ut(W,async()=>i(),async n=>{await this.container.getAsync(n.token,{multi:!0,optional:!0})})}return y(t)?await this.container.getAsync(t.useExisting,{multi:!0}):this.doConstruct(t)}finally{this.underConstruction.pop()}}doConstruct(t){return N(t)?[new t]:R(t)?[new t.useClass]:Qt(t)?[t.useValue]:nt(t)?[t.useFactory(this.container)]:y(t)?this.container.get(t.useExisting,{multi:!0}):Zt()}}class W extends Error{token;constructor(t){super(`Some providers for token ${C(t)} are async, please use injectAsync() or container.getAsync() instead`),this.token=t}}class q extends Error{constructor(t){super(`Detected circular dependency: ${t.join(" -> ")}. Please change your dependency graph or use lazy injection instead.`)}}class se{run(){throw new U}runAsync(){throw new U}}class ae{container;constructor(t){this.container=t}run(t){const i=V;try{return V=this,t(this.container)}finally{V=i}}async runAsync(t){const i=V;try{return V=this,await t(this.container)}finally{V=i}}}let V=new se;function G(e){return new ae(e)}class U extends Error{constructor(){super("You can only invoke inject() or injectAsync() within an injection context")}}class L{providers=new Map;singletons=new Map;parent;factory;constructor(t){this.parent=t,this.factory=new ne(this),this.bind({provide:L,useValue:this})}bindAll(...t){return t.forEach(i=>this.bind(i)),this}bind(t){const i=I(t);if(y(t)&&t.provide===t.useExisting)throw Error(`The provider for token ${C(i)} with "useExisting" cannot refer to itself.`);if(!y(t)&&this.singletons.has(i))throw Error(`Cannot bind a new provider for ${C(i)}, since the existing provider was already constructed.`);if(y(t)&&P(t)&&this.existingProviderAlreadyProvided(i,t.useExisting))return this;const n=this.providers.get(i)??[],s=P(t);if(s&&n.some(a=>!P(a)))throw Error(`Cannot bind ${C(i)} as multi-provider, since there is already a provider which is not a multi-provider.`);if(!s&&n.some(a=>P(a))&&!n.every(y))throw Error(`Cannot bind ${C(i)} as provider, since there are already provider(s) that are multi-providers.`);return this.providers.set(i,s?[...n,t]:[t]),H(i)&&(R(t)||N(t))&&Gt([i,...qt(i)]).forEach(([a,r])=>{const o={provide:r,useExisting:a,multi:!0},l=this.providers.get(r)??[];this.existingProviderAlreadyProvided(r,a)||this.providers.set(r,[...l,o])}),this}unbind(t){const i=I(t);return this.providers.delete(i),this.singletons.delete(i),this}unbindAll(){return this.providers.clear(),this.singletons.clear(),this}get(t,i){if(i?.lazy??!1)return()=>this.get(t,{...i,lazy:!1});this.autoBindIfNeeded(t);const s=i?.optional??!1;if(!this.providers.has(t)){if(this.parent)return this.parent.get(t,{...i,lazy:!1});if(s)return;throw Error(`No provider(s) found for ${C(t)}`)}const a=B(this.providers.get(t));this.singletons.has(t)||G(this).run(()=>{const l=a.flatMap(h=>this.factory.construct(h,t));this.singletons.set(t,l)});const r=B(this.singletons.get(t));return i?.multi??!1?r:X(r,()=>Error(`Requesting a single value for ${C(t)}, but multiple values were provided. Consider passing "{ multi: true }" to inject all values, or adjust your bindings accordingly.`))}getAsync(t,i){return i?.lazy??!1?()=>this.getAsync(t,{...i,lazy:!1}):Kt(async()=>{this.autoBindIfNeeded(t);const s=i?.optional??!1;if(!this.providers.has(t)){if(this.parent)return this.parent.getAsync(t,{...i,lazy:!1});if(s)return;throw Error(`No provider(s) found for ${C(t)}`)}const a=B(this.providers.get(t));this.singletons.has(t)||await G(this).runAsync(async()=>{const l=await Promise.all(a.map(h=>this.factory.constructAsync(h)));this.singletons.set(t,l.flat())});const r=B(this.singletons.get(t));return i?.multi??!1?r:X(r,()=>new Error(`Requesting a single value for ${C(t)}, but multiple values were provided. Consider passing "{ multi: true }" to inject all values, or adjust your bindings accordingly.`))})}createChild(){return new L(this)}has(t){return this.providers.has(t)||(this.parent?.has(t)??!1)}autoBindIfNeeded(t){if(!this.singletons.has(t)){if(H(t)&&ee(t))ie(t).filter(n=>!this.providers.has(n)).forEach(n=>{this.bind({provide:n,useClass:n,multi:!0})});else if(!this.providers.has(t)&&te(t)&&t.options?.factory){const i=t.options.async;i?i&&this.bind({provide:t,async:!0,useFactory:t.options.factory}):this.bind({provide:t,async:!1,useFactory:t.options.factory})}}}existingProviderAlreadyProvided(t,i){return(this.providers.get(t)??[]).some(n=>y(n)&&n.provide===t&&n.useExisting===i)}}const re=[x,k,z,it,A,Wt];var oe=class{allModules;IO=null;started=!1;disposed=!1;options;container;onDispose=p.makeHook(!0);onStart=p.makeHook();onRestart=p.makeHook();constructor(e,t){this.container=new L,this.options=e;let i=s=>{this.container.bind({provide:s,useFactory:()=>new s(this.container,this.options,this.onStart,this.onDispose,this.onRestart,this.augment)})};this.allModules=[...re,...t??[]],this.allModules.forEach(i),this.allModules.forEach(s=>{this.container.get(s)});let n=this.options.loading??"normal";n==="normal"?this.load():n==="lazy"&&(this.IO=new IntersectionObserver(this.onVisibilityCheck,{root:null,rootMargin:"50px",threshold:0}),this.IO.observe(this.options.container))}onVisibilityCheck=e=>{e.forEach(t=>{if(t.isIntersecting){this.load(),this.IO?.disconnect(),this.IO=null;return}})};augment=e=>{let t=Object.getOwnPropertyDescriptors(e);Object.defineProperties(this,t)};load=e=>{this.disposed||(e&&Object.assign(this.options,e),this.started?this.onRestart():(this.onStart(),this.started=!0))};dispose=()=>{if(!this.started||this.disposed)return;this.IO?.disconnect(),this.IO=null;let e=this.options.container;for(;e.firstChild;)e.firstChild.remove();this.onDispose(),this.container.unbindAll(),this.disposed=!0}};async function le(e){let t=async a=>await he(a,e.parser??(r=>r)),i=e.canvas.nodes??[],n=e.attachmentDir??"./";i.forEach(a=>{if(a.type==="file"&&!a.file.startsWith("http")){let r=a.file.split("/").pop()??"";e.attachments?.[r]?a.file=e.attachments[r]:a.file=n+r}});let s=[];return await Promise.all(i.map(async a=>s.push(await t(a)))),s.join("")}async function he(e,t){switch(e.type){case"text":return await t(e.text);case"file":return await ce(e,t);case"link":return`<a href="${e.url}" target="_blank" rel="nofollow">${e.url}</a>`;default:return""}}async function ce(e,t){return e.file.match(/\.md$/i)?await de(e.file,t):e.file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)?`<img src="${e.file}" alt="${e.file.split("/").pop()}">`:e.file.match(/\.(mp3|wav)$/i)?`<audio src="${e.file}" controls></audio>`:""}async function de(e,t){let i;try{let n=await(await fetch(e)).text(),s=n.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);i=s?await t(s[2]):await t(n)}catch{i="Failed to load content."}return i}var ue=`.JSON-Canvas-Viewer > .JCV-controls {
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
`;const Z='<svg viewBox="-5.28 -5.28 34.56 34.56" fill="none"><path d="M4 9V5.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C4.76 4 5.04 4 5.6 4H9M4 15v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C4.76 20 5.04 20 5.6 20H9m6-16h3.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C20 4.76 20 5.04 20 5.6V9m0 6v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C19.24 20 18.96 20 18.4 20H15" stroke-width="2.4" stroke-linecap="round"/></svg>';var Se=class extends b{_controlsPanel=null;_toggleCollapseBtn=null;_toggleFullscreenBtn=null;_zoomOutBtn=null;_zoomSlider=null;_zoomInBtn=null;_resetViewBtn=null;DM;IH;collapsed;get controlsPanel(){if(this._controlsPanel===null)throw v;return this._controlsPanel}get toggleCollapseBtn(){if(this._toggleCollapseBtn===null)throw v;return this._toggleCollapseBtn}get toggleFullscreenBtn(){if(this._toggleFullscreenBtn===null)throw v;return this._toggleFullscreenBtn}get zoomOutBtn(){if(this._zoomOutBtn===null)throw v;return this._zoomOutBtn}get zoomSlider(){if(this._zoomSlider===null)throw v;return this._zoomSlider}get zoomInBtn(){if(this._zoomInBtn===null)throw v;return this._zoomInBtn}get resetViewBtn(){if(this._resetViewBtn===null)throw v;return this._resetViewBtn}constructor(...e){super(...e),this.collapsed=this.options.controlsCollapsed??!1,this.DM=this.container.get(x),this.IH=this.container.get(A),this.DM.onToggleFullscreen.subscribe(this.updateFullscreenBtn),this.container.get(z).onRefresh.subscribe(this.updateSlider),this._controlsPanel=document.createElement("div"),this._controlsPanel.className="JCV-controls",this._controlsPanel.classList.toggle("JCV-collapsed",this.collapsed),p.applyStyles(this._controlsPanel,ue),this._toggleCollapseBtn=document.createElement("button"),this._toggleCollapseBtn.className="JCV-button JCV-collapse-button JCV-border-shadow-bg",this._toggleCollapseBtn.innerHTML='<svg viewBox="-3.6 -3.6 31.2 31.2" stroke-width=".4"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" /></svg>',this._controlsPanel.appendChild(this._toggleCollapseBtn);let t=document.createElement("div");t.className="JCV-controls-content",this._toggleFullscreenBtn=document.createElement("button"),this._toggleFullscreenBtn.className="JCV-button",this._toggleFullscreenBtn.innerHTML=Z,t.appendChild(this._toggleFullscreenBtn),this._zoomOutBtn=document.createElement("button"),this.zoomOutBtn.className="JCV-button",this._zoomOutBtn.innerHTML='<svg viewBox="-1.2 -1.2 26.4 26.4"><path d="M6 12h12" stroke-width="2" stroke-linecap="round" /></svg>',t.appendChild(this._zoomOutBtn),this._zoomSlider=document.createElement("input"),this._zoomSlider.type="range",this._zoomSlider.className="JCV-zoom-slider",this._zoomSlider.min="-30",this._zoomSlider.max="30",this._zoomSlider.value="0",t.appendChild(this._zoomSlider),this._zoomInBtn=document.createElement("button"),this._zoomInBtn.className="JCV-button",this._zoomInBtn.innerHTML='<svg viewBox="-1.2 -1.2 26.4 26.4"><path d="M6 12h12m-6-6v12" stroke-width="2" stroke-linecap="round" /></svg>',t.appendChild(this._zoomInBtn),this._resetViewBtn=document.createElement("button"),this._resetViewBtn.className="JCV-button",this._resetViewBtn.innerHTML='<svg viewBox="-6 -6 30 30" stroke-width=".08"><path d="m14.955 7.986.116.01a1 1 0 0 1 .85 1.13 8 8 0 0 1-13.374 4.728l-.84.84c-.63.63-1.707.184-1.707-.707V10h3.987c.89 0 1.337 1.077.707 1.707l-.731.731a6 6 0 0 0 8.347-.264 6 6 0 0 0 1.63-3.33 1 1 0 0 1 1.131-.848zM11.514.813a8 8 0 0 1 1.942 1.336l.837-.837c.63-.63 1.707-.184 1.707.707V6h-3.981c-.89 0-1.337-1.077-.707-1.707l.728-.729a6 6 0 0 0-9.98 3.591 1 1 0 1 1-1.98-.281A8 8 0 0 1 11.514.813Z" /></svg>',t.appendChild(this._resetViewBtn),this._controlsPanel.appendChild(t),this.DM.data.container.appendChild(this._controlsPanel),this._toggleCollapseBtn.addEventListener("click",this.toggleCollapse),this._zoomInBtn.addEventListener("click",this.zoomIn),this._zoomOutBtn.addEventListener("click",this.zoomOut),this._zoomSlider.addEventListener("input",this.slide),this._resetViewBtn.addEventListener("click",this.DM.resetView),this._toggleFullscreenBtn.addEventListener("click",this.toggleFullscreen),this.augment({toggleControlsCollapse:this.toggleCollapse}),this.onDispose(this.dispose)}toggleCollapse=()=>{this.collapsed=!this.collapsed,this.controlsPanel.classList.toggle("JCV-collapsed",this.collapsed),this.collapsed||this.updateSlider()};zoomIn=()=>this.IH.zoom(1.3,this.DM.middleViewer());zoomOut=()=>this.IH.zoom(1/1.3,this.DM.middleViewer());slide=()=>this.IH.trueZoom(1.1**Number(this.zoomSlider.value)/this.DM.data.scale,this.DM.middleViewer());updateFullscreenBtn=e=>{e==="enter"?this.toggleFullscreenBtn.innerHTML='<svg viewBox="-40.32 -40.32 176.64 176.64"><path d="M30 60H6a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0V66a5.997 5.997 0 0 0-6-6Zm60 0H66a5.997 5.997 0 0 0-6 6v24a6 6 0 0 0 12 0V72h18a6 6 0 0 0 0-12ZM66 36h24a6 6 0 0 0 0-12H72V6a6 6 0 0 0-12 0v24a5.997 5.997 0 0 0 6 6ZM30 0a5.997 5.997 0 0 0-6 6v18H6a6 6 0 0 0 0 12h24a5.997 5.997 0 0 0 6-6V6a5.997 5.997 0 0 0-6-6Z"/></svg>':this.toggleFullscreenBtn.innerHTML=Z};toggleFullscreen=()=>this.DM.toggleFullscreen();updateSlider=()=>{this.collapsed||(this.zoomSlider.value=String(this.scaleToSlider(this.DM.data.scale)))};scaleToSlider=e=>Math.log(e)/Math.log(1.1);dispose=()=>{this.toggleCollapseBtn.removeEventListener("click",this.toggleCollapse),this.zoomInBtn.removeEventListener("click",this.zoomIn),this.zoomOutBtn.removeEventListener("click",this.zoomOut),this.zoomSlider.removeEventListener("input",this.slide),this.resetViewBtn.removeEventListener("click",this.DM.resetView),this.toggleFullscreenBtn.removeEventListener("click",this.toggleFullscreen),this.controlsPanel.remove(),this._controlsPanel=null,this._toggleCollapseBtn=null,this._zoomInBtn=null,this._zoomOutBtn=null,this._zoomSlider=null,this._resetViewBtn=null,this._toggleFullscreenBtn=null}},pe=`.JSON-Canvas-Viewer > .JCV-minimap-container {
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
`,Oe=class extends b{_minimapCtx=null;_viewportRectangle=null;_minimap=null;_minimapContainer=null;_toggleMinimapBtn=null;minimapCache={scale:1,centerX:0,centerY:0};DM;SM;collapsed;get minimap(){if(this._minimap===null)throw v;return this._minimap}get minimapCtx(){if(this._minimapCtx===null)throw v;return this._minimapCtx}get viewportRectangle(){if(this._viewportRectangle===null)throw v;return this._viewportRectangle}get minimapContainer(){if(this._minimapContainer===null)throw v;return this._minimapContainer}get toggleMinimapBtn(){if(this._toggleMinimapBtn===null)throw v;return this._toggleMinimapBtn}constructor(...e){super(...e),this.collapsed=this.options.minimapCollapsed??!1,this.container.get(z).onRefresh.subscribe(this.updateViewportRectangle),this.DM=this.container.get(x),this.SM=this.container.get(k),this._minimapContainer=document.createElement("div"),this._minimapContainer.className="JCV-minimap-container",p.applyStyles(this._minimapContainer,pe),this._toggleMinimapBtn=document.createElement("button"),this._toggleMinimapBtn.className="JCV-button JCV-toggle-minimap JCV-collapse-button JCV-border-shadow-bg",this._toggleMinimapBtn.innerHTML='<svg viewBox="-3.6 -3.6 31.2 31.2" stroke-width=".4"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" /></svg>',this._minimapContainer.appendChild(this._toggleMinimapBtn),this._minimap=document.createElement("div"),this._minimap.className="JCV-minimap JCV-border-shadow-bg";let t=document.createElement("canvas");t.className="JCV-minimap-canvas",t.width=200,t.height=150,this._minimap.appendChild(t),this._minimapCtx=t.getContext("2d"),this._viewportRectangle=document.createElement("div"),this._viewportRectangle.className="JCV-viewport-rectangle",this._minimap.appendChild(this._viewportRectangle),this._minimapContainer.appendChild(this._minimap),this.DM.data.container.appendChild(this._minimapContainer),this._minimapContainer.classList.toggle("JCV-collapsed",this.collapsed),this._toggleMinimapBtn.addEventListener("click",this.toggleCollapse),p.resizeCanvasForDPR(t,t.width,t.height),this.augment({toggleMinimapCollapse:this.toggleCollapse}),this.onStart(this.start),this.onRestart(this.start),this.onDispose(this.dispose)}toggleCollapse=()=>{this.collapsed=!this.collapsed,this.minimapContainer.classList.toggle("JCV-collapsed",this.collapsed),this.collapsed||this.updateViewportRectangle()};start=()=>{let e=this.DM.data.nodeBounds;if(!e)return;let t=this.minimap.clientWidth,i=this.minimap.clientHeight,n=t/e.width,s=i/e.height;this.minimapCache.scale=Math.min(n,s)*.9,this.minimapCache.centerX=t/2,this.minimapCache.centerY=i/2,this.minimapCtx.clearRect(0,0,t,i),this.minimapCtx.save(),this.minimapCtx.translate(this.minimapCache.centerX,this.minimapCache.centerY),this.minimapCtx.scale(this.minimapCache.scale,this.minimapCache.scale),this.minimapCtx.translate(-e.centerX,-e.centerY);let a=this.DM.data.canvasData;for(let r of a.edges)this.drawMinimapEdge(r);for(let r of a.nodes)this.drawMinimapNode(r);this.minimapCtx.restore()};drawMinimapNode=e=>{let t=this.SM.getColor(e.color);this.minimapCtx.fillStyle=t.border,p.drawRoundRect(this.minimapCtx,e.x,e.y,e.width,e.height,25),this.minimapCtx.fill()};drawMinimapEdge=e=>{let t=this.DM.data.nodeMap,i=t[e.fromNode].ref,n=t[e.toNode].ref;if(!i||!n)return;let{x:s,y:a}=p.getAnchorCoord(i,e.fromSide),{x:r,y:o}=p.getAnchorCoord(n,e.toSide);this.minimapCtx.beginPath(),this.minimapCtx.moveTo(s,a),this.minimapCtx.lineTo(r,o),this.minimapCtx.strokeStyle=this.SM.getColor(e.color).active,this.minimapCtx.lineWidth=10,this.minimapCtx.stroke()};updateViewportRectangle=()=>{if(this.collapsed)return;let e=this.DM.data.nodeBounds,t=this.DM.data.container,i=this.DM.data.scale;if(!e)return;let n=t.clientWidth/i,s=t.clientHeight/i,a=-this.DM.data.offsetX/i+t.clientWidth/(2*i),r=-this.DM.data.offsetY/i+t.clientHeight/(2*i),o=this.minimapCache.centerX+(a-n/2-e.centerX)*this.minimapCache.scale,l=this.minimapCache.centerY+(r-s/2-e.centerY)*this.minimapCache.scale,h=n*this.minimapCache.scale,c=s*this.minimapCache.scale;this.viewportRectangle.style.left=`${o}px`,this.viewportRectangle.style.top=`${l}px`,this.viewportRectangle.style.width=`${h}px`,this.viewportRectangle.style.height=`${c}px`};dispose=()=>{this.toggleMinimapBtn.removeEventListener("click",this.toggleCollapse),this.minimapCtx.clearRect(0,0,this.minimap.clientWidth,this.minimap.clientHeight),this.minimapContainer.remove(),this._minimapContainer=null,this._toggleMinimapBtn=null,this._viewportRectangle=null,this._minimap=null}},me=`.JSON-Canvas-Viewer.JCV-numb, .JSON-Canvas-Viewer.JCV-numb * {
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
`,Ne=class extends b{_preventionContainer=null;preventMt=!1;DM;preventMistouch={record:!1,lastX:0,lastY:0,initialX:0,initialY:0};get preventionContainer(){if(this._preventionContainer===null)throw v;return this._preventionContainer}constructor(...e){super(...e);let t=document.createElement("div");t.className="JCV-prevention-banner JCV-border-shadow-bg",t.textContent=this.options.mistouchPreventerBannerText??"Click on to unlock.",this.DM=this.container.get(x),this._preventionContainer=document.createElement("div"),this._preventionContainer.className="JCV-prevention-container JCV-hidden JCV-full JCV-flex-center",p.applyStyles(this._preventionContainer,me),this._preventionContainer.appendChild(t),this.DM.data.container.appendChild(this._preventionContainer),this.options.preventMistouchAtStart&&this.startPrevention(),window.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this.augment({startMistouchPrevention:this.startPrevention,endMistouchPrevention:this.endPrevention}),this.onDispose(this.dispose)}onPointerDown=e=>{let t=this.DM.data.container.getBoundingClientRect();e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom?this.preventMt||this.startPrevention():this.preventMt&&(this.preventMistouch.initialX=e.clientX,this.preventMistouch.initialY=e.clientY,this.preventMistouch.lastX=e.clientX,this.preventMistouch.lastY=e.clientY,this.preventMistouch.record=!0)};onPointerMove=e=>{this.preventMistouch.record&&(this.preventMistouch.lastX=e.clientX,this.preventMistouch.lastY=e.clientY)};onPointerUp=()=>{this.preventMistouch.record&&(this.preventMistouch.record=!1,Math.abs(this.preventMistouch.lastX-this.preventMistouch.initialX)+Math.abs(this.preventMistouch.lastY-this.preventMistouch.initialY)<5&&this.endPrevention())};startPrevention=()=>{this.preventionContainer.classList.remove("JCV-hidden"),this.DM.data.container.classList.add("JCV-numb"),this.preventMt=!0};endPrevention=()=>{this.preventMt=!1,this.preventionContainer.classList.add("JCV-hidden"),setTimeout(()=>this.DM.data.container.classList.remove("JCV-numb"),50)};dispose=()=>{window.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.preventionContainer.remove(),this._preventionContainer=null}};const fe=["innerHTML"],ke=ot({__name:"Viewer",props:{modules:{},canvas:{},attachmentDir:{},attachments:{},options:{},isPrerendering:{type:Boolean},theme:{}},async setup(e,{expose:t}){let i,n,s=e,a=s.isPrerendering??!1,r=lt("viewerRef"),o=null,l=vt(),h=a?([i,n]=ht(()=>le({canvas:s.canvas??{},attachmentDir:s.attachmentDir,attachments:s.attachments,...s.options})),i=await i,n(),i):"",c=ct();t({viewer:o});function d(u){return(f,m,w,E,D,rt)=>{let T=gt({render:()=>u(Ct({content:m,node:w,onActive:D,onLoseActive:rt}))});T._context=l.appContext,T.mount(f),E.subscribe(T.unmount)}}return Y(()=>s.theme,u=>o?.changeTheme(u)),Y(()=>({canvas:s.canvas,attachmentDir:s.attachmentDir,attachments:s.attachments}),({canvas:u,attachmentDir:f,attachments:m})=>o?.load({canvas:u,attachmentDir:f,attachments:m})),dt(()=>{if(!r.value)return;let u=["text","markdown","link","audio","image","video"],f={};for(let m of u){let w=c[m];w&&(f[m]=d(w))}o=new oe(Object.assign(s.options??{},{container:r.value,theme:s.theme,canvas:s.canvas,attachmentDir:s.attachmentDir,attachments:s.attachments,nodeComponents:f}),s.modules)}),ut(()=>{o?.dispose(),o=null}),(u,f)=>(pt(),mt("section",{ref_key:"viewerRef",ref:r,innerHTML:ft(h),style:{"max-height":"100vh","max-width":"100vw"}},null,8,fe))}});export{Ne as a,Se as c,ke as g,Oe as s};
