import{a as F,b as P,d as T}from"./chunk-JBR356Q3.js";import"./chunk-WRWEAHUH.js";import{a as I,b as E}from"./chunk-XVANXVFP.js";import"./chunk-XNMLNDDQ.js";import"./chunk-CDH3FYYZ.js";import"./chunk-YBTQI4HV.js";import"./chunk-KE5EG2OL.js";import{Db as r,Fa as x,Jb as _,Lb as M,Mb as v,Nb as l,Ob as i,Pb as u,Yb as f,_a as d,cb as n,hc as o,he as b,ic as y,jc as g,ka as h,oc as O,pb as p,pc as w,sa as C,uc as D,wc as S,xb as c}from"./chunk-YVS74DTD.js";var U=()=>[1,2,3];function V(e,t){if(e&1&&u(0,"img",7),e&2){let a=f();r("src",a.car().imageUrl,d)}}function j(e,t){if(e&1&&u(0,"img",8),e&2){let a=f().$implicit;r("src","car_details/"+a+".png",d)}}function k(e,t){if(e&1&&c(0,j,1,1,"ng-template",6),e&2){let a=t.$index;r("id","slide"+a)}}var J=(()=>{let t=class t{constructor(){this.car=x.required(),this.listedOn=p("8-16-2024"),this.views=p(800),this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,autoplay:!0,items:1}}ngOnChanges(){this.listedOn.set(`${Math.floor(Math.random()*12)+1}-${Math.floor(Math.random()*30)+1}-2024`),this.views.set(Math.floor(Math.random()*2e3)+100)}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=h({type:t,selectors:[["app-car-details-slider"]],hostAttrs:[1,"p-4","bg-white","rounded-4","mb-4"],inputs:{car:[1,"car"]},standalone:!0,features:[C,O],decls:16,vars:8,consts:[[1,"fw-medium","mb-2"],[1,"d-flex","flex-column","flex-md-row","gap-3","mb-4"],[1,"flex-middle","text-muted"],["color","primary"],[3,"options"],["carouselSlide","","id","slide4"],["carouselSlide","",3,"id"],["alt","View Car Inside",1,"img-fluid","rounded-4","object-fit-contain",3,"src"],["alt","View Car Inside",1,"img-fluid","rounded-4",3,"src"]],template:function(s,m){s&1&&(l(0,"h5",0),o(1),i(),l(2,"div",1)(3,"span",2)(4,"mat-icon",3),o(5,"schedule"),i(),o(6),D(7,"date"),i(),l(8,"span",2)(9,"mat-icon",3),o(10,"visibility"),i(),o(11),i()(),l(12,"owl-carousel-o",4),c(13,V,1,1,"ng-template",5),M(14,k,1,1,null,6,_),i()),s&2&&(n(),y(m.car().name),n(5),g(" Listed On: ",S(7,4,m.listedOn(),"fullDate")," "),n(5),g(" Views: ",m.views()," "),n(),r("options",m.customOptions),n(2),v(w(7,U)))},dependencies:[E,I,b,T,P,F],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .flex-middle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{height:30rem;object-fit:cover}"]});let e=t;return e})();export{J as CarDetailsSliderComponent};
