var X=Object.create,v=Object.defineProperty,Y=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty,et=Object.getOwnPropertyNames,rt=Object.getOwnPropertyDescriptor;var Z=t=>v(t,"__esModule",{value:!0});var y=(t,r)=>()=>(r||(r={exports:{}},t(r.exports,r)),r.exports),nt=(t,r)=>{for(var e in r)v(t,e,{get:r[e],enumerable:!0})},ot=(t,r,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of et(r))!tt.call(t,o)&&o!=="default"&&v(t,o,{get:()=>r[o],enumerable:!(e=rt(r,o))||e.enumerable});return t},h=t=>ot(Z(v(t!=null?X(Y(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var H=y(g=>{"use strict";var O=g&&g.__assign||function(){return O=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},O.apply(this,arguments)};Object.defineProperty(g,"__esModule",{value:!0});var it={delayFirstAttempt:!1,jitter:"none",maxDelay:Infinity,numOfAttempts:10,retry:function(){return!0},startingDelay:100,timeMultiple:2};function at(t){var r=O(O({},it),t);return r.numOfAttempts<1&&(r.numOfAttempts=1),r}g.getSanitizedOptions=at});var q=y(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});function st(t){var r=Math.random()*t;return Math.round(r)}S.fullJitter=st});var N=y(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});function ut(t){return t}D.noJitter=ut});var T=y(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var ct=q(),lt=N();function ft(t){switch(t.jitter){case"full":return ct.fullJitter;case"none":default:return lt.noJitter}}P.JitterFactory=ft});var k=y(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var dt=T(),yt=function(){function t(r){this.options=r,this.attempt=0}return t.prototype.apply=function(){var r=this;return new Promise(function(e){return setTimeout(e,r.jitteredDelay)})},t.prototype.setAttemptNumber=function(r){this.attempt=r},Object.defineProperty(t.prototype,"jitteredDelay",{get:function(){var r=dt.JitterFactory(this.options);return r(this.delay)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"delay",{get:function(){var r=this.options.startingDelay,e=this.options.timeMultiple,o=this.numOfDelayedAttempts,a=r*Math.pow(e,o);return Math.min(a,this.options.maxDelay)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"numOfDelayedAttempts",{get:function(){return this.attempt},enumerable:!0,configurable:!0}),t}();j.Delay=yt});var J=y(p=>{"use strict";var pt=p&&p.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var n in a)a.hasOwnProperty(n)&&(o[n]=a[n])},t(r,e)};return function(r,e){t(r,e);function o(){this.constructor=r}r.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}}(),mt=p&&p.__awaiter||function(t,r,e,o){function a(n){return n instanceof e?n:new e(function(s){s(n)})}return new(e||(e=Promise))(function(n,s){function c(u){try{i(o.next(u))}catch(d){s(d)}}function l(u){try{i(o.throw(u))}catch(d){s(d)}}function i(u){u.done?n(u.value):a(u.value).then(c,l)}i((o=o.apply(t,r||[])).next())})},ht=p&&p.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(i){return function(u){return l([i,u])}}function l(i){if(o)throw new TypeError("Generator is already executing.");for(;e;)try{if(o=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,a=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=r.call(t,e)}catch(u){i=[6,u],a=0}finally{o=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(p,"__esModule",{value:!0});var gt=k(),bt=function(t){pt(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.apply=function(){return mt(this,void 0,void 0,function(){return ht(this,function(e){return[2,this.isFirstAttempt?!0:t.prototype.apply.call(this)]})})},Object.defineProperty(r.prototype,"isFirstAttempt",{get:function(){return this.attempt===0},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"numOfDelayedAttempts",{get:function(){return this.attempt-1},enumerable:!0,configurable:!0}),r}(gt.Delay);p.SkipFirstDelay=bt});var L=y(b=>{"use strict";var wt=b&&b.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var n in a)a.hasOwnProperty(n)&&(o[n]=a[n])},t(r,e)};return function(r,e){t(r,e);function o(){this.constructor=r}r.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(b,"__esModule",{value:!0});var _t=k(),vt=function(t){wt(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r}(_t.Delay);b.AlwaysDelay=vt});var B=y(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var Ot=J(),Ct=L();function St(t,r){var e=Rt(t);return e.setAttemptNumber(r),e}I.DelayFactory=St;function Rt(t){return t.delayFirstAttempt?new Ct.AlwaysDelay(t):new Ot.SkipFirstDelay(t)}});var A=y(m=>{"use strict";var x=m&&m.__awaiter||function(t,r,e,o){function a(n){return n instanceof e?n:new e(function(s){s(n)})}return new(e||(e=Promise))(function(n,s){function c(u){try{i(o.next(u))}catch(d){s(d)}}function l(u){try{i(o.throw(u))}catch(d){s(d)}}function i(u){u.done?n(u.value):a(u.value).then(c,l)}i((o=o.apply(t,r||[])).next())})},F=m&&m.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(i){return function(u){return l([i,u])}}function l(i){if(o)throw new TypeError("Generator is already executing.");for(;e;)try{if(o=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,a=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=r.call(t,e)}catch(u){i=[6,u],a=0}finally{o=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(m,"__esModule",{value:!0});var Dt=H(),Pt=B();function kt(t,r){return r===void 0&&(r={}),x(this,void 0,void 0,function(){var e,o;return F(this,function(a){switch(a.label){case 0:return e=Dt.getSanitizedOptions(r),o=new jt(t,e),[4,o.execute()];case 1:return[2,a.sent()]}})})}m.backOff=kt;var jt=function(){function t(r,e){this.request=r,this.options=e,this.attemptNumber=0}return t.prototype.execute=function(){return x(this,void 0,void 0,function(){var r,e;return F(this,function(o){switch(o.label){case 0:if(this.attemptLimitReached)return[3,7];o.label=1;case 1:return o.trys.push([1,4,,6]),[4,this.applyDelay()];case 2:return o.sent(),[4,this.request()];case 3:return[2,o.sent()];case 4:return r=o.sent(),this.attemptNumber++,[4,this.options.retry(r,this.attemptNumber)];case 5:if(e=o.sent(),!e||this.attemptLimitReached)throw r;return[3,6];case 6:return[3,0];case 7:throw new Error("Something went wrong.")}})})},Object.defineProperty(t.prototype,"attemptLimitReached",{get:function(){return this.attemptNumber>=this.options.numOfAttempts},enumerable:!0,configurable:!0}),t.prototype.applyDelay=function(){return x(this,void 0,void 0,function(){var r;return F(this,function(e){switch(e.label){case 0:return r=Pt.DelayFactory(this.options,this.attemptNumber),[4,r.apply()];case 1:return e.sent(),[2]}})})},t}()});Z(exports);nt(exports,{handler:()=>Et});var C=h(require("aws-sdk"));var V=h(require("https")),$=h(require("url")),U=h(A()),It="SUCCESS",xt="FAILED";async function z(t,r,e){let{status:o,reason:a,data:n,physicalResourceId:s,retries:c=3}=e,l={Status:o,Reason:a||`See CloudWatch Log Stream: ${r.logStreamName}`,PhysicalResourceId:s||r.logStreamName,StackId:t.StackId,RequestId:t.RequestId,LogicalResourceId:t.LogicalResourceId,Data:n},i=JSON.stringify(l),u=(0,$.parse)(t.ResponseURL),d={hostname:u.hostname,port:443,path:u.path,method:"PUT",headers:{"content-type":"","content-length":i.length}};await(0,U.backOff)(()=>new Promise((Q,M)=>{var _=V.default.request(d,f=>{console.log("Status code: "+f.statusCode),console.log("Status message: "+f.statusMessage),Q(f.statusCode)});_.on("error",f=>{console.log("send(..) failed executing https.request(..): "+f),M(f)}),_.on("response",f=>{f.statusCode>=400&&(console.log(`Found status code ${f.statusCode} - retrying: `+f.statusMessage),M(f.statusMessage))}),_.write(i),_.end()}),{numOfAttempts:c})}function W(t){return async(r,e)=>{try{let o=await t(r)||void 0;console.debug("Sending successful response"),console.debug(JSON.stringify(o,null,2)),await z(r,e,{status:It,data:o==null?void 0:o.data,physicalResourceId:o==null?void 0:o.physicalResourceId})}catch(o){console.error("Sending failure response"),console.error(o),await z(r,e,{status:xt,reason:o&&o.toString()})}}}var G=h(A());function w(t,r){return(0,G.backOff)(t,{startingDelay:500,jitter:"full",retry:Ft,...r})}var Ft=t=>t.errorType==="TooManyRequestsException"||t.code==="Throttling"||t.code==="ThrottlingException"||t.retryable===!0;async function E(t){return new Promise((r,e)=>setTimeout(r,t))}C.config.logger=console;var R=new C.Route53,Et=W(At);async function At(t){switch(console.log("Create Hosted Zone.."),console.log(JSON.stringify(t,null,2)),t.RequestType){case"Create":return K(t);case"Update":return K(t);case"Delete":return Mt(t)}}async function K(t){let r=t.ResourceProperties,{comment:e,vpcId:o,domain:a,region:n}=r,s;await E(Math.floor(Math.random()*(1e4-1e3+1)+1e3));try{s=(await w(()=>R.createHostedZone({CallerReference:`${o}-${a}-${new Date().getTime()}`,Name:a,HostedZoneConfig:{Comment:e,PrivateZone:!0},VPC:{VPCId:o,VPCRegion:n}}).promise())).HostedZone.Id}catch(c){if(console.log(c),c.code==="ConflictingDomainExists")s=(await w(()=>R.listHostedZonesByVPC({VPCId:o,VPCRegion:n}).promise())).HostedZoneSummaries[0].HostedZoneId;else throw new Error(c)}return{physicalResourceId:`${o}-${a}`,data:{ZoneId:s}}}async function Mt(t){var n;console.log("Deleting Hosted Zone..."),console.log(JSON.stringify(t,null,2));let r=t.ResourceProperties,{vpcId:e,domain:o,region:a}=r;if(t.PhysicalResourceId==`${e}-${o}`)try{let c=(n=(await w(()=>R.listHostedZonesByVPC({VPCId:e,VPCRegion:a}).promise())).HostedZoneSummaries.find(l=>l.Name===o))==null?void 0:n.HostedZoneId;await E(Math.floor(Math.random()*(1e4-1e3+1)+1e3)),await w(()=>R.deleteHostedZone({Id:c}).promise())}catch(s){console.error(s)}}
