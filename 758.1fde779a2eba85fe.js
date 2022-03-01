"use strict";(self.webpackChunksbchain=self.webpackChunksbchain||[]).push([[758],{44758:(W,p,n)=>{n.r(p),n.d(p,{HomeModule:()=>P,playerFactory:()=>m});var g=n(99826),y=n(47423),s=n(81125),u=n(67322),b=n(25245),x=n(77531);n(56157);var d=n(69808),a=n(5e3);let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[d.ez,y.ot,b.Ps]]}),e})();var B=n(44466),R=n(77579),G=n(82722),h=n(4707),l=n(18505),F=n(40520);let w=(()=>{class e{constructor(t){this._httpClient=t,this._faqs=new h.t(1),this._guides=new h.t(1),this._guide=new h.t(1)}get faqs$(){return this._faqs.asObservable()}get guides$(){return this._guides.asObservable()}get guide$(){return this._guide.asObservable()}getAllFaqs(){return this._httpClient.get("api/apps/help-center/faqs").pipe((0,l.b)(t=>{this._faqs.next(t)}))}getFaqsByCategory(t){return this._httpClient.get("api/apps/help-center/faqs",{params:{slug:t}}).pipe((0,l.b)(i=>{this._faqs.next(i)}))}getAllGuides(t="4"){return this._httpClient.get("api/apps/help-center/guides",{params:{limit:t}}).pipe((0,l.b)(i=>{this._guides.next(i)}))}getGuidesByCategory(t){return this._httpClient.get("api/apps/help-center/guides",{params:{slug:t}}).pipe((0,l.b)(i=>{this._guides.next(i)}))}getGuide(t,i){return this._httpClient.get("api/apps/help-center/guide",{params:{categorySlug:t,guideSlug:i}}).pipe((0,l.b)(o=>{this._guide.next(o)}))}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(F.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=n(24872),U=n(64460);function j(e,r){if(1&e&&(a.ynx(0),a.TgZ(1,"mat-expansion-panel"),a.TgZ(2,"mat-expansion-panel-header",36),a.TgZ(3,"mat-panel-title"),a._uU(4),a.qZA(),a.qZA(),a._uU(5),a.qZA(),a.BQk()),2&e){const t=r.$implicit;a.xp6(2),a.Q6J("collapsedHeight","56px"),a.xp6(2),a.Oqu(t.question),a.xp6(1),a.hij(" ",t.answer," ")}}const M=function(){return["/whitepaper"]},J=function(){return["/wallet"]},E=[{path:"",component:(()=>{class e{constructor(t){this._homeService=t,this.options={path:"/assets/animations/animation.json"},this.blockchain={path:"/assets/animations/blockchain.json"},this._2block={path:"/assets/animations/2block.json"},this.work={path:"/assets/animations/work.json"},this.database={path:"/assets/animations/database.json"},this._unsubscribeAll=new R.x}animationCreated(t){console.log(t)}ngOnInit(){this._homeService.faqs$.pipe((0,G.R)(this._unsubscribeAll)).subscribe(t=>{this.faqCategory=t[0]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(t,i){return i.id||t}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(w))},e.\u0275cmp=a.Xpm({type:e,selectors:[["home"]],decls:83,vars:14,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"relative","pt-8","pb-28","px-4","sm:pt-20","sm:pb-48","sm:px-16","overflow-hidden","bg-gray-800","dark:bg-gray-900","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"mt-3","sm:text-2xl","text-center","tracking-tight","text-secondary","w-full","max-w-sm","md:max-w-4xl"],["width","500px","height","300px",3,"options","animationCreated"],[1,"flex","flex-col","items-center","pb-6","px-6","sm:pb-10","sm:px-10"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-y-8","md:gap-y-0","md:gap-x-6","w-full","max-w-sm","md:max-w-4xl","-mt-16","sm:-mt-24"],[1,"relative","flex","flex-col","rounded-2xl","shadow","hover:shadow-lg","overflow-hidden","bg-card","transition-shadow","ease-in-out","duration-150"],[1,"flex","flex-col","flex-auto","items-center","p-8","text-center"],[1,"text-2xl","font-semibold"],[1,"md:max-w-40","mt-1","text-secondary"],[1,"flex","items-center","justify-center","py-4","px-8","text-primary-500","dark:text-primary-400","bg-gray-50","dark:bg-transparent","dark:border-t"],[1,"flex","items-center",3,"routerLink"],[1,"absolute","inset-0"],[1,"font-medium"],[1,"ml-2","icon-size-5","text-current",3,"svgIcon"],["href","https://explorer.seniorblockchain.io/#/sbc/explorer","target","_blank",1,"flex","items-center"],[1,"flex","flex-col","mt-8","md:flex-row","w-full","max-w-sm","md:max-w-4xl"],[1,"flex","flex-col","flex-auto","m-8","mb-4"],[1,"text-2xl","font-semibold","leading-tight"],[1,"mt-4","text-justify","leading-loose"],[1,"indent-8"],["width","300px","height","200px",3,"options","animationCreated"],[1,"indent-8","mt-2"],["width","400px","height","300px",3,"options","animationCreated"],[1,"mt-2"],[1,"mt-24","text-3xl","sm:text-5xl","font-extrabold","leading-tight","tracking-tight","text-center"],[1,"mt-2","text-xl","text-center","text-secondary"],[1,"max-w-4xl","mt-12"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"collapsedHeight"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.O4$(),a.TgZ(3,"svg",3),a.TgZ(4,"g",4),a._UZ(5,"circle",5),a._UZ(6,"circle",6),a.qZA(),a.qZA(),a.kcU(),a.TgZ(7,"div",7),a.TgZ(8,"div",8),a._uU(9," welcome to Senior Blockchain "),a.qZA(),a.TgZ(10,"div",9),a._uU(11," Senior Blockchain is a powerful and flexible Blockchain Development Platform designed for the needs of real world financial services and businesses. "),a.qZA(),a.TgZ(12,"ng-lottie",10),a.NdJ("animationCreated",function(c){return i.animationCreated(c)}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"div",11),a.TgZ(14,"div",12),a.TgZ(15,"div",13),a.TgZ(16,"div",14),a.TgZ(17,"div",15),a._uU(18,"White Paper"),a.qZA(),a.TgZ(19,"div",16),a._uU(20,"Senior Blockchain White Paper"),a.qZA(),a.qZA(),a.TgZ(21,"div",17),a.TgZ(22,"a",18),a._UZ(23,"span",19),a.TgZ(24,"span",20),a._uU(25,"Go to White Paper"),a.qZA(),a._UZ(26,"mat-icon",21),a.qZA(),a.qZA(),a.qZA(),a.TgZ(27,"div",13),a.TgZ(28,"div",14),a.TgZ(29,"div",15),a._uU(30,"Wallet"),a.qZA(),a.TgZ(31,"div",16),a._uU(32,"The Blockcore Wallet is a full featured wallet that goes beyond most wallet software"),a.qZA(),a.qZA(),a.TgZ(33,"div",17),a.TgZ(34,"a",18),a._UZ(35,"span",19),a.TgZ(36,"span",20),a._uU(37,"Download Wallet"),a.qZA(),a._UZ(38,"mat-icon",21),a.qZA(),a.qZA(),a.qZA(),a.TgZ(39,"div",13),a.TgZ(40,"div",14),a.TgZ(41,"div",15),a._uU(42,"Explorer"),a.qZA(),a.TgZ(43,"div",16),a._uU(44,"Cross-Chain Multi-Chain Block Explorer "),a.qZA(),a.qZA(),a.TgZ(45,"div",17),a.TgZ(46,"a",22),a._UZ(47,"span",19),a.TgZ(48,"span",20),a._uU(49,"Go to Explorer"),a.qZA(),a._UZ(50,"mat-icon",21),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(51,"sbchain-card",23),a.TgZ(52,"div",24),a.TgZ(53,"div",25),a._uU(54," What Is a Blockchain? "),a.qZA(),a.TgZ(55,"div",26),a.TgZ(56,"p",27),a._uU(57,"A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party. "),a.qZA(),a.TgZ(58,"div",7),a.TgZ(59,"ng-lottie",28),a.NdJ("animationCreated",function(c){return i.animationCreated(c)}),a.qZA(),a.qZA(),a.TgZ(60,"p",29),a._uU(61," One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled."),a.qZA(),a.TgZ(62,"div",7),a.TgZ(63,"ng-lottie",28),a.NdJ("animationCreated",function(c){return i.animationCreated(c)}),a.qZA(),a.qZA(),a.TgZ(64,"p",29),a._uU(65," A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain."),a.qZA(),a.TgZ(66,"div",7),a.TgZ(67,"ng-lottie",28),a.NdJ("animationCreated",function(c){return i.animationCreated(c)}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(68,"sbchain-card",23),a.TgZ(69,"div",24),a.TgZ(70,"div",25),a._uU(71," The next step "),a.qZA(),a.TgZ(72,"div",26),a.TgZ(73,"div",7),a.TgZ(74,"ng-lottie",30),a.NdJ("animationCreated",function(c){return i.animationCreated(c)}),a.qZA(),a.qZA(),a.TgZ(75,"p",31),a._uU(76,"Our mission is to expand the usage and availability of services built using blockchain technology, and to apply those services to the needs of real world financial services and businesses. We want to make blockchain technology available for everyone to use. And to do just that we are building the Senior blockchain and the Smart business Platform."),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(77,"div",32),a._uU(78,"Most frequently asked questions"),a.qZA(),a.TgZ(79,"div",33),a._uU(80,"Here are the most frequently asked questions you may check before getting started"),a.qZA(),a.TgZ(81,"mat-accordion",34),a.YNc(82,j,6,3,"ng-container",35),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(12),a.Q6J("options",i.options),a.xp6(10),a.Q6J("routerLink",a.DdM(12,M)),a.xp6(4),a.Q6J("svgIcon","heroicons_solid:arrow-narrow-right"),a.xp6(8),a.Q6J("routerLink",a.DdM(13,J)),a.xp6(4),a.Q6J("svgIcon","heroicons_solid:arrow-narrow-right"),a.xp6(12),a.Q6J("svgIcon","heroicons_solid:arrow-narrow-right"),a.xp6(9),a.Q6J("options",i._2block),a.xp6(4),a.Q6J("options",i.blockchain),a.xp6(4),a.Q6J("options",i.database),a.xp6(7),a.Q6J("options",i.work),a.xp6(8),a.Q6J("ngForOf",i.faqCategory.faqs)("ngForTrackBy",i.trackByFn))},directives:[v.e$,g.yS,b.Hw,U.k,s.pp,d.sg,s.ib,s.yz,s.yK],encapsulation:2}),e})(),resolve:{faqs:(()=>{class e{constructor(t){this._homeService=t}resolve(t,i){return this._homeService.getFaqsByCategory("most-asked")}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(w))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];var Q=n(44487),z=n.n(Q),N=n(4747);let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[g.Bz.forChild(E),v.CT.forRoot({player:m}),y.ot,s.To,u.lN,b.Ps,x.c,I,B.m,N.j]]}),e})();function m(){return z()}}}]);