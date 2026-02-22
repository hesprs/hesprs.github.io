const e={nodes:[{id:"c009aa1957bf5b4b",type:"group",x:-640,y:-20,width:1210,height:850,label:"Your Modular-Monolith Adopting SynthKernel"},{id:"6849ce9413d5d64c",type:"text",text:`<h2 id="loader" tabindex="-1">Loader <a class="header-anchor" href="#loader" aria-label="Permalink to “Loader”">&#8203;</a></h2>
<ul>
<li>Manages module lifecycles (Start, Dispose, Restart)</li>
<li>Orchestrates types (via Generics)</li>
<li>Acts as facade (Augmented by modules)</li>
<li>Contains NO business logic</li>
</ul>
`,styleAttributes:{},x:-260,y:0,width:420,height:240,color:"1"},{id:"4bc378e3aecb2c8a",type:"text",text:`<h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to “Module”">&#8203;</a></h3>
<ul>
<li>Interop via dependency injection</li>
<li>augment loader</li>
<li>declare types</li>
<li>executes business logic</li>
</ul>
`,styleAttributes:{},x:-430,y:380,width:340,height:200,color:"3"},{id:"d3c50b29745c85f0",type:"text",text:`<h3 id="sub-loader" tabindex="-1">Sub-Loader <a class="header-anchor" href="#sub-loader" aria-label="Permalink to “Sub-Loader”">&#8203;</a></h3>
<ul>
<li>simultaneously a module and a loader</li>
<li>achieves logic that cannot be handled by a single loader</li>
<li>handles inter-hierarchy communication</li>
</ul>
`,styleAttributes:{},x:-30,y:380,width:380,height:200,color:"2"},{id:"b98d25db35024af5",type:"text",text:`<h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to “Module”">&#8203;</a></h3>
`,styleAttributes:{},x:-620,y:380,width:130,height:60,color:"3"},{id:"7817e2f0ae03ce4c",type:"text",text:`<h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to “Module”">&#8203;</a></h3>
`,styleAttributes:{},x:420,y:380,width:130,height:60,color:"3"},{id:"db3dfecd787346af",type:"text",text:`<h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to “Module”">&#8203;</a></h3>
`,styleAttributes:{},x:95,y:680,width:130,height:60,color:"3"},{id:"12f9070cd1304c58",type:"text",text:`<h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to “Module”">&#8203;</a></h3>
`,styleAttributes:{},x:285,y:680,width:130,height:60,color:"3"},{id:"fb26c6f9400660eb",type:"text",text:`<h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to “Module”">&#8203;</a></h3>
`,styleAttributes:{},x:-90,y:680,width:130,height:60,color:"3"},{id:"d7f0bbc008f98228",type:"text",text:`<h2 id="consumer-code" tabindex="-1">Consumer Code <a class="header-anchor" href="#consumer-code" aria-label="Permalink to “Consumer Code”">&#8203;</a></h2>
<p>Interacts only with the loader.</p>
`,styleAttributes:{},x:-180,y:-200,width:260,height:120,color:"6"}],edges:[{id:"510277859b1f7173",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"d7f0bbc008f98228",fromSide:"bottom",toNode:"6849ce9413d5d64c",toSide:"top",color:"5"},{id:"b6686ea558498e8b",styleAttributes:{},toFloating:!1,fromNode:"6849ce9413d5d64c",fromSide:"bottom",toNode:"4bc378e3aecb2c8a",toSide:"top",color:"5"},{id:"72ba4d528d7999c4",styleAttributes:{},toFloating:!1,fromNode:"6849ce9413d5d64c",fromSide:"bottom",toNode:"b98d25db35024af5",toSide:"top",color:"5"},{id:"ee59d8a15700c2b6",styleAttributes:{},toFloating:!1,fromNode:"6849ce9413d5d64c",fromSide:"bottom",toNode:"d3c50b29745c85f0",toSide:"top",color:"5"},{id:"1beea42ca62e981e",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"6849ce9413d5d64c",fromSide:"bottom",toNode:"7817e2f0ae03ce4c",toSide:"top",color:"5",label:"Logical Hierarchy"},{id:"241e30d6a3e86b79",styleAttributes:{},toFloating:!1,fromNode:"d3c50b29745c85f0",fromSide:"bottom",toNode:"db3dfecd787346af",toSide:"top",color:"5"},{id:"52a68b815d7c9c3a",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"d3c50b29745c85f0",fromSide:"bottom",toNode:"fb26c6f9400660eb",toSide:"top",color:"5"},{id:"d70ff5892f9b64b0",styleAttributes:{},toFloating:!1,fromNode:"d3c50b29745c85f0",fromSide:"bottom",toNode:"12f9070cd1304c58",toSide:"top",color:"5"},{id:"e97275f4b35da3a9",styleAttributes:{path:null},toFloating:!1,fromNode:"4bc378e3aecb2c8a",fromSide:"left",toNode:"b98d25db35024af5",toSide:"bottom",color:"4"},{id:"7b5d0e38e925d564",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"d3c50b29745c85f0",fromSide:"left",toNode:"4bc378e3aecb2c8a",toSide:"right",color:"4"},{id:"1bd330d567f84c30",styleAttributes:{},toFloating:!1,fromNode:"d3c50b29745c85f0",fromSide:"right",toNode:"7817e2f0ae03ce4c",toSide:"bottom",color:"4"},{id:"8b1de7e7f880da17",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"fb26c6f9400660eb",fromSide:"bottom",toNode:"12f9070cd1304c58",toSide:"bottom",color:"4",label:"Inter-Modular Interop"},{id:"9570b06cb6d52b34",styleAttributes:{},toFloating:!1,fromNode:"12f9070cd1304c58",fromSide:"bottom",toNode:"db3dfecd787346af",toSide:"bottom",color:"4"}],metadata:{version:"1.0-1.0",frontmatter:{}}};export{e as c};
