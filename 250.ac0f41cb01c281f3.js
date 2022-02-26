"use strict";(self.webpackChunksbchain=self.webpackChunksbchain||[]).push([[250],{46250:(be,Z,i)=>{i.r(Z),i.d(Z,{WhitePaperModule:()=>Te});var p=i(99826),f=i(47423),_=i(67322),x=i(25245),T=i(77531),v=i(85899),b=i(14102),d=i(2638),y=i(32368),C=i(87238),q=i(60447),W=i(44466),e=i(5e3);let J=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["whitepaper"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},directives:[p.lC],encapsulation:2,changeDetection:0}),n})();var g=i(61135),A=i(77579),u=i(82722),U=i(39841),k=i(18505),I=i(54004),B=i(63900),w=i(62843),L=i(39646),F=i(40520);let m=(()=>{class n{constructor(t){this._httpClient=t,this._categories=new g.X(null),this._course=new g.X(null),this._courses=new g.X(null)}get categories$(){return this._categories.asObservable()}get courses$(){return this._courses.asObservable()}get course$(){return this._course.asObservable()}getCategories(){return this._httpClient.get("api/apps/whitepaper/categories").pipe((0,k.b)(t=>{this._categories.next(t)}))}getCourses(){return this._httpClient.get("api/apps/whitepaper/courses").pipe((0,k.b)(t=>{this._courses.next(t)}))}getCourseById(t){return this._httpClient.get("api/apps/whitepaper/courses/course",{params:{id:t}}).pipe((0,I.U)(r=>(this._course.next(r),r)),(0,B.w)(r=>r?(0,L.of)(r):(0,w._)("Could not found course with id of "+t+"!")))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(F.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Q=i(20393),D=i(90508),c=i(69808),S=i(57681);function N(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",13),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("value",t.slug),e.xp6(1),e.Oqu(t.title)}}const Y=function(n,o,t,r){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":n,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":o,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":r}};function O(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",43),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,Y,"web"===t.slug,"android"===t.slug,"cloud"===t.slug,"firebase"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}function R(n,o){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",44),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:badge-check")("matTooltip","You completed this course at least once"))}function M(n,o){1&n&&(e.ynx(0),e.TgZ(1,"div",33),e._uU(2,"Never completed"),e.qZA(),e.BQk())}function $(n,o){1&n&&(e.ynx(0),e._uU(1,"once"),e.BQk())}function j(n,o){1&n&&(e.ynx(0),e._uU(1,"twice"),e.BQk())}const z=function(){return{"=0":"time","=1":"time",other:"times"}};function E(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.AsE("",t.progress.completed," ",e.xi3(2,2,t.progress.completed,e.DdM(5,z))," ")}}function H(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",33),e.TgZ(2,"span"),e._uU(3,"Completed"),e.qZA(),e.TgZ(4,"span",45),e.YNc(5,$,2,0,"ng-container",26),e.YNc(6,j,2,0,"ng-container",26),e.YNc(7,E,3,6,"ng-container",26),e.qZA(),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(5),e.Q6J("ngIf",1===t.progress.completed),e.xp6(1),e.Q6J("ngIf",2===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>2)}}function X(n,o){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Start"),e.qZA(),e.BQk())}function G(n,o){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Start again"),e.qZA(),e.BQk())}function V(n,o){if(1&n&&(e.ynx(0),e.YNc(1,X,3,0,"ng-container",26),e.YNc(2,G,3,0,"ng-container",26),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0)}}function K(n,o){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Continue"),e.qZA(),e.BQk())}const ee=function(n){return[n]};function te(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",23),e.TgZ(2,"div",24),e.TgZ(3,"div",25),e.YNc(4,O,3,7,"ng-container",26),e.ALo(5,"sbchainFindByKey"),e.TgZ(6,"div",27),e.YNc(7,R,2,2,"ng-container",26),e.qZA(),e.qZA(),e.TgZ(8,"div",28),e._uU(9),e.qZA(),e.TgZ(10,"div",29),e._uU(11),e.qZA(),e._UZ(12,"div",30),e.TgZ(13,"div",31),e._UZ(14,"mat-icon",32),e.TgZ(15,"div",33),e._uU(16),e.qZA(),e.qZA(),e.TgZ(17,"div",34),e._UZ(18,"mat-icon",32),e.YNc(19,M,3,0,"ng-container",26),e.YNc(20,H,8,3,"ng-container",26),e.qZA(),e.qZA(),e.TgZ(21,"div",35),e.TgZ(22,"div",36),e._UZ(23,"div",37),e.ALo(24,"percent"),e._UZ(25,"mat-progress-bar",38),e.qZA(),e.TgZ(26,"div",39),e.TgZ(27,"button",40),e.TgZ(28,"span",41),e.YNc(29,V,3,2,"ng-container",26),e.YNc(30,K,3,0,"ng-container",26),e._UZ(31,"mat-icon",42),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&n){const t=o.$implicit,r=e.oxw(2);e.xp6(4),e.Q6J("ngIf",e.Dn7(5,17,t.category,"slug",r.categories)),e.xp6(3),e.Q6J("ngIf",t.progress.completed>0),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Oqu(t.description),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",t.duration," minutes"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:academic-cap"),e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0),e.xp6(3),e.Q6J("matTooltip",e.lcZ(24,21,t.progress.currentStep/t.totalSteps))("matTooltipPosition","above")("matTooltipClass","-mb-0.5"),e.xp6(2),e.Q6J("value",100*t.progress.currentStep/t.totalSteps),e.xp6(2),e.Q6J("routerLink",e.VKq(23,ee,t.id)),e.xp6(2),e.Q6J("ngIf",0===t.progress.currentStep),e.xp6(1),e.Q6J("ngIf",t.progress.currentStep>0),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function ne(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",22),e.YNc(2,te,32,25,"ng-container",14),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.filteredCourses)("ngForTrackBy",t.trackByFn)}}function re(n,o){1&n&&(e.TgZ(0,"div",46),e._UZ(1,"mat-icon",47),e.TgZ(2,"div",48),e._uU(3,"Not found!"),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("svgIcon","iconsmind:file_search"))}let oe=(()=>{class n{constructor(t,r,s,a){this._activatedRoute=t,this._changeDetectorRef=r,this._router=s,this._whitepaperService=a,this.filters={categorySlug$:new g.X("all"),query$:new g.X(""),hideCompleted$:new g.X(!1)},this._unsubscribeAll=new A.x}ngOnInit(){this._whitepaperService.categories$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._whitepaperService.courses$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.courses=this.filteredCourses=t,this._changeDetectorRef.markForCheck()}),(0,U.a)([this.filters.categorySlug$,this.filters.query$,this.filters.hideCompleted$]).subscribe(([t,r,s])=>{this.filteredCourses=this.courses,"all"!==t&&(this.filteredCourses=this.filteredCourses.filter(a=>a.category===t)),""!==r&&(this.filteredCourses=this.filteredCourses.filter(a=>a.title.toLowerCase().includes(r.toLowerCase())||a.description.toLowerCase().includes(r.toLowerCase())||a.category.toLowerCase().includes(r.toLowerCase()))),s&&(this.filteredCourses=this.filteredCourses.filter(a=>0===a.progress.completed))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterByQuery(t){this.filters.query$.next(t)}filterByCategory(t){this.filters.categorySlug$.next(t.value)}toggleCompleted(t){this.filters.hideCompleted$.next(t.checked)}trackByFn(t,r){return r.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.gz),e.Y36(e.sBO),e.Y36(p.F0),e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["whitepaper-list"]],decls:26,vars:9,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"relative","flex-0","py-8","px-4","sm:p-16","overflow-hidden","bg-gray-800","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-xs","sm:max-w-none"],[1,"sbchain-mat-no-subscript","w-full","sm:w-36"],[3,"value","selectionChange"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"sbchain-mat-no-subscript","w-full","sm:w-72","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","",3,"input"],["query",""],[1,"mt-8","sm:mt-0","sm:ml-auto",3,"color","change"],[4,"ngIf","ngIfElse"],["noCourses",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],[1,"flex","flex-col","h-96","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"flex","items-center","justify-between"],[4,"ngIf"],[1,"flex","items-center"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","items-center","mt-2","leading-5","text-md","text-secondary"],[1,"flex","flex-col","w-full","mt-auto"],[1,"relative","h-0.5"],[1,"z-10","absolute","inset-x-0","h-6","-mt-3",3,"matTooltip","matTooltipPosition","matTooltipClass"],[1,"h-0.5",3,"value"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"routerLink"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"icon-size-5","text-green-600",3,"svgIcon","matTooltip"],[1,"ml-1"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-20",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e.TgZ(3,"g",3),e._UZ(4,"circle",4),e._UZ(5,"circle",5),e.qZA(),e.qZA(),e.kcU(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e._uU(8," White Paper "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"div",10),e.TgZ(12,"mat-form-field",11),e.TgZ(13,"mat-select",12),e.NdJ("selectionChange",function(l){return r.filterByCategory(l)}),e.TgZ(14,"mat-option",13),e._uU(15,"All"),e.qZA(),e.YNc(16,N,3,2,"ng-container",14),e.qZA(),e.qZA(),e.TgZ(17,"mat-form-field",15),e._UZ(18,"mat-icon",16),e.TgZ(19,"input",17,18),e.NdJ("input",function(){e.CHM(s);const l=e.MAs(20);return r.filterByQuery(l.value)}),e.qZA(),e.qZA(),e.TgZ(21,"mat-slide-toggle",19),e.NdJ("change",function(l){return r.toggleCompleted(l)}),e._uU(22," Hide completed "),e.qZA(),e.qZA(),e.YNc(23,ne,3,2,"ng-container",20),e.YNc(24,re,4,1,"ng-template",null,21,e.W1O),e.qZA(),e.qZA(),e.qZA()}if(2&t){const s=e.MAs(25);e.xp6(13),e.Q6J("value","all"),e.xp6(1),e.Q6J("value","all"),e.xp6(2),e.Q6J("ngForOf",r.categories)("ngForTrackBy",r.trackByFn),e.xp6(1),e.Q6J("floatLabel","always"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(3),e.Q6J("color","primary"),e.xp6(2),e.Q6J("ngIf",r.filteredCourses.length)("ngIfElse",s)}},directives:[Q.PQ,_.KE,b.gD,D.ey,c.sg,x.Hw,_.qo,T.Nt,y.Rr,c.O5,C.gM,v.pW,f.lW,p.rH,c.mk],pipes:[S.y,c.Zx,c.Gx],encapsulation:2,changeDetection:0}),n})();var ie=i(71337),h=i(53251);const se=["courseSteps"],ae=function(n,o,t,r){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":n,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":o,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":r}};function ce(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",41),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,ae,"web"===t.slug,"android"===t.slug,"cloud"===t.slug,"firebase"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}const le=function(n,o){return{"bg-primary":n,"bg-gray-300 dark:bg-gray-600":o}};function pe(n,o){if(1&n&&(e.ynx(0),e._UZ(1,"div",48),e.BQk()),2&n){const t=e.oxw().$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(1,le,t.order<r.currentStep,t.order>=r.currentStep))}}function ge(n,o){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",7),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function ue(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",49),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}function me(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",50),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}const de=function(n,o,t){return{"bg-primary dark:bg-primary text-on-primary group-hover:bg-primary-800":n,"ring-primary":o,"ring-gray-300 dark:ring-gray-600 group-hover:ring-gray-400":t}};function he(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",42),e.YNc(2,pe,2,4,"ng-container",9),e.TgZ(3,"div",43),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().goToStep(a.order)}),e.TgZ(4,"div",44),e.YNc(5,ge,2,1,"ng-container",9),e.YNc(6,ue,3,1,"ng-container",9),e.YNc(7,me,3,1,"ng-container",9),e.qZA(),e.TgZ(8,"div",45),e.TgZ(9,"div",46),e._uU(10),e.qZA(),e.TgZ(11,"div",47),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=o.$implicit,r=o.last,s=e.oxw();e.xp6(1),e.ekj("current-step",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",!r),e.xp6(2),e.Q6J("ngClass",e.kEZ(9,de,t.order<s.currentStep,t.order===s.currentStep,t.order>s.currentStep)),e.xp6(1),e.Q6J("ngIf",t.order<s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order>s.currentStep),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.subtitle)}}function fe(n,o){if(1&n&&e._UZ(0,"div",52),2&n){const t=e.oxw().$implicit;e.Q6J("innerHTML",t.content,e.oJD)}}function _e(n,o){1&n&&(e.ynx(0),e.TgZ(1,"mat-tab"),e.YNc(2,fe,1,1,"ng-template",51),e.qZA(),e.BQk())}const P=function(){return[".."]};let xe=(()=>{class n{constructor(t,r,s,a,l){this._document=t,this._whitepaperService=r,this._changeDetectorRef=s,this._elementRef=a,this._sbchainMediaWatcherService=l,this.currentStep=0,this.drawerMode="side",this.drawerOpened=!0,this._unsubscribeAll=new A.x}ngOnInit(){this._whitepaperService.categories$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._whitepaperService.course$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(t=>{this.course=t,this.goToStep(t.progress.currentStep),this._changeDetectorRef.markForCheck()}),this._sbchainMediaWatcherService.onMediaChange$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(({matchingAliases:t})=>{t.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToStep(t){this.currentStep=t,this.courseSteps.selectedIndex=this.currentStep,this._changeDetectorRef.markForCheck()}goToPreviousStep(){0!==this.currentStep&&(this.goToStep(this.currentStep-1),this._scrollCurrentStepElementIntoView())}goToNextStep(){this.currentStep!==this.course.totalSteps-1&&(this.goToStep(this.currentStep+1),this._scrollCurrentStepElementIntoView())}trackByFn(t,r){return r.id||t}_scrollCurrentStepElementIntoView(){setTimeout(()=>{const t=this._document.getElementsByClassName("current-step")[0];t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.K0),e.Y36(m),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(ie.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["whitepaper-details"]],viewQuery:function(t,r){if(1&t&&e.Gf(se,7),2&t){let s;e.iGM(s=e.CRH())&&(r.courseSteps=s.first)}},decls:66,vars:37,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-90","dark:bg-gray-900",3,"autoFocus","mode","opened"],["matDrawer",""],[1,"flex","flex-col","items-start","p-8","border-b"],[1,"inline-flex","items-center","leading-6","text-primary","hover:underline",3,"routerLink"],[1,"inline-flex","items-center"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-1.5","font-medium","leading-5"],[4,"ngIf"],[1,"mt-3","text-2xl","font-semibold"],[1,"text-secondary"],[1,"mt-6","flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"py-2","px-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","overflow-hidden"],[1,"lg:hidden","flex","flex-0","items-center","py-2","pl-4","pr-6","sm:py-4","md:pl-6","md:pr-8","border-b","lg:border-b-0","bg-card","dark:bg-transparent"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"ml-2.5","text-md","sm:text-xl","font-medium","tracking-tight","truncate"],[1,"hidden","lg:block","flex-0","h-0.5","w-full",3,"value"],["cdkScrollable","",1,"flex-auto","overflow-y-auto"],[1,"sbchain-mat-no-header",3,"animationDuration"],["courseSteps",""],[1,"z-10","sticky","hidden","lg:flex","bottom-4","p-4"],[1,"flex","items-center","justify-center","mx-auto","p-2","rounded-full","shadow-lg","bg-primary"],["mat-flat-button","",1,"flex-0",3,"color","click"],[1,"mr-2",3,"svgIcon"],[1,"mr-1"],[1,"flex","items-center","justify-center","mx-2.5","font-medium","leading-5","text-on-primary"],[1,"mx-0.5","text-hint"],[1,"ml-1"],[1,"ml-2",3,"svgIcon"],[1,"lg:hidden","flex","items-center","p-4","border-t","bg-card"],["mat-icon-button","",3,"click"],[1,"flex","items-center","justify-center","ml-1","lg:ml-2","font-medium","leading-5"],[1,"flex-auto","ml-6","rounded-full",3,"value"],["mat-icon-button","",1,"ml-4",3,"click"],["mat-icon-button","",1,"ml-0.5",3,"click"],[1,"mt-7","py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"relative","group","py-6"],[1,"relative","flex","items-start","cursor-pointer",3,"click"],[1,"flex","flex-0","items-center","justify-center","w-8","h-8","rounded-full","ring-2","ring-inset","ring-transparent","bg-card","dark:bg-default",3,"ngClass"],[1,"ml-4"],[1,"font-medium","leading-4"],[1,"mt-1.5","text-md","leading-4","text-secondary"],[1,"absolute","top-6","left-4","w-0.5","h-full","-ml-px",3,"ngClass"],[1,"text-md","font-semibold","text-primary","dark:text-primary-500"],[1,"text-md","font-semibold","text-hint","group-hover:text-secondary"],["matTabContent",""],[1,"prose","prose-sm","max-w-3xl","mx-auto","sm:my-2","lg:mt-4","p-6","sm:p-10","sm:py-12","rounded-2xl","shadow","overflow-hidden","bg-card",3,"innerHTML"]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"mat-drawer-container",1),e.TgZ(2,"mat-drawer",2,3),e.TgZ(4,"div",4),e.TgZ(5,"a",5),e.TgZ(6,"span",6),e._UZ(7,"mat-icon",7),e.TgZ(8,"span",8),e._uU(9,"Back to courses"),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,ce,3,7,"ng-container",9),e.ALo(11,"sbchainFindByKey"),e.TgZ(12,"div",10),e._uU(13),e.qZA(),e.TgZ(14,"div",11),e._uU(15),e.qZA(),e.TgZ(16,"div",12),e._UZ(17,"mat-icon",13),e.TgZ(18,"div",14),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",15),e.TgZ(21,"ol"),e.YNc(22,he,13,13,"ng-container",16),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"mat-drawer-content",17),e.TgZ(24,"div",18),e.TgZ(25,"button",19),e._UZ(26,"mat-icon",20),e.qZA(),e.TgZ(27,"h2",21),e._uU(28),e.qZA(),e.qZA(),e._UZ(29,"mat-progress-bar",22),e.TgZ(30,"div",23),e.TgZ(31,"mat-tab-group",24,25),e.YNc(33,_e,3,0,"ng-container",16),e.qZA(),e.TgZ(34,"div",26),e.TgZ(35,"div",27),e.TgZ(36,"button",28),e.NdJ("click",function(){return r.goToPreviousStep()}),e._UZ(37,"mat-icon",29),e.TgZ(38,"span",30),e._uU(39,"Prev"),e.qZA(),e.qZA(),e.TgZ(40,"div",31),e.TgZ(41,"span"),e._uU(42),e.qZA(),e.TgZ(43,"span",32),e._uU(44,"/"),e.qZA(),e.TgZ(45,"span"),e._uU(46),e.qZA(),e.qZA(),e.TgZ(47,"button",28),e.NdJ("click",function(){return r.goToNextStep()}),e.TgZ(48,"span",33),e._uU(49,"Next"),e.qZA(),e._UZ(50,"mat-icon",34),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",35),e.TgZ(52,"button",36),e.NdJ("click",function(){return e.CHM(s),e.MAs(3).toggle()}),e._UZ(53,"mat-icon",20),e.qZA(),e.TgZ(54,"div",37),e.TgZ(55,"span"),e._uU(56),e.qZA(),e.TgZ(57,"span",32),e._uU(58,"/"),e.qZA(),e.TgZ(59,"span"),e._uU(60),e.qZA(),e.qZA(),e._UZ(61,"mat-progress-bar",38),e.TgZ(62,"button",39),e.NdJ("click",function(){return r.goToPreviousStep()}),e._UZ(63,"mat-icon",20),e.qZA(),e.TgZ(64,"button",40),e.NdJ("click",function(){return r.goToNextStep()}),e._UZ(65,"mat-icon",20),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",r.drawerMode)("opened",r.drawerOpened),e.xp6(3),e.Q6J("routerLink",e.DdM(35,P)),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-sm-left"),e.xp6(3),e.Q6J("ngIf",e.Dn7(11,31,r.course.category,"slug",r.categories)),e.xp6(3),e.Oqu(r.course.title),e.xp6(2),e.Oqu(r.course.description),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",r.course.duration," minutes"),e.xp6(3),e.Q6J("ngForOf",r.course.steps)("ngForTrackBy",r.trackByFn),e.xp6(3),e.Q6J("routerLink",e.DdM(36,P)),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),e.xp6(2),e.hij(" ",r.course.title," "),e.xp6(1),e.Q6J("value",100*(r.currentStep+1)/r.course.totalSteps),e.xp6(2),e.Q6J("animationDuration","200"),e.xp6(2),e.Q6J("ngForOf",r.course.steps)("ngForTrackBy",r.trackByFn),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(5),e.Oqu(r.currentStep+1),e.xp6(4),e.Oqu(r.course.totalSteps),e.xp6(1),e.Q6J("color","primary"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:view-list"),e.xp6(3),e.Oqu(r.currentStep+1),e.xp6(4),e.Oqu(r.course.totalSteps),e.xp6(1),e.Q6J("value",100*(r.currentStep+1)/r.course.totalSteps),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"))},directives:[d.kh,d.jA,p.yS,x.Hw,c.O5,c.sg,d.LW,f.lW,p.rH,v.pW,Q.PQ,h.SP,c.mk,h.uX,h.Vc],pipes:[S.y],encapsulation:2,changeDetection:0}),n})();var ve=i(70262);const Ze=[{path:"",component:J,resolve:{categories:(()=>{class n{constructor(t){this._whitepaperService=t}resolve(t,r){return this._whitepaperService.getCategories()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},children:[{path:"",pathMatch:"full",component:oe,resolve:{courses:(()=>{class n{constructor(t){this._whitepaperService=t}resolve(t,r){return this._whitepaperService.getCourses()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}},{path:":id",component:xe,resolve:{course:(()=>{class n{constructor(t,r){this._router=t,this._whitepaperService=r}resolve(t,r){return this._whitepaperService.getCourseById(t.paramMap.get("id")).pipe((0,ve.K)(s=>{console.error(s);const a=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,w._)(s)}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p.F0),e.LFG(m))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]}];let Te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.Bz.forChild(Ze),f.ot,_.lN,x.Ps,T.c,v.Cv,b.LD,d.SJ,y.rP,C.AV,q.H,W.m,h.Nh]]}),n})()}}]);