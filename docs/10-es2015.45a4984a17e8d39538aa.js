(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Rh1b:function(t,n,e){"use strict";e.r(n),e.d(n,"PaginationExampleModule",function(){return g});var a=e("ofXK"),i=e("3Pt+"),o=e("tyNb"),b=e("fXoL"),r=e("Lm2G");function s(t,n){if(1&t&&(b.Mb(0,"p",11),b.sc(1),b.Lb()),2&t){const t=n.$implicit;b.xb(1),b.uc(" ",t," ")}}const c=[{path:"",component:(()=>{class t{constructor(){this.maxSize=10,this.totalItems=200,this.currentPage=1,this.contentArray=new Array(90).fill(""),this.returnedArray=[]}ngOnInit(){this.contentArray=this.contentArray.map((t,n)=>"Content line "+(n+1)),this.returnedArray=this.contentArray.slice(0,10)}onPageChanged(t){this.returnedArray=this.contentArray.slice((t.page-1)*t.itemsPerPage,t.page*t.itemsPerPage)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Db({type:t,selectors:[["app-pagination-example"]],decls:41,vars:12,consts:[[1,"my-5"],[3,"totalItems"],[3,"totalItems","boundaryLinks"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"totalItems","boundaryLinks"],[3,"totalItems","disabled"],[3,"totalItems","maxSize","ngModel","ngModelChange"],[1,"row"],[1,"col-12"],[1,"content-wrapper"],["class","content-item",4,"ngFor","ngForOf"],[3,"totalItems","pageChanged"],[1,"content-item"]],template:function(t,n){1&t&&(b.Mb(0,"article"),b.Mb(1,"section"),b.Mb(2,"div",0),b.Mb(3,"header"),b.Mb(4,"h2"),b.sc(5,"Basic Pagination"),b.Lb(),b.Lb(),b.Kb(6,"pagination",1),b.Lb(),b.Lb(),b.Mb(7,"section"),b.Mb(8,"div",0),b.Mb(9,"header"),b.Mb(10,"h2"),b.sc(11,"Pagination with Boundary Links"),b.Lb(),b.Lb(),b.Kb(12,"pagination",2),b.Lb(),b.Lb(),b.Mb(13,"section"),b.Mb(14,"div",0),b.Mb(15,"header"),b.Mb(16,"h2"),b.sc(17,"Pagination with Custom Links"),b.Lb(),b.Lb(),b.Kb(18,"pagination",3),b.Lb(),b.Lb(),b.Mb(19,"section"),b.Mb(20,"div",0),b.Mb(21,"header"),b.Mb(22,"h2"),b.sc(23,"Disabled Pagination"),b.Lb(),b.Lb(),b.Kb(24,"pagination",4),b.Lb(),b.Lb(),b.Mb(25,"section"),b.Mb(26,"div",0),b.Mb(27,"header"),b.Mb(28,"h2"),b.sc(29,"Pagination Limits"),b.Lb(),b.Lb(),b.Mb(30,"pagination",5),b.Tb("ngModelChange",function(t){return n.currentPage=t}),b.Lb(),b.Lb(),b.Lb(),b.Mb(31,"section"),b.Mb(32,"div",0),b.Mb(33,"header"),b.Mb(34,"h2"),b.sc(35,"Content Switching"),b.Lb(),b.Lb(),b.Mb(36,"div",6),b.Mb(37,"div",7),b.Mb(38,"div",8),b.qc(39,s,2,1,"p",9),b.Lb(),b.Mb(40,"pagination",10),b.Tb("pageChanged",function(t){return n.onPageChanged(t)}),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.xb(6),b.ac("totalItems",30),b.xb(6),b.ac("totalItems",53)("boundaryLinks",!0),b.xb(6),b.ac("totalItems",145)("boundaryLinks",!0),b.xb(6),b.ac("totalItems",67)("disabled",!0),b.xb(6),b.ac("totalItems",n.totalItems)("maxSize",n.maxSize)("ngModel",n.currentPage),b.xb(9),b.ac("ngForOf",n.returnedArray),b.xb(1),b.ac("totalItems",n.contentArray.length))},directives:[r.a,i.f,i.g,a.k],encapsulation:2}),t})()}];let d=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[o.c.forChild(c)],o.c]}),t})();var l=e("PCNd");let g=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[a.c,d,l.a,i.b]]}),t})()}}]);