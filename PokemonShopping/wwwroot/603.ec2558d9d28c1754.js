"use strict";(self.webpackChunkpokemonShopping=self.webpackChunkpokemonShopping||[]).push([[603],{6603:(nt,v,c)=>{c.r(v),c.d(v,{ProductsModule:()=>ot});var p=c(9808),m=c(3151),t=c(5e3),u=c(8966),f=c(7423),x=c(5245),r=c(6727);const h=(0,r.PH)("[Products] Load Products",(0,r.Ky)()),y=(0,r.PH)("[Products] Load Products Success",(0,r.Ky)()),O=(0,r.PH)("[Products] Load Products Failure",(0,r.Ky)());var _=c(4449);function F(o,e){if(1&o&&(t.TgZ(0,"mat-list-option",4),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function A(o,e){if(1&o&&(t.TgZ(0,"mat-list-option",4),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}let M=(()=>{class o{constructor(n){this.store=n,this.categories=["Neo","Base set"],this.prices=[">= 10","10 - 50","50 - 100",">= 100"],this.selectedprice=null,this.selectedCategory=null}ngOnInit(){}onSelectionChange(n,i,s){var d,a,l,P;switch(i){case"prices":this.selectedprice=null;break;case"categories":this.selectedCategory=null}for(const g of n.options)if(g!==s.option)g.selected=!1;else if(g.selected)switch(i){case"prices":this.selectedprice=this.getRange(g.value);break;case"categories":this.selectedCategory=g.value}this.store.dispatch(h({filter:{Category:this.selectedCategory,PriceFrom:null!==(a=null===(d=this.selectedprice)||void 0===d?void 0:d.from)&&void 0!==a?a:null,PriceTo:null!==(P=null===(l=this.selectedprice)||void 0===l?void 0:l.to)&&void 0!==P?P:null}}))}getRange(n){switch(n){case">= 10":return{from:10,to:null};case"10 - 50":return{from:10,to:50};case"50 - 100":return{from:50,to:100};case">= 100":return{from:100,to:null};default:throw new Error("Range not recognized")}}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-filters"]],decls:10,vars:2,consts:[[3,"selectionChange"],["pokemonList",""],["checkboxPosition","before",3,"value",4,"ngFor","ngForOf"],["priceList",""],["checkboxPosition","before",3,"value"]],template:function(n,i){if(1&n){const s=t.EpF();t.TgZ(0,"h3"),t._uU(1,"Colecci\xf3n"),t.qZA(),t.TgZ(2,"mat-selection-list",0,1),t.NdJ("selectionChange",function(a){t.CHM(s);const l=t.MAs(3);return i.onSelectionChange(l,"categories",a)}),t.YNc(4,F,2,2,"mat-list-option",2),t.qZA(),t.TgZ(5,"h3"),t._uU(6,"Precio"),t.qZA(),t.TgZ(7,"mat-selection-list",0,3),t.NdJ("selectionChange",function(a){t.CHM(s);const l=t.MAs(8);return i.onSelectionChange(l,"prices",a)}),t.YNc(9,A,2,2,"mat-list-option",2),t.qZA()}2&n&&(t.xp6(4),t.Q6J("ngForOf",i.categories),t.xp6(5),t.Q6J("ngForOf",i.prices))},directives:[_.Ub,p.sg,_.vS],styles:[""]}),o})(),k=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-filters-dialog"]],decls:10,vars:0,consts:[["mat-dialog-title",""],[1,"end"],[1,"spacer"],["mat-icon-button","",3,"mat-dialog-close"],["mat-dialog-content",""]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span"),t._uU(3,"Filtros"),t.qZA(),t._UZ(4,"span",2),t.TgZ(5,"button",3)(6,"mat-icon"),t._uU(7,"close"),t.qZA()()()(),t.TgZ(8,"div",4),t._UZ(9,"app-product-filters"),t.qZA())},directives:[u.uh,f.lW,u.ZT,x.Hw,u.xY,M],styles:[""]}),o})();const Z="ProductsState",w=(0,r.Lq)({products:null,loading:!1,error:null},(0,r.on)(h,o=>Object.assign(Object.assign({},o),{loading:!0})),(0,r.on)(y,(o,{products:e})=>Object.assign(Object.assign({},o),{products:e,loading:!1,error:""})),(0,r.on)(O,(o,{error:e})=>Object.assign(Object.assign({},o),{error:e,loading:!1}))),b=(0,r.ZF)(Z),S=(0,r.P1)(b,o=>o.loading),L=(0,r.P1)(b,o=>{var e;return null!==(e=o.products)&&void 0!==e?e:[]});let I=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card-skeleton"]],decls:11,vars:0,consts:[[1,"product-card","skeleton"],[1,"product-details"],[1,"img-container","skeleton-img"],[1,"product-info"],[1,"skeleton-text","long"],[1,"skeleton-text"],[1,"skeleton-text","short"],[1,"skeleton-buttons"],[1,"skeleton-button"],[1,"skeleton-button","primary"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"div",4)(5,"div",5)(6,"div",5)(7,"div",6),t.TgZ(8,"div",7),t._UZ(9,"div",8)(10,"div",9),t.qZA()()()())},styles:[".product-card[_ngcontent-%COMP%]{display:flex;border:1px solid #e1e1e1;padding:16px;box-shadow:0 4px 6px #0000001a;margin:16px auto}.product-details[_ngcontent-%COMP%]{display:flex;width:100%}.img-container[_ngcontent-%COMP%]{width:200px;margin-right:16px}img[mat-card-image][_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.product-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.product-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:12px}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){font-size:24px;font-weight:700;color:#07c;margin-top:auto;margin-right:10px;text-align:right}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{display:flex;justify-content:flex-end}.skeleton[_ngcontent-%COMP%]{background-color:#f0f0f0;overflow:hidden}.skeleton-img[_ngcontent-%COMP%]{width:200px;height:100%;background-color:#e0e0e0;border-radius:8px}.skeleton-text[_ngcontent-%COMP%]{height:20px;background:linear-gradient(90deg,#f0f0f0,#e0e0e0,#f0f0f0);background-size:200% 100%;animation:loading 1.5s infinite;margin-top:10px}.skeleton-text.long[_ngcontent-%COMP%]{width:70%}.skeleton-text.short[_ngcontent-%COMP%]{width:30%}.skeleton-buttons[_ngcontent-%COMP%]{margin-top:20px;display:flex;gap:5px}.skeleton-button[_ngcontent-%COMP%]{width:130px;height:36px;background-color:#e0e0e0;border-radius:4px}.skeleton-button.primary[_ngcontent-%COMP%]{background-color:#d0d0d0}@keyframes loading{0%{background-position:200% 0}to{background-position:-200% 0}}@media (max-width: 768px){.product-details[_ngcontent-%COMP%]{flex-direction:column}.img-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:auto auto 10px;height:200px}}"]}),o})();var T=c(1209),j=c(339);let J=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart-alert"]],decls:10,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"centered-content"],["mat-dialog-actions",""],["mat-stroked-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","mat-dialog-close","",2,"margin-left","5px",3,"routerLink"]],template:function(n,i){1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Prodcuto agregado"),t.qZA(),t.TgZ(2,"div",1)(3,"p"),t._uU(4,"Agregaste un nuevo producto a tu carrito de compras"),t.qZA()(),t.TgZ(5,"div",2)(6,"button",3),t._uU(7,"Continuar agregando"),t.qZA(),t.TgZ(8,"button",4),t._uU(9,"Ir al carrito"),t.qZA()()),2&n&&(t.xp6(8),t.Q6J("routerLink","/cart"))},directives:[u.uh,u.xY,u.H8,f.lW,u.ZT,m.rH],styles:[""]}),o})();var Y=c(9224);let q=(()=>{class o{constructor(n,i,s){this.cartStore=n,this.router=i,this.dialog=s,this.$isLoading=this.cartStore.select(j.xU)}ngOnInit(){}addToCart(n){n&&(this.cartStore.dispatch((0,T.Xq)({add:{productId:n.id,quantity:1}})),this.dialog.open(J))}buy(n){n&&this.cartStore.dispatch((0,T.Xq)({add:{productId:n.id,quantity:1}})),this.router.navigate(["/cart"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.yh),t.Y36(m.F0),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card"]],inputs:{product:"product"},decls:18,vars:14,consts:[[1,"product-card"],[1,"product-details"],[1,"img-container"],["mat-card-image","","alt","Descripci\xf3n del producto",3,"src"],[1,"product-info"],["mat-raised-button","","color","primary",2,"margin-left","5px",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"div",4)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA(),t.TgZ(10,"div"),t._uU(11),t.qZA(),t.TgZ(12,"div"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"div")(16,"button",5),t.NdJ("click",function(){return i.buy(i.product)}),t._uU(17,"Agregar al Carrito"),t.qZA()()()()()),2&n&&(t.ekj("disabled",t.lcZ(1,7,i.$isLoading)),t.xp6(4),t.Q6J("src","data:image/jpeg;base64,"+(null==i.product?null:i.product.img),t.LSH),t.xp6(3),t.Oqu(null==i.product?null:i.product.name),t.xp6(2),t.Oqu(null==i.product?null:i.product.description),t.xp6(2),t.Oqu(null==i.product?null:i.product.category),t.xp6(2),t.Oqu(t.gM2(14,9,null==i.product?null:i.product.price,"USD","symbol","1.2-2")))},directives:[Y.G2,f.lW],pipes:[p.Ov,p.H9],styles:[".product-card[_ngcontent-%COMP%]{display:flex;border:1px solid #e1e1e1;padding:16px;box-shadow:0 4px 6px #0000001a;margin:16px auto;transition:opacity .3s}.product-card.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.product-details[_ngcontent-%COMP%]{display:flex;width:100%}.img-container[_ngcontent-%COMP%]{width:200px;margin-right:16px}img[mat-card-image][_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.product-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.product-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:12px}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){font-size:24px;font-weight:700;color:#07c;margin-top:auto;margin-right:10px;text-align:right}.product-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{display:flex;justify-content:flex-end}@media (max-width: 768px){.product-details[_ngcontent-%COMP%]{flex-direction:column}.img-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;margin:auto auto 10px}}"]}),o})();function Q(o,e){1&o&&(t.TgZ(0,"aside",6)(1,"h2"),t._uU(2,"Filtros"),t.qZA(),t._UZ(3,"app-product-filters"),t.qZA())}function $(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){return t.CHM(n),t.oxw().openFilters()}),t.TgZ(1,"mat-icon"),t._uU(2,"filter_list"),t.qZA()()}}function H(o,e){1&o&&(t.ynx(0),t._UZ(1,"app-product-card-skeleton"),t.BQk())}function N(o,e){1&o&&t._UZ(0,"app-product-card",9),2&o&&t.Q6J("product",e.$implicit)}function E(o,e){if(1&o&&(t.YNc(0,N,1,1,"app-product-card",8),t.ALo(1,"async")),2&o){const n=t.oxw();t.Q6J("ngForOf",t.lcZ(1,1,n.$products))}}const z=[{path:"products",component:(()=>{class o{constructor(n,i){this.dialog=n,this.store=i,this.showFilters=!1,this.isMobile=window.innerWidth<768,window.onresize=()=>{this.isMobile=window.innerWidth<768},this.store.dispatch(h({filter:{}})),this.$isLoading=this.store.select(S),this.$products=this.store.select(L)}ngOnInit(){}openFilters(){this.dialog.open(k,{width:"300px"})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.uw),t.Y36(r.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:10,vars:6,consts:[[1,"container-products"],["class","filters-section",4,"ngIf"],[1,"products-section"],["mat-icon-button","",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"filters-section"],["mat-icon-button","",3,"click"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,Q,4,0,"aside",1),t.TgZ(2,"main",2)(3,"h2"),t.YNc(4,$,3,0,"button",3),t._uU(5," Cartas"),t.qZA(),t.YNc(6,H,2,0,"ng-container",4),t.ALo(7,"async"),t.YNc(8,E,2,3,"ng-template",null,5,t.W1O),t.qZA()()),2&n){const s=t.MAs(9);t.xp6(1),t.Q6J("ngIf",!i.isMobile),t.xp6(3),t.Q6J("ngIf",i.isMobile),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,4,i.$isLoading))("ngIfElse",s)}},directives:[p.O5,M,f.lW,x.Hw,I,p.sg,q],pipes:[p.Ov],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.container-products[_ngcontent-%COMP%]{display:flex;padding:20px}.filters-section[_ngcontent-%COMP%]{flex:1;margin-right:20px}.products-section[_ngcontent-%COMP%]{flex:3}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}"]}),o})()},{path:"",redirectTo:"products",pathMatch:"full"}];let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(z)],m.Bz]}),o})();var X=c(9904),C=c(6517),W=c(1086),B=c(8896),D=c(7545),G=c(4850),K=c(7221),V=c(3309);let tt=(()=>{class o{constructor(n,i){this.actions$=n,this.service=i,this.loadUser$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(h),(0,D.w)(s=>this.service.apiProductGetProductsByFilterGet$Json(s.filter).pipe((0,G.U)(d=>y({products:d.payload})),(0,K.K)(d=>{var a,l;return d?(0,W.of)(O({error:null!==(l=null===(a=d.error)||void 0===a?void 0:a.message)&&void 0!==l?l:""})):B.E})))))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(C.eX),t.LFG(V.M5))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),ot=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,X.m,R,r.Aw.forFeature(Z,w),C.sQ.forFeature([tt])]]}),o})()}}]);