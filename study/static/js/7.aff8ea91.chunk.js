(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[7,45],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(5),a=t.n(r),o=t(176),i=t(156),c=t(155),s=t(158);function u(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var d=c.default.button(u(),(function(e){var n=e.dark,t=e.disabled?s.a.midGray:s.a.darkBlack;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(s.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(s.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),l=a.a.memo((function(e){var n=e.children,t=Object(o.a)(e,["children"]);return a.a.createElement(d,Object.assign({type:"button"},t),n)}));function f(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return f=function(){return e},e}var m=c.default.div(f(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),p=a.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,r=e.leftLabel,o=e.leftDisabled,i=e.leftHandler,c=e.rightLabel,s=e.rightDisabled,u=e.rightHandler;return a.a.createElement(m,null,a.a.createElement(l,{dark:t,disabled:o,onClick:i},r),c&&u&&a.a.createElement(l,{dark:!t,disabled:s,onClick:u},c))})),g=a.a.memo(p)},182:function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return l}));var r=t(156),a=t(155),o=t(158);function i(){var e=Object(r.a)(["\n  font-family: 'Open Sans';\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 34.24px;\n  color: ",";\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  ","\n  color: ",";\n  ","\n"]);return c=function(){return e},e}function s(){var e=Object(r.a)(["\n  font-family: 'Source Sans Pro';\n  font-size: 0.875rem;\n  line-height: 20px;\n"]);return s=function(){return e},e}var u=Object(a.css)(s()),d=a.default.div(c(),u,(function(e){return e.dark?o.a.darkBlack:o.a.black}),(function(e){return e.fontSize?"font-size: ".concat(e.fontSize,";"):""})),l=a.default.div(i(),o.a.darkBlack)},209:function(e,n,t){"use strict";t.r(n);var r=t(159),a=t(168),o=t.n(a),i=t(169),c=t(5),s=t.n(c),u=t(170),d=t.n(u),l=t(744),f=t(240),m=t(167),p=t(177),g=t(178),h=t(166),v=t(157),b=t(724),x=t.n(b),y=t(729),E=function(){var e=this,n=[];this.onmessage=function(t){"encode"===t.data[0]?function(e){for(var t=e.length,r=new Uint8Array(2*t*1),a=0;a<t;a+=1){var o=2*a*1,i=e[a];i>1?i=1:i<-1&&(i=-1),i*=32768,r[o]=i,r[o+1]=i>>8}n.push(r)}(t.data[1]):"dump"===t.data[0]?function(e){var t=n.length?n[0].length:0,r=n.length*t,a=new Uint8Array(44+r),o=new DataView(a.buffer);o.setUint32(0,1380533830,!1),o.setUint32(4,36+r,!0),o.setUint32(8,1463899717,!1),o.setUint32(12,1718449184,!1),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,1*e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),o.setUint32(36,1684108385,!1),o.setUint32(40,r,!0);for(var i=0;i<n.length;i+=1)a.set(n[i],i*t+44);n=[];var c=[a.buffer];postMessage(c,[c[0]])}(t.data[1]):"close"===t.data[0]&&e.close()}},k=function(){var e=null,n=[];function t(e){var n=new Float32Array(e),t=new Int16Array(e.length);return function(e,n){for(var t=0;t<e.length;t+=1){var r=Math.max(-1,Math.min(1,e[t]));n[t]=r<0?32768*r:32767*r}}(n,t),t}onmessage=function(r){var a;"encode"===r.data[0]?function(r){for(var a=t(r),o=a.length,i=0;o>=0;i+=1152){var c=a.subarray(i,i+1152),s=e.encodeBuffer(c);n.push(s),o-=1152}}(r.data[1]):"dump"===r.data[0]?function(){var t=e.flush();t.length>0&&n.push(t),postMessage(n),n=[]}(r.data[1]):"init"===r.data[0]?(a=r.data[1],importScripts(a.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,a.sampleRate,128)):"close"===r.data[0]&&this.close()}},w=function(){var e;importScripts("".concat("https://virufy.org/study","/workers/encoders/libflac.dev.js"));var n=1,t=44100,r=5,a=16,o=1,i=0,c=[],s=[];function u(e,n){c.push(e),i+=e.byteLength}function d(){if(0!==(e=Flac.init_libflac_encoder(t,n,a,r,0))){var i=Flac.init_encoder_stream(e,u);o&=0==i,console.log("flac init     : ".concat(o)),console.log("status encoder: ".concat(i)),!0}else console.error("Error initializing the encoder.")}function l(t){for(var r=t.length,a=new Uint32Array(r),o=new DataView(a.buffer),i=0,c=0;c<r;c+=1)o.setInt32(i,32767*t[c],!0),i+=4;var s=Flac.FLAC__stream_encoder_process_interleaved(e,a,a.length/n);1!=s&&console.log("Error: encode_buffer_pcm_as_flac returned false. ".concat(s))}function f(e,n){var t=function(e,n){for(var t=new Uint8Array(n),r=0,a=e.length,o=0;o<a;o+=1){var i=e[o];t.set(i,r),r+=i.length}return t}(e,n);return new Blob([t],{type:"audio/flac"})}this.onmessage=function(u){if("init"===u.data[0])!function(e){var o=e;o||(o={bps:a,channels:n,samplerate:t,compression:r}),o.channels=o.channels?o.channels:n,o.samplerate=o.samplerate?o.samplerate:t,o.bps=o.bps?o.bps:a,o.compression=o.compression?o.compression:r,r=o.compression,a=o.bps,t=o.samplerate,n=o.channels,Flac.isReady()?d():Flac.onready=function(){setTimeout((function(){d()}),0)}}(u.data[1]);else if("encode"===u.data[0])!function(e){if(Flac.isReady()){if(s.length>0)for(var n=s.length,t=s.splice(0,n),r=0;r<n;++r)l(t[r]);l(e)}else s.push(e),console.info("buffered audio data for Flac encdoing")}(u.data[1]);else if("dump"===u.data[0]){var m;Flac.isReady()?(o&=Flac.FLAC__stream_encoder_finish(e),console.log("flac finish: ".concat(o)),m=f(c,i),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),c.splice(0,c.length),i=0,s.splice(0,s.length),postMessage(m),!1}}},C=function e(n){var t=this;Object(y.a)(this,e),this.cleanup=function(){t.config.onRecording&&t.em.removeEventListener("recording",t.recordingFn),t.config.onAudioProcesss&&t.em.removeEventListener("onaudioprocess",t.onAudioProcessFn)},this.createWorker=function(e){var n=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),t=new Blob([n]);return new Worker(URL.createObjectURL(t))},this.startRecording=function(e){if("inactive"===t.state&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){if(t.audioCtx=new AudioContext({sampleRate:t.config.sampleRate}),t.micGainNode=t.audioCtx.createGain(),t.outputGainNode=t.audioCtx.createGain(),t.config.createDynamicsCompressorNode&&(t.dynamicsCompressorNode=t.audioCtx.createDynamicsCompressor()),t.config.createAnalyserNode&&(t.analyserNode=t.audioCtx.createAnalyser()),(t.config.forceScriptProcessor||t.config.broadcastAudioProcessEvents||!t.config.usingMediaRecorder)&&(t.processorNode=t.audioCtx.createScriptProcessor(t.config.processorBufferSize,1,1)),t.audioCtx.createMediaStreamDestination?t.destinationNode=t.audioCtx.createMediaStreamDestination():t.destinationNode=t.audioCtx.destination,!t.config.usingMediaRecorder){if("mp3"===t.config.manualEncoderId){t.encoderWorker=t.createWorker(k);t.encoderWorker.postMessage(["init",{baseUrl:"https://virufy.org/study",sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/mpeg"}else"flac"===t.config.manualEncoderId?(t.encoderWorker=t.createWorker(w),t.encoderWorker.postMessage(["init",{sampleRate:t.audioCtx.sampleRate}]),t.encoderMimeType="audio/flac"):(t.encoderWorker=t.createWorker(E),t.encoderMimeType="audio/wav");t.encoderWorker.addEventListener("message",(function(e){var n=new Event("dataavailable");"ogg"===t.config.manualEncoderId||"flac"===t.config.manualEncoderId?n.data=e.data:n.data=new Blob(e.data,{type:t.encoderMimeType}),t._onDataAvailable(n)}))}var n={audio:{echoCancellation:t.config.enableEchoCancellation}};return t.config.deviceId&&(n.audio.deviceId=t.config.deviceId),navigator.mediaDevices.getUserMedia(n).then((function(n){t._startRecordingWithStream(n,e)})).catch((function(e){console.log(e)}))}},this.setMicGain=function(e){t.config.micGain=e,t.audioCtx&&t.micGainNode&&t.micGainNode.gain.setValueAtTime(e,t.audioCtx.currentTime)},this._startRecordingWithStream=function(e,n){t.micAudioStream=e,t.inputStreamNode=t.audioCtx.createMediaStreamSource(t.micAudioStream),t.audioCtx=t.inputStreamNode.context,t.onGraphSetupWithInputStream&&t.onGraphSetupWithInputStream(t.inputStreamNode),t.inputStreamNode.connect(t.micGainNode),t.micGainNode.gain.setValueAtTime(t.config.micGain,t.audioCtx.currentTime);var r=t.micGainNode;t.dynamicsCompressorNode&&(t.micGainNode.connect(t.dynamicsCompressorNode),r=t.dynamicsCompressorNode),t.state="recording",t.processorNode?(r.connect(t.processorNode),t.processorNode.connect(t.outputGainNode),t.processorNode.onaudioprocess=function(e){return t._onAudioProcess(e)}):r.connect(t.outputGainNode),t.analyserNode&&r.connect(t.analyserNode),t.outputGainNode.connect(t.destinationNode),t.config.usingMediaRecorder?(t.mediaRecorder=new MediaRecorder(t.destinationNode.stream,{mimeType:t.encoderMimeType}),t.mediaRecorder.addEventListener("dataavailable",(function(e){return t._onDataAvailable(e)})),t.mediaRecorder.addEventListener("error",(function(e){return t._onError(e)})),t.mediaRecorder.start(n)):(t.outputGainNode.gain.setValueAtTime(0,t.audioCtx.currentTime),n&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),t.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),n)))},this._onAudioProcess=function(e){t.config.broadcastAudioProcessEvents&&t.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),t.config.usingMediaRecorder||"recording"===t.state&&(t.config.broadcastAudioProcessEvents?t.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):t.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=function(){"inactive"!==t.state&&(t.config.usingMediaRecorder?(t.state="inactive",t.mediaRecorder.stop()):(t.state="inactive",t.encoderWorker.postMessage(["dump",t.audioCtx.sampleRate]),clearInterval(t.slicing)))},this._onDataAvailable=function(e){if(t.chunks.push(e.data),t.chunkType=e.data.type,"inactive"===t.state){var n=new Blob(t.chunks,{type:t.chunkType}),r=URL.createObjectURL(n),a={ts:(new Date).getTime(),blobUrl:r,mimeType:n.type,size:n.size};t.chunks=[],t.chunkType=null,t.destinationNode&&(t.destinationNode.disconnect(),t.destinationNode=null),t.outputGainNode&&(t.outputGainNode.disconnect(),t.outputGainNode=null),t.analyserNode&&(t.analyserNode.disconnect(),t.analyserNode=null),t.processorNode&&(t.processorNode.disconnect(),t.processorNode=null),t.encoderWorker&&(t.encoderWorker.postMessage(["close"]),t.encoderWorker=null),t.dynamicsCompressorNode&&(t.dynamicsCompressorNode.disconnect(),t.dynamicsCompressorNode=null),t.micGainNode&&(t.micGainNode.disconnect(),t.micGainNode=null),t.inputStreamNode&&(t.inputStreamNode.disconnect(),t.inputStreamNode=null),t.config.stopTracksAndCloseCtxWhenFinished&&(t.micAudioStream.getTracks().forEach((function(e){return e.stop()})),t.micAudioStream=null,t.audioCtx.close(),t.audioCtx=null),t.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:a}}))}},this._onError=function(e){console.log("error",e),t.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==n.broadcastAudioProcessEvents&&n.broadcastAudioProcessEvents,createAnalyserNode:void 0!==n.createAnalyserNode&&n.createAnalyserNode,createDynamicsCompressorNode:void 0!==n.createDynamicsCompressorNode&&n.createDynamicsCompressorNode,forceScriptProcessor:void 0!==n.forceScriptProcessor&&n.forceScriptProcessor,manualEncoderId:void 0!==n.manualEncoderId?n.manualEncoderId:"wav",micGain:void 0!==n.micGain?n.micGain:1,processorBufferSize:void 0!==n.processorBufferSize?n.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===n.stopTracksAndCloseCtxWhenFinished||n.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==n.usingMediaRecorder?n.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===n.enableEchoCancellation||n.enableEchoCancellation,sampleRate:void 0!==n.sampleRate?n.sampleRate:44100,onRecording:n.onRecording,onAudioPress:n.onAudioPress},n.onRecording&&(this.recordingFn=function(e){return n.onRecording(e)},this.em.addEventListener("recording",this.recordingFn)),n.onAudioProcesss&&(this.onAudioProcessFn=function(e){return n.onAudioProcesss(e)},this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))},R=t(327),S=t(730),N=t.n(S),A=t(277),M=t.n(A),O=t(156),j=t(155),T=t(158);function B(){var e=Object(O.a)(["\n  visibility: ",";\n"]);return B=function(){return e},e}function F(){var e=Object(O.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: flex;\n"]);return F=function(){return e},e}function U(){var e=Object(O.a)(["\n  font-size: 1.25rem;\n  line-height: 28px;\n  color: ",";\n  margin-top: 20px;\n  font-family: 'Source Sans Pro';\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n    line-height: 40px;\n    margin-top: 22px;\n  }\n"]);return U=function(){return e},e}function I(){var e=Object(O.a)(["\n  width: 44px;\n  height: 51.33px;\n\n  @media screen and (",") {\n    width: 53px;\n    height: 61.83px;\n  }\n"]);return I=function(){return e},e}function D(){var e=Object(O.a)(["\n  width: 51.33px;\n  height: 69.67px;\n\n  @media screen and (",") {\n    width: 78.43px;\n    height: 106.44px;\n  }\n"]);return D=function(){return e},e}function G(){var e=Object(O.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: ",";\n  transition: opacity 0.25s;\n"]);return G=function(){return e},e}function L(){var e=Object(O.a)(["\n  background-color: ",";\n  width: 180px;\n  height: 180px;\n  position: relative;\n  outline: none !important;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  transition: background-color 0.25s;\n\n  @supports not (-webkit-touch-callout: none) {\n    /* CSS for other than iOS devices */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n    z-index: 1;\n    border-radius: 50%;\n  }\n\n  @media screen and (",") {\n    width: 275px;\n    height: 275px;\n  }\n"]);return L=function(){return e},e}function P(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return P=function(){return e},e}var _=j.default.div(P()),z=j.default.button(L(),T.a.lightGray,T.a.midDarkGray,(function(e){return e.theme.breakpoints.tablet})),W=j.default.img(G(),(function(e){return e.show?"1":"0"})),V=Object(j.default)(W)(D(),(function(e){return e.theme.breakpoints.tablet})),H=Object(j.default)(W)(I(),(function(e){return e.theme.breakpoints.tablet})),Z=j.default.div(U(),T.a.realBlack,(function(e){return e.theme.breakpoints.tablet})),J=j.default.div(F(),T.a.red),K=j.default.p(B(),(function(e){return e.show?"flex":"hidden"})),Y={usingMediaRecorder:!1,sampleRate:44100,manualEncoderId:"wav",processorBufferSize:2048},q=s.a.memo((function(e){var n=e.className,t=void 0===n?"":n,r=e.maxTimeInSeconds,a=void 0===r?30:r,c=e.onNewRecord,u=e.delay,d=void 0===u?500:u,f=e.recordingFile,m=Object(l.a)().t,p=s.a.useRef(),g=s.a.useRef(0),b=s.a.useRef(),y=s.a.useRef(),E=s.a.useRef(),k=s.a.useState(!0),w=Object(v.a)(k,2),S=w[0],A=w[1],O=s.a.useState(),j=Object(v.a)(O,2),T=j[0],B=j[1],F=s.a.useState(!1),U=Object(v.a)(F,2),I=U[0],D=U[1],G=s.a.useState(!1),L=Object(v.a)(G,2),P=L[0],W=L[1],q=s.a.useState(!1),Q=Object(v.a)(q,2),$=Q[0],X=Q[1],ee=s.a.useCallback((function(e){g.current+=1;for(var n=e.detail,t=n.inputBuffer,r=n.outputBuffer,a=0;a<r.numberOfChannels;a+=1)for(var o=t.getChannelData(a),i=r.getChannelData(a),c=0;c<t.length;c+=1)i[c]=o[c]}),[]),ne=s.a.useCallback(function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r,a,i,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.detail,r=t.recording,e.next=4,fetch(r.blobUrl).then((function(e){return e.blob()}));case 4:a=e.sent,i="Filename.".concat(Y.manualEncoderId),s=R.a.blobToFile(a,i),u=R.a.sizeAsHuman(s.size,!0),c(s,u);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[c]);s.a.useEffect((function(){p.current=new C(Object(h.a)(Object(h.a)({},Y),{},{onRecording:ne,onAudioProcesss:ee}));var e={audio:{echoCancellation:p.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((function(){A(!0)})).catch((function(){A(!1)})),f){var n=f;if(n.size){var t=new Audio(URL.createObjectURL(n));t.load();t.addEventListener("loadedmetadata",(function e(){var n;null===(n=b.current)||void 0===n||n.setTime(1e3*t.duration),t.removeEventListener("loadedmetadata",e)}))}}return function(){p.current&&p.current.cleanup()}}),[]);var te=s.a.useCallback((function(){p.current&&(g.current=0,p.current.startRecording().then((function(){var e;(B(!0),W(!1),b.current)&&(b.current.reset(),null===(e=b.current)||void 0===e||e.setTime(0),b.current.start())})).catch((function(e){return console.error("ERROR",e)})))}),[]),re=s.a.useCallback((function(){p.current&&(p.current.stopRecording(),B(!1),b.current&&(b.current.getTime()/1e3<3&&W(!0),b.current.stop()))}),[]),ae=s.a.useCallback((function(e){return e<10?"0".concat(e):e}),[]),oe=function(e){"touches"in e||e.preventDefault()},ie=s.a.useCallback((function(e){e.target&&(e.target.addEventListener("touchend",oe,{passive:!1}),E.current=e.target),y.current=setTimeout((function(){D(!0),X(!0),W(!1)}),d)}),[d]),ce=s.a.useCallback((function(){y.current&&clearTimeout(y.current),$&&D(!1),X(!1),E.current&&E.current.removeEventListener("touchend",oe)}),[$]);return s.a.createElement(_,{className:t},s.a.createElement(J,null,P?s.a.createElement(K,{show:!0},m("recordingsIntroduction:shortRecording")):s.a.createElement(K,{show:I},m(T?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart"))),s.a.createElement(z,{disabled:!S,onClick:T?re:te,onMouseDown:ie,onMouseUp:ce,onTouchStart:ie,onTouchEnd:ce,onMouseLeave:ce},s.a.createElement(V,{src:N.a,alt:"Start",show:!T}),s.a.createElement(H,{src:M.a,alt:"Stop",show:T})),s.a.createElement(Z,null,s.a.createElement(x.a,{ref:b,startImmediately:!1,checkpoints:[{time:1e3*a,callback:re}]},s.a.createElement(x.a.Minutes,null),":",s.a.createElement(x.a.Seconds,{formatValue:ae}))))})),Q=t(165),$=t(731),X=t.n($),ee=t(278),ne=g.e({recordingFile:g.d().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(function(e){return e?e.size<=5*Math.pow(1024,3):!!e})).test("fileDuration","ERROR.FILE_DURATION",function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=10;break}return t=n,(r=new Audio(URL.createObjectURL(t))).load(),e.next=6,new Promise((function(e){return r.addEventListener("loadedmetadata",e)}));case 6:return e.next=8,new Promise((function(e){r.duration!==1/0&&e(r.duration),r.addEventListener("durationchange",(function(){r.remove(),e(r.duration)})),r.volume=0,r.currentTime=86400,r.play()}));case 8:return a=e.sent,e.abrupt("return",a>=3);case 10:return e.abrupt("return",!!n);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}).defined();n.default=s.a.memo((function(e){var n=e.onNext,t=e.onManualUpload,a=e.defaultValues,o=e.currentLogic,i=e.action,c=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,u=Object(m.e)({mode:"onChange",defaultValues:a,resolver:Object(p.a)(ne)}),g=u.handleSubmit,h=u.control,v=u.getValues,b=u.formState,x=Object(l.a)().t,y=b.isValid,E=s.a.useRef(1);return s.a.createElement(s.a.Fragment,null,s.a.createElement(ee.MainContainer,null,s.a.createElement(ee.Text,null,s.a.createElement(f.a,{i18nKey:"recordingsRecord:text"},"Click the record button and cough intentionally ",s.a.createElement("strong",null,"3 times"),". When you are done, click ",s.a.createElement(ee.StopImg,null)," and Continue.")),s.a.createElement(ee.MicContainer,null,s.a.createElement(m.a,{control:h,name:"recordingFile",render:function(e){var n=e.onChange;return s.a.createElement(q,{key:E.current,onNewRecord:n,recordingFile:null===a||void 0===a?void 0:a.recordingFile})}})),s.a.createElement(c,null,s.a.createElement(Q.a,{invert:!0,leftLabel:x("recordingsRecord:next"),leftDisabled:!y,leftHandler:g(n)}),s.a.createElement(ee.UploadContainer,{onClick:function(){i(Object(r.a)({},o,{recordingFile:v("recordingFile")||null,uploadedFile:null})),null===t||void 0===t||t()}},s.a.createElement(ee.UploadImage,{src:X.a}),s.a.createElement(ee.UploadText,null,x("recordingsRecord:upload"))))))}))},277:function(e,n,t){e.exports=t.p+"static/media/stop.2a8233b8.svg"},278:function(e,n,t){"use strict";t.r(n),t.d(n,"MainContainer",(function(){return h})),t.d(n,"Text",(function(){return v})),t.d(n,"MicContainer",(function(){return b})),t.d(n,"UploadContainer",(function(){return x})),t.d(n,"UploadImage",(function(){return y})),t.d(n,"UploadText",(function(){return E})),t.d(n,"StopImg",(function(){return k}));var r=t(156),a=t(155),o=t(182),i=t(158),c=t(277),s=t.n(c);function u(){var e=Object(r.a)(["\n  display: inline;\n  height: 10px;\n  margin: 0px 2px 4px;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  cursor: pointer;\n  font-family: Source Sans Pro;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 24px;\n  color: ",";\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  cursor: pointer;\n  width: 13px;\n  height: 12px;\n  margin-right: 7px;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  width: fit-content;\n  margin: 0 auto;\n\n  @media screen and (","){\n    padding: 22px;\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",";\n  margin-bottom: 2px;\n  text-align: left;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: 0 auto;\n    font-size: 16px;\n  }\n\n  @media screen and (","){\n    @media (orientation: portrait) {\n      margin-bottom: 248px;\n    }\n\n    @media (orientation: landscape) {\n      margin-bottom: 24px;\n    }\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(r.a)(["\n  padding: 40px 0px;\n"]);return g=function(){return e},e}var h=a.default.div(g()),v=Object(a.default)(o.b)(p(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),b=a.default.div(m()),x=a.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),y=a.default.img(l()),E=a.default.div(d(),i.a.darkBlack),k=a.default.img.attrs((function(){return{src:s.a}}))(u())},327:function(e,n,t){"use strict";n.a={sizeAsHuman:function(e,n){var t=n?1e3:1024;if(Math.abs(e)<t)return"".concat(e," B");var r=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1;do{e/=t,++a}while(Math.abs(e)>=t&&a<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[a])},blobToFile:function(e,n){var t=e;return t.lastModifiedDate=new Date,t.name=n,e}}},730:function(e,n,t){e.exports=t.p+"static/media/start.1e01800e.svg"},731:function(e,n,t){e.exports=t.p+"static/media/upload.e35eb772.svg"}}]);
//# sourceMappingURL=7.aff8ea91.chunk.js.map