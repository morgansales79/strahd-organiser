const CACHE="strahd-organiser-v10";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png"];
const OCR=["ocr/tesseract.min.js","ocr/worker.min.js","ocr/tesseract-core-simd-lstm.wasm.js","ocr/tesseract-core-lstm.wasm.js","ocr/eng.traineddata","pdf/pdf.min.js","pdf/pdf.worker.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).then(()=>Promise.all(OCR.map(u=>c.add(u).catch(()=>{}))))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  if(new URL(e.request.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return res}).catch(()=>e.request.mode==="navigate"?caches.match("index.html"):Response.error())));
});
