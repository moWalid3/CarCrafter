import{d as m,f as v,l as y}from"./chunk-CDH3FYYZ.js";import{Ca as l,Ga as c,db as s,j as h,jb as d,ma as a}from"./chunk-YVS74DTD.js";var E=(()=>{let e=class e{constructor(t,i,n){this._element=t,this._renderer=i,this._builder=n,this.hideStyles={opacity:"0",transform:"translateY(20px)"},this.showStyles={opacity:"1",transform:"translateY(0)"},this.duration=400,this.delay=0,this.easing="",this.threshold=.6,this.rootMargin="0px",this.intersection=new l,this._intersect$=new h}ngOnInit(){this.setHideStyles(),this.createObserver(),this.createAnimation(),this.startObserving()}ngAfterViewInit(){this._intersect$.subscribe(()=>{let t=this._element.nativeElement;this.animation.play(),this.intersection.emit(this._element.nativeElement),this._observer?.unobserve(t)})}createObserver(){let t={root:null,rootMargin:this.rootMargin,threshold:this.threshold};this._observer=new IntersectionObserver((i,n)=>{i.forEach(o=>{o.isIntersecting&&o.intersectionRatio>=this.threshold&&this._intersect$.next()})},t)}setHideStyles(){for(let t of Object.keys(this.hideStyles))this._renderer.setStyle(this._element.nativeElement,t,this.hideStyles[t])}createAnimation(){let t=this._builder.build([m(`${this.duration}ms ${this.delay}ms ${this.easing}`.trim(),v(this.showStyles))]);this.animation=t.create(this._element.nativeElement)}startObserving(){this._observer?.observe(this._element.nativeElement)}ngOnDestroy(){this._observer&&(this._observer.disconnect(),this._observer=null),this._intersect$.complete()}};e.\u0275fac=function(i){return new(i||e)(s(c),s(d),s(y))},e.\u0275dir=a({type:e,selectors:[["","observeVisibility",""]],inputs:{hideStyles:[0,"hide","hideStyles"],showStyles:[0,"show","showStyles"],duration:"duration",delay:"delay",easing:"easing",threshold:"threshold",rootMargin:"rootMargin"},outputs:{intersection:"intersection"},standalone:!0});let r=e;return r})();export{E as a};
