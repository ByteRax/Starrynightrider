(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,ee=33777,N=33778,te=33779,P=35840,F=35841,ne=35842,re=35843,ie=36196,ae=37492,oe=37496,se=37488,I=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,L=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,ke=36286,Ae=2300,je=2301,R=2302,Me=2303,Ne=2400,Pe=2401,z=2402,Fe=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=35048,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Ze(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Qe(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Je||(Je[t]=!0,Ze(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function st(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n){return(1-n)*e+n*t}function ut(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function dt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ft(e,t){if(t.constructor===Float32Array)return e;let n=dt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function pt(e,t){if(t.constructor===Float32Array)return e;let n=dt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var mt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Ze(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_t.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_t.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gt.copy(this).projectOnVector(e),this.sub(gt)}reflect(e){return this.sub(gt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gt=new B,_t=new ht,vt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(yt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(yt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yt=new vt,bt=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xt=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function St(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=wt(e.r),e.g=wt(e.g),e.b=wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Tt(e.r),e.g=Tt(e.g),e.b=Tt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:bt,fromXYZ:xt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:bt,fromXYZ:xt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var Ct=St();function wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Tt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Et,Dt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Et===void 0&&(Et=Ke(`canvas`)),Et.width=e.width,Et.height=e.height;let t=Et.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Et}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(wt(t[e]/255)*255):t[e]=wt(t[e]);return{data:t,width:e.width,height:e.height}}return Ze(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ot=0,kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ot++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(At(r[t].image)):e.push(At(r[t]))}else e=At(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function At(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Dt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ze(`Texture: Unable to serialize Texture.`),{})}var jt=0,Mt=new B,Nt=class r extends nt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jt++}),this.uuid=ot(),this.name=``,this.source=new kt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mt).x}get height(){return this.source.getSize(Mt).y}get depth(){return this.source.getSize(Mt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Ze(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=300,Nt.DEFAULT_ANISOTROPY=1;var Pt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ft=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Nt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},It=class extends Ft{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lt=class extends Nt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Rt=class extends Nt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},zt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Bt.setFromMatrixColumn(e,0).length(),i=1/Bt.setFromMatrixColumn(e,1).length(),a=1/Bt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ht,e,Ut)}lookAt(e,t,n){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wt.crossVectors(n,Kt),Wt.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wt.crossVectors(n,Kt)),Wt.normalize(),Gt.crossVectors(Kt,Wt),r[0]=Wt.x,r[4]=Gt.x,r[8]=Kt.x,r[1]=Wt.y,r[5]=Gt.y,r[9]=Kt.y,r[2]=Wt.z,r[6]=Gt.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*P,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*P,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*P,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Bt.set(r[0],r[1],r[2]).length(),o=Bt.set(r[4],r[5],r[6]).length(),s=Bt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Vt.copy(this);let c=1/a,l=1/o,u=1/s;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=l,Vt.elements[5]*=l,Vt.elements[6]*=l,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bt=new B,Vt=new zt,Ht=new B(0,0,0),Ut=new B(1,1,1),Wt=new B,Gt=new B,Kt=new B,qt=new zt,Jt=new ht,Yt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-st(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Ze(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jt.setFromEuler(this),this.setFromQuaternion(Jt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER=`XYZ`;var Xt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Zt=0,Qt=new B,$t=new ht,en=new zt,tn=new B,nn=new B,rn=new B,an=new ht,on=new B(1,0,0),sn=new B(0,1,0),cn=new B(0,0,1),ln={type:`added`},un={type:`removed`},dn={type:`childadded`,child:null},fn={type:`childremoved`,child:null},pn=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Yt,r=new ht,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new vt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.multiply($t),this}rotateOnWorldAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.premultiply($t),this}rotateX(e){return this.rotateOnAxis(on,e)}rotateY(e){return this.rotateOnAxis(sn,e)}rotateZ(e){return this.rotateOnAxis(cn,e)}translateOnAxis(e,t){return Qt.copy(e).applyQuaternion(this.quaternion),this.position.add(Qt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(on,e)}translateY(e){return this.translateOnAxis(sn,e)}translateZ(e){return this.translateOnAxis(cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tn.copy(e):tn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(nn,tn,this.up):en.lookAt(tn,nn,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),$t.setFromRotationMatrix(en),this.quaternion.premultiply($t.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Qe(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null):Qe(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(un),fn.child=e,this.dispatchEvent(fn),fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,e,rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,an,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};pn.DEFAULT_UP=new B(0,1,0),pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},hn={type:`move`},gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},yn={h:0,s:0,l:0};function bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var xn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=ct(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=bn(i,r,e+1/3),this.g=bn(i,r,e),this.b=bn(i,r,e-1/3)}return Ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&Ze(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Ze(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Ze(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=_n[e.toLowerCase()];return n===void 0?Ze(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}copyLinearToSRGB(e){return this.r=Tt(e.r),this.g=Tt(e.g),this.b=Tt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return Ct.workingToColorSpace(Sn.copy(this),e),Math.round(st(Sn.r*255,0,255))*65536+Math.round(st(Sn.g*255,0,255))*256+Math.round(st(Sn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,r=Sn.g,i=Sn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Ie){Ct.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,r=Sn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(yn);let n=lt(vn.h,yn.h,t),r=lt(vn.s,yn.s,t),i=lt(vn.l,yn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new xn;xn.NAMES=_n;var Cn=class extends pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new B,Tn=new B,En=new B,Dn=new B,On=new B,kn=new B,An=new B,jn=new B,Mn=new B,Nn=new B,Pn=new Pt,Fn=new Pt,In=new Pt,Ln=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){wn.subVectors(r,t),Tn.subVectors(n,t),En.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Tn),s=wn.dot(En),c=Tn.dot(Tn),l=Tn.dot(En),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)!==null&&Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Dn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Dn.x),s.addScaledVector(a,Dn.y),s.addScaledVector(o,Dn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Pn.setScalar(0),Fn.setScalar(0),In.setScalar(0),Pn.fromBufferAttribute(e,t),Fn.fromBufferAttribute(e,n),In.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pn,i.x),a.addScaledVector(Fn,i.y),a.addScaledVector(In,i.z),a}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Tn.subVectors(e,t),wn.cross(Tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),wn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;On.subVectors(r,n),kn.subVectors(i,n),jn.subVectors(e,n);let s=On.dot(jn),c=kn.dot(jn);if(s<=0&&c<=0)return t.copy(n);Mn.subVectors(e,r);let l=On.dot(Mn),u=kn.dot(Mn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(On,a);Nn.subVectors(e,i);let f=On.dot(Nn),p=kn.dot(Nn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return An.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(An,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(On,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Bn):Bn.fromBufferAttribute(r,t),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Vn.copy(e.boundingBox)),Vn.applyMatrix4(e.matrixWorld),this.union(Vn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),Yn.subVectors(this.max,Jn),Hn.subVectors(e.a,Jn),Un.subVectors(e.b,Jn),Wn.subVectors(e.c,Jn),Gn.subVectors(Un,Hn),Kn.subVectors(Wn,Un),qn.subVectors(Hn,Wn);let t=[0,-Gn.z,Gn.y,0,-Kn.z,Kn.y,0,-qn.z,qn.y,Gn.z,0,-Gn.x,Kn.z,0,-Kn.x,qn.z,0,-qn.x,-Gn.y,Gn.x,0,-Kn.y,Kn.x,0,-qn.y,qn.x,0];return!Qn(t,Hn,Un,Wn,Yn)||(t=[1,0,0,0,1,0,0,0,1],!Qn(t,Hn,Un,Wn,Yn))?!1:(Xn.crossVectors(Gn,Kn),t=[Xn.x,Xn.y,Xn.z],Qn(t,Hn,Un,Wn,Yn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new B,new B,new B,new B,new B,new B,new B,new B],Bn=new B,Vn=new Rn,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new B,Zn=new B;function Qn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Zn.fromArray(e,a);let o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),s=t.dot(Zn),c=n.dot(Zn),l=r.dot(Zn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var $n=new B,er=new mt,tr=0,nr=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:dt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ft(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?pt(e,this.array):Math.round(e*t)}},rr=class extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ir=class extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ar=class extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},or=new Rn,sr=new B,cr=new B,lr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(sr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(cr)),this.expandByPoint(sr.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ur=0,dr=new zt,fr=new pn,pr=new B,mr=new Rn,hr=new Rn,gr=new B,_r=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ur++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?ir:rr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new vt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dr.makeRotationFromQuaternion(e),this.applyMatrix4(dr),this}rotateX(e){return dr.makeRotationX(e),this.applyMatrix4(dr),this}rotateY(e){return dr.makeRotationY(e),this.applyMatrix4(dr),this}rotateZ(e){return dr.makeRotationZ(e),this.applyMatrix4(dr),this}translate(e,t,n){return dr.makeTranslation(e,t,n),this.applyMatrix4(dr),this}scale(e,t,n){return dr.makeScale(e,t,n),this.applyMatrix4(dr),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ar(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Ze(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Qe(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];mr.setFromBufferAttribute(n),this.morphTargetsRelative?(gr.addVectors(this.boundingBox.min,mr.min),this.boundingBox.expandByPoint(gr),gr.addVectors(this.boundingBox.max,mr.max),this.boundingBox.expandByPoint(gr)):(this.boundingBox.expandByPoint(mr.min),this.boundingBox.expandByPoint(mr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Qe(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(mr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hr.setFromBufferAttribute(n),this.morphTargetsRelative?(gr.addVectors(mr.min,hr.min),mr.expandByPoint(gr),gr.addVectors(mr.max,hr.max),mr.expandByPoint(gr)):(mr.expandByPoint(hr.min),mr.expandByPoint(hr.max))}mr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)gr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(gr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)gr.fromBufferAttribute(a,t),o&&(pr.fromBufferAttribute(e,t),gr.add(pr)),r=Math.max(r,n.distanceToSquared(gr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let l=new B,u=new B,d=new B,f=new mt,p=new mt,m=new mt,h=new B,g=new B;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new B,b=new B,x=new B,S=new B;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gr.fromBufferAttribute(e,t),gr.normalize(),e.setXYZ(t,gr.x,gr.y,gr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new nr(a,r,i)}if(this.index===null)return Ze(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},vr=new B,yr=new B,br=new vt,xr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vr.subVectors(n,t).cross(yr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||br.getNormalMatrix(e),r=this.coplanarPoint(vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sr=0,Cr=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Ze(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new xr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new mt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},wr=new B,Tr=new B,Er=new B,Dr=new B,Or=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tr.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(Tr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Er),o=Dr.dot(this.direction),s=-Dr.dot(Er),c=Dr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Tr).addScaledVector(Er,d),f}intersectSphere(e,t){if(e.radius<0)return null;wr.subVectors(e.center,this.origin);let n=wr.dot(this.direction),r=wr.dot(wr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,ee;if(y>=b&&y>=x?(w=s,D=u,A=p,ee=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,ee=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,ee=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,F=T-N*D,ne=E-te*D,re=O-N*A,ie=k-te*A,ae=j-N*ee,oe=M-te*ee,se=ae*ie-oe*re,I=F*oe-ne*ae,ce=re*ne-ie*F;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=P*(se*D+I*A+ce*ee);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kr=class extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new xn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ar=new zt,jr=new Or,Mr=new lr,Nr=new B,Pr=new B,Fr=new B,Ir=new B,Lr=new B,Rr=new B,zr=new B,Br=new B,Vr=class extends pn{constructor(e=new _r,t=new kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Rr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Lr.fromBufferAttribute(s,e),a?Rr.addScaledVector(Lr,r):Rr.addScaledVector(Lr.sub(t),r))}t.add(Rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),jr.copy(e.ray).recast(e.near),Mr.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Mr,Nr)===null||jr.origin.distanceToSquared(Nr)>(e.far-e.near)**2)||(Ar.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Ar),(n.boundingBox===null||jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ur(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ur(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ur(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ur(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Hr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Br.copy(s),Br.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Br);return l<n.near||l>n.far?null:{distance:l,point:Br.clone(),object:e}}function Ur(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Pr),e.getVertexPosition(c,Fr),e.getVertexPosition(l,Ir);let u=Hr(e,t,n,r,Pr,Fr,Ir,zr);if(u){let e=new B;Ln.getBarycoord(zr,Pr,Fr,Ir,e),i&&(u.uv=Ln.getInterpolatedAttribute(i,s,c,l,e,new mt)),a&&(u.uv1=Ln.getInterpolatedAttribute(a,s,c,l,e,new mt)),o&&(u.normal=Ln.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Ln.getNormal(Pr,Fr,Ir,t.normal),u.face=t,u.barycoord=e}return u}var Wr=class extends Nt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gr=new lr,Kr=new mt(.5,.5),qr=new B,Jr=class{constructor(e=new xr,t=new xr,n=new xr,r=new xr,i=new xr,a=new xr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476+Kr.distanceTo(e.center),Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qr.x=r.normal.x>0?e.max.x:e.min.x,qr.y=r.normal.y>0?e.max.y:e.min.y,qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yr=new zt,Xr=class e{constructor(){this.coordinateSystem=Ue,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Yr.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Jr),n[e].setFromProjectionMatrix(Yr,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Jr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Zr=class extends Nt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qr=class extends Nt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$r=class extends Qr{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ei=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ti=class e extends _r{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ar(c,3)),this.setAttribute(`normal`,new ar(l,3)),this.setAttribute(`uv`,new ar(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ni=class e extends _r{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ar(p,3)),this.setAttribute(`normal`,new ar(m,3)),this.setAttribute(`uv`,new ar(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function ri(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ai(i))i.isRenderTargetTexture?(Ze(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ai(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ii(e){let t={};for(let n=0;n<e.length;n++){let r=ri(e[n]);for(let e in r)t[e]=r[e]}return t}function ai(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function oi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function si(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ct.workingColorSpace}var ci={clone:ri,merge:ii},li=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ui=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=li,this.fragmentShader=ui,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=oi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new xn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new mt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new vt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new zt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fi=class extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},pi=class extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Fe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mi=class extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function gi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var _i=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},vi=class extends _i{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ne,endingEnd:Ne}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pe:i=e,o=2*t-n;break;case z:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Pe:a=e,s=2*n-t;break;case z:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},yi=class extends _i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},bi=class extends _i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xi=class extends _i{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=wi(n,t,g,y,r);i[p]=Si(x,o,_,b,m)}return i}};function Si(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ci(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function wi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Si(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ci(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ti=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=hi(t,this.TimeBufferType),this.values=hi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hi(e.times,Array),values:hi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),gi(e.settings)&&(n.settings={inTangents:hi(e.settings.inTangents,Array),outTangents:hi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ae:t=this.InterpolantFactoryMethodDiscrete;break;case je:t=this.InterpolantFactoryMethodLinear;break;case R:t=this.InterpolantFactoryMethodSmooth;break;case Me:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Ze(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return je;case this.InterpolantFactoryMethodSmooth:return R;case this.InterpolantFactoryMethodBezier:return Me}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;gi(this.settings)&&(Ei(this.settings.inTangents,e),Ei(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;gi(this.settings)&&(Di(this.settings.inTangents,e),Di(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Qe(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Qe(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Qe(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Qe(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===R,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,gi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ei(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Di(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ti.prototype.ValueTypeName=``,Ti.prototype.TimeBufferType=Float32Array,Ti.prototype.ValueBufferType=Float32Array,Ti.prototype.DefaultInterpolation=je;var Oi=class extends Ti{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName=`bool`,Oi.prototype.ValueBufferType=Array,Oi.prototype.DefaultInterpolation=Ae,Oi.prototype.InterpolantFactoryMethodLinear=void 0,Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Ti{constructor(e,t,n,r){super(e,t,n,r)}};ki.prototype.ValueTypeName=`color`;var Ai=class extends Ti{constructor(e,t,n,r){super(e,t,n,r)}};Ai.prototype.ValueTypeName=`number`;var ji=class extends _i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ht.slerpFlat(i,0,a,c-o,a,c,s);return i}},Mi=class extends Ti{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ji(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName=`quaternion`,Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Ti{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName=`string`,Ni.prototype.ValueBufferType=Array,Ni.prototype.DefaultInterpolation=Ae,Ni.prototype.InterpolantFactoryMethodLinear=void 0,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Ti{constructor(e,t,n,r){super(e,t,n,r)}};Pi.prototype.ValueTypeName=`vector`;var Fi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ii(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ii(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ii(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Li=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ri=class{constructor(e){this.manager=e===void 0?Li:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ri.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var zi=new WeakMap,Bi=class extends Ri{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=zi.get(a);e===void 0&&(e=[],zi.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ke(`img`);function s(){l(),t&&t(this);let n=zi.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}zi.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Fi.remove(`image:${e}`);let n=zi.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}zi.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Vi=class extends Ri{constructor(e){super(e)}load(e,t,n,r){let i=new Nt,a=new Bi(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Hi=new B,Ui=new ht,Wi=new B,Gi=class extends pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hi,Ui,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hi,Ui,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hi,Ui,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hi,Ui,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new B,qi=new mt,Ji=new mt,Yi=class extends Gi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,qi,Ji),t.subVectors(Ji,qi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xi=class extends Gi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zi=-90,Qi=1,$i=class extends pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yi(Zi,Qi,e,t);r.layers=this.layers,this.add(r);let i=new Yi(Zi,Qi,e,t);i.layers=this.layers,this.add(i);let a=new Yi(Zi,Qi,e,t);a.layers=this.layers,this.add(a);let o=new Yi(Zi,Qi,e,t);o.layers=this.layers,this.add(o);let s=new Yi(Zi,Qi,e,t);s.layers=this.layers,this.add(s);let c=new Yi(Zi,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ea=class extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ta=`\\[\\]\\.:\\/`,na=RegExp(`[\\[\\]\\.:\\/]`,`g`),ra=`[^\\[\\]\\.:\\/]`,ia=`[^`+ta.replace(`\\.`,``)+`]`,aa=`((?:WC+[\\/:])*)`.replace(`WC`,ra),oa=`(WCOD+)?`.replace(`WCOD`,ia),sa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ra),ca=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ra),la=RegExp(`^`+aa+oa+sa+ca+`$`),ua=[`material`,`materials`,`bones`,`map`],da=class{constructor(e,t,n){let r=n||fa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(na,``)}static parseTrackName(e){let t=la.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ua.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ze(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Qe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Qe(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Qe(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Qe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Qe(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Qe(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Qe(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Qe(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Qe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Qe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fa.Composite=da,fa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fa.prototype.GetterByBindingType=[fa.prototype._getValue_direct,fa.prototype._getValue_array,fa.prototype._getValue_arrayElement,fa.prototype._getValue_toArray],fa.prototype.SetterByBindingTypeAndVersioning=[[fa.prototype._setValue_direct,fa.prototype._setValue_direct_setNeedsUpdate,fa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fa.prototype._setValue_array,fa.prototype._setValue_array_setNeedsUpdate,fa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fa.prototype._setValue_arrayElement,fa.prototype._setValue_arrayElement_setNeedsUpdate,fa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fa.prototype._setValue_fromArray,fa.prototype._setValue_fromArray_setNeedsUpdate,fa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function pa(e,t,n,r){let i=ma(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case F:case re:return Math.max(e,16)*Math.max(t,8)/4;case P:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:case se:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ma(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?Ze(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ha(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ga(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var _a={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},V={common:{diffuse:{value:new xn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new xn(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},va={basic:{uniforms:ii([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.fog]),vertexShader:_a.meshbasic_vert,fragmentShader:_a.meshbasic_frag},lambert:{uniforms:ii([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new xn(0)},envMapIntensity:{value:1}}]),vertexShader:_a.meshlambert_vert,fragmentShader:_a.meshlambert_frag},phong:{uniforms:ii([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new xn(0)},specular:{value:new xn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_a.meshphong_vert,fragmentShader:_a.meshphong_frag},standard:{uniforms:ii([V.common,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new xn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_a.meshphysical_vert,fragmentShader:_a.meshphysical_frag},toon:{uniforms:ii([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new xn(0)}}]),vertexShader:_a.meshtoon_vert,fragmentShader:_a.meshtoon_frag},matcap:{uniforms:ii([V.common,V.bumpmap,V.normalmap,V.displacementmap,V.fog,{matcap:{value:null}}]),vertexShader:_a.meshmatcap_vert,fragmentShader:_a.meshmatcap_frag},points:{uniforms:ii([V.points,V.fog]),vertexShader:_a.points_vert,fragmentShader:_a.points_frag},dashed:{uniforms:ii([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_a.linedashed_vert,fragmentShader:_a.linedashed_frag},depth:{uniforms:ii([V.common,V.displacementmap]),vertexShader:_a.depth_vert,fragmentShader:_a.depth_frag},normal:{uniforms:ii([V.common,V.bumpmap,V.normalmap,V.displacementmap,{opacity:{value:1}}]),vertexShader:_a.meshnormal_vert,fragmentShader:_a.meshnormal_frag},sprite:{uniforms:ii([V.sprite,V.fog]),vertexShader:_a.sprite_vert,fragmentShader:_a.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_a.background_vert,fragmentShader:_a.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_a.backgroundCube_vert,fragmentShader:_a.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_a.cube_vert,fragmentShader:_a.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_a.equirect_vert,fragmentShader:_a.equirect_frag},distance:{uniforms:ii([V.common,V.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_a.distance_vert,fragmentShader:_a.distance_frag},shadow:{uniforms:ii([V.lights,V.fog,{color:{value:new xn(0)},opacity:{value:1}}]),vertexShader:_a.shadow_vert,fragmentShader:_a.shadow_frag}};va.physical={uniforms:ii([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new xn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new xn(0)},specularColor:{value:new xn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_a.meshphysical_vert,fragmentShader:_a.meshphysical_frag};var ya={r:0,b:0,g:0},ba=new zt,xa=new vt;xa.set(-1,0,0,0,1,0,0,0,1);function Sa(e,t,n,r,i,a){let o=new xn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Vr(new ti(1,1,1),new di({name:`BackgroundCubeMaterial`,uniforms:ri(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ba.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xa),l.material.toneMapped=Ct.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Vr(new ni(2,2),new di({name:`BackgroundMaterial`,uniforms:ri(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ya,si(e)),n.buffers.color.setClear(ya.r,ya.g,ya.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ca(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ta(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ze(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ze(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&Ze(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ea(e){let t=this,n=null,r=0,i=!1,a=!1,o=new xr,s=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Da=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ti(5,5,5),i=new di({name:`CubemapFromEquirect`,uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Vr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new $i(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Oa=256,ka=3,Aa=20,ja=256,Ma=16,Na=3,Pa=new B,Fa=new xn,Ia=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $i(1,10,null),this._boxMesh=new Vr(new ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Pa}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Fa));let h=new $i(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Oa,ut(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Oa:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=La(e,!1,!1),n=Math.log2(e)-ka;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=La(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ha()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=za(),this._integrationMaterial=Ba());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ma);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Na)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ja*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Va());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function La(e,t,n){return new Da(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:Le,depthBuffer:n})}function Ra(e,t,n){return new di({name:e,uniforms:t,vertexShader:_a.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function za(){return Ra(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ja}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ba(){return Ra(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ma}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Va(){return Ra(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Aa}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ha(){return Ra(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ua(){return Ra(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wa(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Da(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ia(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ia(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ga(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ka(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ir:rr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function qa(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ja(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Qe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ya(e,t,n){let r=new WeakMap,i=new Pt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Lt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new mt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xa(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Za={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qa(e,t,n,r,i,a){let o=new It(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new _r;u.setAttribute(`position`,new ar([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new ar([0,2,0,0,2,0],2));let d=new fi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Vr(u,d),p=new Xi(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new It(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new It(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Qr(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Ct.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Za[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var $a=new Nt,eo=new Qr(1,1),to=new $r(1),no=new Lt,ro=new Rt,io=new Zr,ao=[],oo=[],so=new Float32Array(16),co=new Float32Array(9),lo=new Float32Array(4);function uo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ao[i];if(a===void 0&&(a=new Float32Array(i),ao[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function po(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function mo(e,t){let n=oo[t];n===void 0&&(n=new Int32Array(t),oo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ho(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fo(n,t))return;e.uniform2fv(this.addr,t),po(n,t)}}function _o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fo(n,t))return;e.uniform3fv(this.addr,t),po(n,t)}}function vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fo(n,t))return;e.uniform4fv(this.addr,t),po(n,t)}}function yo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),po(n,t)}else{if(fo(n,r))return;lo.set(r),e.uniformMatrix2fv(this.addr,!1,lo),po(n,r)}}function bo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),po(n,t)}else{if(fo(n,r))return;co.set(r),e.uniformMatrix3fv(this.addr,!1,co),po(n,r)}}function xo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),po(n,t)}else{if(fo(n,r))return;so.set(r),e.uniformMatrix4fv(this.addr,!1,so),po(n,r)}}function So(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Co(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fo(n,t))return;e.uniform2iv(this.addr,t),po(n,t)}}function wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fo(n,t))return;e.uniform3iv(this.addr,t),po(n,t)}}function To(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fo(n,t))return;e.uniform4iv(this.addr,t),po(n,t)}}function Eo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Do(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fo(n,t))return;e.uniform2uiv(this.addr,t),po(n,t)}}function Oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fo(n,t))return;e.uniform3uiv(this.addr,t),po(n,t)}}function ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fo(n,t))return;e.uniform4uiv(this.addr,t),po(n,t)}}function Ao(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function jo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Ao(eo):$a,n.setTexture2D(t||a,i)}function Mo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ro,i)}function No(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Ao(to):io,n.setTextureCube(t||a,i)}function Po(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||no,i)}function Fo(e){switch(e){case 5126:return ho;case 35664:return go;case 35665:return _o;case 35666:return vo;case 35674:return yo;case 35675:return bo;case 35676:return xo;case 5124:case 35670:return So;case 35667:case 35671:return Co;case 35668:case 35672:return wo;case 35669:case 35673:return To;case 5125:return Eo;case 36294:return Do;case 36295:return Oo;case 36296:return ko;case 35678:case 36198:case 36298:case 36306:case 35682:return jo;case 35679:case 36299:case 36307:return Mo;case 35680:case 36300:case 36308:case 36293:return No;case 36289:case 36303:case 36311:case 36292:return Po}}function Io(e,t){e.uniform1fv(this.addr,t)}function Lo(e,t){let n=uo(t,this.size,2);e.uniform2fv(this.addr,n)}function Ro(e,t){let n=uo(t,this.size,3);e.uniform3fv(this.addr,n)}function zo(e,t){let n=uo(t,this.size,4);e.uniform4fv(this.addr,n)}function Bo(e,t){let n=uo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Vo(e,t){let n=uo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ho(e,t){let n=uo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Uo(e,t){e.uniform1iv(this.addr,t)}function Wo(e,t){e.uniform2iv(this.addr,t)}function Go(e,t){e.uniform3iv(this.addr,t)}function Ko(e,t){e.uniform4iv(this.addr,t)}function qo(e,t){e.uniform1uiv(this.addr,t)}function Jo(e,t){e.uniform2uiv(this.addr,t)}function Yo(e,t){e.uniform3uiv(this.addr,t)}function Xo(e,t){e.uniform4uiv(this.addr,t)}function Zo(e,t,n){let r=this.cache,i=t.length,a=mo(n,i);fo(r,a)||(e.uniform1iv(this.addr,a),po(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ao(eo):$a;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Qo(e,t,n){let r=this.cache,i=t.length,a=mo(n,i);fo(r,a)||(e.uniform1iv(this.addr,a),po(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ro,a[e])}function $o(e,t,n){let r=this.cache,i=t.length,a=mo(n,i);fo(r,a)||(e.uniform1iv(this.addr,a),po(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Ao(to):io;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function es(e,t,n){let r=this.cache,i=t.length,a=mo(n,i);fo(r,a)||(e.uniform1iv(this.addr,a),po(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||no,a[e])}function ts(e){switch(e){case 5126:return Io;case 35664:return Lo;case 35665:return Ro;case 35666:return zo;case 35674:return Bo;case 35675:return Vo;case 35676:return Ho;case 5124:case 35670:return Uo;case 35667:case 35671:return Wo;case 35668:case 35672:return Go;case 35669:case 35673:return Ko;case 5125:return qo;case 36294:return Jo;case 36295:return Yo;case 36296:return Xo;case 35678:case 36198:case 36298:case 36306:case 35682:return Zo;case 35679:case 36299:case 36307:return Qo;case 35680:case 36300:case 36308:case 36293:return $o;case 36289:case 36303:case 36311:case 36292:return es}}var ns=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fo(t.type)}},rs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ts(t.type)}},is=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},as=/(\w+)(\])?(\[|\.)?/g;function os(e,t){e.seq.push(t),e.map[t.id]=t}function ss(e,t,n){let r=e.name,i=r.length;for(as.lastIndex=0;;){let a=as.exec(r),o=as.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){os(n,l===void 0?new ns(s,e,t):new rs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new is(s),os(n,e)),n=e}}}var cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ss(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ls(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var us=37297,ds=0;function fs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ps=new vt;function ms(e){Ct._getMatrix(ps,Ct.workingColorSpace,e);let t=`mat3( ${ps.elements.map(e=>e.toFixed(4))} )`;switch(Ct.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return Ze(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function hs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+fs(e.getShaderSource(t),r)}return i}function gs(e,t){let n=ms(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var _s={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function vs(e,t){let n=_s[t];return n===void 0?(Ze(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ys=new B;function bs(){return Ct.getLuminanceCoefficients(ys),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ys.x.toFixed(4)}, ${ys.y.toFixed(4)}, ${ys.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ws).join(`
`)}function Ss(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Cs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ws(e){return e!==``}function Ts(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Es(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ds=/^[ \t]*#include +<([\w\d./]+)>/gm;function Os(e){return e.replace(Ds,ks)}function ks(e,t){let n=_a[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Os(n)}var As=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function js(e){return e.replace(As,Ms)}function Ms(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ns(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ps={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Fs(e){return Ps[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Is={302:`ENVMAP_MODE_REFRACTION`};function Ls(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Is[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Rs={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zs(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rs[e.combine]||`ENVMAP_BLENDING_NONE`}function Bs(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fs(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Ls(n),d=zs(n),f=xs(n),p=Ss(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ws).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ws).join(`
`),g.length>0&&(g+=`
`)):(h=[Ns(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ws).join(`
`),g=[Ns(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:_a.tonemapping_pars_fragment,n.toneMapping===0?``:vs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,_a.colorspace_pars_fragment,gs(`linearToOutputTexel`,n.outputColorSpace),bs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ws).join(`
`)),o=Os(o),o=Ts(o,n),o=Es(o,n),s=Os(s),s=Ts(s,n),s=Es(s,n),o=js(o),s=js(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=ls(i,i.VERTEX_SHADER,v),x=ls(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=hs(i,b,`vertex`),n=hs(i,x,`fragment`);Qe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ze(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new cs(i,m),w=Cs(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,us)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ds++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Vs=0,Hs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Us(e),t.set(e,n)),n}},Us=class{constructor(e){this.id=Vs++,this.code=e,this.usedTimes=0}};function Ws(e){return e===1030||e===37490||e===36285}function Gs(e,t,n,r,i,a){let o=new Xt,s=new Hs,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&Ze(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=va[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,ee=m.isBatchedMesh===!0,N=!!i.map,te=!!i.matcap,P=!!b,F=P&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.diffuseRoughness>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=le&&!!i.anisotropyMap,ve=ue&&!!i.clearcoatMap,ye=ue&&!!i.clearcoatNormalMap,be=ue&&!!i.clearcoatRoughnessMap,L=de&&!!i.diffuseRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,R=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let z=F?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ee,batchingColor:ee&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:te,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:F,envMapMaxLod:F?z.length-1:null,envMapSize:F?z[0].width:null,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Ws(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:_e,clearcoat:ue,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,diffuseRoughness:de,diffuseRoughnessMap:L,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:R,alphaHash:Me,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:ae&&p(i.normalMap.channel),displacementMapUv:oe&&p(i.displacementMap.channel),emissiveMapUv:se&&p(i.emissiveMap.channel),metalnessMapUv:I&&p(i.metalnessMap.channel),roughnessMapUv:ce&&p(i.roughnessMap.channel),anisotropyMapUv:_e&&p(i.anisotropyMap.channel),clearcoatMapUv:ve&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:L&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(i.sheenRoughnessMap.channel),specularMapUv:Te&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:De&&p(i.specularIntensityMap.channel),transmissionMapUv:Oe&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:je&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||le),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||je),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Ct.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=va[t];n=ci.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Bs(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ks(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function qs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Js(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ys(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||qs),r.length>1&&r.sort(t||Js),i.length>1&&i.sort(t||Js)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Xs(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ys,e.set(t,[i])):n>=r.length?(i=new Ys,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new xn};break;case`SpotLight`:n={position:new B,direction:new B,color:new xn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new xn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new xn,groundColor:new xn};break;case`RectAreaLight`:n={color:new xn,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Qs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $s=0;function ec(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function tc(e){let t=new Zs,n=Qs(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new zt,o=new zt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ec);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=V.LTC_FLOAT_1,r.rectAreaLTC2=V.LTC_FLOAT_2):(r.rectAreaLTC1=V.LTC_HALF_1,r.rectAreaLTC2=V.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=$s++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function nc(e){let t=new tc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function rc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new nc(e),t.set(n,[a])):r>=i.length?(a=new nc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ic=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ac=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oc=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],sc=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],cc=new zt,lc=new B,uc=new B;function dc(e,t,n){let i=new Jr,a=new mt,s=new mt,c=new Pt,l=new pi,u=new mi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:ic,fragmentShader:ac}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new _r;y.setAttribute(`position`,new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Vr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(Ze(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){Ze(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){Ze(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new It(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Qr(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Da(a.x),p.map.depthTexture=new $r(a.x,m)):(p.map=new It(a.x,a.y),p.map.depthTexture=new Qr(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),lc.setFromMatrixPosition(d.matrixWorld),e.position.copy(lc),uc.copy(e.position),uc.add(oc[t]),e.up.copy(sc[t]),e.lookAt(uc),e.updateMatrixWorld(),n.makeTranslation(-lc.x,-lc.y,-lc.z),cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(cc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new It(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fc(e,t){function n(){let t=!1,n=new Pt,r=null,i=new Pt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new xn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=N>=1);let P=null,F={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Pt().fromArray(ne),ae=new Pt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ce(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Qe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Qe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Qe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Qe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function L(t){t===void 0&&(t=e.TEXTURE0+M-1),P!==t&&(e.activeTexture(t),P=t)}function xe(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+M-1:P);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function R(){try{e.texImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function z(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ie(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,F={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new xn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:L,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:R,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Pe,viewport:z,reset:Le}}function pc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new mt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ke(`canvas`)}function O(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ze(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ze(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function j(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function M(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];Ze(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||Ze(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:Ct.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,Ze(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function N(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function P(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function F(e){re(e.target)}function ne(e){ie(e.target)}function re(e){e.removeEventListener(`dispose`,F),P(e),oe(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ie(e){e.removeEventListener(`dispose`,ne),P(e),I(e)}function ae(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ie(t):re(t))}C.clear(),b.clear()}function oe(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&se(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function se(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function I(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&re(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let ce=0;function le(){ce=0}function ue(){return ce}function de(e){ce=e}function fe(){let e=ce;return e>=p.maxTextures&&Ze(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ce+=1,e}function pe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function me(e,t){let n=f.get(e);if(e.isVideoTexture&&Fe(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)Ze(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)Ze(`WebGLRenderer: Texture marked for update but image is incomplete`);else{we(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?we(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ge(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Te(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ve={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ye={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},be={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function L(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&Ze(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ve[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ve[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ve[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ye[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ye[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,be[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function xe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,F),te(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=pe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&se(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ce(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Se(r.start,t.width,4),c=Se(n.start,t.width,4);r.start<=o+1&&s===c&&Se(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function we(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=xe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Ct.getPrimaries(Ct.workingColorSpace),n=t.colorSpace===``?null:Ct.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=M(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);L(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=N(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Ce(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=pa(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else Ze(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?Ze(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=pa(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Le(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Le(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n){if(t.image.length!==6)return;let r=xe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Ct.getPrimaries(Ct.workingColorSpace),o=t.colorSpace===``?null:Ct.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=M(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=N(t,h);L(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=ee(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?Ze(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ee(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=M(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),z(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function De(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;z(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=M(i.internalFormat,a,o,i.normalized,i.colorSpace);z(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Oe(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?_e(t.depthTexture,0):me(t.depthTexture,0);let o=i.__webglTexture,s=Pe(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)z(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)z(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ke(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Oe(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Oe(t.__webglFramebuffer[0],e,0):Oe(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),De(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),De(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(e,t,n){let r=f.get(e);t!==void 0&&Ee(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&ke(e)}function je(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ne),te(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&z(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=M(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),De(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),L(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Ee(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Ee(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),L(o,r),Ee(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),L(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Ee(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Ee(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&ke(e)}function R(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Me=[];function Ne(e){if(e.samples>0){if(z(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Me.length=0,Me.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Me.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function z(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Fe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ct.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ze(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Qe(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=fe,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=de,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=_e,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=z,this.dispose=ae}function mc(e,t){function n(n,r=``){let i,a=Ct.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ei(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new di({vertexShader:hc,fragmentShader:gc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vr(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new _c,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new mt,k=null,A=null,j=new Yi;j.viewport=new Pt;let M=new Yi;M.viewport=new Pt;let ee=[j,M],N=new ea,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new gn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new gn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new gn,C[e]=t),t.getHandSpace()};function F(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,F),r.removeEventListener(`selectstart`,F),r.removeEventListener(`selectend`,F),r.removeEventListener(`squeeze`,F),r.removeEventListener(`squeezestart`,F),r.removeEventListener(`squeezeend`,F),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}te=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ze(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ze(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,F),r.addEventListener(`selectstart`,F),r.addEventListener(`selectend`,F),r.addEventListener(`squeeze`,F),r.addEventListener(`squeezestart`,F),r.addEventListener(`squeezeend`,F),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new It(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Qr(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new It(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=M.near=j.near=t,N.far=M.far=j.far=n,(te!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,P=N.far),N.layers.mask=e.layers.mask|6,j.layers.mask=N.layers.mask&-5,M.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ie(N,i);for(let e=0;e<a.length;e++)ie(a[e],i);N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,N,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let oe=null;function se(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new Yi,o.layers.enable(n),o.viewport=new Pt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ei,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let I=new ha;I.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},yc=new zt,bc=new vt;bc.set(-1,0,0,0,1,0,0,0,1);function xc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,si(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(yc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(bc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Sc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?Ze(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):Ze(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Cc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wc=null;function Tc(){return wc===null&&(wc=new Wr(Cc,16,16,k,g),wc.name=`DFG_LUT`,wc.minFilter=o,wc.magFilter=o,wc.wrapS=t,wc.wrapT=t,wc.generateMipmaps=!1,wc.needsUpdate=!0),wc}var Ec=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,M=null,ee=[],N=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Ie;let oe=0,se=0,I=null,ce=-1,le=null,ue=new Pt,de=new Pt,fe=null,pe=new xn(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Pt(0,0,he,ge),L=new Pt(0,0,he,ge),xe=!1,Se=new Jr,Ce=new Xr,we=!1,Te=!1,Ee=new zt,De=new B,Oe=new Pt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?_e:1}let R=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,z,Fe,Le,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,$e,tt,nt,rt,it,at,ot,st;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),R===null){let t=`webgl2`;if(R=Me(t,e),R===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Qe(`WebGLRenderer: `+e.message),e}function ct(){Ne=new Ga(R),Ne.init(),at=new mc(R,Ne),Pe=new Ta(R,Ne,e,at),z=new fc(R,Ne),Pe.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),re=R.createFramebuffer(),ie=R.createFramebuffer(),ae=R.createFramebuffer(),Fe=new Ja(R),Le=new Ks,Re=new pc(R,Ne,z,Le,Pe,at,Fe),ze=new Wa(P),Be=new ga(R),ot=new Ca(R,Be),Ve=new Ka(R,Be,Fe,ot),He=new Xa(R,Ve,Be,ot,Fe),nt=new Ya(R,Pe,Re),Xe=new Ea(Le),We=new Gs(P,ze,Ne,Pe,ot,Xe),Ge=new xc(P,Le),Ke=new Xs,Je=new rc(Ne),tt=new Sa(P,ze,z,He,x,s),$e=new dc(P,He,Pe),st=new Sc(R,Fe,Pe,z),rt=new wa(R,Ne,Fe),it=new qa(R,Ne,Fe),Fe.programs=We.programs,P.capabilities=Pe,P.extensions=Ne,P.properties=Le,P.renderLists=Ke,P.shadowMap=$e,P.state=z,P.info=Fe}S!==1009&&(te=new Qa(S,t.width,t.height,o,r,i));let lt=new vc(P,R);this.xr=lt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){lt.isPresenting?Ze(`WebGLRenderer: Can't change size while VR device is presenting.`):(he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)Qe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ze(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.viewport(ue.copy(be).multiplyScalar(je()).round())},this.getScissor=function(e){return e.copy(L)},this.setScissor=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),z.scissor(de.copy(L).multiplyScalar(je()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),tt.dispose(),Ke.dispose(),Je.dispose(),Re.dispose(),Le.dispose(),ze.dispose(),He.dispose(),Ve.dispose(),ot.dispose(),st.dispose(),We.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,yt),lt.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),F=!0}function dt(){Ye(`WebGLRenderer: Context Restored.`),F=!1;let e=Fe.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;ct(),Fe.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function ft(e){Qe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),Le.remove(e)}function ht(e){let t=Le.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Be.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*je()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*je()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=Le.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ne!==null&&e.isNodeMaterial&&ne.setObject(r,e),we===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ne!==null&&ne.renderStart(e,t,n),M=Je.get(n),M.init(t),N.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),ne!==null&&ne.updateLights(M.state.lightsArray),Te=this.localClippingEnabled,we=Xe.init(this.clippingPlanes,Te),we===!0&&Xe.setGlobalState(this.clippingPlanes,t),ne!==null&&$e.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),M=N.pop(),ne!==null&&ne.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Le.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new ha;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,lt.setAnimationLoop(e),e===null?xt.stop():xt.start()},lt.addEventListener(`sessionstart`,yt),lt.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Qe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(F===!0)return;ne!==null&&ne.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=te!==null&&(I===null||n)&&te.begin(P,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,I),M=Je.get(e,N.length),M.init(t),M.state.textureUnits=Re.getTextureUnits(),N.push(M),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ce.setFromArrayCamera(t):Se.setFromProjectionMatrix(Ee,Ue,t.reversedDepth),Te=this.localClippingEnabled,we=Xe.init(this.clippingPlanes,Te),k=Ke.get(e,ee.length),k.init(),ee.push(k),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,P.sortObjects)}St(e,t,0,P.sortObjects),k.finish(),ne!==null&&ne.updateLights(M.state.lightsArray),P.sortObjects===!0&&k.sort(ve,ye),Ae=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ae&&tt.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),we===!0&&Xe.beginShadows();let i=M.state.shadowsArray;if($e.render(i,e,t),we===!0&&Xe.endShadows(),(r&&te.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Ae&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(k,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Ae&&tt.render(e),wt(k,e,t)}I!==null&&se===0&&(Re.updateMultisampleRenderTarget(I),Re.updateRenderTargetMipmap(I)),r&&te.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),ot.resetDefaultState(),ce=-1,le=null,N.pop(),N.length>0?(M=N[N.length-1],Re.setTextureUnits(M.state.textureUnits),we===!0&&Xe.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,ee.pop(),k=ee.length>0?ee[ee.length-1]:null,ne!==null&&ne.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=He.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),we===!0&&Xe.setGlobalState(P.clippingPlanes,n),r&&z.viewport(ue.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new It(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(pe),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&tt.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),we===!0&&Xe.setGlobalState(P.clippingPlanes,r),Et(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(pe,me),p!==void 0&&(r.viewport=p),P.toneMapping=f}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){ne!==null&&i.isNodeMaterial&&ne.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function kt(e,t,n){t.isScene!==!0&&(t=ke);let r=Le.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=We.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,P),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Mt(e,s),r.needsLights=Lt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ot(M.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function At(e,t,n,r,i){let a=Le.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=kt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=cs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=Le.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ct.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Le.get(r),y=M.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===ce;Xe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ot(M.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?At(r,t,i,s,h):kt(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ce&&(ce=r.id,w=!0),C||le!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,Re),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,Re),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,Re));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&nt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Tc()),w){if(E.setValue(R,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Ft(O,T),a&&r.fog===!0&&Ge.refreshFogUniforms(O,a),Ge.refreshMaterialUniforms(O,r,_e,ge,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of M.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}cs.upload(R,jt(v),O,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(cs.upload(R,jt(v),O,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,S),st.bind(n,S)}}return S}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=Le.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Le.get(e.texture).__webglTexture=t,Le.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Le.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=Le.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,z.viewport(ue),z.scissor(de),z.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,Le.get(e.texture).__webglTexture,Le.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Le.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Le.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?Le.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(L).multiplyScalar(_e).floor(),fe=xe;if(n!==0&&(r=re),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(ue),z.scissor(de),z.setScissorTest(fe),i){let r=Le.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Le.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Le.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function Rt(e){let t=Le.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Le.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=Rt(o);if(u.__formatReadable===!1){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=I===null?null:Le.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Le.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=Rt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,at.convert(l),at.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=I===null?null:Le.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await et(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Le.get(e),r=Le.get(t),h=Le.get(n.__renderTarget),g=Le.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Le.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Le.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Le.has(e)){let n=Le.get(e),r=Le.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,ie),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){Le.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,z.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}},Dc=Math.PI/180,H={url:`/painting.webp`,width:1500,height:1188,hfov:60*Dc,pitch:7.3*Dc};H.aspect=H.width/H.height,H.tanH=Math.tan(H.hfov/2),H.tanV=H.tanH/H.aspect,H.vfov=2*Math.atan(H.tanV);var Oc={pitch:68,bend:3e-4,hillRadius:440,viewRadius:470},kc={spireTip:[851,762],churchFoot:[851,1040],cypressDepth:17};function Ac(){return{uTime:{value:0},uBend:{value:0},uBendCenter:{value:new B},uSkyLift:{value:0},uAlive:{value:0},uHillReveal:{value:0},uFogColor:{value:new xn(.034,.06,.17)},uFogRange:{value:new mt(170,Oc.hillRadius-8)},uMoonDir:{value:new B(.4,.5,-.76).normalize()},uMoonCol:{value:new xn(.34,.5,.95)},uAmbSky:{value:new xn(.06,.12,.36)},uAmbGround:{value:new xn(.05,.045,.11)},uWarmCol:{value:new xn(1,.56,.16)},uHeadPos:{value:new B(0,-999,0)},uHeadDir:{value:new B(0,0,-1)},uHeadPower:{value:0},uStrokeDist:{value:7},tCanvas:{value:null},uPixel:{value:.001},uGlow:{value:1}}}var jc=`
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float hash31(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
             mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = mix(hash31(i), hash31(i + vec3(1.0, 0.0, 0.0)), f.x);
  float b = mix(hash31(i + vec3(0.0, 1.0, 0.0)), hash31(i + vec3(1.0, 1.0, 0.0)), f.x);
  float c = mix(hash31(i + vec3(0.0, 0.0, 1.0)), hash31(i + vec3(1.0, 0.0, 1.0)), f.x);
  float d = mix(hash31(i + vec3(0.0, 1.0, 1.0)), hash31(i + vec3(1.0, 1.0, 1.0)), f.x);
  return mix(mix(a, b, f.y), mix(c, d, f.y), f.z);
}
`,Mc=`
struct Dab {
  float id;      // random 0..1 per stroke
  float id2;     // second random per stroke
  float mask;    // 1 inside the stroke, 0 in the gap between strokes
  float across;  // -1..1 across the stroke width
  float along;   // 0..1 along the stroke
  vec2 center;   // stroke centre in p-space
};

Dab dab(vec2 p, vec2 size, float seed) {
  vec2 q = p / size;
  float row = floor(q.y);
  float ro = hash11(row * 1.37 + seed * 17.0) * 19.0;
  float x = q.x + ro;
  float col = floor(x);
  vec2 f = vec2(x - col, q.y - row);
  vec2 cid = vec2(col, row);
  Dab d;
  d.id = hash21(cid + seed * 7.13);
  d.id2 = hash21(cid * 1.7 + 3.1 + seed * 3.7);
  float len = mix(0.66, 1.0, d.id2);
  float ax = abs(f.x - 0.5) * 2.0 / len;
  float ay = abs(f.y - 0.5) * 2.0;
  // a loaded brush: full in the middle, tapering as it lifts off
  float taper = 1.0 - 0.42 * smoothstep(0.25, 1.0, ax);
  d.mask = smoothstep(1.0, 0.74, ax) * smoothstep(taper, taper - 0.40, ay);
  d.across = (f.y - 0.5) * 2.0;
  d.along = f.x;
  d.center = vec2((col + 0.5 - ro) * size.x, (row + 0.5) * size.y);
  return d;
}

// Rotate a colour's hue around the grey axis (cheap, good enough for jitter).
vec3 hueShift(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  float ca = cos(a), sa = sin(a);
  return c * ca + cross(k, c) * sa + k * dot(k, c) * (1.0 - ca);
}
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 saturate3(vec3 c, float s) { float l = luma(c); return max(vec3(0.0), mix(vec3(l), c, s)); }
`;function Nc(e,t=0,n=0){let r=Math.imul(e|0,668265261)^Math.imul(t|0,374761393)^Math.imul(n|0,2654435761);return r^=r>>>15,r=Math.imul(r,2246822507),r^=r>>>13,r=Math.imul(r,3266489909),r^=r>>>16,r>>>0}function Pc(e,t=0,n=0){return Nc(e,t,n)/4294967296}function Fc(e){return e>>>=0,function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ic(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i;a=a*a*a*(a*(a*6-15)+10),o=o*o*o*(o*(o*6-15)+10);let s=Pc(r,i,n),c=Pc(r+1,i,n),l=Pc(r,i+1,n),u=Pc(r+1,i+1,n);return s+(c-s)*a+(l-s)*o+(s-c-l+u)*a*o}function Lc(e,t,n=0,r=3){let i=.5,a=0,o=0;for(let s=0;s<r;s++)a+=i*Ic(e,t,n+s*101),o+=i,e*=2.03,t*=2.03,i*=.5;return a/o}var Rc=(e,t,n)=>e<t?t:e>n?n:e,zc=(e,t,n)=>e+(t-e)*n,Bc=(e,t,n)=>{let r=Rc((n-e)/(t-e),0,1);return r*r*(3-2*r)},Vc=(e,t,n)=>{let r=Rc((n-e)/(t-e),0,1);return r*r*r*(r*(r*6-15)+10)},Hc=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r));function Uc(e,t){let n=(t-e)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),n}var Wc=0,Gc=1,Kc=2,qc=3,Jc=4,Yc=5,Xc=56,Zc=[[1362,212,176,Kc,1,1],[532,626,100,Gc,1,-1],[150,52,62,Wc,.95,1],[346,40,36,Yc,.85,-1],[516,46,50,Wc,.9,1],[617,75,36,Yc,.85,-1],[355,207,55,Wc,.95,1],[912,97,62,Wc,.9,-1],[1055,266,58,Wc,.95,1],[489,386,40,Yc,.8,-1],[68,536,34,Gc,.7,1],[196,566,45,Wc,.85,-1],[795,432,190,qc,1,-1],[1035,560,96,Jc,.9,1]];function Qc(e,t,n=new B){let r=(2*e-1)*H.tanH,i=(2*t-1)*H.tanV,a=Math.cos(H.pitch),o=Math.sin(H.pitch);return n.set(r,i*a+o,i*o-a).normalize()}function $c(){let e=[];for(let[t,n,r,i,a,o]of Zc){let s=t/H.width,c=1-n/H.height,l=Qc(s,c),u=l.angleTo(Qc(s+r/H.width,c));e.push({dir:l,R:u,type:i,bright:a,spin:o})}let t=Fc(1889),n=(t,n)=>e.some(e=>e.dir.angleTo(t)<(e.R+n)*1.05+.02),r=(r,i,a,o,s,c=-Math.PI,l=Math.PI)=>{for(let u=0;u<400;u++){let u=c+(l-c)*t(),d=Math.asin(Math.sin(o)+(Math.sin(s)-Math.sin(o))*t());if(Math.abs(u)<42*Dc&&d<46*Dc)continue;let f=new B(Math.sin(u)*Math.cos(d),Math.sin(d),-Math.cos(u)*Math.cos(d));if(!n(f,r))return e.push({dir:f,R:r,type:i,bright:a}),!0}return!1};r(.15,Jc,1,16*Dc,30*Dc,150*Dc,210*Dc),r(.125,qc,1,14*Dc,28*Dc,70*Dc,110*Dc),r(.125,Jc,1,14*Dc,28*Dc,-110*Dc,-70*Dc),r(.11,qc,.9,50*Dc,66*Dc),r(.085,Jc,.9,30*Dc,50*Dc,110*Dc,160*Dc),r(.085,qc,.9,30*Dc,50*Dc,-160*Dc,-110*Dc);let i=0;for(;e.length<Xc&&i++<200;){let e=t(),n=e<.55?Wc:e<.8?Gc:Yc;r(.03+.034*t()*t()+(t()<.12?.02:0),n,.7+.3*t(),7*Dc,80*Dc)}return e}var el=`
uniform mat4 uInvProj;
uniform mat4 uCamWorld;
varying vec3 vDir;
void main() {
  gl_Position = vec4(position.xy, 1.0, 1.0);
  vec4 v = uInvProj * vec4(position.xy, 1.0, 1.0);
  vDir = mat3(uCamWorld) * (v.xyz / v.w);
}
`,tl=`
precision highp float;
#define NS ${Xc}
#define NPAINTED ${Zc.length}
uniform float uTime;
uniform float uStarGain;
uniform float uFlow;
uniform float uLift;
uniform int uStarCount;
uniform vec4 uStarA[NS];   // xyz direction, w angular radius
uniform vec4 uStarB[NS];   // type, seed, brightness, spin
uniform vec4 uStarC[NS];   // cos(3.05 R)
uniform sampler2D tPainting;   // the scan with the cypress painted out (raw sRGB)
uniform sampler2D tFlow;       // stroke direction (double angle) + coherence
uniform sampler2D tFill;       // the sky with the cypress painted out, blurred: colour for stand-in strokes
uniform vec2 uPaintCS;         // cos / sin of the viewpoint pitch
uniform vec2 uPaintTan;        // tan of half the canvas field, x / y
uniform float uPatch;          // 1 when the scan is loaded
uniform float uAlive;          // 0 = the still canvas, 1 = flowing, burning sky
uniform float uPaintExposure;
uniform float uScan;           // how much of the scan itself shows in the middle of the canvas' part of the sky (0 = none: painted like the rest)
varying vec3 vDir;

${jc}

const float PI = 3.14159265;
const float TAU = 6.28318531;
const float ASPECT = ${H.aspect.toFixed(6)};

vec3 srgb2lin(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}

// Colours measured on the scan itself (linear RGB), dark stroke → pale stroke.
// Everything procedural is painted in the canvas' own palette and then goes
// through the same "come alive" grade as the canvas.
vec3 blueRamp(float v) {
  // (the blues of the scan's sky, by brightness: its darkest twelfth, then its next fifth, third, quarter and
  // palest sixth. His darks keep their blue; his pales lose it.)
  const vec3 c0 = vec3(0.015, 0.026, 0.116);
  const vec3 c1 = vec3(0.033, 0.065, 0.213);
  const vec3 c2 = vec3(0.067, 0.130, 0.288);
  const vec3 c3 = vec3(0.112, 0.200, 0.347);
  const vec3 c4 = vec3(0.203, 0.300, 0.413);
  v = clamp(v, 0.0, 1.0) * 4.0;
  if (v < 1.0) return mix(c0, c1, v);
  if (v < 2.0) return mix(c1, c2, v - 1.0);
  if (v < 3.0) return mix(c2, c3, v - 2.0);
  return mix(c3, c4, v - 3.0);
}

// How one of his strokes stands to the colour of the canvas round it: t = 0 his darkest … 1 his palest,
// as a factor on the mean (the same five bands, each divided by the mean of them all — so that strokes
// toned this way are, taken together, the colour they started from). A stroke merely turned up or down
// in brightness is not one of his: pale, it is electric where his are milky; dark, it is black where
// his are ultramarine.
vec3 strokeTone(float t) {
  const vec3 d0 = vec3(0.172, 0.173, 0.399), d1 = vec3(0.380, 0.432, 0.732), m0 = vec3(0.770, 0.864, 0.989), l1 = vec3(1.287, 1.328, 1.192), l2 = vec3(2.333, 1.995, 1.418);
  if (t < 0.04) return d0;
  if (t < 0.19) return mix(d0, d1, (t - 0.04) / 0.15);
  if (t < 0.45) return mix(d1, m0, (t - 0.19) / 0.26);
  if (t < 0.725) return mix(m0, l1, (t - 0.45) / 0.275);
  return mix(l1, l2, min((t - 0.725) / 0.2, 1.0));
}

vec3 haloRamp(float t, float type) {
  vec3 core, c1, c2, c3;
  if (type < 0.5)      { core = vec3(0.66, 0.50, 0.060); c1 = vec3(0.50, 0.44, 0.100); c2 = vec3(0.36, 0.42, 0.270); c3 = vec3(0.24, 0.33, 0.430); }
  else if (type < 1.5) { core = vec3(0.64, 0.56, 0.130); c1 = vec3(0.56, 0.60, 0.520); c2 = vec3(0.40, 0.46, 0.420); c3 = vec3(0.22, 0.30, 0.380); }
  else if (type < 2.5) { core = vec3(0.74, 0.42, 0.016); c1 = vec3(0.56, 0.56, 0.230); c2 = vec3(0.36, 0.46, 0.330); c3 = vec3(0.16, 0.26, 0.370); }
  else                 { core = vec3(0.66, 0.34, 0.030); c1 = vec3(0.46, 0.40, 0.110); c2 = vec3(0.30, 0.38, 0.300); c3 = vec3(0.20, 0.28, 0.400); }
  float u = clamp(t, 0.0, 1.0) * 3.0;
  if (u < 1.0) return mix(core, c1, u);
  if (u < 2.0) return mix(c1, c2, u - 1.0);
  return mix(c2, c3, u - 2.0);
}

// The moment the painting comes alive: blues deepen and every yellow burns.
vec3 comeAlive(vec3 lin, float flick) {
  vec3 e = sqrt(max(lin, vec3(0.0)));
  float yel = clamp((e.r + e.g) * 0.5 - e.b, 0.0, 1.0);
  float hot = smoothstep(0.16, 0.50, yel) * smoothstep(0.34, 0.66, e.r) * (0.55 + 1.8 * clamp(e.r - e.g, 0.0, 0.25));
  float l = dot(lin, vec3(0.2126, 0.7152, 0.0722));
  // blues deepen; yellows keep their pallor so the crescent still reads against its halo
  vec3 c = max(vec3(0.0), mix(vec3(l), lin, 1.0 + 0.45 * uAlive * (1.0 - 0.85 * smoothstep(0.04, 0.26, yel))));
  return c * (1.0 + uAlive * uStarGain * 2.0 * hot * flick);
}

// One brush stroke of wind. Two interleaved layers of these are laid over one
// another so the sky reads as overlapping wet paint, not as tidy brickwork.
struct Stroke { vec3 col; float fx; float fy; float id; float lenv; float solid; };

// Where on the canvas the direction being shaded falls; how much a stroke there takes the canvas' own colour
// (1 on the canvas, falling away beside it); and how far outside the canvas it is, in canvas widths.
vec2 gUv = vec2(0.5);
float gIn = 0.0;
float gFar = 0.0;

Stroke windStroke(float psi, float az, float lumBase, float band, float layer, vec3 fillCol, float fillW) {
  float W = mix(0.0058, 0.0074, layer);      // (a fifth finer than they were: nearer the canvas' own, and they sit beside it better)
  float L = mix(0.058, 0.045, layer);      // (a fifth shorter than they were, like the width: nearer his)
  float rowf = psi / W + layer * 0.37;
  float row = floor(rowf);
  Stroke s;
  s.fy = rowf - row;
  float elRow = clamp((row + 0.5) * W, 0.0, 1.45);
  float nDash = max(6.0, floor(TAU * cos(elRow) / L));
  float rh = hash11(row * 3.71 + 11.0 + layer * 57.0);
  float xx = (az / TAU + 0.5) * nDash + rh * 37.0
           - uTime * uFlow * (0.4 + 0.9 * hash11(row + 5.5 + layer * 13.0));
  float colI = floor(xx);
  s.fx = xx - colI;
  float idx = mod(colI, nDash);
  s.id = hash21(vec2(idx, row + layer * 211.0));
  float id2 = hash21(vec2(idx + 17.0, row * 1.3 + 3.0 + layer * 97.0));
  float streak = hash11(row * 0.731 + 2.0 + layer * 5.0);
  float lum = lumBase + 0.22 * (streak - 0.5) + 0.26 * (s.id - 0.5);
  vec3 c = blueRamp(lum);
  if (id2 > 0.86) c = mix(c, vec3(0.126, 0.191, 0.255), 0.7);          // grey-teal
  if (id2 < 0.06) c = mix(c, vec3(0.060, 0.050, 0.200), 0.5);          // violet shadow
  c = mix(c, vec3(0.433, 0.490, 0.396), band * smoothstep(0.50, 0.95, id2 * 0.7 + s.id * 0.5) * 0.9);
  // near the canvas, take the canvas' own colour and just break it into strokes
  // (…toned as his are; and as bright, taken together, as the canvas they stand in for — the 1.07 is measured,
  // strokes alone against canvas alone in the margin where the one thins into the other: darker, they made a
  // dark border round the canvas)
  vec3 tone = strokeTone(clamp(s.id + 0.3 * (streak - 0.5), 0.0, 1.0));
  vec3 f = fillCol * tone * 1.03;
  // On the canvas itself a stroke is the colour of the canvas under its middle: the picture, painted
  // again in the hand of the rest of the sky. (The scan shown as it is — however its edge was softened,
  // however the sky round it was tuned to it — stayed a photograph of one painting let into another.)
  // Beside the canvas it is the colour of the canvas' edge at that place, carried on outward — read ever more
  // broadly, and toned ever more freely, with distance. (Past the edge the strokes used to take a ready-blurred
  // copy of the canvas instead: greyer, and the change of colour drew the edge.)
  if (gIn > 0.0) {
    vec2 mid = gUv - vec2((s.fx - 0.5) * TAU / nDash * cos(elRow) / (2.0 * uPaintTan.x), (s.fy - 0.5) * W / (2.0 * uPaintTan.y)) * (1.0 + pow((clamp(gUv, 0.0, 1.0) * 2.0 - 1.0) * uPaintTan, vec2(2.0)));
    vec3 own = srgb2lin(textureLod(tPainting, clamp(mid, 0.012, 0.988), 3.5 + 4.0 * smoothstep(0.0, 0.16, gFar)).rgb) * mix(vec3(1.0), tone, mix(0.3, 1.0, smoothstep(0.0, 0.15, gFar))) * 1.02;
    f = mix(f, own, gIn);
  }
  s.col = mix(c, f, fillW);
  s.lenv = mix(0.66, 1.0, id2);
  s.solid = 0.0;
  return s;
}

// Shade a stroke: bristle streaks, a lit upper edge (impasto), tapered ends.
vec4 lay(Stroke s, float solid) {
  float ax = abs(s.fx - 0.5) * 2.0 / s.lenv;
  float ay = abs(s.fy - 0.5) * 2.0;
  float taper = 1.0 - 0.38 * smoothstep(0.25, 1.0, ax);
  // (crisp-edged: soft-edged they looked out of focus beside the canvas)
  float mask = max(solid, smoothstep(1.0, 0.86, ax) * smoothstep(taper, taper - 0.20, ay));
  float bristle = vnoise(vec2(s.fx * 2.2 + s.id * 31.0, s.fy * 7.0 + s.id * 17.0));
  vec3 c = s.col * mix(0.84 + 0.30 * bristle, 1.0, s.solid);
  c *= 1.0 + 0.22 * (s.fy - 0.5) * 2.0 * (1.0 - solid);
  return vec4(c, mask);
}

void main() {
  vec3 d0 = normalize(vDir);
  float az = atan(d0.x, -d0.z);
  // When the town folds up into a bowl the horizon rises; the whole sky is
  // lifted with it so the low stars and the great curl are never swallowed.
  float el = (asin(clamp(d0.y, -1.0, 1.0)) - uLift) / (1.0 - uLift / 1.5708);
  el = max(el, -1.4);
  vec3 d = vec3(sin(az) * cos(el), sin(el), -cos(az) * cos(el));

  // Stream function: its level sets are the lines the wind is painted along.
  float psi = el
    + 0.045 * sin(az * 4.0 + el * 5.0 + 0.7)
    + 0.024 * sin(az * 9.0 - el * 9.0 + 2.1)
    + 0.011 * sin(az * 17.0 + el * 13.0 + uTime * 0.05);      // (half as much roll again: his sky is never level)

  int best = -1;
  float bestK = 1.2;
  vec2 bxy = vec2(0.0);
  vec2 va = vec2(0.0);     // which way the paint travels (wind + vortices)
  float vw = 0.0;
  for (int i = 0; i < NS; i++) {
    if (i >= uStarCount) break;
    vec4 A = uStarA[i];
    float c = dot(d, A.xyz);
    if (c < uStarC[i].x) continue;
    vec3 e = normalize(cross(A.xyz, vec3(0.0, 1.0, 0.0)));
    vec3 n = cross(e, A.xyz);
    vec2 xy = vec2(dot(d, e), dot(d, n));
    float r = length(xy);
    float R = A.w;
    // the wind parts around every star like water round a stone
    float a = R * 0.80;
    float fall = 1.0 - smoothstep(R * 1.9, R * 3.0, r);
    psi -= xy.y * a * a / max(r * r, a * a * 0.45) * fall;
    float k = r / R;
    if (k < bestK) { bestK = k; best = i; bxy = xy; }
    float wv = 1.0 - smoothstep(R * 1.05, R * 2.1, r);
    va += wv * uStarB[i].w * vec2(-xy.y, xy.x) / max(r, R * 0.15);
    vw += wv;
  }
  va += vec2(1.0, 0.12) * max(0.0, 1.0 - vw);

  // where this direction falls on the canvas (it is the centre of the sky)
  float zc = d.y * uPaintCS.y - d.z * uPaintCS.x;
  vec2 cuv = vec2(-9.0);
  float fillW = 0.0;
  vec3 fillCol = vec3(0.0);
  if (uPatch > 0.5 && zc > 0.05) {
    cuv = vec2(d.x, d.y * uPaintCS.x + d.z * uPaintCS.y) / zc / uPaintTan * 0.5 + 0.5;
    // distance outside the canvas (the painted part of it: the scan's last hundredth is trimmed), in canvas widths
    const vec2 lo0 = vec2(0.010, 0.008), hi0 = vec2(0.990, 0.992);
    vec2 o = max(max(lo0 - cuv, cuv - hi0), 0.0) * vec2(1.0, 1.0 / ASPECT);
    // (a wide hand-over: within a tenth of a canvas-width the palette changing read as an edge)
    float od = length(o);
    gFar = od;
    gIn = 1.0 - smoothstep(0.0, 0.30, od);
    fillW = 1.0 - smoothstep(0.0, 0.42, od);
    fillW *= fillW;
    if (fillW > 0.0) {
      // (the fill has a grey stripe 1.2-1.8% in from each side, left by its blur: sampled there it drew a pale
      // bar down the edge of the canvas)
      vec2 lo = vec2(0.032, 0.014), hi = vec2(0.968, 0.986);
      // (This ready-blurred copy now only colours the strokes well away from the canvas: held outward from the
      // edge and quickly blurred. Mirrored, every star near the frame had a yellow ghost of itself beyond it.)
      fillCol = srgb2lin(textureLod(tFill, clamp(cuv, lo, hi), 5.0 * smoothstep(0.0, 0.035, od)).rgb);
    }
  }

  // (taken here, outside any branch, so the scan is filtered correctly everywhere)
  vec2 cgx = dFdx(cuv), cgy = dFdy(cuv);

  // deep inside the canvas the scan is all there is: skip the strokes
  bool inCanvas = cuv.x > 0.0 && cuv.x < 1.0 && cuv.y > 0.0 && cuv.y < 1.0;
  float edge = inCanvas ? min(min(cuv.x - 0.010, 0.990 - cuv.x), (0.992 - cuv.y) / ASPECT) : -1.0;
  // How much of the scan itself shows here. The canvas' part of the sky is painted twice over: in the hand
  // of the rest of the sky (each stroke the colour of the canvas under it), and, over that, the scan — most
  // of all in the middle, thinning to nothing over a wide margin of uneven depth. So there is his own paint
  // to look at, and no place where it stops. (The scan alone, to its edge: a picture let into another. The
  // strokes alone: too far toward the plain sky, and none of his paint left.)
  float wScan = inCanvas ? uScan * smoothstep(0.0, 0.05 + 0.11 * vnoise3(d * 6.0 + 2.0), edge) : 0.0;
  bool needStrokes = wScan < 0.999;
  float starReal = 0.0, starFoot = 0.0;      // a star of the canvas' own: is it the painted one that shows (decided at its middle, for all of it), and are we on it
  gUv = cuv;
  vec3 col = vec3(0.0);
  if (needStrokes) {
  // ---------------------------------------------------------------- wind
  float big = vnoise3(d * 1.7 + 4.0);
  float band = exp(-pow((el - 0.115) / 0.085, 2.0)) * (0.40 + 0.60 * vnoise3(d * 1.9 + 9.0)) * (1.0 - fillW);
  float lumBase = 0.46 - 0.08 * smoothstep(0.15, 1.2, el) + 0.46 * (big - 0.5) + band * 0.30;
  Stroke sa = windStroke(psi, az, lumBase, band, 0.0, fillCol, fillW);
  Stroke sb = windStroke(psi, az, lumBase, band, 1.0, fillCol, fillW);
  vec4 la = lay(sa, sa.solid);
  vec4 lb = lay(sb, sb.solid);
  // The ground that shows between strokes: dark, out in the plain sky; on the canvas and beside it nearly the
  // strokes' own colour. (Dark there, every stroke had a hard dark edge and his paint has none: where the
  // two met, the edges were what showed.)
  float soft = max(gIn, fillW);
  col = mix(mix(vec3(0.010, 0.017, 0.052), sa.col * 0.55, 0.6), sa.col * 0.90, soft);
  col = mix(col, la.rgb, la.a);
  col = mix(col, lb.rgb, lb.a * step(0.46, sb.id));

  bool take = false;
  float fx = 0.5, fy = 0.5, sid = 0.0, lenv = 1.0, gain = 1.0, solid = 0.0;
  vec3 strokeCol = vec3(0.0);

  // ------------------------------------------------------- stars, moon, curls
  if (best >= 0) {
    vec4 A = uStarA[best];
    vec4 B = uStarB[best];
    float R = A.w, type = B.x, seed = B.y, bright = B.z, spin = B.w;
    float r = length(bxy);
    if (type > 2.5 && type < 4.5) {
      // Archimedean spiral of six interleaved bands: dark trough … pale crest.
      float hand = type < 3.5 ? 1.0 : -1.0;
      const float M = 6.0;
      float w = R * 0.60;
      float thp = mod(hand * atan(bxy.y, bxy.x) + PI + uTime * 0.045 * spin, TAU);
      float um = M * (r / w - thp / TAU);
      float srow = floor(um);
      float sfy = um - srow;
      float j = mod(srow, M);
      float turn = floor(srow / M);
      float rc = r - (sfy - 0.5) * w / M;
      float Th = thp + TAU * turn;
      float s = w * Th * Th / (2.0 * TAU) + (j + 0.5) * (w / M) * Th;
      float sx = s / 0.058 + hash11(j * 5.0 + seed * 3.0) * 7.0 - uTime * uFlow * 1.6;
      float sc = floor(sx);
      float fid = hash21(vec2(sc, j * 7.0) + seed * 5.0);
      float fid2 = hash21(vec2(sc + 9.0, j * 3.0) + seed * 2.0);
      if (rc < R * (0.72 + 0.42 * fid) && rc > 0.0) {
        take = true;
        fx = sx - sc; fy = sfy; sid = fid; lenv = mix(0.7, 1.0, fid2);
        float crest = j < 0.5 ? 0.16 : j < 1.5 ? 0.36 : j < 2.5 ? 0.62 : j < 3.5 ? 1.0 : j < 4.5 ? 0.70 : 0.30;
        float inner = 1.0 - smoothstep(0.0, 1.0, rc / R);
        float v = crest * 0.78 + inner * 0.20 + 0.20 * (fid - 0.5);
        strokeCol = blueRamp(v);
        if (j > 2.5 && j < 3.5) strokeCol = mix(strokeCol, vec3(0.50, 0.55, 0.44), 0.45 + 0.45 * fid2);
        if (fid2 > 0.90) strokeCol = mix(strokeCol, vec3(0.46, 0.44, 0.20), 0.6);
      }
    } else {
      bool moon = type > 1.5 && type < 2.5;
      float rings = clamp(floor(R / 0.0085), 4.0, 14.0);
      float Wr = R / rings;
      float k = floor(r / Wr);
      float rk = (k + 0.5) * Wr;
      float nk = max(5.0, floor(TAU * rk / 0.040 + 0.5));
      float th = atan(bxy.y, bxy.x);
      float sx = (th / TAU + 0.5) * nk + hash11(k * 7.0 + seed * 13.0) * 9.0
               + spin * uTime * 0.030 * nk / (1.0 + k * 0.7);
      float sc = floor(sx);
      float six = mod(sc, nk);
      float fid = hash21(vec2(six, k * 3.0) + seed * 5.0);
      float fid2 = hash21(vec2(six + 5.0, k * 9.0) + seed * 7.0);
      float coreK = moon ? floor(rings * 0.44) : max(1.0, floor(rings * 0.25));
      float twinkle = 0.86 + 0.14 * sin(uTime * (1.1 + seed * 2.3) + seed * 40.0);
      if (k < coreK) {
        // the burning centre: solid paint, no gaps
        take = true; solid = 1.0; sid = fid;
        float rc = r / (Wr * coreK);
        strokeCol = haloRamp(0.0, type) * (1.0 - 0.25 * rc * rc);
        gain = mix(0.9, 1.1, bright) * twinkle;
        if (moon) {
          vec2 q = bxy / (Wr * coreK);
          float cut = length(q - vec2(0.34, 0.26));
          float cres = smoothstep(0.98, 0.92, length(q)) * smoothstep(0.72, 0.80, cut);
          vec3 glow = vec3(0.74, 0.70, 0.30);
          vec3 horn = vec3(0.74, 0.42, 0.016);
          strokeCol = mix(glow, horn, cres);
          gain = 1.0;
        }
      } else if (rk < R * (0.76 + 0.40 * fid)) {
        take = true;
        fx = sx - sc; fy = r / Wr - k; sid = fid; lenv = mix(0.62, 1.0, fid2);
        float t = (k - coreK + 0.5) / (rings - coreK);
        strokeCol = haloRamp(t, type);
        strokeCol = mix(strokeCol, strokeCol.grb, (fid2 - 0.5) * 0.16);
        gain = mix(1.0, bright * twinkle, 0.5);
      }
    }
  }

  // One of the canvas' own stars is the painted one or the drawn one, whole: which, is settled at its middle.
  // (Settled point by point, a star near the margin was the drawn one above and the painted one below, with
  // the drawn one's dark rings cutting across it.)
  if (best >= 0 && best < NPAINTED && uScan > 0.0) {
    vec3 A3 = uStarA[best].xyz;
    float zs = A3.y * uPaintCS.y - A3.z * uPaintCS.x;
    vec2 cs = vec2(A3.x, A3.y * uPaintCS.x + A3.z * uPaintCS.y) / zs / uPaintTan * 0.5 + 0.5;
    float es = min(min(cs.x - 0.010, 0.990 - cs.x), (0.992 - cs.y) / ASPECT);
    starReal = smoothstep(0.30, 0.55, smoothstep(0.0, 0.05 + 0.11 * vnoise3(A3 * 6.0 + 2.0), es));
    starFoot = 1.0 - smoothstep(0.95, 1.2, bestK);
  }
  if (take) {
    Stroke sf;
    sf.col = strokeCol; sf.fx = fx; sf.fy = fy; sf.id = sid; sf.lenv = lenv; sf.solid = 0.0;
    vec4 lf = lay(sf, solid);
    vec3 under = mix(mix(vec3(0.010, 0.017, 0.052), strokeCol * 0.50, 0.6), strokeCol * 0.85, soft);
    col = mix(col, mix(under, lf.rgb, lf.a) * gain, 1.0 - starReal);
  }
  }   // needStrokes

  // ------------------------------------------------- the canvas itself
  // Looking north, the dome is the real painting: projected from the opening
  // viewpoint, its strokes creeping along their own direction once "alive".
  float paintW = 0.0;
  {
    vec2 uv = cuv;
    if (inCanvas) {
      // Toward its edge the canvas thins away into the strokes of the rest of the sky: evenly, as a wash, over
      // a margin of uneven depth. (Tried and thrown out: the strokes let in one at a time, which showed as
      // patches on the canvas; the canvas folded out over its own edge like a mirror, which showed the fold
      // as a crease and its stars twice; that fold let in stroke by stroke, a litter of scraps.)
      // (…a star of its own is painted or drawn, whole — but the painted one still thins away at the very edge of
      // the canvas: the moon's halo reaches it, and held at full strength there it ended in two ruled lines)
      float w = mix(wScan, uScan * starReal * smoothstep(0.0, 0.06, edge), starFoot);
      if (w > 0.001) {
        vec3 f = texture2D(tFlow, uv).rgb;
        float th = 0.5 * atan(f.g * 2.0 - 1.0, f.r * 2.0 - 1.0);
        vec2 t = vec2(cos(th), sin(th));
        t *= sign(dot(t, va) + 1e-4);
        vec2 fl = t * vec2(1.0, ASPECT) * (0.011 * uAlive) * (0.45 + 0.75 * f.b) * (1.0 + 0.5 * min(vw, 1.0));
        float ph = uTime * 0.17 + vnoise(uv * vec2(9.0, 7.0));
        float p0 = fract(ph), p1 = fract(ph + 0.5);
        vec3 c0 = textureGrad(tPainting, clamp(uv - fl * (p0 - 0.5), 0.002, 0.998), cgx, cgy).rgb;
        vec3 c1 = textureGrad(tPainting, clamp(uv - fl * (p1 - 0.5), 0.002, 0.998), cgx, cgy).rgb;
        vec3 pc = mix(c1, c0, 1.0 - abs(2.0 * p0 - 1.0));
        col = mix(col, srgb2lin(pc), w);
        paintW = w;
      }
    }
  }

  float flick = 0.88 + 0.12 * sin(uTime * 1.7 + az * 23.0 + el * 31.0);
  col = comeAlive(col, flick) * uPaintExposure;

  // horizon haze, and something dark below it (hills normally cover this)
  float haze = smoothstep(0.10, -0.03, el) * (1.0 - paintW);
  col = mix(col, vec3(0.040, 0.085, 0.230), haze * 0.75);
  col = mix(col, vec3(0.010, 0.022, 0.060), smoothstep(-0.02, -0.25, el) * (1.0 - paintW));

  gl_FragColor = vec4(col, 1.0);
}
`;function nl(e){let t=$c(),n=[],r=[],i=[],a=Fc(77);for(let e=0;e<Xc;e++){let o=t[e];if(o){n.push(new Pt(o.dir.x,o.dir.y,o.dir.z,o.R));let e=(o.spin||(a()<.5?-1:1))*(.6+.8*a());r.push(new Pt(o.type,a()*10,o.bright,e)),i.push(new Pt(Math.cos(Math.min(o.R*3.05,Math.PI)),0,0,0))}else n.push(new Pt(0,-1,0,.01)),r.push(new Pt(0,0,0,0)),i.push(new Pt(2,0,0,0))}let o=new _r;o.setAttribute(`position`,new nr(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let s=new di({vertexShader:el,fragmentShader:tl,uniforms:{uTime:e.uTime,uStarGain:{value:1},uFlow:{value:.11},uLift:e.uSkyLift,uStarCount:{value:t.length},uStarA:{value:n},uStarB:{value:r},uStarC:{value:i},uInvProj:{value:new zt},uCamWorld:{value:new zt},tPainting:{value:null},tFlow:{value:null},tFill:{value:null},uPaintCS:{value:new mt(Math.cos(H.pitch),Math.sin(H.pitch))},uPaintTan:{value:new mt(H.tanH,H.tanV)},uPatch:{value:0},uAlive:e.uAlive,uPaintExposure:{value:1},uScan:{value:.8}},depthWrite:!1,depthFunc:3}),c=new Vr(o,s);return c.frustumCulled=!1,c.renderOrder=50,{mesh:c,material:s,features:t,moonDir:t[0].dir.clone(),setCanvas(e,t,n){s.uniforms.tPainting.value=e,s.uniforms.tFlow.value=t,s.uniforms.tFill.value=n,s.uniforms.uPatch.value=1},update(e){s.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),s.uniforms.uCamWorld.value.copy(e.matrixWorld)}}}var rl=Oc.pitch,il=new Map,al=new Map,ol=new Map,sl=new Map;function cl(e){let t=il.get(e);return t===void 0&&(t=e*rl+(Math.abs(e)<=1?0:(Pc(e,11,1)-.5)*20),il.set(e,t)),t}function ll(e){let t=al.get(e);return t===void 0&&(t=e*rl+(e>=-2&&e<=1?0:(Pc(e,23,2)-.5)*20),al.set(e,t)),t}function ul(e){let t=ol.get(e);return t===void 0&&(t=e===0||Pc(e,5,3)<.26?5:3.6,ol.set(e,t)),t}function dl(e){let t=sl.get(e);return t===void 0&&(t=Pc(e,7,4)<.26?5:3.6,sl.set(e,t)),t}function fl(e){let t=Math.floor(e/rl);return e<cl(t)?t--:e>=cl(t+1)&&t++,t}function pl(e){let t=Math.floor(e/rl);return e<ll(t)?t--:e>=ll(t+1)&&t++,t}function ml(e,t){return e+12*Math.sin(t*.0151+.6)+4.2*Math.sin(t*.0397+e*.0113+2.1)}function hl(e,t){return t+11*Math.sin(e*.0137+1.9)+4*Math.sin(e*.0421-t*.0127+.4)}function gl(e,t,n){let r=e,i=t;for(let n=0;n<6;n++)r+=e-ml(r,i),i+=t-hl(r,i);return n[0]=r,n[1]=i,n}var _l=(()=>{let e={gx:31,gz:-31},t={x:ml(e.gx,e.gz),z:hl(e.gx,e.gz)},n=(e,t)=>{let n=(2*e/H.width-1)*H.tanH,r=(1-2*t/H.height)*H.tanV,i=Math.cos(H.pitch),a=Math.sin(H.pitch);return[n,r*i+a,r*a-i]},r=n(...kc.churchFoot),i=n(...kc.spireTip),a=Math.hypot(r[0],r[2]),o=30/(-r[1]/a),s=Math.atan2(r[0],-r[2]),c={x:t.x-Math.sin(s)*o,z:t.z+Math.cos(s)*o},l=gl(c.x,c.z,[0,0]);return{church:e,churchWorld:t,drop:30,eye:3.3,spireHeight:30+o*(i[1]/Math.hypot(i[0],i[2])),camWorld:c,camGrid:{gx:l[0],gz:l[1]},knoll:{gx:l[0]-2,gz:l[1]+12,sigma:50},bike:{gx:0,gz:60,heading:-Math.PI/2}}})();function vl(e,t){let n=Bc(.4,.54,Lc(e/720+31.7,t/720-12.3,7,2)),r=e/330,i=(t+560)/240;return n=Math.max(n,1-Bc(.75,1,Math.hypot(r,i))),n*=Bc(240,330,Math.hypot(e-10,(t+40)*.9)),n}function yl(e,t){let n=_l.knoll,r=e-n.gx,i=t-n.gz;i>0&&(i*=.5);let a=Math.hypot(r,i)/n.sigma;return Math.exp(-a*a*a*a)}var bl=0;function xl(e,t){let n=2.2*(Ic(e/150+3.3,t/150+7.1,5)-.5)*2,r=Bc(380,640,Math.hypot(e,t+40));if(r>0){let i=1-vl(e,t),a=Lc(e/480+5.1,t/480+8.7,13,3);n+=r*i*i*30*a*a}return n}function U(e,t){return xl(e,t)+bl*yl(e,t)}{let e=_l.camGrid,t=xl(_l.church.gx,_l.church.gz);bl=(t+_l.drop-_l.eye-xl(e.gx,e.gz))/yl(e.gx,e.gz),_l.churchY=t,_l.camY=t+_l.drop}var Sl=new Map;function Cl(e,t){let n=e*65536+t,r=Sl.get(n);if(r!==void 0)return r;let i=(cl(e)+cl(e+1))/2,a=(ll(t)+ll(t+1))/2,o=Pc(e,t,77);if(e===0&&t===-1)r=`plaza`;else if((e===-1||e===0)&&t>=-2&&t<=0)r=`town`;else if(yl(i,a)>.02||Math.abs(e)<=1&&t>=1&&t<=3)r=`knoll`;else{let e=vl(i,a);r=e>.5?e>.7&&o<.11?`plaza`:`town`:Math.hypot(i-10,a+40)<330?o<.62?`grove`:o<.85?`field`:`meadow`:o<.3?`grove`:o<.72?`field`:`meadow`}return Sl.set(n,r),r}var wl=e=>e===`town`||e===`plaza`,Tl=[[0,873],[90,880],[180,888],[300,892],[420,890],[540,885],[590,858],[630,835],[700,818],[745,832],[790,852],[840,872],[866,848],[900,800],[990,770],[1100,752],[1200,728],[1275,700],[1335,660],[1372,612],[1440,600],[1500,598]],El=_l.camY,Dl=(e,t)=>Math.exp(-(e*e)/(t*t)),Ol=e=>(e=(e+Math.PI)%(Math.PI*2),e<0&&(e+=Math.PI*2),e-Math.PI),kl=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Al=null;function jl(e,t){Al||=Tl.map(([e,t])=>{let n=Qc(e/H.width,1-t/H.height);return[Math.atan2(n.x,-n.z),n.y/Math.hypot(n.x,n.z)]});let n=Al,r;if(e<=n[0][0])r=n[0][1];else if(e>=n[n.length-1][0])r=n[n.length-1][1];else{let t=1;for(;n[t][0]<e;)t++;let i=(e-n[t-1][0])/(n[t][0]-n[t-1][0]),a=i*i*(3-2*i);r=n[t-1][1]+(n[t][1]-n[t-1][1])*a}return El+t*r}function Ml(e,t){return t===0?52+14*Math.sin(e*3+2)+9*Math.sin(e*5+4)+6*Math.sin(e*11+.9)+3*Math.sin(e*23+4.1)+30*Dl(e-2.4,.3)+24*Dl(e+2,.25):30+9*Math.sin(e*4+.4)+6*Math.sin(e*7+3.1)+4*Math.sin(e*13+1.7)+2*Math.sin(e*29+.3)}var Nl=e=>Math.sqrt(Math.sin(e)**2+.09)-.3,Pl=(e,t)=>14*Nl(e*8.3+.6+t*1.7)+8.5*Nl(e*13.7+2+t*.9)+2.5*Math.sin(e*29+1+t),Fl=(e,t)=>Pl(e,t)-.5*(Pl(Math.PI,t)-Pl(-Math.PI,t))*(e/Math.PI)*kl(Math.PI-.6,Math.PI,Math.abs(e));function Il(e,t,n){let r=Ol(e),i=kl(.86,.5,Math.abs(r)),a=jl(r,n),o=kl(jl(-.4,n),jl(.5,n),a),s=t===0?Math.max(a,22)+(1-.65*o)*(2+1.15*Pl(r,0)):Math.max(a*.5-2,12)+.9*Pl(r,1);return(Ml(r,t)+.45*Fl(r,t+2))*(1-i)+s*i}var Ll=`
attribute float aRidge;
attribute float aAz;
uniform vec3 uCenter;
uniform float uBend;
varying float vRidge;
varying float vY;
varying float vAz;
varying float vR;
void main() {
  float R = length(position.xz);
  vec3 wp = vec3(uCenter.x + position.x, position.y + uBend * R * R, uCenter.z + position.z);
  vRidge = aRidge;
  vY = position.y;
  vAz = aAz;
  vR = R;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,Rl=`
precision highp float;
uniform float uLayer;
uniform float uTime;
uniform float uReveal;
uniform float uAlive;
uniform vec3 uFogColor;
varying float vRidge;
varying float vY;
varying float vAz;
varying float vR;
${jc}
const float TAU = 6.28318531;
const vec3 DARK = vec3(0.013, 0.019, 0.048);
// palette measured on the painted hills
vec3 ramp(float v) {
  vec3 deep = mix(vec3(0.030, 0.049, 0.139), vec3(0.018, 0.030, 0.085), uLayer);
  vec3 mid  = mix(vec3(0.048, 0.086, 0.240), vec3(0.030, 0.056, 0.150), uLayer);
  vec3 lite = mix(vec3(0.090, 0.150, 0.360), vec3(0.050, 0.095, 0.230), uLayer);
  v = clamp(v, 0.0, 1.0);
  return v < 0.5 ? mix(deep, mid, v * 2.0) : mix(mid, lite, v * 2.0 - 1.0);
}
// One coat of strokes: long, thin, running with the slope, as the sky's run with the wind (they are
// the same size on screen). k = 0 is the first coat, 1 a second laid over it at another lean: one coat
// alone, with the dark ground showing round every stroke, read as brickwork next to the canvas.
vec4 coat(float k, float depth, float a01, float circ, float d01) {
  float SL = 0.24 + 0.13 * k;
  float Wh = mix(3.3, 3.9, k);
  float Lh = mix(40.0, 29.0, k);
  float nT = floor(circ * sin(SL) / Wh + 0.5);
  float nS = floor(circ * cos(SL) / Lh + 0.5);
  float wave = 3.2 * sin(vAz * 23.0 + depth * 0.07 + k * 2.0) + 1.7 * sin(vAz * 61.0 - depth * 0.05 + 2.0 + k);
  float t = (depth + wave) * cos(SL) / Wh + a01 * nT + k * 0.5;
  float row = floor(t);
  float fy = t - row;
  float rh = hash11(row * 2.31 + uLayer * 19.0 + k * 7.0);
  float xx = a01 * nS - depth * sin(SL) / Lh + rh * 23.0;
  float c = floor(xx);
  float fx = xx - c;
  float id = hash21(vec2(c, row + uLayer * 50.0 + k * 91.0));
  float id2 = hash21(vec2(c + 7.0, row * 1.9 + 4.0 + uLayer * 50.0 + k * 13.0));
  float v = 0.50 - 0.20 * d01 + 0.62 * (id - 0.5) + 0.24 * (vnoise3(vec3(cos(vAz) * 9.0, sin(vAz) * 9.0, depth * 0.03)) - 0.5);
  vec3 col = ramp(v);
  if (id2 > 0.88) col = mix(col, vec3(0.056, 0.093, 0.109), 0.6);       // grey-green
  if (id2 < 0.12) col = mix(col, vec3(0.168, 0.245, 0.393), 0.6);       // pale highlight
  float lenv = mix(0.7, 1.0, id2);
  float ax = abs(fx - 0.5) * 2.0 / lenv, ay = abs(fy - 0.5) * 2.0;
  float taper = 1.0 - 0.4 * smoothstep(0.2, 1.0, ax);
  float mask = smoothstep(1.0, 0.86, ax) * smoothstep(taper, taper - 0.3, ay);
  float bristle = vnoise(vec2(fx * 2.2 + id * 31.0, fy * 7.0 + id * 17.0));
  col *= 0.84 + 0.30 * bristle;
  col *= 1.0 - 0.16 * (fy - 0.5) * 2.0;
  return vec4(col, mask * step(0.40 * k, id));
}
void main() {
  float depth = vRidge - vY;
  float circ = TAU * vR;
  float a01 = fract(vAz / TAU + 0.5);          // the one seam sits due south, behind the start
  float d01 = clamp(depth / 60.0, 0.0, 1.0);

  // A slow, cloud-soft cross-fade over the painted hills. (Dark strokes switching on one by one over
  // the canvas looked like an attack on it.)
  // (The ring of hills closes due north, in the middle of the opening view, where vAz jumps from 2 pi to 0.
  // Whatever is read off the azimuth has to come round to the same value there: the noise is taken on a
  // circle, the waves have whole or half-whole counts. Noise read straight off vAz faded the two sides of
  // north in at different rates: a ruled vertical line down the hills for as long as they were coming in.)
  float born = vnoise3(vec3(cos(vAz) * 7.0 + uLayer * 3.0, sin(vAz) * 7.0, depth * 0.035));
  float shown = smoothstep(born * 0.25, born * 0.25 + 0.75, uReveal);
  if (shown < 0.004) discard;

  vec4 A = coat(0.0, depth, a01, circ, d01);
  vec4 B = coat(1.0, depth, a01, circ, d01);
  vec3 col = mix(DARK, ramp(0.34 - 0.18 * d01), 0.75);      // the underpainting that shows between strokes
  col = mix(col, A.rgb, A.a);
  col = mix(col, B.rgb, B.a);

  // drawn in outline, as he drew them: the ridge, and the brows of the nearer hills inside it
  float crest = smoothstep(5.2, 1.0, depth + 1.6 * sin(vAz * 37.0));
  float h1 = 34.0 - 15.0 * abs(sin(vAz * 5.5 + 1.1 + uLayer * 2.0)) + 4.0 * sin(vAz * 12.0 + 0.4);
  float h2 = 66.0 - 20.0 * abs(sin(vAz * 3.5 + 2.6 + uLayer)) + 5.0 * sin(vAz * 9.0 + 1.9);
  float brow = max(smoothstep(2.4, 0.7, abs(depth - h1)), 0.8 * smoothstep(2.8, 0.8, abs(depth - h2)));
  // (just under each brow the slope catches the light)
  float lit = max(smoothstep(11.0, 2.5, depth - h1) * step(h1, depth), smoothstep(13.0, 3.0, depth - h2) * step(h2, depth));
  col *= 1.0 + 0.35 * lit * smoothstep(0.55, 1.0, uReveal);
  // (the outlines are inked in last: drawn from the start, they were dark bands arriving on the canvas ahead of the hills)
  col = mix(col, DARK, max(crest * 0.85, brow * 0.7) * smoothstep(0.55, 1.0, uReveal));

  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(vec3(0.0), mix(vec3(l), col, 1.0 + 0.45 * uAlive));

  // the foot of the hills dissolves into the valley haze
  col = mix(col, uFogColor, smoothstep(30.0, 110.0, depth) * 0.9);
  gl_FragColor = vec4(col, shown);
}
`;function zl(e){let t=new mn,n=[];for(let r=0;r<2;r++){let i=Oc.hillRadius+(r===0?26:0),a=new Float32Array(4326),o=new Float32Array(1442),s=new Float32Array(1442),c=[];for(let e=0;e<=720;e++){let t=e/720*Math.PI*2,n=Il(t,r,i),l=Math.sin(t)*i,u=-Math.cos(t)*i;if(a.set([l,n,u,l,-300,u],e*6),o[e*2]=o[e*2+1]=n,s[e*2]=s[e*2+1]=t,e<720){let t=e*2,n=t+1,r=t+2,i=t+3;c.push(t,r,n,n,r,i)}}let l=new _r;l.setAttribute(`position`,new nr(a,3)),l.setAttribute(`aRidge`,new nr(o,1)),l.setAttribute(`aAz`,new nr(s,1)),l.setIndex(c);let u=new Vr(l,new di({vertexShader:Ll,fragmentShader:Rl,uniforms:{uLayer:{value:r},uTime:e.uTime,uBend:e.uBend,uCenter:e.uBendCenter,uReveal:e.uHillReveal,uAlive:e.uAlive,uFogColor:e.uFogColor},side:2}));u.frustumCulled=!1,u.renderOrder=40-r,t.add(u),n.push(u)}let r=!1;return{group:t,layers:n,setReveal:e=>{let t=e<.999;t!==r&&(r=t,n.forEach((e,n)=>{e.material.transparent=t,e.material.depthWrite=!t,e.renderOrder=t?39+n:40-n,e.material.needsUpdate=!0}))}}}var Bl=`
uniform float uBend;
uniform vec3 uBendCenter;
varying vec3 vCam;
void main() {
  vCam = position;                      // geometry is authored in viewpoint space
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec2 dxz = wp.xz - uBendCenter.xz;
  wp.y += uBend * dot(dxz, dxz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Vl={x:186,y:1016,lean:.22,bush:270,inner:560},Hl=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Ul=e=>{let t=e-Vl.y;return Vl.x-Vl.lean*t+Hl(0,44,t)*(7*Math.sin(t/31+.6)+4*Math.sin(t/13+2.1))},Wl=`
precision highp float;
#define CW ${H.width.toFixed(1)}
#define CH ${H.height.toFixed(1)}
#define FOOT_X ${Vl.x.toFixed(1)}
#define FOOT_Y ${Vl.y.toFixed(1)}
#define FOOT_LEAN ${Vl.lean.toFixed(3)}
#define FOOT_BUSH ${Vl.bush.toFixed(1)}
#define FOOT_IN ${Vl.inner.toFixed(1)}
uniform sampler2D tPainting;
uniform sampler2D tCypress;
uniform vec2 uPaintTan;
uniform float uPaintExposure;
uniform float uAlive;
varying vec3 vCam;
vec3 srgb2lin(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}
// the left edge of the tree's foot in canvas pixels, f pixels below FOOT_Y (as footEdge() above)
float footEdge(float f) {
  return FOOT_X - FOOT_LEAN * f + smoothstep(0.0, 44.0, f) * (7.0 * sin(f / 31.0 + 0.6) + 4.0 * sin(f / 13.0 + 2.1));
}
void main() {
  vec2 uv = vCam.xy / -vCam.z / uPaintTan * 0.5 + 0.5;
  // Below the canvas edge the paint is mirrored, and sinks into shadow.
  // (The mirror stands a little above the very edge: the last few rows of the scan
  // are bare canvas and the scratches of the frame, pale horizontal dashes that would
  // otherwise run across the tree's foot. The mirrored paint is drawn out to twice
  // its length: at its own size the foot of the tree was plainly its own reflection.)
  float dv = uv.y - 0.040;
  vec2 uvc = vec2(uv.x, clamp(0.040 + (dv < 0.0 ? -0.5 * dv : dv), 0.040, 0.999));
  float f = (1.0 - uv.y) * CH - FOOT_Y;
  if (f > 0.0) {
    float xp = uv.x * CW, xc = footEdge(f);
    if (xp < xc) discard;
    // (the bushes are painted over the foot out to FOOT_BUSH: the tree's own paint is drawn out to its edge instead)
    float xb = max(xc, mix(FOOT_X, FOOT_BUSH, smoothstep(4.0, 46.0, (1.0 - uvc.y) * CH - FOOT_Y)));
    if (xp < FOOT_IN) uvc.x = (FOOT_IN - (FOOT_IN - xp) * (FOOT_IN - xb) / (FOOT_IN - xc)) / CW;
  }
  if (texture2D(tCypress, uvc).r < 0.5) discard;
  vec3 c = srgb2lin(texture2D(tPainting, uvc).rgb);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(vec3(0.0), mix(vec3(l), c, 1.0 + 0.3 * uAlive));
  c *= mix(1.0, 0.28, smoothstep(0.075, -0.05, uv.y));
  gl_FragColor = vec4(c * uPaintExposure, 1.0);
}
`,Gl=[[47,1125,38,42],[130,1105,40,48],[186,1108,24,40],[218,1150,55,50],[141,1160,131,50]],Kl={depth:16.2,base:1160,left:10,right:272,lean:.15,inL:120,inR:200},ql=e=>Kl.left-Kl.lean*e-Hl(0,40,e)*(5*Math.sin(e/27+1)+3*Math.sin(e/11+.4)),Jl=e=>Kl.right+Kl.lean*e+Hl(0,40,e)*(5*Math.sin(e/24+2.2)+3*Math.sin(e/12+1.1)),Yl=(e,t)=>{let n=t-Kl.base;if(n>0)return e>ql(n)&&e<Jl(n);for(let[n,r,i,a]of Gl){let o=(e-n)/i,s=(t-r)/a;if(o*o+s*s<1)return!0}return!1},Xl=`
precision highp float;
#define CW ${H.width.toFixed(1)}
#define CH ${H.height.toFixed(1)}
#define BUSH_BASE ${Kl.base.toFixed(1)}
#define BUSH_LEFT ${Kl.left.toFixed(1)}
#define BUSH_RIGHT ${Kl.right.toFixed(1)}
#define BUSH_LEAN ${Kl.lean.toFixed(3)}
#define BUSH_INL ${Kl.inL.toFixed(1)}
#define BUSH_INR ${Kl.inR.toFixed(1)}
uniform sampler2D tPainting;
uniform vec2 uPaintTan;
uniform float uPaintExposure;
uniform float uAlive;
varying vec3 vCam;
vec3 srgb2lin(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
}
// (as bushLeft(), bushRight() and bushIn() above)
float bushL(float f) { return BUSH_LEFT - BUSH_LEAN * f - smoothstep(0.0, 40.0, f) * (5.0 * sin(f / 27.0 + 1.0) + 3.0 * sin(f / 11.0 + 0.4)); }
float bushR(float f) { return BUSH_RIGHT + BUSH_LEAN * f + smoothstep(0.0, 40.0, f) * (5.0 * sin(f / 24.0 + 2.2) + 3.0 * sin(f / 12.0 + 1.1)); }
bool bushIn(vec2 p) {
  float f = p.y - BUSH_BASE;
  if (f > 0.0) return p.x > bushL(f) && p.x < bushR(f);
${Gl.map(e=>`  if (length((p - vec2(${e[0].toFixed(1)}, ${e[1].toFixed(1)})) / vec2(${e[2].toFixed(1)}, ${e[3].toFixed(1)})) < 1.0) return true;`).join(`
`)}
  return false;
}
void main() {
  vec2 uv = vCam.xy / -vCam.z / uPaintTan * 0.5 + 0.5;
  vec2 p = vec2(uv.x * CW, (1.0 - uv.y) * CH);
  if (!bushIn(p)) discard;
  // below the canvas edge the paint is mirrored, drawn out to twice its length, and sinks into shadow
  // (the mirror stands just above the strip of bare canvas along the edge)
  float dv = uv.y - 0.014;
  vec2 uvc = vec2(uv.x, clamp(0.014 + (dv < 0.0 ? -0.5 * dv : dv), 0.014, 0.999));
  // (where the sides lean out past the painted bank, its paint is drawn out to them)
  float f = p.y - BUSH_BASE;
  if (f > 0.0) {
    if (p.x < BUSH_INL) uvc.x = (BUSH_INL - (BUSH_INL - p.x) * (BUSH_INL - BUSH_LEFT) / (BUSH_INL - bushL(f))) / CW;
    else if (p.x > BUSH_INR) uvc.x = (BUSH_INR + (p.x - BUSH_INR) * (BUSH_RIGHT - BUSH_INR) / (bushR(f) - BUSH_INR)) / CW;
  }
  vec3 c = srgb2lin(texture2D(tPainting, uvc).rgb);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(vec3(0.0), mix(vec3(l), c, 1.0 + 0.3 * uAlive));
  c *= mix(1.0, 0.3, smoothstep(0.012, -0.07, uv.y));
  gl_FragColor = vec4(c * uPaintExposure, 1.0);
}
`;function Zl(e,t){let n=H.width,r=H.height,i=Kl.depth,a=1044,o=r+150,s=Math.ceil((o-a)/6),c=i*2*H.tanH/n,l=Math.ceil((o-a)/2)+1,u=new Float32Array(202*l);for(let e=0;e<l;e++)for(let t=0;t<202;t++)u[e*202+t]=Yl(-66+t*2,a+e*2)?1e6:0;let d=(e,t,n,r,i,a)=>{let o=t+r,s=n+i;o>=0&&s>=0&&s<202&&(u[e]=Math.min(u[e],u[o*202+s]+a))};for(let e=0;e<l;e++)for(let t=0;t<202;t++){let n=e*202+t;d(n,e,t,0,-1,1),d(n,e,t,-1,0,1),d(n,e,t,-1,-1,1.414),d(n,e,t,-1,1,1.414)}for(let e=l-1;e>=0;e--)for(let t=201;t>=0;t--){let n=e*202+t;t+1<202&&(u[n]=Math.min(u[n],u[n+1]+1)),e+1<l&&(u[n]=Math.min(u[n],u[n+202]+1),t+1<202&&(u[n]=Math.min(u[n],u[n+202+1]+1.414)),t>0&&(u[n]=Math.min(u[n],u[n+202-1]+1.414)))}let f=(e,t)=>u[Math.min(l-1,Math.round((t-a)/2))*202+Math.min(201,Math.round((e- -66)/2))]*2,p=68*(s+1),m=new Float32Array(p*2*3);for(let e=0;e<=s;e++)for(let t=0;t<=67;t++){let o=-66+t*6,s=a+e*6,l=.5*(Math.min(f(o,s),60)*c)**.6,u=(2*o/n-1)*H.tanH,d=(1-2*s/r)*H.tanV,h=e*68+t,g=i-l,_=i+l*1.15;m.set([u*g,d*g,-g],h*3),m.set([u*_,d*_,-_],(p+h)*3)}let h=[];for(let e=0;e<s;e++)for(let t=0;t<67;t++){let n=!1;for(let r=0;r<=3&&!n;r++)for(let i=0;i<=3;i++)if(Yl(-66+(t+i/3)*6,a+(e+r/3)*6)){n=!0;break}if(!n)continue;let r=e*68+t,i=r+1,o=r+67+1,s=o+1;h.push(r,o,i,i,o,s),h.push(p+r,p+i,p+o,p+i,p+s,p+o)}let g=new _r;g.setAttribute(`position`,new nr(m,3)),g.setIndex(h),g.computeBoundingSphere();let _=new Vr(g,new di({vertexShader:Bl,fragmentShader:Xl,uniforms:{tPainting:{value:t},uPaintTan:{value:new mt(H.tanH,H.tanV)},uPaintExposure:{value:1},uAlive:e.uAlive,uBend:e.uBend,uBendCenter:e.uBendCenter},side:2}));return _.frustumCulled=!1,_.renderOrder=5,_}function Ql(e,t,n){let r=H.width,i=H.height,a=kc.cypressDepth,o=document.createElement(`canvas`);o.width=r,o.height=i;let s=o.getContext(`2d`,{willReadFrequently:!0});s.drawImage(n.image,0,0,r,i);let c=s.getImageData(0,0,r,i).data,l=(e,t,n)=>{let a=t<i?t:2*i-2-t;return c[(Math.min(i-1,Math.max(0,a))*r+Math.min(r-1,Math.max(0,e)))*4+n]},u=(e,t)=>t>Vl.y&&e<Ul(t)?0:l(e,t,0)/255,d=(e,t)=>Math.min(l(e,t,1)/255*160,t>Vl.y?Math.max(0,e-Ul(t)):1/0),f=i+150,p=Math.ceil((f-24)/8),m=a*2*H.tanH/r,h=new Uint8Array(91*p);for(let e=0;e<p;e++)for(let t=0;t<91;t++){let n=0,r=0+t*8-1,i=24+e*8-1;for(let e=i;e<=i+8+2&&!n;e+=2)for(let t=r;t<=r+8+2;t+=2)if(u(t,e)>.02){n=1;break}h[e*91+t]=n}let g=92*(p+1),_=new Float32Array(g*2*3);for(let e=0;e<=p;e++)for(let t=0;t<=91;t++){let n=0+t*8,o=24+e*8,s=d(n,o)*m,c=u(n,o)>.3?.7*s**.6:0,l=(2*n/r-1)*H.tanH,f=(1-2*o/i)*H.tanV,p=e*92+t,h=a-c,v=a+c*1.15;_.set([l*h,f*h,-h],p*3),_.set([l*v,f*v,-v],(g+p)*3)}let v=[];for(let e=0;e<p;e++)for(let t=0;t<91;t++){if(!h[e*91+t])continue;let n=e*92+t,r=n+1,i=n+91+1,a=i+1;v.push(n,i,r,r,i,a),v.push(g+n,g+r,g+i,g+r,g+a,g+i)}let y=new _r;y.setAttribute(`position`,new nr(_,3)),y.setIndex(v),y.computeBoundingSphere();let b=new Vr(y,new di({vertexShader:Bl,fragmentShader:Wl,uniforms:{tPainting:{value:t},tCypress:{value:n},uPaintTan:{value:new mt(H.tanH,H.tanV)},uPaintExposure:{value:1},uAlive:e.uAlive,uBend:e.uBend,uBendCenter:e.uBendCenter},side:2}));return b.frustumCulled=!1,b.renderOrder=5,b.add(Zl(e,t)),b}var $l=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,eu=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;      // source texel
uniform float uThreshold;
uniform float uKnee;
varying vec2 vUv;
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 pre(vec3 c) {
  c = min(c, vec3(48.0));
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float contrib = max(soft, br - uThreshold) / max(br, 1e-4);
  return c * contrib;
}
void main() {
  // 4 bilinear taps, Karis-weighted so single hot pixels do not flicker
  vec3 a = pre(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb);
  vec3 b = pre(texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb);
  vec3 c = pre(texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb);
  vec3 d = pre(texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb);
  float wa = 1.0 / (1.0 + luma(a)), wb = 1.0 / (1.0 + luma(b));
  float wc = 1.0 / (1.0 + luma(c)), wd = 1.0 / (1.0 + luma(d));
  gl_FragColor = vec4((a * wa + b * wb + c * wc + d * wd) / (wa + wb + wc + wd), 1.0);
}
`,tu=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel * 0.5;
  vec3 s = texture2D(tSrc, vUv).rgb * 4.0;
  s += texture2D(tSrc, vUv - h).rgb;
  s += texture2D(tSrc, vUv + h).rgb;
  s += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb;
  s += texture2D(tSrc, vUv - vec2(h.x, -h.y)).rgb;
  gl_FragColor = vec4(s / 8.0, 1.0);
}
`,nu=`
precision highp float;
uniform sampler2D tSrc;     // smaller mip being upsampled
uniform sampler2D tAdd;     // this level's own content
uniform vec2 uTexel;        // texel of tSrc
uniform float uSpread;
uniform float uMix;         // how much of the wider glow to keep at this level
varying vec2 vUv;
void main() {
  vec2 h = uTexel * uSpread;
  vec3 s = texture2D(tSrc, vUv + vec2(-h.x * 2.0, 0.0)).rgb;
  s += texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(0.0, h.y * 2.0)).rgb;
  s += texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(h.x * 2.0, 0.0)).rgb;
  s += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(0.0, -h.y * 2.0)).rgb;
  s += texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb * 2.0;
  gl_FragColor = vec4(mix(texture2D(tAdd, vUv).rgb, s / 12.0, uMix), 1.0);
}
`,ru=`
precision highp float;
uniform sampler2D tDepth;
uniform mat4 uInvProj;
uniform vec2 uProjScale;
uniform vec2 uTexel;
uniform vec2 uFull;         // size of the depth buffer, in texels
uniform float uRadius;
uniform float uIntensity;
varying vec2 vUv;
// The position seen at uv. This pass runs at half resolution, so its pixel
// centres fall exactly on the seams between depth texels; left alone, each
// lookup rounds to one side or the other at random, and on ground seen at a
// shallow angle that put alternate rows a whole texel of depth apart — stripes
// of false shadow. So every lookup is moved to the centre of the texel it
// actually reads.
vec3 viewPos(vec2 uv) {
  uv = (floor(uv * uFull) + 0.5) / uFull;
  float d = texture2D(tDepth, uv).x;
  vec4 p = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return p.xyz / p.w;
}
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void main() {
  float d = texture2D(tDepth, vUv).x;
  if (d > 0.99995) { gl_FragColor = vec4(1.0); return; }
  vec3 P = viewPos(vUv);
  vec3 Pr = viewPos(vUv + vec2(uTexel.x, 0.0)), Pl = viewPos(vUv - vec2(uTexel.x, 0.0));
  vec3 Pu = viewPos(vUv + vec2(0.0, uTexel.y)), Pd = viewPos(vUv - vec2(0.0, uTexel.y));
  vec3 dx = abs(Pr.z - P.z) < abs(P.z - Pl.z) ? Pr - P : P - Pl;
  vec3 dy = abs(Pu.z - P.z) < abs(P.z - Pd.z) ? Pu - P : P - Pd;
  vec3 N = normalize(cross(dx, dy));
  // face the eye (not simply +z: seen from a camera tilted upward, the ground's
  // normal leans away from the viewer, and flipping it buried the bottom of the
  // frame in shadow)
  if (dot(N, P) > 0.0) N = -N;
  float z = -P.z;
  float R = uRadius * (1.0 + z * 0.018);
  vec2 rUv = min(R * uProjScale / z, vec2(0.11));
  float rot = ign(gl_FragCoord.xy) * 6.2831853;
  const int NS = 11;
  float R2 = R * R;
  float occ = 0.0;
  for (int i = 0; i < NS; i++) {
    float a = (float(i) + 0.5) / float(NS);
    float ang = a * 6.2831853 * 2.6 + rot;
    vec2 suv = vUv + vec2(cos(ang), sin(ang)) * a * rUv;
    // nothing is known about what lies beyond the edge of the frame
    if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
    vec3 S = viewPos(suv);
    vec3 v = S - P;
    float vv = dot(v, v), vn = dot(v, N);
    float f = max(R2 - vv, 0.0);
    occ += f * f * f * max((vn - 0.012 * z - 0.03) / (vv + 0.01), 0.0);
  }
  float ao = max(0.0, 1.0 - occ * 5.0 / (R2 * R2 * R2 * float(NS)) * uIntensity);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`,iu=`
precision highp float;
uniform sampler2D tAO;
uniform sampler2D tDepth;
uniform vec2 uDir;          // one texel along the blur axis
uniform float uNear;
uniform float uFar;
varying vec2 vUv;
float lin(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  return 2.0 * uNear * uFar / (uFar + uNear - (2.0 * d - 1.0) * (uFar - uNear));
}
void main() {
  float zc = lin(vUv);
  float sum = texture2D(tAO, vUv).r * 0.22, wsum = 0.22;
  for (int i = 1; i <= 3; i++) {
    float w = 0.20 - 0.045 * float(i);
    for (int s = -1; s <= 1; s += 2) {
      vec2 uv = vUv + uDir * float(i * s) * 1.5;
      float k = w * max(0.0, 1.0 - abs(lin(uv) - zc) / (0.06 * zc + 0.15));
      sum += texture2D(tAO, uv).r * k; wsum += k;
    }
  }
  gl_FragColor = vec4(vec3(sum / wsum), 1.0);
}
`,au=`
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tDepth;
uniform sampler2D tBloom;
uniform sampler2D tAO;
uniform float uAO;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform float uExposure;
uniform float uBloom;
uniform float uPaint;       // edge break-up, in 1080p pixels
uniform float uOutline;
uniform float uSaturation;
uniform float uContrast;
uniform float uVignette;
uniform float uTime;
uniform float uHdrPeak;     // 1 = SDR; >1 lets highlights exceed display white
uniform sampler2D tPainting; // the untouched scan, for the opening frame
uniform vec4 uHole;         // where the framed canvas sits on screen (uv: x0, y0, x1, y1)
uniform float uTitleMix;    // 1 = show the scan exactly, 0 = the living scene
uniform float uRush;        // hyper mode: the edges of the picture streak toward the eye
varying vec2 vUv;

${jc}

// 1/z, which is linear across the screen for any flat surface
float invZ(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  return (uFar + uNear - (2.0 * d - 1.0) * (uFar - uNear)) / (2.0 * uFar * uNear);
}

vec3 aces(vec3 x) {
  return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}
float aces1(float x) {
  return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}

void main() {
  float sc = uRes.y / 1080.0;
  vec2 frag = gl_FragCoord.xy / sc;

  // Every on-screen dab of the brush nudges the picture by a constant amount,
  // so silhouettes break into stroke-shaped steps instead of ruler lines.
  const float ang = 0.42;
  mat2 R = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
  vec2 q = (R * frag) / vec2(30.0, 10.0);
  float row = floor(q.y);
  q.x += hash11(row * 1.7) * 11.0;
  vec2 cell = vec2(floor(q.x), row);
  vec2 jit = hash22(cell) - 0.5;
  vec2 q2 = (R * frag.yx) / vec2(17.0, 6.0);
  float row2 = floor(q2.y);
  q2.x += hash11(row2 * 2.3 + 5.0) * 7.0;
  vec2 jit2 = hash22(vec2(floor(q2.x), row2) + 31.0) - 0.5;
  vec2 off = (jit * 2.0 + jit2 * 1.2) * uPaint * sc / uRes;
  // Only what is far off is broken up like this. Anything near slides quickly
  // across the screen as he rides by, and edges stepping about under a fixed
  // pattern read as the houses warping — so they keep a clean line.
  float zHere = 1.0 / max(invZ(vUv), 1e-6);
  off *= mix(0.1, 1.0, smoothstep(12.0, 75.0, zHere));
  // …and the sky is not broken up at all. It is all brushwork already; and its stars and whorls
  // swimming under a pattern fixed to the screen, every time he turns, read as the heavens warping.
  // Nor are the hills: their ridge stepping about under the same fixed pattern as he turns read as the hills warping.
  off *= 1.0 - smoothstep(170.0, 300.0, zHere);
  vec2 uv = vUv + off;

  vec3 col = texture2D(tScene, uv).rgb;
  if (uRush > 0.002) {
    // everything but the middle of the frame smears outward along its line of flight
    vec2 dv = uv - vec2(0.5, 0.54);
    float k = uRush * 0.11 * smoothstep(0.015, 0.30, dot(dv, dv));
    float wsum = 1.0;
    for (int i = 1; i <= 6; i++) {
      float t = float(i) / 6.0, w = 1.0 - 0.13 * float(i);
      col += texture2D(tScene, uv - dv * k * t).rgb * w; wsum += w;
    }
    col /= wsum;
  }
  // contact shade — but never on things that are themselves alight
  float ao = texture2D(tAO, uv).r;
  float lumHere = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(1.0, ao, uAO * (1.0 - smoothstep(0.9, 2.6, lumHere)));

  // Dark, wobbling contour lines wherever depth breaks — Vincent outlined
  // his roofs, hills and cypress in prussian blue.
  float wob = 0.55 + 0.9 * vnoise(frag / 26.0);
  vec2 o = (1.15 * wob * sc) / uRes;
  float wc = invZ(uv);
  float w1 = invZ(uv + vec2(o.x, 0.0)), w2 = invZ(uv - vec2(o.x, 0.0));
  float w3 = invZ(uv + vec2(0.0, o.y)), w4 = invZ(uv - vec2(0.0, o.y));
  float lap = abs(w1 + w2 - 2.0 * wc) + abs(w3 + w4 - 2.0 * wc);
  float wmax = max(max(max(w1, w2), max(w3, w4)), wc);
  float e = lap / max(wmax, 1e-6);
  float edge = smoothstep(0.012, 0.06, e);
  float nearZ = 1.0 / max(wmax, 1e-6);
  edge *= mix(1.0, 0.45, smoothstep(60.0, 380.0, nearZ));
  edge *= 0.55 + 0.45 * vnoise(frag / 7.0 + 3.0);
  col = mix(col, col * vec3(0.05, 0.07, 0.20) + vec3(0.002, 0.004, 0.016), edge * uOutline);

  vec3 bloom = texture2D(tBloom, vUv).rgb;
  col += bloom * uBloom;

  col *= uExposure;

  // filmic curve: half hue-preserving, half per-channel so that the hottest
  // lamps and stars burn through to yellow-white
  float m = max(col.r, max(col.g, col.b));
  vec3 hp = col * (aces1(m) / max(m, 1e-5));
  vec3 pc = aces(col);
  vec3 tm = mix(hp, pc, 0.55);
  if (uHdrPeak > 1.0) {
    // extended range: let what the curve compressed come back above white
    vec3 over = max(col - vec3(1.0), vec3(0.0));
    tm += (uHdrPeak - 1.0) * (1.0 - exp(-over * 0.35));
  }
  col = tm;

  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(vec3(0.0), mix(vec3(l), col, uSaturation));
  col = mix(col, col * col * (3.0 - 2.0 * col), uContrast * step(uHdrPeak, 1.0));

  // canvas tooth + grain (also dithers the deep blues)
  float tooth = vnoise(gl_FragCoord.xy * 0.55) - 0.5;
  float grain = hash21(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5;
  col *= 1.0 + tooth * 0.045;
  vec2 vv = vUv - 0.5;
  col *= 1.0 - uVignette * dot(vv, vv) * 1.6;

  col = max(col, vec3(0.0));
  vec3 enc = mix(col * 12.92, 1.055 * pow(col, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, col));
  enc += grain * (1.5 / 255.0);

  // The opening frame IS the painting. It then gives way to the living scene
  // one brush-dab at a time.
  if (uTitleMix > 0.001) {
    vec2 huv = (vUv - uHole.xy) / (uHole.zw - uHole.xy);
    if (huv.x > 0.0 && huv.x < 1.0 && huv.y > 0.0 && huv.y < 1.0) {
      float n = hash21(cell * 1.7 + 4.0) * 0.18 + vnoise(frag / 150.0) * 0.82;      // (cloud-soft: hardly dab by dab)
      float a = smoothstep(n * 0.5, n * 0.5 + 0.5, uTitleMix);      // (a wide, soft front: the scan melts into the scene rather than flaking off it)
      // …and its rectangle melts from the edges inward, so no hard-edged picture is left hanging in the scene
      float rim = min(min(huv.x, 1.0 - huv.x), min(huv.y, 1.0 - huv.y) * (uHole.w - uHole.y) / (uHole.z - uHole.x) * uRes.y / uRes.x);
      a *= smoothstep(0.0, 0.0005 + 0.30 * (1.0 - uTitleMix), rim);
      enc = mix(enc, texture2D(tPainting, huv).rgb, a);
    }
  }
  gl_FragColor = vec4(enc, 1.0);
}
`,ou=6,su=class{constructor(e){this.renderer=e,this.width=4,this.height=4;let t=new Qr(4,4);t.type=m,t.minFilter=t.magFilter=r,this.sceneRT=new It(4,4,{type:g,format:w,minFilter:o,magFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:t}),this.sceneRT.texture.generateMipmaps=!1;let n=()=>{let e=new It(2,2,{type:g,format:w,minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1});return e.texture.generateMipmaps=!1,e},i=()=>{let e=new It(2,2,{type:l,format:w,minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1});return e.texture.generateMipmaps=!1,e};this.aoA=i(),this.aoB=i(),this.down=[],this.up=[];for(let e=0;e<ou;e++)this.down.push(n()),this.up.push(n());let a=(e,t)=>new di({vertexShader:$l,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1});this.prefilter=a(eu,{tSrc:{value:null},uTexel:{value:new mt},uThreshold:{value:1},uKnee:{value:.6}}),this.downMat=a(tu,{tSrc:{value:null},uTexel:{value:new mt}}),this.upMat=a(nu,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new mt},uSpread:{value:1},uMix:{value:.62}}),this.bloomRadius=.62,this.depthMaterial=null,this.aoMat=a(ru,{tDepth:{value:t},uInvProj:{value:new zt},uProjScale:{value:new mt},uTexel:{value:new mt},uFull:{value:new mt(4,4)},uRadius:{value:1.5},uIntensity:{value:1.25}}),this.aoBlur=a(iu,{tAO:{value:null},tDepth:{value:t},uDir:{value:new mt},uNear:{value:.1},uFar:{value:2e3}}),this.composite=a(au,{tScene:{value:this.sceneRT.texture},tDepth:{value:t},tBloom:{value:null},tAO:{value:this.aoA.texture},uAO:{value:.85},uRes:{value:new mt(4,4)},uNear:{value:.1},uFar:{value:2e3},uExposure:{value:1},uBloom:{value:.7},uPaint:{value:0},uOutline:{value:.85},uSaturation:{value:1.18},uContrast:{value:.22},uVignette:{value:.35},uTime:{value:0},uHdrPeak:{value:1},tPainting:{value:null},uHole:{value:new Pt(0,0,1,1)},uTitleMix:{value:0},uRush:{value:0}});let s=new _r;s.setAttribute(`position`,new nr(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.quad=new Vr(s,this.composite),this.quad.frustumCulled=!1,this.fsScene=new Cn,this.fsScene.add(this.quad),this.fsCam=new Xi(-1,1,1,-1,0,1)}setSize(e,t){if(e=Math.max(4,Math.floor(e)),t=Math.max(4,Math.floor(t)),e===this.width&&t===this.height)return;this.width=e,this.height=t,this.sceneRT.setSize(e,t),this.aoA.setSize(Math.max(2,e>>1),Math.max(2,t>>1)),this.aoB.setSize(Math.max(2,e>>1),Math.max(2,t>>1));let n=e,r=t;for(let e=0;e<ou;e++)n=Math.max(2,Math.floor(n/2)),r=Math.max(2,Math.floor(r/2)),this.down[e].setSize(n,r),this.up[e].setSize(n,r);this.composite.uniforms.uRes.value.set(e,t)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.fsScene,this.fsCam)}render(e,t,n,r=!1){let i=this.renderer;if(r){let e=this.composite.uniforms;e.uTime.value=n,this.pass(this.composite,null);return}i.setRenderTarget(this.sceneRT),i.clear(!0,!0,!1),this.depthMaterial&&(t.layers.set(1),e.overrideMaterial=this.depthMaterial,i.render(e,t),e.overrideMaterial=null,t.layers.set(0)),i.render(e,t);let a=this.aoMat.uniforms;a.uInvProj.value.copy(t.projectionMatrixInverse),a.uProjScale.value.set(t.projectionMatrix.elements[0]*.5,t.projectionMatrix.elements[5]*.5),a.uTexel.value.set(1/this.aoA.width,1/this.aoA.height),a.uFull.value.set(this.width,this.height),this.pass(this.aoMat,this.aoA);let o=this.aoBlur.uniforms;o.uNear.value=t.near,o.uFar.value=t.far,o.tAO.value=this.aoA.texture,o.uDir.value.set(1/this.aoA.width,0),this.pass(this.aoBlur,this.aoB),o.tAO.value=this.aoB.texture,o.uDir.value.set(0,1/this.aoA.height),this.pass(this.aoBlur,this.aoA),this.prefilter.uniforms.tSrc.value=this.sceneRT.texture,this.prefilter.uniforms.uTexel.value.set(.5/this.width,.5/this.height),this.pass(this.prefilter,this.down[0]);for(let e=1;e<ou;e++){let t=this.down[e-1];this.downMat.uniforms.tSrc.value=t.texture,this.downMat.uniforms.uTexel.value.set(1/t.width,1/t.height),this.pass(this.downMat,this.down[e])}let s=this.down[5];for(let e=4;e>=0;e--)this.upMat.uniforms.tSrc.value=s.texture,this.upMat.uniforms.tAdd.value=this.down[e].texture,this.upMat.uniforms.uTexel.value.set(1/s.width,1/s.height),this.upMat.uniforms.uMix.value=this.bloomRadius,this.pass(this.upMat,this.up[e]),s=this.up[e];let c=this.composite.uniforms;c.tBloom.value=this.up[0].texture,c.uNear.value=t.near,c.uFar.value=t.far,c.uTime.value=n,this.pass(this.composite,null)}},cu=`
attribute vec3 color;
attribute vec4 aData;
attribute vec4 aLamp;
attribute vec4 aLamp2;
uniform float uBend;
uniform vec3 uBendCenter;
uniform float uTime;
#ifdef DYNAMIC
uniform vec4 uDynLamp;
#endif
#ifdef WALKER
// Townsfolk are posed entirely here: what each one is doing (aAct) drives a
// small skeleton — hips, knees, shoulders, elbows, head — and every vertex
// knows which bone it hangs from (aPart) and where that bone's joints are.
attribute vec4 aWalkA;     // xyz: where they stand, or one end of their walk (chunk-local); w: speed, m/s
attribute vec4 aWalkB;     // xyz: what they face, or the other end; w: phase 0..1
attribute vec4 aAct;       // x: what they are doing; y, z: its parameters; w: the figure's sideways offset
attribute vec4 aPart;      // x: bone + scale/2; y, z: its joint; w: height of the joint above it
uniform vec3 uHeadPos;     // the bicycle: people look round at it, and step out of its way
void rotX(inout vec3 p, inout vec3 n, float py, float pz, float a) {
  float c = cos(a), s = sin(a);
  float vy = p.y - py, vz = p.z - pz;
  p.y = py + vy * c + vz * s;
  p.z = pz - vy * s + vz * c;
  n.yz = vec2(n.y * c + n.z * s, -n.y * s + n.z * c);
}
void rotY(inout vec3 p, inout vec3 n, float a) {
  float c = cos(a), s = sin(a);
  p.xz = vec2(p.x * c + p.z * s, -p.x * s + p.z * c);
  n.xz = vec2(n.x * c + n.z * s, -n.x * s + n.z * c);
}
#endif
varying vec3 vColor;
varying vec2 vUv;
varying vec4 vData;
varying vec4 vLamp;
varying vec4 vLamp2;
varying vec3 vPos;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vDist;
invariant gl_Position;
void main() {
  vec3 pos = position;
  vec3 nrm = normal;
#ifdef WALKER
  float pid = floor(aPart.x + 0.001);
  float sc = fract(aPart.x) * 2.0;                  // the figure's size (1 = a grown man)
  float mode = floor(aAct.x + 0.001);
  vec3 A = aWalkA.xyz, Bq = aWalkB.xyz;
  vec2 dAB = Bq.xz - A.xz;
  float len = max(length(dAB), 0.001);
  vec2 dir = dAB / len;
  float speed = aWalkA.w, ph = aWalkB.w;
  float tt = uTime + ph * 97.0;                     // everyone keeps their own time
  vec3 origin = A;
  float yawT = 0.0;                                 // turned this far (to the left) from the line A-B
  float g = 0.0, phi = ph * 6.2832;                 // the gait: how much, and where in the stride
  float hipL = 0.0, hipR = 0.0, kneeL = 0.0, kneeR = 0.0;
  float shL = 0.0, shR = 0.0, elL = 0.2, elR = 0.2;
  float lean = 0.02, twist = 0.0, bob = 0.0, hYaw = 0.0, hPitch = 0.0, swayX = 0.0;
  float hipY = 0.92 * sc;
  float notice = 1.0, dodge = 1.0;                  // how much they mind the bicycle
  if (mode < 0.5) {
    // standing about: weight shifting from foot to foot, looking round
    swayX = 0.012 * sin(tt * 0.7);
    hYaw = 0.5 * aAct.y * sin(tt * 0.31) * sin(tt * 0.13 + 1.0);
    elL = 0.25; elR = 0.3;
  } else if (mode < 1.5) {
    // walking somewhere: there, a pause (turned to a shop window, a doorway), and back
    float tw = len / max(speed, 0.05);
    float dB = aAct.y, dA2 = abs(aAct.z), tau = 1.5708 * sign(aAct.z);
    float T = 2.0 * tw + dB + dA2;
    float u = fract(uTime / T + ph) * T;
    float s = 0.0, ramp = 0.0, idle = 0.0;
    if (u < tw) { s = u / tw; ramp = min(u, tw - u); }
    else if (u < tw + dB) { float v = u - tw; s = 1.0; idle = 1.0; yawT = tau * (smoothstep(0.0, 0.7, v) + smoothstep(dB - 0.7, dB, v)); }
    else if (u < 2.0 * tw + dB) { float v = u - tw - dB; s = 1.0 - v / tw; ramp = min(v, tw - v); yawT = 2.0 * tau; }
    else { float v = u - 2.0 * tw - dB; idle = 1.0; yawT = tau * (2.0 - smoothstep(0.0, 0.7, v) - smoothstep(dA2 - 0.7, dA2, v)); }
    origin = mix(A, Bq, s);
    g = smoothstep(0.0, 0.5, ramp);
    phi += 3.14159 * s * len / (0.78 * sc);          // (feet are planted by distance, so they never slide)
    hYaw = idle * 0.3 * sin(tt * 0.9);
    swayX = idle * 0.01 * sin(tt * 0.7);
  } else if (mode < 2.5) {
    // in conversation: one talks with his hands while the other listens and nods, turn about
    float turn = fract(uTime * 0.085 + ph);
    float speak = smoothstep(0.0, 0.06, turn) * (1.0 - smoothstep(0.5, 0.56, turn));
    shR = speak * (0.55 + 0.25 * sin(tt * 2.3));
    elR = 0.45 + speak * (1.0 + 0.45 * sin(tt * 3.1) * sin(tt * 1.3));
    elL = 0.3 + 0.35 * speak * max(sin(tt * 1.7), 0.0);
    hPitch = (1.0 - speak) * 0.11 * max(sin(tt * 2.6), 0.0) * step(0.3, sin(tt * 0.37));
    hYaw = 0.12 * sin(tt * 0.5);
    swayX = 0.014 * sin(tt * 0.6);
    lean = 0.03 + 0.03 * speak;
  } else if (mode < 3.5) {
    // seated at a table: now and then the glass comes up
    hipY = 0.50 * sc;
    float cyc = fract(uTime * (0.06 + 0.05 * fract(ph * 7.0)) + ph);
    float sip = aAct.y * smoothstep(0.0, 0.07, cyc) * (1.0 - smoothstep(0.17, 0.24, cyc));
    elL = 0.0; elR = sip * 1.3; shR = sip * 0.55;
    hPitch = -0.2 * sip + 0.05 * sin(tt * 0.4);
    hYaw = 0.25 * sin(tt * 0.23) * (1.0 - sip);
    lean = 0.06 + 0.04 * sin(tt * 0.31);
    notice = 0.5; dodge = 0.0;
  } else if (mode < 4.5) {
    // going round: a couple waltzing (they face each other), or children chasing round the fountain
    float th = uTime * aAct.y;
    float c = cos(th), s = sin(th);
    vec2 rad = vec2(dir.x * c + dir.y * s, -dir.x * s + dir.y * c);
    origin = A + vec3(rad.x, 0.0, rad.y) * len;
    if (aAct.z < 0.5) {
      origin.xz += 1.1 * vec2(cos(uTime * 0.31 + A.x), sin(uTime * 0.31 + A.x));
      yawT = th + 3.14159;
      g = 0.42; phi = uTime * 5.2;
      shL = 1.25; elL = 0.3; shR = 1.0; elR = 1.15; lean = -0.03;
      notice = 0.0;
    } else {
      yawT = th + 1.5708 * sign(aAct.y);
      g = 1.0; phi += 3.14159 * abs(th) * len / (0.78 * sc);
      lean = 0.12; elL = 0.9; elR = 0.9;
      notice = 0.3;
    }
    dodge = 0.0;
  } else if (mode < 5.5) {
    // at work
    float w = aAct.y;
    if (w < 0.5) {            // sweeping the step
      twist = 0.32 * sin(tt * 2.4); shL = 0.5; shR = 0.62; elL = 0.6 + 0.2 * sin(tt * 2.4); elR = 0.5; lean = 0.2; hPitch = 0.25;
    } else if (w < 1.5) {     // the fiddler
      shL = 1.2; elL = 1.9; shR = 0.85 + 0.1 * sin(tt * 5.1); elR = 1.15 + 0.5 * sin(tt * 5.1); hYaw = 0.35; swayX = 0.02 * sin(tt * 1.3); twist = 0.06 * sin(tt * 1.3);
    } else if (w < 2.5) {     // the painter at his easel
      float dab = step(0.35, fract(tt * 0.11));
      shR = dab * (1.15 + 0.12 * sin(tt * 1.7)); elR = 0.3 + dab * (0.3 + 0.25 * sin(tt * 2.9)); shL = 0.25; elL = 1.2;
      hPitch = (1.0 - dab) * -0.12; lean = 0.03 - 0.05 * (1.0 - dab);
    } else if (w < 3.5) {     // crying his wares
      float up = smoothstep(0.55, 0.7, sin(tt * 0.5));
      shR = up * 2.2; elR = 0.4 + up * 0.5 * sin(tt * 6.0); elL = 0.9; shL = 0.25; hYaw = 0.4 * sin(tt * 0.27);
    } else if (w < 4.5) {     // bent over the billiard table, lining up the shot
      float strike = smoothstep(0.86, 0.9, fract(tt * 0.13)) * (1.0 - smoothstep(0.9, 0.98, fract(tt * 0.13)));
      lean = 0.85; shL = 1.5; elL = 0.2; shR = -0.45 + 0.5 * strike; elR = 1.5 - 0.5 * strike; hPitch = -0.55;
    } else {                  // the lamplighter, reaching up with his pole
      shL = 2.35 + 0.05 * sin(tt * 0.9); shR = 2.1; elL = 0.25; elR = 0.5; hPitch = -0.5; lean = -0.04;
    }
    notice = 0.35;
  } else {
    // a thing, not a person: it only stands where it was put
    lean = 0.0; notice = 0.0; dodge = 0.0;
  }
  if (g > 0.001) {
    hipL = 0.47 * g * sin(phi); hipR = -hipL;
    kneeL = g * (0.10 + 0.95 * pow(max(cos(phi - 0.55), 0.0), 2.0));
    kneeR = g * (0.10 + 0.95 * pow(max(-cos(phi - 0.55), 0.0), 2.0));
    shL -= 0.72 * hipL; shR -= 0.72 * hipR;         // arms swing against the legs
    elL += 0.2 * g; elR += 0.2 * g;
    bob = -0.04 * sc * g * sin(phi) * sin(phi);
    twist += 0.09 * g * sin(phi);
    lean += 0.035 * g;
  }
  // which way they face; then the bicycle: heads turn to it, and nobody stands in its way
  float cyw = cos(yawT), syw = sin(yawT);
  vec2 f2 = vec2(dir.x * cyw + dir.y * syw, -dir.x * syw + dir.y * cyw);
  vec3 wo = (modelMatrix * vec4(origin, 1.0)).xyz;
  vec2 away = wo.xz - uHeadPos.xz;
  float dR = length(away);
  vec2 awayN = away / max(dR, 0.01);
  float level = step(abs(wo.y - uHeadPos.y + 0.85), 2.5);
  origin.xz += awayN * (0.85 * smoothstep(2.5, 0.8, dR) * dodge * level);
  float rel = atan(dot(-awayN, vec2(f2.y, -f2.x)), dot(-awayN, f2));
  hYaw = mix(hYaw, clamp(rel, -1.2, 1.2), notice * level * smoothstep(12.0, 6.0, dR) * step(abs(rel), 2.1));

  // ── the skeleton
  pos.x -= aAct.w;
  float pvY = aPart.y, pvZ = aPart.z, ppY = aPart.w;
  if (pid > 0.5 && pid < 4.5) {
    bool first = pid < 1.5 || (pid > 2.5 && pid < 3.5);
    float hipA = first ? hipL : hipR, kneeA = first ? kneeL : kneeR;
    if (pid > 2.5) { rotX(pos, nrm, pvY, pvZ, -kneeA); rotX(pos, nrm, ppY, 0.0, hipA); }
    else rotX(pos, nrm, pvY, pvZ, hipA);
  } else if (pid > 4.5 && pid < 8.5) {
    bool first = pid < 5.5 || (pid > 6.5 && pid < 7.5);
    float shA = first ? shL : shR, elA = first ? elL : elR;
    if (pid > 6.5) { rotX(pos, nrm, pvY, pvZ, elA); rotX(pos, nrm, ppY, 0.0, shA); }
    else rotX(pos, nrm, pvY, 0.0, shA);
  } else if (pid > 8.5 && pid < 9.5) {
    rotX(pos, nrm, pvY, 0.0, -hPitch);
    rotY(pos, nrm, hYaw);
  } else if (pid > 9.5 && pid < 10.5) {
    // a skirt or coat-tail swings with the leg behind each half of it
    rotX(pos, nrm, pvY, 0.0, (pos.x < 0.0 ? hipL : hipR) * 0.6 * clamp(abs(pos.x) / (0.14 * sc), 0.0, 1.0));
  }
  if (pid < 0.5 || (pid > 4.5 && !(pid > 9.5 && pid < 10.5))) {
    // everything above the hips leans and turns with the trunk
    rotX(pos, nrm, hipY, 0.0, -lean);
    rotY(pos, nrm, twist * smoothstep(hipY, hipY + 0.5 * sc, pos.y));
  }
  pos.y += bob;
  pos.x += swayX + aAct.w;
  vec3 fw = vec3(f2.x, 0.0, f2.y);
  vec3 rt = vec3(f2.y, 0.0, -f2.x);
  pos = origin + rt * pos.x + vec3(0.0, pos.y, 0.0) + fw * pos.z;
  nrm = rt * nrm.x + vec3(0.0, nrm.y, 0.0) + fw * nrm.z;
#endif
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorld = wp.xyz;
#ifdef DYNAMIC
  vPos = wp.xyz;
  vLamp = uDynLamp;
  vLamp2 = vec4(0.0, -999.0, 0.0, 0.0);
#else
  vPos = pos;
  vLamp = aLamp;
  vLamp2 = aLamp2;
#endif
  vNormal = normalize(mat3(modelMatrix) * nrm);
  vec2 dxz = wp.xz - uBendCenter.xz;
  wp.y += uBend * dot(dxz, dxz);
  vec4 mv = viewMatrix * wp;
  vDist = length(mv.xyz);
  vColor = color;
  vUv = uv;
  vData = aData;
  gl_Position = projectionMatrix * mv;
}
`,lu=`
precision highp float;
uniform float uTime;
uniform float uStrokeDist;
uniform float uGlow;
uniform float uAlive;
uniform vec3 uFogColor;
uniform vec2 uFogRange;
uniform vec3 uMoonDir;
uniform vec3 uMoonCol;
uniform vec3 uAmbSky;
uniform vec3 uAmbGround;
uniform vec3 uWarmCol;
uniform vec3 uHeadPos;
uniform vec3 uHeadDir;
uniform float uHeadPower;
uniform sampler2D tCanvas;       // the painting itself, for the pictures hung in the gallery
varying vec3 vColor;
varying vec2 vUv;
varying vec4 vData;
varying vec4 vLamp;
varying vec4 vLamp2;
varying vec3 vPos;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vDist;

${jc}
${Mc}

float gIndoor = 0.0;     // 1 under a roof: no moon, no sky; the warm dusk of a lamplit room

// One street lamp. Its pool is fully gone by 17 m, so the two lamps a surface
// carries are all the lamps that can reach it (no seams between surfaces).
void lampTerm(vec4 lamp, vec3 P, vec3 Nd, vec3 Nb, vec3 V, float shin, inout vec3 diff, inout vec3 spec) {
  vec3 toL = lamp.xyz - P;
  float d2 = dot(toL, toL);
  float att = lamp.w / (1.0 + d2 * 0.085) * smoothstep(289.0, 40.0, d2);
  if (att <= 0.0) return;
  vec3 Ld = toL * inversesqrt(d2 + 1e-3);
  float k = att * uGlow * mix(0.3, 1.0, uAlive);
  diff += uWarmCol * (k * (0.22 + 0.78 * max(dot(Nd, Ld), 0.0)) * 5.6);
  spec += uWarmCol * (k * pow(max(dot(Nb, normalize(Ld + V)), 0.0), shin) * 6.5);
}

// Light arriving at P. Ng is the true surface normal, Nb the normal of the
// ridge of paint at this spot; spill is window-light from nearby houses.
void shade(vec3 P, vec3 Pw, vec3 Ng, vec3 Nb, vec3 V, float shin, float spill, out vec3 diff, out vec3 spec) {
  vec3 Nd = normalize(mix(Ng, Nb, 0.5));
  float sky = 1.0 - gIndoor;
  diff = mix(mix(uAmbGround, uAmbSky, Nd.y * 0.5 + 0.5), vec3(0.24, 0.14, 0.06) * (0.75 + 0.25 * Nd.y), gIndoor);
  spec = vec3(0.0);
  // the moon
  diff += uMoonCol * (max(dot(Nd, uMoonDir), 0.0) * sky);
  spec += uMoonCol * (pow(max(dot(Nb, normalize(uMoonDir + V)), 0.0), shin) * 1.5 * step(0.02, dot(Ng, uMoonDir)) * sky);
  // street lamps
  lampTerm(vLamp, P, Nd, Nb, V, shin, diff, spec);
  lampTerm(vLamp2, P, Nd, Nb, V, shin, diff, spec);
  // lit windows spilling onto the street
  float sp = spill * uGlow * uAlive;
  diff += uWarmCol * vec3(1.0, 1.08, 1.22) * (sp * 1.05);
  // the bicycle lamp: a soft-edged cone
  vec3 toH = Pw - uHeadPos;
  float h2 = dot(toH, toH);
  vec3 dh = toH * inversesqrt(h2 + 1e-3);
  float cone = smoothstep(0.66, 0.97, dot(dh, uHeadDir));
  cone = cone * cone * uHeadPower / (1.0 + h2 * 0.011);
  vec3 headCol = uWarmCol * vec3(1.0, 1.06, 1.16);
  diff += headCol * (cone * (0.3 + 0.7 * max(dot(Nd, -dh), 0.0)));
  spec += headCol * (cone * pow(max(dot(Nb, normalize(V - dh)), 0.0), shin) * 2.6);
  // wet paint mirrors the sky (and the windows) at grazing angles
  float fr = pow(1.0 - max(dot(Nb, V), 0.0), 5.0);
  spec += (uAmbSky * 0.9 * sky + uWarmCol * (sp * 1.3 + 0.35 * gIndoor)) * fr;
}

mat2 rot2(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

void main() {
  // nothing exists beyond the ring of hills
  if (vDist > uFogRange.y + 4.0) discard;
  float kind = floor(vData.x + 0.5);
  float seed = vData.y;
  gIndoor = step(1.5, seed);
  seed = fract(seed);
  vec3 N = normalize(vNormal);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 base = vColor;
  vec2 uvx = dFdx(vUv), uvy = dFdy(vUv);
  vec3 pdx = dFdx(vPos), pdy = dFdy(vPos);

  if (kind == 15.0) {
    // a framed canvas in the gallery: the painting, hung inside itself
    vec3 c = textureGrad(tCanvas, vUv, uvx, uvy).rgb;
    c = mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
    vec3 dC, sC;
    shade(vPos, vWorld, N, N, V, 24.0, 0.5, dC, sC);
    vec3 colC = c * (dC * 1.15 + 0.22 * uAlive) + sC * 0.05;
    float fogC = pow(smoothstep(uFogRange.x, uFogRange.y, vDist), 1.5);
    gl_FragColor = vec4(mix(colC, uFogColor, fogC * 0.97), 1.0);
    return;
  }

  if (kind == 18.0) {
    // a gold prism: polished metal, each face mirroring warm lamplight below
    // and the pale sky above, with a hard glint as it turns
    vec3 gold = vec3(1.0, 0.74, 0.22);
    vec3 Rf = reflect(-V, N);
    vec3 env = mix(vec3(0.50, 0.24, 0.04), vec3(1.0, 0.93, 0.66), smoothstep(-0.35, 0.85, Rf.y));
    float facet = 0.6 + 0.4 * dot(N, normalize(vec3(0.35, 0.8, 0.25)));
    float glint = pow(max(dot(Rf, normalize(vec3(0.3, 0.75, 0.4))), 0.0), 22.0) + pow(max(dot(Rf, normalize(vec3(-0.5, 0.5, -0.6))), 0.0), 40.0);
    float rimP = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    vec3 cP = gold * (0.45 * facet + 0.85 * env) + vec3(1.0, 0.95, 0.78) * (glint * 2.4 + rimP * 0.8);
    float fogP = pow(smoothstep(uFogRange.x, uFogRange.y, vDist), 1.5);
    gl_FragColor = vec4(cP * vData.z * mix(0.35, 1.0, uAlive) * uGlow * (1.0 - fogP * 0.8), 1.0);
    return;
  }

  if (kind == 10.0) {            // pure light: lantern glass, lamps
    gl_FragColor = vec4(base * vData.z * mix(0.3, 1.0, uAlive) * uGlow, 1.0);
    return;
  }

  // ───────────── stroke space for this kind of surface
  vec2 p = vUv;
  vec2 size = vec2(0.30, 0.075);
  float valVar = 0.55, hueVar = 0.35, accent = 0.0;
  float gloss = 0.2, shin = 26.0, relief = 0.8, spill = 0.0, rim = 0.0;
  float soft = 0.0;          // how nearly the ground under the strokes matches them (flesh is laid smooth)
  vec3 accentCol = vec3(0.0);
  vec3 emis = vec3(0.0);
  float halo = 0.0;

  if (kind == 1.0) {
    // ── walls: horizontal strokes; windows, shutters and doors are painted in
    float stories = vData.z;
    float flags = vData.w;
    float litP = fract(flags);
    float fl = floor(flags + 1e-4);
    bool shop = fl == 1.0;
    bool church = fl == 2.0;
    vec2 w = vUv;
    p = w * vec2(2.7, 3.0);
    p.y += 0.035 * sin(p.x * 3.1 + seed * 40.0);
    size = vec2(0.48, 0.105);
    valVar = 0.5; hueVar = 0.30;
    gloss = 0.16; shin = 18.0; relief = 0.85;
    // (a wall with real openings carries no painted ones: its p2 is the glow of the windows beside it)
    if (stories < 0.5) spill = flags;
    if (w.y > 0.0 && w.y < stories) {
      vec2 cell = floor(w);
      vec2 f = w - cell;
      bool ground = cell.y < 0.5;
      float r1 = hash21(cell * 1.31 + seed * 91.7);
      float r2 = hash21(cell * 2.17 + seed * 37.3 + 5.0);
      float r3 = hash21(cell * 3.71 + seed * 11.9 + 9.0);
      bool door = ground && !shop && !church && r2 < 0.26;
      vec2 hs = vec2(0.19, 0.27);
      vec2 ctr = vec2(0.5, 0.52);
      if (shop && ground) { hs = vec2(0.40, 0.31); ctr = vec2(0.5, 0.43); }
      if (door) { hs = vec2(0.17, 0.37); ctr = vec2(0.5, 0.37); }
      if (church) { hs = vec2(0.15, 0.36); ctr = vec2(0.5, 0.48); }
      vec2 c = (f - ctr) / hs;
      float wob = (vnoise(w * 5.0 + seed * 13.0) - 0.5) * 0.22;
      float bx = abs(c.x), by = abs(c.y);
      // doors and church windows have a round head
      if ((door || church) && c.y > 0.45) { bx = length(vec2(c.x, (c.y - 0.45) / 0.55)); by = bx; }
      float box = max(bx, by) + wob;
      float inside = smoothstep(1.0, 0.86, box);
      float trim = smoothstep(1.52, 1.38, box) * (1.0 - inside);
      float litOn = step(r1, litP * mix(0.35, 1.0, uAlive));
      if (shop && ground) litOn = step(r1, 0.92 * uAlive + 0.05);
      // shutters either side of ordinary windows
      if (!door && !shop && !church) {
        float sh = step(1.55, abs(c.x)) * step(abs(c.x), 2.42) * step(abs(c.y), 1.12 + wob);
        float sr = hash11(seed * 53.0 + 2.0);
        vec3 shCol = sr < 0.35 ? vec3(0.030, 0.150, 0.110) : sr < 0.65 ? vec3(0.030, 0.090, 0.260) : sr < 0.85 ? vec3(0.200, 0.045, 0.030) : vec3(0.020, 0.160, 0.190);
        base = mix(base, shCol, sh * step(hash11(seed * 7.0), 0.75));
      }
      vec3 trimCol = mix(base * 1.7 + 0.03, vec3(0.42, 0.38, 0.30), 0.4);
      base = mix(base, trimCol, trim * 0.85);
      if (door) {
        vec3 wood = mix(vec3(0.090, 0.040, 0.020), vec3(0.020, 0.070, 0.060), step(0.5, r3));
        base = mix(base, wood, inside);
      } else {
        // glass: dark when nobody is home, burning (and flickering a little) when someone is
        float mull = max(smoothstep(0.10, 0.03, abs(c.x)), smoothstep(0.09, 0.03, abs(c.y - 0.12)));
        if (shop && ground) mull = max(smoothstep(0.04, 0.01, abs(fract(c.x * 1.5 + 0.5) - 0.5)), smoothstep(0.06, 0.02, abs(c.y - 0.62)));
        vec3 warm = mix(vec3(1.00, 0.80, 0.32), vec3(1.00, 0.48, 0.11), r2);
        if (church) warm = mix(warm, vec3(0.55, 0.75, 1.0), 0.35 * step(0.5, r3));
        float flick = 1.0 + 0.07 * sin(uTime * (2.0 + 5.0 * r1) + r2 * 40.0) + 0.04 * sin(uTime * 11.0 * r3 + r1 * 9.0);
        float bright = (1.7 + 2.4 * r3) * (shop && ground ? 1.25 : 1.0) * flick;
        base = mix(base, vec3(0.012, 0.020, 0.050), inside);
        emis = warm * bright * inside * litOn * (1.0 - 0.72 * mull) * (0.80 + 0.35 * f.y);
        halo = litOn * (1.0 - inside) * exp(-max(box - 1.0, 0.0) * 2.3) * (shop && ground ? 1.5 : 1.0);
        gloss = mix(gloss, 0.9, inside * (1.0 - litOn));         // dark panes glint
      }
      // far away, a house is a mood of light rather than countable panes
      float farK = smoothstep(150.0, 300.0, vDist);
      emis = mix(emis, vec3(1.0, 0.62, 0.20) * (litP * 0.42) * uAlive, farK);
    }
  } else if (kind == 2.0) {
    // ── roofs: strokes run down the slope like courses of tile
    p = vec2(vUv.y + 0.06 * sin(vUv.x * 2.3 + seed * 30.0), vUv.x);
    size = vec2(0.66, 0.17);
    valVar = 0.75; hueVar = 0.40;
    accent = 0.10; accentCol = base * vec3(1.7, 1.5, 1.2) + 0.02;
    gloss = 0.5; shin = 22.0; relief = 1.0;
  } else if (kind == 3.0) {
    // ── cobbles: stubby dabs in every colour the lamps can find, slick as if after rain
    p = vData.z > 0.5 ? vUv.yx : vUv;
    p.y += 0.07 * sin(p.x * 1.9 + p.y * 0.7);
    size = vec2(0.34, 0.185);
    valVar = 0.85; hueVar = 0.9;
    accent = 0.16; accentCol = mix(vec3(0.30, 0.13, 0.26), vec3(0.10, 0.16, 0.34), step(0.5, hash21(floor(p * 3.0))));
    gloss = 0.62; shin = 40.0; relief = 0.95; spill = vData.w;
  } else if (kind == 4.0) {
    // ── a dirt road: long ochre and rose streaks
    p = vData.z > 0.5 ? vUv.yx : vUv;
    p.y += 0.22 * sin(p.x * 0.55 + p.y * 0.3);
    size = vec2(0.95, 0.15);
    valVar = 0.6; hueVar = 0.5;
    accent = 0.12; accentCol = vec3(0.32, 0.16, 0.20);
    gloss = 0.14; shin = 14.0; relief = 0.9; spill = vData.w;
  } else if (kind == 5.0 || kind == 13.0) {
    // ── grass: short curling strokes
    float a = vnoise(vUv * 0.07 + seed) * 6.28;
    p = rot2(a) * vUv;
    p.y += 0.25 * sin(p.x * 1.1);
    size = vec2(0.72, 0.125);
    valVar = 0.8; hueVar = 0.6;
    accent = 0.14; accentCol = vec3(0.16, 0.26, 0.05);
    gloss = 0.10; shin = 12.0; relief = 0.9; spill = vData.w;
  } else if (kind == 6.0) {
    // ── wheat: waves of gold
    float a = 0.5 + (vnoise(vUv * 0.03 + seed * 3.0) - 0.5) * 1.6;
    p = rot2(a) * vUv;
    p.y += 0.45 * sin(p.x * 0.6 + vnoise(vUv * 0.11) * 5.0);
    size = vec2(1.15, 0.11);
    valVar = 0.75; hueVar = 0.45;
    accent = 0.10; accentCol = vec3(0.10, 0.20, 0.10);
    gloss = 0.16; shin = 14.0; relief = 1.0; spill = vData.w;
  } else if (kind == 7.0) {
    // ── flagstones of a square
    p = vUv;
    p.y += 0.05 * sin(p.x * 1.3);
    size = vec2(0.58, 0.30);
    valVar = 0.7; hueVar = 0.7;
    accent = 0.12; accentCol = vec3(0.26, 0.14, 0.24);
    gloss = 0.55; shin = 42.0; relief = 0.85; spill = vData.w;
  } else if (kind == 8.0) {
    // ── cypress: dark flames licking upward
    p = vec2(vUv.y + 0.6 * sin(vUv.x * 1.1 + vUv.y * 0.35), vUv.x + 0.35 * sin(vUv.y * 0.8 + seed * 20.0));
    size = vec2(1.15, 0.20);
    valVar = 1.0; hueVar = 0.5;
    accent = 0.07; accentCol = vec3(0.12, 0.07, 0.02);
    gloss = 0.14; shin = 10.0; relief = 1.2; rim = 0.35;
  } else if (kind == 9.0) {
    // ── olive and plane trees: curls, like the grove behind the village
    float a = vnoise(vUv * 0.9 + seed * 9.0) * 9.0;
    p = rot2(a) * vUv;
    size = vec2(0.52, 0.15);
    valVar = 1.0; hueVar = 0.7;
    accent = 0.20; accentCol = vec3(0.22, 0.32, 0.36);
    gloss = 0.16; shin = 10.0; relief = 1.2; rim = 0.3;
  } else if (kind == 11.0) {
    // ── dressed stone
    p = vUv;
    p.y += 0.03 * sin(p.x * 2.7);
    size = vec2(0.56, 0.15);
    valVar = 0.55; hueVar = 0.45;
    accent = 0.08; accentCol = vec3(0.30, 0.34, 0.40);
    gloss = 0.28; shin = 20.0; relief = 0.9;
  } else if (kind == 12.0) {
    // ── cloth / awnings: stripes
    p = vUv;
    size = vec2(0.40, 0.09);
    base = mix(base, vec3(0.62, 0.56, 0.42), step(0.5, fract(vUv.x * 1.6)) * 0.8);
    valVar = 0.4; hueVar = 0.2;
    gloss = 0.06; relief = 0.6;
  } else if (kind == 16.0 || kind == 17.0) {
    // ── things set into a wall. uv runs 0..1 across the opening; its true size
    // in metres comes from how fast the surface moves under it.
    vec2 g = vUv;
    vec3 gpx = pdx, gpy = pdy;
    float gdet = uvx.x * uvy.y - uvy.x * uvx.y;
    float ginv = abs(gdet) > 1e-12 ? 1.0 / gdet : 0.0;
    vec3 gT = (gpx * uvy.y - gpy * uvx.y) * ginv;          // one opening-width, in space
    vec3 gB = (gpy * uvx.x - gpx * uvy.x) * ginv;          // one opening-height
    float gw = clamp(length(gT), 0.05, 12.0), gh = clamp(length(gB), 0.05, 12.0);
    float type = floor(vData.z + 0.5);
    if (kind == 17.0) {
      // ── joinery: louvred shutters, panelled doors, boarded doors
      vec2 q = g * vec2(gw, gh);                            // metres across the leaf
      float edge = min(min(q.x, gw - q.x), min(q.y, gh - q.y));
      float stile = smoothstep(0.075, 0.06, edge);          // the frame round the leaf
      if (type < 0.5) {
        float sl = fract(q.y / 0.058);
        float slat = mix(0.42, 1.12, smoothstep(0.0, 0.75, sl)) * (1.0 - 0.5 * smoothstep(0.86, 1.0, sl));
        float midRail = smoothstep(0.055, 0.04, abs(q.y - gh * 0.5));
        base *= mix(slat, 1.0, max(stile, midRail));
        p = vec2(q.x, q.y); size = vec2(0.22, 0.045);
      } else if (type < 1.5) {
        vec2 pg = vec2(q.x / gw * 2.0, q.y / gh * 3.0);
        vec2 pf = abs(fract(pg) - 0.5);
        float inset = smoothstep(0.40, 0.36, max(pf.x, pf.y * 1.0));
        float bevel = smoothstep(0.30, 0.36, max(pf.x, pf.y)) * inset;
        base *= mix(1.0, 0.80, inset) * (1.0 - 0.35 * bevel);
        base = mix(base, base * 1.18, stile * 0.5);
        // a brass knob
        base = mix(base, vec3(0.75, 0.52, 0.16), smoothstep(0.045, 0.03, length(q - vec2(gw - 0.13, gh * 0.46))));
        p = vec2(q.y, q.x); size = vec2(0.26, 0.05);
      } else {
        float bd = fract(q.x / 0.17);
        base *= 1.0 - 0.45 * smoothstep(0.10, 0.0, min(bd, 1.0 - bd));
        base *= 0.9 + 0.2 * hash11(floor(q.x / 0.17) + seed * 31.0);
        // ledges and strap hinges
        float ledge = max(smoothstep(0.07, 0.05, abs(q.y - gh * 0.2)), smoothstep(0.07, 0.05, abs(q.y - gh * 0.82)));
        base = mix(base, vec3(0.020, 0.020, 0.026), ledge * 0.85);
        p = vec2(q.y, q.x); size = vec2(0.30, 0.05);
      }
      valVar = 0.34; hueVar = 0.2;
      gloss = 0.30; shin = 20.0; relief = 0.6;
    } else {
      // ── a window: sash and glazing bars, curtains, and — when somebody is
      // home — the lit room itself, found by sending the view ray into a box
      float r1 = fract(vData.w);
      float r2 = hash11(r1 * 91.7 + seed * 13.0), r3 = hash11(r1 * 37.3 + seed * 71.0 + 3.0);
      float on = step(0.5, vData.w) * step(r1 * 0.97, mix(0.35, 1.0, uAlive));
      vec2 q = g * vec2(gw, gh);
      // which part of the quad is glass at all
      float hole = 1.0;
      vec2 panes = vec2(2.0, 3.0);
      float fr = 0.055;
      if (type > 0.5 && type < 1.5) { panes = vec2(max(1.0, floor(gw / 0.95)), 1.0); fr = 0.07; }
      else if (type < 2.5) panes = vec2(2.0, 4.0);
      else if (type < 3.5) {
        // a lancet: a pointed head
        panes = vec2(2.0, floor(gh / 0.55));
        float hy = max(q.y - (gh - gw * 0.95), 0.0) / (gw * 0.95);
        hole = step(abs(g.x - 0.5) * 2.0, 1.0 - hy * hy * 0.95);
        fr = 0.07;
      } else if (type < 4.5) panes = vec2(2.0, 2.0);
      else if (type < 5.5) {
        // a fanlight: half a wheel over the door
        vec2 c = vec2(q.x - gw * 0.5, q.y);
        float rr = min(gw * 0.5, gh * 1.02);
        hole = step(length(c), rr);
        float ang = atan(c.y, c.x);
        panes = vec2(1.0);
        float spoke = smoothstep(0.03, 0.02, abs(fract(ang / 0.5236 + 0.5) - 0.5) * 0.5236 * max(length(c), 0.05));
        hole *= 1.0 - max(spoke, smoothstep(0.035, 0.02, abs(length(c) - rr * 0.38)));
        fr = 0.045;
      } else {
        // a round window: a wheel of eight lights (a rose, a clock face)
        vec2 c = (g - 0.5) * vec2(gw, gh);
        float rr = min(gw, gh) * 0.5;
        float ang = atan(c.y, c.x);
        hole = step(length(c), rr * 0.97);
        float spoke = smoothstep(0.035, 0.022, abs(fract(ang / 0.7854 + 0.5) - 0.5) * 0.7854 * max(length(c), 0.05));
        hole *= 1.0 - max(spoke * step(rr * 0.25, length(c)), smoothstep(0.04, 0.025, abs(length(c) - rr * 0.25)));
        panes = vec2(1.0); fr = 0.0;
      }
      float edge = min(min(q.x, gw - q.x), min(q.y, gh - q.y));
      float frameM = 1.0 - smoothstep(fr * 0.8, fr, edge);
      vec2 pg = (q - fr) / (vec2(gw, gh) - 2.0 * fr) * panes;
      vec2 pd = (0.5 - abs(fract(pg) - 0.5)) * (vec2(gw, gh) - 2.0 * fr) / panes;   // metres to the nearest bar
      float bar = 1.0 - smoothstep(0.016, 0.024, min(pd.x + step(panes.x, 1.5) * 9.0, pd.y + step(panes.y, 1.5) * 9.0));
      // the two leaves of a casement meet in a thicker stile
      if (type < 0.5 || (type > 1.5 && type < 2.5)) bar = max(bar, 1.0 - smoothstep(0.028, 0.038, abs(q.x - gw * 0.5)));
      float wood = max(max(frameM, bar), 1.0 - hole);

      // the room
      vec3 Tn = gT / gw, Bn = gB / gh;
      vec3 rd = -V;
      vec3 dir = vec3(dot(rd, Tn), dot(rd, Bn), max(-dot(rd, N), 0.04));
      vec3 ro = vec3(q.x, q.y, 0.0);
      bool shopW = type > 0.5 && type < 1.5;
      bool tall = type > 1.5 && type < 2.5;
      float sideM = shopW ? 0.25 : 0.7 + 1.9 * r2;
      float xl = -sideM, xr = gw + sideM * (0.5 + r3);
      float yfl = shopW ? -0.5 : tall ? -0.03 : -0.95;
      float yc = gh + (shopW ? 0.25 : 0.55);
      float zb = shopW ? 1.5 + 0.9 * r3 : 2.6 + 2.4 * r3;
      float tx = dir.x > 0.0 ? (xr - ro.x) / dir.x : (xl - ro.x) / min(dir.x, -1e-4);
      float ty = dir.y > 0.0 ? (yc - ro.y) / dir.y : (yfl - ro.y) / min(dir.y, -1e-4);
      float tz = zb / dir.z;
      float tHit = min(tx, min(ty, tz));
      vec3 hp = ro + dir * tHit;
      vec3 paper = r2 < 0.3 ? vec3(0.66, 0.44, 0.18) : r2 < 0.55 ? vec3(0.58, 0.26, 0.20) : r2 < 0.8 ? vec3(0.38, 0.46, 0.30) : vec3(0.30, 0.40, 0.56);
      vec3 roomC;
      vec2 bwall = vec2((hp.x - xl) / (xr - xl), (hp.y - yfl) / (yc - yfl));
      if (tHit == ty) roomC = dir.y > 0.0 ? vec3(0.80, 0.70, 0.52) : vec3(0.30, 0.17, 0.08) * (0.8 + 0.4 * step(0.5, fract(hp.x * 3.0)));
      else if (tHit == tx) roomC = paper * 0.82 * (bwall.y < 0.3 ? 0.6 : 1.0);
      else {
        roomC = paper * (bwall.y < 0.3 ? 0.6 : 1.0);
        if (shopW) {
          // shelves of wares
          vec2 sc = bwall * vec2(floor(2.0 + (xr - xl) * 3.0), 4.0);
          float item = hash21(floor(sc) + seed * 91.0);
          vec2 sf = fract(sc);
          vec3 ware = item < 0.3 ? vec3(0.85, 0.30, 0.12) : item < 0.55 ? vec3(0.90, 0.75, 0.25) : item < 0.8 ? vec3(0.25, 0.50, 0.30) : vec3(0.30, 0.40, 0.75);
          float it = step(0.12, sf.x) * step(sf.x, 0.88) * step(0.06, sf.y) * step(sf.y, 0.45 + 0.4 * hash21(floor(sc) + 7.0));
          roomC = mix(roomC * 0.8, ware, it);
          roomC = mix(roomC, vec3(0.20, 0.11, 0.05), step(sf.y, 0.06));
        } else {
          // something on the far wall: a picture, a doorway
          float pic = step(abs(bwall.x - (0.28 + 0.44 * r1)), 0.10) * step(abs(bwall.y - 0.64), 0.11);
          roomC = mix(roomC, mix(vec3(0.10, 0.18, 0.40), vec3(0.85, 0.68, 0.22), step(0.5, fract(bwall.y * 11.0 + bwall.x * 7.0))), pic);
          float dr = step(abs(bwall.x - (0.80 - 0.56 * r3)), 0.085) * step(bwall.y, 0.74) * step(0.45, r1);
          roomC = mix(roomC, vec3(0.14, 0.08, 0.04), dr);
        }
      }
      // its lamp: hung from the ceiling, lighting the room from within
      vec3 lampP = vec3(mix(xl, xr, 0.32 + 0.36 * r1), yc - 0.6, zb * 0.5);
      float ld = length(hp - lampP);
      vec3 room = roomC * (0.30 + 2.6 / (1.0 + ld * ld * 0.6));
      float tl = clamp(dot(lampP - ro, dir) / dot(dir, dir), 0.0, tHit);
      float dl = length(ro + dir * tl - lampP);
      room += vec3(1.0, 0.86, 0.52) * exp(-dl * dl * 22.0) * 3.2;
      // somebody at home, crossing the room now and then
      if (r3 > 0.72 && !shopW) {
        float zs = zb * (0.28 + 0.35 * r2);
        vec3 sp = ro + dir * (zs / dir.z);
        float px = mix(xl + 0.4, xr - 0.4, 0.5 + 0.46 * sin(uTime * (0.07 + 0.08 * r1) + r1 * 40.0));
        vec2 f = vec2(sp.x - px, sp.y - yfl);
        float fig = step(length((f - vec2(0.0, 1.57)) / vec2(0.105, 0.125)), 1.0);
        fig = max(fig, step(abs(f.x), mix(0.16, 0.235, smoothstep(0.95, 1.38, f.y))) * step(f.y, 1.45));
        if (zs / dir.z < tHit) room = mix(room, vec3(0.05, 0.03, 0.025), fig);
      }
      // curtains, in the plane of the glass
      float cw = shopW ? 0.0 : r2 < 0.2 ? 0.52 : 0.08 + 0.24 * r3;
      float cur = (1.0 - smoothstep(cw - 0.012, cw, g.x)) + smoothstep(1.0 - cw, 1.0 - cw + 0.012, g.x);
      cur = min(cur, 1.0) * step(0.0005, cw);
      float fold = 0.70 + 0.30 * sin(q.x * 44.0 + sin(q.y * 4.0 + r1 * 9.0) * 1.6 + r1 * 30.0);
      vec3 curC = r1 < 0.4 ? vec3(0.95, 0.84, 0.62) : r1 < 0.7 ? vec3(0.82, 0.34, 0.20) : vec3(0.50, 0.64, 0.42);
      vec3 lightCol = mix(vec3(1.00, 0.78, 0.40), vec3(1.00, 0.58, 0.22), r2);
      if (type > 2.5 && type < 3.5) {
        // stained glass: lozenges of colour, lit from the nave
        vec2 lz = vec2(q.x + q.y, q.x - q.y) * 5.5;
        float hsh = hash21(floor(lz) + seed * 40.0);
        room = (hsh < 0.3 ? vec3(0.85, 0.20, 0.12) : hsh < 0.55 ? vec3(0.15, 0.35, 0.90) : hsh < 0.8 ? vec3(0.95, 0.75, 0.20) : vec3(0.20, 0.65, 0.40)) * 1.5;
        cur = 0.0; lightCol = vec3(1.0, 0.86, 0.62);
      } else if (type > 5.5 && r1 > 0.9) {
        // the clock face
        vec2 c = (g - 0.5) * 2.0;
        float ang = atan(c.x, c.y);
        float tick = smoothstep(0.035, 0.02, abs(fract(ang / 0.5236 + 0.5) - 0.5)) * step(0.72, length(c)) * step(length(c), 0.9);
        float h1 = smoothstep(0.05, 0.03, abs(c.x * 0.7071 + c.y * 0.7071)) * step(0.0, c.y - c.x) * step(length(c), 0.52);
        float h2 = smoothstep(0.04, 0.025, abs(c.x)) * step(0.0, c.y) * step(length(c), 0.74);
        room = mix(vec3(1.0, 0.94, 0.78) * 0.9, vec3(0.03), max(tick, max(h1, h2)));
        cur = 0.0; lightCol = vec3(1.0, 0.92, 0.74); wood = 1.0 - hole;
      }
      vec3 lit = mix(room, curC * fold * 1.15, cur * 0.93);
      float bright = (1.25 + 0.9 * r3) * (shopW ? 1.5 : 1.0) * (1.0 + 0.05 * sin(uTime * (2.0 + 5.0 * r1) + r2 * 40.0));
      // far off, the room melts back into a plain warm pane
      float farK = smoothstep(60.0, 150.0, vDist);
      lit = mix(lit, vec3(0.62, 0.52, 0.40) * (0.9 + 0.8 * r3), farK);
      emis = lit * lightCol * bright * on * (1.0 - wood);
      // dark glass keeps a ghost of its curtains and glints with the sky
      vec3 glass = mix(vec3(0.012, 0.020, 0.050), curC * 0.05, cur * 0.8);
      base = mix(glass, base, wood);
      gloss = mix(0.9, 0.25, wood); shin = mix(60.0, 20.0, wood);
      p = vec2(q.y, q.x); size = vec2(0.20, 0.045);
      valVar = 0.3; hueVar = 0.2; relief = mix(0.25, 0.6, wood);
      halo = 0.0;
    }
  } else if (kind == 14.0) {
    // ── figures (the rider, townsfolk): fine strokes that follow the form,
    // clean enough to read as a person, with the moon catching every edge
    p = vUv;
    size = vec2(0.105, 0.026) * clamp(vData.z, 0.3, 4.0);
    valVar = 0.26; hueVar = 0.14;
    gloss = 0.16; shin = 16.0; relief = 0.5; rim = 1.0;
#ifdef WALKER
    // townsfolk are met face to face: flesh and small things (fine strokes) are laid smooth and even,
    // and their cloth a little closer than a wall's — or a face reads as scales
    float skinK = smoothstep(0.9, 0.55, vData.z);
    valVar = mix(0.22, 0.10, skinK); hueVar = mix(0.12, 0.05, skinK);
    soft = mix(0.35, 0.9, skinK);
#endif
  } else {
    // small hard things (ironwork, the bicycle): finer strokes, quieter colour
    p = vUv;
    size = vec2(0.20, 0.05) * clamp(vData.z, 0.3, 4.0);
    valVar = 0.36; hueVar = 0.22;
    gloss = 0.45; shin = 30.0; relief = 0.5; rim = 0.4;
  }

  // ───────────── lay the dabs: three scales, overlapping, each a little askew
  // (a hand never lays two strokes parallel, and it is what stops walls reading as brickwork)
  p += (vec2(vnoise(p * (0.55 / size.x) + seed * 3.0), vnoise(p * (0.55 / size.x) + 7.3 + seed)) - 0.5) * size * vec2(0.9, 1.5);
  float lod = log2(max(vDist / uStrokeDist, 0.5));
  float l0 = floor(lod), lf = lod - l0;
  float cov1 = mix(0.34, 1.0, lf), cov2 = mix(0.0, 0.34, lf);
  relief *= mix(1.0, 0.45, smoothstep(50.0, 220.0, vDist));

  // The surface directions a step along / across the stroke corresponds to:
  // lets each dab be lit at its own centre and carry its own relief.
  vec2 jx = dFdx(p), jy = dFdy(p);
  float det = jx.x * jy.y - jy.x * jx.y;
  float inv = abs(det) > 1e-10 ? 1.0 / det : 0.0;
  vec3 Tu = (pdx * jy.y - pdy * jx.y) * inv;
  vec3 Tv = (pdy * jx.x - pdx * jy.x) * inv;
  float tl = dot(Tu, Tu) * dot(Tv, Tv);
  bool frame = tl > 1e-12 && tl < 1e12;

  vec3 dPix, sPix;
  shade(vPos, vWorld, N, N, V, shin, spill, dPix, sPix);
  vec3 under = mix(hueShift(base, -0.25) * 0.60, base * 0.94, soft) * dPix;

  // top-most strokes first; stop as soon as the surface is covered
  vec3 col = vec3(0.0);
  float alpha = 0.0;
  for (int k = 2; k >= 0; k--) {
    // every stroke scale ("level") has one fixed pattern in the world, so a
    // surface keeps its strokes as it moves through the distance bands
    float lev = l0 + float(k);
    float sc = exp2(lev);
    mat2 R = rot2((mod(lev, 3.0) - 1.0) * 0.19);
    vec2 pk = R * p + size * sc * 0.37 * mod(lev, 2.0);
    Dab d = dab(pk, size * sc, seed + lev * 0.37);
    float wgt = d.mask;
    if (k == 0) wgt *= 1.0 - smoothstep(0.72, 1.0, lf);                  // the finest scale bows out as the next takes over
    else wgt *= smoothstep(d.id2 - 0.04, d.id2 + 0.04, k == 1 ? cov1 : cov2);
    if (wgt < 0.003) continue;

    // where this dab's centre lies on the surface
    vec2 dp = (d.center - pk) * R;
    vec2 sxy = vec2(jy.y * dp.x - jy.x * dp.y, -jx.y * dp.x + jx.x * dp.y) * inv;
    vec3 dP = pdx * sxy.x + pdy * sxy.y;
    float lim = size.x * sc * 1.5;
    float dl = length(dP);
    if (dl > lim) dP *= lim / dl;

    // the ridge of paint: rounded across, falling away at the ends, furrowed by the bristles
    vec3 Nb = N;
    if (frame) {
      vec3 along = normalize(Tu * R[0][0] + Tv * R[1][0]);
      vec3 across = normalize(Tu * R[0][1] + Tv * R[1][1]);
      float furrow = sin(d.across * 7.0 + d.id * 40.0);
      Nb = normalize(N + (across * (d.across * 0.62 + furrow * 0.20) + along * ((d.along - 0.5) * 0.55)) * relief);
    }

    vec3 dDab, sDab;
    shade(vPos + dP, vWorld + dP, N, Nb, V, shin, spill, dDab, sDab);
    // partly its own light (pools break into strokes), partly the spot's (they still fall off smoothly)
    float own = k == 0 ? 0.50 : k == 1 ? 0.36 : 0.24;
    vec3 L = mix(dPix, dDab, own);

    vec3 a = base * (1.0 + (d.id - 0.5) * valVar);
    a = hueShift(a, (d.id2 - 0.5) * hueVar);
    if (d.id2 < accent) a = mix(a, accentCol, 0.65);
    // in lamplight colours run hot; in shadow they run to violet and blue
    float warmth = clamp(dot(L, vec3(0.5, 0.2, -0.6)), 0.0, 1.0);
    a = mix(a, a * vec3(1.22, 1.03, 0.78) + vec3(0.02, 0.0, 0.0), warmth * (0.4 + 0.6 * d.id));
    a = max(a, vec3(0.0));
    float bristle = vnoise(vec2(d.along * 3.0 + d.id * 17.0, d.across * 3.2 + d.id * 5.0));
    vec3 c = a * L * (0.88 + 0.22 * bristle) + sDab * gloss * (0.35 + 0.9 * d.id) * (0.35 + a * 2.2);

    col += (1.0 - alpha) * wgt * c;
    alpha += (1.0 - alpha) * wgt;
    if (alpha > 0.985) break;
  }
  col += (1.0 - alpha) * under;

  // the moon finds the edge of every rounded thing
  if (rim > 0.0) {
    float r = pow(1.0 - max(dot(N, V), 0.0), 2.6);
    col += (uMoonCol * (0.35 + 0.65 * max(dot(N, uMoonDir) * 0.5 + 0.5, 0.0)) + uAmbSky) * (r * rim * 0.9) * (base + 0.08);
  }

  // lit windows spill onto the wall around them and burn through the paint
  col += base * uWarmCol * halo * 1.6 * uGlow;
  vec3 e = emis * uGlow;

  // the village of the opening frame wakes with the painting
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(vec3(0.0), mix(vec3(l), col, mix(0.78, 1.06, uAlive)));

  float fogF = pow(smoothstep(uFogRange.x, uFogRange.y, vDist), 1.5);
  col = mix(col, uFogColor, fogF * 0.97);
  col += e * (1.0 - fogF * 0.86);
  gl_FragColor = vec4(col, 1.0);
}
`;function uu(e,{dynamic:t=!1,walker:n=!1}={}){let r={uTime:e.uTime,uBend:e.uBend,uBendCenter:e.uBendCenter,uStrokeDist:e.uStrokeDist,uGlow:e.uGlow,uAlive:e.uAlive,uFogColor:e.uFogColor,uFogRange:e.uFogRange,uMoonDir:e.uMoonDir,uMoonCol:e.uMoonCol,uAmbSky:e.uAmbSky,uAmbGround:e.uAmbGround,uWarmCol:e.uWarmCol,uHeadPos:e.uHeadPos,uHeadDir:e.uHeadDir,uHeadPower:e.uHeadPower,tCanvas:e.tCanvas},i={};return t&&(r.uDynLamp={value:new Pt(0,-999,0,0)},i.DYNAMIC=1),n&&(i.WALKER=1),new di({vertexShader:cu,fragmentShader:lu,uniforms:r,defines:i,side:2})}function du(e){return new di({vertexShader:`
      uniform float uBend;
      uniform vec3 uBendCenter;
      varying float vDist;
      invariant gl_Position;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec2 dxz = wp.xz - uBendCenter.xz;
        wp.y += uBend * dot(dxz, dxz);
        vec4 mv = viewMatrix * wp;
        vDist = length(mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      precision highp float;
      uniform vec2 uFogRange;
      varying float vDist;
      void main() {
        if (vDist > uFogRange.y + 4.0) discard;
        gl_FragColor = vec4(0.0);
      }`,uniforms:{uBend:e.uBend,uBendCenter:e.uBendCenter,uFogRange:e.uFogRange},side:2,colorWrite:!1})}var fu=`
attribute vec2 aCorner;
attribute vec4 aGlow;      // size (m), seed, kind, intensity
attribute vec3 color;
uniform float uBend;
uniform vec3 uBendCenter;
uniform float uPixel;      // world size of one pixel at unit distance
uniform vec2 uFogRange;
uniform float uTime;
varying vec2 vCorner;
varying vec3 vColor;
varying vec3 vInfo;        // seed, kind, intensity
void main() {
  vec3 pos = position;
  float size = aGlow.x;
  float kind = aGlow.z;
  float life = 1.0;
  if (kind > 5.5) {
    // smoke: each puff rises from its chimney, leans with the wind, swells and thins
    float t = fract(uTime * 0.085 + aGlow.y);
    pos.y += t * 9.0;
    pos.x += t * t * 4.0 + sin(t * 9.0 + aGlow.y * 20.0) * 0.5;
    pos.z += sin(t * 6.0 + aGlow.y * 9.0) * 0.6;
    size *= 0.5 + t * 1.8;
    life = sin(t * 3.14159) * (1.0 - t * 0.4);
  }
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vec2 dxz = wp.xz - uBendCenter.xz;
  wp.y += uBend * dot(dxz, dxz);
  vec4 mv = viewMatrix * wp;
  float dist = max(-mv.z, 0.1);
  // never smaller than a couple of pixels: far lights stay steady points
  float minSize = uPixel * dist * 2.2;
  float k = max(size, minSize);
  float dim = (size * size) / (k * k);
  mv.xy += aCorner * k;
  float fogF = pow(smoothstep(uFogRange.x, uFogRange.y, dist), 1.5);
  float inten = aGlow.w * mix(1.0, 0.30, fogF) * mix(dim, 1.0, 0.35) * step(dist, uFogRange.y + 4.0) * life;
  // far-window lights only take over once the painted panes are too small to read
  if (kind > 0.5 && kind < 1.5) inten *= smoothstep(110.0, 240.0, dist);
  // the guiding star is never dimmed by distance
  if (kind > 3.5 && kind < 4.5) inten = aGlow.w;
  vCorner = aCorner;
  vColor = color;
  vInfo = vec3(aGlow.y, kind, inten);
  gl_Position = projectionMatrix * mv;
}
`,pu=`
precision highp float;
uniform float uTime;
uniform float uGlow;
uniform float uAlive;
varying vec2 vCorner;
varying vec3 vColor;
varying vec3 vInfo;
${jc}
const float TAU = 6.28318531;
void main() {
  float r = length(vCorner);
  if (r > 1.0) discard;
  float seed = vInfo.x, kind = vInfo.y;
  float a = 0.0;
  if (kind < 0.5) {
    // a lantern: hot heart, then a little star-halo of dashes, like the ones overhead
    float core = exp(-r * r * 26.0) * 1.6;
    float th = atan(vCorner.y, vCorner.x);
    float ring = floor(r * 5.0);
    float n = max(5.0, floor((ring + 0.5) * 4.4));
    float x = (th / TAU + 0.5) * n + hash11(ring + seed * 7.0) * 5.0 + uTime * 0.05 * (1.0 + ring * 0.3) * (seed > 0.5 ? 1.0 : -1.0);
    float fx = fract(x), fy = fract(r * 5.0);
    float dash = smoothstep(0.5, 0.30, abs(fx - 0.5)) * smoothstep(0.5, 0.22, abs(fy - 0.5));
    float fall = pow(max(1.0 - r, 0.0), 2.2);
    a = core + dash * fall * 0.55 * step(0.5, ring) + fall * 0.10;
  } else if (kind < 1.5 || (kind > 2.5 && kind < 3.5)) {
    // a far window, a festive bulb, a spark: just a soft point
    a = exp(-r * r * 5.0) - 0.0067;
  } else if (kind < 2.5) {
    // a stray star: pulsing, with turning rays
    float th = atan(vCorner.y, vCorner.x);
    float rays = pow(abs(cos(th * 2.0 + uTime * 0.6 + seed * 6.0)), 14.0);
    float pulse = 0.8 + 0.2 * sin(uTime * 3.0 + seed * 20.0);
    a = (exp(-r * r * 30.0) * 2.0 + rays * pow(max(1.0 - r, 0.0), 3.0) * 0.8 + pow(max(1.0 - r, 0.0), 3.0) * 0.25) * pulse;
  } else if (kind < 4.5) {
    // the guiding star over the steeple: a hot heart, four long rays, four
    // short ones, and haloes breathing outward like the stars on the canvas
    float th = atan(vCorner.y, vCorner.x);
    float fall = max(1.0 - r, 0.0);
    float rays = pow(abs(cos(th * 2.0)), 70.0) * pow(fall, 1.4);
    float rays2 = pow(abs(cos(th * 2.0 + 1.5708)), 110.0) * pow(max(1.0 - r * 1.9, 0.0), 2.0) * 0.6;
    rays2 += pow(abs(cos(th * 2.0 + 0.7854)), 90.0) * pow(max(1.0 - r * 2.4, 0.0), 2.0) * 0.5;
    float core = exp(-r * r * 120.0) * 3.0 + exp(-r * r * 16.0) * 0.55;
    float ring = smoothstep(0.5, 0.15, abs(fract(r * 5.0 - uTime * 0.22) - 0.5)) * pow(fall, 2.6) * 0.30;
    a = core + rays + rays2 + ring;
  } else if (kind < 5.5) {
    // a trail orb: a small sun with a breathing ring
    float ring = smoothstep(0.09, 0.0, abs(r - 0.60 - 0.06 * sin(uTime * 3.0 + seed * 9.0))) * 0.30;
    a = exp(-r * r * 20.0) * 1.7 + exp(-r * r * 4.0) * 0.30 + ring;
  } else {
    // smoke: a curl of pale strokes
    float th = atan(vCorner.y, vCorner.x);
    float curl = 0.5 + 0.5 * sin(th * 2.0 + r * 9.0 - uTime * 0.7 + seed * 30.0);
    a = pow(max(1.0 - r, 0.0), 1.6) * (0.35 + 0.65 * curl);
  }
  gl_FragColor = vec4(vColor * a * vInfo.z * uGlow * mix(0.25, 1.0, uAlive), 1.0);
}
`;function mu(e){return new di({vertexShader:fu,fragmentShader:pu,uniforms:{uTime:e.uTime,uBend:e.uBend,uBendCenter:e.uBendCenter,uPixel:e.uPixel,uFogRange:e.uFogRange,uGlow:e.uGlow,uAlive:e.uAlive},blending:2,depthWrite:!1,transparent:!0})}var hu=new URLSearchParams(location.search),gu=typeof matchMedia==`function`&&matchMedia(`(hover: none), (pointer: coarse)`).matches,_u={touch:hu.has(`touch`)||(navigator.maxTouchPoints||0)>0&&gu,small:!1};_u.small=_u.touch&&Math.min(window.screen.width,window.screen.height)<820;var vu=document.documentElement;vu.classList.toggle(`touch`,_u.touch),_u.touch||window.addEventListener(`touchstart`,()=>{_u.touch=!0,vu.classList.add(`touch`)},{once:!0,passive:!0});var W={PLAIN:0,WALL:1,ROOF:2,COBBLE:3,DIRT:4,GRASS:5,WHEAT:6,PAVING:7,CYPRESS:8,LEAF:9,GLOW:10,STONE:11,CLOTH:12,GARDEN:13,FIGURE:14},yu=4096,bu=class{constructor(e=32768){this.vcap=e,this.icap=e*2,this.alloc(),this.pts=new Float64Array(768),this.pi=0,this.ox=0,this.oz=0,this.r=1,this.g=1,this.b=1,this.kind=0,this.seed=0,this.p1=0,this.p2=0,this.lx=0,this.ly=-999,this.lz=0,this.li=0,this.mx=0,this.my=-999,this.mz=0,this.mi=0,this.lamps=null,this.reset(0,0,0,0)}alloc(){this.pos=new Float32Array(this.vcap*3),this.nrm=new Float32Array(this.vcap*3),this.col=new Float32Array(this.vcap*3),this.uv=new Float32Array(this.vcap*2),this.dat=new Float32Array(this.vcap*4),this.lmp=new Float32Array(this.vcap*4),this.lmp2=new Float32Array(this.vcap*4),this.idx=new Uint32Array(this.icap)}growV(){let e=(e,t)=>{let n=new Float32Array(e.length*2);return n.set(e),n};this.vcap*=2,this.pos=e(this.pos),this.nrm=e(this.nrm),this.col=e(this.col),this.uv=e(this.uv),this.dat=e(this.dat),this.lmp=e(this.lmp),this.lmp2=e(this.lmp2)}growI(){this.icap*=2;let e=new Uint32Array(this.icap);e.set(this.idx),this.idx=e}reset(e,t,n,r){this.nv=0,this.ni=0,this.ox=e,this.oz=t,this.ux=Math.floor((n+yu/2)/yu)*yu,this.uz=Math.floor((r+yu/2)/yu)*yu,this.minY=1/0,this.maxY=-1/0,this.lamps=null}color(e,t=1){return this.r=e[0]*t,this.g=e[1]*t,this.b=e[2]*t,this}rgb(e,t,n){return this.r=e,this.g=t,this.b=n,this}data(e,t=0,n=0,r=0){return this.kind=e,this.seed=t,this.p1=n,this.p2=r,this}noLamp(){return this.li=0,this.ly=-999,this.mi=0,this.my=-999,this}setLamps(e){this.lamps=e}lampFor(e,t,n){let r=this.lamps,i=-1,a=-1,o=676,s=676;if(r)for(let c=0;c<r.length;c++){let l=r[c],u=l.wx-e,d=l.wy-t,f=l.wz-n,p=u*u+d*d*.5+f*f;p<o?(s=o,a=i,o=p,i=c):p<s&&(s=p,a=c)}if(i<0)this.li=0,this.ly=-999;else{let e=r[i];this.lx=e.wx,this.ly=e.wy,this.lz=e.wz,this.li=e.power}if(a<0)this.mi=0,this.my=-999;else{let e=r[a];this.mx=e.wx,this.my=e.wy,this.mz=e.wz,this.mi=e.power}}p(e,t,n){let r=this.pi;this.pi=this.pi+1&255;let i=r*3;return this.pts[i]=ml(e,n)-this.ox,this.pts[i+1]=t,this.pts[i+2]=hl(e,n)-this.oz,r}pl(e,t,n){let r=this.pi;this.pi=this.pi+1&255;let i=r*3;return this.pts[i]=e,this.pts[i+1]=t,this.pts[i+2]=n,r}px(e){return this.pts[e*3]}py(e){return this.pts[e*3+1]}pz(e){return this.pts[e*3+2]}vert(e,t,n,r,i,a,o,s,c=1){this.nv>=this.vcap&&this.growV();let l=this.nv++,u=l*3;return this.pos[u]=e,this.pos[u+1]=t,this.pos[u+2]=n,this.nrm[u]=r,this.nrm[u+1]=i,this.nrm[u+2]=a,this.col[u]=this.r*c,this.col[u+1]=this.g*c,this.col[u+2]=this.b*c,u=l*2,this.uv[u]=o,this.uv[u+1]=s,u=l*4,this.dat[u]=this.kind,this.dat[u+1]=this.seed,this.dat[u+2]=this.p1,this.dat[u+3]=this.p2,this.lmp[u]=this.lx,this.lmp[u+1]=this.ly,this.lmp[u+2]=this.lz,this.lmp[u+3]=this.li,this.lmp2[u]=this.mx,this.lmp2[u+1]=this.my,this.lmp2[u+2]=this.mz,this.lmp2[u+3]=this.mi,t<this.minY&&(this.minY=t),t>this.maxY&&(this.maxY=t),l}tri3(e,t,n){this.ni+3>this.icap&&this.growI(),this.idx[this.ni++]=e,this.idx[this.ni++]=t,this.idx[this.ni++]=n}quad(e,t,n,r,i,a,o,s,c=1,l=1,u=1,d=1){let f=this.pts,p=f[e*3],m=f[e*3+1],h=f[e*3+2],g=f[t*3],_=f[t*3+1],v=f[t*3+2],y=f[n*3],b=f[n*3+1],x=f[n*3+2],S=f[r*3],C=f[r*3+1],w=f[r*3+2],T=y-p,E=b-m,D=x-h,O=S-g,k=C-_,A=w-v,j=E*A-D*k,M=D*O-T*A,ee=T*k-E*O,N=Math.hypot(j,M,ee)||1;j/=N,M/=N,ee/=N;let te=this.vert(p,m,h,j,M,ee,i,a,c),P=this.vert(g,_,v,j,M,ee,o,a,l),F=this.vert(y,b,x,j,M,ee,o,s,u),ne=this.vert(S,C,w,j,M,ee,i,s,d);this.tri3(te,P,F),this.tri3(te,F,ne)}quadW(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.nv;this.quad(e,t,n,r,i,a,o,s,c,l,u,d),this.dat[g*4+3]=f,this.dat[(g+1)*4+3]=p,this.dat[(g+2)*4+3]=m,this.dat[(g+3)*4+3]=h}tri(e,t,n,r,i,a,o,s,c,l=1,u=1,d=1){let f=this.pts,p=f[e*3],m=f[e*3+1],h=f[e*3+2],g=f[t*3],_=f[t*3+1],v=f[t*3+2],y=f[n*3],b=f[n*3+1],x=f[n*3+2],S=g-p,C=_-m,w=v-h,T=y-p,E=b-m,D=x-h,O=C*D-w*E,k=w*T-S*D,A=S*E-C*T,j=Math.hypot(O,k,A)||1;O/=j,k/=j,A/=j;let M=this.vert(p,m,h,O,k,A,r,i,l),ee=this.vert(g,_,v,O,k,A,a,o,u),N=this.vert(y,b,x,O,k,A,s,c,d);this.tri3(M,ee,N)}box(e,t,n,r,i,a,o=!0){let s=this.p(e,i,r),c=this.p(t,i,r),l=this.p(t,i,n),u=this.p(e,i,n),d=this.p(e,a,r),f=this.p(t,a,r),p=this.p(t,a,n),m=this.p(e,a,n),h=t-e,g=r-n,_=a-i;this.quad(s,c,f,d,0,0,h,_),this.quad(c,l,p,f,0,0,g,_),this.quad(l,u,m,p,0,0,h,_),this.quad(u,s,d,m,0,0,g,_),o&&this.quad(d,f,p,m,0,0,h,g)}gu(e){return e-this.ux}gv(e){return e-this.uz}build(){let e=new _r,t=this.nv;return e.setAttribute(`position`,new nr(this.pos.slice(0,t*3),3)),e.setAttribute(`normal`,new nr(this.nrm.slice(0,t*3),3)),e.setAttribute(`color`,new nr(this.col.slice(0,t*3),3)),e.setAttribute(`uv`,new nr(this.uv.slice(0,t*2),2)),e.setAttribute(`aData`,new nr(this.dat.slice(0,t*4),4)),e.setAttribute(`aLamp`,new nr(this.lmp.slice(0,t*4),4)),e.setAttribute(`aLamp2`,new nr(this.lmp2.slice(0,t*4),4)),e.setIndex(new nr(t>65535?this.idx.slice(0,this.ni):Uint16Array.from(this.idx.subarray(0,this.ni)),1)),e}},xu=class{constructor(e=2048){this.cap=e,this.pos=new Float32Array(e*4*3),this.corner=new Float32Array(e*4*2),this.glow=new Float32Array(e*4*4),this.col=new Float32Array(e*4*3),this.n=0,this.ox=0,this.oz=0}reset(e,t){this.n=0,this.ox=e,this.oz=t}grow(){let e=e=>{let t=new Float32Array(e.length*2);return t.set(e),t};this.cap*=2,this.pos=e(this.pos),this.corner=e(this.corner),this.glow=e(this.glow),this.col=e(this.col)}add(e,t,n,r,i,a,o=0,s=0){this.addLocal(ml(e,n)-this.ox,t,hl(e,n)-this.oz,r,i,a,o,s)}addLocal(e,t,n,r,i,a,o=0,s=0){this.n>=this.cap&&this.grow();let c=this.n++;for(let l=0;l<4;l++){let u=c*4+l;this.pos[u*3]=e,this.pos[u*3+1]=t,this.pos[u*3+2]=n,this.corner[u*2]=l===0||l===3?-1:1,this.corner[u*2+1]=l<2?-1:1,this.glow[u*4]=r,this.glow[u*4+1]=s,this.glow[u*4+2]=o,this.glow[u*4+3]=a,this.col[u*3]=i[0],this.col[u*3+1]=i[1],this.col[u*3+2]=i[2]}}build(){let e=this.n,t=new _r;t.setAttribute(`position`,new nr(this.pos.slice(0,e*12),3)),t.setAttribute(`aCorner`,new nr(this.corner.slice(0,e*8),2)),t.setAttribute(`aGlow`,new nr(this.glow.slice(0,e*16),4)),t.setAttribute(`color`,new nr(this.col.slice(0,e*12),3));let n=new Uint32Array(e*6);for(let t=0;t<e;t++){let e=t*4,r=t*6;n[r]=e,n[r+1]=e+1,n[r+2]=e+2,n[r+3]=e,n[r+4]=e+2,n[r+5]=e+3}return t.setIndex(new nr(n,1)),t}},Su=3,Cu=new Map,wu=1600;function Tu(e,t){let n=e*65536+t,r=Cu.get(n);if(r)return r;if(r=Eu(e,t),Cu.size>wu){let e=0;for(let t of Cu.keys())if(Cu.delete(t),++e>wu/3)break}return Cu.set(n,r),r}function Eu(e,t){let n=cl(e)+ul(e),r=cl(e+1)-ul(e+1),i=ll(t)+dl(t),a=ll(t+1)-dl(t+1),o=Cl(e,t),s=(n+r)/2,c=(i+a)/2,l={i:e,j:t,x0:n,x1:r,z0:i,z1:a,kind:o,cx:s,cz:c,seed:Nc(e,t,4242),home:Math.abs(e)<=1&&t>=-3&&t<=0,density:wl(o)?Math.max(vl(s,c),.5):0,houses:[],solids:[],trees:[],lamps:[],props:[],church:null,hall:null},u=Fc(l.seed);return o===`town`?Ou(l,u):o===`plaza`?Pu(l,u):Fu(l,u),l}function Du(e,t,n,r,i,a,o,s={}){let c=r-n,l=a-i,u=o===`N`||o===`S`,d=u?c:l,f=u?l:c,p=e.density>.8,m=s.stories;if(!m){let n=t();m=e.home?n<.55?1:2:p?n<.18?2:n<.68?3:4:n<.3?1:n<.8?2:3}let h=m*Su+t()*.5,g=s.gableFront??(d<9.5&&t()<.34),_=u===!g?`x`:`z`,v=_===`x`?l:c,y=.72+t()*.5,b=Math.min(v/2*y,6.5),x=o===`W`?n:o===`E`?r:(n+r)/2,S=o===`N`?i:o===`S`?a:(i+a)/2,C={x0:n,x1:r,z0:i,z1:a,face:o,ridge:_,stories:m,eave:h,rise:b,baseY:s.baseY??U(x,S),seed:t(),wall:Math.floor(t()*1e3),roof:Math.floor(t()*1e3),lit:.3+t()*.45,shop:!e.home&&p&&m>=2&&t()<.42,chimney:t()<.7,church:!1,...s.extra},w=Fc(Nc(Math.floor(C.seed*1e6),C.wall,4477)),T=w();C.style=C.church?`church`:C.shed?`shed`:e.home?T<.62?`cottage`:`stucco`:p?T<.46?`town`:T<.84?`stucco`:m>=2?`timber`:`stucco`:T<.5?`stucco`:T<.7&&m>=2?`timber`:T<.88?`cottage`:`town`;let E=C.style===`town`?.5:C.style===`stucco`?.22:0;if(C.roofType=!C.church&&!C.shed&&!g&&w()<E?`hip`:`gable`,!C.church&&!C.shed&&!C.shop&&!s.baseY&&w()<.34&&f>7){let e=.15+w()*.35;o===`N`?C.z0+=e:o===`S`?C.z1-=e:o===`W`?C.x0+=e:C.x1-=e}return e.houses.push(C),C}function Ou(e,t){let n=e.x1-e.x0,r=e.z1-e.z0,i=()=>Rc(7.5+t()*3.5,6.5,Math.min(n,r)/2-2.2),a=i(),o=i(),s=i(),c=i(),l=0,u=(e,n,r,i)=>{let a=e,o=!0;for(;a<n-.5;){let e=6.2+t()*5.4;n-a-e<5.5&&(e=n-a);let s=a+e>=n-.01;if(!((o||s)&&i)&&t()<.085&&e>3){let n=Math.min(e,2.8+t()*1.6);l++,a+=n}else r(a,a+e),a+=e;o=!1}};u(e.x0,e.x1,(n,r)=>Du(e,t,n,r,e.z0,e.z0+a,`N`),!0),u(e.x0,e.x1,(n,r)=>Du(e,t,n,r,e.z1-o,e.z1,`S`),!0);let d=e.i===-1&&e.j===-1;(d||!e.home&&n>44&&r>50&&Pc(e.i,e.j,555)<.24)&&Mu(e,d);let f=e.hall;for(let[n,r]of f?[[e.z0+a,f.z0],[f.z1,e.z1-o]]:[[e.z0+a,e.z1-o]])r-n<4.5||(u(n,r,(n,r)=>Du(e,t,e.x0,e.x0+s,n,r,`W`),!1),u(n,r,(n,r)=>Du(e,t,e.x1-c,e.x1,n,r,`E`),!1));if(l===0&&!f){let n=e.houses.filter(e=>e.face===`W`||e.face===`E`);n.length&&e.houses.splice(e.houses.indexOf(n[Math.floor(t()*n.length)]),1)}let p=e.x0+s+1.5,m=e.x1-c-1.5,h=e.z0+a+1.5,g=e.z1-o-1.5;if(m-p>5&&g-h>5){let n=1+Math.floor(t()*4);for(let r=0;r<n;r++){let n=p+t()*(m-p),r=h+t()*(g-h),i=t();f&&r>f.z0-2.5&&r<f.z1+2.5||e.trees.push(i<.45?{x:n,z:r,kind:`cypress`,h:7+t()*7,r:1+t()*.6,seed:t()}:{x:n,z:r,kind:`olive`,h:3.2+t()*2.2,r:2+t()*1.4,seed:t()})}if(!f&&t()<.5&&m-p>9&&g-h>9){let n=p+t()*(m-p-5),r=h+t()*(g-h-4.5);Du(e,t,n,n+4.6,r,r+4,`S`,{stories:1,gableFront:!1,extra:{shed:!0,lit:.15,eave:2.3,rise:1.2,chimney:!1,shop:!1}})}}}var ku=4.7,Au=.5,ju=2.3;function Mu(e,t){let n=Fc(Nc(e.i,e.j,7771)),r=(e.z0+e.z1)/2+(t?0:(n()-.5)*6),i=r-ku,a=r+ku,o=Math.max(U(e.x0,r),U(e.x1,r),U(e.cx,r)),s=o+4.5,c=o+5.4,l=t||n()<.55?`cafe`:`gallery`,u={x0:e.x0,x1:e.x1,z0:i,z1:a,zc:r,baseY:o,under:s,top:c,theme:l,seed:n(),door:ju,wall:Au,obstacles:[],key:`${e.i}:${e.j}`};e.hall=u,e.solids.push({x0:u.x0,x1:u.x1,z0:i,z1:i+Au,top:c}),e.solids.push({x0:u.x0,x1:u.x1,z0:a-Au,z1:a,top:c});for(let t of[u.x0,u.x1-Au])e.solids.push({x0:t,x1:t+Au,z0:i,z1:r-ju,top:c}),e.solids.push({x0:t,x1:t+Au,z0:r+ju,z1:a,top:c});let d=(u.x0+u.x1)/2;if(l===`cafe`){let t={x0:d-1.4,x1:d+1.4,z0:r-.75,z1:r+.75,top:U(d,r)+.86,table:!0};e.solids.push(t),u.obstacles.push(t)}else for(let t of[-.22,.22]){let n=d+(u.x1-u.x0)*t,i={x0:n-1,x1:n+1,z0:r-.3,z1:r+.3,top:U(n,r)+.48,bench:!0};e.solids.push(i),u.obstacles.push(i)}for(let t=0;t<4;t++){let n=u.x0+(u.x1-u.x0)*((t+.5)/4);e.lamps.push({x:n,z:r,y:s-.75,hang:!0,power:1.05,halo:l===`cafe`?2.6:1.5})}for(let[t,n]of[[u.x0-.45,-1],[u.x1+.45,1]])for(let i of[-3.2,3.2])e.lamps.push({x:t,z:r+i,y:o+3.4,hang:!0,power:1,halo:1.5,side:n})}var Nu={door:1.4,doorH:3.1,arch:1.3,archH:3.6,wall:.45,ceil:6.1};function Pu(e,t){let n=e.x1-e.x0,r=e.z1-e.z0,i=e.i===0&&e.j===-1;if(i||t()<.55){let n=i?_l.church.gx:e.cx-6+(t()-.5)*4,r=i?_l.church.gz:e.cz+(t()-.5)*6,a=U(n,r),o=i?_l.spireHeight:26+t()*8,s={x0:n-2.1,x1:n+2.1,z0:r-2.1,z1:r+2.1},c=o*.4,l=Math.min(17,e.x1-s.x1-5),u=Du(e,t,s.x1-.4,s.x1-.4+l,r-4.3,r+4.3,`S`,{stories:1,gableFront:!1,baseY:a,extra:{church:!0,eave:6.6,rise:4.6,lit:.9,chimney:!1,shop:!1,hollow:Nu.ceil}});u.ridge=`x`;let d=a+6.6,f=Nu.wall,p=a+o,m=a+c;e.solids.push({x0:u.x0,x1:u.x1,z0:u.z0,z1:u.z0+f,top:d}),e.solids.push({x0:u.x0,x1:u.x1,z0:u.z1-f,z1:u.z1,top:d}),e.solids.push({x0:u.x1-f,x1:u.x1,z0:u.z0,z1:r-Nu.door,top:d}),e.solids.push({x0:u.x1-f,x1:u.x1,z0:r+Nu.door,z1:u.z1,top:d}),e.solids.push({x0:u.x1-f,x1:u.x1,z0:r-Nu.door,z1:r+Nu.door,top:d,under:a+Nu.doorH}),e.solids.push({x0:u.x0,x1:u.x0+f,z0:u.z0,z1:s.z0,top:d}),e.solids.push({x0:u.x0,x1:u.x0+f,z0:s.z1,z1:u.z1,top:d}),e.solids.push({x0:s.x0,x1:s.x1,z0:s.z0,z1:r-Nu.arch,top:p,visualTop:m}),e.solids.push({x0:s.x0,x1:s.x1,z0:r+Nu.arch,z1:s.z1,top:p,visualTop:m}),e.solids.push({x0:s.x0,x1:s.x1,z0:r-Nu.arch,z1:r+Nu.arch,top:p,visualTop:m,under:a+Nu.archH});let h={x0:s.x0,x1:u.x1,z0:u.z0,z1:u.z1,zc:r,baseY:a,under:a+Nu.ceil,top:d,theme:`church`,seed:u.seed,door:Nu.door,wall:f,obstacles:[],key:`${e.i}:${e.j}`,narrow:s.x1+.6};e.church={tx:n,tz:r,baseY:a,towerH:c,spireH:o-c,tower:s,nave:u,hall:h};for(let t of[.3,.7])e.lamps.push({x:u.x0+l*t,z:r,y:a+4.7,hang:!0,power:1.1,halo:1.6});e.lamps.push({x:n,z:r,y:a+2.95,hang:!0,power:1,halo:1.3})}else{let n=e.cx+(t()-.5)*6,r=e.cz+(t()-.5)*6;e.solids.push({x0:n-1.6,x1:n+1.6,z0:r-1.6,z1:r+1.6,top:U(n,r)+.9,fountain:!0}),e.trees.push({x:n+7,z:r-5,kind:`olive`,h:6.5,r:4.2,seed:t()})}let a=4.5;for(let[t,n]of[[e.x0+a,e.z0+a],[e.x1-a,e.z0+a],[e.x0+a,e.z1-a],[e.x1-a,e.z1-a]])e.lamps.push({x:t,z:n,y:U(t,n)+4.1,post:!0});let o=3+Math.floor(t()*4);for(let a=0;a<o;a++){let a=Math.floor(t()*4),o=.15+t()*.7;if(i&&a===2)continue;let s=a<2?e.x0+o*n:a===2?e.x0+2.5:e.x1-2.5,c=a===0?e.z0+2.5:a===1?e.z1-2.5:e.z0+o*r;e.church&&Math.abs(s-e.church.tx-6)<14&&Math.abs(c-e.church.tz)<8||e.trees.push({x:s,z:c,kind:`cypress`,h:8+t()*6,r:1.1+t()*.5,seed:t()})}if(!i){let r=2+Math.floor(t()*3);for(let i=0;i<r;i++){let a=e.x0+8+(n-16)*(i+.5)/r,o=e.z1-5.5;e.props.push({type:`stall`,x:a,z:o,seed:t()}),e.lamps.push({x:a,z:o+.2,y:U(a,o)+2,hang:!0,power:.9,halo:1.3})}}if(!i&&r>44){let n=e.x0,r=8+t()*2;for(;n<e.x1-.5;){let i=6.5+t()*5;e.x1-n-i<5.5&&(i=e.x1-n),Du(e,t,n,n+i,e.z0,e.z0+r,`S`,{extra:{shop:t()<.7}}),n+=i}}}function Fu(e,t){let n=e.x1-e.x0,r=e.z1-e.z0,i=e.kind;if(i===`grove`){let n=8.5;for(let r=e.x0+3+t()*3;r<e.x1-2;r+=n)for(let i=e.z0+3+t()*3;i<e.z1-2;i+=n)t()<.16||e.trees.push({x:r+(t()-.5)*4.5,z:i+(t()-.5)*4.5,kind:`olive`,h:3.4+t()*2.6,r:2.6+t()*1.6,seed:t()})}else if(i===`field`||i===`meadow`){let a=i===`field`?2+Math.floor(t()*3):3+Math.floor(t()*4);for(let i=0;i<a;i++){let i=t()<.7?t()<.5?e.x0+2+t()*3:e.x1-2-t()*3:e.x0+t()*n,a=e.z0+2+t()*(r-4);e.trees.push(t()<.7?{x:i,z:a,kind:`cypress`,h:9+t()*9,r:1.2+t()*.8,seed:t()}:{x:i,z:a,kind:`olive`,h:3.5+t()*2.5,r:2.4+t()*1.4,seed:t()})}if(i===`field`){let i=Math.floor(t()*4);for(let a=0;a<i;a++)e.props.push({type:`stack`,x:e.x0+6+t()*(n-12),z:e.z0+6+t()*(r-12),r:1.6+t()*.8,seed:t()})}if(t()<.22&&n>26&&r>26){let i=e.x0+4+t()*(n-20),a=e.z0+4+t()*(r-18);Du(e,t,i,i+10,a,a+7.5,`S`,{stories:t()<.5?1:2,gableFront:!1,extra:{shop:!1,lit:.45}}),e.trees.push({x:i-2.5,z:a+3,kind:`cypress`,h:11+t()*5,r:1.3,seed:t()})}}else if(i===`knoll`){let i=2+Math.floor(t()*3);for(let a=0;a<i;a++){let i=e.x0+t()*n,a=e.z0+t()*r;Math.hypot(i-_l.camGrid.gx,a-_l.camGrid.gz+30)<62||e.trees.push({x:i,z:a,kind:t()<.5?`cypress`:`olive`,h:5+t()*6,r:1.6+t(),seed:t()})}}}var Iu=new Map;function Lu(e,t,n){let r=(e===`x`?0:1)+2*(t*65536+n),i=Iu.get(r);return i||(Iu.size>4e3&&Iu.clear(),i=zu(e,t,n),Iu.set(r,i),i)}function Ru(e,t,n,r){let i=e.arch,a=i.a1-i.a0,o=(i.a0+i.a1)/2,s=t===`x`,c=s?`z0`:`x0`,l=s?`z1`:`x1`,u=s?[[Tu(n-1,r),`x1`,1],[Tu(n,r),`x0`,-1]]:[[Tu(n,r-1),`z1`,1],[Tu(n,r),`z0`,-1]],d=null;for(let[t,n,r]of u){if(t.kind!==`town`){e.arch=null;return}let i=[];for(let e of t.houses)e.shed||e.church||(t[n]-e[n])*r>.7||i.push([e[c],e[l]]);i.sort((e,t)=>e[0]-t[0]);let a=[];for(let e of i){let t=a[a.length-1];t&&e[0]<=t[1]+.05?t[1]=Math.max(t[1],e[1]):a.push([e[0],e[1]])}if(!d)d=a;else{let e=[];for(let t of d)for(let n of a){let r=Math.max(t[0],n[0]),i=Math.min(t[1],n[1]);i>r&&e.push([r,i])}d=e}}let f=null;for(let[e,t]of d){if(t-e<a+.8)continue;let n=Rc(o,e+a/2+.4,t-a/2-.4);(f===null||Math.abs(n-o)<Math.abs(f-o))&&(f=n)}if(f===null||Math.abs(f-o)>16){e.arch=null;return}let p=s?U(e.c,f):U(f,e.c),m=i.top-i.under;i.a0=f-a/2,i.a1=f+a/2,i.base=p,i.under=p+4.6,i.top=i.under+m}function zu(e,t,n){let r=Fc(Nc(t,n,e===`x`?911:733)),i=e===`x`?Cl(t-1,n):Cl(t,n-1),a=Cl(t,n),o=+!!wl(i)+ +!!wl(a),s={axis:e,i:t,j:n,paved:o>0,lamps:[],arch:null,strings:[]},c,l,u,d;e===`x`?(c=ll(n)+dl(n),l=ll(n+1)-dl(n+1),u=cl(t),d=ul(t)):(c=cl(t)+ul(t),l=cl(t+1)-ul(t+1),u=ll(n),d=dl(n)),s.a0=c,s.a1=l,s.c=u,s.hw=d;let f=l-c,p=(t,n)=>e===`x`?[u+n,t]:[t,u+n];if(o>0){let l=d>4?3:2;for(let e=0;e<l;e++){let t=c+f*((e+.5)/l+(r()-.5)*.12),n=(e+(r()<.5?0:1))%2==0?-1:1;n<0&&!wl(i)&&(n=1),n>0&&!wl(a)&&(n=-1);let[o,u]=p(t,n*(d-.55));s.lamps.push({x:o,z:u,y:U(o,u)+3.5,side:n,post:!1})}if(o===2&&f>30&&r()<.2&&!(t===0&&e===`x`&&n>=-3&&n<=0)){let i=c+f*(.3+r()*.4),a=4.2+r()*1.8,o=U(...p(i,0));s.arch={a0:i-a/2,a1:i+a/2,base:o,under:o+4.6,top:o+4.6+3+r()*1.4,seed:r()},Ru(s,e,t,n)}if(o===2&&r()<.2){let e=3+Math.floor(r()*3);for(let t=0;t<e;t++)s.strings.push(c+f*(t+.5)/e+(r()-.5)*3)}}else if(r()<.3){let e=c+f*(.3+r()*.4),t=r()<.5?-1:1,[n,i]=p(e,t*(d+.5));s.lamps.push({x:n,z:i,y:U(n,i)+4,side:t,post:!0})}return s}function Bu(e,t,n){if(e.roofType===`hip`){let r=(e.ridge===`x`?e.z1-e.z0:e.x1-e.x0)/2,i=Math.max(0,Math.min(t-e.x0,e.x1-t,n-e.z0,e.z1-n));return e.baseY+e.eave+Math.min(e.rise,e.rise/r*i)}let r=e.ridge===`x`?Math.abs(n-(e.z0+e.z1)/2)/((e.z1-e.z0)/2):Math.abs(t-(e.x0+e.x1)/2)/((e.x1-e.x0)/2);return e.baseY+e.eave+e.rise*(1-Math.min(r,1))}function Vu(e){let t=e.x0+(e.x1-e.x0)*(.25+.5*(e.wall%7/7)),n=e.z0+(e.z1-e.z0)*(.3+.4*(e.roof%5/5)),r=e.baseY+e.eave+(e.roofType===`hip`?Math.min(e.rise,e.rise/((e.ridge===`x`?e.z1-e.z0:e.x1-e.x0)/2)*(Math.min(e.x1-e.x0,e.z1-e.z0)/2)):e.rise);return{x:t,z:n,base:Bu(e,t,n)-.5,top:r+.9}}var Hu=1.75;function Uu(e,t,n,r,i){let a=fl(e),o=pl(t),s=cl(a),c=cl(a+1),l=ll(o),u=ll(o+1),d=ul(a),f=ul(a+1),p=dl(o),m=dl(o+1),h=e>s+d&&e<c-f,g=t>l+p&&t<u-m,_=U(e,t),v=!1,y=!1,b=null,x=1/0;if(h&&g){let i=Tu(a,o),s=i.houses;for(let a=0;a<s.length;a++){let o=s[a];if(e>o.x0&&e<o.x1&&t>o.z0&&t<o.z1){let a=Bu(o,e,t);if(a<=n+r)a>_&&(_=a,y=!0);else if(o.hollow){let e=o.baseY+o.hollow;n+1.75>e&&(v=!0),e<x&&(x=e),i.church&&(b=i.church.hall)}else v=!0}}let c=i.solids;for(let a=0;a<c.length;a++){let o=c[a];e>o.x0&&e<o.x1&&t>o.z0&&t<o.z1&&(o.top<=n+r?o.top>_&&(_=o.top,y=!0):o.under===void 0?v=!0:(n+1.75>o.under&&(v=!0),o.under<x&&(x=o.under),i.church&&(b=i.church.hall)))}let l=i.hall;l&&t>l.z0&&t<l.z1&&(l.top<=n+r?l.top>_&&(_=l.top,y=!0):(n+1.75>l.under&&(v=!0),b=l,x=l.under))}else if(h!==g){let i,c;h?(i=Lu(`z`,a,t<=l+p?o:o+1),c=e):(i=Lu(`x`,e<=s+d?a:a+1,o),c=t);let u=i.arch;u&&c>u.a0&&c<u.a1&&(u.top<=n+r?(_=Math.max(_,u.top),y=!0):(n+1.75>u.under&&(v=!0),x=u.under))}return i.floor=_,i.blocked=v,i.roof=y,i.hall=b,i.ceil=x,i}function Wu(e,t,n,r,i){let a=fl(e),o=pl(t),s=cl(a),c=cl(a+1),l=ll(o),u=ll(o+1),d=ul(a),f=ul(a+1),p=dl(o),m=dl(o+1),h=e-i,g=e+i,_=t-i,v=t+i;if(g>s+d&&h<c-f&&v>l+p&&_<u-m){let i=Tu(a,o),s=i.houses;for(let i=0;i<s.length;i++){let a=s[i];if(g>a.x0&&h<a.x1&&v>a.z0&&_<a.z1){if(Bu(a,Rc(e,a.x0,a.x1),Rc(t,a.z0,a.z1))<=n+r)continue;if(!a.hollow||n+1.75>a.baseY+a.hollow)return!0}}let c=i.solids;for(let e=0;e<c.length;e++){let t=c[e];if(g>t.x0&&h<t.x1&&v>t.z0&&_<t.z1){if(t.top<=n+r)continue;if(t.under===void 0||n+1.75>t.under)return!0}}let l=i.hall;if(l&&v>l.z0&&_<l.z1&&l.top>n+r&&n+1.75>l.under)return!0}let y=e>s+d&&e<c-f;if(y!==(t>l+p&&t<u-m)){let c,u;y?(c=Lu(`z`,a,t<=l+p?o:o+1),u=e):(c=Lu(`x`,e<=s+d?a:a+1,o),u=t);let f=c.arch;if(f&&u+i>f.a0&&u-i<f.a1&&f.top>n+r&&n+1.75>f.under)return!0}return!1}var Gu=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Ku=e=>[Gu((e>>16&255)/255),Gu((e>>8&255)/255),Gu((e&255)/255)],qu={petal:Ku(16762910),petalDeep:Ku(16095764),disc:Ku(4860432),stem:Ku(4024870),leaf:Ku(4164142),vase:Ku(14263584),vaseBand:Ku(15782522),blade:Ku(3111509),iris:Ku(4865992),irisPale:Ku(8022752),irisHeart:Ku(15779896),awning:Ku(15312924),awningEdge:Ku(13203482)},Ju=Ku(16757708).map(e=>e*1.5),Yu=Ku(3024416),Xu=Math.PI*2,Zu=(e,t,n)=>Pc(e,t,n);function Qu(e,t,n,r,i,a,o,s,c=0){let l=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a),p=l*d,m=f,h=u*d,g=-u,_=l,v=-l*f,y=d,b=-u*f,x=(i,a,o=0)=>{let s=Math.cos(a)*i,c=Math.sin(a)*i;return e.p(t+g*s+v*c+p*o,n+y*c+m*o,r+_*s+b*c+h*o)},S=s*3.1;e.color(s>.6?qu.petalDeep:qu.petal,2.2).data(W.PLAIN,s+c,.9,0);for(let t=0;t<11;t++){let n=S+t/11*Xu,r=S+(t+1)/11*Xu;e.quad(x(o*.36,n),x(o*.36,r),x(o*.62,r),x(o*.62,n),0,0,.1,.06),e.tri(x(o*.62,n),x(o*.62,r),x(o,(n+r)/2,-o*.1),0,0,.1,0,.05,.12)}e.color(qu.disc).data(W.PLAIN,s+.3+c,.9,0);let C=x(0,0,o*.12);for(let t=0;t<11;t++)e.tri(C,x(o*.4,S+t/11*Xu),x(o*.4,S+(t+1)/11*Xu),.5,.5,1,.4,1,.6)}function $u(e,t,n,r,i,a,o){let s=.045,c=r+i,l=o*40,u=.06+.14*(o*7%1),d=t+Math.cos(l)*u,f=n+Math.sin(l)*u;e.color(qu.stem).data(W.PLAIN,o,.8,0);for(let[a,o]of[[s,0],[0,s]])e.quad(e.p(t-a,r,n-o),e.p(t+a,r,n+o),e.p(d+a*.6,c,f+o*.6),e.p(d-a*.6,c,f-o*.6),0,0,.09,i);e.color(qu.leaf,1.25).data(W.PLAIN,o,.8,0);for(let s=0;s<3;s++){let c=.26+.2*s,l=r+i*c,u=t+(d-t)*c,p=n+(f-n)*c,m=a+1.2+s*2.2+o*3,h=Math.cos(m),g=Math.sin(m),_=.5-s*.07,v=.19-s*.02;e.quad(e.p(u,l,p),e.p(u+h*_*.45-g*v,l+.08,p+g*_*.45+h*v),e.p(u+h*_,l-.1,p+g*_),e.p(u+h*_*.45+g*v,l+.08,p+g*_*.45-h*v),0,0,_,v*2)}Qu(e,d+Math.cos(a)*.07,c+.03,f+Math.sin(a)*.07,a,.28,.27+.09*o,o)}function ed(e,t){let n=e=>Zu(t.i,t.j,4100+e);if(n(0)>.8)return;let r=Math.floor(n(1)*4),i=n(2)<.45?[r,(r+2)%4]:[r];for(let n of i){let[r,i]=n%2==0?[t.x0+4,t.x1-4]:[t.z0+4,t.z1-4],a=[-Math.PI/2,0,Math.PI/2,Math.PI][n],o=0;for(let s=0;s<2;s++)for(let c=r+s*.5;c<i;c+=1){let r=Zu(Math.round(c*8),n*7+s,t.i*131+t.j*17+991),i=Zu(Math.round(c*8),n*7+s,t.i*131+t.j*17+992);if(r<.12)continue;let l=1.5+s*1+(i-.5)*.5,u=n===1?t.x1-l:n===3?t.x0+l:c,d=n===0?t.z0+l:n===2?t.z1-l:c;if(t.houses.some(e=>u>e.x0-1&&u<e.x1+1&&d>e.z0-1&&d<e.z1+1))continue;let f=U(u,d)-.05;if(o++%6==0){let t=e.p(u,f,d);e.lampFor(e.px(t),f+1.5,e.pz(t))}$u(e,u,d,f,1.25+r*.65,a+(i-.5)*.9,r)}}}function td(e,t,n,r,i,a){e.color(qu.vase).data(W.PLAIN,.5+i,.7,0),e.box(t-.06,t+.06,n-.06,n+.06,r,r+.1),e.color(qu.vaseBand).data(W.PLAIN,.4+i,.7,0),e.box(t-.05,t+.05,n-.05,n+.05,r+.1,r+.19);for(let o=0;o<5;o++){let s=a*9+o*1.31,c=o===0?0:.085+o%2*.03,l=o===0?.36:.22+o%3*.06,u=t+Math.cos(s)*c,d=n+Math.sin(s)*c,f=r+.19+l;e.color(qu.stem).data(W.PLAIN,.3+i,.8,0),e.tri(e.p(t-.012,r+.18,n),e.p(t+.012,r+.18,n),e.p(u,f,d),0,0,.03,0,.015,l),Qu(e,u,f,d,s,o===0?1.2:.55,.085+o%3*.012,(a*7+o*.37)%1,i)}}function nd(e,t,n,r,i){e.color(qu.blade).data(W.LEAF,i,0,0);for(let a=0;a<6;a++){let o=i*40+a*2.4,s=.1+.07*(a*7%3),c=.5+.1*(a*5%4),l=Math.cos(o),u=Math.sin(o),d=t+l*.06,f=n+u*.06;e.tri(e.p(d-u*.04,r,f+l*.04),e.p(d+u*.04,r,f-l*.04),e.p(d+l*s,r+c,f+u*s),0,0,.08,0,.04,c)}let a=2+ +(i>.45);for(let o=0;o<a;o++){let a=i*17+o*2.1,s=.06+.07*o,c=r+.62+.13*o,l=t+Math.cos(a)*s,u=n+Math.sin(a)*s;e.color(qu.blade,.8).data(W.PLAIN,i,.8,0),e.tri(e.p(l-.014,r,u),e.p(l+.014,r,u),e.p(l,c,u),0,0,.03,0,.015,c-r),e.color((i*5+o)%1>.5?qu.irisPale:qu.iris).data(W.PLAIN,i+o*.2,.9,0);for(let t=0;t<3;t++){let n=a+t*2.094,r=Math.cos(n),i=Math.sin(n);e.tri(e.p(l,c,u),e.p(l+r*.13-i*.05,c+.01,u+i*.13+r*.05),e.p(l+r*.15+i*.05,c-.1,u+i*.15-r*.05),0,0,.1,0,.1,.08);let o=Math.cos(n+1.05),s=Math.sin(n+1.05);e.tri(e.p(l-s*.04,c,u+o*.04),e.p(l+s*.04,c,u-o*.04),e.p(l+o*.05,c+.15,u+s*.05),0,0,.08,0,.04,.15)}e.color(qu.irisHeart).data(W.PLAIN,i,.9,0),e.tri(e.p(l-.025,c+.012,u),e.p(l+.025,c+.012,u),e.p(l,c+.012,u+.045),0,0,.05,0,.025,.045)}}function rd(e,t){let n=e=>Zu(t.i,t.j,4200+e);if(n(0)>.7)return;let r=Math.floor(n(1)*4),[i,a]=r%2==0?[t.x0+3,t.x1-3]:[t.z0+3,t.z1-3],o=0;for(let n=0;n<2;n++)for(let s=i+n*.45;s<a;s+=.9){let i=Zu(Math.round(s*8),r*5+n,t.i*131+t.j*17+881),a=Zu(Math.round(s*8),r*5+n,t.i*131+t.j*17+882);if(i<.3)continue;let c=1+n*.8+(a-.5)*.6,l=r===1?t.x1-c:r===3?t.x0+c:s,u=r===0?t.z0+c:r===2?t.z1-c:s;if(t.houses.some(e=>l>e.x0-1&&l<e.x1+1&&u>e.z0-1&&u<e.z1+1))continue;let d=U(l,u)-.03;if(o++%8==0){let t=e.p(l,d,u);e.lampFor(e.px(t),d+1,e.pz(t))}nd(e,l,u,d,i)}}function id(e,t){let n=t.solids.find(e=>e.fountain);if(!n)return;let r=(n.x0+n.x1)/2,i=(n.z0+n.z1)/2,a=e.p(r,n.top,i);e.lampFor(e.px(a),n.top+.5,e.pz(a));for(let n=0;n<14;n++){let a=Zu(n,t.i*31+t.j,4301);if(a<.2)continue;let o=n/14*Xu,s=Math.cos(o),c=Math.sin(o),l=2.05/Math.max(Math.abs(s),Math.abs(c)),u=r+s*l,d=i+c*l;nd(e,u,d,U(u,d)-.03,a)}}function ad(e,t){t.kind===`field`?ed(e,t):t.kind===`meadow`?rd(e,t):t.kind===`plaza`&&id(e,t)}function od(e,t){return e.kind===`olive`&&!!t&&(t.kind===`plaza`||t.kind===`town`)&&Zu(Math.round(e.x*4),Math.round(e.z*4),5151)<.8}function sd(e,t,n,r,i,a){let o=t+r*.06,s=t+r*3.1,c=i+3.75,l=i+2.95,u=.3,d=e.p(t+r*1.2,l,n);e.lampFor(e.px(d),l-.2,e.pz(d));for(let t=0;t<3;t++){let r=n-a+2*a*t/3,i=n-a+2*a*(t+1)/3;e.color(qu.awning).data(W.CLOTH,.31,0,0),e.quad(e.p(o,c,r),e.p(s,l,r),e.p(s,l,i),e.p(o,c,i),0,r,.3,i),e.color(qu.awningEdge).data(W.CLOTH,.47,0,0),e.quad(e.p(s,l-u,r),e.p(s,l-u,i),e.p(s,l,i),e.p(s,l,r),r*1.6,0,i*1.6,u)}e.color([.012,.014,.02]).data(W.PLAIN,.3,1,0);for(let t of[n-a+.05,n+a-.05])e.quad(e.p(o,c-1.1,t),e.p(s,l-.02,t),e.p(s,l+.04,t),e.p(o,c-1.04,t),0,0,3,.06)}var cd=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,ld=e=>[cd((e>>16&255)/255),cd((e>>8&255)/255),cd((e&255)/255)],ud=[4872824,6057871,3885670,7045013,5596538,8228515,4477806].map(ld),dd=[2832998,3821696,3625066,3097712,9060400,4876896,10115636].map(ld),fd=[14263361,15259040,13132860,13204074,8364154,4164748,7110616,9202880,11026476,14203e3,2903968,14725168,15321520,6000569].map(ld),pd=[3692720,5257376,12077088,2123896,9445424,2635912,3829413,12737066].map(ld),md=[14725168,13123628,3116906,3692720,14252586].map(ld),G={cobble:ld(8024208),dirt:ld(10254932),paving:ld(8682902),garden:ld(2771514),meadow:ld(3103300),groveFloor:ld(3363916),wheat:ld(12098106),knoll:ld(3824180),cypress:ld(1194534),olive:ld(4875384),trunk:ld(3811868),stone:ld(9413304),churchRoof:ld(3426684),spire:ld(2504286),chimney:ld(4866640),iron:ld(1316380),plinth:ld(3947080),lampGlass:[1,.74,.3],warm:[1,.62,.2],hay:ld(13214780),water:ld(2775706),cafeRed:ld(11874844),cafeDado:ld(3828282),cafeGreen:ld(5931072),cafeFloor:ld(13145658),cafeFacade:ld(15119928),galWall:ld(8005168),galDado:ld(3811874),galCeil:ld(14208432),galFloor:ld(10129286),galFacade:ld(12170148),gold:ld(13936698),wood:ld(6964260),baize:ld(3111498),ivory:ld(15262416),bottle:ld(2779706)},hd=[[1,.85,.5],[1,.6,.2],[1,.95,.8],[1,.4,.25],[.6,.85,1]],gd=(e,t)=>e[t%e.length];function _d(e,t,n,r){let i=[e,t],a=[0],o=Math.max(1,Math.ceil((n-t)/6.5));for(let e=1;e<=o;e++)i.push(t+(n-t)*e/o),a.push(1);return i.push(r),a.push(2),[i,a]}var vd={town:[W.GARDEN,G.garden],plaza:[W.PAVING,G.paving],grove:[W.GRASS,G.groveFloor],field:[W.WHEAT,G.wheat],meadow:[W.GRASS,G.meadow],knoll:[W.GRASS,G.knoll]};function yd(e,t,n){let r=cl(t),i=cl(t+1),a=ll(n),o=ll(n+1),[s,c]=_d(r,r+ul(t),i-ul(t+1),i),[l,u]=_d(a,a+dl(n),o-dl(n+1),o),d=Tu(t,n),f=wl(d.kind),[p,m]=vd[d.kind],h=Lu(`x`,t,n).paved,g=Lu(`x`,t+1,n).paved,_=Lu(`z`,t,n).paved,v=Lu(`z`,t,n+1).paved,y=(e,t)=>wl(Cl(e-1,t-1))||wl(Cl(e,t-1))||wl(Cl(e-1,t))||wl(Cl(e,t)),b=s.length-1,x=l.length-1,S=new Float64Array((b+1)*(x+1)),C=new Float32Array((b+1)*(x+1)),w=[];for(let e=t-1;e<=t+1;e++)for(let t=n-1;t<=n+1;t++)for(let n of Tu(e,t).houses){if(n.shed)continue;let e=n.church?1.4:n.shop?2:n.lit>.3?.55+n.lit:0;e>0&&n.x1>r-14&&n.x0<i+14&&n.z1>a-14&&n.z0<o+14&&w.push(n.x0,n.x1,n.z0,n.z1,e)}for(let e=0;e<=x;e++)for(let t=0;t<=b;t++){let n=s[t],r=l[e];S[e*(b+1)+t]=U(n,r);let i=0;for(let e=0;e<w.length;e+=5){let t=Math.max(w[e]-n,0,n-w[e+1]),a=Math.max(w[e+2]-r,0,r-w[e+3]),o=t*t+a*a;if(o<169){let t=Math.sqrt(o);i+=w[e+4]*Math.exp(-t*.36)*Math.min(1,(13-t)/4)}}C[e*(b+1)+t]=Math.min(i,1.6)*.5}for(let r=0;r<x;r++)for(let i=0;i<b;i++){let a=c[i],o=u[r],x=s[i],w=s[i+1],T=l[r],E=l[r+1],D=S[r*(b+1)+i],O=S[r*(b+1)+i+1],k=S[(r+1)*(b+1)+i],A=S[(r+1)*(b+1)+i+1],j=1,M=1,ee=1,N=1;if(a===1&&o===1)e.color(m).data(p,d.seed%97/97,0,0);else{let r,i=0;a!==1&&o===1?(r=a===0?h:g,i=1):a===1&&o!==1?(r=o===0?_:v,i=0):r=y(a===0?t:t+1,o===0?n:n+1),e.color(r?G.cobble:G.dirt).data(r?W.COBBLE:W.DIRT,.37,i,0),f&&o===1&&(a===0?M=ee=.72:a===2&&(j=N=.72)),f&&a===1&&(o===0?j=M=.72:o===2&&(N=ee=.72))}let te=e.p(x,k,E),P=e.p(w,A,E),F=e.p(w,O,T),ne=e.p(x,D,T);e.lampFor((e.px(te)+e.px(F))/2,(k+O)/2,(e.pz(te)+e.pz(F))/2);let re=e.gu(x),ie=e.gu(w),ae=e.gv(E),oe=e.gv(T),se=r*(b+1)+i,I=(r+1)*(b+1)+i;e.quadW(te,P,F,ne,re,ae,ie,oe,j,M,ee,N,C[I],C[I+1],C[se+1],C[se])}}function bd(e,t,n,r,i,a,o,s,c,l,u){let d=Math.hypot(r-t,i-n),f=Math.max(1,Math.round(d/2.7)),p=c.eave/c.stories,m=e.p(t,a,n),h=e.p(r,a,i),g=e.p(r,s,i),_=e.p(t,s,n);return e.lampFor((e.px(m)+e.px(h))/2,o+2.4,(e.pz(m)+e.pz(h))/2),e.data(W.WALL,c.seed,u?c.stories:0,l),e.quad(m,h,g,_,0,(a-o)/p,f,c.stories,.74,.74,1,1),f}function xd(e,t,n,r){let i=r.home,a=n.church?G.stone:gd(i?ud:fd,n.wall),o=n.church?G.churchRoof:gd(i?dd:pd,n.roof),{x0:s,x1:c,z0:l,z1:u}=n,d=n.baseY,f=d+n.eave,p=f+n.rise,m=Math.min(U(s,l),U(c,l),U(s,u),U(c,u),d)-.6,h=Math.min(n.lit,.97),g=n.church?2:0,_=g+h,v=(n.shop?1:g)+h;e.color(a),bd(e,s,u,c,u,m,d,f,n,n.face===`S`?v:_,!0),bd(e,c,u,c,l,m,d,f,n,n.face===`E`?v:_,!0),bd(e,c,l,s,l,m,d,f,n,n.face===`N`?v:_,!0),bd(e,s,l,s,u,m,d,f,n,n.face===`W`?v:_,!0);let y=n.shed?.2:.38,b=n.eave/n.stories;if(e.data(W.WALL,n.seed,0,0),n.roofType===`hip`)e.color(o),e.lampFor(e.px(e.p((s+c)/2,f,(l+u)/2)),f,e.pz(e.p((s+c)/2,f,(l+u)/2))),Sd(e,n,y);else if(n.ridge===`x`){let t=(l+u)/2,r=(u-l)/2,i=Math.hypot(r,n.rise),d=y*n.rise/r,m=Math.max(1,Math.round((u-l)/2.7));e.color(a),e.lampFor(e.px(e.p(c,f,t)),f,e.pz(e.p(c,f,t))),e.tri(e.p(c,f,u),e.p(c,f,l),e.p(c,p,t),0,n.stories,m,n.stories,m/2,n.stories+n.rise/b,1,1,1.1),e.tri(e.p(s,f,l),e.p(s,f,u),e.p(s,p,t),0,n.stories,m,n.stories,m/2,n.stories+n.rise/b,1,1,1.1),e.color(o).data(W.ROOF,n.seed,i,0);let h=c-s+2*y,g=i*(1+y/r);e.quad(e.p(s-y,f-d,u+y),e.p(c+y,f-d,u+y),e.p(c+y,p,t),e.p(s-y,p,t),0,g,h,0),e.quad(e.p(c+y,f-d,l-y),e.p(s-y,f-d,l-y),e.p(s-y,p,t),e.p(c+y,p,t),0,g,h,0)}else{let t=(s+c)/2,r=(c-s)/2,i=Math.hypot(r,n.rise),d=y*n.rise/r,m=Math.max(1,Math.round((c-s)/2.7));e.color(a),e.lampFor(e.px(e.p(t,f,u)),f,e.pz(e.p(t,f,u))),e.tri(e.p(s,f,u),e.p(c,f,u),e.p(t,p,u),0,n.stories,m,n.stories,m/2,n.stories+n.rise/b,1,1,1.1),e.tri(e.p(c,f,l),e.p(s,f,l),e.p(t,p,l),0,n.stories,m,n.stories,m/2,n.stories+n.rise/b,1,1,1.1),e.color(o).data(W.ROOF,n.seed,i,0);let h=u-l+2*y,g=i*(1+y/r);e.quad(e.p(c+y,f-d,u+y),e.p(c+y,f-d,l-y),e.p(t,p,l-y),e.p(t,p,u+y),0,g,h,0),e.quad(e.p(s-y,f-d,l-y),e.p(s-y,f-d,u+y),e.p(t,p,u+y),e.p(t,p,l-y),0,g,h,0)}if(n.chimney){let r=Vu(n),i=r.x,a=r.z,o=r.top;if(e.color(G.chimney).data(W.STONE,n.seed,0,0),e.box(i-.36,i+.36,a-.36,a+.36,r.base,o),h>.5&&(n.wall+n.roof)%3==0)for(let e=0;e<3;e++)t.add(i,o+.3,a,1.5,[.5,.62,.95],.32,6,(n.seed+e/3)%1)}if(n.shop){let t=gd(md,n.wall+n.roof),r=d+2.95,i=d+2.35,a=1.35;e.color(t).data(W.CLOTH,n.seed,0,0);let o,f,p,m;n.face===`S`?(o=e.p(s+.3,i,u+a),f=e.p(c-.3,i,u+a),p=e.p(c-.3,r,u),m=e.p(s+.3,r,u)):n.face===`N`?(o=e.p(c-.3,i,l-a),f=e.p(s+.3,i,l-a),p=e.p(s+.3,r,l),m=e.p(c-.3,r,l)):n.face===`E`?(o=e.p(c+a,i,u-.3),f=e.p(c+a,i,l+.3),p=e.p(c,r,l+.3),m=e.p(c,r,u-.3)):(o=e.p(s-a,i,l+.3),f=e.p(s-a,i,u-.3),p=e.p(s,r,u-.3),m=e.p(s,r,l+.3)),e.lampFor(e.px(o),i,e.pz(o)),e.quad(o,f,p,m,0,0,n.face===`S`||n.face===`N`?c-s:u-l,1.5)}let x=n.face===`W`?s-.2:n.face===`E`?c+.2:(s+c)/2,S=n.face===`N`?l-.2:n.face===`S`?u+.2:(l+u)/2;h>.3&&t.add(x,d+n.eave*.55,S,1,G.warm,.9+h,1,n.seed)}function Sd(e,t,n){let r=(t.ridge===`x`?t.z1-t.z0:t.x1-t.x0)/2,i=t.rise/r,a=t.baseY+t.eave,o=t.x0-n,s=t.x1+n,c=t.z0-n,l=t.z1+n,u=a-n*i,d=s-o,f=l-c,p=Math.min(d,f)/2,m=Math.min(a+t.rise,u+i*p),h=(m-u)/i,g=Math.hypot(h,m-u);e.data(W.ROOF,t.seed,g,0);let _=e.p(o,u,l),v=e.p(s,u,l),y=e.p(s,u,c),b=e.p(o,u,c),x=e.p(o+h,m,l-h),S=e.p(s-h,m,l-h),C=e.p(s-h,m,c+h),w=e.p(o+h,m,c+h);e.quad(_,v,S,x,0,g,d,0),e.quad(v,y,C,S,0,g,f,0),e.quad(y,b,w,C,0,g,d,0),e.quad(b,_,x,w,0,g,f,0),d-2*h>.05&&f-2*h>.05&&e.quad(x,S,C,w,0,0,d-2*h,f-2*h)}function Cd(e,t,n){let r=n.church;if(!r)return;let i=r.tower,a=r.baseY-.8,o=r.baseY+r.towerH,s=o+r.spireH,c={eave:r.towerH,stories:3,seed:.613,wall:0};e.color(G.stone),bd(e,i.x0,i.z1,i.x1,i.z1,a,r.baseY,o,c,2.9,!0),bd(e,i.x1,i.z1,i.x1,i.z0,a,r.baseY,o,c,2.9,!0),bd(e,i.x1,i.z0,i.x0,i.z0,a,r.baseY,o,c,2.9,!0),bd(e,i.x0,i.z0,i.x0,i.z1,a,r.baseY,o,c,2.9,!0);let l=.3,u=(i.x0+i.x1)/2,d=(i.z0+i.z1)/2,f=Math.hypot(r.spireH,2.4);e.color(G.spire).data(W.ROOF,.2,f,0).noLamp();let p=e.p(i.x0-l,o,i.z1+l),m=e.p(i.x1+l,o,i.z1+l),h=e.p(i.x1+l,o,i.z0-l),g=e.p(i.x0-l,o,i.z0-l),_=e.p(u,s,d);e.tri(p,m,_,0,f,4.8,f,2.4,0),e.tri(m,h,_,0,f,4.8,f,2.4,0),e.tri(h,g,_,0,f,4.8,f,2.4,0),e.tri(g,p,_,0,f,4.8,f,2.4,0),t.add(u,o-2,i.z1+.4,1.3,G.warm,2,1,.5)}function wd(e,t,n,r,i,a,o=10){let s=[],c=[];for(let l=0;l<o;l++){let u=l/o*Math.PI*2,d=t+Math.cos(u)*a,f=n+Math.sin(u)*a;s.push(e.p(d,i,f)),c.push(e.p(d,r,f))}let l=e.p(t,i,n);for(let t=0;t<o;t++){let n=(t+1)%o;e.tri(l,s[n],s[t],.5,.5,1,.4,1,.6),e.quad(c[t],c[n],s[n],s[t],t*.3,0,t*.3+.3,.2)}}function Td(e,t,n,r,i){e.color(G.iron).data(W.PLAIN,.3+i,1,0),wd(e,t,n,r,r+.035,.24,8),e.box(t-.035,t+.035,n-.035,n+.035,r+.03,r+.69,!1),wd(e,t,n,r+.66,r+.7,.11,8),e.color(G.ivory).data(W.STONE,.3+i,0,0),wd(e,t,n,r+.7,r+.745,.43,12),e.color(G.bottle).data(W.PLAIN,.6+i,.6,0),e.box(t-.14,t-.07,n-.06,n+.01,r+.745,r+.97),e.box(t-.12,t-.09,n-.04,n-.01,r+.97,r+1.05,!1),e.color(G.ivory,1.1).data(W.PLAIN,.2+i,.4,0),e.box(t+.1,t+.16,n+.04,n+.1,r+.745,r+.86)}function Ed(e,t,n,r,i,a,o){let s=.2,c=r+.46,l=.022;e.color(G.wood).data(W.PLAIN,.5+o,1.2,0),e.box(t-s,t+s,n-s,n+s,c-.035,c);for(let[o,s]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let u=t+o*.17,d=n+s*.17,f=i&&o===i||a&&s===a;e.box(u-l,u+l,d-l,d+l,r,f?c+.48:c-.03,f)}let u=i?t+i*.17-l:t-s+.03,d=i?t+i*.17+l:t+s-.03,f=a?n+a*.17-l:n-s+.03,p=a?n+a*.17+l:n+s-.03;e.box(u,d,f,p,c+.4,c+.48),e.box(u,d,f,p,c+.2,c+.25)}function Dd(e,t,n){let r=n.arch;if(!r)return;let{c:i,hw:a}=n,o=n.axis===`x`,s=(t,n,r)=>o?e.p(i+t,n,r):e.p(r,n,i+t),c=r.base+2.9,l=r.under+.9,u=gd(fd,Math.floor(r.seed*1e3)),d=e=>(e-(r.top-3))/3,f=e=>c+(l-c)*Math.sqrt(Math.max(0,1-e/a*(e/a))),p=s(0,r.under,(r.a0+r.a1)/2);e.lampFor(e.px(p),r.under-.5,e.pz(p));for(let t=0;t<10;t++){let n=-a+2*a*t/10,i=-a+2*a*(t+1)/10,o=f(n),c=f(i),l=(n+a)/2.7,p=(i+a)/2.7;e.color(u).data(W.WALL,r.seed,1,.8);for(let t of[r.a1,r.a0]){let a=s(n,o,t),u=s(i,c,t),f=s(i,r.top,t),m=s(n,r.top,t);e.tri(a,u,f,l,d(o),p,d(c),p,1),e.tri(a,f,m,l,d(o),p,1,l,1)}e.color(G.stone,.8).data(W.STONE,r.seed,0,0);let m=s(n,o,r.a0),h=s(i,c,r.a0),g=s(i,c,r.a1),_=s(n,o,r.a1);e.quad(m,h,g,_,0,n,r.a1-r.a0,i)}let m=a+.6;e.color(u).data(W.WALL,r.seed,1,.8);for(let t of[-1,1]){let n=t*a,i=t*m,o=(n+a)/2.7,l=(i+a)/2.7;for(let t of[r.a1,r.a0])e.quad(s(n,c,t),s(i,c,t),s(i,r.top,t),s(n,r.top,t),o,d(c),l,1);e.quad(s(i,c-.6,r.a0),s(i,c-.6,r.a1),s(i,r.top,r.a1),s(i,r.top,r.a0),0,d(c-.6),(r.a1-r.a0)/2.7,1)}e.color(gd(pd,Math.floor(r.seed*777))).data(W.ROOF,r.seed,6,0);let h=s(-m,r.top,r.a1),g=s(m,r.top,r.a1),_=s(m,r.top,r.a0),v=s(-m,r.top,r.a0);e.quad(h,g,_,v,0,0,2*m,r.a1-r.a0);let y=(r.a0+r.a1)/2,[b,x]=o?[i,y]:[y,i];kd(e,t,b,r.under+.35,x,.9)}function Od(e,t,n){let r=U(t.x,t.z)-.3,i=ml(t.x,t.z)-e.ox,a=hl(t.x,t.z)-e.oz;if(e.lampFor(i,r+2,a),t.kind===`cypress`){e.color(G.cypress).data(W.CYPRESS,t.seed,0,0);let n=[];for(let o=0;o<=8;o++){let s=o/8,c=r+t.h*s**.92,l=Math.sin(Math.PI*(.1+.9*s))**.8*(1-.22*s),u=[];for(let n=0;n<=7;n++){let d=n/7*Math.PI*2,f=1+.2*Math.sin(3*d+s*7+t.seed*10)+.1*Math.sin(5*d-s*11+t.seed*3),p=o===8?.02:t.r*l*f,m=.25*Math.sin(s*2.6+t.seed*9)*s,h=Math.cos(d),g=Math.sin(d),_=.55+.45*s;u.push(e.vert(i+h*p+m,c,a+g*p,h*.92,.38,g*.92,d*t.r,c-r,_))}n.push(u)}for(let t=0;t<8;t++)for(let r=0;r<7;r++){let i=n[t][r],a=n[t][r+1],o=n[t+1][r+1],s=n[t+1][r];e.tri3(i,o,a),e.tri3(i,s,o)}}else{let o=od(t,n);e.color(o?Yu:G.trunk).data(W.PLAIN,t.seed,1.5,0);let s=.22,c=e.pl(i-s,r,a+s),l=e.pl(i+s,r,a+s),u=e.pl(i+s,r,a-s),d=e.pl(i-s,r,a-s),f=t.h*.42,p=e.pl(i-s,r+f,a+s),m=e.pl(i+s,r+f,a+s),h=e.pl(i+s,r+f,a-s),g=e.pl(i-s,r+f,a-s);e.quad(c,l,m,p,0,0,.4,f),e.quad(l,u,h,m,0,0,.4,f),e.quad(u,d,g,h,0,0,.4,f),e.quad(d,c,p,g,0,0,.4,f),e.color(o?Ju:G.olive).data(W.LEAF,t.seed,0,0);let _=r+t.h*.66,v=t.h*.42,y=[];for(let n=0;n<=5;n++){let r=n/5,o=r*Math.PI,s=[];for(let n=0;n<=7;n++){let c=n/7*Math.PI*2,l=1+.22*Math.sin(3*c+t.seed*12+o*2)+.14*Math.sin(5*c+o*3+t.seed*5),u=t.r*Math.sin(o)*l,d=Math.cos(c)*Math.sin(o),f=-Math.cos(o),p=Math.sin(c)*Math.sin(o);s.push(e.vert(i+Math.cos(c)*u,_-Math.cos(o)*v*(.85+.15*l),a+Math.sin(c)*u,d,f,p,c*t.r,r*v*2.4,.5+.5*r))}y.push(s)}for(let t=0;t<5;t++)for(let n=0;n<7;n++){let r=y[t][n],i=y[t][n+1],a=y[t+1][n+1],o=y[t+1][n];e.tri3(r,a,i),e.tri3(r,o,a)}}}function kd(e,t,n,r,i,a=1,o=1.55){e.rgb(...G.lampGlass).data(W.GLOW,0,5.5,0).noLamp(),e.box(n-.16,n+.16,i-.16,i+.16,r-.24,r+.2),t.add(n,r,i,o,G.lampGlass,1.25*a,0,Pc(Math.round(n*7),Math.round(i*7),5))}function Ad(e,t,n,r){if(n.hang)e.color(G.iron).data(W.PLAIN,.3,1,0).noLamp(),e.box(n.x-.025,n.x+.025,n.z-.025,n.z+.025,n.y+.2,n.y+.75,!1),kd(e,t,n.x,n.y,n.z,n.power??1,n.halo??1.55);else{if(n.post){let t=U(n.x,n.z);e.color(G.iron).data(W.PLAIN,.3,1,0).noLamp(),e.box(n.x-.07,n.x+.07,n.z-.07,n.z+.07,t-.3,n.y-.2,!1)}else if(r){let t=.55;e.color(G.iron).data(W.PLAIN,.3,1,0).noLamp(),r.axis===`x`?e.box(Math.min(n.x,n.x+n.side*t),Math.max(n.x,n.x+n.side*t),n.z-.04,n.z+.04,n.y+.22,n.y+.3):e.box(n.x-.04,n.x+.04,Math.min(n.z,n.z+n.side*t),Math.max(n.z,n.z+n.side*t),n.y+.22,n.y+.3)}kd(e,t,n.x,n.y,n.z)}}function jd(e,t){if(!t.strings.length)return;let n=t.axis===`x`;t.strings.forEach((r,i)=>{let a=U(...n?[t.c,r]:[r,t.c]);for(let o=0;o<=8;o++){let s=o/8,c=(s*2-1)*(t.hw-.2),l=a+5.6-1*(1-(2*s-1)*(2*s-1)),[u,d]=n?[t.c+c,r]:[r,t.c+c];e.add(u,l,d,.34,hd[(o+i)%hd.length],1.5,3,o*.13)}})}function Md(e,t,n){for(let t of n.solids){if(!t.fountain)continue;let n=t.top-.9;e.color(G.stone).data(W.STONE,.4,0,0);let r=(t.x0+t.x1)/2,i=(t.z0+t.z1)/2,a=e.p(r,n,i);e.lampFor(e.px(a),n+1,e.pz(a)),e.box(t.x0,t.x1,t.z0,t.z1,n-.4,t.top),e.box(r-.3,r+.3,i-.3,i+.3,t.top,t.top+1.3),e.color(G.water).data(W.PLAIN,.7,2,0);let o=e.p(t.x0+.3,t.top+.02,t.z1-.3),s=e.p(t.x1-.3,t.top+.02,t.z1-.3),c=e.p(t.x1-.3,t.top+.02,t.z0+.3),l=e.p(t.x0+.3,t.top+.02,t.z0+.3);e.quad(o,s,c,l,0,0,2.6,2.6)}for(let t of n.props){if(t.type===`stall`){let n=U(t.x,t.z),r=e.p(t.x,n+1,t.z);e.lampFor(e.px(r),n+1.2,e.pz(r)),e.color(G.wood).data(W.PLAIN,.4,1.6,0),e.box(t.x-1.5,t.x+1.5,t.z-.6,t.z+.6,n+.75,n+.85);for(let[r,i]of[[-1.4,-.5],[1.4,-.5],[-1.4,.5],[1.4,.5]])e.box(t.x+r-.05,t.x+r+.05,t.z+i-.05,t.z+i+.05,n,n+2.25,!1);let i=[[.95,.45,.08],[.85,.12,.08],[.95,.8,.15],[.35,.6,.15],[.55,.15,.45]];for(let r=0;r<5;r++){e.color(i[(r+Math.floor(t.seed*5))%5]).data(W.LEAF,t.seed+r*.1,0,0);let a=t.x-1.2+r*.6;e.box(a-.24,a+.24,t.z-.4,t.z+.4,n+.85,n+1.05+r%2*.06)}e.color(gd(md,Math.floor(t.seed*97))).data(W.CLOTH,t.seed,0,0),e.quad(e.p(t.x-1.7,n+2.05,t.z+1),e.p(t.x+1.7,n+2.05,t.z+1),e.p(t.x+1.7,n+2.55,t.z-.8),e.p(t.x-1.7,n+2.55,t.z-.8),0,0,3.4,1.9);continue}if(t.type!==`stack`)continue;let n=U(t.x,t.z)-.2,r=t.r*1.7,i=ml(t.x,t.z)-e.ox,a=hl(t.x,t.z)-e.oz;e.color(G.hay).data(W.WHEAT,t.seed,0,0),e.lampFor(i,n+1,a);let o=[],s=[];for(let c=0;c<=8;c++){let l=c/8*Math.PI*2,u=Math.cos(l),d=Math.sin(l);o.push(e.vert(i+u*t.r,n,a+d*t.r,u,.3,d,l*t.r,0,.7)),s.push(e.vert(i+u*t.r*.85,n+r*.5,a+d*t.r*.85,u,.5,d,l*t.r,r*.5,.9))}let c=e.vert(i,n+r,a,0,1,0,0,r,1);for(let t=0;t<8;t++)e.tri3(o[t],s[t+1],o[t+1]),e.tri3(o[t],s[t],s[t+1]),e.tri3(s[t],c,s[t+1])}}var Nd=2,Pd=[[0,0,1,1],[.33,.42,.8,.82],[.78,.64,1,.98],[.45,.02,.92,.42],[.1,.05,.45,.98],[0,.42,.34,.99]];function Fd(e,t,n){let r=n.hall;if(!r)return;let i=r.theme===`cafe`,a=r.z0+r.wall,o=r.z1-r.wall,s=r.zc,c=Math.max(2,Math.round((r.x1-r.x0)/6)),l=[];for(let e=0;e<=c;e++)l.push(r.x0+(r.x1-r.x0)*e/c);let u=Math.min(U(r.x0,s),U(r.x1,s),r.baseY)-.7,d=r.baseY+1.15,f=(t,n,r)=>{let i=e.p(t,n,r);e.lampFor(e.px(i),n,e.pz(i))};for(let t=0;t<c;t++){let n=l[t],c=l[t+1],p=(n+c)/2;for(let[t,l]of[[a,s],[s,o]]){f(p,r.baseY,(t+l)/2),e.color(i?G.cafeFloor:G.galFloor).data(i?W.DIRT:W.PAVING,2.4,0,0);let a=.05,o=e.p(n,U(n,l)+a,l),s=e.p(c,U(c,l)+a,l),u=e.p(c,U(c,t)+a,t),d=e.p(n,U(n,t)+a,t);e.quadW(o,s,u,d,e.gu(n),e.gv(l),e.gu(c),e.gv(t),1,1,1,1,.22,.22,.22,.22)}for(let[t,s]of[[a,!1],[o,!0]]){let a=s?c:n,o=s?n:c;f(p,r.baseY+2.2,t),e.color(i?G.cafeDado:G.galDado).data(W.WALL,2.31,0,0),e.quad(e.p(a,u,t),e.p(o,u,t),e.p(o,d,t),e.p(a,d,t),a/2.7,0,o/2.7,.4,.8,.8,1,1),e.color(i?G.cafeRed:G.galWall).data(W.WALL,2.67,0,0),e.quad(e.p(a,d,t),e.p(o,d,t),e.p(o,r.under,t),e.p(a,r.under,t),a/2.7,.4,o/2.7,1.5,1,1,.9,.9)}f(p,r.under,s),e.color(i?G.cafeGreen:G.galCeil).data(W.STONE,2.5,0,0),e.quad(e.p(n,r.under,a),e.p(c,r.under,a),e.p(c,r.under,o),e.p(n,r.under,o),n,a,c,o),e.color(G.wood).data(W.PLAIN,2.2,1.4,0),e.box(n-.12,n+.12,a,o,r.under-.22,r.under+.02,!1),f(p,r.top,s),e.color(gd(pd,Math.floor(r.seed*997))).data(W.ROOF,r.seed,8,0),e.quad(e.p(n,r.top,r.z1),e.p(c,r.top,r.z1),e.p(c,r.top,r.z0),e.p(n,r.top,r.z0),n,0,c,r.z1-r.z0)}let p={eave:r.top-r.baseY,stories:1,seed:r.seed};e.color(gd(fd,Math.floor(r.seed*613)));for(let t=0;t<c;t++)bd(e,l[t],r.z1,l[t+1],r.z1,u,r.baseY,r.top,p,.85,!0),bd(e,l[t+1],r.z0,l[t],r.z0,u,r.baseY,r.top,p,.85,!0);let m=2.3,h=3.75,g=i?G.cafeFacade:G.galFacade;for(let[n,a]of[[r.x0,-1],[r.x1,1]]){let o=U(n,s),c=e=>{let t=Math.abs(e-s);return t<r.door?o+m+1.4500000000000002*Math.sqrt(Math.max(0,1-t/r.door*(t/r.door))):u},l=e=>r.top+Math.max(0,1.5-Math.abs(e-s)*.42);f(n+a*.5,o+2.5,s);for(let t=0;t<16;t++){let u=r.z0+(r.z1-r.z0)*t/16,d=r.z0+(r.z1-r.z0)*(t+1)/16;for(let t of[n,n-a*r.wall]){e.color(t===n?g:i?G.cafeRed:G.galWall).data(W.WALL,.5+(t===n?0:Nd),0,0);let r=e.p(t,c(u),u),a=e.p(t,c(d),d),s=e.p(t,l(d),d),f=e.p(t,l(u),u),p=e=>(e-o)/3;e.tri(r,a,s,u/2.7,p(c(u)),d/2.7,p(c(d)),d/2.7,p(l(d))),e.tri(r,s,f,u/2.7,p(c(u)),d/2.7,p(l(d)),u/2.7,p(l(u)))}Math.abs((u+d)/2-s)<r.door&&(e.color(G.stone,.9).data(W.STONE,.4,0,0),e.quad(e.p(n,c(u),u),e.p(n-a*r.wall,c(u),u),e.p(n-a*r.wall,c(d),d),e.p(n,c(d),d),0,u,r.wall,d))}for(let t of[-r.door,r.door])e.color(G.stone,.9).data(W.STONE,.4,0,0),e.quad(e.p(n,u,s+t),e.p(n-a*r.wall,u,s+t),e.p(n-a*r.wall,o+m,s+t),e.p(n,o+m,s+t),0,0,r.wall,m);for(let t of[-3.6,3.6]){let o=Math.sign(t),c=n+a*1.5,l=s+t,u=l-o*.8;Td(e,c,u,U(c,u),0),Ed(e,c,l,U(c,l),0,o,0),Ed(e,c,u-o*.8,U(c,u-o*.8),0,-o,0),i&&td(e,c+.12,u-o*.1,U(c,u)+.745,0,(r.seed*13+t+a)%1)}i&&sd(e,n,s,a,o,(r.z1-r.z0)/2-.15),e.rgb(1,i?.72:.84,i?.22:.52).data(W.GLOW,0,2.6,0).noLamp();let d=n+a*.04,p=n+a*.14;e.box(Math.min(d,p),Math.max(d,p),s-1.9,s+1.9,o+h+.35,o+h+1),t.add(n+a*.6,o+h+.7,s,3.4,i?[1,.7,.25]:[1,.88,.6],.9,3,r.seed)}if(i){let t=r.obstacles[0],n=t.top-.86;f((t.x0+t.x1)/2,t.top,s),e.color(G.wood).data(W.PLAIN,2.4,1.6,0),e.box(t.x0,t.x1,t.z0,t.z1,n,t.top-.02,!1),e.color(G.baize).data(W.PLAIN,2.7,1.2,0),e.quad(e.p(t.x0+.1,t.top,t.z1-.1),e.p(t.x1-.1,t.top,t.z1-.1),e.p(t.x1-.1,t.top,t.z0+.1),e.p(t.x0+.1,t.top,t.z0+.1),0,0,2.6,1.3),e.color(G.wood,1.3);for(let[n,r,i,a]of[[t.x0,t.x1,t.z0,t.z0+.1],[t.x0,t.x1,t.z1-.1,t.z1],[t.x0,t.x0+.1,t.z0,t.z1],[t.x1-.1,t.x1,t.z0,t.z1]])e.box(n,r,i,a,t.top-.02,t.top+.05);let i=(t.x0+t.x1)/2;for(let[n,r,a]of[[i-.5,s+.2,G.ivory],[i+.3,s-.25,[.6,.05,.04]],[i+.6,s+.1,G.gold]]){e.color(a).data(W.FIGURE,2.5,.5,0);let i=e.p(n,t.top+.04,r),o=e.px(i),s=e.pz(i),c=t.top+.045;for(let t=0;t<6;t++){let n=t/6*Math.PI*2,r=(t+1)/6*Math.PI*2;e.tri(e.pl(o,c+.045,s),e.pl(o+Math.cos(n)*.045,c,s+Math.sin(n)*.045),e.pl(o+Math.cos(r)*.045,c,s+Math.sin(r)*.045),0,0,.05,0,.05,.05)}}for(let t=r.x0+6;t<r.x1-5;t+=6.5)for(let n of[-1,1]){let i=n<0?a+.95:o-.95,s=U(t,i)+.05;f(t,s+.8,i),Td(e,t,i,s,Nd),(Math.round(t)+ +(n>0))%2==0&&td(e,t+.1,i+n*.12,s+.745,Nd,(r.seed*7+t*.13)%1);for(let n of[-.75,.75])Ed(e,t+n,i,s,Math.sign(n),0,Nd)}}else{for(let t of r.obstacles)f((t.x0+t.x1)/2,t.top,s),e.color(G.wood).data(W.PLAIN,2.4,1.6,0),e.box(t.x0,t.x1,t.z0,t.z1,t.top-.5,t.top);let n=Math.floor(r.seed*6);for(let i=r.x0+5.5;i<r.x1-4.5;i+=7.2)for(let s of[-1,1]){let[c,l,u,d]=Pd[n++%Pd.length],p=(u-c)*1500/((d-l)*1188),m=p<1?2.5:1.9,h=m*p,g=s<0?a+.06:o-.06,_=g-s*.07,v=r.baseY+2.35;f(i,v,_),e.color(G.gold).data(W.PLAIN,2.8,.7,0);let y=Math.min(g,_),b=Math.max(g,_);e.box(i-h/2-.13,i+h/2+.13,y,b,v-m/2-.13,v+m/2+.13),e.rgb(1,1,1).data(15,2.5,0,0);let x=_-s*.012,S=s<0?i-h/2:i+h/2,C=s<0?i+h/2:i-h/2;e.quad(e.p(S,v-m/2,x),e.p(C,v-m/2,x),e.p(C,v+m/2,x),e.p(S,v+m/2,x),c,l,u,d),t.add(i,v+m/2+.35,_-s*.25,.8,[1,.9,.7],.8,3,i*.1)}}}function Id(e,t,n,r,i,a,o,s,c=0){let l=i-t,u=a-n,d=o-r,f=Math.hypot(l,u,d)||1e-6,p=-u,m=l,h=0,g=Math.hypot(p,m,h);g<1e-5&&(p=1,m=0,h=0,g=1),p/=g,m/=g,h/=g;let _=(u*h-d*m)/f,v=(d*p-l*h)/f,y=(l*m-u*p)/f,b=s/2,x=(t,n,r,i,a)=>e.pl(r+(p*t+_*n)*b,i+(m*t+v*n)*b,a+(h*t+y*n)*b),S=x(-1,-1,t,n,r),C=x(1,-1,t,n,r),w=x(1,1,t,n,r),T=x(-1,1,t,n,r),E=x(-1,-1,i,a,o),D=x(1,-1,i,a,o),O=x(1,1,i,a,o),k=x(-1,1,i,a,o);e.quad(S,C,D,E,c,0,c+s,f),e.quad(C,w,O,D,c,0,c+s,f),e.quad(w,T,k,O,c,0,c+s,f),e.quad(T,S,E,k,c,0,c+s,f),e.quad(T,w,C,S,0,0,s,s),e.quad(E,D,O,k,0,0,s,s)}function Ld(e,t,n,r,i,a,o){let s=t-i/2,c=t+i/2,l=n-a/2,u=n+a/2,d=r-o/2,f=r+o/2,p=e.pl(s,l,f),m=e.pl(c,l,f),h=e.pl(c,l,d),g=e.pl(s,l,d),_=e.pl(s,u,f),v=e.pl(c,u,f),y=e.pl(c,u,d),b=e.pl(s,u,d);e.quad(p,m,v,_,0,0,i,a),e.quad(m,h,y,v,0,0,o,a),e.quad(h,g,b,y,0,0,i,a),e.quad(g,p,_,b,0,0,o,a),e.quad(_,v,y,b,0,0,i,o),e.quad(g,h,m,p,0,0,i,o)}function Rd(e,t,n=12,r=!1,i=!1,a=null){let o=[],s=0;for(let r=0;r<t.length;r++){let i=t[r];r>0&&(s+=Math.hypot(i.c[0]-t[r-1].c[0],i.c[1]-t[r-1].c[1],i.c[2]-t[r-1].c[2]));let c=Math.PI*(Math.hypot(...i.u)+Math.hypot(...i.v)),l=1/(i.sq||1),u=i.back??1,d=[];for(let t=0;t<=n;t++){let o=t/n*Math.PI*2,f=Math.cos(o),p=Math.sin(o);f=Math.sign(f)*Math.abs(f)**+l,p=Math.sign(p)*Math.abs(p)**+l;let m=p<0?p*u:p,h=i.u[0]*f+i.v[0]*m,g=i.u[1]*f+i.v[1]*m,_=i.u[2]*f+i.v[2]*m,v=Math.hypot(h,g,_)||1;d.push(e.vert(i.c[0]+h,i.c[1]+g,i.c[2]+_,h/v,g/v,_/v,t/n*c,s,a?a(r,t/n):1))}o.push(d)}let c=!1;if(e.orient){let t=e.pos,r=e.nrm,i=0;for(let e=0;e<o.length-1;e++)for(let a=0;a<n;a++){let n=o[e][a]*3,s=o[e][a+1]*3,c=o[e+1][a+1]*3,l=t[s]-t[n],u=t[s+1]-t[n+1],d=t[s+2]-t[n+2],f=t[c]-t[n],p=t[c+1]-t[n+1],m=t[c+2]-t[n+2];i+=(u*m-d*p)*r[n]+(d*f-l*m)*r[n+1]+(l*p-u*f)*r[n+2]}c=i<0}for(let t=0;t<o.length-1;t++)for(let r=0;r<n;r++){let n=o[t][r],i=o[t][r+1],a=o[t+1][r+1],s=o[t+1][r];c?(e.tri3(n,a,i),e.tri3(n,s,a)):(e.tri3(n,i,a),e.tri3(n,a,s))}let l=(t,r,i,a)=>{let o=r.u[1]*r.v[2]-r.u[2]*r.v[1],s=r.u[2]*r.v[0]-r.u[0]*r.v[2],c=r.u[0]*r.v[1]-r.u[1]*r.v[0],l=(Math.hypot(o,s,c)||1)*i,u=!1;if(e.orient){let n=r.c[0]-a.c[0],i=r.c[1]-a.c[1],d=r.c[2]-a.c[2];(o*n+s*i+c*d)/l<0&&(l=-l);let f=e.pos,p=t[0]*3,m=t[1]*3,h=f[p]-r.c[0],g=f[p+1]-r.c[1],_=f[p+2]-r.c[2],v=f[m]-r.c[0],y=f[m+1]-r.c[1],b=f[m+2]-r.c[2];u=((g*b-_*y)*o+(_*v-h*b)*s+(h*y-g*v)*c)/l<0}let d=e.vert(r.c[0],r.c[1],r.c[2],o/l,s/l,c/l,0,0,1);for(let r=0;r<n;r++)u?e.tri3(d,t[r+1],t[r]):e.tri3(d,t[r],t[r+1])};r&&l(o[0],t[0],-1,t[1]),i&&l(o[o.length-1],t[t.length-1],1,t[t.length-2])}function zd(e,t){let n=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=Math.hypot(...n)||1e-6;n[0]/=r,n[1]/=r,n[2]/=r;let i=Math.abs(n[1])<.9?[0,1,0]:[1,0,0],a=[n[1]*i[2]-n[2]*i[1],n[2]*i[0]-n[0]*i[2],n[0]*i[1]-n[1]*i[0]],o=Math.hypot(...a);return a[0]/=o,a[1]/=o,a[2]/=o,i=[a[1]*n[2]-a[2]*n[1],a[2]*n[0]-a[0]*n[2],a[0]*n[1]-a[1]*n[0]],{d:n,p:i,q:a,len:r}}function Bd(e,t,n,r,i=10){let{d:a,p:o,q:s,len:c}=zd(t,n),l=(e,n)=>({c:[t[0]+a[0]*e,t[1]+a[1]*e,t[2]+a[2]*e],u:[o[0]*n,o[1]*n,o[2]*n],v:[s[0]*n,s[1]*n,s[2]*n]}),u=r[0][1],d=r[r.length-1][1],f=[l(-u*.8,u*.42),l(-u*.45,u*.82)];for(let[e,t]of r)f.push(l(c*e,t));f.push(l(c+d*.45,d*.82),l(c+d*.8,d*.42)),Rd(e,f,i,!0,!0)}function K(e,t,n,r,i,a,o,s=10,c=7){let l=[];for(let u=0;u<=c;u++){let d=u/c*Math.PI,f=[];for(let c=0;c<=s;c++){let l=c/s*Math.PI*2,u=Math.cos(l)*Math.sin(d),p=Math.cos(d),m=Math.sin(l)*Math.sin(d);f.push(e.vert(t+u*i,n+p*a,r+m*o,u,p,m,l*i,d*a,1))}l.push(f)}for(let t=0;t<c;t++)for(let n=0;n<s;n++){let r=l[t][n],i=l[t][n+1],a=l[t+1][n+1],o=l[t+1][n];e.tri3(r,i,a),e.tri3(r,a,o)}}function Vd(e,t,n,r,i=16,a=0,o=0,s=1){let c=[],l=[];for(let u=0;u<=i;u++){let d=u/i*Math.PI*2,f=Math.cos(d),p=Math.sin(d);c.push(e.vert(t[0]+f*n,t[1]-f*n*o,t[2]+p*n,0,1,0,d*r,0,s)),l.push(e.vert(t[0]+f*r,t[1]-a-f*r*o,t[2]+p*r,f*.3,.95,p*.3,d*r,r-n,s*.86))}for(let t=0;t<i;t++)e.tri3(c[t],c[t+1],l[t+1]),e.tri3(c[t],l[t+1],l[t])}var Hd=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,q=e=>[Hd((e>>16&255)/255),Hd((e>>8&255)/255),Hd((e&255)/255)],Ud=[2504030,4861732,3099194,3816018,2310218,5255264,1842214,5917236].map(q),Wd=[3104680,3828408,5534618,6979418,9071164,8030880].map(q),Gd=[9055290,3103370,12092972,4160090,6965898,12081722,2779768,11051152,8007760].map(q),Kd=[14207136,13160672,14725280,11585704,9055290].map(q),qd=[14262394,13604464,12879458,14725258,11564114,10118212].map(q),Jd=[2763318,4864554,3489610,5917236,3815994].map(q),Yd=[2759700,5913116,9067050,1842204,10132120,11817770].map(q),Xd=[9071172,3811872,14208180,5917242,11565628].map(q),Zd=q(14728276),Qd=q(14999504),$d=q(1381660),ef=q(1840144),tf=q(6964260),nf=e=>{let t=.3*e[0]+.55*e[1]+.15*e[2];return[(e[0]*.72+t*.28)*.86,(e[1]*.72+t*.28)*.86,(e[2]*.72+t*.28)*.86]},rf=(e,t)=>e[Math.floor(t*e.length)%e.length],af=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],of={BODY:0,THIGH_L:1,THIGH_R:2,SHIN_L:3,SHIN_R:4,UARM_L:5,UARM_R:6,FARM_L:7,FARM_R:8,HEAD:9,SKIRT:10,HELD:10},sf=class extends bu{constructor(e=8192){super(e),this.wa=[0,0,0,0],this.wb=[0,0,1,0],this.ac=[0,0,0,0],this.pt=[.5,0,0,0],this.fs=1,this.orient=!0}alloc(){super.alloc(),this.walkA=new Float32Array(this.vcap*4),this.walkB=new Float32Array(this.vcap*4),this.act=new Float32Array(this.vcap*4),this.part=new Float32Array(this.vcap*4)}growV(){super.growV();let e=e=>{let t=new Float32Array(this.vcap*4);return t.set(e),t};this.walkA=e(this.walkA),this.walkB=e(this.walkB),this.act=e(this.act),this.part=e(this.part)}figure(e,t,n){this.wa=e,this.wb=t,this.ac=n}bone(e,t=0,n=0,r=0){this.pt=[e+Math.min(.495,Math.max(.05,this.fs/2)),t,n,r]}vert(...e){let t=super.vert(...e);return this.walkA.set(this.wa,t*4),this.walkB.set(this.wb,t*4),this.act.set(this.ac,t*4),this.part.set(this.pt,t*4),t}build(){let e=super.build(),t=this.nv;return e.setAttribute(`aWalkA`,new nr(this.walkA.slice(0,t*4),4)),e.setAttribute(`aWalkB`,new nr(this.walkB.slice(0,t*4),4)),e.setAttribute(`aAct`,new nr(this.act.slice(0,t*4),4)),e.setAttribute(`aPart`,new nr(this.part.slice(0,t*4),4)),e}},J=(e,t,n,r=1)=>e.color(t).data(W.FIGURE,n,r,0),cf=[`worker`,`worker`,`worker`,`gent`,`gent`,`gent`,`zouave`],lf=[`lady`,`lady`,`lady`,`arlesienne`];function uf(e,t,n={}){let r=n.kind===`boy`||n.kind===`girl`,i=n.s??(r?.6+t()*.1:.94+t()*.12);e.fs=i;let a=n.x0||0,o=n.kind||(t()<.45?rf(lf,t()):rf(cf,t())),s=o===`lady`||o===`arlesienne`||o===`girl`,c=!!n.seated,l=rf(qd,t()),u=t(),d=rf(Yd,t()),f=(c?.5:.92)*i,p=.5*i,m=.08*i,h=f+.52*i,g=h+.05*i,_=r?1.22:1,v=h+.2*i*_+.012*i,y=(e,t,n,r=1,i=0)=>({c:[a,e,i],u:[t,0,0],v:[0,0,n],sq:r}),b,x=rf(Jd,t()),S=null,C=$d,w=!1,T=!1,E=!1,D=null,O=!1;if(o===`worker`?(b=rf(Wd,t()),S=t()<.55?`straw`:`cap`,C=rf(Jd,t()),E=t()<.35):o===`gent`?(b=rf(Ud,t()),S=t()<.5?`top`:`bowler`,w=!0,E=t()<.4):o===`postman`?(b=q(2046586),x=q(2046586),S=`kepi`,C=q(2046586),E=!0,d=q(6965802)):o===`zouave`?(b=q(1846366),x=q(11019292),S=`fez`,O=!0,E=t()<.5):o===`waiter`?(b=$d,x=$d,T=!0):o===`patron`?(b=q(14210244),x=q(13618107),E=t()<.5):o===`painter`?(b=q(3104680),x=q(4872826),S=`straw`,E=!0,d=q(11817770)):o===`boy`?(b=rf(Wd,t()),S=t()<.6?`cap`:null,C=rf(Jd,t())):o===`girl`?(b=rf(Gd,t()),S=`bun`):o===`arlesienne`?(b=$d,S=`coif`,D=Qd):(b=rf(Gd,t()),S=t()<.5?`bonnet`:`bun`,C=rf(Ud,t()),D=t()<.5?rf(Kd,t()):null,T=t()<.25),c){e.bone(of.BODY,f,0,f),J(e,s?b:x,u);for(let t of[-1,1]){let n=a+t*.1*i;Bd(e,[n,f,0],[n,f,.4*i],[[0,.086*i],[1,.068*i]],7),Bd(e,[n,f,.4*i],[n,m,.43*i],[[0,.062*i],[1,.046*i]],7)}J(e,ef,.2);for(let t of[-1,1])K(e,a+t*.1*i,.045*i,.5*i,.05*i,.045*i,.12*i,6,4)}else if(s){let t=o===`girl`?.4*i:.05;e.bone(of.SKIRT,f,0,f),J(e,af(b,.92),u),Rd(e,[y(t,.3*i,.28*i),y(t+(f-t)*.3,.27*i,.25*i),y(t+(f-t)*.68,.21*i,.19*i),y(f,.17*i,.138*i),y(f+.12*i,.135*i,.11*i)],10,!0,!1,e=>.8+.05*e),T&&(J(e,Qd,.6),e.quad(e.pl(a-.15*i,t+.2*i,.29*i),e.pl(a+.15*i,t+.2*i,.29*i),e.pl(a+.11*i,f+.1*i,.125*i),e.pl(a-.11*i,f+.1*i,.125*i),0,0,.3,.7));for(let[t,n]of[[-1,of.THIGH_L],[1,of.THIGH_R]]){let r=a+t*.085*i;e.bone(n,f,0,f),o===`girl`&&(J(e,Qd,.4),Bd(e,[r,.46*i,0],[r,m,0],[[0,.05*i],[1,.04*i]],6)),J(e,ef,.2),K(e,r,.045*i,.07*i,.048*i,.045*i,.11*i,6,4)}}else for(let[t,n,r]of[[-1,of.THIGH_L,of.SHIN_L],[1,of.THIGH_R,of.SHIN_R]]){let s=a+t*.095*i;e.bone(n,f,0,f),J(e,x,u+t*.1),Bd(e,[s,f,0],[s,p,0],[[0,(O?.118:.098)*i],[.55,(O?.112:.088)*i],[1,(O?.1:.076)*i]],8),e.bone(r,p,0,f),o===`boy`?(J(e,nf(l),.3,.6),Bd(e,[s,p,0],[s,m,0],[[0,.056*i],[.3,.06*i],[1,.04*i]],7)):Bd(e,[s,p,0],[s,m+.01*i,.004*i],[[0,(O?.098:.074)*i],[.5,(O?.1:.068)*i],[1,(O?.06:.064)*i]],8),J(e,ef,.2,.6),Rd(e,[{c:[s,.034*i,-.062*i],u:[.034*i,0,0],v:[0,.034*i,0]},{c:[s,.046*i,-.02*i],u:[.046*i,0,0],v:[0,.046*i,0]},{c:[s,.04*i,.07*i],u:[.05*i,0,0],v:[0,.04*i,0]},{c:[s,.03*i,.14*i],u:[.046*i,0,0],v:[0,.03*i,0]},{c:[s,.02*i,.178*i],u:[.028*i,0,0],v:[0,.02*i,0]}],7,!0,!0)}if(e.bone(of.BODY,f,0,f),J(e,b,u),s)Rd(e,[y(f-.02*i,.16*i,.13*i),y(f+.1*i,.148*i,.118*i),y(f+.22*i,.122*i,.102*i),y(f+.37*i,.152*i,.122*i,1.1,.014*i),y(f+.45*i,.158*i,.112*i,1.15,.006*i),y(h-.02*i,.156*i,.092*i,1.25),y(h+.018*i,.104*i,.074*i,1.1),y(h+.05*i,.062*i,.056*i)],10,!0,!0,e=>.9+.02*e);else{let t=o===`gent`||o===`patron`||o===`postman`?1.05:1;Rd(e,[y(f-.05*i,.158*i*t,.124*i*t),y(f+.08*i,.16*i*t,.128*i*t),y(f+.22*i,.15*i*t,.12*i*t),y(f+.36*i,.168*i*t,.13*i*t,1.1,.006*i),y(f+.45*i,.178*i,.124*i*t,1.15),y(h-.02*i,.176*i,.102*i,1.25),y(h+.018*i,.118*i,.08*i,1.1),y(h+.05*i,.07*i,.062*i)],10,!0,!0,e=>.9+.02*e),(o===`worker`||o===`painter`||o===`boy`)&&(e.bone(of.SKIRT,f,0,f),J(e,b,u),Rd(e,[y(f-.17*i,.182*i,.148*i),y(f-.06*i,.172*i,.138*i),y(f+.09*i,.156*i,.124*i)],10,!1,!1,e=>.86+.02*e),e.bone(of.BODY,f,0,f),J(e,b,u))}if(o===`zouave`&&(J(e,q(11019292),.5),Rd(e,[y(f+.04*i,.176*i,.136*i),y(f+.15*i,.172*i,.132*i)],10,!1,!1)),o===`postman`){J(e,q(5913116),.5),Ld(e,a-.2*i,f+.05*i,.02,.1*i,.24*i,.3*i),e.rgb(1,.8,.3).data(W.GLOW,0,.5,0);for(let t=0;t<4;t++)Ld(e,a,f+(.14+t*.09)*i,.128*i,.022,.022,.012)}T&&!s&&(e.bone(of.SKIRT,f,0,f),J(e,Qd,.6),e.quad(e.pl(a-.17*i,.34*i,.14*i),e.pl(a+.17*i,.34*i,.14*i),e.pl(a+.15*i,f+.12*i,.135*i),e.pl(a-.15*i,f+.12*i,.135*i),0,0,.34,.7)),w&&!c&&(e.bone(of.SKIRT,f,0,f),J(e,af(b,.94),u),Rd(e,[y(f-.36*i,.215*i,.168*i),y(f-.16*i,.2*i,.156*i),y(f+.08*i,.176*i,.136*i)],10,!1,!1,e=>.85+.05*e)),D&&(e.bone(of.BODY,f,0,f),J(e,D,.6),Rd(e,[y(h-.21*i,.2*i,.146*i),y(h-.02*i,.19*i,.112*i),y(h+.045*i,.092*i,.078*i)],10,!1,!1));let k={};for(let[o,d,f,p]of[[-1,of.UARM_L,of.FARM_L,`L`],[1,of.UARM_R,of.FARM_R,`R`]]){let m=n.hold&&n.hold[p],g=a+o*(s?.16:.182)*i,_=[g,h-.072*i,0],v=s?.88:r?.92:1,y,x;m===`tray`?(y=[g+o*.04*i,h-.2*i,.14*i],x=[g+o*.1*i,h+.02*i,.3*i]):m?(y=[g+o*.02*i,h-.3*i,0],x=[g+o*.01*i,h-.36*i,.25*i]):c?(y=[g+o*.02*i,h-.27*i,.07*i],x=[a+o*.13*i,h-.3*i,.34*i]):(y=[g+o*.028*i,h-.31*i,-.012*i],x=[g+o*.022*i,h-.565*i,.045*i]);let S=m?of.HELD:0;e.bone(d+S,_[1],0,_[1]),J(e,b,u),Bd(e,_,y,[[0,.058*i*v],[.35,.056*i*v],[1,.046*i*v]],8),e.bone(f+S,y[1],y[2],_[1]),Bd(e,y,x,[[0,.047*i*v],[.3,.046*i*v],[1,.034*i*v]],7);{let t=[x[0]-y[0],x[1]-y[1],x[2]-y[2]],n=Math.hypot(...t)||1,r=t.map(e=>e/n),a=e=>[x[0]+r[0]*e*i,x[1]+r[1]*e*i,x[2]+r[2]*e*i];J(e,nf(l),.3,.5),Bd(e,a(-.005),a(.085),[[0,.026*i*v],[.45,.034*i*v],[1,.02*i*v]],6);let s=a(.03);Bd(e,[s[0],s[1],s[2]+.024*i],[s[0]-o*.006*i,s[1]-.036*i,s[2]+.04*i],[[0,.013*i],[1,.01*i]],5)}if(k[p]=x,m===`lantern`)e.rgb(1,.74,.3).data(W.GLOW,0,4.5,0),Ld(e,x[0],x[1]-.2*i,x[2],.11,.16,.11);else if(m===`basket`)J(e,q(11042876),.7),Ld(e,x[0],x[1]-.17*i,x[2]-.08*i,.3*i,.2*i,.24*i),J(e,rf([q(13117498),q(15249440),q(4885050),q(14999504)],t()),.5),K(e,x[0],x[1]-.06*i,x[2]-.08*i,.12*i,.06*i,.1*i,6,3);else if(m===`tray`)J(e,q(9079440),.5),Vd(e,[x[0],x[1]+.05*i,x[2]],0,.2*i,10,0,0,1),J(e,q(2779706),.5),Ld(e,x[0]-.06,x[1]+.19*i,x[2],.06,.26*i,.06),J(e,Qd,.5),Ld(e,x[0]+.07,x[1]+.1*i,x[2]+.05,.05,.09*i,.05);else if(m===`palette`){J(e,tf,.5),Vd(e,[x[0],x[1]+.03*i,x[2]+.06],0,.16*i,9,0,0,1);for(let[t,n,r]of[[-.06,.02,15249440],[.05,.08,3104680],[.02,-.04,14999504]])J(e,q(r),.4),K(e,x[0]+t,x[1]+.045*i,x[2]+.06+n,.03,.012,.03,5,3)}p===`R`&&!m&&(n.cane&&(J(e,q(2759700),.5),Id(e,x[0],x[1],x[2],x[0]+.03,.02,x[2]+.16*i,.028)),n.glass&&(J(e,q(13162688),.5),Ld(e,x[0],x[1]+.07*i,x[2]+.03,.05,.1*i,.05)),n.brush&&(J(e,q(2759700),.5),Id(e,x[0],x[1],x[2],x[0],x[1]-.26*i,x[2]+.04,.016)),n.bow&&(J(e,q(2759700),.5),Id(e,x[0],x[1]-.3*i,x[2],x[0],x[1]+.34*i,x[2]+.02,.016)))}if(e.bone(of.BODY,f,0,f),n.paper&&(J(e,q(14210240),.5,.6),e.quad(e.pl(a-.24*i,h-.34*i,.37*i),e.pl(a+.24*i,h-.34*i,.37*i),e.pl(a+.24*i,h-.02*i,.3*i),e.pl(a-.24*i,h-.02*i,.3*i),0,0,.5,.34)),n.cueUp&&(J(e,tf,.5),Id(e,a+.27*i,.02,.1,a+.26*i,1.5,.08,.026)),n.cue){let t=Math.cos(.85),n=Math.sin(.85),r=(e,r)=>[f+e*t+r*n,-e*n+r*t],[o,s]=r(.16,-.5),[c,l]=r(.04,1.05);J(e,tf,.5),Id(e,a+.2*i,o,s,a+.06*i,c,l,.024)}n.broom&&(J(e,tf,.5),Id(e,a+.1*i,f+.5*i,.34*i,a,.12,1*i,.03),J(e,Zd,.6),Ld(e,a,.09,1.02*i,.34,.16,.1)),n.violin&&(J(e,q(8010260),.5),Ld(e,a+.13*i,h+.03*i,.17*i,.13*i,.05*i,.26*i),Id(e,a+.13*i,h+.04*i,.28*i,a+.2*i,h+.02*i,.52*i,.03)),n.pole&&(J(e,q(2759700),.5),Id(e,a,h-.1*i,.3*i,a,n.pole,.5,.026),e.rgb(1,.7,.3).data(W.GLOW,0,3.5,0),Ld(e,a,n.pole+.04,.5,.05,.08,.05)),e.bone(of.HEAD,g,0,f);let A=i*_,j=nf(l),M=af(j,.74),ee=q(1839630),N=(t()-.5)*.008;J(e,j,.3,.5),Bd(e,[a,h+.02*i,0],[a,v-.07*A,.008],[[0,.048*i],[1,.042*i]],7),!s&&o!==`boy`&&o!==`worker`&&o!==`painter`&&(J(e,Qd,.4,.6),Rd(e,[{c:[a,h+.035*i,.004],u:[.062*i,0,0],v:[0,0,.058*i]},{c:[a,h+.085*i,.008],u:[.054*i,0,0],v:[0,0,.052*i]}],8,!1,!1));let te=(e,t,n,r=0,i=1)=>({c:[a,v+e*A,r*A],u:[t*A,0,0],v:[0,0,n*A],back:i});J(e,j,.3,.5),Rd(e,[te(-.122,.03,.034,.03),te(-.1,.056,.062,.022),te(-.066,.076,.084,.014,1.05),te(-.022,.09,.096,.008,1.08),te(.022,.092,.1,.002,1.1),te(.066,.088,.098,-.004,1.08),te(.1,.066,.076,-.008),te(.118,.034,.04,-.01)],12,!0,!0,(e,t)=>e<2?.78:.92+.08*Math.sin(t*Math.PI*2)),J(e,M,.4,.6),K(e,a,v+.036*A,.084*A,.064*A,.01*A,.018*A,8,3);for(let t of[-1,1])J(e,M,.4,.6),K(e,a+t*.036*A,v+.014*A,.086*A,.023*A,.015*A,.012*A,6,3),J(e,q(13617336),.2,.5),K(e,a+t*.036*A,v+.013*A,.093*A,.015*A,.0085*A,.007*A,6,3),J(e,ee,.2,.5),K(e,a+t*.036*A+N*A,v+.013*A,.098*A,.0075*A,.0078*A,.005*A,5,3),J(e,[j[0]*1.04,j[1]*.97,j[2]*.96],.3,.45),K(e,a+t*.05*A,v-.028*A,.068*A,.03*A,.024*A,.022*A,6,3),J(e,d,.5,.6),K(e,a+t*.038*A,v+.04*A,.092*A,.024*A,.006*A,.01*A,5,3),J(e,af(j,.9),.4,.5),K(e,a+t*.092*A,v-.006*A,.002*A,.009*A,.022*A,.014*A,5,4);if(J(e,af(j,.97),.3,.5),Rd(e,[{c:[a,v+.03*A,.094*A],u:[.01*A,0,0],v:[0,0,.008*A]},{c:[a,v-.008*A,.106*A],u:[.013*A,0,0],v:[0,0,.012*A]},{c:[a,v-.036*A,.112*A],u:[.019*A,0,0],v:[0,0,.016*A]},{c:[a,v-.046*A,.098*A],u:[.016*A,0,0],v:[0,0,.006*A]}],6,!1,!0,e=>e>2?.7:1),J(e,q(s?9056816:5909030),.3,.5),K(e,a,v-.068*A,.086*A,(s?.022:.026)*A,.007*A,.012*A,6,3),J(e,d,.5),K(e,a,v+.03*A,-.026*A,.099*A,.1*A,.098*A,10,6),(s||o===`boy`&&!S)&&K(e,a,v+.094*A,.012*A,.094*A,.04*A,.092*A,10,5),s)for(let t of[-1,1])K(e,a+t*.072*A,v+.03*A,.03*A,.034*A,.07*A,.06*A,6,4);else if(o!==`boy`){for(let t of[-1,1])K(e,a+t*.088*A,v-.03*A,.03*A,.012*A,.04*A,.022*A,5,3);(E||t()<.55)&&K(e,a,v-.052*A,.094*A,.036*A,.011*A,.014*A,6,3)}if(E){let t=o===`postman`?.085:.03;Rd(e,[{c:[a,v-.062*A,.012*A],u:[.082*A,0,0],v:[0,0,.082*A],back:.2},{c:[a,v-.098*A,.02*A],u:[.07*A,0,0],v:[0,0,.082*A],back:.1},{c:[a,v-(.128+t*.5)*A,.03*A],u:[.05*A,0,0],v:[0,0,.068*A],back:.1},{c:[a,v-(.15+t)*A,.04*A],u:[.022*A,0,0],v:[0,0,.034*A],back:.3}],9,!1,!0),J(e,q(5909030),.3,.5),K(e,a,v-.068*A,.094*A,.02*A,.006*A,.008*A,6,3),J(e,d,.5)}let P=v+.075*i*_,F=(t,n,r,i,o=0)=>Rd(e,[{c:[a,t,o],u:[r,0,0],v:[0,0,r]},{c:[a,n,o],u:[i,0,0],v:[0,0,i]}],9,!1,!0);S===`straw`?(J(e,Zd,.8),Vd(e,[a,P+.01*i,0],.07*i,.215*i,12,.025,0,1),F(P,P+.085*i,.1*i,.09*i),J(e,q(3099258),.4),F(P,P+.028*i,.103*i,.103*i)):S===`cap`?(J(e,C,.8),Rd(e,[{c:[a,P-.005,.01],u:[.112*i*_,0,0],v:[0,0,.125*i*_]},{c:[a,P+.045*i,0],u:[.09*i*_,0,0],v:[0,0,.1*i*_]}],9,!1,!0),K(e,a,P-.01,.13*i*_,.07*i,.012,.05*i,6,3)):S===`top`?(J(e,$d,.8),Vd(e,[a,P+.01*i,0],.06*i,.155*i,12,.008,0,1),F(P,P+.17*i,.098*i,.104*i)):S===`bowler`?(J(e,q(2760728),.8),Vd(e,[a,P+.005*i,0],.06*i,.145*i,12,.01,0,1),K(e,a,P,0,.102*i,.085*i,.108*i,9,5)):S===`kepi`?(J(e,C,.8),F(P-.01*i,P+.075*i,.1*i,.092*i),J(e,q(1381660),.5),K(e,a,P-.008*i,.12*i,.07*i,.01,.05*i,6,3),e.rgb(1,.8,.3).data(W.GLOW,0,.5,0),Ld(e,a,P+.03*i,.101*i,.03,.03,.01)):S===`fez`?(J(e,q(11545120),.8),F(P-.01*i,P+.11*i,.092*i,.07*i),J(e,q(1846366),.4),K(e,a-.08*i,P+.04*i,-.03,.02,.05*i,.02,5,3)):S===`bonnet`?(J(e,C,.8),Vd(e,[a,P+.005*i,.01],.07*i,.2*i,12,.035,0,1),F(P,P+.06*i,.1*i,.085*i),J(e,q(12073546),.3),F(P,P+.025*i,.103*i,.103*i)):S===`coif`?(J(e,Qd,.5),K(e,a,P+.035*i,-.05*i,.05*i,.045*i,.05*i,6,4),J(e,$d,.5),Ld(e,a,P+0*i,-.115*i,.05*i,.13*i,.02)):S===`bun`&&(J(e,d,.5),K(e,a,v+.06*i*_,-.115*i*_,.05*i,.05*i,.05*i,6,4),o===`girl`&&(J(e,q(13117498),.4),Ld(e,a,v+.12*i*_,-.07*i,.14*i,.045*i,.03)))}function df(e,t,n,r){e.fs=1;let i=rf(Xd,t()),a=t(),o=.85+t()*.4,s=.92,c=(e,t,i,a)=>({c:[n,a*o,r+e*o],u:[t*o,0,0],v:[0,i*o,0]});e.bone(of.BODY,s,0,s),J(e,i,a),Rd(e,[c(-.3,.05,.06,.41),c(-.22,.085,.1,.4),c(.05,.09,.105,.39),c(.22,.1,.12,.4),c(.32,.07,.085,.44)],8,!0,!0),K(e,n,.53*o,r+.42*o,.07*o,.075*o,.095*o,7,5),K(e,n,.5*o,r+.53*o,.04*o,.038*o,.06*o,6,4),Bd(e,[n,.45*o,r-.3*o],[n,.62*o,r-.42*o],[[0,.028*o],[1,.014*o]],5),J(e,af(i,.6),a);for(let t of[-1,1])K(e,n+t*.055*o,.6*o,r+.38*o,.022*o,.045*o,.03*o,5,3);J(e,q(1182730),.2),K(e,n,.5*o,r+.59*o,.018*o,.016*o,.014*o,5,3),J(e,af(i,.9),a);for(let[t,i,a]of[[-1,.22,of.THIGH_L],[1,.22,of.THIGH_R],[-1,-.2,of.THIGH_R],[1,-.2,of.THIGH_L]])e.bone(a,.36*o,r+i*o,.36*o),Bd(e,[n+t*.06*o,.36*o,r+i*o],[n+t*.06*o,.03,r+i*o],[[0,.04*o],[1,.024*o]],5)}function ff(e){e.fs=1,e.bone(of.BODY,0,0,0),J(e,tf,.5),Id(e,-.38,.02,.1,-.2,1.75,-.02,.04),Id(e,.38,.02,.1,.2,1.75,-.02,.04),Id(e,0,.02,-.62,0,1.7,-.04,.04),Ld(e,0,.82,.06,.86,.04,.07),e.rgb(1,1,1).data(15,.5,0,0),e.quad(e.pl(-.44,.85,.07),e.pl(.44,.85,.07),e.pl(.44,1.55,.03),e.pl(-.44,1.55,.03),0,0,1,1)}function pf(e,t,n,r,i,a,o=0,s=0,c={}){let l=ml(n[0],n[1])-e.ox,u=hl(n[0],n[1])-e.oz,d=ml(r[0],r[1])-e.ox,f=hl(r[0],r[1])-e.oz,p=c.y??U(n[0],n[1]),m=c.y??U(r[0],r[1]);e.figure([l,p,u,i],[d,m,f,c.phase??t()],[a,o,s,c.x0||0]),e.lampFor((l+d)/2,p+1.2,(u+f)/2)}function mf(e,t,n,r,i,a={}){let o=r[0]-n[0],s=r[1]-n[1],c=i[0]*s-i[1]*o,l=a.dwellB??2.6+t()*4.5,u=a.dwellA??1.6+t()*2;pf(e,t,n,r,a.speed??.95+t()*.45,1,l,(c>=0?1:-1)*u,a)}function hf(e,t,n,r,i,a={}){let o=t(),s=t()*6.28,c=i===2?.5:.62;for(let l=0;l<i;l++){let u=s+l/i*6.28;pf(e,t,[n+Math.cos(u)*c,r+Math.sin(u)*c],[n,r],0,2,0,0,{phase:(o+l/i)%1,y:a.y}),t(),uf(e,t,{kind:a.kinds?a.kinds[l]:void 0})}}function gf(e,t){let n=Fc(Nc(t.i,t.j,t.axis===`x`?4401:4409)),r=t.a1-t.a0,i=(e,n)=>t.axis===`x`?[t.c+n,e]:[e,t.c+n],a=e=>t.axis===`x`?[e,0]:[0,e];if(!t.paved){if(n()<.14){let o=t.a0+r*(.15+n()*.3),s=(n()<.5?-1:1)*(t.hw-.8);mf(e,n,i(o,s),i(Math.min(o+16,t.a1-2),s),a(Math.sign(s)),{speed:1.1,dwellB:1.6,dwellA:1.6}),uf(e,n,{kind:n()<.7?`worker`:`lady`,hold:{R:`lantern`}})}return}let o=Math.round(r/21+n()*1.7);for(let s=0;s<o;s++){let o=n()<.5?-1:1,s=o*(t.hw-.85-n()*.45),c=8+n()*9,l=t.a0+3+n()*Math.max(1,r-c-6),u=Math.min(l+c,t.a1-3),d=a(o),f=n();if(f<.36){mf(e,n,i(l,s),i(u,s),d);let t=n()<.45?rf(lf,n()):rf(cf,n());uf(e,n,{kind:t,cane:t===`gent`&&n()<.6,hold:t===`lady`&&n()<.4?{L:`basket`}:n()<.07?{R:`lantern`}:null})}else if(f<.52){let t={speed:.82+n()*.2,phase:n(),dwellB:3+n()*4,dwellA:2};mf(e,n,i(l,s-o*.3),i(u,s-o*.3),d,{...t,x0:-.27}),uf(e,n,{kind:n()<.6?`gent`:`worker`,x0:-.27,cane:n()<.3}),mf(e,n,i(l,s-o*.3),i(u,s-o*.3),d,{...t,x0:.27}),uf(e,n,{kind:n()<.3?`arlesienne`:`lady`,x0:.27})}else if(f<.61){let t={speed:1.05+n()*.3,phase:n(),dwellB:2+n()*3,dwellA:1.8};mf(e,n,i(l,s),i(u,s),d,t),uf(e,n,{kind:n()<.5?`gent`:`lady`});let r=n()<.5?-.5:.5;mf(e,n,i(l,s),i(u,s),d,{...t,x0:r}),df(e,n,r,.25)}else if(f<.77)hf(e,n,...i(l,s),n()<.7?2:3);else if(f<.83)pf(e,n,i(l,o*(t.hw-.95)),i(l+1,o*(t.hw-.6)),0,5,0,0),uf(e,n,{kind:n()<.6?`lady`:`worker`,broom:!0});else if(f<.89)mf(e,n,i(l,o*(t.hw-.8)),i(u,o*(t.hw-.8)),d,{speed:1.6,dwellB:2.2,dwellA:2.2}),uf(e,n,{kind:`postman`});else if(f<.94&&t.hw>4){let r=n();for(let a=0;a<2;a++)mf(e,n,i(l,s-o*(.6+a*.5)),i(Math.min(l+16,t.a1-3),s-o*(.6+a*.5)),d,{speed:3,dwellB:1.5,dwellA:1.5,phase:(r+a*.012)%1}),uf(e,n,{kind:n()<.5?`boy`:`girl`})}else pf(e,n,i(l,o*(t.hw-.55)),i(l,0),0,0,1,0),uf(e,n,{kind:n()<.5?`worker`:`lady`})}let s=t.lamps[0];if(s&&!s.post&&n()<.085){let r=i(t.axis===`x`?s.z:s.x,s.side*(t.hw-1)),a=U(r[0],r[1]);pf(e,n,r,[s.x+(t.axis===`x`?s.side:0),s.z+(t.axis===`x`?0:s.side)],0,5,5,0),uf(e,n,{kind:`worker`,pole:s.y-a-.3})}}function _f(e,t){let n=Fc(Nc(t.i,t.j,4421));if(t.kind===`plaza`){let r=t.church,i=(e,t)=>!(r&&e>r.tx-6&&e<r.tx+23&&Math.abs(t-r.tz)<9),a=3+Math.floor(n()*4);for(let r=0;r<a;r++){let r=t.x0+5+n()*(t.x1-t.x0-10),a=t.z0+5+n()*(t.z1-t.z0-10),o=n()*6.28,s=8+n()*8,c=Math.min(Math.max(r+Math.cos(o)*s,t.x0+4),t.x1-4),l=Math.min(Math.max(a+Math.sin(o)*s,t.z0+4),t.z1-4);if(!i(r,a)||!i(c,l)||!i((r+c)/2,(a+l)/2)||Math.hypot(c-r,l-a)<5)continue;mf(e,n,[r,a],[c,l],[Math.cos(o+1.57),Math.sin(o+1.57)]);let u=n()<.45?rf(lf,n()):rf(cf,n());uf(e,n,{kind:u,cane:u===`gent`&&n()<.5,hold:u===`lady`&&n()<.5?{L:`basket`}:null})}let o=t.i===0&&t.j===-1;if(o||n()<.7){let r=o?t.x0+13:t.x0+9+n()*(t.x1-t.x0-18),a=o?t.z1-13:t.z0+9+n()*10;if(i(r,a)&&i(r+5,a-4)){pf(e,n,[r,a],[r+1,a-1],0,5,1,0),uf(e,n,{kind:`worker`,violin:!0,bow:!0});let t=3+Math.floor(n()*3);for(let i=0;i<t;i++){let o=-.9+i/Math.max(1,t-1)*1.8-.78,s=2.6+n()*.8;pf(e,n,[r+Math.cos(o)*s,a+Math.sin(o)*s],[r,a],0,0,.5,0),uf(e,n,{kind:n()<.2?`girl`:void 0})}if(o||n()<.6){let t=r+5.5,i=a-4.5,o=1.25*(n()<.5?1:-1),s=n();pf(e,n,[t,i],[t+.34,i],0,4,o,0,{phase:s}),uf(e,n,{kind:n()<.5?`gent`:`zouave`}),pf(e,n,[t,i],[t-.34,i],0,4,o,0,{phase:s}),uf(e,n,{kind:n()<.4?`arlesienne`:`lady`})}}}let s=t.solids.find(e=>e.fountain);if(s){let t=(s.x0+s.x1)/2,r=(s.z0+s.z1)/2;if(n()<.75){let i=2+Math.floor(n()*2),a=(n()<.5?1:-1)*.78,o=n()*6.28;for(let s=0;s<i;s++){let i=o+s*.55;pf(e,n,[t,r],[t+Math.cos(i)*3.5,r+Math.sin(i)*3.5],0,4,a,1),uf(e,n,{kind:n()<.5?`boy`:`girl`})}}for(let[i,a]of[[0,1],[1,0]])n()<.4||(pf(e,n,[t+i*1.45,r+a*1.45],[t+i*4,r+a*4],0,3,0,0,{y:s.top-.47}),uf(e,n,{seated:!0,kind:n()<.5?`lady`:`worker`}))}for(let r of t.props){if(r.type!==`stall`)continue;pf(e,n,[r.x+(n()-.5),r.z+1.05],[r.x,r.z-3],0,5,3,0),uf(e,n,{kind:n()<.5?`lady`:`worker`});let t=Math.floor(n()*3);for(let i=0;i<t;i++){let t=r.x-1+i*1.1+n()*.4;pf(e,n,[t,r.z-1.15-n()*.3],[t+.2,r.z],0,i===0?2:0,.6,0),uf(e,n,{kind:n()<.6?`lady`:void 0,hold:n()<.6?{L:`basket`}:null})}}if(r&&n()<.8&&hf(e,n,r.nave.x1+3.2,r.tz+(n()<.5?-1:1)*(3.4+n()*1.2),2+Math.floor(n()*2)),r){let t=r.nave,i=r.tz+2.9,a=U(t.x0+6,i)+.03;mf(e,n,[t.x0+5.5,i],[t.x1-3.5,i],[0,1],{speed:.6,dwellB:6,dwellA:6,y:a}),uf(e,n,{kind:n()<.5?`arlesienne`:`gent`,cane:n()<.4})}}let r=_l.camGrid;if(r.gx>t.x0&&r.gx<t.x1&&r.gz>t.z0&&r.gz<t.z1){let t=r.gx+1.2,i=r.gz-2.2;pf(e,n,[t,i+.95],[t,i-4],0,5,2,0),uf(e,n,{kind:`painter`,hold:{L:`palette`},brush:!0}),pf(e,n,[t,i],[t,i+4],0,9,0,0),ff(e)}let i=t.hall;if(i){let t=i.z0+i.wall,r=i.z1-i.wall,a=(e,t)=>U(e,t)+.03;if(i.theme===`cafe`){for(let o=i.x0+6;o<i.x1-5;o+=6.5)for(let i of[-1,1]){let s=i<0?t+.95:r-.95;for(let t of[-.75,.75]){if(n()<.4)continue;let r=n()<.2;pf(e,n,[o+t,s],[o,s],0,3,+!r,0,{y:a(o+t,s)}),uf(e,n,{seated:!0,glass:!r,paper:r,kind:n()<.3?`lady`:n()<.3?`zouave`:void 0})}}{let t=i.zc+(n()<.5?-2.2:2.2),r=i.x0+5,o=Math.min(r+15,i.x1-6);mf(e,n,[r,t],[o,t],[0,Math.sign(t-i.zc)],{speed:1.25,dwellB:3.5,dwellA:3.5,y:a(r,t)}),uf(e,n,{kind:`waiter`,hold:{L:`tray`}})}let o=i.obstacles[0];if(o){let t=(o.x0+o.x1)/2;pf(e,n,[o.x0-.62,i.zc+.15],[o.x1,i.zc+.1],0,5,4,0,{y:a(o.x0-.62,i.zc)}),uf(e,n,{kind:`worker`,cue:!0}),pf(e,n,[o.x1+.9,i.zc-1.5],[t,i.zc],0,0,.4,0,{y:a(o.x1+.9,i.zc-1.5)}),uf(e,n,{kind:`gent`,cueUp:!0}),pf(e,n,[t+.6,i.zc+1.9],[t-3,i.zc-1],0,0,.8,0,{y:a(t+.6,i.zc+1.9)}),uf(e,n,{kind:`patron`})}}else{for(let o=0;o<4;o++){let o=n()<.5?-1:1,s=o<0?t+1.7:r-1.7,c=i.x0+5.5+7.2*Math.floor(n()*Math.max(1,(i.x1-i.x0-17)/7.2));mf(e,n,[c,s],[c+7.2,s],[0,o],{speed:.6+n()*.25,dwellB:5+n()*5,dwellA:5+n()*5,y:a(c,s)}),uf(e,n,{kind:n()<.5?`gent`:`lady`,cane:n()<.3})}let o=i.x0+5.5+14.4;hf(e,n,o,t+1.8,2,{y:a(o,t+1.8),kinds:[`gent`,`arlesienne`]})}for(let[t,r]of[[i.x0,-1],[i.x1,1]])for(let a of[-3.6,3.6])n()<.3||(pf(e,n,[t+r*1.5,i.zc+a],[t+r*1.5,i.zc+a-Math.sign(a)*1],0,3,1,0),uf(e,n,{seated:!0,glass:!0}))}}var vf=16,yf=17,bf={N:`S`,S:`N`,E:`W`,W:`E`},xf=[`S`,`E`,`N`,`W`],Sf=[997932,1192028,5904914,933960,3945808,6965786,2771490,1845834,8030874].map(ld),Cf=[3809810,1849904,2240602,5906456,2763312,4863e3,997932].map(ld),wf=[14209208,13156520,3811868,12109e3,2767412,14209208].map(ld),Tf=[13117498,14703242,15249440,15261904,10107584,14707232].map(ld),Ef=[1324074,4854808,1320010,1710622,4862992].map(ld),Df=ld(2774578),Of=ld(2759184),kf=ld(11031596),Af=ld(14207912),jf=ld(10131084),Mf=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],Nf=(e,t)=>[e[0]*t,e[1]*t,e[2]*t];function Pf(e,t){let{x0:n,x1:r,z0:i,z1:a}=e;return t===`S`?[n,a,r,a]:t===`E`?[r,a,r,i]:t===`N`?[r,i,n,i]:[n,i,n,a]}function Ff(e,t,n,r,i){let a=Math.hypot(r-t,i-n),o=(r-t)/a,s=(i-n)/a,c=-s,l=o;return{len:a,jet:0,extA:0,extB:0,p:(r,i,a=0)=>e.p(t+o*r+c*a,i,n+s*r+l*a),ground:(e,r=0)=>U(t+o*e+c*r,n+s*e+l*r)}}function If(e,t,n,r,i,a,o,s=1,c=1){e.quad(t.p(n,r,o),t.p(i,r,o),t.p(i,a,o),t.p(n,a,o),n,r,i,a,s,s,c,c)}function Lf(e,t,n,r,i,a,o,s,c=!0,l=!0,u=!0){e.quad(t.p(n,i,s),t.p(r,i,s),t.p(r,a,s),t.p(n,a,s),0,0,r-n,a-i),u&&e.quad(t.p(n,a,s),t.p(r,a,s),t.p(r,a,o),t.p(n,a,o),0,0,r-n,s-o),l&&e.quad(t.p(n,i,o),t.p(r,i,o),t.p(r,i,s),t.p(n,i,s),0,0,r-n,s-o,.62,.62,.62,.62),c&&(e.quad(t.p(n,i,o),t.p(n,i,s),t.p(n,a,s),t.p(n,a,o),0,0,s-o,a-i,.85,.85,.85,.85),e.quad(t.p(r,i,s),t.p(r,i,o),t.p(r,a,o),t.p(r,a,s),0,0,s-o,a-i,.85,.85,.85,.85))}function Rf(e,t,n,r,i,a,o,s){let c=o-s,l=s/2.7;e.quad(t.p(n,r,o),t.p(n,r,c),t.p(n,a,c),t.p(n,a,o),0,r/3,l,a/3,.9,.7,.7,.9),e.quad(t.p(i,r,c),t.p(i,r,o),t.p(i,a,o),t.p(i,a,c),0,r/3,l,a/3,.7,.9,.9,.7),e.quad(t.p(n,a,c),t.p(i,a,c),t.p(i,a,o),t.p(n,a,o),n/2.7,0,i/2.7,s/3,.55,.55,.7,.7),e.quad(t.p(n,r,o),t.p(i,r,o),t.p(i,r,c),t.p(n,r,c),n/2.7,0,i/2.7,s/3,1,1,.8,.8)}function zf(e,t,n,r,i,a,o,s){If(e,t,n-s,r,n,a+s,o),If(e,t,i,r,i+s,a+s,o),If(e,t,n,a,i,a+s,o)}function Bf(e,t,n,r,i,a,o,s,c,l,u,d){e.color(u).data(vf,d,s,+!!c+l*.97),e.quad(t.p(n,r,o),t.p(i,r,o),t.p(i,a,o),t.p(n,a,o),0,0,1,1)}function Vf(e,t,n,r,i,a,o,s){e.color(o).data(yf,s,a,0),e.quad(t,n,r,i,0,0,1,1)}function Hf(e,t,n,r,i,a,o,s,c,l,u,d){let f=(i-n)/2,p=o+.03,m=Math.cos(u),h=Math.sin(u),g=Math.cos(d),_=Math.sin(d);Vf(e,t.p(n+f*m,r,p+f*h),t.p(n,r,p),t.p(n,a,p),t.p(n+f*m,a,p+f*h),s,c,l),Vf(e,t.p(i,r,p),t.p(i-f*g,r,p+f*_),t.p(i-f*g,a,p+f*_),t.p(i,a,p),s,c,l+.31)}function Uf(e,t,n,r,i,a,o){e.quad(t.p(n-o/2,i,r),t.p(n+o/2,i,r),t.p(n+o/2,a,r),t.p(n-o/2,a,r),0,0,o,a-i),e.quad(t.p(n,i,r-o/2),t.p(n,i,r+o/2),t.p(n,a,r+o/2),t.p(n,a,r-o/2),0,0,o,a-i)}function Wf(e,t,n,r,i,a,o){e.quad(t.p(n,a-o/2,i),t.p(r,a-o/2,i),t.p(r,a+o/2,i),t.p(n,a+o/2,i),0,0,r-n,o),e.quad(t.p(n,a,i+o/2),t.p(r,a,i+o/2),t.p(r,a,i-o/2),t.p(n,a,i-o/2),0,0,r-n,o)}function Gf(e,t,n,r,i,a,o){e.quad(t.p(n,a-o/2,r),t.p(n,a-o/2,i),t.p(n,a+o/2,i),t.p(n,a+o/2,r),0,0,i-r,o),e.quad(t.p(n-o/2,a,r),t.p(n-o/2,a,i),t.p(n+o/2,a,i),t.p(n+o/2,a,r),0,0,i-r,o)}function Kf(e,t,n,r,i,a,o){let s=.74,c=.13;e.color(n.trimCol).data(W.STONE,n.seed,0,0),Lf(e,t,r,i,a-c,a,o,o+s);for(let n of[r+.2,i-.2])e.tri(t.p(n,a-c,o),t.p(n,a-c,o+s*.8),t.p(n,a-c-.46,o),0,0,.6,0,0,.46,.8,.8,.6);e.color(G.iron).data(W.PLAIN,.3,1,0);let l=a+.96,u=o+s-.05,d=r+.05,f=i-.05;for(let n of[l,a+.1])Wf(e,t,d,f,u,n,.05),Gf(e,t,d,o,u,n,.05),Gf(e,t,f,o,u,n,.05);let p=Math.max(4,Math.round((f-d)/.17));for(let n=0;n<=p;n++)Uf(e,t,d+(f-d)*n/p,u,a+.1,l,.03);for(let n of[d,f])for(let r of[.33,.66])Uf(e,t,n,o+(u-o)*r,a+.1,l,.03)}function qf(e,t,n,r,i,a){e.color(kf,.8).data(W.PLAIN,n.seed,1.2,0),Lf(e,t,r.s0+.03,r.s1-.03,r.y0-.25,r.y0-.04,i+.1,i+.3,!0,!0,!1),e.color(a).data(W.LEAF,n.seed+r.r,0,0),Lf(e,t,r.s0-.04,r.s1+.04,r.y0-.06,r.y0+.2,i+.07,i+.36,!0,!1,!0)}function Jf(e,t,n,r,i,a){e.color(kf).data(W.PLAIN,n.seed,1.2,0),Lf(e,t,r-.15,r+.15,i-.1,i+.3,.1,.4,!0,!1,!1);let o=t.p(r,i,.25);e.color(a).data(W.LEAF,n.seed+r,0,0),K(e,e.px(o),i+.58,e.pz(o),.26,.34,.26,7,5)}function Yf(e,t,n,r,i){let{pitch:a,ov:o,ye:s,seed:c}=n,l=t.len,u=l/r,d=o+t.jet,f=s-a*d,p=i?n.hipRun:n.half+d,m=-o-t.extA,h=l+o+t.extB,g=[m,h];for(let e=0;e<=r;e++)g.push(e*u);i&&g.push(m+p,h-p),g.sort((e,t)=>e-t);let _=e=>i?Math.max(0,Math.min(p,e-m,h-e)):p,v=Math.hypot(1,a);for(let r=0;r<g.length-1;r++){let i=g[r],o=g[r+1];if(o-i<.02||i<m-1e-6||o>h+1e-6)continue;let s=_(i),l=_(o);e.color(n.roofCol).data(W.ROOF,c,p*v,0);let u=t.p(i,f,d),y=t.p(o,f,d),b=t.p(o,f+a*l,d-l),x=t.p(i,f+a*s,d-s),S=i-m,C=o-m,w=p*v;l>.001&&e.tri(u,y,b,S,w,C,w,C,(p-l)*v),s>.001&&e.tri(u,b,x,S,w,C,(p-l)*v,S,(p-s)*v),e.color(n.fasciaCol).data(W.PLAIN,c,1.3,0),e.quad(t.p(i,f-.17,d),t.p(o,f-.17,d),t.p(o,f+.012,d),t.p(i,f+.012,d),i,0,o,.18),e.color(n.fasciaCol,.62),e.quad(t.p(i,f-.17,t.jet-.01),t.p(o,f-.17,t.jet-.01),t.p(o,f-.17,d),t.p(i,f-.17,d),i,0,o,d)}if(!i){e.color(n.fasciaCol).data(W.PLAIN,c,1.3,0);for(let n of[m,h])e.quad(t.p(n,f-.18,d),t.p(n,f+a*p-.18,d-p),t.p(n,f+a*p+.012,d-p),t.p(n,f+.012,d),0,0,p*v,.19)}}function Xf(e,t,n,r){let i=t.len,a=i/r,o=n.ye+n.rise+.05,s=-n.half;e.color(n.roofCol,.78).data(W.ROOF,n.seed+.3,1,0);let c=[-n.ov-t.extA];for(let e=0;e<=r;e++)c.push(e*a);c.push(i+n.ov+t.extB);for(let n=0;n<c.length-1;n++){let r=c[n],i=c[n+1];i-r<.02||(e.quad(t.p(r,o,s+.17),t.p(i,o,s+.17),t.p(i,o+.05,s),t.p(r,o+.05,s),0,r,.2,i),e.quad(t.p(r,o+.05,s),t.p(i,o+.05,s),t.p(i,o,s-.17),t.p(r,o,s-.17),0,r,.2,i))}}function Zf(e,t,n,r,i,a){let{pitch:o,ye:s,seed:c}=n,l=.64,u=.5,d=s+o*.5,f=d+1.14,p=f+u,m=e=>-(e-s)/o;if(-m(p+.05)>n.half-.3)return;let h=-.5,g=r-l,_=r+l,v=r-.4,y=r+.4,b=d+.2,x=d+1;e.color(n.upperCol).data(W.WALL,c,0,i?.3:0);let S=(n,r,i,a)=>e.quad(t.p(n,r,h),t.p(i,r,h),t.p(i,a,h),t.p(n,a,h),n/2.7,r/3,i/2.7,a/3);S(g,d,_,b),S(g,b,v,x),S(y,b,_,x),S(g,x,_,f),e.tri(t.p(g,f,h),t.p(_,f,h),t.p(r,p,h),g/2.7,f/3,_/2.7,f/3,r/2.7,p/3),e.tri(t.p(g,d,h),t.p(g,f,h),t.p(g,f,m(f)),0,0,0,.4,.5,.4,.8,.9,.9),e.tri(t.p(_,d,h),t.p(_,f,m(f)),t.p(_,f,h),0,0,.5,.4,0,.4,.8,.9,.9),Bf(e,t,v,b,y,x,-.55,4,i,a,n.sashCol,c),e.color(n.sillCol).data(W.STONE,c,0,0),Lf(e,t,v-.06,y+.06,b-.07,b,h,-.42,!1,!0,!0);let C=.13,w=f-u/l*C;e.color(n.roofCol).data(W.ROOF,c+.2,1,0);let T=Math.hypot(.77,.6015625);e.quad(t.p(g-C,w,-.32),t.p(r,p,-.32),t.p(r,p,m(p)),t.p(g-C,w,m(w)),T,0,0,1.6),e.quad(t.p(r,p,-.32),t.p(_+C,w,-.32),t.p(_+C,w,m(w)),t.p(r,p,m(p)),0,0,T,1.6)}function Qf(e,t,n,r,i){let{h:a,rnd:o,style:s,sh:c,yb:l,ye:u,seed:d}=n,f=t.len,p=Math.max(1,Math.round(f/2.7)),m=f/p,h=a.stories,g=t.p(f/2,l+2.4,.4);e.lampFor(e.px(g),l+2.4,e.pz(g));let _=r===`front`&&a.shop,v=n.win,y=u-(i?0:n.pitch*t.jet),b=e=>.76+.24*Rc((e-l)/(u-l),0,1),x=(n,r,i,a,o)=>{if(i-n<.012||a-r<.012)return;let s=b(r),c=b(a);e.quad(t.p(n,r,o),t.p(i,r,o),t.p(i,a,o),t.p(n,a,o),n/2.7,(r-l)/3,i/2.7,(a-l)/3,s,s,c,c)},S=-1;s===`church`?S=-1:r===`front`?S=Rc(Math.round((p-1)*(.2+.6*o())),0,p-1):r===`yard`&&o()<.45&&(S=Math.floor(o()*p));let C=r===`front`&&n.balcony&&h>=2?p>=3?Math.floor(p/2):S:-1,w=[];for(let e=0;e<h;e++){let u=l+e*c,d=[];for(let h=0;h<p;h++){let g=(h+.5)*m,b=o(),x=o(),w=o(),T=null,E=Math.min(v.w,m-.75);if(s===`church`){if(!i)T={t:`lancet`,s0:g-.42,s1:g+.42,y0:l+1.7,y1:Math.min(l+5.4,y-.5),lit:!0,r:w};else if(h===Math.floor(p/2)){let e=r!==`party`,t=e?Nu.door:Nu.arch;T={t:`portal`,s0:f/2-t,s1:f/2+t,y0:n.y0,y1:l+(e?Nu.doorH:Nu.archH),lit:!1,r:w,deep:e?Nu.wall:0}}}else if(r===`party`)e>0&&b<.08&&E>.5&&(T={t:`win`,s0:g-.34,s1:g+.34,y0:u+1.3,y1:u+2.15,lit:x<a.lit,r:w,plain:!0});else if(e===0&&h===S){let e=_?1.1:n.doorW,i=_?2.5:n.doorH,a=Rc(t.ground(g,.25)+.04,l,l+.45);T={t:_?`shopdoor`:`door`,s0:g-e/2,s1:g+e/2,y0:a,y1:Math.min(a+i,l+c-.22),lit:x<.5,r:w,back:r!==`front`}}else if(e===0&&_)T={t:`shop`,s0:h*m+.24,s1:(h+1)*m-.24,y0:l+.55,y1:l+2.5,lit:!0,r:w};else if(e===1&&h===C&&E>.6)T={t:`french`,s0:g-E/2,s1:g+E/2,y0:u+.04,y1:u+2.3,lit:x<a.lit+.2,r:w,shut:n.shutters};else if(E>.5&&b<(r===`front`?.95:r===`street`?e===0?.72:.92:.74)){let e=u+v.sill+v.h;e>y-.42&&(e=y-.42),T={t:`win`,s0:g-E/2,s1:g+E/2,y0:u+v.sill,y1:e,lit:x<a.lit,r:w,shut:n.shutters&&r!==`yard`,plain:r===`yard`},T.y1-T.y0<.5&&(T=null)}d.push(T)}w.push(d)}let T=[[n.y0,l+.5,0,n.plinthCol,0]];T.push([l+.5,h===1?y:l+c,0,n.groundCol,0]);for(let e=1;e<h;e++)T.push([l+e*c,e===h-1?y:l+(e+1)*c,e,n.upperCol,t.jet]);for(let[r,a,o,s,c]of T){for(let t=0;t<p;t++){let n=w[o][t],i=t*m,l=i+m,u=n&&n.lit?.16:0;if(e.color(s).data(W.WALL,d,0,u),!n||n.y1<=r+.01||n.y0>=a-.01){x(i,r,l,a,c);continue}let f=Math.max(n.y0,r),p=Math.min(n.y1,a);x(i,r,l,f,c),x(i,p,l,a,c),x(i,Math.max(r,f-.012),n.s0,Math.min(a,p+.012),c),x(n.s1,Math.max(r,f-.012),l,Math.min(a,p+.012),c)}if(o>=1){e.color(s).data(W.WALL,d,0,0);for(let[s,d,p,m]of[[-t.extA,0,t.extA,!0],[f,f+t.extB,t.extB,!1]]){if(p<=0)continue;let f=i&&o===h-1?u:a,g=i&&o===h-1?u-n.pitch*p:a;e.quad(t.p(s,r,c),t.p(d,r,c),t.p(d,m?f:g,c),t.p(s,m?g:f,c),s/2.7,(r-l)/3,d/2.7,(a-l)/3)}}}if(s===`town`||s===`stucco`){e.color(n.plinthCol,.92).data(W.STONE,d,0,0);for(let r=0;r<p;r++){let i=w[0][r],a=r*m,o=a+m,s=i&&i.y0<l+.45?[[a,i.s0-.02],[i.s1+.02,o]]:[[a,o]];for(let[r,i]of s)i-r>.05&&Lf(e,t,r,i,n.y0,l+.46,0,.05,!1,!1,!0)}}if(t.jet>0&&h>1){let n=l+c;for(let r=0;r<p;r++)e.color(Of).data(W.PLAIN,d,1.4,0),Lf(e,t,r*m,(r+1)*m,n-.2,n+.02,0,t.jet+.03,r===0||r===p-1,!0,!1)}for(let r=0;r<h;r++){let i=r===0?0:t.jet;for(let a=0;a<p;a++){let o=w[r][a];if(!o)continue;let u=o.lit?.6:0;if(o.t===`win`||o.t===`french`){let a=o.plain?.13:.18;e.color(n.revealCol).data(W.WALL,d,0,u),Rf(e,t,o.s0,o.y0,o.s1,o.y1,i,a);let f=o.shut&&o.r>.86&&!o.lit;if(Bf(e,t,o.s0,o.y0,o.s1,o.y1,i-a,o.t===`french`?2:o.plain&&o.s1-o.s0<.75?4:0,o.lit,o.r,n.sashCol,d),o.t===`win`&&(e.color(n.sillCol).data(W.STONE,d,0,0),Lf(e,t,o.s0-.08,o.s1+.08,o.y0-.1,o.y0,i,i+(o.plain?.07:.12),!o.plain,!0,!0)),n.casing&&!o.plain&&(e.color(n.trimCol).data(W.STONE,d+.2,0,0),zf(e,t,o.s0,o.y0,o.s1,o.y1,i+.03,.13),s===`town`&&Lf(e,t,o.s0-.2,o.s1+.2,o.y1+.15,o.y1+.24,i,i+.1,!0,!0,!0)),n.lintel&&!o.plain&&(e.color(Of).data(W.PLAIN,d,1.3,0),If(e,t,o.s0-.16,o.y1,o.s1+.16,o.y1+.17,i+.03)),o.shut){let r=()=>2.9+o.r*.18,a=e=>e<.12?1.6+e*6:r();Hf(e,t,o.s0,o.y0,o.s1,o.y1,i,n.shutterType,n.shutterCol,d+o.r,f?.04:a(o.r),f?.04:a(o.r*7.3%1))}o.t===`french`?Kf(e,t,n,o.s0-.62,o.s1+.62,l+r*c,i):n.boxes&&r>0==h>1&&!o.plain&&o.r*13.7%1<n.boxes&&qf(e,t,n,o,i,gd(Tf,Math.floor(o.r*97)))}else if(o.t===`portal`)o.deep&&(e.color(n.trimCol).data(W.WALL,d,0,.35),Rf(e,t,o.s0,o.y0,o.s1,o.y1,i,o.deep),e.color(n.trimCol).data(W.STONE,d+.2,0,0),zf(e,t,o.s0,l,o.s1,o.y1,i+.05,.3),Lf(e,t,o.s0-.5,o.s1+.5,o.y1+.3,o.y1+.48,i,i+.3,!0,!0,!0));else if(o.t===`lancet`)e.color(n.trimCol).data(W.WALL,d,0,.5),Rf(e,t,o.s0,o.y0,o.s1,o.y1,i,.3),Bf(e,t,o.s0,o.y0,o.s1,o.y1,i-.3,3,!0,o.r,n.trimCol,d),e.color(n.trimCol).data(W.STONE,d,0,0),Lf(e,t,o.s0-.1,o.s1+.1,o.y0-.16,o.y0,i,i+.14,!0,!0,!0);else if(o.t===`door`){let r=.26;e.color(n.revealCol).data(W.WALL,d,0,0),Rf(e,t,o.s0,o.y0,o.s1,o.y1,i,r);let a=n.fanlight&&!o.back?.42:0;if(Vf(e,t.p(o.s0,o.y0,i-r),t.p(o.s1,o.y0,i-r),t.p(o.s1,o.y1-a,i-r),t.p(o.s0,o.y1-a,i-r),o.back?2:n.doorType,n.doorCol,d+o.r),a&&Bf(e,t,o.s0,o.y1-a,o.s1,o.y1,i-r,5,o.lit,o.r,n.sashCol,d),e.color(n.sillCol,.9).data(W.STONE,d+.4,0,0),Lf(e,t,o.s0-.22,o.s1+.22,n.y0,o.y0+.01,-.26,o.back?.3:.44,!0,!1,!0),!o.back&&(n.casing||s===`stucco`?(e.color(n.trimCol).data(W.STONE,d+.2,0,0),zf(e,t,o.s0,o.y0,o.s1,o.y1,i+.035,.17),s===`town`&&Lf(e,t,o.s0-.34,o.s1+.34,o.y1+.2,o.y1+.33,i,i+.24,!0,!0,!0)):(e.color(Of).data(W.PLAIN,d,1.3,0),If(e,t,o.s0-.18,o.y1,o.s1+.18,o.y1+.19,i+.03)),n.pots>o.r)){let r=o.s0-.45>.3?o.s0-.45:o.s1+.45;Jf(e,t,n,r,t.ground(r,.25),Nf(Df,.8+o.r*.6))}}else o.t===`shop`?(e.color(n.signCol).data(W.PLAIN,d,1.4,0),Rf(e,t,o.s0,o.y0,o.s1,o.y1,i,.16),Bf(e,t,o.s0,o.y0,o.s1,o.y1,i-.16,1,!0,o.r,n.signCol,d),e.color(n.sillCol).data(W.STONE,d,0,0),Lf(e,t,o.s0-.06,o.s1+.06,o.y0-.08,o.y0,i,i+.1,!0,!0,!0)):o.t===`shopdoor`&&(e.color(n.signCol).data(W.PLAIN,d,1.4,0),Rf(e,t,o.s0,o.y0,o.s1,o.y1,i,.6),Bf(e,t,o.s0,o.y0,o.s1,o.y1,i-.6,2,!0,o.r,n.signCol,d),e.color(n.sillCol,.9).data(W.STONE,d+.4,0,0),Lf(e,t,o.s0-.1,o.s1+.1,n.y0,o.y0+.01,-.6,.3,!0,!1,!0))}}if(s===`town`&&(r===`front`||r===`street`)){e.color(n.trimCol).data(W.STONE,d+.1,0,0);for(let r=0;r<p;r++){let i=r*m,a=i+m;for(let n=1;n<h;n++)w[n][r]&&w[n][r].t===`french`||Lf(e,t,i,a,l+n*c-.1,l+n*c+.06,0,.08,!1,!0,!0);Lf(e,t,i,a,n.ySoffit-.3,n.ySoffit,0,.13,!1,!0,!1)}for(let[r,i]of[[0,.42],[f-.42,f]])Lf(e,t,r,i,l+.46,n.ySoffit-.3,0,.05,!0,!1,!1)}if(s===`timber`&&h>1&&r!==`party`){let n=t.jet+.035,r=l+c+.02;e.color(Of).data(W.PLAIN,d+.5,1.5,0);for(let i=0;i<=p;i++){let a=Rc(i*m,.09,f-.09);If(e,t,a-.09,r,a+.09,y,n)}for(let r=1;r<h;r++){let i=l+r*c;for(let a=0;a<p;a++){let o=a*m,s=o+m,l=w[r][a];if(If(e,t,o,i+.02,s,i+.2,n),r===h-1&&If(e,t,o,y-.17,s,y,n),l&&l.t===`win`)If(e,t,o,l.y0-.15,s,l.y0,n),If(e,t,l.s0-.11,l.y0,l.s0,l.y1+.1,n),If(e,t,l.s1,l.y0,l.s1+.11,l.y1+.1,n),If(e,t,l.s0-.11,l.y1,l.s1+.11,l.y1+.11,n);else if(!l){let r=a%2==0,l=i+.2,u=Math.min(i+c,y)-.17;e.quad(t.p(r?o+.09:s-.09,l,n),t.p(r?o+.27:s-.27,l,n),t.p(r?s-.09:o+.09,u,n),t.p(r?s-.27:o+.27,u,n),0,0,.18,u-l)}}}}if(_&&$f(e,t,n,p,m,w[0],S),s===`church`&&!i){e.color(n.trimCol).data(W.STONE,d+.3,0,0);for(let r=0;r<=p;r++){let i=Rc(r*m,.3,f-.3);Lf(e,t,i-.3,i+.3,n.y0,l+3.4,0,.75,!0,!1,!1),e.quad(t.p(i-.3,l+3.4,.75),t.p(i+.3,l+3.4,.75),t.p(i+.3,l+4.3,.4),t.p(i-.3,l+4.3,.4),0,0,.6,1),Lf(e,t,i-.3,i+.3,l+3.4,l+5.3,0,.4,!0,!1,!1),e.quad(t.p(i-.3,l+5.3,.4),t.p(i+.3,l+5.3,.4),t.p(i+.3,l+6,0),t.p(i-.3,l+6,0),0,0,.6,.8)}}if(i){let i=h>1?t.jet:0,c=u+n.rise,g=e=>c-n.pitch*Math.abs(e-f/2),_=[];for(let e=0;e<=p;e++)_.push(e*m);p%2&&_.push(f/2),_.sort((e,t)=>e-t),e.color(n.upperCol).data(W.WALL,d,0,0);for(let n=0;n<_.length-1;n++){let r=_[n],a=_[n+1],o=t.p(r,u,i),s=t.p(a,u,i),c=t.p(a,g(a),i),d=t.p(r,g(r),i),f=e=>(e-l)/3;g(a)-u>.01&&e.tri(o,s,c,r/2.7,f(u),a/2.7,f(u),a/2.7,f(g(a)),1,1,1.08),g(r)-u>.01&&e.tri(o,c,d,r/2.7,f(u),a/2.7,f(g(a)),r/2.7,f(g(r)),1,1.08,1.08)}if(r!==`party`&&n.rise>2.3&&f>5&&s!==`church`&&s!==`shed`){let r=u+n.rise*.36,c=o()<a.lit*.6,l=o();e.color(n.casing?n.trimCol:n.sillCol).data(W.STONE,d,0,0),If(e,t,f/2-.42,r-.5,f/2+.42,r+.5,i+.03),Bf(e,t,f/2-.32,r-.4,f/2+.32,r+.4,i+.05,s===`town`?6:4,c,l,n.sashCol,d)}if(s===`church`&&r!==`party`&&(e.color(n.trimCol).data(W.STONE,d,0,0),If(e,t,f/2-1.25,u-1.9,f/2+1.25,u+.6,.05),Bf(e,t,f/2-1.1,u-1.75,f/2+1.1,u+.45,.08,6,!0,.37,n.trimCol,d)),s===`timber`&&r!==`party`){e.color(Of).data(W.PLAIN,d+.5,1.5,0);let r=i+.035;If(e,t,f/2-.09,u,f/2+.09,c-.25,r);for(let n of[-1,1]){let i=f/2+n*(f/2-.02),a=f/2+n*.1;e.quad(t.p(i,g(i)-.02,r),t.p(i,g(i)-.24,r),t.p(a,g(a)-.24,r),t.p(a,g(a)-.02,r),0,0,.2,f/2)}let a=u+n.rise*.52,o=(c-a)/n.pitch;If(e,t,f/2-o,a-.09,f/2+o,a+.09,r)}}return p}function $f(e,t,n,r,i,a,o){let{h:s,yb:c,seed:l}=n,u=t.len;e.color(n.signCol).data(W.PLAIN,l,1.4,0);for(let n=0;n<r;n++)Lf(e,t,n*i,(n+1)*i,c+2.62,c+3.05,0,.1,n===0||n===r-1,!0,!0);let d=5+Math.floor(n.rnd()*5),f=.17,p=d*f+(d-1)*.07;e.rgb(1,.78,.36).data(W.GLOW,0,1.15,0);for(let n=0;n<d;n++){let r=u/2-p/2+n*.24000000000000002,i=.2+(n*7+d)%3*.02;e.quad(t.p(r,c+2.74,.105),t.p(r+f*(.6+n*5%4*.12),c+2.74,.105),t.p(r+f*(.6+n*5%4*.12),c+2.74+i,.105),t.p(r,c+2.74+i,.105),0,0,1,1)}e.color(n.signCol,1.25).data(W.PLAIN,l+.2,1.4,0);for(let a=0;a<=r;a++){let r=Rc(a*i,.12,u-.12);Lf(e,t,r-.12,r+.12,n.y0,c+2.62,0,.06,!0,!1,!1)}if(n.awning){let n=gd(md,s.wall+s.roof),a=c+2.6,o=c+2.16,d=1.4;e.color(n).data(W.CLOTH,l,0,0);for(let n=0;n<r;n++){let r=Math.max(.15,n*i),s=Math.min(u-.15,(n+1)*i);e.quad(t.p(r,o,d),t.p(s,o,d),t.p(s,a,.11),t.p(r,a,.11),r,0,s,1.5),e.quad(t.p(r,o-.24,d),t.p(s,o-.24,d),t.p(s,o,d),t.p(r,o,d),r,0,s,.24,.8,.8,.95,.95)}for(let n of[.15,u-.15])e.tri(t.p(n,o,d),t.p(n,a,.11),t.p(n,o,.11),0,0,0,1.5,1.2,0,.8,.9,.8)}{let i=o<r/2?u-.5:.5,a=c+n.sh+1.25;e.color(G.iron).data(W.PLAIN,.3,1,0),Gf(e,t,i,0,.95,a,.045),e.color(gd(Ef,s.roof+1),1.6).data(W.PLAIN,l+.7,1.2,0),e.quad(t.p(i,a-.72,.24),t.p(i,a-.72,.9),t.p(i,a-.1,.9),t.p(i,a-.1,.24),0,0,.66,.62),e.rgb(1,.8,.4).data(W.GLOW,0,.75,0);for(let n of[-.012,.012])e.quad(t.p(i+n,a-.52,.42),t.p(i+n,a-.52,.72),t.p(i+n,a-.3,.72),t.p(i+n,a-.3,.42),0,0,1,1)}}function ep(e,t,n){let r=n.home,i=t.style,a=Fc(Nc(Math.floor(t.seed*1e6),t.roof,9001)),o=t.church?G.stone:gd(r?ud:fd,t.wall),s=t.church?G.churchRoof:gd(r?dd:pd,t.roof),{x0:c,x1:l,z0:u,z1:d}=t,f=t.baseY,p=f+t.eave,m=Math.min(U(c,u),U(l,u),U(c,d),U(l,d),f)-.6,h=(t.ridge===`x`?d-u:l-c)/2,g=t.rise/h,_=t.roofType===`hip`,v=t.shed?.2:.38,y=a(),b=a(),x=a(),S=a(),C=Mf(o,jf,.72),w={h:t,blk:n,rnd:a,style:i,seed:t.seed,yb:f,ye:p,y0:m,half:h,pitch:g,ov:v,rise:t.rise,sh:t.eave/t.stories,roofCol:s,hipRun:0,ySoffit:p-g*v-.17,groundCol:o,upperCol:o,plinthCol:Mf(Nf(o,.62),jf,.3),revealCol:Nf(o,.82),trimCol:C,sillCol:Mf(o,jf,.6),fasciaCol:y<.5?Of:Mf(Of,o,.35),sashCol:gd(wf,Math.floor(b*60)),shutterCol:gd(Sf,Math.floor(x*90)+(r?0:3)),doorCol:gd(Cf,Math.floor(S*70)),signCol:gd(Ef,t.wall),shutters:!1,shutterType:0,casing:!1,lintel:!1,fanlight:!1,balcony:!1,boxes:0,pots:0,awning:y<.78,doorW:1.05,doorH:2.15,doorType:1,win:{w:.95,h:1.4,sill:.9}};if(_){let e=Math.min(l-c,d-u)/2+v;w.hipRun=Math.min(t.rise/g+v,e)}i===`cottage`?(w.win={w:.82,h:1.05,sill:1},w.shutters=b<.6,w.shutterType=2,w.lintel=x<.6,w.doorType=2,w.doorW=.98,w.doorH=2.02,w.boxes=S<.4?.5:0,w.pots=.45,w.sashCol=gd(wf,2+Math.floor(b*3))):i===`stucco`?(w.win={w:.95,h:1.42,sill:.9},w.shutters=b<.88,w.casing=x<.4,w.trimCol=S<.5?Mf(o,Af,.7):C,w.boxes=S<.3?.45:0,w.pots=.4,w.balcony=y>.85):i===`town`?(w.win={w:1.05,h:1.72,sill:.72},w.shutters=b<.5,w.casing=!0,w.fanlight=!0,w.doorW=1.15,w.doorH=2.62,w.balcony=x<.55,w.groundCol=Mf(o,jf,.45),w.pots=.25,w.fasciaCol=C):i===`timber`?(w.win={w:.9,h:1.12,sill:.98},w.groundCol=Mf(Nf(o,.8),jf,.55),w.upperCol=Mf(o,Af,.62),w.revealCol=Of,w.doorType=2,w.shutters=b<.25,w.shutterType=2,w.fasciaCol=Of,w.boxes=S<.5?.5:0,w.pots=.3):i===`shed`?(w.win={w:.6,h:.6,sill:1.2},w.doorType=2,w.doorH=1.95,w.fasciaCol=Of):i===`church`&&(w.trimCol=Nf(G.stone,1.12),w.fasciaCol=Nf(G.stone,.8),w.plinthCol=Nf(G.stone,.7));let T=n.kind!==`town`&&n.kind!==`plaza`||i===`shed`||i===`church`,E={S:Math.abs(d-n.z1)<.6,N:Math.abs(u-n.z0)<.6,E:Math.abs(l-n.x1)<.6,W:Math.abs(c-n.x0)<.6},D={};for(let n of xf)D[n]=Ff(e,...Pf(t,n));let O=e=>!_&&(t.ridge===`x`?e===`E`||e===`W`:e===`N`||e===`S`);if(i===`timber`&&t.stories>1){let e=xf.indexOf(t.face);D[t.face].jet=.27,D[xf[(e+3)%4]].extB=.27,D[xf[(e+1)%4]].extA=.27}let k={};for(let n of xf){let r=n===t.face?`front`:i===`church`?n===`W`?`party`:`yard`:E[n]?`street`:n===bf[t.face]||T?`yard`:`party`;k[n]=Qf(e,D[n],w,r,O(n))}let A=e.p((c+l)/2,p+t.rise,(u+d)/2);e.lampFor(e.px(A),p+1,e.pz(A));let j=_?xf:t.ridge===`x`?[`S`,`N`]:[`E`,`W`];for(let t of j)Yf(e,D[t],w,k[t],_);if(_||Xf(e,D[j[0]],w,k[j[0]]),i===`church`){let n=(u+d)/2,r=p-.25,i=p+t.rise-.35,a=e.p((c+l)/2,p,n);e.lampFor(e.px(a),f+4,e.pz(a)),e.color(ld(1715306)).data(W.STONE,2.4,0,0);let o=Math.max(2,Math.round((l-c)/3));for(let t=0;t<o;t++){let a=c+(l-c)*t/o,s=c+(l-c)*(t+1)/o;e.quad(e.p(a,r,d-.1),e.p(s,r,d-.1),e.p(s,i,n),e.p(a,i,n),a,0,s,6),e.quad(e.p(s,r,u+.1),e.p(a,r,u+.1),e.p(a,i,n),e.p(s,i,n),a,0,s,6)}}if(!t.shed&&!t.church&&t.rise>2.6)for(let n of j){if(!(n===t.face||E[n])&&a()>.3)continue;let r=i===`town`?.75:i===`cottage`?.25:.45;if(a()>r)continue;let o=D[n],s=o.len>9.5?2:1,c=_?w.hipRun:1.2;for(let n=0;n<s;n++){let r=o.len*((n+.5)/s);r<c+.6||r>o.len-c-.6||Zf(e,o,w,r,a()<t.lit,a())}}if(t.chimney){let n=Vu(t);e.color(i===`town`?w.trimCol:G.chimney).data(W.STONE,t.seed,0,0),e.box(n.x-.36,n.x+.36,n.z-.36,n.z+.36,n.base,n.top-.16,!1),e.color(G.chimney,1.25),e.box(n.x-.46,n.x+.46,n.z-.46,n.z+.46,n.top-.16,n.top),e.color(kf).data(W.PLAIN,t.seed,1.1,0);for(let t of x<.4?[0]:[-.17,.17])e.box(n.x+t-.1,n.x+t+.1,n.z-.1,n.z+.1,n.top,n.top+.36)}}function tp(e,t){let n=t.church;if(!n)return;let r=n.tower,i=n.baseY,a=i-.8,o=i+n.towerH,s=o+n.spireH,c=.613,l=G.stone,u=Nf(G.stone,1.14),d={x0:r.x0,x1:r.x1,z0:r.z0,z1:r.z1},f=(r.x0+r.x1)/2,p=(r.z0+r.z1)/2,m=o-3.3,h=o-.9;for(let t of xf){let s=Ff(e,...Pf(d,t)),f=s.len,p=s.p(f/2,i+3,.5);e.lampFor(e.px(p),i+3,e.pz(p));let g=e=>.74+.26*Rc((e-i)/n.towerH,0,1),_=(t,n,r,a)=>e.quad(s.p(t,n,0),s.p(r,n,0),s.p(r,a,0),s.p(t,a,0),t/2.7,(n-i)/3,r/2.7,(a-i)/3,g(n),g(n),g(a),g(a)),v=f/2-.55,y=f/2+.55,b=f/2-.22,x=f/2+.22,S=i+n.towerH*.36,C=S+1.5,w=t===`E`||t===`W`,T=i+Nu.archH,E=f/2-Nu.arch,D=f/2+Nu.arch;e.color(l).data(W.WALL,c,0,0),w?(_(0,a,E,S),_(D,a,f,S),_(E,T,D,S)):_(0,a,f,S),_(0,S,b,C),_(x,S,f,C),_(0,C,f,m),_(0,m,v,h),_(y,m,f,h),_(0,h,f,o),e.color(Nf(l,.8)).data(W.WALL,c,0,.5),Rf(e,s,v,m,y,h,0,.45),Bf(e,s,v,m,y,h,-.45,3,!0,.21+xf.indexOf(t)*.17,u,c),e.color(Nf(l,.8)).data(W.WALL,c,0,0),Rf(e,s,b,S,x,C,0,.4),Bf(e,s,b,S,x,C,-.4,4,t===`S`,.5,Nf(l,.5),c),e.color(u).data(W.STONE,.813,0,0);for(let t of w?[m-.35]:[i+n.towerH*.3,m-.35])Lf(e,s,0,f,t-.1,t+.1,0,.12,!1,!0,!0);if(w&&(Lf(e,s,E-.2,D+.2,T,T+.22,0,.14,!0,!0,!0),t===`E`)){let t=r.x1-r.x0;e.color(Nf(l,.9)).data(W.WALL,c,0,.5),e.quad(s.p(E,a,0),s.p(E,a,-t),s.p(E,T,-t),s.p(E,T,0),0,0,t/2.7,1.2),e.quad(s.p(D,a,-t),s.p(D,a,0),s.p(D,T,0),s.p(D,T,-t),0,0,t/2.7,1.2),e.quad(s.p(E,T,0),s.p(E,T,-t),s.p(D,T,-t),s.p(D,T,0),0,0,1,t/3,.7,.7,.7,.7)}Lf(e,s,-.16,f+.16,o-.28,o+.02,0,.2,!1,!0,!0),Lf(e,s,v-.14,y+.14,m-.14,m,0,.16,!0,!0,!0);for(let[t,r]of[[-.02,.5],[f-.5,f+.02]])Lf(e,s,t,r,a,i+n.towerH*.3,0,.42,!0,!1,!1),e.quad(s.p(t,i+n.towerH*.3,.42),s.p(r,i+n.towerH*.3,.42),s.p(r,i+n.towerH*.3+.8,.2),s.p(t,i+n.towerH*.3+.8,.2),0,0,.5,.8),Lf(e,s,t,r,i+n.towerH*.3,m-.35,0,.2,!0,!1,!1);t===`S`&&(e.color(u).data(W.STONE,c,0,0),If(e,s,f/2-.8,m-2.5,f/2+.8,m-.9,.05),Bf(e,s,f/2-.68,m-2.38,f/2+.68,m-1.02,.08,6,!0,.99,[.9,.85,.7],c))}let g=.3,_=(r.x1-r.x0)/2+g,v=Math.hypot(n.spireH,_),y=e.p(f,s,p);e.color(G.spire).data(W.ROOF,.2,v,0).noLamp();let b=[];for(let e=0;e<8;e++){let t=(e+.5)*(Math.PI/4),n=Math.cos(t),r=Math.sin(t),i=1/Math.max(Math.abs(n),Math.abs(r));b.push([f+n*_*i,p+r*_*i])}for(let t=0;t<8;t++){let[n,r]=b[t],[i,a]=b[(t+1)%8];e.tri(e.p(i,o,a),e.p(n,o,r),y,0,v,2,v,1,0)}if(e.quad(e.p(r.x0-g,o,r.z1+g),e.p(r.x1+g,o,r.z1+g),e.p(r.x1+g,o,r.z0-g),e.p(r.x0-g,o,r.z0-g),0,0,4.8,4.8),t.i!==0||t.j!==-1){e.color(Nf(G.spire,1.3));for(let[t,n]of[[r.x0,r.z0],[r.x1,r.z0],[r.x0,r.z1],[r.x1,r.z1]]){let r=e.p(t-.3,o,n+.3),i=e.p(t+.3,o,n+.3),a=e.p(t+.3,o,n-.3),s=e.p(t-.3,o,n-.3),c=e.p(t,o+2.1,n);e.tri(r,i,c,0,2,.6,2,.3,0),e.tri(i,a,c,0,2,.6,2,.3,0),e.tri(a,s,c,0,2,.6,2,.3,0),e.tri(s,r,c,0,2,.6,2,.3,0)}e.color(G.iron).data(W.PLAIN,.3,1,0),e.box(f-.05,f+.05,p-.05,p+.05,s-.3,s+1.3),e.box(f-.38,f+.38,p-.05,p+.05,s+.72,s+.84)}}var np=2,rp=_u.small?135:195,ip=rp+80,ap=class{constructor(e,t,n,r){this.scene=e,this.paintMat=t,this.glowMat=n,this.walkerMat=r,this.W=new sf(16384),this.chunks=new Map,this.queue=[],this.job=null,this.B=new bu(4e4),this.A=new bu(16384),this.N=new bu(65536),this.G=new xu(1024),this.nearQueue=[],this.njob=null,this.nearAt={x:1e9,z:1e9},this.nearDirty=!1,this.group=new mn,e.add(this.group),this.focus={ci:1e9,cj:1e9},this.built=0,this._v=new B,this._c=new B}chunkCentre(e,t){return[(cl(e*np)+cl(e*np+np))/2,(ll(t*np)+ll(t*np+np))/2]}collectLamps(e,t,n,r){let i=e*np,a=t*np,o=[],s=(e,t)=>o.push({wx:ml(e.x,e.z)-n,wy:e.y,wz:hl(e.x,e.z)-r,power:t}),c=e=>{for(let t of e.lamps)s(t,1);if(e.arch){let t=(e.arch.a0+e.arch.a1)/2;s(e.axis===`x`?{x:e.c,z:t,y:e.arch.under+.35}:{x:t,z:e.c,y:e.arch.under+.35},.9)}};for(let e=i;e<=i+np;e++)for(let t=a-1;t<=a+np;t++)c(Lu(`x`,e,t));for(let e=a;e<=a+np;e++)for(let t=i-1;t<=i+np;t++)c(Lu(`z`,t,e));for(let e=i-1;e<=i+np;e++)for(let t=a-1;t<=a+np;t++)for(let n of Tu(e,t).lamps)s(n,n.power??1.1);return o}startJob(e,t){let[n,r]=this.chunkCentre(e,t),i=ml(n,r),a=hl(n,r);this.B.reset(i,a,n,r),this.A.reset(i,a,n,r),this.G.reset(i,a);let o=this.collectLamps(e,t,i,a);this.B.setLamps(o),this.A.setLamps(o),this.job={ci:e,cj:t,ox:i,oz:a,gx:n,gz:r,step:0,lamps:o}}stepJob(){let e=this.job,t=this.B,n=this.G,r=e.step++;if(r<4){let i=e.ci*np+r%np,a=e.cj*np+Math.floor(r/np),o=Tu(i,a);for(let e of o.houses)xd(this.A,n,e,o);Cd(this.A,n,o),Fd(t,n,o);for(let e of o.trees)Od(t,e,o);for(let e of o.lamps)Ad(t,n,e,null);Md(t,n,o);for(let e of[Lu(`x`,i,a),Lu(`z`,i,a)]){for(let r of e.lamps)Ad(t,n,r,e);Dd(t,n,e),jd(n,e)}return yd(t,i,a),!1}let i=this.solid(t,e.ox,e.oz),a=this.A.nv>0?this.solid(this.A,e.ox,e.oz):null,o=null;n.n>0&&(o=new Vr(n.build(),this.glowMat),o.position.copy(i.position),o.frustumCulled=!1,o.matrixAutoUpdate=!1,o.updateMatrix(),o.renderOrder=60);let s={ci:e.ci,cj:e.cj,x:e.ox,z:e.oz,gx:e.gx,gz:e.gz,paint:i,arch:a,glow:o,folk:null,near:[],nearReady:!1,lamps:e.lamps,y:(t.minY+t.maxY)/2};return this.group.add(i),a&&this.group.add(a),this.nearDirty=!0,o&&this.group.add(o),this.chunks.set(e.ci*65536+e.cj,s),this.job=null,this.built++,!0}solid(e,t,n){let r=new Vr(e.build(),this.paintMat);return r.position.set(t,0,n),r.frustumCulled=!1,r.matrixAutoUpdate=!1,r.updateMatrix(),r.layers.enable(1),r}dropNear(e){for(let t of e.near)this.group.remove(t),t.geometry.dispose();e.folk&&=(this.group.remove(e.folk),e.folk.geometry.dispose(),null),e.near=[],e.nearReady=!1,this.njob&&this.njob.chunk===e&&(this.njob=null)}updateNear(e,t){let n=[];for(let r of this.chunks.values()){let i=Math.hypot(r.gx-e,r.gz-t);i<rp?!r.nearReady&&!(this.njob&&this.njob.chunk===r)&&n.push({c:r,d:i}):i>ip&&(r.nearReady||r.near.length||this.njob&&this.njob.chunk===r)&&this.dropNear(r)}n.sort((e,t)=>e.d-t.d),this.nearQueue=n.map(e=>e.c)}stepNear(e){let t=this.njob,n=this.N,r=this.W,i=t.chunk;t.k===0&&t.fresh&&(r.reset(i.x,i.z,i.gx,i.gz),r.setLamps(i.lamps)),t.fresh&&=(n.reset(i.x,i.z,i.gx,i.gz),n.setLamps(i.lamps),!1);let a=i.ci*np+t.k%np,o=i.cj*np+Math.floor(t.k/np),s=Tu(a,o);for(;t.hi<s.houses.length;)if(ep(n,s.houses[t.hi++],s),performance.now()>e)return;if(tp(n,s),ad(n,s),n.nv>0){let e=this.solid(n,i.x,i.z);e.visible=!1,i.near.push(e),this.group.add(e)}for(let e of[Lu(`x`,a,o),Lu(`z`,a,o)])gf(r,e);if(_f(r,s),t.k++,t.hi=0,t.fresh=!0,t.k>=4){if(r.nv>0){let e=new Vr(r.build(),this.walkerMat);e.position.set(i.x,0,i.z),e.frustumCulled=!1,e.matrixAutoUpdate=!1,e.updateMatrix(),i.folk=e,this.group.add(e)}i.nearReady=!0,this.njob=null}}retarget(e,t){(this.nearDirty||Math.hypot(e-this.nearAt.x,t-this.nearAt.z)>14)&&(this.nearAt.x=e,this.nearAt.z=t,this.nearDirty=!1,this.updateNear(e,t));let n=Math.floor(fl(e)/np),r=Math.floor(pl(t)/np);if(n===this.focus.ci&&r===this.focus.cj)return;this.focus={ci:n,cj:r};let i=Math.ceil((Oc.viewRadius+60)/(Oc.pitch*np))+1,a=[],o=new Set,s=Oc.viewRadius+Oc.pitch*np*.72;for(let c=n-i;c<=n+i;c++)for(let n=r-i;n<=r+i;n++){let[r,i]=this.chunkCentre(c,n),l=Math.hypot(r-e,i-t);if(l>s)continue;let u=c*65536+n;o.add(u),!this.chunks.has(u)&&!(this.job&&this.job.ci===c&&this.job.cj===n)&&a.push({ci:c,cj:n,d:l})}a.sort((e,t)=>e.d-t.d),this.queue=a;for(let[n,r]of this.chunks){if(o.has(n))continue;let[i,a]=this.chunkCentre(r.ci,r.cj);Math.hypot(i-e,a-t)<s+150||(this.group.remove(r.paint),r.paint.geometry.dispose(),r.arch&&(this.group.remove(r.arch),r.arch.geometry.dispose()),this.dropNear(r),r.glow&&(this.group.remove(r.glow),r.glow.geometry.dispose()),this.chunks.delete(n))}}work(e){let t=performance.now()+e;do{if(!this.job){let e=this.queue.shift();if(!e)break;if(this.chunks.has(e.ci*65536+e.cj))continue;this.startJob(e.ci,e.cj)}this.stepJob()}while(performance.now()<t);for(;performance.now()<t;){if(!this.njob){let e=this.nearQueue.shift();if(!e)break;if(e.nearReady||this.chunks.get(e.ci*65536+e.cj)!==e)continue;this.njob={chunk:e,k:0,hi:0,fresh:!0}}this.stepNear(t)}}get pending(){return this.queue.length+ +!!this.job+this.nearQueue.length+ +!!this.njob}cull(e){let t=e.getWorldDirection(this._v),n=Math.hypot(t.x,t.z),r=n<.5,i=t.x/(n||1),a=t.z/(n||1),o=Oc.pitch*np*.8,s=!r,c=1;for(let t=0;s&&t<4;t++){let n=this._c.set(t&1?1:-1,t&2?1:-1,.5).applyMatrix4(e.projectionMatrixInverse).transformDirection(e.matrixWorld),r=Math.hypot(n.x,n.z),o=r>1e-4?(n.x*i+n.z*a)/r:0;o<.2?s=!1:o<c&&(c=o)}let l=Math.sqrt(Math.max(0,1-c*c));for(let t of this.chunks.values()){let n=t.x-e.position.x,u=t.z-e.position.z,d=n*i+u*a,f=r||d>-o;f&&s&&Math.abs(n*a-u*i)*c-d*l>o&&(f=!1),t.paint.visible=f,t.arch&&(t.arch.visible=f&&!t.nearReady);for(let e=0;e<t.near.length;e++)t.near[e].visible=f&&t.nearReady;t.glow&&(t.glow.visible=f),t.folk&&(t.folk.visible=f)}}nearestLamp(e,t,n){let r=fl(e),i=pl(t),a=null,o=784,s=n=>{let r=(n.x-e)*(n.x-e)+(n.z-t)*(n.z-t);r<o&&(o=r,a=n)};for(let e=r;e<=r+1;e++)for(let t of Lu(`x`,e,i).lamps)s(t);for(let e=i;e<=i+1;e++)for(let t of Lu(`z`,r,e).lamps)s(t);for(let e of Tu(r,i).lamps)s(e);return a?(n.set(ml(a.x,a.z),a.y,hl(a.x,a.z),1),n):(n.set(0,-999,0,0),n)}},op=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,sp=e=>[op((e>>16&255)/255),op((e>>8&255)/255),op((e&255)/255)],Y={frame:sp(1845842),tire:sp(1053468),rim:sp(9214648),metal:sp(10134710),saddle:sp(3810326),smock:sp(3103936),smockLight:sp(6129372),smockDark:sp(2047884),trousers:sp(10122294),skin:sp(14855042),skinShade:sp(13208166),eye:sp(1710626),eyeWhite:sp(14275782),iris:sp(4157306),hat:sp(15582546),hatShade:sp(13081140),band:sp(2371674),boot:sp(3810324),hair:sp(12870186),leather:sp(8014372),leatherDark:sp(4860948),scarf:sp(14699052),wicker:sp(12093770),petal:sp(15909424),seed:sp(4860944),stem:sp(4090410),feather:sp(16054015),featherGold:sp(16770720),featherBlue:sp(12112127)},cp=.35,lp=[-.52,cp],up=[.56,cp],dp=[0,.3],fp=[-.19,.87],pp=[.38,.91],mp=[.43,.66],hp=.17,gp=.13,_p=[-.17,.985],vp=.44,yp=.47,bp=[pp[0]-.075,pp[1]+.135,.285],xp=(e,t,n,r=1)=>e.color(t).data(W.FIGURE,n,r,0);function Sp(){let e=new bu(4096);e.reset(0,0,0,0);let t=.32599999999999996,n=.024;e.color(Y.tire).data(W.PLAIN,.2,.45,0);let r=[];for(let i=0;i<=26;i++){let a=i/26*Math.PI*2,o=Math.cos(a),s=Math.sin(a),c=[];for(let r=0;r<=7;r++){let i=r/7*Math.PI*2,l=Math.cos(i),u=Math.sin(i);c.push(e.vert(o*(t+l*n),s*(t+l*n),u*n,o*l,s*l,u,a*t,i*n,1))}r.push(c)}for(let t=0;t<26;t++)for(let n=0;n<7;n++){let i=r[t][n],a=r[t][n+1],o=r[t+1][n+1],s=r[t+1][n];e.tri3(i,a,o),e.tri3(i,o,s)}e.color(Y.rim).data(W.PLAIN,.6,.4,0);for(let t=0;t<16;t++){let n=t/16*Math.PI*2;Id(e,0,0,t%2?.022:-.022,Math.cos(n)*.30599999999999994,Math.sin(n)*.30599999999999994,0,.008,t*.1)}return e.color(Y.metal),Id(e,0,0,-.05,0,0,.05,.05),e.build()}function Cp(){let e=new bu(4096);e.reset(0,0,0,0),e.color(Y.frame).data(W.PLAIN,.4,.5,0);let t=.034;Id(e,dp[0],dp[1],0,fp[0],fp[1],0,t),Id(e,fp[0],fp[1]-.04,0,pp[0],pp[1]-.03,0,t),Id(e,dp[0],dp[1],0,mp[0],mp[1],0,t*1.1);for(let n of[-.045,.045])Id(e,dp[0],dp[1],n*.6,lp[0],lp[1],n,t*.7),Id(e,fp[0],fp[1]-.06,n*.5,lp[0],lp[1],n,t*.65);Id(e,fp[0],fp[1],0,fp[0]-.012,fp[1]+.035,0,.026),e.color(Y.saddle),K(e,fp[0]-.055,fp[1]+.048,0,.088,.03,.076,10,5),K(e,fp[0]+.055,fp[1]+.044,0,.085,.024,.036,8,5),e.color(Y.frame,.8);for(let[t,n,r]of[[lp[0],.1,.98],[up[0],.22,.86]])for(let i=0;i<7;i++){let a=Math.PI*(n+(r-n)*i/7),o=Math.PI*(n+(r-n)*(i+1)/7),s=.378;Id(e,t+Math.cos(a)*s,cp+Math.sin(a)*s,0,t+Math.cos(o)*s,cp+Math.sin(o)*s,0,.052)}return e.color(Y.frame,1.3),Id(e,dp[0]+.02,dp[1]+.07,.065,lp[0]+.06,lp[1]+.05,.065,.045),e.color(Y.metal,.7),Id(e,fp[0]-.02,fp[1]-.12,0,lp[0]-.2,lp[1]+.4,0,.02),Id(e,lp[0]-.2,lp[1]+.4,-.07,lp[0]-.2,lp[1]+.4,.07,.02),Id(e,lp[0],lp[1],.05,lp[0]-.2,lp[1]+.4,.07,.014),Id(e,lp[0],lp[1],-.05,lp[0]-.2,lp[1]+.4,-.07,.014),e.rgb(1,.12,.05).data(W.GLOW,0,4.5,0),Ld(e,lp[0]-.385,lp[1]+.18,0,.03,.05,.05),e.build()}function wp(){let e=new bu(4096);e.reset(0,0,0,0),e.color(Y.frame).data(W.PLAIN,.4,.5,0);let t=pp[0],n=pp[1],r=mp[0]-t,i=mp[1]-n,a=up[0]-t,o=up[1]-n;Id(e,0,.02,0,r,i,0,.046);for(let t of[-.05,.05])Id(e,r,i,t*.7,a,o,t,.028);e.color(Y.metal),Id(e,0,0,0,-.03,.13,0,.026);for(let t of[-1,1])Id(e,-.03,.13,0,-.01,.15,t*.17,.022),Id(e,-.01,.15,t*.17,-.075,.135,t*.275,.022),e.color(Y.saddle),Id(e,-.075,.135,t*.275,-.15,.13,t*.29,.032),e.color(Y.metal);K(e,.1,-.12,0,.05,.045,.045,8,5),e.rgb(1,.86,.55).data(W.GLOW,0,7,0),Ld(e,.148,-.12,0,.012,.06,.06),e.color(Y.wicker).data(W.PLAIN,.7,.35,0);let s=(e,t,n)=>({c:[.17,e,0],u:[0,0,t],v:[n,0,0],sq:2.2});Rd(e,[s(-.07,.1,.075),s(0,.125,.09),s(.085,.145,.105)],12,!0,!1),e.color(Y.wicker,.55),Rd(e,[s(.08,.135,.095),s(.02,.118,.082)],12,!1,!0);for(let[t,n,r,i]of[[.15,.25,-.055,.075],[.215,.215,.05,.068],[.115,.3,.025,.06]]){e.color(Y.stem).data(W.PLAIN,.3,.3,0),Id(e,.17,.04,r*.4,t,n,r,.014),xp(e,Y.petal,.9+r,.6);for(let a=0;a<9;a++){let o=a/9*Math.PI*2,s=e.pl(t,n+.012,r),c=e.pl(t+Math.cos(o-.3)*i*.5,n+.01,r+Math.sin(o-.3)*i*.5),l=e.pl(t+Math.cos(o)*i,n-.008,r+Math.sin(o)*i),u=e.pl(t+Math.cos(o+.3)*i*.5,n+.01,r+Math.sin(o+.3)*i*.5);e.quad(s,c,l,u,0,0,i,i)}e.color(Y.seed),K(e,t,n+.012,r,i*.42,.016,i*.42,8,4)}return e.build()}function Tp(){let e=new bu(1024);e.reset(0,0,0,0),e.color(Y.metal).data(W.PLAIN,.5,.4,0),Id(e,0,0,-.08,0,0,.08,.03),Id(e,0,0,.08,hp,0,.09,.022),Id(e,0,0,-.08,-.17,0,-.09,.022);for(let t=0;t<10;t++){let n=t/10*Math.PI*2,r=(t+1)/10*Math.PI*2;Id(e,Math.cos(n)*.085,Math.sin(n)*.085,.06,Math.cos(r)*.085,Math.sin(r)*.085,.06,.012)}return e.build()}var Ep=(()=>{let e=[.14,1.47],t=[e[0]-_p[0],e[1]-_p[1]],n=Math.hypot(t[0],t[1]);return{d:[t[0]/n,t[1]/n],len:n,top:e}})(),Dp=[Ep.top[0]+.075,Ep.top[1]+.185],Op=[.097,1.397,.208];function kp(e,t=0){let n=Ep.d,r=[n[1],-n[0]],i=-.032*Math.sin(Math.PI*Math.min(Math.max(e,0),1));return[_p[0]+n[0]*Ep.len*e+r[0]*(t+i),_p[1]+n[1]*Ep.len*e+r[1]*(t+i)]}function Ap(){let e=new bu(8192);e.reset(0,0,0,0);let t=Ep.d,n=[t[1],-t[0],0],r=(e,t,r,i,a=1)=>{let o=kp(e);return{c:[o[0],o[1],0],u:[0,0,t],v:[n[0]*r,n[1]*r,0],back:i/r,sq:a}},i=(e,t,n,r,i,a)=>({c:[e,t,0],u:[0,0,n],v:[Math.cos(a)*r,Math.sin(a)*r,0],back:i/r,sq:1.2});xp(e,Y.smock,.7),Rd(e,[i(-.19,.988,.196,.128,.126,.56),i(-.19,.995,.224,.152,.146,.56),i(-.16,1.045,.22,.138,.142,.25),r(.13,.186,.122,.132),r(.24,.166,.118,.128),r(.45,.186,.132,.142),r(.66,.206,.138,.152,1.1),r(.84,.226,.118,.136,1.25),r(.93,.176,.094,.108),r(.99,.08,.07,.074),r(1.03,.062,.058,.06)],16,!1,!1,(e,t)=>.86+.14*Math.sin(t*Math.PI*2)+(e<4?-.08:0)+(e<1?-.16:0)),xp(e,Y.smockLight,.3),Rd(e,[r(.975,.094,.084,.088),r(1.045,.074,.07,.072)],14,!1,!1);for(let t of[-1,1])xp(e,Y.smock,.75+t*.08),K(e,Op[0],Op[1],t*Op[2],.082,.078,.078,10,6);return e.build()}function jp(e){let t=new bu(2048);if(t.reset(0,0,0,0),xp(t,Y.leatherDark,.2,.8),!e){for(let e of[-.142,.132]){let n=kp(.87,e),r=kp(.12,e*.92);Bd(t,[n[0],n[1],.15],[r[0],r[1],-.165],[[0,.021],[1,.021]],6)}return t.build()}let n=[[0,.215,.14,.142],[.13,.186,.122,.132],[.24,.166,.118,.128],[.45,.186,.132,.142],[.66,.206,.138,.152],[.84,.226,.118,.136],[.93,.176,.094,.108],[.99,.08,.07,.074],[1.03,.062,.058,.06]],r=e=>{let t=0;for(;t<n.length-2&&e>n[t+1][0];)t++;let r=n[t],i=n[t+1],a=Math.min(1,Math.max(0,(e-r[0])/(i[0]-r[0])));return[r[1]+(i[1]-r[1])*a,r[2]+(i[2]-r[2])*a,r[3]+(i[3]-r[3])*a]},i=.026,a=[];for(let e=0;e<=40;e++){let t=e/40*Math.PI*2,n=Math.cos(t),o=Math.sin(t),s=.15+.835*((1+n)/2)**.9,[c,l,u]=r(s),d=kp(s,(o>0?l:u)*o+i*o);a.push([d[0],d[1],(c+i)*n])}for(let e=0;e<40;e++)Bd(t,a[e],a[e+1],[[0,.019],[1,.019]],6);return t.build()}var Mp=kp(.3);function Np(){let e=new bu(1024);e.reset(0,0,0,0);let t=Ep.d,n=[t[1],-t[0],0];xp(e,Y.leather,.45,.8);let r=kp(.3,-.165),i=(e,i,a)=>({c:[r[0]+t[0]*e,r[1]+t[1]*e,-.035],u:[0,0,i],v:[n[0]*a,n[1]*a,0],sq:2.2});return Rd(e,[i(-.13,.115,.045),i(-.06,.13,.058),i(.07,.13,.058),i(.125,.118,.046)],12,!0,!0),xp(e,Y.leatherDark,.2,.8),Rd(e,[i(.035,.134,.062),i(.13,.122,.05)],12,!1,!1),e.build()}var Pp=kp(-.105),Fp=-Math.atan2(Ep.d[0],Ep.d[1]);function Ip(){let e=new bu(512);e.reset(0,0,0,0);let t=Ep.d,n=Math.cos(-Fp),r=Math.sin(-Fp),i=e=>[e[0]*n-e[1]*r,e[0]*r+e[1]*n,e[2]],a=(e,t,n,r,a)=>({c:i([e-Pp[0],t-Pp[1],0]),u:[0,0,n],v:i(r),back:a,sq:1.2});return xp(e,Y.smock,.7),Rd(e,[a(_p[0]-.045,_p[1]-.06,.17,[.1,-.027,0],.85),a(Pp[0],Pp[1],.192,[t[1]*.132,-t[0]*.132,0],.118/.132)],16,!1,!1,(e,t)=>.86+.14*Math.sin(t*Math.PI*2)-(e<1?.24:.08)),e.build()}var Lp=.27,Rp=.25,zp=.18;function Bp(e){let t=new bu(1024);return t.reset(0,0,0,0),xp(t,Y.smock,e),Bd(t,[0,0,0],[Lp,0,0],[[0,.074],[.45,.068],[1,.058]],10),t.build()}function Vp(e){let t=new bu(1024);return t.reset(0,0,0,0),xp(t,Y.smock,e),K(t,0,0,0,.06,.06,.06,8,5),Bd(t,[0,0,0],[.135,0,0],[[0,.058],[.5,.053],[1,.046]],10),xp(t,Y.smockLight,.2),Bd(t,[.125,0,0],[.15,0,0],[[0,.05],[1,.05]],9),xp(t,Y.skin,.3,.6),Bd(t,[.15,0,0],[.176,0,0],[[0,.034],[1,.035]],8),t.build()}function Hp(e,t){let n=new bu(2048);n.reset(0,0,0,0);let r=1.22,i=[-.037*r,-.0125*r,.0125*r,.037*r];if(xp(n,Y.skin,.3,.6),K(n,.004,0,0,.037,.035,.037,8,5),t){K(n,.052*r,0,0,.05*r,.019*r,.05*r,10,6);let t=e>0?[.078,.092,.086,.066]:[.066,.086,.092,.078];for(let e=0;e<4;e++)Bd(n,[.088*r,.001,i[e]],[(.088+t[e])*r,-.013*r,i[e]*1.1],[[0,.0138*r],[1,.0112*r]],6);Bd(n,[.022*r,-.004,-e*.044*r],[.078*r,-.01*r,-e*.094*r],[[0,.0158*r],[1,.0125*r]],6)}else{K(n,.047*r,.005,0,.05*r,.028*r,.05*r,10,6);for(let e=0;e<4;e++)K(n,.09*r,.002,i[e],.017*r,.017*r,.0135*r,6,4),Bd(n,[.094*r,-.004*r,i[e]],[.086*r,-.05*r,i[e]],[[0,.0138*r],[1,.013*r]],6),Bd(n,[.086*r,-.052*r,i[e]],[.046*r,-.058*r,i[e]],[[0,.013*r],[1,.012*r]],6);Bd(n,[.02*r,-.014*r,-e*.05*r],[.082*r,-.04*r,-e*.028*r],[[0,.0162*r],[1,.013*r]],6)}return n.build()}function Up(){let e=new bu(8192);e.reset(0,0,0,0);let t=Dp[0]-Ep.top[0],n=Dp[1]-Ep.top[1];xp(e,Y.skin,.3,.7),Bd(e,[-.004,-.03,0],[t-.03,n-.09,0],[[0,.054],[1,.048]],10),K(e,t,n,0,.106,.12,.097,14,10),K(e,t+.034,n-.058,0,.074,.07,.079,12,8),xp(e,Y.skinShade,.5,.6),K(e,t+.108,n-.022,0,.026,.032,.02,8,5);for(let r of[-1,1])K(e,t-.006,n-.012,r*.097,.018,.032,.014,6,5);K(e,t+.086,n+.034,0,.022,.013,.066,10,5);for(let r of[-1,1]){let i=t+.0935,a=n+.01,o=r*.043;e.color(Y.eyeWhite).data(W.PLAIN,.1,.3,0),K(e,i,a,o,.0065,.0072,.0135,8,5),e.color(Y.iris).data(W.PLAIN,.1,.3,0),K(e,i+.0035,a-2e-4,o-r*3e-4,.0048,.0066,.0068,7,5),e.color(Y.eye).data(W.PLAIN,.1,.3,0),K(e,i+.0066,a-2e-4,o-r*3e-4,.0026,.0034,.0034,6,4),xp(e,Y.skin,.3,.7),K(e,i-5e-4,a+.0076,o,.0088,.0048,.0152,8,4),K(e,i-.001,a-.0072,o,.0068,.0024,.0124,8,3)}xp(e,Y.hair,.55,.7);for(let r of[-1,1])K(e,t+.097,n+.0325,r*.041,.016,.0058,.023,6,3);K(e,t+.05,n-.086,0,.074,.078,.084,12,8),K(e,t+.098,n-.05,0,.026,.016,.05,8,4),K(e,t-.04,n-.01,0,.082,.098,.099,12,8);for(let r of[-1,1])K(e,t+.02,n-.04,r*.088,.03,.05,.02,6,5);let r=n+.064,i=.07;xp(e,Y.hat,.9,.9),Vd(e,[t+.01,r,0],.098,.255,22,.034,i,1),xp(e,Y.hatShade,.6,.9),Vd(e,[t+.01,r-.006,0],.098,.25,22,.034,i,.7),xp(e,Y.hat,.9,.9);let a=(e,n)=>({c:[t+.01,r+e,0],u:[n,-n*i,0],v:[0,0,n*.95]});Rd(e,[a(-.004,.106),a(.05,.102),a(.09,.092),a(.106,.064)],16,!1,!0),xp(e,Y.band,.2,.8),Rd(e,[a(.002,.109),a(.036,.107)],16,!1,!1),xp(e,Y.scarf,.8,.8);let o=(e,t)=>({c:[.012+e*.3,e-.012,0],u:[t,0,0],v:[0,0,t*1.05]});return Rd(e,[o(-.03,.094),o(0,.088),o(.035,.078),o(.055,.066)],14,!1,!1),e.build()}function Wp(e){let t=new bu(1024);t.reset(0,0,0,0),xp(t,Y.trousers,e);let n=.074,r=[...[90,70,50,30,12].map(e=>{let t=e*Math.PI/180;return[-.094*Math.sin(t),.097*Math.cos(t),Math.sin(t)]}),[0,.097,0],[.06,.097,0],[vp*.3,.095,0],[vp*.75,.082,0],[vp,n,0],[.4733,n*.82,-.5],[.4992,n*.42,-.85]],i=[],a=0;r.forEach(([e,n,o],s)=>{s>0&&(a+=Math.hypot(e-r[s-1][0],n-r[s-1][1]));let c=Math.sqrt(1-o*o),l=[];for(let r=0;r<=12;r++){let i=r/12*Math.PI*2,s=Math.cos(i),u=Math.sin(i);l.push(t.vert(e,s*n,u*n,-o,s*c,u*c,r/12*Math.PI*2*Math.max(n,e<0?.097:0),a,1))}i.push(l)});for(let e=0;e<i.length-1;e++)for(let n=0;n<12;n++){let r=i[e][n],a=i[e][n+1],o=i[e+1][n+1],s=i[e+1][n];t.tri3(r,a,o),t.tri3(r,o,s)}let o=r.length-1,s=t.vert(r[o][0],0,0,1,0,0,0,a,1);for(let e=0;e<12;e++)t.tri3(s,i[o][e],i[o][e+1]);return t.build()}function Gp(e){let t=new bu(1024);return t.reset(0,0,0,0),xp(t,Y.trousers,e),K(t,0,0,0,.078,.078,.076,10,6),Bd(t,[0,0,0],[.39999999999999997,0,0],[[0,.072],[.3,.076],[.72,.058],[1,.05]],12),xp(t,Y.boot,.2,.7),Bd(t,[.35,0,0],[yp,0,0],[[0,.056],[1,.052]],10),t.build()}function Kp(e=!0){let t=new bu(1024);t.reset(0,0,0,0),xp(t,Y.boot,.2,.7);let n=(e,t,n,r)=>({c:[e,r,0],u:[0,0,t],v:[0,n,0],sq:1.5,back:.75});return Rd(t,[n(-.085,.034,.04,0),n(-.05,.048,.056,.004),n(.02,.052,.052,0),n(.09,.058,.042,-.006),n(.16,.052,.034,-.012),n(.205,.034,.024,-.016)],12,!0,!0,(e,t)=>t>.5?.6:1),e&&(t.color(Y.metal).data(W.PLAIN,.3,.3,0),Ld(t,.03,-.052,0,.095,.02,.105)),t.build()}function qp(){let e=new bu(256);return e.reset(0,0,0,0),e.color(Y.metal).data(W.PLAIN,.3,.3,0),Ld(e,hp,0,.135,.095,.02,.105),Ld(e,-.17,0,-.135,.095,.02,.105),e.build()}var Jp=10;function Yp(){let e=new bu(256);e.reset(0,0,0,0),xp(e,Y.scarf,.8,.8);for(let t=0;t<2;t++){let t=e.nv;for(let t=0;t<=Jp;t++)e.vert(0,0,0,0,0,1,0,t*.085,1-t/Jp*.25),e.vert(0,0,0,0,0,1,.075,t*.085,1-t/Jp*.25);for(let n=0;n<Jp;n++){let r=t+n*2;e.tri3(r,r+1,r+3),e.tri3(r,r+3,r+2)}}let t=e.build();return t.getAttribute(`position`).setUsage(He),t}function Xp(e){let t=new bu(4096);t.reset(0,0,0,0);let n=e?-1:1,r=(e,r,i)=>t.pl(e,r,i*n),i=e=>e<.42?[e/.42*-.06,e/.42*.16,e/.42*.62]:[-.06-.2*((e-.42)/.58),.16-.1*((e-.42)/.58),.62+.86*((e-.42)/.58)];xp(t,Y.feather,.5,1.2),Bd(t,[0,0,0],[-.06,.16,.62*n],[[0,.045],[1,.034]],8),Bd(t,[-.06,.16,.62*n],[-.26,.06,1.48*n],[[0,.034],[1,.016]],8);let a=(e,n,a,o,s,c)=>{let[l,u,d]=i(e),f=Math.hypot(o[0],o[1],o[2]),p=o[0]/f,m=o[1]/f,h=o[2]/f,g=-h,_=p,v=Math.hypot(g,_)||1;g/=v,_/=v,t.color(c);let y=r(l-g*a*.5,u+s,d-_*a*.5),b=r(l+g*a*.5,u+s,d+_*a*.5),x=l+p*n*.7,S=u+s+m*n*.7,C=d+h*n*.7,w=r(x-g*a*.56,S,C-_*a*.56),T=r(x+g*a*.56,S,C+_*a*.56),E=r(l+p*n,u+s+m*n,d+h*n);t.quad(y,b,T,w,0,0,a,n*.7,1,1,.92,.92),t.tri(w,T,E,0,n*.7,a,n*.7,a/2,n,.92,.92,.8)};for(let e=0;e<13;e++){let t=.1+e/12*.9,n=e%3==0?Y.featherGold:e%3==1?Y.feather:Y.featherBlue;a(t,.5+.62*t**.8,.2-.07*t,[-1,-.1-.1*t,.1+1.25*t*t],-.01*e,n)}for(let e=0;e<9;e++){let t=.06+e/8*.86;a(t,.26+.12*t,.19,[-1,-.04,.2+.7*t*t],.02,e%2?Y.feather:Y.featherBlue)}return t.build()}var Zp=()=>new di({uniforms:{uBend:{value:0},uBendCenter:{value:new B},uAlpha:{value:.55}},vertexShader:`
    uniform float uBend; uniform vec3 uBendCenter; varying vec2 vUv;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vec2 d = wp.xz - uBendCenter.xz;
      wp.y += uBend * dot(d, d);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`,fragmentShader:`
    precision highp float; uniform float uAlpha; varying vec2 vUv;
    void main() {
      vec2 c = vUv * 2.0 - 1.0;
      float a = smoothstep(1.0, 0.2, length(c)) * uAlpha;
      gl_FragColor = vec4(0.004, 0.006, 0.030, a);
    }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function Qp(e,t,n){let r=new mn,i=new mn;r.add(i);let a=e=>{let n=new Vr(e,t);return n.frustumCulled=!1,n},o=.85,s=new mn;s.position.y=o,r.remove(i),r.add(s),s.add(i);let c=new mn;c.position.set(pp[0],0,0);let l=a(Cp());l.position.x=-pp[0];let u=a(Sp());u.position.set(lp[0]-pp[0],lp[1],0);let d=new mn;d.position.set(pp[0],pp[1],0);let f=a(wp()),p=a(Sp());p.position.set(up[0]-pp[0],up[1]-pp[1],0),d.add(f,p);let m=a(Tp());m.position.set(dp[0]-pp[0],dp[1],0);let h=a(qp());h.visible=!1,m.add(h),c.add(l,u,m);let g=new mn;g.add(c,d);let _=new mn;_.position.set(_p[0],_p[1],0);let v=a(Ap());v.position.set(-_p[0],-_p[1],0);let y=a(Up());y.position.set(Ep.top[0]-_p[0],Ep.top[1]-_p[1],0);let b=a(Yp());b.position.copy(v.position);let x=a(Ip());x.position.set(Pp[0]-_p[0],Pp[1]-_p[1],0),x.rotation.z=Fp;let S=new mn,C=a(Np());S.add(C),_.add(S);let w=new B(Ep.d[0],Ep.d[1],0),T=a(jp(!1)),E=a(jp(!0));T.position.copy(v.position),E.position.copy(v.position),E.visible=!1,_.add(T,E);let D=new ht,O=new Yt(0,0,0,`YXZ`);_.add(v,y,b),i.add(g,_);let k=[];for(let e of[-1,1]){let t=a(Bp(.75+e*.08)),n=a(Vp(.75+e*.08)),r=new mn;r.position.x=zp;let o=a(Hp(e,!1)),s=a(Hp(e,!0));s.visible=!1,r.add(o,s),n.add(r),i.add(t,n),k.push({side:e,upper:t,fore:n,hand:r,fist:o,open:s})}let A=[];for(let e of[-1,1]){let t=a(Wp(.4+e*.1)),n=a(Gp(.6+e*.1)),r=a(Kp()),o=a(Kp(!1));o.visible=!1,i.add(t,n,r,o),A.push({side:e,thigh:t,shin:n,foot:r,boot:o})}let j=[];for(let e of[-1,1]){let t=new mn;t.position.set(-.2,1.2,e*.1);let r=a(Xp(e<0)),i=new xu(4);i.reset(0,0),i.addLocal(-.26,.06,1.48*e,.3,[.85,.92,1],1.4,3,.4),i.addLocal(-.06,.16,.62*e,.22,[1,.92,.7],1,3,.8);let o=new Vr(i.build(),n);o.frustumCulled=!1,o.renderOrder=61,t.add(r,o),t.scale.setScalar(1e-4),t.visible=!1,_.add(t),j.push({side:e,pivot:t})}let M=0,ee=new xu(4);ee.reset(0,0),ee.addLocal(pp[0]+.17,pp[1]-.12,0,.5,[1,.85,.55],1.5,3,.2),ee.addLocal(lp[0]-.4,lp[1]+.18,0,.17,[1,.1,.04],.85,3,.7);let N=new Vr(ee.build(),n);N.frustumCulled=!1,N.renderOrder=61,g.add(N);let te=Zp();te.uniforms.uBend=e.uBend,te.uniforms.uBendCenter=e.uBendCenter;let P=new Vr(new ni(2,1).rotateX(-Math.PI/2),te);P.frustumCulled=!1,P.renderOrder=4,r.add(P);let F=b.geometry.getAttribute(`position`),ne=[Ep.top[0]-.05,Ep.top[1]+.012],re=0,ie=new B,ae=new B,oe=new B,se=new B,I=new B,ce=new B,le=new B,ue=new B,de=new B(1,0,0),fe=new B(0,1,0),pe=new B(0,0,1),me=new B,he=new B,ge=new zt,_e=new B,ve=new ht,ye=new ht,be={q:new ht().setFromRotationMatrix(new zt().makeBasis(new B(.7071,0,.7071),new B(0,1,0),new B(-.7071,0,.7071))),wrist:new B(-.105,.038,-.115)},L={t:0,stand:0,superK:0,noHand:0,whipK:0,cheer:0,hat:0,foot:0,grabL:0,grabR:0,bail:0,look:0,walk:0,hang:0,tuck:0,twist:0,climb:0},xe=new B;function Se(e,t,n,r,i,a=Rp){se.subVectors(n,t);let o=se.length(),s=Lp+a-.006;o=Math.min(Math.max(o,.07),s),se.normalize();let c=(Lp*Lp-a*a+o*o)/(2*o),l=Math.sqrt(Math.max(Lp*Lp-c*c,0));I.copy(r).addScaledVector(se,-r.dot(se)),I.lengthSq()<1e-6&&I.set(0,-1,0),I.normalize(),oe.copy(t).addScaledVector(se,c).addScaledVector(I,l),e.upper.position.copy(t),e.upper.quaternion.setFromUnitVectors(de,ce.subVectors(oe,t).normalize()),ce.copy(t).addScaledVector(se,o).sub(oe).normalize(),e.fore.position.copy(oe),me.copy(i).addScaledVector(ce,-i.dot(ce)),me.lengthSq()<.02&&me.set(-1,0,0).addScaledVector(ce,ce.x),me.normalize(),he.crossVectors(ce,me),e.fore.quaternion.setFromRotationMatrix(ge.makeBasis(ce,me,he))}return{root:r,tilt:i,steer:d,shadow:P,pose(e){let t=e.dt||.016,n=e.speed||0,r=e.air>0;L.t+=t,L.stand=Hc(L.stand,e.sprint&&!r?1:0,7,t),L.superK=Hc(L.superK,+(e.trickPose===1),13,t),L.noHand=Hc(L.noHand,+(e.trickPose===2),13,t),L.whipK=Hc(L.whipK,+(e.trickPose===3||Math.abs(e.whip||0)>.15),13,t),L.cheer=Hc(L.cheer,+!!e.cheer,e.cheer?10:5,t),L.bail=Hc(L.bail,+!!e.bail,10,t),L.foot=Hc(L.foot,+(n<.4&&!r&&!e.walk),6,t),L.walk=e.park&&e.park.snap?+!!e.walk:Hc(L.walk,+!!e.walk,7,t);let a=L.walk,l=e.stride||0;L.hang=Hc(L.hang,e.walk&&r?1:0,9,t),L.tuck=Hc(L.tuck,e.walk&&r?Rc(Math.abs(e.flipV||0)/4.5,0,1):0,11,t),L.twist=Hc(L.twist,e.walk&&r?Rc(Math.abs(e.spinV||0)/4.5,0,1):0,11,t),L.climb=Hc(L.climb,e.walk&&e.scramble?1:0,12,t);let f=a*Math.min(1,n/1.2),v=Math.min(.34,.2+.03*n),b=Rc((n-3.2)/2,0,1);L.hat=Hc(L.hat,+((n>17||(e.hyper||0)>.4)&&!r&&L.cheer<.3&&L.stand<.5),4,t),L.grabL=Hc(L.grabL,+(e.grab<0),e.grab<0?24:9,t),L.grabR=Hc(L.grabR,+(e.grab>0),e.grab>0?24:9,t),L.look=Hc(L.look,Rc(e.look||0,-1.1,1.1),5,t);let x=e.squash||0,ee=L.bail*Math.sin(L.t*23)*.35;u.rotation.z=-e.wheel,p.rotation.z=-e.wheel,m.rotation.z=-e.crank,d.rotation.y=(-e.steer*.42+ee)*(1-a)+.34*a;let N=Math.sin(e.crank)*.115*L.stand;if(i.rotation.set(e.lean+N-L.foot*.07+ee*.2,0,e.pitch,`YZX`),i.position.y=e.bob-o,s.rotation.set(0,-(e.spin||0),e.flip||0,`YZX`),a>.001&&e.park){i.updateWorldMatrix(!0,!1),i.worldToLocal(xe.set(e.park.x,e.park.y,e.park.z));let t=a*a*(3-2*a);g.position.copy(xe).multiplyScalar(t),i.getWorldQuaternion(ve).invert().multiply(D.setFromEuler(O.set(.1,e.park.yaw,0))),g.quaternion.identity().slerp(ve,t)}else g.position.set(0,0,0),g.quaternion.identity();h.visible=a>.5,E.visible=a>.5,T.visible=!E.visible,c.rotation.y=-(e.whip||0);let oe=_p[0]+.11*L.stand-.27*L.superK+.17*a,se=_p[1]+.15*L.stand+.3*L.superK-.11*x+.05*L.whipK+a*(-.012-.05*b*(1-L.hang)+.014*f*Math.cos(l*2)-.13*x);_.position.set(oe,se,0);let I=Math.sin(e.crank)*.04*Math.min(1,n/4)*(e.flying?.3:1)*(1-L.superK)*(1-a),ce=a*(.66-.04*n*(1-L.hang)-.85*L.tuck-.12*L.climb+.06*L.twist),de=(r?.08:0)-Math.abs(I)*.3-.24*L.stand-.82*L.superK+.2*L.cheer+.16*L.noHand-.14*x+.1*L.foot+.05*L.hat+ce;{let e=a*a*(3-2*a),t=Ep.d;S.position.set(Mp[0]-_p[0]-t[0]*.13*e,Mp[1]-_p[1]-t[1]*.13*e,0),S.quaternion.setFromAxisAngle(w,-.42*e),C.position.set(-Mp[0]-t[1]*.07*e,-Mp[1]+t[0]*.07*e,0)}_.rotation.set(I-e.steer*.1*(1-a)-N*.7,e.steer*.1*(1-a)-L.look*.12*(1-.6*a)+.07*f*Math.sin(l),de,`YZX`);let me=L.foot*Math.sin(L.t*.6)*.5,he=-e.steer*(.32-.14*a)-L.look*.75+me;y.rotation.set(-I*.8+N*.3,0,-e.pitch*.5-de*.75-ce*.02-.7*L.tuck*a+(e.flying?.12:0)+.12*L.cheer,`YZX`),ve.setFromAxisAngle(pe,-ce),ye.setFromAxisAngle(fe,he),ve.multiply(ye).multiply(ye.setFromAxisAngle(pe,ce)),y.quaternion.premultiply(ve),y.position.set(Ep.top[0]-_p[0]-.035*a,Ep.top[1]-_p[1]+.012*a,0),_.updateMatrix(),ue.set(Dp[0]-_p[0],Dp[1]-_p[1]+.15,0).applyMatrix4(_.matrix);for(let e of k){let t=e.side;ie.set(Op[0]-_p[0],Op[1]-_p[1],t*Op[2]).applyMatrix4(_.matrix),ae.set(bp[0]-pp[0],bp[1]+.045-pp[1],t*bp[2]).applyAxisAngle(fe,d.rotation.y),ae.x+=pp[0],ae.y+=pp[1],le.set(-.25,-.7,t*.75);let r=(e,t,n,r)=>{e>.001&&(ae.x+=(t-ae.x)*e,ae.y+=(n-ae.y)*e,ae.z+=(r-ae.z)*e)};if(r(L.noHand,ie.x-.02,ie.y+.2,ie.z+t*.5),a>.001){let e=-Math.sin(l+(t>0?0:Math.PI))*f;t<0&&e<0&&(e*=.7);let i=.05+.22*b+e*(.34+.05*n),o=.492-.14*b,s=ie.x+Math.sin(i)*o,c=ie.y-Math.cos(i)*o,u=ie.z+t*(t<0?.1:.04),d=(e,t,n,r)=>{s+=(t-s)*e,c+=(n-c)*e,u+=(r-u)*e};d(L.hang,ie.x+.07,ie.y-.11,ie.z+t*.33),d(L.twist,ie.x+.17,ie.y-.2,t*.04),d(L.tuck,oe+.31,se-.19,t*.15),d(L.climb,ie.x+.27,ie.y+.27+.17*Math.sin(L.t*9+(t>0?0:Math.PI)),ie.z+t*.02),r(a,s,c,u)}let i=t<0?L.hat:0;i>.001&&(ie.y+=.06*i,ie.z+=.015*i),r(i,ue.x+be.wrist.x,ue.y+be.wrist.y,ue.z+be.wrist.z),t>0&&r(L.cheer,ie.x+.1,ie.y+.41+.055*Math.sin(L.t*11),ie.z+.16);let o=t<0?L.grabL:L.grabR;r(o,ie.x+.22,ie.y+.02,ie.z+t*.44),r(L.bail*.8,ie.x+.1+.12*Math.sin(L.t*19+t),ie.y+.25+.15*Math.sin(L.t*17+t*2),ie.z+t*.4);let s=Math.min(1,L.noHand+(t>0?L.cheer:0)+L.bail);s+i>.3?le.set(-.15,-.35,t*.95):a>.5&&le.set(-1+L.twist+.8*L.climb,.15-.75*L.twist-.65*L.climb,t*(.25+.6*L.twist+.6*L.climb)),_e.set(-.9*s+.2*a,(1-s)*(1-a),t*(.45*s+a)).normalize(),Se(e,ie,ae,le,_e,Rp-.07*i),e.hand.quaternion.identity(),i>.001&&e.hand.quaternion.slerp(ye.copy(e.fore.quaternion).invert().multiply(be.q),i);let c=Math.max(L.noHand,i,o,L.bail,a*L.climb,a*L.hang*(1-L.tuck)*(1-L.twist))>.5;e.open.visible=c,e.fist.visible=!c}for(let t of A){let n=e.crank+(t.side>0?0:Math.PI),r=dp[0]+Math.cos(-n)*hp,i=dp[1]+Math.sin(-n)*hp+.085,o=t.side*gp,s=1,c=oe,u=se-.03,d=(e,t,n,a)=>{e>.001&&(r+=(t-r)*e,i+=(n-i)*e,o+=(a-o)*e,s*=1-e)};if(d(L.superK,c-.86,u+.14,t.side*.1),d(L.whipK,c+.34,u-.36,t.side*.22),t.side<0&&d(L.foot,.06,.07,-.33),a>.001){let e=l+(t.side>0?0:Math.PI),n=t.side>0,r=c+Math.sin(e)*v*f,i=.052+Math.max(0,Math.cos(e))*(.1+.1*b)*f,o=t.side*.088,s=(e,t,n,a)=>{r+=(t-r)*e,i+=(n-i)*e,o+=(a-o)*e};s(L.hang,c+(n?.22:-.16),u-(n?.64:.77),t.side*.09),s(L.twist,c+.02,u-.885,t.side*.055),s(L.tuck,c+.25,u-.33,t.side*.1),s(L.climb,c+.31,u-.56+.17*Math.sin(L.t*9+(n?Math.PI:0)),t.side*.1),d(a,r,i,o)}d(L.bail*.6,c+.2+.2*Math.sin(L.t*15+t.side),u-.7,t.side*.3);let p=r-c,m=i-u,h=Math.hypot(p,m),g=.8979999999999999;h>g&&(p*=g/h,m*=g/h,h=g);let _=(vp*vp-yp*yp+h*h)/(2*h),y=Math.sqrt(Math.max(vp*vp-_*_,0)),x=c+p*_/h-m*y/h,S=u+m*_/h+p*y/h,C=c+p,w=u+m,T=(t.side*.129+o)/2+t.side*5e-4;t.thigh.position.set(c,u,t.side*.1),t.thigh.rotation.set(0,-Math.atan2(T-t.side*.1,vp),Math.atan2(S-u,x-c),`ZYX`),t.shin.position.set(x,S,T);let E=Math.atan2(w-S,C-x);t.shin.rotation.set(0,-Math.atan2(o-T,yp),E,`ZYX`),t.foot.position.set(C-.02*s,w-.035*s,o),t.foot.rotation.z=(-.22+.25*Math.sin(-n))*s+(E+1.25)*L.superK,t.boot.visible=a>.5,t.foot.visible=!t.boot.visible,t.boot.position.copy(t.foot.position),t.boot.rotation.z=t.foot.rotation.z}re+=t*(2.5+n*.9);let ge=Math.min(1,n/9),Ce=F.array;for(let t=0;t<2;t++){let n=t===0?-1:1;for(let r=0;r<=Jp;r++){let i=r/Jp,a=r*(.085-t*.012),o=i**1.3*(.05+.1*ge),s=re*(1+t*.17)-r*.85+t*1.9,c=-a*(.25+.75*ge),l=-a*(1-ge)*.95+a*ge*.1,u=ne[0]+c,d=ne[1]+l+Math.sin(s)*o,f=n*(.035+i*.05)+Math.cos(s*.83+1)*o*.9-e.steer*i*.16*ge,p=.036*(1-.35*i),m=(t*11+r)*6,h=Math.sin(s*.6)*.8;Ce[m]=u,Ce[m+1]=d-Math.cos(h)*p,Ce[m+2]=f-Math.sin(h)*p,Ce[m+3]=u,Ce[m+4]=d+Math.cos(h)*p,Ce[m+5]=f+Math.sin(h)*p}}F.needsUpdate=!0;let we=+!!e.wings;M+=(we-M)*Math.min(1,t*5);for(let t of j){t.pivot.visible=M>.002;let n=M<.5?2*M*M:1-(-2*M+2)**2/2;t.pivot.scale.setScalar(Math.max(1e-4,n*(1+.25*Math.sin(Math.min(M,1)*Math.PI))));let r,i;if(e.flying){let t=Math.sin(e.flap||0);r=e.climb?.1+t*.78:.16+t*.1,i=e.climb?-.1+Math.cos(e.flap||0)*.1:-.05}else r=1.12+Math.sin(re*.5)*.04,i=-.55;t.pivot.rotation.set(-t.side*r,t.side*i,0,`YXZ`)}te.uniforms.uAlpha.value=.55*Math.max(0,1-e.air*.25);let Te=1+e.air*.12;P.scale.set(Te*(1-.58*a),1,Te*(1-.25*a))},setLamp(e){t.uniforms.uDynLamp.value.copy(e)}}}var $p=8.2,em=15.5,tm=19,nm=9.4,rm=Math.PI*2,im=9.4,am=8.6,om=13,sm=8.5,cm=[``,`超人`,`空中脱把`,`甩尾`],lm=[``,``,`双重`,`三重`,`四重`],um=.34,dm=.6,fm=.28,pm=2.2,mm=6.4,hm=5.6,gm={floor:0,blocked:!1,roof:!1,hall:null,ceil:1/0},_m={steer:0,throttle:0,brake:0,trick:0,trickPressed:!1},vm=class{constructor(){this.reset()}reset(){let e=_l.bike;this.gx=e.gx,this.gz=e.gz,this.heading=e.heading,this.y=this.groundAt(this.gx,this.gz),this.vy=0,this.speed=0,this.steer=0,this.lean=0,this.pitch=0,this.grounded=!0,this.coyote=0,this.airTime=0,this.wheel=0,this.crank=0,this.bob=0,this.squash=0,this.onRoof=!1,this.hall=null,this.bump=0,this.landed=0,this.jumped=!1,this.distance=0,this.auto=!1,this.wings=!1,this.flying=!1,this.climbing=!1,this.flap=0,this.roadT=0,this.wingsFolded=!1,this.spin=0,this.flip=0,this.spinV=0,this.flipV=0,this.whip=0,this.pose=0,this.poseHeld=[0,0,0,0],this.poseCount=0,this.airTop=0,this.airRoof=!1,this.trick=null,this.bail=0,this.gv=0,this.launched=!1,this.lifting=!1,this.hyper=0,this.hyperK=0,this.walking=!1,this.stride=0,this.back=!1,this.scramble=!1,this.climbT=0,this.wallT=0,this.kicks=0,this.flipArm=!1,this.park=null,this.wx=0,this.wz=0,this.fx=0,this.fz=-1,this.syncWorld()}takeOff(e){this.vy=Math.max(this.vy,e),this.grounded=!1,this.lifting=!0}setWalking(e){return e===this.walking||this.auto||!this.grounded||e&&(this.wings||this.bail>0)?!1:(this.syncWorld(),e?(this.park={x:this.wx-this.fz*.55,y:this.y,z:this.wz+this.fx*.55,yaw:-this.worldHeading,snap:!1},this.speed=Math.min(this.speed,2),this.hyper=0,this.back=!1,this.stride=0):(this.park.snap=Math.hypot(this.park.x-this.wx,this.park.z-this.wz)>7||Math.abs(this.park.y-this.y)>1.5,this.speed=0),this.walking=e,this.steer=0,this.lean=0,this.spin=0,this.flip=0,this.whip=0,this.gv=0,this.pose=0,this.scramble=!1,this.climbT=0,this.wallT=0,this.kicks=0,!0)}walk(e,t){this.landed=0,this.bump=0,this.jumped=!1,this.launched=!1,this.sprinting=!1,this.steer=Hc(this.steer,t.steer,10,e),this.heading+=this.steer*2.9*e*(this.grounded?1:.3),this.hyper>0&&(this.hyper=0),this.bail>0&&(this.bail=Math.max(0,this.bail-e)),this.hyperK=Hc(this.hyperK,0,2.2,e);let n=t.brake>0&&!(t.throttle>0),r=t.throttle>0?t.trick>0?hm:3:n?1.5:0;this.grounded&&n!==this.back&&(this.speed>.15?r=0:this.back=n),this.grounded||(r=this.speed);let i=this.speed,a=r>i?9:13;this.speed=Rc(i+Rc(r-i,-a*e,a*e),0,hm);let o=this.back?-1:1;this.grounded?this.coyote=.12:this.coyote-=e,t.jumpPressed&&this.coyote>0?(this.vy=8.4,this.grounded=!1,this.lifting=!0,this.coyote=0,this.jumped=!0,this.airRoof=this.onRoof,this.flipArm=!1):t.jumpPressed&&!this.grounded&&this.wallT>0&&this.kicks<4&&(this.heading+=Math.PI,this.steer=0,this.vy=8,this.speed=hm,this.back=!1,this.wallT=0,this.kicks++,this.scramble=!1,this.jumped=!0,this.flipArm=!1),this.scramble&&(this.speed=Math.max(this.speed,3));let s=this.speed*e,c=Math.max(1,Math.ceil(s/.3)),l=Math.cos(this.heading)*s*o/c,u=Math.sin(this.heading)*s*o/c,d=this.grounded?this.onRoof?1.35:dm:fm;this.shut(this.gx,this.gz,d)&&this.unstick(d);let f=!1;for(let t=0;t<c;t++)if(!this.shut(this.gx+l,this.gz+u,d))this.gx+=l,this.gz+=u;else if(f=!0,!this.shut(this.gx+l,this.gz,d))this.gx+=l,this.speed*=1-Math.min(.9,4*e);else if(!this.shut(this.gx,this.gz+u,d))this.gz+=u,this.speed*=1-Math.min(.9,4*e);else{this.speed*=.5;break}this.distance+=s,this.grounded?(this.wallT=0,this.climbT=0,this.kicks=0):this.wallT=f&&o>0?.18:Math.max(0,this.wallT-e);let p=this.probe(this.gx,this.gz,this.y,d),m=p.floor,h=p.ceil;if(this.hall=p.hall&&this.y<p.hall.under?p.hall:null,this.onRoof=p.roof&&this.grounded,this.grounded&&(m<this.y-.7?(this.grounded=!1,this.vy=0,this.airRoof=p.roof):(this.y+=(m-this.y)*Math.min(1,22*e),this.vy=0)),this.grounded)this.airTime=0,this.scramble=!1,this.spin=Hc(this.spin,0,16,e),this.flip=Hc(this.flip,0,16,e),this.whip=0,this.spinV=0,this.flipV=0,this.pose=0;else{this.lifting&&=(this.y=Math.max(this.y,m),!1);let n=t.jump>0;if(this.scramble=this.wallT>0&&t.throttle>0&&this.climbT<pm&&this.vy>-9,this.scramble)this.climbT+=e,this.vy=Math.min(mm,Math.max(this.vy,0)+45*e);else{let t=this.vy>0?n?tm*.55:tm:n?tm*.42:tm*.9;this.vy=Math.max(this.vy-t*e,n?-9:-30)}this.y+=this.vy*e,this.y+1.75>h-.05&&(this.y=h-.05-Hu,this.vy>0&&(this.vy=-.5)),this.airTime+=e,this.airTime<=e*1.5&&(this.airTop=this.y),this.airTop=Math.max(this.airTop,this.y),t.throttle>0||(this.flipArm=!0);let r=!this.scramble&&this.wallT<=0;_m.steer=r?t.steer:0,_m.throttle=r&&this.flipArm?t.throttle:0,_m.brake=r?t.brake:0,this.tricks(e,_m,m),this.y<=m&&(this.landed=-this.vy,this.squash=Math.min(1,this.landed/14),this.y=m,this.vy=0,this.grounded=!0,this.land(m),this.airTime=0,this.scramble=!1)}this.flying=!1,this.climbing=!1,this.wingsFolded=!1,this.gv=0,this.pitch=Hc(this.pitch,0,10,e),this.lean=Hc(this.lean,0,8,e),this.squash=Hc(this.squash,0,7,e),this.bob=-this.squash*.1,this.grounded&&(this.stride+=o*this.speed*e*(Math.PI/2)/Math.min(.34,.2+.03*this.speed)),this.syncWorld()}groundAt(e,t){return Uu(e,t,-1e4,0,gm).floor}probe(e,t,n,r){let i=Wu(e,t,n,r,um);return Uu(e,t,n,r,gm),gm.blocked=gm.blocked||i,gm}shut(e,t,n){return Wu(e,t,this.y,n,um)}unstick(e){for(let t=.06;t<1.5;t*=1.4)for(let n=0;n<12;n++){let r=this.heading+Math.PI+(n%2?1:-1)*Math.ceil(n/2)*(Math.PI/6),i=this.gx+Math.cos(r)*t,a=this.gz+Math.sin(r)*t;if(!this.shut(i,a,e)){this.gx=i,this.gz=a;return}}}sidestep(e,t,n,r,i,a){let o=Math.abs(e)>Math.abs(t),s=+!o,c=+!!o,l=(o?t:e)>=0?1:-1;for(let o=1;o<=4;o++)for(let u=0;u<2;u++){let d=u?-l:l,f=d*o*.22,p=this.gx+s*f,m=this.gz+c*f;if(this.shut(p,m,i)||this.shut(p+n,m+r,i)||this.shut(p+e*.9,m+t*.9,i))continue;let h=d*Math.min(Math.abs(f),Math.max(a,.04)*1.3);if(!this.shut(this.gx+s*h,this.gz+c*h,i))return this.gx+=s*h,this.gz+=c*h,!0}return!1}update(e,t){if(this.walking&&this.auto&&(this.walking=!1,this.park&&(this.park.snap=!0)),this.walking)return this.walk(e,t);this.landed=0,this.bump=0,this.jumped=!1,this.launched=!1;let n=t.steer;this.auto&&(n=0),this.steer=Hc(this.steer,n,n===0?7:5.5,e);let r=this.speed,i=(2.5-1.05*Bc(4,16,r))*Math.max(Rc(r/2.2,0,1),Math.abs(n)>.1?.28:0);if(this.heading+=this.steer*i*e*(this.grounded?1:this.wings?.9:.3),this.grounded&&Math.abs(n)<.05&&r>1&&!this.onRoof){let t=Math.round(this.heading/(Math.PI/2))*(Math.PI/2),n=Uc(this.heading,t);Math.abs(n)<.5&&(this.heading+=n*Math.min(1,1.6*e)),this.centreInLane(e,t)}this.hyper>0&&(this.hyper=Math.max(0,this.hyper-e)),this.hyperK=Hc(this.hyperK,+(this.hyper>0),this.hyper>0?5:2.2,e),this.bail>0&&(this.bail=Math.max(0,this.bail-e));let a=1+.8*this.hyperK,o=this.wings&&!this.grounded&&!this.auto,s=!this.grounded&&!this.wings,c=(o?15:$p)*a;t.throttle>0&&!s&&(c=(o?25:em)*a),t.brake>0&&!s&&(c=o?7:0),s&&!this.auto&&(c=Math.max(r,$p*.8)),this.auto&&(c=this.autoSpeed??0),this.sprinting=this.grounded&&t.throttle>0&&!this.auto&&r>4;let l=this.pitch,u=(c>r?this.grounded?5.2:o?6:1.5:t.brake>0?11:3.2)*(1+1.2*this.hyperK);this.speed+=Rc(c-r,-u*e,u*e),this.grounded&&(this.speed-=Math.sin(l)*(this.onRoof?2:6.5)*e),this.speed=Rc(this.speed,0,32),this.grounded?this.coyote=.12:this.coyote-=e,t.jumpPressed&&this.coyote>0&&!this.auto&&(this.vy=(this.wings?7.5:nm)*(1+.12*this.hyperK),this.airRoof=this.onRoof,this.grounded=!1,this.lifting=!0,this.coyote=0,this.jumped=!0);let d=this.speed*e,f=Math.max(1,Math.ceil(d/.3)),p=Math.cos(this.heading),m=Math.sin(this.heading),h=p*d/f,g=m*d/f,_=this.grounded?this.onRoof?1.35:dm:fm;this.shut(this.gx,this.gz,_)&&this.unstick(_);for(let t=0;t<f;t++){if(!this.shut(this.gx+h,this.gz+g,_)){this.gx+=h,this.gz+=g;continue}let t=!this.shut(this.gx+h,this.gz,_),r=!this.shut(this.gx,this.gz+g,_),i=Math.abs(p)>Math.abs(m);if(!(i?t:r)&&!this.auto&&this.sidestep(p,m,h,g,_,d/f))continue;let a;if(t&&(!r||i))this.gx+=h,a=p>=0?0:Math.PI,this.bump=Math.max(this.bump,Math.abs(m)*this.speed);else if(r)this.gz+=g,a=m>=0?Math.PI/2:-Math.PI/2,this.bump=Math.max(this.bump,Math.abs(p)*this.speed);else{this.bump=Math.max(this.bump,this.speed),this.speed*=.5;let t=Math.abs(n)>.1?Math.sign(n):0;for(let e=1;e<=5&&!t;e++){let n=Math.cos(e*.5236),r=Math.sin(e*.5236),i=!this.shut(this.gx+(p*n-m*r)*.75,this.gz+(m*n+p*r)*.75,_);i===!this.shut(this.gx+(p*n+m*r)*.75,this.gz+(m*n-p*r)*.75,_)?i&&(t=this.turnSide||1):t=i?1:-1}this.turnSide=t||this.turnSide||1,this.heading+=this.turnSide*5.5*e;break}let o=Uc(this.heading,a);this.heading+=o*Math.min(1,9*e),this.speed*=1-Math.min(.9,Math.abs(Math.sin(o))*6*e)}this.distance+=d;let v=this.probe(this.gx,this.gz,this.y,_),y=v.floor,b=v.ceil,x=v.roof;if(this.hall=v.hall&&this.y<v.hall.under?v.hall:null,this.onRoof=v.roof&&this.grounded,this.grounded){let t=this.y+this.gv*e-.5*tm*e*e;if(y<this.y-.7)this.grounded=!1,this.vy=this.gv>2?this.gv:Math.min(this.vy,0),this.airRoof=x;else if(this.gv>2.4&&t-y>.06&&!this.auto)this.grounded=!1,this.vy=this.gv*1.12+.6,this.y=t,this.airRoof=x,this.launched=!0;else{let t=this.y;this.y+=(y-this.y)*Math.min(1,22*e),this.gv=Hc(this.gv,(this.y-t)/Math.max(e,1e-4),16,e),this.vy=0}}if(this.grounded)this.airTime=0,this.spin=Hc(this.spin,0,16,e),this.flip=Hc(this.flip,0,16,e),this.whip=Hc(this.whip,0,16,e),this.spinV=0,this.flipV=0,this.pose=0;else{this.lifting&&=(this.y=Math.max(this.y,y),!1);let n=t.jump>0&&!this.auto;if(this.wings){let t=this.groundAt(this.gx,this.gz)+85,r=n?26*Rc((t-this.y)/14,0,1):0;this.vy+=(r-9)*e,this.vy=Rc(this.vy,-5.5,10),this.flap+=e*(n?10.5:2.4),this.climbing=n}else{let t=this.vy>0?n?tm*.55:tm:n?tm*.42:tm*.9;this.vy-=t*e,this.vy=Math.max(this.vy,n?-9:-30)}this.y+=this.vy*e,this.y+1.75>b-.05&&(this.y=b-.05-Hu,this.vy>0&&(this.vy=-.5)),this.airTime+=e,this.airTime<=e*1.5&&(this.airTop=this.y),this.airTop=Math.max(this.airTop,this.y),this.tricks(e,t,y),this.y<=y&&(this.landed=-this.vy,this.squash=Math.min(1,this.landed/14),this.y=y,this.vy=0,this.grounded=!0,this.gv=0,this.land(y),this.airTime=0)}this.wingsFolded=!1,this.wings&&!this.auto&&(this.grounded&&!x?(this.roadT+=e,this.roadT>.16&&(this.wings=!1,this.wingsFolded=!0,this.roadT=0)):this.roadT=0),this.flying=this.wings&&!this.grounded,this.flying||(this.climbing=!1);let S=this.probe(this.gx+p*.6,this.gz+m*.6,this.y+.3,.9).floor,C=this.probe(this.gx-p*.6,this.gz-m*.6,this.y+.3,.9).floor,w=this.grounded?Math.atan2(Rc(S-C,-1.2,1.2),1.2):Rc(this.vy*.035,-.5,.45);this.pitch=Hc(this.pitch,w,this.grounded?10:4,e),this.lean=Hc(this.lean,this.steer*Rc(this.speed/9,0,1.3)*(this.flying?.62:.42),8,e),this.squash=Hc(this.squash,0,7,e),this.wheel+=this.speed*e/cp;let T=(this.grounded||this.flying)&&c>=r-.5&&c>.5;T&&(this.crank+=Rc(this.speed*.62,2,9)*e),this.bob=-this.squash*.1+(T?Math.sin(this.crank*2)*.008:0),this.syncWorld()}tricks(e,t,n){let r=!this.auto&&!this.wings&&this.airTime>.1&&(this.y-n>.8||this.airTime>.3),i=(e,t,n)=>Rc(-(e-Math.round(e/rm)*rm)*16,-n,n)||0,a=this.vy<-1&&this.y-n<-this.vy*.26,o=a?2.2:1,s=r&&!a&&Math.abs(t.steer)>.4?Math.sign(t.steer)*im:i(this.spin,this.spinV,im*o),c=r&&!a?+(t.brake>0)-(t.throttle>0):0,l=c===0?i(this.flip,this.flipV,am*o):c*am;this.spinV=Hc(this.spinV,s,a?40:16,e),this.flipV=Hc(this.flipV,l,a?40:16,e),this.spin+=this.spinV*e,this.flip+=this.flipV*e,r&&t.trickPressed&&(this.poseCount++,this.pose=(this.poseCount-1)%3+1),(!r||!t.trick)&&(this.pose!==3||Math.abs(this.whip-Math.round(this.whip/rm)*rm)<.2)&&(this.pose=this.pose===3&&t.trick?3:0),this.pose>0&&(this.poseHeld[this.pose]+=e),this.pose===3?this.whip+=om*e:Math.abs(this.whip-Math.round(this.whip/rm)*rm)>.05&&(this.whip+=Math.min(om*e,Math.ceil(this.whip/rm)*rm-this.whip))}peek(){let e=[],t=Math.trunc(this.flip/rm+Math.sign(this.flip)*.12),n=Math.trunc(this.spin/rm+Math.sign(this.spin)*.12);t!==0&&e.push(lm[Math.min(Math.abs(t),4)]+(t>0?`后空翻`:`前空翻`)),n!==0&&e.push(String(360*Math.abs(n)));for(let t=1;t<=3;t++)(t===3?this.whip>rm*.9:this.poseHeld[t]>.22)&&e.push(cm[t]);return e}land(e){let t=[],n=0,r=!0,i=this.spin/rm,a=this.flip/rm,o=Math.round(i),s=Math.round(a),c=Math.abs(i-o)*rm;if((Math.abs(a-s)*rm>1||c>1.5)&&(r=!1),s!==0){let e=Math.min(Math.abs(s),4);t.push(lm[e]+(s>0?`后空翻`:`前空翻`)),n+=120*e*(1+.25*(e-1))}if(o!==0){let e=Math.abs(o);t.push(String(360*e)),n+=80*e*(1+.2*(e-1))}for(let e=1;e<=3;e++)if(e===3?this.whip>rm*.9:this.poseHeld[e]>.22){let r=e===3?Math.round(this.whip/rm):1;t.push((r>1?lm[Math.min(r,4)]:``)+cm[e]),n+=e===3?100*r:60+50*Math.min(this.poseHeld[e],2)}let l=this.airTop-e;t.length===0&&l>6.5&&this.airTime>1.1&&(t.push(`高空滞空`),n+=40),t.length&&(n+=Math.max(0,l-3)*6,this.airRoof&&(n*=1.25),n*=1+.3*(t.length-1)),r||(this.bail=1,this.speed*=.45),this.trick=t.length||!r?{names:t,points:r?Math.round(n/10)*10:0,clean:r,combo:t.length,drop:l,roof:this.airRoof}:null,this.spin=(i-o)*rm,this.flip=(a-s)*rm,this.whip-=Math.round(this.whip/rm)*rm,this.spinV=0,this.flipV=0,this.pose=0,this.poseCount=0,this.poseHeld=[0,0,0,0],this.airRoof=!1}centreInLane(e,t){let n=fl(this.gx),r=pl(this.gz),i=cl(n),a=cl(n+1),o=ll(r),s=ll(r+1),c=this.gx>i+ul(n)&&this.gx<a-ul(n+1),l=this.gz>o+dl(r)&&this.gz<s-dl(r+1),u=Math.abs(Math.sin(t))>.5,d=Math.min(1,.55*e*(1+2.2*this.hyperK));if(u&&!c&&l){let e=this.gx<=i+ul(n)?i:a;this.gx+=(e-this.gx)*d*.6}else if(!u&&c&&!l){let e=this.gz<=o+dl(r)?o:s;this.gz+=(e-this.gz)*d*.6}}syncWorld(){let e=this.gx,t=this.gz;this.wx=ml(e,t),this.wz=hl(e,t);let n=.5,r=Math.cos(this.heading),i=Math.sin(this.heading),a=ml(e+r*n,t+i*n)-this.wx,o=hl(e+r*n,t+i*n)-this.wz,s=Math.hypot(a,o)||1;this.fx=a/s,this.fz=o/s,this.worldHeading=Math.atan2(this.fz,this.fx)}},ym={floor:0,blocked:!1,roof:!1},bm=class{constructor(){this.yaw=-Math.PI/2,this.frac=1,this.lift=0,this.y=0,this.pos={x:0,y:0,z:0},this.target={x:0,y:0,z:0},this.fov=70,this.shake=0,this.roll=0,this.clock=0}snap(e){this.yaw=e.heading,this.frac=1,this.lift=0,this.dist=void 0,this.y=e.y+1.6,this.update(.016,e,{lookYaw:0,lookPitch:0})}update(e,t,n){this.yaw+=Uc(this.yaw,t.heading)*Math.min(1,3.4*e);let r=this.yaw+n.lookYaw,i=Bc(6,16,t.speed),a=t.grounded?0:Math.max(0,t.y-t.groundAt(t.gx,t.gz)),o=t.flying?Math.min(1,.35+a/25):t.grounded?0:.55*Bc(2.5,9,a);this.air=Hc(this.air||0,o,2.5,e);let s=t.hyperK||0,c=n.zoom||1,l=(4.9+1.3*i+5.5*this.air-1.7*s)*c*(t.walking?.74:1);this.dist=this.dist===void 0?l:Hc(this.dist,l,6,e);let u=this.dist,d=((t.onRoof?2.3:1.58)+2.6*this.air-.32*s)*(.45+.55*c)+Math.sin(n.lookPitch)*u,f=Math.cos(r),p=Math.sin(r),m=t.gx,h=t.gz,g=t.y+1.35,_=-f*u,v=-p*u,y=d-1.35,b=e=>{for(let t=2;t<=9;t++){let n=t/9,r=g+(y+e)*n;if(Uu(m+_*n,h+v*n,r-.45,0,ym),ym.blocked||ym.floor>r-.4)return(t-1)/9}return 1},x=0,S=b(0);if(S<.8)for(let e of[2.6,5.2,8.5]){let t=b(e);if(t>S+.15&&(S=t,x=e),t>=.8)break}S=Math.max(S,.25),this.lift=Hc(this.lift||0,x,x>(this.lift||0)?6:1.4,e),this.frac=S<this.frac?Hc(this.frac,S,14,e):Hc(this.frac,S,2.2,e);let C=this.frac,w=m+_*C,T=h+v*C,E=g+(y+this.lift)*C+(1-C)*1.6;Uu(w,T,E,.2,ym),E=Math.max(E,ym.floor+.7),this.y=Hc(this.y,E,7,e),this.shake=Hc(this.shake,0,6,e),this.pos.x=ml(w,T),this.pos.z=hl(w,T),this.clock+=e,this.pos.y=this.y+this.shake*.12*Math.sin(this.clock*45);let D=3.6,O=t.gx+Math.cos(r)*D,k=t.gz+Math.sin(r)*D;this.target.x=ml(O,k),this.target.z=hl(O,k),this.target.y=t.y+2.05-Math.sin(n.lookPitch)*2-this.lift*.22-this.air*1.9,this.fov=72+12*i+5*this.air+15*s,this.roll=Hc(this.roll,-t.lean*(.18+.4*s)*(t.grounded?1:.3),5,e)}};function xm(e){let t=new Set,n={steer:0,throttle:0,brake:0,jump:0,jumpPressed:!1,trick:0,trickPressed:!1,lookYaw:0,lookPitch:0,looking:!1,lastLook:-10,zoom:1,zoomTo:1,any:!1},r=!1,i=!1,a=[`KeyA`,`ArrowLeft`],o=[`KeyD`,`ArrowRight`],s=[`KeyW`,`ArrowUp`],c=[`KeyS`,`ArrowDown`],l=[`KeyE`,`ShiftLeft`,`ShiftRight`],u=new Set([...a,...o,...s,...c,`Space`]),d=e=>!!(e.target&&e.target.closest&&e.target.closest(`#board`));window.addEventListener(`keydown`,e=>{e.metaKey||e.ctrlKey||e.altKey||d(e)||(u.has(e.code)&&e.preventDefault(),e.code===`Space`&&!e.repeat&&(r=!0),l.includes(e.code)&&!e.repeat&&(i=!0),t.add(e.code),n.any=!0)}),window.addEventListener(`keyup`,e=>t.delete(e.code)),window.addEventListener(`blur`,()=>t.clear());let f=null;e.addEventListener(`pointerdown`,t=>{t.pointerType!==`touch`&&(f={x:t.clientX,y:t.clientY,yaw:n.lookYaw,pitch:n.lookPitch},n.looking=!0,e.setPointerCapture(t.pointerId))}),e.addEventListener(`pointermove`,e=>{f&&e.pointerType!==`touch`&&(n.lookYaw=f.yaw+(e.clientX-f.x)*.0052,n.lookPitch=Math.max(-.5,Math.min(.9,f.pitch+(e.clientY-f.y)*.004)))});let p=e=>{e.pointerType!==`touch`&&(f=null,n.looking=!1,n.lastLook=performance.now()/1e3)};e.addEventListener(`pointerup`,p),e.addEventListener(`pointercancel`,p),e.addEventListener(`wheel`,e=>{e.preventDefault();let t=Math.max(-120,Math.min(120,e.deltaY*(e.deltaMode===1?32:1)*(e.ctrlKey?4:1)));n.zoomTo=Math.max(.5,Math.min(2.8,n.zoomTo*Math.exp(t*.0016)))},{passive:!1});let m=document.getElementById(`stick`),h=document.getElementById(`stick-knob`),g=null,_=null,v=null,y=0,b=!1,x=!1,S=!1,C=(e,t=0,n=0,r=0,i=0)=>{m&&(m.classList.toggle(`on`,e),e&&(m.style.left=`${t}px`,m.style.top=`${n}px`,h.style.transform=`translate(${r}px, ${i}px)`))},w=(e,t)=>Math.hypot(e.clientX-t.x,e.clientY-t.y);e.addEventListener(`touchstart`,e=>{e.preventDefault(),n.any=!0;for(let t of e.changedTouches)!g&&t.clientX<window.innerWidth*.5?(g={id:t.identifier,x0:t.clientX,y0:t.clientY},C(!0,t.clientX,t.clientY)):_?v||={id:t.identifier,d0:Math.max(30,w(t,_)),zoom0:n.zoomTo}:(_={id:t.identifier,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,yaw:n.lookYaw,pitch:n.lookPitch},n.looking=!0)},{passive:!1}),e.addEventListener(`touchmove`,e=>{e.preventDefault();for(let t of e.changedTouches){if(g&&t.identifier===g.id){let e=t.clientX-g.x0,n=t.clientY-g.y0,r=Math.hypot(e,n);r>54&&(e*=54/r,n*=54/r);let i=e/54,a=n/54;y=Math.abs(i)<.14?0:(i-Math.sign(i)*.14)/.86,b=a<-.4,x=a>.4,C(!0,g.x0,g.y0,e,n)}else _&&t.identifier===_.id&&(_.x=t.clientX,_.y=t.clientY,v||(n.lookYaw=_.yaw+(t.clientX-_.x0)*.0052,n.lookPitch=Math.max(-.5,Math.min(.9,_.pitch+(t.clientY-_.y0)*.004))));if(v&&_&&(t.identifier===v.id||t.identifier===_.id)){let r=t.identifier===v.id?t:[...e.touches].find(e=>e.identifier===v.id);r&&(n.zoomTo=Math.max(.5,Math.min(2.8,v.zoom0*v.d0/Math.max(30,w(r,_)))))}}},{passive:!1});let T=e=>{e.preventDefault();for(let t of e.changedTouches)g&&t.identifier===g.id&&(g=null,y=0,b=x=!1,C(!1)),v&&t.identifier===v.id&&(v=null),_&&t.identifier===_.id&&(_=null,v=null,n.looking=!1,n.lastLook=performance.now()/1e3)};e.addEventListener(`touchend`,T,{passive:!1}),e.addEventListener(`touchcancel`,T,{passive:!1}),((e,t,r)=>{let i=document.getElementById(e);if(!i)return;let a=e=>{i.classList.contains(`down`)&&(i.classList.remove(`down`),r()),e&&e.preventDefault()};i.addEventListener(`pointerdown`,e=>{e.preventDefault();try{i.setPointerCapture(e.pointerId)}catch{}i.classList.add(`down`),n.any=!0,t()}),i.addEventListener(`pointerup`,a),i.addEventListener(`pointercancel`,a),i.addEventListener(`lostpointercapture`,()=>a()),i.addEventListener(`contextmenu`,e=>e.preventDefault())})(`pad-jump`,()=>{S=!0,r=!0},()=>{S=!1});let E=e=>e.some(e=>t.has(e)),D={steer:0,throttle:!1,brake:!1,jump:!1,trick:!1,prev:[],lastT:0,looking:!1};n.onLeap=null,n.pad=!1;let O=e=>{window.dispatchEvent(new KeyboardEvent(`keydown`,{code:e,bubbles:!0})),window.dispatchEvent(new KeyboardEvent(`keyup`,{code:e,bubbles:!0}))},k=(e,t=.2)=>Math.abs(e)<t?0:(e-Math.sign(e)*t)/(1-t);function A(e){let t=Math.min(.1,Math.max(0,e-D.lastT));D.lastT=e,D.steer=0,D.throttle=D.brake=D.jump=D.trick=!1;let a=navigator.getGamepads?navigator.getGamepads():[],o=0,s=0,c=0,l=0,u=!1;for(let e of a){if(!e||!e.connected)continue;let a=t=>!!(e.buttons[t]&&(e.buttons[t].pressed||e.buttons[t].value>.35)),d=D.prev[e.index]||(D.prev[e.index]=[]),f=e=>a(e)&&!d[e];o+=k(e.axes[0]||0),s+=k(e.axes[1]||0),c+=k(e.axes[2]||0),l+=k(e.axes[3]||0),a(14)&&--o,a(15)&&(o+=1),a(7)&&(D.throttle=!0),a(6)&&(D.brake=!0),a(0)&&(D.jump=!0),(a(2)||a(5))&&(D.trick=!0),f(0)&&(r=!0,n.onLeap&&n.onLeap()),(f(2)||f(5))&&(i=!0);let p=!!document.querySelector(`#board:not(.hidden)`);f(1)&&O(p?`Escape`:`KeyF`),f(3)&&O(`KeyT`),f(4)&&O(`Tab`),f(9)&&O(`Enter`),f(8)&&O(`Escape`),a(12)&&(n.zoomTo=Math.max(.5,n.zoomTo*Math.exp(-1.2*t))),a(13)&&(n.zoomTo=Math.min(2.8,n.zoomTo*Math.exp(1.2*t)));for(let t=0;t<e.buttons.length;t++)d[t]=a(t),d[t]&&(u=!0);(o||s||c||l)&&(u=!0)}u&&(n.any=!0,n.pad=!0),D.steer=Math.max(-1,Math.min(1,o)),s<-.45&&(D.throttle=!0),s>.45&&(D.brake=!0),c||l?(n.lookYaw+=c*2.6*t,n.lookPitch=Math.max(-.5,Math.min(.9,n.lookPitch+l*1.8*t)),n.looking=D.looking=!0):D.looking&&(D.looking=!1,n.looking=!1,n.lastLook=e)}return n.update=e=>{A(e),n.steer=+!!E(o)-!!E(a)+y+D.steer,n.steer=Math.max(-1,Math.min(1,n.steer)),n.throttle=E(s)||b||D.throttle?1:0,n.brake=E(c)||x||D.brake?1:0,n.jump=t.has(`Space`)||S||D.jump?1:0,n.jumpPressed=r,r=!1,n.trick=E(l)||D.trick?1:0,n.trickPressed=i,i=!1,n.zoom+=(n.zoomTo-n.zoom)*.16,!n.looking&&e-n.lastLook>1.2&&(n.lookYaw*=.94,n.lookPitch*=.94,Math.abs(n.lookYaw)<.001&&(n.lookYaw=0),Math.abs(n.lookPitch)<.001&&(n.lookPitch=0))},n.clear=()=>{t.clear(),r=!1,i=!1,n.lookYaw=0,n.lookPitch=0},n}var Sm={steeple:{label:`尖塔`,color:`#ffd76a`,icon:`M12 2 L8.6 11.5 H15.4 Z M9.9 11.5 V21.5 H14.1 V11.5 M14.1 15 H20.5 V21.5 H14.1`},cafe:{label:`夜间咖啡馆`,color:`#ff9166`,icon:`M5 9.5 H17 V14.5 A6 6 0 0 1 5 14.5 Z M17 11 H19 A2.5 2.5 0 0 1 19 16 H16.7 M4.5 21.5 H17.5 M9 6.8 V4.2 M13 6.8 V4.2`},gallery:{label:`画廊`,color:`#a9d4ff`,icon:`M4 4.5 H20 V19.5 H4 Z M7 16.5 L10.5 11.5 L13 14.5 L15 12.5 L17.5 16.5 Z M15.3 8.4 A1.3 1.3 0 1 0 17.9 8.4 A1.3 1.3 0 1 0 15.3 8.4`},square:{label:`市集广场`,color:`#ffbf66`,icon:`M3.5 20.5 H20.5 M6 20.5 V17 H18 V20.5 M12 17 V8.5 M12 8.5 C9.4 5 6.6 7.6 7.4 11.6 M12 8.5 C14.6 5 17.4 7.6 16.6 11.6`},view:{label:`观景台`,color:`#9be7b4`,icon:`M12 2 C8.4 7 7.4 13 9.5 18.5 H14.5 C16.6 13 15.6 7 12 2 Z M12 18.5 V22`}},Cm=[`圣马丁`,`圣保罗`,`圣安妮`,`圣雷米`,`圣母`,`圣特罗菲姆`,`圣玛尔大`,`圣于连`,`圣塞泽尔`,`圣克莱尔`,`圣罗克`,`圣奥诺拉`,`圣文森`,`圣露西`],wm=[`车站咖啡馆`,`阿尔卡萨咖啡馆`,`广场咖啡馆`,`星辰咖啡馆`,`午夜咖啡馆`,`正午咖啡馆`,`拉马丁咖啡馆`,`朋友咖啡馆`,`月亮咖啡馆`,`罗讷咖啡馆`,`灯笼咖啡馆`,`台球咖啡馆`],Tm=[`鸢尾画廊`,`向日葵画廊`,`杏花画廊`,`橄榄画廊`,`柏树画廊`,`播种者画廊`,`麦田画廊`,`果园画廊`,`阿尔勒女子画廊`,`朱阿夫画廊`,`收获画廊`,`小桥画廊`],Em=[`论坛广场`,`拉马丁广场`,`共和国广场`,`竞技场广场`,`集市广场`,`香草广场`,`喷泉广场`,`伏尔泰广场`,`梧桐广场`,`正午广场`,`星辰广场`,`水井广场`],Dm=new Map,Om=[fl(_l.camGrid.gx),pl(_l.camGrid.gz)];function km(e,t,n,r,i,a,o){return{key:`${e}:${t}:${n}`,type:e,name:a,i:t,j:n,gx:r,gz:i,wx:ml(r,i),wz:hl(r,i),y:U(r,i),...o}}function Am(e,t){let n=e*65536+t,r=Dm.get(n);if(r)return r;Dm.size>2e4&&Dm.clear(),r=[];let i=Cl(e,t),a=Fc(Nc(e,t,60606)),o=e=>e[Math.floor(a()*e.length)];if(i===`plaza`){let n=Tu(e,t),i=e===0&&t===-1;if(n.church){let a=n.church;r.push(km(`steeple`,e,t,a.tx,a.tz,i?`教堂尖塔`:o(Cm),{home:i,top:a.baseY+a.towerH+a.spireH,sx:(a.nave.x0+a.nave.x1)/2,sz:a.tz}))}else{let i=n.solids.find(e=>e.fountain),a=i?(i.x0+i.x1)/2:n.cx,s=i?(i.z0+i.z1)/2:n.cz;r.push(km(`square`,e,t,a,s,o(Em),{top:U(a,s)+9}))}}else if(i===`town`){let n=e===-1&&t===-1;if(n||Pc(e,t,555)<.24){let i=Tu(e,t).hall;if(i){let a=(i.x0+i.x1)/2;r.push(km(i.theme,e,t,a,i.zc,n?`夜间咖啡馆`:o(i.theme===`cafe`?wm:Tm),{home:n,top:i.top+5}))}}}else if(e===Om[0]&&t===Om[1]){let{gx:n,gz:i}=_l.camGrid;r.push(km(`view`,e,t,n,i,`画家的小丘`,{home:!0,top:U(n,i)+10}))}return Dm.set(n,r),r}function jm(e,t,n,r=[]){let i=fl(e),a=pl(t);for(let e=i-n;e<=i+n;e++)for(let t=a-n;t<=a+n;t++){let n=Am(e,t);for(let e=0;e<n.length;e++)r.push(n[e])}return r}var Mm=160,Nm=[1,.84,.36],Pm=[1,.93,.7],Fm=[1,.92,.62],Im=13,Lm=12,Rm=[1,.95,.8],zm=[1,.42,.3],Bm=[.8,.9,1],Vm=[1,.8,.36],Hm=new Map;function Um(e){let t=Hm.get(e.key);if(t)return t;Hm.size>400&&Hm.clear(),t=[];let n=Fc(Nc(e.i,e.j,7313)),r=(r,i,a)=>t.push({gx:r,gz:i,y:U(r,i)+1.35+a,key:`${e.key}:${t.length}`,phase:n()*6.28,air:a>.5});if(e.type===`cafe`||e.type===`gallery`){let t=Tu(e.i,e.j).hall,n=t.x1-t.x0;r(t.x0+n*.2,t.zc+2.7,0),r(t.x0+n*.62,t.zc-2.7,1),r(t.x0+n*.84,t.zc+2.5,0)}else if(e.type===`steeple`){let t=Tu(e.i,e.j).church.nave,n=t.x1-t.x0;r(t.x0+n*.3,e.gz+2.5,0),r(t.x0+n*.56,e.gz-2.5,1.1),r(t.x0+n*.82,e.gz+2.5,0)}else{let t=e.type===`square`?4.6:3.8,i=n()*6.28;for(let n=0;n<3;n++){let a=i+n/3*6.28;r(e.gx+Math.cos(a)*t,e.gz+Math.sin(a)*t,n===1?1.1:0)}}return Hm.set(e.key,t),t}function Wm(e,t){let n=[],r=Fc(Nc(e,t,9917)),i=(i,a,o,s)=>n.push({gx:i,gz:a,y:o,key:`${e}:${t}:${s}`,phase:r()*6.28});for(let[n,r]of[[`x`,`a`],[`z`,`b`]]){let a=Lu(n,e,t);if(a.arch){let e=(a.arch.a0+a.arch.a1)/2,[t,o]=n===`x`?[a.c,e]:[e,a.c];i(t,o,a.arch.top+1.3,r+`arch`)}}let a=Tu(e,t);if(wl(a.kind)&&a.houses.length){let e=r()<.6?1:r()<.5?2:0;for(let t=0;t<e;t++){let e=a.houses[Math.floor(r()*a.houses.length)];if(e.church)continue;let n=(e.x0+e.x1)/2,o=(e.z0+e.z1)/2;i(n,o,Bu(e,n,o)+1.3,`r`+t)}}return n}function Gm(e,t,n,r,i,a){let o=fl(e),s=pl(t),c=null,l=1e9;for(let a=12;a<=42&&!c;a+=15)for(let u=o-a;u<=o+a;u++)for(let o=s-a;o<=s+a;o++){let a=Am(u,o);for(let o=0;o<a.length;o++){let s=a[o];if(i.has(s.key)||s.type!==`steeple`)continue;let u=s.gx-e,d=s.gz-t,f=Math.hypot(u,d);if(f<170)continue;let p=(u*n+d*r)/f,m=Math.abs(f-480)/480-p*.5;m<l&&(l=m,c=s)}}return c}function Km(e,t,n,r){if(e.type===`cafe`||e.type===`gallery`)return!!t.hall&&t.hall.key===`${e.i}:${e.j}`&&Math.abs(n-e.gx)<11;let i=Math.hypot(e.gx-n,e.gz-r);return e.type===`steeple`?Math.hypot(n-e.sx,r-e.sz)<2.5&&t.y<e.y+3.5:i<9.5&&!t.onRoof}var qm=e=>{let t=fl(e+.01);return Math.abs(cl(t)-e)<.5?t:t+1},Jm=e=>{let t=pl(e+.01);return Math.abs(ll(t)-e)<.5?t:t+1};function Ym(e,t){let n=e.blk;if(e.type===`steeple`){let r=t>e.gx?n.i+1:n.i;return{entryI:r,ex:cl(r),ez:e.gz,endX:e.sx}}let r=t>e.gx,i=r?n.i+1:n.i,a=e.type===`cafe`||e.type===`gallery`;return{entryI:i,ex:cl(i),ez:a?n.hall.zc:Rc(e.gz,n.z0+3,n.z1-3),endX:a?e.gx:e.gx+(r?3.6:-3.6)}}function Xm(e,t,n,r,i){let a=r.blk,{entryI:o,ex:s,ez:c,endX:l}=Ym(r,e),u=[],d=fl(e),f=pl(t),p=cl(d),m=cl(d+1),h=ll(f),g=ll(f+1),_=e>p+ul(d)&&e<m-ul(d+1),v=t>h+dl(f)&&t<g-dl(f+1),y,b=e,x=t;if(!_&&v)y=`x`,b=e<=p+ul(d)?p:m;else if(_&&!v)y=`z`,x=t<=h+dl(f)?h:g;else if(!_&&!v)b=e<=p+ul(d)?p:m,x=t<=h+dl(f)?h:g,y=Math.abs(Math.sin(n))>Math.abs(Math.cos(n))?`x`:`z`;else{let n=e-p,r=m-e,i=t-h,a=g-t,o=Math.min(n,r,i,a);o===n||o===r?(y=`x`,b=o===n?p:m):(y=`z`,x=o===i?h:g)}u.push([b,x]);let S=Math.cos(n),C=Math.sin(n),w,T,E;if(y===`x`){w=qm(b);let e=pl(x),t=ll(e),n=ll(e+1),r=Math.abs(C)>.3?C>0:Math.abs(n-c)<Math.abs(t-c);T=r?e+1:e,E=r?1:-1}else{T=Jm(x);let e=fl(b),t=cl(e),n=cl(e+1),r=Math.abs(S)>.3?S>0:Math.abs(n-s)<Math.abs(t-s);w=r?e+1:e,E=r?1:-1}u.push([cl(w),ll(T)]);let D=o,O=ll(T)<=c?a.j:a.j+1,k=y===`x`?`z`:`x`;y===`x`&&w===D&&Math.sign(O-T)===-E&&(w+=i()<.5?1:-1,u.push([cl(w),ll(T)]),k=`x`),y===`z`&&T===O&&Math.sign(D-w)===-E&&(T+=i()<.5?1:-1,u.push([cl(w),ll(T)]),k=`z`);let A=0;for(;(w!==D||T!==O)&&A++<120;)w===D?k=`x`:T===O&&(k=`z`),k===`z`?(w+=Math.sign(D-w)*Math.min(Math.abs(D-w),1+Math.floor(i()*2)),k=`x`):(T+=Math.sign(O-T)*Math.min(Math.abs(O-T),1+Math.floor(i()*2)),k=`z`),u.push([cl(w),ll(T)]);u.push([s,c]),u.push([l,c]);let j=[u[0]];for(let e=1;e<u.length;e++){let t=u[e],n=j[j.length-1];Math.hypot(t[0]-n[0],t[1]-n[1])>1&&j.push(t)}return Qm(j)}function Zm(e,t){let n=e.blk,r=Tu(-1,-1).hall,i=cl(0),a=cl(-1),o=ll(n.j);if(r)return[[i,t],[i,o],[a,o],[a,r.zc],[i,r.zc],[n.church.tower.x0-6,e.gz],[e.sx,e.gz]];let{ex:s,ez:c,endX:l}=Ym(e,i);return[[i,t],[i,o],[s,o],[s,c],[l,c]]}function Qm(e){for(let t=1;t<e.length-2;t++){let n=e[t-1],r=e[t],i=e[t+1],a=e[t+2];if(Math.abs(r[1]-i[1])>.5||Math.abs(n[0]-r[0])>.5||Math.abs(a[0]-i[0])>.5)continue;let o=qm(r[0]),s=qm(i[0]);if(Math.abs(o-s)!==1)continue;let c=Jm(r[1]);for(let e of[c-1,c]){let t=Tu(Math.min(o,s),e).hall;if(!t)continue;let c=(n[1]-t.zc)*(t.zc-r[1])>=0&&Math.abs(n[1]-r[1])>1,l=(t.zc-a[1])*(r[1]-a[1])>=0;if(c&&l){r[1]=t.zc,i[1]=t.zc;break}}}return e}function $m(e){let t=[],n=Im*1.6;for(let r=0;r<e.length-1;r++){let[i,a]=e[r],[o,s]=e[r+1],c=Math.hypot(o-i,s-a),l=n;for(;l<c;l+=Im)t.push([i+(o-i)*l/c,a+(s-a)*l/c]);n=l-c}let r=e[e.length-1];t.push([r[0],r[1]]);let i=t;for(let e=0;e<2;e++){let e=i.map(e=>[e[0],e[1]]);for(let t=1;t<i.length-1;t++)e[t][0]=(i[t-1][0]+2*i[t][0]+i[t+1][0])/4,e[t][1]=(i[t-1][1]+2*i[t][1]+i[t+1][1])/4;i=e}let a=[],o=i.length,s=e=>{if(e<1||e>o-2)return 0;let t=i[e][0]-i[e-1][0],n=i[e][1]-i[e-1][1],r=i[e+1][0]-i[e][0],a=i[e+1][1]-i[e][1];return(t*r+n*a)/(Math.hypot(t,n)*Math.hypot(r,a)||1)},c=new Float32Array(o);for(let e=5;e<o-6;e+=6+e*7%3)s(e-1)>.995&&s(e)>.995&&s(e+1)>.995&&s(e+2)>.995&&(c[e]=1.6,c[e+1]=2.5,e+2<o-4&&(c[e+2]=1.6));for(let e=0;e<o;e++){let t=i[Math.max(0,e-1)],n=i[Math.min(o-1,e+1)],r=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(r,s)||1,u=Math.sin(e*.9)*.8*Math.min(1,(o-1-e)/3)*(c[e]?.2:1),d=i[e][0]-s/l*u,f=i[e][1]+r/l*u,p=U(d,f)+1.15+c[e],m=c[e]>0,h=Tu(fl(d),pl(f)),g=h.church&&h.church.hall;g&&f>g.z0&&f<g.z1&&d>g.x0&&d<g.x1&&(p=U(d,f)+1.15,m=!1);let _=h.hall;if(_&&f>_.z0&&f<_.z1&&d>_.x0&&d<_.x1){p=U(d,f)+1.15,m=!1;for(let e of _.obstacles)d>e.x0-3.2&&d<e.x1+3.2&&f>e.z0-1.2&&f<e.z1+1.2&&(d=(e.x0+e.x1)/2,f=(e.z0+e.z1)/2,p=e.top+1.25,m=!0)}a.push({gx:d,gz:f,y:p,air:m,idx:e,taken:!1,phase:e*.7})}return a}function eh(e){let t=new Map,n=new Set,r=new Set,i=(e,n)=>{let r=e*65536+n,i=t.get(r);return i||(t.size>600&&t.clear(),i=Wm(e,n),t.set(r,i)),i},a=new _r,o=new Float32Array(1920),s=new Float32Array(1280),c=new Float32Array(2560),l=new Float32Array(1920),u=new Uint16Array(960);for(let e=0;e<Mm;e++){for(let t=0;t<4;t++){let n=e*4+t;s[n*2]=t===0||t===3?-1:1,s[n*2+1]=t<2?-1:1}u.set([e*4,e*4+1,e*4+2,e*4,e*4+2,e*4+3],e*6)}let d=new nr(o,3),f=new nr(c,4),p=new nr(l,3);d.setUsage(He),f.setUsage(He),p.setUsage(He),a.setAttribute(`position`,d),a.setAttribute(`aCorner`,new nr(s,2)),a.setAttribute(`aGlow`,f),a.setAttribute(`color`,p),a.setIndex(new nr(u,1));let m=new Vr(a,e);m.frustumCulled=!1,m.renderOrder=62;let h=0,g=(e,t,n,r,i,a,s,u)=>{if(h>=Mm)return;let d=h++;for(let f=0;f<4;f++){let p=d*4+f;o[p*3]=e,o[p*3+1]=t,o[p*3+2]=n,c[p*4]=r,c[p*4+1]=u,c[p*4+2]=s,c[p*4+3]=a,l[p*3]=i[0],l[p*3+1]=i[1],l[p*3+2]=i[2]}},_=[],v=(e,t,n,r,i=3,a=!1)=>{for(let o=0;o<r;o++){let r=Math.random()*6.28,o=Math.random()*2-.3,s=a?.6+Math.random()*1.6:2.5+Math.random()*4,c=a?.16+Math.random()*.16:.34+Math.random()*.26;_.push({x:e,y:t,z:n,vx:Math.cos(r)*s,vy:i+o*(a?1.2:4),vz:Math.sin(r)*s,life:c,life0:c,size:a?.1:.2})}},y={mesh:m,leg:0,target:null,visited:r,chosen:!1,trail:[],progress:0,lostFor:0,arrivedFor:-1,pendingNext:null,lastDir:[0,-1],info:{dist:0,bearing:0},prisms:[],prismTaken:new Set,prismCount(e){let t=0;for(let n of Um(e))y.prismTaken.has(n.key)&&t++;return t},emit(e,t,n,r=1,i=1){v(e,t,n,r,i,!0)},course:null,cleared:new Set,reset(){n.clear(),r.clear(),_.length=0,y.course=null,y.cleared.clear(),y.prismTaken.clear(),y.leg=0,y.target=null,y.trail=[],y.progress=0,y.arrivedFor=-1,y.lostFor=0,y.chosen=!1},setTarget(e,t,n=!1){let i=y.target;y.target={...e,blk:Tu(e.i,e.j),tx:e.gx,tz:e.gz,tipY:e.top,seen:r.has(e.key)};let a=i?i.tx:t.gx,o=i?i.tz:t.gz,s=Math.hypot(e.gx-a,e.gz-o)||1;y.lastDir=[(e.gx-a)/s,(e.gz-o)/s],y.arrivedFor=-1,y.reroute(t,n)},reroute(e,t=!1){let n=Fc(Nc(Math.round(e.gx),Math.round(e.gz),31+y.leg)),r=t?Zm(y.target,e.gz):Xm(e.gx,e.gz,e.heading,y.target,n);y.trail=$m(r),y.progress=0,y.lostFor=0},start(e){y.leg++,y.arrivedFor=-1,y.chosen=!1;let t=Am(th[0],th[1])[0];if(y.leg===1)y.setTarget(t,e,!0),y.lastDir=[0,-1];else{let n=y.target?y.target.type:null;y.setTarget(Gm(e.gx,e.gz,y.lastDir[0],y.lastDir[1],r,n)||t,e)}},choose(e,t){return y.target&&y.target.key===e.key&&y.arrivedFor<0?!1:(y.leg===0&&(y.leg=1),y.chosen=!0,y.setTarget(e,t),!0)},update(e,t,o,s){h=0;let c={orbs:0,strays:0,arrived:!1,found:null,side:0,prisms:0,prismAll:null},l=2+3.4*(o.hyperK||0),u=l*l,b=Math.cos(o.heading),x=Math.sin(o.heading);m.position.set(o.wx,0,o.wz);let S=o.gx,C=o.gz,w=o.y+1,T=C,E=fl(S),D=pl(C);for(let e=E-2;e<=E+2;e++)for(let r=D-2;r<=D+2;r++)for(let a of i(e,r)){if(n.has(a.key))continue;let e=a.gx-S,r=a.gz-C,i=e*e+r*r;if(i>22500)continue;let l=a.y+.16*Math.sin(t*1.7+a.phase);s&&i<3.24&&Math.abs(l-w)<2.3?(n.add(a.key),c.strays++,v(ml(a.gx,a.gz),l,hl(a.gx,a.gz),16)):g(ml(a.gx,a.gz)-o.wx,l,hl(a.gx,a.gz)-o.wz,1.5,Pm,2.4,2,a.phase)}let O=y.target;if(O&&y.arrivedFor<0){let n=y.trail,i=1e9;for(let e=y.progress;e<Math.min(n.length,y.progress+8);e++){let t=n[e],r=Math.hypot(t.gx-S,t.gz-C);r<i&&(i=r),r<10&&e>y.progress&&(y.progress=e)}let a=Math.max(0,y.progress-2),d=Math.min(n.length,y.progress+Lm);for(let e=a;e<d;e++){let r=n[e];if(r.taken)continue;let i=r.gx-S,a=r.gz-C,d=i*i+a*a,f=r.y+.14*Math.sin(t*2.1+r.phase);if(s&&d<u&&Math.abs(f-w)<(r.air?1.55:2.4)+(l-2)){r.taken=!0,c.orbs++,c.side=b*a-x*i>0?1:-1,e>y.progress&&(y.progress=e),v(ml(r.gx,r.gz),f,hl(r.gx,r.gz),7,2);continue}let p=e-y.progress,m=p<0?.3:1-.55*Bc(4,Lm,p),h=p>=0&&p<=1?1.12+.12*Math.sin(t*6):1;g(ml(r.gx,r.gz)-o.wx,f,hl(r.gx,r.gz)-o.wz,(r.air?.95:.8)*h,r.air?Rm:Nm,2*m*h,5,r.phase)}s&&(y.lostFor=i>70?y.lostFor+e:0,y.lostFor>2.5&&y.reroute(o));let f=Math.hypot(O.tx-S,O.tz-C);if(y.info.dist=f,y.info.bearing=Math.atan2(O.wz-o.wz,O.wx-o.wx),s&&Km(O,o,S,C)){c.arrived=!0,y.arrivedFor=0,r.add(O.key);for(let e of n)!e.taken&&Math.hypot(e.gx-O.tx,e.gz-O.tz)<60&&(e.taken=!0,v(ml(e.gx,e.gz),e.y,hl(e.gx,e.gz),5,6));for(let e=2;e<O.tipY-O.y;e+=2.2)v(O.wx,O.y+e,O.wz,5,9)}}else y.arrivedFor>=0&&(y.arrivedFor+=e);y.prisms.length=0;for(let e=E-2;e<=E+2;e++)for(let n=D-2;n<=D+2;n++){let r=Am(e,n);for(let e=0;e<r.length;e++){let n=r[e],i=Um(n);for(let e=0;e<i.length;e++){let r=i[e];if(y.prismTaken.has(r.key))continue;let a=r.gx-S,l=r.gz-T,u=a*a+l*l,d=r.y+.18*Math.sin(t*1.5+r.phase),f=ml(r.gx,r.gz),p=hl(r.gx,r.gz);s&&u<2.3*2.3&&Math.abs(d-w)<2.2?(y.prismTaken.add(r.key),c.prisms++,c.prismAt=n,v(f,d,p,26,4),y.prismCount(n)===i.length&&(c.prismAll=n)):u>28900||(y.prisms.push({wx:f,y:d,wz:p,phase:r.phase}),g(f-o.wx,d,p-o.wz,2.2,Vm,1.25,2,r.phase))}}}if(s)for(let e=E-1;e<=E+1;e++)for(let t=D-1;t<=D+1;t++){let n=Am(e,t);for(let e=0;e<n.length;e++){let t=n[e];!r.has(t.key)&&Km(t,o,S,C)&&(r.add(t.key),c.found=t,v(t.wx,o.y+2.2,t.wz,14,5))}}let k=s?o.hall:null;if(k&&(!y.course||y.course.hall!==k)){let e=[];if(!y.cleared.has(k.key)){let t=(k.x1-k.x0)/7.6;for(let n=0;n<7;n++){let r=k.x0+t*(n+.8),i=k.obstacles.find(e=>Math.abs(r-(e.x0+e.x1)/2)<t*.55);if(i)e.push({gx:(i.x0+i.x1)/2,gz:(i.z0+i.z1)/2,y:i.top+1.25,air:!0,taken:!1,phase:n});else{let t=k.zc+(k.narrow&&r<k.narrow?0:n%2?2.4:-2.4);e.push({gx:r,gz:t,y:U(r,t)+1.15,air:!1,taken:!1,phase:n})}}}y.course={hall:k,orbs:e,got:0},c.course={entered:k.theme,fresh:e.length>0}}else if(!k&&y.course){let e=y.course;e.orbs.length&&(c.course={left:e.hall.theme,got:e.got,total:e.orbs.length}),y.course=null}if(y.course){let e=y.course,n=e.hall.theme===`cafe`?zm:Bm;for(let r of e.orbs){if(r.taken)continue;let i=r.gx-S,a=r.gz-C,s=r.y+.12*Math.sin(t*2.4+r.phase);i*i+a*a<4&&Math.abs(s-w)<(r.air?1.6:2.4)?(r.taken=!0,e.got++,c.courseOrbs=(c.courseOrbs||0)+1,v(ml(r.gx,r.gz),s,hl(r.gx,r.gz),9,2),e.got===e.orbs.length&&(y.cleared.add(e.hall.key),c.course={cleared:e.hall.theme})):g(ml(r.gx,r.gz)-o.wx,s,hl(r.gx,r.gz)-o.wz,.9,n,2.3,5,r.phase)}}if(O){let e=O.wx-o.wx,n=O.wz-o.wz,r=Math.hypot(e,n)||1,i=Math.min(1,380/r),a=Bc(380,760,r),s=(O.tipY+3.5)*(1-a)+(o.y+150)*a,c=1+.12*Math.sin(t*2.3)+(y.arrivedFor>=0?1.5*Math.exp(-y.arrivedFor*1.2):0);g(e*i,s,n*i,(7+6*a)*c,Fm,3.2*c,4,.3)}for(let t=_.length-1;t>=0;t--){let n=_[t];if(n.life-=e,n.life<=0){_.splice(t,1);continue}n.vy+=7*e,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.vx*=1-2.5*e,n.vz*=1-2.5*e;let r=n.life/n.life0;g(n.x-o.wx,n.y,n.z-o.wz,n.size*(.3+.7*r),Nm,2.2*Math.min(1,r*1.5),3,0)}return _.length>220&&_.splice(0,_.length-220),a.setDrawRange(0,h*6),d.needsUpdate=!0,f.needsUpdate=!0,p.needsUpdate=!0,c}};return y}var th=[0,-1],nh=e=>440*2**((e-69)/12),rh=[[38,57,61,64,66],[35,54,57,62,64],[31,54,59,62,66],[33,52,57,61,66]],ih=[62,64,66,69,71,74,76,78,81,83,86];function ah(){let e=null,t,n,r,i,a,o,s=!1;try{s=localStorage.getItem(`nightrider-muted`)===`1`}catch{}let c=0,l=0,u=0,d=0,f=null;function p(t){let n=Math.floor(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e);for(let e=0;e<n;e++){let r=e/n;t[e]=(Math.random()*2-1)*(1-r)**2.6*(1-Math.exp(-e/400))}}return r}function m(){if(e){e.state===`suspended`&&e.resume();return}let c=window.AudioContext||window.webkitAudioContext;if(!c)return;e=new c,t=e.createGain(),t.gain.value=s?0:.9;let d=e.createDynamicsCompressor();d.threshold.value=-16,d.ratio.value=3,t.connect(d).connect(e.destination);let m=e.createConvolver();m.buffer=p(3.6),n=e.createGain(),n.gain.value=.55,r=e.createGain(),r.gain.value=.75,n.connect(m).connect(t),r.connect(t),i=e.createBiquadFilter(),i.type=`lowpass`,i.frequency.value=1300,i.Q.value=.3,i.connect(n),i.connect(r),f=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let h=f.getChannelData(0),g=0;for(let e=0;e<h.length;e++)g=g*.96+(Math.random()*2-1)*.2,h[e]=g;let _=e.createBufferSource();_.buffer=f,_.loop=!0,o=e.createBiquadFilter(),o.type=`bandpass`,o.frequency.value=500,o.Q.value=.7,a=e.createGain(),a.gain.value=0,_.connect(o).connect(a).connect(r),a.connect(n),_.start(),l=e.currentTime+.1,u=e.currentTime+2.5}function h(t,n,r,a,o=`sine`,s=i,c=2.2){let l=e.createOscillator(),u=e.createGain();l.type=o,l.frequency.value=t,l.detune.value=(Math.random()-.5)*9,u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(a,n+c),u.gain.setValueAtTime(a,n+Math.max(c,r-3.2)),u.gain.exponentialRampToValueAtTime(1e-4,n+r),l.connect(u).connect(s),l.start(n),l.stop(n+r+.1)}function g(t,i=.05,a=0){if(!e)return;let o=e.currentTime+a,s=e.createStereoPanner?e.createStereoPanner():null,c=e.createGain();c.gain.value=1,s?(s.pan.value=Math.random()*1.6-.8,c.connect(s),s.connect(n),s.connect(r)):(c.connect(n),c.connect(r));for(let[n,r,a]of[[1,1,2.6],[2.76,.28,1.2],[5.4,.1,.5]]){let s=e.createOscillator(),l=e.createGain();s.frequency.value=nh(t)*n,l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i*r,o+.008),l.gain.exponentialRampToValueAtTime(1e-4,o+a),s.connect(l).connect(c),s.start(o),s.stop(o+a+.05)}}function _(t){if(!e)return;let n=e.currentTime,i=e.createOscillator(),a=e.createGain();i.frequency.setValueAtTime(110,n),i.frequency.exponentialRampToValueAtTime(42,n+.16),a.gain.setValueAtTime(Math.min(.5,.12+t*.03),n),a.gain.exponentialRampToValueAtTime(1e-4,n+.22),i.connect(a).connect(r),i.start(n),i.stop(n+.25)}function v(t){let n=e.currentTime,i=e.createBufferSource(),a=e.createBiquadFilter(),o=e.createGain();i.buffer=f,i.playbackRate.value=6,a.type=`highpass`,a.frequency.value=2600,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.02),i.connect(a).connect(o).connect(r),i.start(n,Math.random(),.03)}return{start:m,get muted(){return s},toggle(){s=!s;try{localStorage.setItem(`nightrider-muted`,s?`1`:`0`)}catch{}return e&&t.gain.setTargetAtTime(s?0:.9,e.currentTime,.08),s},update(t,n){if(!e||e.state!==`running`)return;let r=e.currentTime;r>=l&&(rh[c%rh.length].forEach((e,t)=>{h(nh(e),r,12.5,t===0?.055:.028,t===0?`sine`:`triangle`),t>0&&h(nh(e+12),r+.4,11.5,.007,`sine`)}),c++,l=r+9),r>=u&&(g(ih[Math.floor(Math.random()*ih.length)],.028+Math.random()*.02),Math.random()<.35&&g(ih[Math.floor(Math.random()*ih.length)],.02,.22+Math.random()*.3),u=r+1.4+Math.random()*3.4);let i=t.speed,s=Math.min(.045,i*i*16e-5)*n+(t.grounded?0:.01);a.gain.setTargetAtTime(s,r,.25),o.frequency.setTargetAtTime(380+i*42,r,.3),t.grounded&&!t.walking&&i>1.2&&r>=d&&(v(.016),d=r+1/(i*1.9))},orb(e){g(ih[Math.min(ih.length-1,(e-1)%10)]+(e>10?12:0),.085)},star(){g(78,.11),g(85,.08,.09),g(90,.06,.2)},arrive(){e&&([50,57,62].forEach((t,i)=>{let a=e.currentTime+i*.42;for(let[i,o,s]of[[1,.22,5.5],[2,.12,4],[2.76,.07,2.6],[5.4,.03,1.4]]){let c=e.createOscillator(),l=e.createGain();c.frequency.value=nh(t)*i,l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(o,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+s),c.connect(l),l.connect(n),l.connect(r),c.start(a),c.stop(a+s+.1)}}),[74,78,81,86,90,93].forEach((e,t)=>g(e,.07,1.2+t*.11)))},wings(){[62,66,69,74,78,81,86,90,93,98].forEach((e,t)=>g(e,.075,t*.07))},fold(){[86,81,78,74,69,66].forEach((e,t)=>g(e,.045,t*.055))},flapSound(){if(!e)return;let t=e.currentTime,n=e.createBufferSource(),i=e.createBiquadFilter(),a=e.createGain();n.buffer=f,n.playbackRate.value=.9,i.type=`bandpass`,i.frequency.setValueAtTime(260,t),i.frequency.exponentialRampToValueAtTime(700,t+.22),i.Q.value=.6,a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.16,t+.07),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),n.connect(i).connect(a).connect(r),n.start(t,Math.random(),.34)},trick(e){let t=Math.min(7,2+Math.floor(e/220));for(let e=0;e<t;e++)g(ih[Math.min(ih.length-1,3+e)],.07,e*.055)},bail(){_(9),g(50,.05),g(51,.05,.05)},prism(){[78,83,86,90,95].forEach((e,t)=>g(e,.075,t*.035))},deliver(){[62,66,69,74,78,81,86].forEach((e,t)=>g(e,.08,.5+t*.09))},hyper(){if(!e)return;let t=e.currentTime,a=e.createBufferSource(),o=e.createBiquadFilter(),s=e.createGain();a.buffer=f,a.loop=!0,a.playbackRate.value=1.6,o.type=`bandpass`,o.Q.value=1.1,o.frequency.setValueAtTime(180,t),o.frequency.exponentialRampToValueAtTime(3200,t+.9),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.5,t+.5),s.gain.exponentialRampToValueAtTime(1e-4,t+1.6),a.connect(o).connect(s),s.connect(r),s.connect(n),a.start(t),a.stop(t+1.7),[50,57,62,66,69,74].forEach((e,n)=>h(nh(e+12),t+n*.05,3.4,.05,`sawtooth`,i,.25)),[86,90,93,98].forEach((e,t)=>g(e,.07,.45+t*.07))},land(e){e>3&&_(e)},bump(e){e>3.5&&_(e*.5)},jump(){e&&g(57,.03)}}}var oh={street:`#d6b876`,town:`#0e1945`,house:`#2c4494`,roofLine:`rgba(160, 190, 255, 0.20)`,plaza:`#b29a62`,grove:`#11393a`,field:`#57572a`,meadow:`#184a3f`,knoll:`#17454a`,olive:`#2f7c62`,cypress:`#0a2226`,water:`#8fd0ff`,hall:`#ffcf7a`},sh=205,ch=340,lh=4,uh=(e,t,n)=>e+(t-e)*n,dh=new Map;function fh(e,t,n,r,i){e.moveTo(ml(t,n),hl(t,n)),e.lineTo(ml(r,n),hl(r,n)),e.lineTo(ml(r,i),hl(r,i)),e.lineTo(ml(t,i),hl(t,i)),e.closePath()}function ph(e,t){let n=e*65536+t,r=dh.get(n);if(r)return r;dh.size>500&&dh.clear();let i=Tu(e,t),a=new Path2D,o=[];for(let e=0;e<6;e++)o.push([uh(i.x0,i.x1,e/6),i.z0]);for(let e=0;e<6;e++)o.push([i.x1,uh(i.z0,i.z1,e/6)]);for(let e=0;e<6;e++)o.push([uh(i.x1,i.x0,e/6),i.z1]);for(let e=0;e<6;e++)o.push([i.x0,uh(i.z1,i.z0,e/6)]);if(o.forEach(([e,t],n)=>n?a.lineTo(ml(e,t),hl(e,t)):a.moveTo(ml(e,t),hl(e,t))),a.closePath(),r={kind:i.kind,ground:a,houses:null,ridges:null,hall:null,olives:null,cypresses:null,water:null},i.houses.length){r.houses=new Path2D,r.ridges=new Path2D;for(let e of i.houses){fh(r.houses,e.x0,e.z0,e.x1,e.z1);let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,[i,a,o,s]=e.ridge===`x`?[e.x0+.8,n,e.x1-.8,n]:[t,e.z0+.8,t,e.z1-.8];r.ridges.moveTo(ml(i,a),hl(i,a)),r.ridges.lineTo(ml(o,s),hl(o,s))}}if(i.church){r.houses||(r.houses=new Path2D);let e=i.church.tower,t=i.church.nave;fh(r.houses,e.x0,e.z0,e.x1,e.z1),r.hall=new Path2D,fh(r.hall,e.x0-.5,i.church.tz-1.3,t.x1+.5,i.church.tz+1.3)}if(i.hall){let e=i.hall;r.hall=new Path2D,fh(r.hall,e.x0-.5,e.zc-2.6,e.x1+.5,e.zc+2.6)}for(let e of i.trees){let t=e.kind===`olive`?`olives`:`cypresses`;r[t]||(r[t]=new Path2D);let n=ml(e.x,e.z),i=hl(e.x,e.z),a=e.kind===`olive`?Math.max(2.2,e.r*.95):2;r[t].moveTo(n+a,i),r[t].arc(n,i,a,0,6.2832)}let s=i.solids.find(e=>e.fountain);if(s){r.water=new Path2D;let e=ml((s.x0+s.x1)/2,(s.z0+s.z1)/2),t=hl((s.x0+s.x1)/2,(s.z0+s.z1)/2);r.water.arc(e,t,2.6,0,6.2832)}return dh.set(n,r),r}var mh={};for(let e of Object.keys(Sm))mh[e]=new Path2D(Sm[e].icon);var hh=e=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Sm[e].icon}"/></svg>`;function gh(e,{onPick:t,onNext:n}){e.innerHTML=`
    <div id="map-list"><div class="map-head"><span>Highlights</span><span class="map-key"><kbd>Tab</kbd> next</span></div></div>
    <div id="map-disc"><canvas id="map-canvas"></canvas><div id="map-gloss"></div></div>`;let r=e.querySelector(`#map-list`),i=e.querySelector(`#map-disc`),a=e.querySelector(`#map-canvas`),o=a.getContext(`2d`),s=[];for(let e=0;e<lh;e++){let n=document.createElement(`button`);n.type=`button`,n.className=`map-row`,n.innerHTML=`<span class="map-ico"></span><span class="map-text"><span class="map-name"></span><span class="map-kind"></span></span><span class="map-dist"></span><span class="map-arrow">↑</span>`,n.addEventListener(`click`,r=>{r.stopPropagation(),s[e].hl&&t(s[e].hl),n.blur()}),r.appendChild(n),s.push({el:n,hl:null,key:``,dist:``,ico:n.querySelector(`.map-ico`),name:n.querySelector(`.map-name`),kind:n.querySelector(`.map-kind`),distEl:n.querySelector(`.map-dist`),arrow:n.querySelector(`.map-arrow`)})}let c=0,l=1;function u(){let e=i.clientWidth||208,t=Math.min(window.devicePixelRatio||1,2);(e!==c||t!==l)&&(c=e,l=t,a.width=Math.round(e*t),a.height=Math.round(e*t))}window.addEventListener(`resize`,u);let d=sh,f=[],p=[],m=0,h=[],g=[];a.addEventListener(`click`,e=>{let r=a.getBoundingClientRect(),i=e.clientX-r.left,o=e.clientY-r.top,s=null,c=18;for(let e of h){let t=Math.hypot(e.x-i,e.y-o);t<c&&(c=t,s=e.hl)}s?t(s):n&&document.documentElement.classList.contains(`touch`)&&n()});function _(e,t){g.length=0,jm(e.gx,e.gz,11,g);let n=t.target;for(let t of g)t._d=Math.hypot(t.wx-e.wx,t.wz-e.wz);g.sort((e,t)=>e._d-t._d),f=[],n&&f.push(n);for(let e of g){if(f.length>=lh)break;n&&e.key===n.key||t.visited.has(e.key)||f.push(e)}p=g.filter(e=>e._d<1100).slice(0,14),n&&!p.some(e=>e.key===n.key)&&(n._d=Math.hypot(n.wx-e.wx,n.wz-e.wz),p.push(n))}return{el:e,get listed(){return f},cycle(e){if(f.length<2)return null;let t=e.target,n=t?f.findIndex(e=>e.key===t.key):-1;return f[(n+1)%f.length]},show(t){e.classList.toggle(`on`,t)},update(e,t,n,r,i,a){u(),m-=e,m<=0&&(m=.25,_(n,r)),d=Hc(d,n.flying?ch:sh,2.2,e);let g=r.target,v=c,y=v/2,b=y/d,x=Math.hypot(i,a)||1,S=i/x,C=a/x,w=-C*b,T=S*b,E=-S*b,D=-C*b,O=y-(w*n.wx+T*n.wz),k=y-(E*n.wx+D*n.wz),A=(e,t)=>w*e+T*t+O,j=(e,t)=>E*e+D*t+k;o.setTransform(l,0,0,l,0,0),o.clearRect(0,0,v,v),o.save(),o.beginPath(),o.arc(y,y,y,0,6.2832),o.clip(),o.fillStyle=oh.street,o.fillRect(0,0,v,v),o.setTransform(l*w,l*E,l*T,l*D,l*O,l*k);let M=Math.ceil((d+40)/60),ee=fl(n.gx),N=pl(n.gz);for(let e=ee-M;e<=ee+M;e++)for(let t=N-M;t<=N+M;t++){let n=ph(e,t);o.fillStyle=oh[n.kind],o.fill(n.ground),n.olives&&(o.fillStyle=oh.olive,o.fill(n.olives)),n.cypresses&&(o.fillStyle=oh.cypress,o.fill(n.cypresses)),n.houses&&(o.fillStyle=oh.house,o.fill(n.houses),n.ridges&&(o.strokeStyle=oh.roofLine,o.lineWidth=.9/b,o.stroke(n.ridges))),n.hall&&(o.fillStyle=oh.hall,o.fill(n.hall)),n.water&&(o.fillStyle=oh.water,o.fill(n.water))}if(g&&r.arrivedFor<0&&r.trail.length){o.beginPath(),o.moveTo(n.wx,n.wz);let e=r.trail;for(let t=Math.max(0,r.progress);t<e.length;t++)o.lineTo(ml(e[t].gx,e[t].gz),hl(e[t].gx,e[t].gz));o.lineJoin=`round`,o.lineCap=`round`,o.strokeStyle=`rgba(8, 10, 40, 0.75)`,o.lineWidth=4.6/b,o.setLineDash([]),o.stroke(),o.strokeStyle=`#fff1a6`,o.lineWidth=2.2/b,o.setLineDash([3.2/b,4.2/b]),o.lineDashOffset=-t*9/b,o.stroke(),o.setLineDash([])}o.setTransform(l,0,0,l,0,0);let te=o.createRadialGradient(y,y,y*.35,y,y,y);te.addColorStop(0,`rgba(6, 9, 40, 0)`),te.addColorStop(1,`rgba(6, 9, 40, 0.55)`),o.fillStyle=te,o.fillRect(0,0,v,v),h=[];let P=(e,n,r,i,a,s=1)=>{let c=Sm[e.type].color,l=(i?10.5:8.5)*s;if(o.globalAlpha=a&&!i?.5:1,i){let e=t*.9%1;o.strokeStyle=c,o.globalAlpha=.9*(1-e),o.lineWidth=1.6,o.beginPath(),o.arc(n,r,l+2+e*11,0,6.2832),o.stroke(),o.globalAlpha=1}o.beginPath(),o.arc(n,r,l,0,6.2832),o.fillStyle=`rgba(7, 10, 38, 0.94)`,o.fill(),o.strokeStyle=c,o.lineWidth=i?2:1.3,o.stroke();let u=l*1.26/24;o.save(),o.translate(n-12*u,r-12*u),o.scale(u,u),o.lineWidth=1.9,o.lineJoin=`round`,o.lineCap=`round`,o.strokeStyle=c,o.stroke(mh[e.type]),o.restore(),o.globalAlpha=1,h.push({x:n,y:r,hl:e})},F=null;for(let e of p){let t=!!g&&e.key===g.key,n=A(e.wx,e.wz),i=j(e.wx,e.wz);Math.hypot(n-y,i-y)>y-13||(t?F={h:e,x:n,y:i}:P(e,n,i,!1,r.visited.has(e.key)))}F&&P(F.h,F.x,F.y,!0,!1);{let e=Math.atan2(n.fz,n.fx)-Math.atan2(C,S);o.save(),o.translate(y,y),o.rotate(e),o.beginPath(),o.moveTo(0,-8.5),o.lineTo(6,6.5),o.lineTo(0,3.4),o.lineTo(-6,6.5),o.closePath(),o.fillStyle=`#fffbe6`,o.strokeStyle=`rgba(8, 10, 40, 0.95)`,o.lineWidth=1.6,o.lineJoin=`round`,o.shadowColor=`rgba(255, 220, 120, 0.9)`,o.shadowBlur=9,o.fill(),o.shadowBlur=0,o.stroke(),o.restore()}if(F){o.font=`600 10.5px ui-rounded, "SF Pro Rounded", -apple-system, "Segoe UI", system-ui, "PingFang SC", "Microsoft YaHei", sans-serif`;let e=o.measureText(F.h.name).width,t=F.y<y+y*.45,n=F.y+(t?19:-19),r=Math.sqrt(Math.max(0,y*y-(n-y)*(n-y)))-6,i=Math.max(y-r,Math.min(y+r-e,F.x-e/2));o.textBaseline=`middle`,o.lineWidth=3.2,o.strokeStyle=`rgba(6, 9, 36, 0.92)`,o.lineJoin=`round`,o.strokeText(F.h.name,i,n),o.fillStyle=`#fff1c4`,o.fillText(F.h.name,i,n)}o.restore();for(let e of p){let t=!!g&&e.key===g.key,n=A(e.wx,e.wz)-y,i=j(e.wx,e.wz)-y,a=Math.hypot(n,i);if(a<=y-13||r.visited.has(e.key)&&!t)continue;let s=n/a,c=i/a;if(t)P(e,y+s*(y-13),y+c*(y-13),!0,!1);else{let t=y+s*(y-5),n=y+c*(y-5);o.globalAlpha=.95-.5*Math.min(1,e._d/1100),o.fillStyle=Sm[e.type].color,o.beginPath(),o.moveTo(t+s*4.5,n+c*4.5),o.lineTo(t-s*3-c*3.6,n-c*3+s*3.6),o.lineTo(t-s*3+c*3.6,n-c*3-s*3.6),o.closePath(),o.fill(),o.globalAlpha=1}}{let e=Math.hypot(T,D)||1,t=-T/e,n=-D/e;o.font=`700 9.5px ui-rounded, "SF Pro Rounded", -apple-system, "Segoe UI", system-ui, "PingFang SC", "Microsoft YaHei", sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`;let r=y+t*(y-9),i=y+n*(y-9);o.fillStyle=`rgba(6, 9, 36, 0.85)`,o.beginPath(),o.arc(r,i,6.5,0,6.2832),o.fill(),o.fillStyle=`#ffe9a8`,o.fillText(`N`,r,i+.5),o.textAlign=`start`}for(let e=0;e<lh;e++){let t=s[e],i=f[e];if(!i){t.hl&&(t.hl=null,t.key=``,t.el.classList.add(`off`));continue}let a=!!g&&i.key===g.key,o=r.prismCount(i),c=`${i.key}${a?`*`:``}${r.visited.has(i.key)?`v`:``}${o}`;if(t.key!==c){t.key=c,t.hl=i,t.el.classList.remove(`off`),t.el.classList.toggle(`dest`,a),t.el.style.setProperty(`--hl`,Sm[i.type].color),t.ico.innerHTML=hh(i.type),t.name.textContent=i.name,t.kind.textContent=``;let e=document.createElement(`span`);e.className=`map-label`,e.textContent=a?`目的地`:Sm[i.type].label,t.kind.appendChild(e);let n=document.createElement(`span`);n.className=`map-pips`;for(let e=0;e<3;e++){let t=document.createElement(`i`);e<o&&(t.className=`got`),n.appendChild(t)}t.kind.appendChild(n)}let l=Math.hypot(i.wx-n.wx,i.wz-n.wz),u=a&&r.arrivedFor>=0?`已到达`:l<995?`${Math.round(l/5)*5} 米`:`${(l/1e3).toFixed(1)} 公里`;t.dist!==u&&(t.dist=u,t.distEl.textContent=u);let d=Math.atan2(j(i.wx,i.wz)-y,A(i.wx,i.wz)-y)+Math.PI/2;t.arrow.style.transform=`rotate(${d.toFixed(2)}rad)`}}}}function _h(e,t=12){let n=new bu(64);n.reset(0,0,0,0);let r=.46;n.rgb(1,1,1).data(18,.5,1,0).noLamp();let i=[[r,0,0],[0,0,r],[-.46,0,0],[0,0,-.46]];for(let e=0;e<4;e++){let t=i[e],r=i[(e+1)%4];n.tri(n.pl(r[0],0,r[2]),n.pl(t[0],0,t[2]),n.pl(0,.66,0),0,0,1,0,.5,1),n.tri(n.pl(t[0],0,t[2]),n.pl(r[0],0,r[2]),n.pl(0,-.66,0),0,0,1,0,.5,1)}let a=n.build(),o=new mn,s=[];for(let n=0;n<t;n++){let t=new Vr(a,e);t.frustumCulled=!1,t.visible=!1,t.rotation.order=`YXZ`,o.add(t),s.push(t)}return{group:o,update(e,t){for(let n=0;n<s.length;n++){let r=s[n],i=e[n];r.visible=!!i,i&&(r.position.set(i.wx,i.y,i.wz),r.rotation.set(.1,t*1.1+i.phase,.07),r.scale.setScalar(1+.06*Math.sin(t*2.2+i.phase)))}}}}var vh=300;function yh(e){let t=`/api/presence`,n=Math.random().toString(36).slice(2,12).padEnd(10,`0`)+Date.now().toString(36).slice(-4),r=0,i=[];async function a(){if(!document.hidden)try{let a=await fetch(t,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({id:n,haul:r,...(window.__snrNet?window.__snrNet():{})}),cache:`no-store`});if(!a.ok)return;let o=await a.json();if(typeof o.count!=`number`)return;window.__snrRiders&&window.__snrRiders(o);i.push(Math.max(1,o.count)),i.length>2&&i.shift(),e({count:Math.max(...i),best:Math.max(o.best||0,r)})}catch{}}return a(),setInterval(a,vh),document.addEventListener(`visibilitychange`,()=>{document.hidden||a()}),window.addEventListener(`pagehide`,()=>{try{navigator.sendBeacon(t,JSON.stringify({id:n,bye:!0}))}catch{}}),{report(e){e>r&&(r=Math.floor(e),a())}}}var bh=()=>{window.va||(window.va=function(...e){window.vaq||(window.vaq=[]),window.vaq.push(e)})},xh=`@vercel/analytics`,Sh=`2.0.1`;function Ch(){return typeof window<`u`}function wh(){return`production`}function Th(e=`auto`){e===`auto`?window.vam=wh():window.vam=e}function Eh(){return(Ch()?window.vam:wh())||`production`}function Dh(){return Eh()===`production`}function Oh(){return Eh()===`development`}function kh(e,{[e]:t,...n}){return n}function Ah(e,t){if(!e)return;let n=e,r=[];for(let[i,a]of Object.entries(e))typeof a==`object`&&a&&(t.strip?n=kh(i,n):r.push(i));if(r.length>0&&!t.strip)throw Error(`The following properties are not valid: ${r.join(`, `)}. Only strings, numbers, booleans, and null are allowed.`);return n}function jh(e){return e.scriptSrc?Nh(e.scriptSrc):Oh()?`https://va.vercel-scripts.com/v1/script.debug.js`:e.basePath?Nh(`${e.basePath}/insights/script.js`):`/_vercel/insights/script.js`}function Mh(e,t){let n=e;if(t)try{n={...JSON.parse(t)?.analytics,...e}}catch{}Th(n.mode);let r={sdkn:xh+(n.framework?`/${n.framework}`:``),sdkv:Sh};return n.disableAutoTrack&&(r.disableAutoTrack=`1`),n.viewEndpoint&&(r.viewEndpoint=Nh(n.viewEndpoint)),n.eventEndpoint&&(r.eventEndpoint=Nh(n.eventEndpoint)),n.sessionEndpoint&&(r.sessionEndpoint=Nh(n.sessionEndpoint)),Oh()&&n.debug===!1&&(r.debug=`false`),n.dsn&&(r.dsn=n.dsn),n.endpoint?r.endpoint=n.endpoint:n.basePath&&(r.endpoint=Nh(`${n.basePath}/insights`)),{beforeSend:n.beforeSend,src:jh(n),dataset:r}}function Nh(e){return e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:`/${e}`}function Ph(e={debug:!0},t){var n;if(!Ch())return;let{beforeSend:r,src:i,dataset:a}=Mh(e,t);if(bh(),r&&((n=window.va)==null||n.call(window,`beforeSend`,r)),document.head.querySelector(`script[src*="${i}"]`))return;let o=document.createElement(`script`);o.src=i;for(let[e,t]of Object.entries(a))o.dataset[e]=t;o.defer=!0,o.onerror=()=>{let e=Oh()?`Please check if any ad blockers are enabled and try again.`:`Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${e}`)},document.head.appendChild(o)}function Fh(e,t,n){var r,i;if(!Ch()){let e="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(Dh())console.warn(e);else throw Error(e)}else if(!t)(r=window.va)==null||r.call(window,`event`,{name:e,options:n});else try{let r=Ah(t,{strip:Dh()});(i=window.va)==null||i.call(window,`event`,{name:e,data:r,options:n})}catch(e){e instanceof Error&&Oh()&&console.error(e)}}var Ih=!1;function Lh(){if(!Ih){Ih=!0;try{Ph()}catch{}}}function Rh(e,t){if(Ih)try{Fh(e,t)}catch{}}var zh=`/api/leaderboard`,Bh=e=>document.getElementById(e),Vh=e=>fetch(zh,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(e),cache:`no-store`}),Hh=new Map;function Uh(e){let t=document.createElement(`span`);t.className=`pic`,t.textContent=(e.handle.replace(/_/g,``)[0]||`@`).toUpperCase();let n=e.handle.toLowerCase(),r=Hh.get(n);if(r===!1)return t;let i=r?[r]:[];r||(e.avatar&&i.push(e.avatar.replace(/_400x400(\.\w+)$/,`_bigger$1`)),i.push(`https://unavatar.io/x/${encodeURIComponent(e.handle)}?fallback=false`));let a=new Image;return a.alt=``,a.decoding=`async`,a.referrerPolicy=`no-referrer`,a.onload=()=>{Hh.set(n,a.src),t.appendChild(a)},a.onerror=()=>{let e=i.shift();e?a.src=e:Hh.set(n,!1)},a.src=i.shift(),t}function Wh({onAgain:e,onResume:t,onTop:n}){let r=Bh(`board`),i=null,a=0,o=`view`,s=``,c=!1,l=-1e9,u=0;try{Bh(`board-handle`).value=localStorage.getItem(`nightrider-handle`)||``}catch{}function d(e,t){let r=Bh(`board-list`);r.textContent=``,e.slice(0,25).forEach((e,t)=>{let n=document.createElement(`li`);s&&e.handle.toLowerCase()===s.toLowerCase()&&(n.className=`me`);let i=document.createElement(`a`);i.className=`row-link`,i.href=`https://x.com/${encodeURIComponent(e.handle)}`,i.target=`_blank`,i.rel=`noopener noreferrer`,i.title=`X 上的 @${e.handle}`;let a=document.createElement(`span`);a.className=`rank`,a.textContent=String(t+1);let o=document.createElement(`span`);o.className=`who`,o.textContent=`@${e.handle}`;let c=document.createElement(`span`);c.className=`pts`,c.textContent=Number(e.score).toLocaleString(),i.append(a,Uh(e),o,c),n.appendChild(i),r.appendChild(n)}),Bh(`board-empty`).classList.toggle(`hidden`,e.length>0),Bh(`board-count`).textContent=t>e.length?`${t.toLocaleString()} 位骑手在榜上`:``,e.length&&n&&n(Number(e[0].score))}async function f(){if(performance.now()-l<9e4)return!0;try{let e=await fetch(zh,{cache:`no-store`});if(!e.ok)return!1;let t=await e.json();return d(t.top||[],t.count||0),!0}catch{return!1}}function p(e,t=!1){let n=Bh(`board-msg`);n.textContent=e,n.classList.toggle(`bad`,t)}async function m(){if(c||o!==`finish`)return;let e=Bh(`board-handle`).value.trim().replace(/^@+/,``);if(!/^[A-Za-z0-9_]{1,15}$/.test(e))p(`X 账号需为 1–15 个字母、数字或下划线。`,!0),Bh(`board-handle`).focus();else{c=!0,Bh(`board-post`).disabled=!0,p(`发布中…`);try{i||await g.start();let t=await Vh({handle:e,score:a,token:i}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok){p(n.message||`分数发布失败,请稍后再试。`,!0);return}s=n.handle,l=performance.now(),Rh(`score_posted`,{score:a}),Bh(`board-handle`).value=s;try{localStorage.setItem(`nightrider-handle`,s)}catch{}d(n.top||[],n.count||0),p(n.best>a?`已发布。你的最好成绩仍是 ${n.best.toLocaleString()} — 位居榜单第 ${n.rank} 名。`:`已发布 — 你排在榜单第 ${n.rank} 名。`),r.classList.add(`posted`)}catch{p(`无法连接排行榜,请检查网络后重试。`,!0)}finally{c=!1,Bh(`board-post`).disabled=!1}}}let h=()=>o===`finish`?t():g.close();Bh(`board-form`).addEventListener(`submit`,e=>{e.preventDefault(),m()}),Bh(`board-again`).addEventListener(`click`,()=>{g.close(),e()}),Bh(`board-back`).addEventListener(`click`,h),r.addEventListener(`click`,e=>{e.target===r&&o===`view`&&g.close()}),Bh(`board-handle`).addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Escape`&&h()}),Bh(`board-handle`).addEventListener(`keyup`,e=>e.stopPropagation());let g={get open(){return!r.classList.contains(`hidden`)},async start(){let e=++u;i=null;for(let t=0;t<4&&e===u;t++){try{let t=await Vh({action:`start`});if(t.ok){let n=(await t.json()).token;n&&e===u&&(i=n)}}catch{}if(i)return;await new Promise(e=>setTimeout(e,4e3))}},refresh:f,show(e,t=0){o=e,a=Math.max(0,Math.floor(t)),r.classList.remove(`hidden`,`posted`),r.classList.toggle(`finish`,o===`finish`),Bh(`board-score`).textContent=a.toLocaleString(),Bh(`board-title`).textContent=o===`finish`?`骑行结束`:`排行榜`,Bh(`board-back`).textContent=o===`finish`?`继续骑行`:`关闭`,p(``),f(),o===`finish`&&setTimeout(()=>Bh(`board-handle`).focus(),60)},close(){r.classList.add(`hidden`)}};return f(),setInterval(()=>{document.hidden||f()},12e4),g}var Gh=1.25,Kh=5.2,qh=2.1,Jh=`
attribute float aPart;
uniform float uBend;
uniform vec3 uBendCenter;
varying vec2 vUv;
varying float vPart;
varying vec3 vN;
varying vec3 vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  vN = normal;
  vec2 dxz = wp.xz - uBendCenter.xz;
  wp.y += uBend * dot(dxz, dxz);            // (the valley curls up with distance, like everything else in it)
  vUv = uv;
  vPart = aPart;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Yh=`
precision highp float;
uniform float uTime;
uniform float uAlive;
uniform float uGain;
varying vec2 vUv;
varying float vPart;
varying vec3 vN;
varying vec3 vW;
void main() {
  vec3 gold = vec3(1.0, 0.66, 0.16);
  float a, cover;
  if (vPart < 0.5) {
    // the shaft: lit dust, brightest where the eye looks through most of it
    vec2 v = normalize(cameraPosition.xz - vW.xz);
    float thick = pow(abs(dot(normalize(vN.xz), v)), 1.25);
    float up = vUv.y;
    float fall = pow(1.0 - up, 0.8) * smoothstep(0.0, 0.03, up);
    float th = vUv.x * 6.2831853;
    float s1 = 0.5 + 0.5 * sin(th * 5.0 + up * 7.0 - uTime * 2.6);
    float s2 = 0.5 + 0.5 * sin(th * 9.0 - up * 11.0 + uTime * 1.7);
    float motes = pow(0.5 + 0.5 * sin(th * 17.0 + up * 31.0 - uTime * 4.0), 8.0);
    float heart = pow(thick, 5.0);                       // a white-hot core down the middle
    a = thick * fall * (0.62 + 0.38 * s1 * s2 + 0.6 * motes);
    gold = mix(gold, vec3(1.0, 0.93, 0.66), 0.75 * heart * fall);
    a *= 1.0 + 1.1 * heart;
    cover = 0.5;
  } else {
    // the rosette on the floor: two rings, eight turning petals, a hot heart
    float r = length(vUv);
    if (r > 1.0) discard;
    float th = atan(vUv.y, vUv.x);
    float ring = smoothstep(0.075, 0.0, abs(r - 0.9)) + 0.8 * smoothstep(0.05, 0.0, abs(r - 0.62 - 0.035 * sin(uTime * 2.2)));
    float petals = pow(abs(cos(th * 4.0 + uTime * 0.45)), 5.0) * smoothstep(0.9, 0.34, r) * smoothstep(0.06, 0.3, r) * 0.7;
    float rays = pow(abs(cos(th * 4.0 - uTime * 0.3 + 0.39)), 30.0) * smoothstep(0.62, 0.2, r) * 0.6;
    float core = exp(-r * r * 5.0) * 1.1;
    float wash = smoothstep(1.0, 0.5, r) * 0.22;         // the pool of light it stands in
    a = ring + petals + rays + core + wash;
    cover = 0.62;
  }
  // (laid over the picture rather than only added to it: on the pale stone of
  // a nave a purely additive light would not read as gold at all)
  float k = mix(0.25, 1.0, uAlive);
  gl_FragColor = vec4(gold * a * 2.1 * uGain * k, clamp(a * cover, 0.0, 0.9) * k);
}
`;function Xh(e){let t=[],n=[],r=[],i=[],a=[];for(let e=0;e<=40;e++){let a=e/40*Math.PI*2,o=Math.cos(a),s=Math.sin(a);t.push(o*Gh,.02,s*Gh,o*Gh*.82,Kh,s*Gh*.82),n.push(o,0,s,o,0,s),r.push(e/40,0,e/40,1),i.push(0,0)}for(let e=0;e<40;e++){let t=e*2;a.push(t,t+1,t+2,t+2,t+1,t+3)}let o=t.length/3;for(let[e,a]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(e*qh,.05,a*qh),n.push(0,1,0),r.push(e,a),i.push(1);a.push(o,o+1,o+2,o,o+2,o+3);let s=new _r;s.setAttribute(`position`,new ar(t,3)),s.setAttribute(`normal`,new ar(n,3)),s.setAttribute(`uv`,new ar(r,2)),s.setAttribute(`aPart`,new ar(i,1)),s.setIndex(a);let c={value:1},l=new Vr(s,new di({vertexShader:Jh,fragmentShader:Yh,uniforms:{uTime:e.uTime,uBend:e.uBend,uBendCenter:e.uBendCenter,uAlive:e.uAlive,uGain:c},blending:5,blendEquation:100,blendSrc:201,blendDst:205,depthWrite:!1,transparent:!0,side:2}));l.frustumCulled=!1,l.renderOrder=61,l.visible=!1;let u=null,d=0,f=0,p=!1,m=0,h=[],g={at:null,entered:!1,near:!1};return{group:l,update(e,t){if(f-=e,f<=0){f=.4,h.length=0,jm(t.gx,t.gz,3,h);let e=null,n=1e9;for(let r of h){if(r.type!==`steeple`)continue;let i=Math.hypot(r.gx-t.gx,r.gz-t.gz);i<n&&(n=i,e=r)}e&&(!u||e.key!==u.key)?(u=e,d=U(u.sx,u.sz),l.position.set(ml(u.sx,u.sz),d,hl(u.sx,u.sz)),p=!1):e||(u=null),l.visible=!!u}if(g.at=u,g.entered=!1,g.near=!1,u){let n=t.gx-u.sx,r=t.gz-u.sz,i=t.y<d+3.5,a=n*n+r*r<6.25&&i;g.entered=a&&!p,p=a,g.near=i&&n*n+r*r<49,m=Hc(m,+!!a,a?12:1.6,e)}return c.value=1+1.3*m,g}}}Lh();var Zh=new URLSearchParams(location.search),X=e=>document.getElementById(e),Qh=`/`;function $h(e){let t=X(`fatal`);t.textContent=e,t.classList.remove(`hidden`),X(`loading`).classList.add(`done`)}var eg=X(`gl`),tg;try{tg=new Ec({canvas:eg,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`high-performance`})}catch(e){throw $h(`这幅画需要 WebGL 2 — 你的浏览器无法启动它。`),e}tg.outputColorSpace=Le,tg.autoClear=!1,tg.setClearColor(0,1);var ng=Ac(),rg=new Cn,ig=new Yi(60,1,.25,2600);ig.rotation.order=`YXZ`;var ag=nl(ng);rg.add(ag.mesh);var og=zl(ng);rg.add(og.group),ng.uMoonDir.value.copy(ag.moonDir);var sg=new su(tg),cg=new Vi,lg=(e,{mips:n=!0}={})=>new Promise((r,i)=>{cg.load(Qh+e,e=>{e.colorSpace=``,e.wrapS=e.wrapT=t,e.generateMipmaps=n,e.minFilter=n?c:o,e.magFilter=o,e.anisotropy=n?tg.capabilities.getMaxAnisotropy():1,r(e)},void 0,()=>i(Error(`could not load ${e}`)))}),ug,dg,fg,pg,mg;try{[ug,dg,fg,pg,mg]=await Promise.all([lg(_u.small?`painting-s.webp`:`painting.webp`),lg(_u.small?`sky-s.webp`:`sky.webp`),lg(`flow.png`,{mips:!1}),lg(`cypress.png`),lg(`fill.png`)])}catch(e){throw $h(`画作资源加载失败,请检查网络后刷新。`),e}ag.setCanvas(dg,fg,mg),ng.tCanvas.value=ug,sg.composite.uniforms.tPainting.value=ug;var hg=Ql(ng,ug,pg);rg.add(hg);var gg=uu(ng),_g=uu(ng,{dynamic:!0}),vg=mu(ng),yg=new ap(rg,gg,vg,uu(ng,{walker:!0}));sg.depthMaterial=_u.touch?null:du(ng);var Z=new vm,bg=Qp(ng,_g,vg);rg.add(bg.root);var xg=new bm,Sg=xm(eg),Cg=eh(vg);rg.add(Cg.mesh);var wg=ah(),Tg=_h(_g);rg.add(Tg.group);var Eg=Xh(ng);rg.add(Eg.group);var Dg=gh(X(`map`),{onPick:e=>v_(e),onNext:()=>{let e=Dg.cycle(Cg);e&&v_(e)}}),Q={state:`title`,doneT:0,time:0,diveT:0,rideT:0,titleMix:1,alive:0,reveal:0,quality:Rc(parseFloat(Zh.get(`q`)||`1`),.4,2),view:{W:1,H:1,hole:{cx:0,cy:0,w:1,h:1}},loading:!0},Og={pos:new B(_l.camWorld.x,_l.camY,_l.camWorld.z),yaw:0,pitch:H.pitch};hg.position.copy(Og.pos),hg.rotation.order=`YXZ`,hg.rotation.set(Og.pitch,Og.yaw,0);var kg=new B(0,Math.sin(H.pitch),-Math.cos(H.pitch)),Ag={gx:_l.church.gx,gz:_l.church.gz-60};function jg(){let e=window.innerWidth,t=window.innerHeight;Q.view.W=e,Q.view.H=t;let n=Math.sqrt((_u.touch?17e5:33e5)/(e*t)),r=Math.min(window.devicePixelRatio||1,n,2)*Q.quality;tg.setPixelRatio(r),tg.setSize(e,t,!1),sg.setSize(e*r,t*r);let i=Rc(t*.2,128,190),a=Math.min(t*.95-i,t*.78),o=a*H.aspect;o>e*.86&&(o=e*.86,a=o/H.aspect);let s=Rc(o*.034,10,34);a-=2*s,o=a*H.aspect;let c=a+2*s+i,l=Math.max(t*.03,(t-c)/2),u=e/2,d=l+s+a/2;Q.view.hole={cx:u,cy:d,w:o,h:a,b:s},sg.composite.uniforms.uHole.value.set((u-o/2)/e,1-(d+a/2)/t,(u+o/2)/e,1-(d-a/2)/t);let f=e=>`${e.toFixed(1)}px`,p={l:u-o/2-s,t:d-a/2-s,w:o+2*s,h:a+2*s},m=X(`frame`),h=X(`frame-shadow`),g=X(`frame-lip`),_=X(`wall`),v=X(`plaque`);for(let e of[m,h])e.style.left=f(p.l),e.style.top=f(p.t),e.style.width=f(p.w),e.style.height=f(p.h);m.style.borderWidth=f(s),g.style.left=f(u-o/2),g.style.top=f(d-a/2),g.style.width=f(o),g.style.height=f(a),_.style.transformOrigin=`${f(u)} ${f(d)}`;let y=p.l+p.w,b=p.t+p.h;_.style.clipPath=`polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ${f(p.l)} ${f(p.t)}, ${f(p.l)} ${f(b)}, ${f(y)} ${f(b)}, ${f(y)} ${f(p.t)}, ${f(p.l)} ${f(p.t)})`,v.style.top=f(b+Rc(t*.026,12,28))}function Mg(e,t){let{W:n,H:r}=Q.view,i=2*Math.max(t,r-t);ig.fov=2*Math.atan(i/2/e)/Dc,ig.aspect=n/i,Math.abs(i-r)<.5?ig.clearViewOffset():ig.setViewOffset(n,i,0,i/2-t,n,r),ig.updateProjectionMatrix()}var Ng=()=>Q.view.hole.h/2/H.tanV,Pg=e=>Q.view.H/2/Math.tan(e*Dc/2);window.addEventListener(`resize`,jg),jg();var Fg=.15,Ig=8.2;function Lg(){if(Q.state!==`title`||Q.loading)return;Q.state=`dive`,Q.diveT=0;let e=X(`gallery`);e.classList.add(`leaving`),clearTimeout(Bg),Bg=setTimeout(()=>{(Q.state===`dive`||Q.state===`ride`)&&e.classList.add(`gone`)},2100),Z.reset(),Z.auto=!0,Z.autoSpeed=0,xg.snap(Z),Sg.clear(),wg.start(),x_.start(),Rh(`ride_start`,{device:_u.small?`phone`:_u.touch?`tablet`:`desktop`}),Zg(),Cg.reset(),Cg.start({gx:Z.gx,gz:a_,heading:Z.heading}),X(`guide-label`).textContent=Cg.target.name}var Rg=2.1,zg={top:new B,far:!0,speed:0,stage:0},Bg=0;function Vg(){if(Q.state===`ride`||Q.state===`done`||Q.state===`dive`){if(x_.close(),Wg(),Q.theater&&h_(!1),X(`hud`).classList.add(`hidden`),clearTimeout(Bg),Q.state===`dive`)zg.top.copy(Og.pos),zg.far=!1,zg.speed=0;else{let e=Z.gx,t=Z.gz+62;zg.top.set(ml(e,t),Math.max(U(e,t)+20,Z.y+26),hl(e,t)),zg.far=!0,zg.speed=Math.min(Z.speed,$p),Q.diveT=8.35}zg.stage=0,Z.auto=!0,Sg.clear(),Q.state=`rise`}}function Hg(){Q.state=`title`,Q.titleMix=1,Q.alive=0,Q.reveal=0,X(`gallery`).classList.remove(`gone`,`leaving`),Z.reset(),Z.auto=!0,Z.autoSpeed=0,Sg.clear(),Cg.reset(),Zg()}function Ug(){Yg.finishT=14,Yg.briefT=0,X(`brief`).classList.remove(`on`),X(`finish-score`).textContent=$.banked.toLocaleString(),X(`finish`).classList.add(`on`)}function Wg(){Yg.finishT=0,X(`finish`).classList.remove(`on`),document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur()}function Gg(){Q.state===`ride`&&(Rh(`ride_finish`,{score:Math.round($.banked),minutes:Math.round(Q.rideT/6)/10}),Q.state=`done`,Q.doneT=0,Z.auto=!0,Z.autoSpeed=0,Sg.clear(),Wg(),X(`hud`).classList.add(`hidden`),wg.arrive(),x_.show(`finish`,$.banked))}function Kg(){x_.close(),Q.state===`done`&&(Q.state=`ride`,Z.auto=!1,Sg.clear(),Sg.lookYaw=C_.lookYaw,Sg.lookPitch=C_.lookPitch,Sg.lastLook=-10,X(`hud`).classList.remove(`hidden`))}X(`finish-yes`).addEventListener(`click`,Gg),X(`finish-no`).addEventListener(`click`,Wg),X(`open-board`).addEventListener(`click`,()=>x_.show(`view`)),X(`enter`).addEventListener(`click`,Lg),eg.addEventListener(`click`,()=>{Q.state===`title`&&Lg()}),X(`btn-gallery`).addEventListener(`click`,Vg),window.addEventListener(`keydown`,e=>{x_.open?e.code===`Escape`&&(Q.state===`done`?Kg():x_.close()):(e.code===`Enter`&&Q.state===`title`?Lg():e.code===`Enter`&&Q.state===`ride`&&Yg.finishT>0&&Gg(),e.code===`Escape`&&(Q.state===`ride`&&Yg.finishT>0?Wg():Vg()))});var qg=0;function Jg(e,t=4200,n=!1){if(Q.theater&&!n)return;let r=X(`toast`);r.textContent=e,r.classList.add(`on`),clearTimeout(qg),qg=setTimeout(()=>r.classList.remove(`on`),t)}var $={points:0,shown:0,banked:0,bankShown:0,caught:0,streak:0,streakT:0,mult:1,strayToast:!1,meter:0,skyGain:1},Yg={cheerT:0,grabT:0,grabSide:0,look:0,trickT:0,briefT:0,finishT:0,hints:{}},Xg={fill:``,mult:0,dist:``,hl:``};function Zg(){Object.assign($,{points:0,shown:0,banked:0,bankShown:0,caught:0,streak:0,streakT:0,mult:1,meter:0}),X(`star-count`).textContent=`0`,X(`bank-count`).textContent=`0`,Xg.mult=0;for(let e of[`stars`,`mult`,`guide`,`bank`,`hyper`,`trick`,`brief`,`finish`])X(e).classList.remove(`on`,`live`);Yg.finishT=0,Qg()}function Qg(){let e=Math.min($.caught,160);$.skyGain=1+e*.0045,ng.uGlow.value=1+e*.002}function $g(e){$.points+=Math.round(e*(Z.hyper>0?2:1));let t=X(`stars`);t.classList.add(`on`,`bump`),setTimeout(()=>t.classList.remove(`bump`),160)}function e_(e){Z.hyper<=0&&($.meter=Math.min(1,$.meter+e))}function t_(e,t,n=``){let r=X(`trick`);X(`trick-name`).textContent=e,X(`trick-points`).textContent=t,r.className=`on ${n}`,Yg.trickT=n===`live`?.25:2.6}function n_(e,t,n){Yg.hints[e]||(Yg.hints[e]=!0,Jg(t,n))}function r_(e,t){let n=$.points;$.banked+=n+t,$.points=0,X(`bank`).classList.add(`on`),wg.deliver(),Yg.cheerT=1.8,b_.report($.banked);let r=e.home?`星夜教堂的尖塔`:`${e.name}教堂的尖塔`;Jg(n>0?`${r} 收下了 ${n.toLocaleString()} 枚光球${t?`  +${t}`:``}`:`抵达${r}${t?`  +${t}`:``}`,5600)}function i_(){X(`btn-sound`).classList.toggle(`off`,wg.muted)}X(`btn-sound`).addEventListener(`click`,()=>{wg.toggle(),i_()}),window.addEventListener(`keydown`,e=>{e.code===`KeyM`&&(wg.toggle(),i_())}),i_();var a_=10,o_=[],s_=0;function c_(){if(Q.state!==`ride`||Z.wings||Z.walking)return;let e=performance.now();for(o_.push(e);o_.length&&e-o_[0]>1100;)o_.shift();o_.length>=3&&(o_.length=0,Z.wings=!0,Z.takeOff(11),wg.wings(),Rh(`wings`),Jg(`翅膀展开!按住 SPACE 飞行`,5200))}window.addEventListener(`keydown`,e=>{e.code===`Space`&&!e.repeat&&c_()}),X(`pad-jump`).addEventListener(`pointerdown`,()=>c_()),Sg.onLeap=()=>{Q.state===`title`&&!x_.open?Lg():c_()};var l_=!1;function u_(){l_||Q.state!==`ride`||(l_=!0,Rh(`controller`),Jg(`手柄 — A 跳跃(×3 飞行)· RT 踩踏 · LT 刹车 · X 花式 · B 步行 · Y 剧院`,6500,!0))}window.addEventListener(`gamepadconnected`,()=>u_());var d_=new B,f_=!1;function p_(){Q.state!==`ride`||x_.open||Yg.finishT>0||Z.setWalking(!Z.walking)&&(X(`btn-walk`).classList.toggle(`on`,Z.walking),Z.walking&&!f_&&(f_=!0,Rh(`on_foot`),Jg(_u.touch?`步行中 — 点同一按钮回到车上`:`步行中 — E 奔跑 · 朝墙起跳按住 W 可攀爬 · F 回到车上`,4600)))}window.addEventListener(`keydown`,e=>{e.code!==`KeyF`||e.repeat||e.metaKey||e.ctrlKey||e.altKey||p_()}),X(`btn-walk`).addEventListener(`click`,e=>{p_(),e.currentTarget.blur()});var m_=0;function h_(e){Q.theater=e,X(`hud`).classList.toggle(`theater`,e),X(`btn-theater`).classList.toggle(`on`,e),Cg.mesh.visible=Tg.group.visible=Eg.group.visible=!e,e?(Wg(),Yg.briefT=0,X(`brief`).classList.remove(`on`),Rh(`theater`),Jg(_u.touch?`剧院模式 — 点月亮按钮返回游戏`:`剧院模式 — 按 T 返回游戏`,3200,!0)):X(`toast`).classList.remove(`on`)}function g_(){Q.state===`ride`&&!x_.open&&h_(!Q.theater)}window.addEventListener(`keydown`,e=>{e.code!==`KeyT`||e.repeat||e.metaKey||e.ctrlKey||e.altKey||x_.open||g_()}),X(`btn-theater`).addEventListener(`click`,e=>{g_(),e.currentTarget.blur()}),window.addEventListener(`mousemove`,()=>{Q.theater&&(X(`hud`).classList.add(`peek`),clearTimeout(m_),m_=setTimeout(()=>X(`hud`).classList.remove(`peek`),2200))});var __=e=>e.type===`steeple`&&!e.home?`${e.name}教堂的尖塔`:e.name;function v_(e){Q.state===`ride`&&Cg.choose(e,Z)&&(X(`guide-label`).textContent=e.name,Jg(`前往${__(e)} — 跟着光球走`,3400),wg.jump())}window.addEventListener(`keydown`,e=>{if(e.code!==`Tab`||x_.open||(e.preventDefault(),Q.state!==`ride`||e.repeat))return;let t=Dg.cycle(Cg);t&&v_(t)});function y_(e){let t=Q.state===`ride`&&!Q.theater,n=Cg.update(e,Q.time,Z,t);if(n.orbs){for(let e=0;e<n.orbs;e++)$.streak++,$.mult=Math.min(5,1+Math.floor($.streak/6)),$g(10*$.mult),wg.orb($.streak),$.streak%12==0&&(Yg.cheerT=.9);$.caught+=n.orbs,$.streakT=3.4,e_(.014*n.orbs),Yg.grabT=.2,Yg.grabSide=n.side,Qg()}if(n.strays&&($g(50*$.mult*n.strays),$.caught+=3*n.strays,$.streak+=2,$.streakT=3.4,e_(.07*n.strays),wg.star(),Qg(),$.strayToast||($.strayToast=!0,Jg(`屋顶上捡到一颗迷路的小星  +50`))),n.prisms&&($g(150*$.mult*n.prisms),$.caught+=5*n.prisms,$.streakT=3.4,e_(.16*n.prisms),wg.prism(),Yg.cheerT=.8,Qg(),n.prismAll?($g(400),Jg(`${n.prismAll.name} — 三枚棱镜全部收集  +400`,4200)):Jg(`一枚棱镜  +${150*$.mult}`,2400)),n.arrived){let e=Cg.target,t=e.seen?0:e.type===`steeple`?500*Math.min(Cg.leg,6):250;$.caught+=12,Qg(),wg.arrive(),e.type===`steeple`?r_(e,t):(t&&$g(t),Yg.cheerT=1.4,Jg(t?`${e.name}  +${t}`:e.name,4600))}if(n.found){let e=n.found;$.caught+=4,Qg(),wg.star(),e.type===`steeple`?r_(e,250):($g(150),e.type!==`cafe`&&e.type!==`gallery`&&Jg(`${e.name} — 发现新地点  +150`,3600))}let r=Eg.update(e,Z);if(t&&r.entered&&($.points>0&&r_(r.at,0),$.banked>0&&Ug()),Yg.finishT>0&&(Yg.finishT-=e,r.near&&(Yg.finishT=Math.max(Yg.finishT,1.5)),(Yg.finishT<=0||!t)&&Wg()),n.courseOrbs){for(let e=0;e<n.courseOrbs;e++)$.streak++,$.mult=Math.min(5,1+Math.floor($.streak/6)),$g(25*$.mult),wg.orb($.streak);$.caught+=n.courseOrbs,$.streakT=3.4,e_(.02*n.courseOrbs),Qg()}if(n.course){let e=e=>e===`cafe`?`夜间咖啡馆`:e===`church`?`教堂中殿`:`画廊`;n.course.entered&&n.course.fresh&&!n.arrived?Jg(`${e(n.course.entered)} — 内部赛道已解锁`,3600):n.course.cleared&&($g(300),wg.star(),Jg(`已清完${e(n.course.cleared)}  +300`,4200))}if(Cg.arrivedFor>4.2&&t){Cg.start(Z);let e=Cg.target;X(`guide-label`).textContent=e.name,Jg(`下一站:${__(e)} — 把光球带过去`)}if(Z.trick&&Q.theater)Z.trick.clean?wg.trick(Z.trick.points):wg.bail(),Z.trick=null;else if(Z.trick){let e=Z.trick;e.clean?($g(e.points),e_(e.points/430+.05*e.combo),t_(e.names.join(` + `),`+${(e.points*(Z.hyper>0?2:1)).toLocaleString()}`,e.combo>1?`combo`:``),wg.trick(e.points),Yg.cheerT=1.1):(t_(e.names.length?`${e.names.join(` + `)} — bailed`:`Bailed`,``,`bail`),wg.bail()),Z.trick=null}else if(t&&!Z.grounded&&!Z.wings&&Z.airTime>.3){let e=Z.peek();e.length&&t_(e.join(` + `),``,`live`)}Yg.trickT>0&&(Yg.trickT-=e,Yg.trickT<=0&&X(`trick`).classList.remove(`on`)),t&&$.meter>=1&&Z.hyper<=0&&Z.grounded&&!Z.hall&&!Z.walking&&($.meter=0,Z.hyper=sm,wg.hyper());{let n=X(`hyper`),r=Z.hyper>0;n.classList.toggle(`on`,t&&(r||$.meter>.03)),n.classList.toggle(`live`,r);let i=`scaleX(${(r?Z.hyper/sm:$.meter).toFixed(3)})`;i!==Xg.fill&&(Xg.fill=i,X(`hyper-fill`).style.transform=i),r&&Z.grounded&&Z.speed>6&&Math.random()<e*34&&Cg.emit(Z.wx-Z.fx*.75,Z.y+.12+Math.random()*.3,Z.wz-Z.fz*.75,1,.3)}if(Yg.cheerT=Math.max(0,Yg.cheerT-e),Yg.grabT=Math.max(0,Yg.grabT-e),Yg.look=0,t&&Cg.trail.length&&Cg.arrivedFor<0){let e=Cg.trail[Math.min(Cg.trail.length-1,Cg.progress+1)],t=e.gx-Z.gx,n=e.gz-Z.gz;if(t*t+n*n<2025){let e=Math.atan2(n,t)-Z.heading;Yg.look=Math.atan2(Math.sin(e),Math.cos(e))}}t&&Z.onRoof&&!Z.hall&&n_(`roof`,`今夜屋顶也是街道 — 从屋檐起跳:W/S 翻转 · A/D 旋转 · E 花式`,6500),t&&Yg.briefT>0&&(Yg.briefT-=e,(Yg.briefT<=0||Yg.briefT<6.5&&(Sg.jumpPressed||Sg.throttle>0))&&(Yg.briefT=0,X(`brief`).classList.remove(`on`))),$.streakT>0&&($.streakT-=e,$.streakT<=0&&($.streak=0,$.mult=1));let i=X(`mult`);if(i.classList.toggle(`on`,$.mult>1),$.mult>1&&$.mult!==Xg.mult&&(Xg.mult=$.mult,i.textContent=`×${$.mult}`),$.shown!==$.points){let t=$.points-$.shown;$.shown+=t>0?Math.ceil(t*Math.min(1,e*9)):Math.floor(t*Math.min(1,e*5)),X(`star-count`).textContent=$.shown.toLocaleString()}$.bankShown!==$.banked&&($.bankShown+=Math.ceil(($.banked-$.bankShown)*Math.min(1,e*5)),X(`bank-count`).textContent=$.bankShown.toLocaleString());let a=X(`guide`);if(a.classList.toggle(`on`,t&&!!Cg.target),t&&Cg.target){ig.getWorldDirection(d_);let e=Cg.info.bearing-Math.atan2(d_.z,d_.x);e=Math.atan2(Math.sin(e),Math.cos(e)),X(`guide-arrow`).style.transform=`rotate(${e.toFixed(3)}rad)`;let t=Cg.arrivedFor>=0?`reached`:`${Math.round(Cg.info.dist)} 米`;t!==Xg.dist&&(Xg.dist=t,X(`guide-dist`).textContent=t);let n=Sm[Cg.target.type].color;n!==Xg.hl&&(Xg.hl=n,a.style.setProperty(`--hl`,n))}if(Dg.show(t),t&&(ig.getWorldDirection(d_),Dg.update(e,Q.time,Z,Cg,d_.x,d_.z)),Tg.update(Cg.prisms,Q.time),wg.update(Z,Q.alive),Z.landed&&wg.land(Z.landed),Z.bump&&wg.bump(Z.bump),(Z.jumped||Z.launched)&&wg.jump(),Z.flying&&Z.climbing){let e=Math.floor(Z.flap/(Math.PI*2));e!==s_&&(s_=e,wg.flapSound())}Z.wingsFolded&&wg.fold()}var b_=yh(({count:e})=>{X(`riders`).classList.add(`on`),X(`riders-count`).textContent=e.toLocaleString(),X(`riders-label`).textContent=e===1?`位骑手在画中`:`位骑手在画中`}),x_=Wh({onAgain:()=>Vg(),onResume:()=>Kg(),onTop:e=>{X(`riders-best`).textContent=e>0?`最高分 ${e.toLocaleString()}`:``}}),S_={steer:0,throttle:0,brake:1,jump:0,jumpPressed:!1,trick:0,trickPressed:!1},C_={lookYaw:0,lookPitch:.1,zoom:1.2},w_=0;function T_(){X(`hud`).classList.remove(`hidden`),X(`brief`).classList.add(`on`),Yg.briefT=11,X(`hint`).classList.remove(`faded`),Sg.pad&&setTimeout(u_,1500),clearTimeout(w_),w_=setTimeout(()=>{X(`hint`).classList.add(`faded`)},11e3)}var E_=new B,D_=new B,O_=new B,k_=new B,A_=new B,j_=new B,M_=new Pt;function N_(e,t,n,r,i,a){let o=1-a,s=o*o*o,c=3*o*o*a,l=3*o*a*a,u=a*a*a;return e.set(t.x*s+n.x*c+r.x*l+i.x*u,t.y*s+n.y*c+r.y*l+i.y*u,t.z*s+n.z*c+r.z*l+i.z*u)}function P_(e=.016){bg.root.position.set(Z.wx,Z.y,Z.wz),bg.root.rotation.y=-Z.worldHeading,bg.pose({wheel:Z.wheel,crank:Z.crank,steer:Z.steer,lean:Z.lean,pitch:Z.pitch,bob:Z.bob,air:Z.grounded?0:Math.min(4,Z.airTime*3),speed:Z.speed,dt:e,wings:Z.wings,flying:Z.flying,climb:Z.climbing,flap:Z.flap,sprint:Z.sprinting,squash:Z.squash,hyper:Z.hyperK,spin:Z.spin,flip:Z.flip,whip:Z.whip,trickPose:Z.pose,bail:Z.bail>0,look:Yg.look,cheer:Yg.cheerT>0,grab:Yg.grabT>0?Yg.grabSide:0,walk:Z.walking,stride:Z.stride,park:Z.park,flipV:Z.flipV,spinV:Z.spinV,scramble:Z.scramble}),bg.shadow.position.y=Z.grounded?.03:-(Z.y-Z.groundAt(Z.gx,Z.gz))+.03,bg.setLamp(yg.nearestLamp(Z.gx,Z.gz,M_)),ng.uHeadPos.value.set(Z.wx+Z.fx*.7,Z.y+.85,Z.wz+Z.fz*.7),ng.uHeadDir.value.set(Z.fx,-.16,Z.fz).normalize(),ng.uHeadPower.value=2.4*Q.alive}function F_(e){Q.time+=e,ng.uTime.value=Q.time,Sg.update(Q.time);let t=Ag.gx,n=Ag.gz,r=0;if(Q.state===`title`)ig.position.copy(Og.pos),ig.rotation.set(Og.pitch,Og.yaw,0),Mg(Ng(),Q.view.hole.cy),Z.update(e,Sg),P_(e),Cg.update(e,Q.time,Z,!1);else if(Q.state===`dive`||Q.state===`rise`){let i=Q.state===`rise`;Q.diveT+=i?-e*Rg:e;let a=Math.max(Q.diveT,0);Q.titleMix=1-Vc(0,1.4,a),Q.alive=Vc(.1,2.4,a);let o=Vc(0,1,(a-Fg)/Ig);Q.reveal=Vc(.5,4.6,a),r=Oc.bend*Bc(.2,.95,o),Z.autoSpeed=i?zg.speed:a>2.2?$p*.9:0,Z.update(e,Sg),P_(e),y_(e),xg.update(e,Z,Sg);let s=i?zg.top:Og.pos,c=k_.set(xg.pos.x,xg.pos.y,xg.pos.z);j_.set(xg.target.x,xg.target.y,xg.target.z);let l=E_.subVectors(c,j_);l.y=0,l.normalize();let u=O_.copy(c).addScaledVector(l,20);u.y+=8.5;let d=D_.set(s.x+2.6,s.y-2.2,s.z-30);N_(ig.position,s,d,u,c,o),A_.copy(s).addScaledVector(kg,300);let f=A_.lerp(j_,Vc(.05,.92,o));ig.lookAt(f);let p=Math.log(Ng()),m=Math.log(Pg(xg.fov));Mg(Math.exp(zc(p,m,o)),zc(Q.view.hole.cy,Q.view.H/2,o));let h=i&&zg.far;if(t=h?Z.gx:zc(Ag.gx,Z.gx,o),n=h?Z.gz:zc(Ag.gz,Z.gz,o),i){let e=X(`gallery`);zg.stage===0&&a<1.95*Rg?(e.classList.remove(`gone`),zg.stage=1):zg.stage===1&&(e.offsetWidth,e.classList.remove(`leaving`),zg.stage=2),Q.diveT<=0&&Hg()}else a>=8.35&&(Q.state=`ride`,Q.rideT=0,Z.auto=!1,T_())}else if(Q.state===`ride`)Q.rideT+=e,Q.titleMix=0,Q.alive=1,Q.reveal=1,r=Oc.bend,Zh.has(`wings`)&&Q.rideT<.05&&!Z.wings&&(Z.wings=!0,Z.vy=9,Z.grounded=!1),Z.update(e,Sg),P_(e),y_(e),xg.update(e,Z,Sg),Z.landed>6&&(xg.shake=Math.min(1,Z.landed/14)),ig.position.set(xg.pos.x,xg.pos.y,xg.pos.z),ig.lookAt(xg.target.x,xg.target.y,xg.target.z),ig.rotateZ(xg.roll),Mg(Pg(xg.fov),Q.view.H/2),t=Z.gx,n=Z.gz;else if(Q.state===`done`)Q.doneT+=e,Q.titleMix=0,Q.alive=1,Q.reveal=1,r=Oc.bend,Z.update(e,S_),P_(e),y_(e),C_.lookYaw=.55*Math.sin(Q.doneT*.22),xg.update(e,Z,C_),ig.position.set(xg.pos.x,xg.pos.y,xg.pos.z),ig.lookAt(xg.target.x,xg.target.y,xg.target.z),Mg(Pg(xg.fov),Q.view.H/2),t=Z.gx,n=Z.gz;else if(Q.state===`free`){let e=Q.free;ig.position.set(e.x,e.y,e.z),ig.rotation.set(e.pitch*Dc,e.yaw*Dc,0),Mg(Pg(e.fov),Q.view.H/2),r=e.bend,t=e.gx??e.x,n=e.gz??e.z,P_()}Q.director&&Q.director(e);let i=Q.state===`ride`?Z.hyperK:0;sg.composite.uniforms.uRush.value=i*Bc(7,19,Z.speed),sg.composite.uniforms.uBloom.value=.7+.3*i,sg.composite.uniforms.uSaturation.value=1.18+.14*i,ag.material.uniforms.uStarGain.value=$.skyGain*(1+.5*i),ng.uBend.value=r,ng.uAlive.value=Q.alive,ng.uHillReveal.value=Q.reveal,og.setReveal(Q.reveal),sg.composite.uniforms.uTitleMix.value=Q.titleMix,ng.uSkyLift.value=Math.atan(r*Oc.hillRadius-Math.max(0,ig.position.y-Og.pos.y)/Oc.hillRadius),ng.uBendCenter.value.copy(ig.position),ng.uPixel.value=2*Math.tan(ig.fov*Dc/2)/(sg.height*(ig.view&&ig.view.enabled?ig.view.fullHeight/ig.view.height:1)),yg.retarget(t,n),yg.work(Q.loading?30:Q.manual?12:_u.touch?3:4.5),yg.cull(ig),ig.updateMatrixWorld(),ag.update(ig);let a=Q.state===`title`&&Q.titleMix>=.999&&!Q.loading;Q.blind||sg.render(rg,ig,Q.time,a)}var I_=performance.now(),L_={acc:0,n:0,beat:1/30,calm:0,wait:4,tried:!1,relayout:!1};function R_(e){requestAnimationFrame(R_);let t=(e-I_)/1e3;if(I_=e,!(t<=0||Q.manual)&&(L_.relayout&&(L_.relayout=!1,jg()),F_(Math.min(t,.05)),Q.state===`ride`&&!document.hidden&&t<.25&&(L_.acc+=t,L_.n++,L_.n>=90))){let e=L_.acc/L_.n;L_.acc=0,L_.n=0,L_.beat=Math.max(1/240,Math.min(L_.beat,e));let t=e<Math.max(L_.beat*1.12,.0125);L_.tried&&!t?(Q.quality=Math.max(.55,Q.quality-.06),L_.wait=Math.min(L_.wait*2,64),L_.calm=0,L_.tried=!1,L_.relayout=!0):e>.02&&Q.quality>.55?(Q.quality=Math.max(.55,Q.quality-.12),L_.calm=0,L_.tried=!1,L_.relayout=!0):t&&Q.quality<1&&!Zh.has(`q`)?(L_.tried=!1,++L_.calm>=L_.wait&&(Q.quality=Math.min(1,Q.quality+.06),L_.calm=0,L_.tried=!0,L_.relayout=!0)):(L_.calm=0,L_.tried=!1)}}if(Zh.has(`cam`)){let[e,t,n,r,i,a,o]=Zh.get(`cam`).split(`,`).map(Number);Q.state=`free`,Q.free={x:e,y:t,z:n,yaw:r||0,pitch:i||0,fov:a||75,bend:Number.isFinite(o)?o:Oc.bend},Q.titleMix=0,Q.alive=1,Q.reveal=1,X(`gallery`).classList.add(`gone`)}for(Zh.has(`mix`)&&(Q.titleMix=parseFloat(Zh.get(`mix`))),Zh.has(`alive`)&&(Q.alive=parseFloat(Zh.get(`alive`))),Zh.has(`nogallery`)&&X(`gallery`).classList.add(`gone`),Z.auto=!0,Z.autoSpeed=0,F_(.001);yg.pending>0;)yg.work(40),await new Promise(e=>setTimeout(e,0));F_(.001),Q.loading=!1,X(`loading`).classList.add(`done`),Zh.has(`ride`)&&(Lg(),Q.diveT=8.34),I_=performance.now(),requestAnimationFrame(R_);
;window.__snrData={scene:rg,camera:ig,rider:Z,state:Q,G:{Mesh:Vr,Group:mn,Basic:kr,Box:ti,Plane:ni}};window.dispatchEvent(new Event(`snr-ready`));
