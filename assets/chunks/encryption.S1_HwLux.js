const t={nodes:[{id:"1b5c9a513992802e",type:"group",x:-380,y:100,width:280,height:260,label:"File Info"},{id:"fe9b7a0bce528584",type:"group",x:-320,y:-360,width:220,height:260,label:"Server Info"},{id:"b49169aebac7e5df",type:"group",x:360,y:-30,width:340,height:100,label:"Sub-Keys"},{id:"9a92edcf086c3cfc",type:"text",text:`<p>Root File Key</p>
`,styleAttributes:{},x:380,y:-10,width:140,height:60,color:"3"},{id:"a5d52cd03f802a4a",type:"text",text:`<p>File Content</p>
`,styleAttributes:{},x:385,y:410,width:130,height:60,color:"1"},{id:"c5c4295e29846375",type:"text",text:`<p>File Key</p>
`,styleAttributes:{},x:400,y:210,width:100,height:60,color:"3"},{id:"b920a936964d171b",type:"text",text:`<p>Name Key</p>
`,styleAttributes:{},x:560,y:-10,width:120,height:60,color:"3"},{id:"4e11d8bcaaa494b4",type:"text",text:`<p>File Name</p>
`,styleAttributes:{},x:560,y:410,width:120,height:60,color:"1"},{id:"81209c25b6a24e46",type:"text",text:`<p>User Password</p>
`,styleAttributes:{},x:400,y:-400,width:260,height:60,color:"1"},{id:"29b02edaa8bceae2",type:"text",text:`<p>Master Key</p>
`,styleAttributes:{},x:400,y:-260,width:260,height:60,color:"3"},{id:"6845f2a8ca1be92a",type:"text",text:`<p>Master Salt</p>
`,styleAttributes:{},x:50,y:-260,width:140,height:60,color:"4"},{id:"7027ed14bd3c7157",type:"text",text:`<p>Account Name</p>
`,styleAttributes:{},x:-300,y:-340,width:180,height:60},{id:"17f64446d28226d6",type:"text",text:`<p>Server Endpoint</p>
`,styleAttributes:{},x:-300,y:-260,width:180,height:60},{id:"da3671088c01833a",type:"text",text:`<p>Remote Directory</p>
`,styleAttributes:{},x:-300,y:-180,width:180,height:60},{id:"50e58d54fe68ca4f",type:"text",text:`<p>File Size</p>
`,styleAttributes:{},x:-360,y:120,width:240,height:60},{id:"778060980ea141cd",type:"text",text:`<p>File Path</p>
`,styleAttributes:{},x:-360,y:200,width:240,height:60},{id:"07383709d870ec65",type:"text",text:`<p>16 Byte Random File Salt</p>
`,styleAttributes:{},x:-360,y:280,width:240,height:60},{id:"7a1349f6230992a8",type:"text",text:`<p>File Key Salt</p>
`,styleAttributes:{},x:50,y:200,width:140,height:60,color:"4"},{id:"c57b4ce06800705b",type:"text",text:`<p>Chunk Count</p>
`,styleAttributes:{},x:50,y:410,width:140,height:60,color:"4"}],edges:[{id:"4d4106e7c8dcc873",styleAttributes:{},toFloating:!1,fromNode:"6845f2a8ca1be92a",fromSide:"right",toNode:"29b02edaa8bceae2",toSide:"left",label:"Argon2id (salt)"},{id:"e38e9cbd80d353c3",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"81209c25b6a24e46",fromSide:"bottom",toNode:"29b02edaa8bceae2",toSide:"top",label:"Argon2id (credential)"},{id:"0d9c97fc8e566a33",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"29b02edaa8bceae2",fromSide:"bottom",toNode:"b49169aebac7e5df",toSide:"top",label:`HKDF-SHA-256
(credential)`},{id:"72d5878d3db0a378",styleAttributes:{},toFloating:!1,fromNode:"b920a936964d171b",fromSide:"bottom",toNode:"4e11d8bcaaa494b4",toSide:"top",label:`AES-GCM-SIV-256
(credential)`},{id:"b8a9632928d26a20",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"7a1349f6230992a8",fromSide:"right",toNode:"c5c4295e29846375",toSide:"left",label:`HKDF-SHA-256
(salt)`},{id:"9ab3f5463d6bfd9e",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"9a92edcf086c3cfc",fromSide:"bottom",toNode:"c5c4295e29846375",toSide:"top",label:`HKDF-SHA-256
(credential)`},{id:"fe840e9b8182f532",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"fe9b7a0bce528584",fromSide:"right",toNode:"6845f2a8ca1be92a",toSide:"left",label:"SHA256"},{id:"58adf75622563d6f",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"1b5c9a513992802e",fromSide:"right",toNode:"7a1349f6230992a8",toSide:"left",label:"SHA256"},{id:"3feb7be50a80a339",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"c5c4295e29846375",fromSide:"bottom",toNode:"a5d52cd03f802a4a",toSide:"top",label:`AES-GCM-256
(credential)`},{id:"3011a2a5c8ae3862",styleAttributes:{},toFloating:!1,fromFloating:!1,fromNode:"c57b4ce06800705b",fromSide:"right",toNode:"a5d52cd03f802a4a",toSide:"left",label:`AES-GCM-256
(nonce)`}],metadata:{version:"1.0-1.0",frontmatter:{}}};export{t as c};
