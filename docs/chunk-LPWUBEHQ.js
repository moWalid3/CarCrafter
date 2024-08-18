import{a as te,b as ie}from"./chunk-AXFDQVPV.js";import{a as X,b as Z,d as $,e as ee}from"./chunk-FGE7CVJ5.js";import{N as U,T as J,U as Q,b as N,f as R,g as W,i as q,k as j,l as Y,r as H,s as G,t as K}from"./chunk-FHDG2HXI.js";import{a as B}from"./chunk-SEFBTSWJ.js";import{a as z,b as L}from"./chunk-XVANXVFP.js";import"./chunk-XNMLNDDQ.js";import"./chunk-CDH3FYYZ.js";import"./chunk-YBTQI4HV.js";import"./chunk-KE5EG2OL.js";import{Db as T,Fa as I,Jb as g,Lb as f,Mb as h,Nb as t,Ob as e,Pb as x,Tb as P,Wb as k,_a as A,cb as n,ga as b,hc as i,he as V,ic as v,jc as d,ka as E,kc as C,lc as M,mc as _,oc as F,pb as u,ta as c,ua as p,uc as O,vc as D}from"./chunk-YVS74DTD.js";function ne(a,r){if(a&1&&(t(0,"div",5)(1,"mat-icon",18),i(2,"verified"),e(),i(3),e()),a&2){let m=r.$implicit;n(3),d("",m," ")}}function ae(a,r){if(a&1&&(t(0,"div",6)(1,"mat-icon",18),i(2,"verified"),e(),t(3,"span"),i(4),e()()),a&2){let m=r.$implicit;n(4),v(m)}}function re(a,r){if(a&1&&(t(0,"div",8),x(1,"img",19),t(2,"div",20)(3,"h6",21),i(4),e(),t(5,"p",22)(6,"mat-icon"),i(7,"schedule"),e(),i(8),O(9,"date"),e(),t(10,"p",23),i(11),e(),t(12,"button",24)(13,"mat-icon"),i(14,"reply"),e(),i(15," Reply"),e()()()),a&2){let m=r.$implicit;n(),T("src",m.img,A)("alt",m.name),n(3),v(m.name),n(4),d(" ",D(9,5,m.date),""),n(3),v(m.text)}}var _e=(()=>{let r=class r{constructor(){this.toaster=b(ie),this.car=I.required(),this.features=["Multi-zone A/C","Premium sound system","Memory seat","Heated front seats","Bluetooth","Adaptive Cruise Control","Navigation system","Andriod Auto","Cooled Seats","Leather seats","Intermittent wipers","Keyles Start"],this.history=["The vehicle's history reflects decades of design and engineering progress.","It has evolved through several generations with new technologies and features.","The model is recognized for its reliability and has won numerous awards.","Each version continues to set high standards in automotive excellence."],this.reviews=u([{img:"car_details/review1.png",name:"Finn Lawson",date:"8-15-2024",text:"This car offers a smooth and powerful driving experience, thanks to its responsive engine and advanced suspension system. It's perfect for both city driving and long road trips, making it a versatile choice for any driver."},{img:"car_details/review2.png",name:"Alexander Luca",date:"6-10-2024",text:"With a comprehensive suite of safety technologies, including adaptive cruise control, automatic emergency braking, and lane-keeping assist, this car provides peace of mind on every journey. It consistently earns top safety ratings from industry experts."},{img:"car_details/review3.png",name:"Benjamin Liam",date:"5-22-2024",text:"This model stands out for its excellent fuel economy, helping you save on gas while reducing your environmental footprint. Its efficient engine design and aerodynamic profile contribute to its low fuel consumption, making it a cost-effective option for daily commuting."}]),this.name=u(""),this.text=u("")}onSubmit(){if(this.name()&&this.text()){let y={img:"car_details/person.png",date:new Date().toISOString(),name:this.name(),text:this.text()};this.reviews.update(s=>[y,...s]),this.toaster.showToaster("Your review added successfully.")}}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=E({type:r,selectors:[["app-car-details-alt-info"]],inputs:{car:[1,"car"]},standalone:!0,features:[F],decls:40,vars:4,consts:[["autosize","cdkTextareaAutosize"],[1,"p-4","bg-white","mb-4","rounded-4"],[1,"fw-medium","fs-4","mb-3"],[1,"text-muted","mb-4","pe-md-5"],[1,"row","mb-3"],[1,"col-md-4","flex-middle","text-muted","gap-2","mb-3"],[1,"vehicle-area","text-muted","gap-2","mb-3","pe-md-5"],[1,"fw-medium","fs-4","mb-4"],[1,"d-flex","mb-4"],[1,"p-4","mt-5","rounded-4",2,"background-color","#ECF1F0"],[3,"ngSubmit"],["appearance","outline",1,"me-3"],["matInput","","type","text","name","name","required","",3,"ngModelChange","ngModel"],["appearance","outline"],["matInput","","type","email","name","email","ngModel","","required","","email",""],["appearance","outline",1,"w-100"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","3","cdkAutosizeMaxRows","5","required","","name","comment",3,"ngModelChange","ngModel"],["mat-flat-button","","type","submit"],["color","primary"],[1,"me-4",3,"src","alt"],[1,"review-content"],[1,"fw-medium","fs-5","mb-1"],[1,"flex-middle","gap-1","fs-6","text-main"],[1,"text-muted","pe-md-5","mb-1"],["mat-button",""]],template:function(s,o){if(s&1){let w=P();t(0,"div",1)(1,"h6",2),i(2,"Description"),e(),t(3,"p",3),i(4),e(),t(5,"h6",2),i(6,"Car Features"),e(),t(7,"div",4),f(8,ne,4,1,"div",5,g),e(),t(10,"h6",2),i(11,"Vehicle History"),e(),f(12,ae,5,1,"div",6,g),e(),t(14,"div",1)(15,"h6",7),i(16),e(),f(17,re,16,7,"div",8,g),t(19,"div",9)(20,"h6",7),i(21,"Leave A Review"),e(),t(22,"form",10),k("ngSubmit",function(){return c(w),p(o.onSubmit())}),t(23,"mat-form-field",11)(24,"mat-label"),i(25,"Your Name"),e(),t(26,"input",12),_("ngModelChange",function(l){return c(w),M(o.name,l)||(o.name=l),p(l)}),e()(),t(27,"mat-form-field",13)(28,"mat-label"),i(29,"Your Email"),e(),x(30,"input",14),e(),t(31,"mat-form-field",15)(32,"mat-label"),i(33,"Your Comment"),e(),t(34,"textarea",16,0),_("ngModelChange",function(l){return c(w),M(o.text,l)||(o.text=l),p(l)}),e()(),t(36,"button",17)(37,"mat-icon"),i(38,"send"),e(),i(39,"Submit Review"),e()()()()}s&2&&(n(4),d("",o.car().description," The latest in-car technology includes an intuitive infotainment system with a large touchscreen display, seamless smartphone integration, and voice-activated controls. Compatibility with Apple CarPlay and Android Auto allows easy access to apps, navigation, and media. A premium sound system delivers crystal-clear audio, and built-in Bluetooth connectivity ensures hands-free communication and audio streaming."),n(4),h(o.features),n(4),h(o.history),n(4),d("Reviews (",o.reviews().length,")"),n(),h(o.reviews()),n(9),C("ngModel",o.name),n(8),C("ngModel",o.text))},dependencies:[L,z,V,B,Q,J,U,ee,$,X,Z,K,Y,N,R,W,H,G,j,q,te],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:5rem;height:5rem;overflow:hidden;border-radius:50%;object-fit:cover}[_nghost-%COMP%]   .review-content[_ngcontent-%COMP%]{width:calc(100% - 7rem)}[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:calc(50% - .5rem)}[_nghost-%COMP%]   .vehicle-area[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .vehicle-area[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1.5rem}[_nghost-%COMP%]   .vehicle-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:calc(100% - 2rem)}"]});let a=r;return a})();export{_e as CarDetailsAltInfoComponent};
