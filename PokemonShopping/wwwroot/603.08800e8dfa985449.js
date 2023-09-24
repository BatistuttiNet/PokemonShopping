"use strict";(self.webpackChunkpokemonShopping=self.webpackChunkpokemonShopping||[]).push([[603],{6603:(lt,v,r)=>{r.r(v),r.d(v,{ProductsModule:()=>st});var u=r(9808),f=r(3151),t=r(5e3),d=r(8966),g=r(7423),x=r(5245),s=r(6727);const h=(0,s.PH)("[Products] Load Products",(0,s.Ky)()),y=(0,s.PH)("[Products] Load Products Success",(0,s.Ky)()),_=(0,s.PH)("[Products] Load Products Failure",(0,s.Ky)());var m=r(3075);const Z="ProductsState",A=(0,s.Lq)({products:null,loading:!1,error:null},(0,s.on)(h,o=>Object.assign(Object.assign({},o),{loading:!0})),(0,s.on)(y,(o,{products:i})=>Object.assign(Object.assign({},o),{products:i,loading:!1,error:""})),(0,s.on)(_,(o,{error:i})=>Object.assign(Object.assign({},o),{error:i,loading:!1}))),P=(0,s.ZF)(Z),k=(0,s.P1)(P,o=>o.loading),U=(0,s.P1)(P,o=>{var i;return null!==(i=o.products)&&void 0!==i?i:[]}),L=(0,s.P1)(P,o=>{var i,n;return null!==(n=null===(i=o.products)||void 0===i?void 0:i.map(e=>{var c;return null!==(c=e.name)&&void 0!==c?c:""}))&&void 0!==n?n:[]});var w=r(13),O=r(7322),S=r(7531),M=r(4449);const I=["priceList"],J=["categoryList"];function N(o,i){if(1&o&&(t.TgZ(0,"mat-list-option",8),t._uU(1),t.qZA()),2&o){const n=i.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function j(o,i){if(1&o&&(t.TgZ(0,"mat-list-option",8),t._uU(1),t.qZA()),2&o){const n=i.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}let b=(()=>{class o{constructor(n){this.store=n,this.categories=["Neo","Base set"],this.prices=[">= 10","10 - 50","50 - 100",">= 100"],this.selectedprice=null,this.selectedCategory=null,this.pokemonControl=new m.NI(null),this.$names=this.store.select(L),this.pokemonControlSubscription=this.pokemonControl.valueChanges.pipe((0,w.b)(300)).subscribe(e=>{this.dispatchFilter()})}ngOnDestroy(){var n;null===(n=this.pokemonControlSubscription)||void 0===n||n.unsubscribe()}ngOnInit(){}onSelectionChange(n,e,c){switch(e){case"prices":this.selectedprice=null;break;case"categories":this.selectedCategory=null}for(const l of n.options)if(l!==c.option)l.selected=!1;else if(l.selected)switch(e){case"prices":this.selectedprice=this.getRange(l.value);break;case"categories":this.selectedCategory=l.value}this.dispatchFilter()}dispatchFilter(){var n,e,c,l,a;this.store.dispatch(h({filter:{Name:null!==(n=this.pokemonControl.value)&&void 0!==n?n:null,Category:this.selectedCategory,PriceFrom:null!==(c=null===(e=this.selectedprice)||void 0===e?void 0:e.from)&&void 0!==c?c:null,PriceTo:null!==(a=null===(l=this.selectedprice)||void 0===l?void 0:l.to)&&void 0!==a?a:null}}))}getRange(n){switch(n){case">= 10":return{from:10,to:null};case"10 - 50":return{from:10,to:50};case"50 - 100":return{from:50,to:100};case">= 100":return{from:100,to:null};default:throw new Error("Range not recognized")}}clearFilters(){this.pokemonControl.setValue(null,{emitEvent:!1}),this.selectedprice=null,this.selectedCategory=null,this.priceList&&this.priceList.deselectAll(),this.categoryList&&this.categoryList.deselectAll(),this.dispatchFilter()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-filters"]],viewQuery:function(n,e){if(1&n&&(t.Gf(I,5),t.Gf(J,5)),2&n){let c;t.iGM(c=t.CRH())&&(e.priceList=c.first),t.iGM(c=t.CRH())&&(e.categoryList=c.first)}},decls:17,vars:3,consts:[["appearance","fill"],["matInput","","name","item",3,"formControl"],[3,"selectionChange"],["categoryList",""],["checkboxPosition","before",3,"value",4,"ngFor","ngForOf"],["priceList",""],[1,"flex-end"],["mat-raised-button","","color","primary",3,"click"],["checkboxPosition","before",3,"value"]],template:function(n,e){if(1&n){const c=t.EpF();t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2,"Pokemon"),t.qZA(),t._UZ(3,"input",1),t.qZA(),t.TgZ(4,"h3"),t._uU(5,"Colecci\xf3n"),t.qZA(),t.TgZ(6,"mat-selection-list",2,3),t.NdJ("selectionChange",function(a){t.CHM(c);const p=t.MAs(7);return e.onSelectionChange(p,"categories",a)}),t.YNc(8,N,2,2,"mat-list-option",4),t.qZA(),t.TgZ(9,"h3"),t._uU(10,"Precio"),t.qZA(),t.TgZ(11,"mat-selection-list",2,5),t.NdJ("selectionChange",function(a){t.CHM(c);const p=t.MAs(12);return e.onSelectionChange(p,"prices",a)}),t.YNc(13,j,2,2,"mat-list-option",4),t.qZA(),t.TgZ(14,"div",6)(15,"button",7),t.NdJ("click",function(){return e.clearFilters()}),t._uU(16,"Limpiar filtros"),t.qZA()()}2&n&&(t.xp6(3),t.Q6J("formControl",e.pokemonControl),t.xp6(5),t.Q6J("ngForOf",e.categories),t.xp6(5),t.Q6J("ngForOf",e.prices))},directives:[O.KE,O.hX,S.Nt,m.Fj,m.JJ,m.oH,M.Ub,u.sg,M.vS,g.lW],styles:[""]}),o})(),Q=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-filters-dialog"]],decls:10,vars:0,consts:[["mat-dialog-title",""],[1,"end"],[1,"spacer"],["mat-icon-button","",3,"mat-dialog-close"],["mat-dialog-content",""]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span"),t._uU(3,"Filtros"),t.qZA(),t._UZ(4,"span",2),t.TgZ(5,"button",3)(6,"mat-icon"),t._uU(7,"close"),t.qZA()()()(),t.TgZ(8,"div",4),t._UZ(9,"app-product-filters"),t.qZA())},directives:[d.uh,g.lW,d.ZT,x.Hw,d.xY,b],styles:[""]}),o})(),Y=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card-skeleton"]],decls:11,vars:0,consts:[[1,"product-card","skeleton"],[1,"product-details"],[1,"img-container","skeleton-img"],[1,"product-info"],[1,"skeleton-text","long"],[1,"skeleton-text"],[1,"skeleton-text","short"],[1,"skeleton-buttons"],[1,"skeleton-button"],[1,"skeleton-button","primary"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"div",4)(5,"div",5)(6,"div",5)(7,"div",6),t.TgZ(8,"div",7),t._UZ(9,"div",8)(10,"div",9),t.qZA()()()())},styles:[".product-card[_ngcontent-%COMP%]{display:flex;border:1px solid #e1e1e1;padding:16px;box-shadow:0 4px 6px #0000001a;margin:16px auto}.product-details[_ngcontent-%COMP%]{display:flex;width:100%}.img-container[_ngcontent-%COMP%]{width:200px;margin-right:16px}img[mat-card-image][_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.product-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.product-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:12px}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){font-size:24px;font-weight:700;color:#07c;margin-top:auto;margin-right:10px;text-align:right}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{display:flex;justify-content:flex-end}.skeleton[_ngcontent-%COMP%]{background-color:#f0f0f0;overflow:hidden}.skeleton-img[_ngcontent-%COMP%]{width:200px;height:100%;background-color:#e0e0e0;border-radius:8px}.skeleton-text[_ngcontent-%COMP%]{height:20px;background:linear-gradient(90deg,#f0f0f0,#e0e0e0,#f0f0f0);background-size:200% 100%;animation:loading 1.5s infinite;margin-top:10px}.skeleton-text.long[_ngcontent-%COMP%]{width:70%}.skeleton-text.short[_ngcontent-%COMP%]{width:30%}.skeleton-buttons[_ngcontent-%COMP%]{margin-top:20px;display:flex;gap:5px}.skeleton-button[_ngcontent-%COMP%]{width:130px;height:36px;background-color:#e0e0e0;border-radius:4px}.skeleton-button.primary[_ngcontent-%COMP%]{background-color:#d0d0d0}@keyframes loading{0%{background-position:200% 0}to{background-position:-200% 0}}@media (max-width: 768px){.product-details[_ngcontent-%COMP%]{flex-direction:column}.img-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:auto auto 10px;height:200px}}"]}),o})();var T=r(1209),H=r(339);let $=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart-alert"]],decls:10,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"centered-content"],["mat-dialog-actions",""],["mat-stroked-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","mat-dialog-close","",2,"margin-left","5px",3,"routerLink"]],template:function(n,e){1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Prodcuto agregado"),t.qZA(),t.TgZ(2,"div",1)(3,"p"),t._uU(4,"Agregaste un nuevo producto a tu carrito de compras"),t.qZA()(),t.TgZ(5,"div",2)(6,"button",3),t._uU(7,"Continuar agregando"),t.qZA(),t.TgZ(8,"button",4),t._uU(9,"Ir al carrito"),t.qZA()()),2&n&&(t.xp6(8),t.Q6J("routerLink","/cart"))},directives:[d.uh,d.xY,d.H8,g.lW,d.ZT,f.rH],styles:[""]}),o})();var q=r(9224);let E=(()=>{class o{constructor(n,e,c){this.cartStore=n,this.router=e,this.dialog=c,this.$isLoading=this.cartStore.select(H.xU)}ngOnInit(){}addToCart(n){n&&(this.cartStore.dispatch((0,T.Xq)({add:{productId:n.id,quantity:1}})),this.dialog.open($))}buy(n){n&&this.cartStore.dispatch((0,T.Xq)({add:{productId:n.id,quantity:1}})),this.router.navigate(["/cart"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.yh),t.Y36(f.F0),t.Y36(d.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card"]],inputs:{product:"product"},decls:18,vars:14,consts:[[1,"product-card"],[1,"product-details"],[1,"img-container"],["mat-card-image","","alt","Descripci\xf3n del producto",3,"src"],[1,"product-info"],["mat-raised-button","","color","primary",2,"margin-left","5px",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"div",4)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA(),t.TgZ(10,"div"),t._uU(11),t.qZA(),t.TgZ(12,"div"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"div")(16,"button",5),t.NdJ("click",function(){return e.buy(e.product)}),t._uU(17,"Agregar al Carrito"),t.qZA()()()()()),2&n&&(t.ekj("disabled",t.lcZ(1,7,e.$isLoading)),t.xp6(4),t.Q6J("src",null==e.product?null:e.product.img,t.LSH),t.xp6(3),t.Oqu(null==e.product?null:e.product.name),t.xp6(2),t.Oqu(null==e.product?null:e.product.description),t.xp6(2),t.Oqu(null==e.product?null:e.product.category),t.xp6(2),t.Oqu(t.gM2(14,9,null==e.product?null:e.product.price,"USD","symbol","1.2-2")))},directives:[q.G2,g.lW],pipes:[u.Ov,u.H9],styles:[".product-card[_ngcontent-%COMP%]{display:flex;border:1px solid #e1e1e1;padding:16px;box-shadow:0 4px 6px #0000001a;margin:16px auto;transition:opacity .3s}.product-card.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.product-details[_ngcontent-%COMP%]{display:flex;width:100%}.img-container[_ngcontent-%COMP%]{width:200px;margin-right:16px}img[mat-card-image][_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.product-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.product-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:12px}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){font-size:24px;font-weight:700;color:#07c;margin-top:auto;margin-right:10px;text-align:right}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{display:flex;justify-content:flex-end}@media (max-width: 768px){.product-details[_ngcontent-%COMP%]{flex-direction:column}.img-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;margin:auto auto 10px}}"]}),o})();function R(o,i){1&o&&(t.TgZ(0,"aside",6)(1,"h2"),t._uU(2,"Filtros"),t.qZA(),t._UZ(3,"app-product-filters"),t.qZA())}function X(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){return t.CHM(n),t.oxw().openFilters()}),t.TgZ(1,"mat-icon"),t._uU(2,"filter_list"),t.qZA()()}}function G(o,i){1&o&&(t.ynx(0),t._UZ(1,"app-product-card-skeleton"),t.BQk())}function z(o,i){1&o&&t._UZ(0,"app-product-card",10),2&o&&t.Q6J("product",i.$implicit)}function W(o,i){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No hay productos"),t.qZA(),t.BQk())}function B(o,i){if(1&o&&(t.YNc(0,z,1,1,"app-product-card",8),t.ALo(1,"async"),t.YNc(2,W,3,0,"ng-container",9),t.ALo(3,"async")),2&o){const n=t.oxw();let e;t.Q6J("ngForOf",t.lcZ(1,2,n.$products)),t.xp6(2),t.Q6J("ngIf",0==(null==(e=t.lcZ(3,4,n.$products))?null:e.length))}}const D=[{path:"products",component:(()=>{class o{constructor(n,e){this.dialog=n,this.store=e,this.showFilters=!1,this.isMobile=window.innerWidth<768,window.onresize=()=>{this.isMobile=window.innerWidth<768},this.store.dispatch(h({filter:{}})),this.$isLoading=this.store.select(k),this.$products=this.store.select(U)}ngOnInit(){}openFilters(){this.dialog.open(Q,{width:"300px"})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.uw),t.Y36(s.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:10,vars:6,consts:[[1,"container-products"],["class","filters-section",4,"ngIf"],[1,"products-section"],["mat-icon-button","",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"filters-section"],["mat-icon-button","",3,"click"],[3,"product",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"product"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,R,4,0,"aside",1),t.TgZ(2,"main",2)(3,"h2"),t.YNc(4,X,3,0,"button",3),t._uU(5," Cartas"),t.qZA(),t.YNc(6,G,2,0,"ng-container",4),t.ALo(7,"async"),t.YNc(8,B,4,6,"ng-template",null,5,t.W1O),t.qZA()()),2&n){const c=t.MAs(9);t.xp6(1),t.Q6J("ngIf",!e.isMobile),t.xp6(3),t.Q6J("ngIf",e.isMobile),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,4,e.$isLoading))("ngIfElse",c)}},directives:[u.O5,b,g.lW,x.Hw,Y,u.sg,E],pipes:[u.Ov],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.container-products[_ngcontent-%COMP%]{display:flex;padding:20px}.filters-section[_ngcontent-%COMP%]{flex:1;margin-right:20px}.products-section[_ngcontent-%COMP%]{flex:3}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}"]}),o})()},{path:"",redirectTo:"products",pathMatch:"full"}];let K=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.Bz.forChild(D)],f.Bz]}),o})();var V=r(9904),C=r(6517),tt=r(1086),ot=r(8896),nt=r(7545),et=r(4850),it=r(7221),rt=r(3309);let ct=(()=>{class o{constructor(n,e){this.actions$=n,this.service=e,this.loadUser$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(h),(0,nt.w)(c=>this.service.apiProductGetProductsByFilterGet$Json(c.filter).pipe((0,et.U)(l=>y({products:l.payload})),(0,it.K)(l=>{var a,p;return l?(0,tt.of)(_({error:null!==(p=null===(a=l.error)||void 0===a?void 0:a.message)&&void 0!==p?p:""})):ot.E})))))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(C.eX),t.LFG(rt.M5))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),st=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,V.m,K,m.UX,s.Aw.forFeature(Z,A),C.sQ.forFeature([ct])]]}),o})()}}]);