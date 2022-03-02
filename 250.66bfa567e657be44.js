"use strict";(self.webpackChunksbchain=self.webpackChunksbchain||[]).push([[250],{46250:(se,Z,i)=>{i.r(Z),i.d(Z,{WhitePaperModule:()=>ie});var c=i(99826),f=i(47423),x=i(67322),v=i(25245),T=i(77531),_=i(85899),y=i(74107),m=i(2638),k=i(32368),P=i(87238),W=i(60447),q=i(44466),e=i(5e3);let Q=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["whitepaper"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},directives:[c.lC],encapsulation:2,changeDetection:0}),n})();var p=i(61135),C=i(77579),g=i(82722),U=i(39841),b=i(18505),J=i(54004),F=i(63900),w=i(62843),I=i(39646),D=i(40520);let h=(()=>{class n{constructor(t){this._httpClient=t,this._categories=new p.X(null),this._content=new p.X(null),this._contents=new p.X(null)}get categories$(){return this._categories.asObservable()}get contents$(){return this._contents.asObservable()}get content$(){return this._content.asObservable()}getCategories(){return this._httpClient.get("api/apps/whitepaper/categories").pipe((0,b.b)(t=>{this._categories.next(t)}))}getContents(){return this._httpClient.get("api/apps/whitepaper/contents").pipe((0,b.b)(t=>{this._contents.next(t)}))}getContentById(t){return this._httpClient.get("api/apps/whitepaper/contents/content",{params:{id:t}}).pipe((0,J.U)(r=>(this._content.next(r),r)),(0,F.w)(r=>r?(0,I.of)(r):(0,w._)("Could not found content with id of "+t+"!")))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(D.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var A=i(20393),B=i(90508),u=i(69808);function L(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",14),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("value",t.slug),e.xp6(1),e.Oqu(t.title)}}const O=function(n){return[n]};function R(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",23),e.TgZ(2,"div",24),e.TgZ(3,"div",25),e._uU(4),e.qZA(),e.TgZ(5,"div",26),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",27),e.TgZ(8,"div",28),e.TgZ(9,"button",29),e.TgZ(10,"span",30),e.ynx(11),e.TgZ(12,"span"),e._uU(13,"Read"),e.qZA(),e.BQk(),e._UZ(14,"mat-icon",31),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Oqu(t.description),e.xp6(3),e.Q6J("routerLink",e.VKq(4,O,t.id)),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function N(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",22),e.YNc(2,R,15,6,"ng-container",15),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.filteredContents)("ngForTrackBy",t.trackByFn)}}function M(n,o){1&n&&(e.TgZ(0,"div",32),e._UZ(1,"mat-icon",33),e.TgZ(2,"div",34),e._uU(3,"Not found!"),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("svgIcon","iconsmind:file_search"))}let Y=(()=>{class n{constructor(t,r,s,a){this._activatedRoute=t,this._changeDetectorRef=r,this._router=s,this._whitepaperService=a,this.filters={categorySlug$:new p.X("all"),query$:new p.X(""),hideCompleted$:new p.X(!1)},this._unsubscribeAll=new C.x}ngOnInit(){this._whitepaperService.categories$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._whitepaperService.contents$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.contents=this.filteredContents=t,this._changeDetectorRef.markForCheck()}),(0,U.a)([this.filters.categorySlug$,this.filters.query$,this.filters.hideCompleted$]).subscribe(([t,r,s])=>{this.filteredContents=this.contents,"all"!==t&&(this.filteredContents=this.filteredContents.filter(a=>a.category===t)),""!==r&&(this.filteredContents=this.filteredContents.filter(a=>a.title.toLowerCase().includes(r.toLowerCase())||a.description.toLowerCase().includes(r.toLowerCase())||a.category.toLowerCase().includes(r.toLowerCase()))),s&&(this.filteredContents=this.filteredContents.filter(a=>0===a.progress.completed))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterByQuery(t){this.filters.query$.next(t)}filterByCategory(t){this.filters.categorySlug$.next(t.value)}toggleCompleted(t){this.filters.hideCompleted$.next(t.checked)}trackByFn(t,r){return r.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.gz),e.Y36(e.sBO),e.Y36(c.F0),e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["whitepaper-list"]],decls:26,vars:8,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"relative","flex-0","py-8","px-4","sm:p-16","overflow-hidden","bg-gray-800","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"mt-3","sm:text-2xl","text-center","tracking-tight","text-secondary","w-full","max-w-sm","md:max-w-4xl"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-xs","sm:max-w-none"],[1,"sbchain-mat-no-subscript","w-full","sm:w-36"],[3,"value","selectionChange"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"sbchain-mat-no-subscript","w-full","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","",3,"input"],["query",""],[4,"ngIf","ngIfElse"],["noContents",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],[1,"flex","flex-col","h-60","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"flex","flex-col","w-full","mt-auto"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"routerLink"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-20",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e.TgZ(3,"g",3),e._UZ(4,"circle",4),e._UZ(5,"circle",5),e.qZA(),e.qZA(),e.kcU(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e._uU(8," White Paper "),e.qZA(),e.TgZ(9,"div",8),e._uU(10," This whitepaper is our Software Architecture Document. This is a living document that is updated as implementations of features and services are completed, and as the architecture and implementation changes."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",9),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"mat-form-field",12),e.TgZ(15,"mat-select",13),e.NdJ("selectionChange",function(l){return r.filterByCategory(l)}),e.TgZ(16,"mat-option",14),e._uU(17,"All"),e.qZA(),e.YNc(18,L,3,2,"ng-container",15),e.qZA(),e.qZA(),e.TgZ(19,"mat-form-field",16),e._UZ(20,"mat-icon",17),e.TgZ(21,"input",18,19),e.NdJ("input",function(){e.CHM(s);const l=e.MAs(22);return r.filterByQuery(l.value)}),e.qZA(),e.qZA(),e.qZA(),e.YNc(23,N,3,2,"ng-container",20),e.YNc(24,M,4,1,"ng-template",null,21,e.W1O),e.qZA(),e.qZA(),e.qZA()}if(2&t){const s=e.MAs(25);e.xp6(15),e.Q6J("value","all"),e.xp6(1),e.Q6J("value","all"),e.xp6(2),e.Q6J("ngForOf",r.categories)("ngForTrackBy",r.trackByFn),e.xp6(1),e.Q6J("floatLabel","always"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(3),e.Q6J("ngIf",r.filteredContents.length)("ngIfElse",s)}},directives:[A.PQ,x.KE,y.gD,B.ey,u.sg,v.Hw,x.qo,T.Nt,u.O5,f.lW,c.rH],encapsulation:2,changeDetection:0}),n})();var $=i(71337),d=i(53251);const j=["contentSteps"],E=function(n,o){return{"bg-primary":n,"bg-gray-300 dark:bg-gray-600":o}};function z(n,o){if(1&n&&(e.ynx(0),e._UZ(1,"div",44),e.BQk()),2&n){const t=e.oxw().$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(1,E,t.order<r.currentStep,t.order>=r.currentStep))}}function H(n,o){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",7),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function X(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",45),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.order+1,"")}}function G(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",46),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.order+1,"")}}const V=function(n,o,t){return{"bg-primary dark:bg-primary text-on-primary group-hover:bg-primary-800":n,"ring-primary":o,"ring-gray-300 dark:ring-gray-600 group-hover:ring-gray-400":t}};function K(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",37),e.YNc(2,z,2,4,"ng-container",38),e.TgZ(3,"div",39),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().goToStep(a.order)}),e.TgZ(4,"div",40),e.YNc(5,H,2,1,"ng-container",38),e.YNc(6,X,3,1,"ng-container",38),e.YNc(7,G,3,1,"ng-container",38),e.qZA(),e.TgZ(8,"div",41),e.TgZ(9,"div",42),e._uU(10),e.qZA(),e.TgZ(11,"div",43),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=o.$implicit,r=o.last,s=e.oxw();e.xp6(1),e.ekj("current-step",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",!r),e.xp6(2),e.Q6J("ngClass",e.kEZ(9,V,t.order<s.currentStep,t.order===s.currentStep,t.order>s.currentStep)),e.xp6(1),e.Q6J("ngIf",t.order<s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order>s.currentStep),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.subtitle)}}function ee(n,o){if(1&n&&e._UZ(0,"div",48),2&n){const t=e.oxw().$implicit;e.Q6J("innerHTML",t.content,e.oJD)}}function te(n,o){1&n&&(e.ynx(0),e.TgZ(1,"mat-tab"),e.YNc(2,ee,1,1,"ng-template",47),e.qZA(),e.BQk())}const S=function(){return[".."]};let ne=(()=>{class n{constructor(t,r,s,a,l){this._document=t,this._whitepaperService=r,this._changeDetectorRef=s,this._elementRef=a,this._sbchainMediaWatcherService=l,this.currentStep=0,this.drawerMode="side",this.drawerOpened=!0,this._unsubscribeAll=new C.x}ngOnInit(){this._whitepaperService.categories$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._whitepaperService.content$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(t=>{this.content=t,this.goToStep(t.progress.currentStep),this._changeDetectorRef.markForCheck()}),this._sbchainMediaWatcherService.onMediaChange$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(({matchingAliases:t})=>{t.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToStep(t){this.currentStep=t,this.contentSteps.selectedIndex=this.currentStep,this._changeDetectorRef.markForCheck()}goToPreviousStep(){0!==this.currentStep&&(this.goToStep(this.currentStep-1),this._scrollCurrentStepElementIntoView())}goToNextStep(){this.currentStep!==this.content.totalSteps-1&&(this.goToStep(this.currentStep+1),this._scrollCurrentStepElementIntoView())}trackByFn(t,r){return r.id||t}_scrollCurrentStepElementIntoView(){setTimeout(()=>{const t=this._document.getElementsByClassName("current-step")[0];t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.K0),e.Y36(h),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36($.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["whitepaper-details"]],viewQuery:function(t,r){if(1&t&&e.Gf(j,7),2&t){let s;e.iGM(s=e.CRH())&&(r.contentSteps=s.first)}},decls:60,vars:28,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-90","dark:bg-gray-900",3,"autoFocus","mode","opened"],["matDrawer",""],[1,"flex","flex-col","items-start","p-8","border-b"],[1,"inline-flex","items-center","leading-6","text-primary","hover:underline",3,"routerLink"],[1,"inline-flex","items-center"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-1.5","font-medium","leading-5"],[1,"mt-3","text-2xl","font-semibold"],[1,"text-secondary"],[1,"py-2","px-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","overflow-hidden"],[1,"lg:hidden","flex","flex-0","items-center","py-2","pl-4","pr-6","sm:py-4","md:pl-6","md:pr-8","border-b","lg:border-b-0","bg-card","dark:bg-transparent"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"ml-2.5","text-md","sm:text-xl","font-medium","tracking-tight","truncate"],[1,"hidden","lg:block","flex-0","h-0.5","w-full",3,"value"],["cdkScrollable","",1,"flex-auto","overflow-y-auto"],[1,"sbchain-mat-no-header",3,"animationDuration"],["contentSteps",""],[1,"z-10","sticky","hidden","lg:flex","bottom-4","p-4"],[1,"flex","items-center","justify-center","mx-auto","p-2","rounded-full","shadow-lg","bg-primary"],["mat-flat-button","",1,"flex-0",3,"color","click"],[1,"mr-2",3,"svgIcon"],[1,"mr-1"],[1,"flex","items-center","justify-center","mx-2.5","font-medium","leading-5","text-on-primary"],[1,"mx-0.5","text-hint"],[1,"ml-1"],[1,"ml-2",3,"svgIcon"],[1,"lg:hidden","flex","items-center","p-4","border-t","bg-card"],["mat-icon-button","",3,"click"],[1,"flex","items-center","justify-center","ml-1","lg:ml-2","font-medium","leading-5"],[1,"flex-auto","ml-6","rounded-full",3,"value"],["mat-icon-button","",1,"ml-4",3,"click"],["mat-icon-button","",1,"ml-0.5",3,"click"],[1,"relative","group","py-6"],[4,"ngIf"],[1,"relative","flex","items-start","cursor-pointer",3,"click"],[1,"flex","flex-0","items-center","justify-center","w-8","h-8","rounded-full","ring-2","ring-inset","ring-transparent","bg-card","dark:bg-default",3,"ngClass"],[1,"ml-4"],[1,"font-medium","leading-4"],[1,"mt-1.5","text-md","leading-4","text-secondary"],[1,"absolute","top-6","left-4","w-0.5","h-full","-ml-px",3,"ngClass"],[1,"text-md","font-semibold","text-primary","dark:text-primary-500"],[1,"text-md","font-semibold","text-hint","group-hover:text-secondary"],["matTabContent",""],[1,"prose","prose-sm","max-w-3xl","mx-auto","sm:my-2","lg:mt-4","p-6","sm:p-10","sm:py-12","rounded-2xl","shadow","overflow-hidden","bg-card","text-justify",3,"innerHTML"]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"mat-drawer-container",1),e.TgZ(2,"mat-drawer",2,3),e.TgZ(4,"div",4),e.TgZ(5,"a",5),e.TgZ(6,"span",6),e._UZ(7,"mat-icon",7),e.TgZ(8,"span",8),e._uU(9,"Back to Table of Contents "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e._uU(11,"White Paper"),e.qZA(),e.TgZ(12,"div",10),e._uU(13,"Last Update : March 1, 2022"),e.qZA(),e.qZA(),e.TgZ(14,"div",11),e.TgZ(15,"ol"),e.YNc(16,K,13,13,"ng-container",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"mat-drawer-content",13),e.TgZ(18,"div",14),e.TgZ(19,"button",15),e._UZ(20,"mat-icon",16),e.qZA(),e.TgZ(21,"h2",17),e._uU(22),e.qZA(),e.qZA(),e._UZ(23,"mat-progress-bar",18),e.TgZ(24,"div",19),e.TgZ(25,"mat-tab-group",20,21),e.YNc(27,te,3,0,"ng-container",12),e.qZA(),e.TgZ(28,"div",22),e.TgZ(29,"div",23),e.TgZ(30,"button",24),e.NdJ("click",function(){return r.goToPreviousStep()}),e._UZ(31,"mat-icon",25),e.TgZ(32,"span",26),e._uU(33,"Prev"),e.qZA(),e.qZA(),e.TgZ(34,"div",27),e.TgZ(35,"span"),e._uU(36),e.qZA(),e.TgZ(37,"span",28),e._uU(38,"/"),e.qZA(),e.TgZ(39,"span"),e._uU(40),e.qZA(),e.qZA(),e.TgZ(41,"button",24),e.NdJ("click",function(){return r.goToNextStep()}),e.TgZ(42,"span",29),e._uU(43,"Next"),e.qZA(),e._UZ(44,"mat-icon",30),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(45,"div",31),e.TgZ(46,"button",32),e.NdJ("click",function(){return e.CHM(s),e.MAs(3).toggle()}),e._UZ(47,"mat-icon",16),e.qZA(),e.TgZ(48,"div",33),e.TgZ(49,"span"),e._uU(50),e.qZA(),e.TgZ(51,"span",28),e._uU(52,"/"),e.qZA(),e.TgZ(53,"span"),e._uU(54),e.qZA(),e.qZA(),e._UZ(55,"mat-progress-bar",34),e.TgZ(56,"button",35),e.NdJ("click",function(){return r.goToPreviousStep()}),e._UZ(57,"mat-icon",16),e.qZA(),e.TgZ(58,"button",36),e.NdJ("click",function(){return r.goToNextStep()}),e._UZ(59,"mat-icon",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",r.drawerMode)("opened",r.drawerOpened),e.xp6(3),e.Q6J("routerLink",e.DdM(26,S)),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-sm-left"),e.xp6(9),e.Q6J("ngForOf",r.content.steps)("ngForTrackBy",r.trackByFn),e.xp6(3),e.Q6J("routerLink",e.DdM(27,S)),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),e.xp6(2),e.hij(" ",r.content.title," "),e.xp6(1),e.Q6J("value",100*(r.currentStep+1)/r.content.totalSteps),e.xp6(2),e.Q6J("animationDuration","200"),e.xp6(2),e.Q6J("ngForOf",r.content.steps)("ngForTrackBy",r.trackByFn),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(5),e.Oqu(r.currentStep+1),e.xp6(4),e.Oqu(r.content.totalSteps),e.xp6(1),e.Q6J("color","primary"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:view-list"),e.xp6(3),e.Oqu(r.currentStep+1),e.xp6(4),e.Oqu(r.content.totalSteps),e.xp6(1),e.Q6J("value",100*(r.currentStep+1)/r.content.totalSteps),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"))},directives:[m.kh,m.jA,c.yS,v.Hw,u.sg,m.LW,f.lW,c.rH,_.pW,A.PQ,d.SP,u.O5,u.mk,d.uX,d.Vc],encapsulation:2,changeDetection:0}),n})();var re=i(70262);const oe=[{path:"",component:Q,resolve:{categories:(()=>{class n{constructor(t){this._whitepaperService=t}resolve(t,r){return this._whitepaperService.getCategories()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},children:[{path:"",pathMatch:"full",component:Y,resolve:{contents:(()=>{class n{constructor(t){this._whitepaperService=t}resolve(t,r){return this._whitepaperService.getContents()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}},{path:":id",component:ne,resolve:{content:(()=>{class n{constructor(t,r){this._router=t,this._whitepaperService=r}resolve(t,r){return this._whitepaperService.getContentById(t.paramMap.get("id")).pipe((0,re.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,w._)(s)}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(c.F0),e.LFG(h))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]}];let ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild(oe),f.ot,x.lN,v.Ps,T.c,_.Cv,y.LD,m.SJ,k.rP,P.AV,W.H,q.m,d.Nh]]}),n})()}}]);