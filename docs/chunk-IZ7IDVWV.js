import{c as w,d as N}from"./chunk-FDV63FFS.js";import{a as M,b as a,c as F,d as P,e as x,f as I,g as D,h as G,i as k}from"./chunk-FROD3HT2.js";import{a as E,b as j}from"./chunk-4SG7IXVG.js";import{A as d,F as y,H as o,I as r,J as m,L as R,N as n,V as b,W as C,ba as f,m as h,n as c,p as s,q as v,r as p,z as S}from"./chunk-MB5QRXZ6.js";var q=(()=>{class t{constructor(e,i,l,g){this.http=e,this.redirector=i,this.hashService=l,this.dataService=g}register(e){this.mockRegister(e)}mockRegister(e){console.log("mockRegister",e);let i=this.hashService.hash(e.plainPassword);e.hashedPassword=i,e.plainPassword="",this.dataService.addUserAccount(e),this.redirector.toLogin()}doRegister(e){this.http.post(w,e).subscribe(i=>{console.log("res",i)})}static{this.\u0275fac=function(i){return new(i||t)(s(C),s(N),s(E),s(j))}}static{this.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var T=(()=>{class t{constructor(e,i){this.fb=e,this.registerService=i,this.registerForm=this.fb.group({type:["",[a.required]],name:["",[a.required]],email:["",[a.required]],plainPassword:["",[a.required]],address:["",[]],dob:["",[]]})}onSubmit(){let e=this.registerForm.value;console.log("info",e),this.registerService.register(e)}static{this.\u0275fac=function(i){return new(i||t)(d(G),d(q))}}static{this.\u0275cmp=v({type:t,selectors:[["app-register"]],decls:22,vars:1,consts:[[1,"register-container"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","type"],["id","type","type","type","formControlName","type",1,"form-control"],["for","name"],["id","name","type","name","formControlName","name",1,"form-control"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control"],["for","plainPassword"],["id","plainPassword","type","plainPassword","formControlName","plainPassword",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(i,l){i&1&&(o(0,"p"),n(1,"register"),r(),o(2,"div",0)(3,"form",1),R("ngSubmit",function(){return l.onSubmit()}),o(4,"div",2)(5,"label",3),n(6,"Type: "),r(),m(7,"input",4),r(),o(8,"div",2)(9,"label",5),n(10,"Name: "),r(),m(11,"input",6),r(),o(12,"div",2)(13,"label",7),n(14,"Email: "),r(),m(15,"input",8),r(),o(16,"div",2)(17,"label",9),n(18,"Password: "),r(),m(19,"input",10),r(),o(20,"button",11),n(21," Create account "),r()()()),i&2&&(S(3),y("formGroup",l.registerForm))},dependencies:[x,M,F,P,I,D]})}}return t})();var H=[{path:"",component:T}],V=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=p({type:t})}static{this.\u0275inj=c({imports:[f.forChild(H),f]})}}return t})();var ie=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=p({type:t})}static{this.\u0275inj=c({imports:[b,V,k]})}}return t})();export{ie as RegisterModule};
