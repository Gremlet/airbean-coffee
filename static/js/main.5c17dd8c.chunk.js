(this.webpackJsonpairbean=this.webpackJsonpairbean||[]).push([[0],{43:function(e,t,c){},69:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(17),s=c.n(n),i=(c(43),c(5)),o=c(16),l=c.n(o),j=c(26),u=(c(69),c.p+"static/media/airbean-logo.3d7b4f54.svg"),d=c(10),b=function(e){return{type:"ADD_USER",payload:e}},O=c(7),h=c(109),p=c(1);var f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),s=Object(i.a)(n,2),o=s[0],f=s[1],m=Object(a.useState)(null),x=Object(i.a)(m,2),g=x[0],v=x[1],A=Object(a.useState)(!1),y=Object(i.a)(A,2),N=y[0],C=y[1],w=Object(a.useState)(!1),k=Object(i.a)(w,2),E=k[0],D=k[1],I=Object(d.b)(),U=Object(O.g)();function q(){return(q=Object(j.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),e.prev=2,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:o})},e.next=6,fetch("https://secure-plains-75893.herokuapp.com/api/login",a);case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,I(b(n)),v(n.loggedIn),D(!1),C(!1),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),console.log("It's dead, Jim"),D(!1),C(!0);case 21:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){g&&U.push("/profile")}),[g,U]),Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("img",{src:u,alt:"airbean-logo"})}),Object(p.jsx)("h1",{children:"Welcome to the AirBean family!"}),Object(p.jsx)("p",{children:"Login below to order some coffee and see your order history"}),Object(p.jsxs)("div",{className:"login-form",children:[Object(p.jsxs)("form",{action:"",onSubmit:function(e){return q.apply(this,arguments)},children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",required:!0,id:"username",name:"username",placeholder:"coffeecarl",onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",required:!0,id:"password",name:"password",placeholder:"123",onChange:function(e){return f(e.target.value)}}),Object(p.jsx)("label",{htmlFor:"gdpr",children:"GDPR OK!"}),Object(p.jsx)("input",{type:"checkbox",id:"gdpr",required:!0}),Object(p.jsx)("input",{type:"submit",id:"submit",value:"Log in!"})]}),!1===g&&Object(p.jsx)("p",{className:"errMsg",children:"Wrong username or password. Please try again."}),N&&Object(p.jsx)("p",{className:"errMsg",children:"Eek! Something went wrong on our end. Please try again."}),E&&Object(p.jsxs)("p",{className:"errMsg",style:{color:"#0e927d"},children:["Logging in... ",Object(p.jsx)(h.a,{style:{color:"#0e927d"},size:"1rem"})]})]})]})},m=c.p+"static/media/header.376dd4da.svg",x=c(23),g=c(49);var v=function(){var e=Object(O.g)(),t=Object(d.c)((function(e){return e.currentUser}));return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("img",{src:m,alt:"header-img"}),Object(p.jsx)("svg",{className:"circle",height:"80",width:"80",children:Object(p.jsx)("circle",{cx:"40",cy:"40",r:"24",fill:"white"})}),Object(p.jsx)("div",{className:"menu-icon",onClick:function(){!0===t.loggedIn?e.push("/nav"):console.log("not logged in")},"data-tip":"Please log in first!",children:Object(p.jsx)("h1",{children:Object(p.jsx)(x.f,{})})}),!t.loggedIn&&Object(p.jsx)(g.a,{})]})},A=(c(79),c(27));var y=function(e){var t=Object(O.g)();function c(t){e.updateColor(t)}return Object(p.jsxs)("div",{className:"nav-menu",children:[Object(p.jsx)("svg",{className:"circle-close",height:"80",width:"80",children:Object(p.jsx)("circle",{cx:"40",cy:"40",r:"24",fill:"white"})}),Object(p.jsx)("div",{className:"close-icon",onClick:function(){t.goBack()},children:Object(p.jsx)("h1",{children:Object(p.jsx)(x.b,{})})}),Object(p.jsxs)("div",{className:"nav-links",children:[Object(p.jsx)(A.b,{to:"/menu",className:"link-text",onClick:function(){return c("#f3e4e1")},children:Object(p.jsx)("h1",{children:"Menu"})}),Object(p.jsx)("hr",{}),Object(p.jsx)(A.b,{to:"/about",className:"link-text",onClick:function(){return c("#f3e4e1")},children:Object(p.jsx)("h1",{children:"Our Coffee"})}),Object(p.jsx)("hr",{}),Object(p.jsx)(A.b,{to:"/profile",className:"link-text",onClick:function(){return c("#2f2926")},children:Object(p.jsx)("h1",{children:"My Profile"})}),Object(p.jsx)("hr",{}),Object(p.jsx)(A.b,{to:"/status",className:"link-text",onClick:function(){return c("#2f2926")},children:Object(p.jsx)("h1",{children:"Order Status"})})]})]})},N=c(50),C=(c(80),c.p+"static/media/avatar.c79d32af.svg"),w=c.p+"static/media/oops.ac428f05.svg",k=c(38);var E=function(){var e=Object(d.c)((function(e){return e.currentUser})),t=Object(a.useState)([]),c=Object(i.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),u=o[0],b=o[1],f=Object(a.useState)(0),m=Object(i.a)(f,2),x=m[0],g=m[1],v=Object(a.useState)(0),A=Object(i.a)(v,2),y=A[0],E=A[1],D=Object(a.useState)(!1),I=Object(i.a)(D,2),U=I[0],q=I[1],S=Object(d.b)(),M=Object(O.g)();return Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(l.a.mark((function t(){var c,a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://secure-plains-75893.herokuapp.com/api/order/".concat(e.userID));case 3:return c=t.sent,t.next=6,c.json();case 6:for(a=t.sent,n(a),q(!1),b(!0),r=0,s=0;s<a.length;s++)r+=a[s].price,g(r);t.next=19;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("Big error boi"),q(!1),b(!1);case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}q(!0),function(){t.apply(this,arguments)}()}),[e.userID]),Object(a.useEffect)((function(){!function(){var e,t=0,c=r.filter((function(e){return e.discount>0})),a=Object(N.a)(c);try{for(a.s();!(e=a.n()).done;){t+=e.value.discount}}catch(n){a.e(n)}finally{a.f()}E(t)}()}),[r,E]),Object(p.jsxs)("div",{className:"profile",children:[Object(p.jsx)("img",{src:C,alt:"profile img"}),Object(p.jsx)("h1",{className:"username",children:e.fullname}),Object(p.jsx)("p",{className:"email",children:e.email}),Object(p.jsx)("button",{className:"logout",onClick:function(){S({type:"LOGOUT"}),M.push("/")},children:"Log out"}),u&&!U&&Object(p.jsxs)("div",{className:"order-history",children:[Object(p.jsx)("h2",{children:"Order history"}),r.map((function(e){return Object(p.jsxs)("div",{className:"order-container",children:[Object(p.jsxs)("p",{className:"orderno",children:["ORDER # ",e.orderNumber]}),Object(p.jsx)("p",{className:"date",children:k(e.ETA).format("YYYY/MM/DD")}),Object(p.jsx)("p",{className:"total",children:"Total price"}),Object(p.jsxs)("p",{className:"price",children:[e.price," kr"]}),Object(p.jsx)("div",{className:"line"})]},e.orderNumber)})),y>0&&Object(p.jsxs)("div",{className:"discounts",children:[Object(p.jsx)("p",{children:"Total discounts"}),Object(p.jsxs)("p",{children:["- ",y," kr"]})]}),Object(p.jsxs)("div",{className:"total",children:[Object(p.jsx)("p",{className:"spent",children:"Total spent"}),Object(p.jsxs)("p",{className:"grandtotal",children:[x-y," kr"]})]})]}),!u&&!U&&Object(p.jsxs)("div",{className:"whoops",children:[Object(p.jsx)("h3",{children:"Aw, shucks! Something went sideways... please try again!"}),Object(p.jsx)("img",{src:w,alt:"spilled coffee"})]}),U&&Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h1",{children:"Loading..."}),Object(p.jsx)(h.a,{style:{color:"#0e927d"}})]})]})},D=(c(81),c.p+"static/media/footer.f5b3d569.svg");var I=function(){return Object(p.jsxs)("div",{className:"about",children:[Object(p.jsxs)("div",{className:"about-content",children:[Object(p.jsx)("h1",{className:"about-title",children:"Our Coffee"}),Object(p.jsx)("p",{className:"inset",children:"Extra sugar fair trade cortado extra est, espresso irish sweet coffee chicory. Iced, percolator, half and half at skinny coffee sugar cultivar acerbic barista kopi-luwak. Coffee, strong, in single shot flavour organic and id white wings sugar. Cortado robusta grounds steamed flavour grounds flavour cup mocha aromatic whipped."}),Object(p.jsx)("p",{className:"about-text",children:"Qui, coffee redeye arabica doppio, caf\xe9 au lait bar robust aftertaste organic that sugar black. Caramelization, robusta, et extraction cultivar, con panna caffeine acerbic, coffee sweet iced, con panna a flavour grinder crema, sugar, french press percolator, sweet strong shop body frappuccino. Crema, chicory gal\xe3o extraction white eu java whipped qui percolator froth extraction java lungo at gal\xe3o dripper. Sit gal\xe3o, bar white, grounds caf\xe9 au lait variety dark single origin cup robusta qui body."}),Object(p.jsx)("p",{className:"about-text",children:"Aged breve sweet, trifecta single shot, ristretto, cup irish percolator iced caramelization instant acerbic at caramelization whipped saucer. Cup organic cup macchiato, ut cultivar frappuccino pumpkin spice cinnamon milk mocha cup barista whipped spoon grounds seasonal."})]}),Object(p.jsxs)("div",{className:"founder",children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"our-ceo"}),Object(p.jsx)("h2",{children:"Eva Cortado"}),Object(p.jsx)("p",{className:"about-text",children:"CEO and founder"})]}),Object(p.jsx)("img",{src:D,alt:"footer-img",id:"footer-img"})]})},U=(c(82),c(83),c.p+"static/media/airbean-logo-lg.199b75ea.svg"),q=c(111),S=c(51),M=c.n(S);var T=function(e){var t=Object(d.c)((function(e){return e.cart})),c=Object(d.c)((function(e){return e.total})),r=Object(d.c)((function(e){return e.discount})),n=Object(d.c)((function(e){return e.currentUser})),s=Object(d.b)(),o=Object(O.g)(),u=Object(a.useState)(!1),b=Object(i.a)(u,2),h=b[0],f=b[1],m=Object(a.useState)(0),g=Object(i.a)(m,2),v=g[0],A=g[1],y=Object(a.useState)([]),N=Object(i.a)(y,2),C=N[0],w=N[1];function k(){return(k=Object(j.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:C,userId:n.userID,discount:r})},e.next=3,fetch("https://secure-plains-75893.herokuapp.com/api/order",t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a),s({type:"EMPTY_CART"}),o.push("/status");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){s({type:"CHECK_DISCOUNT"})}),[c,s]),Object(a.useEffect)((function(){!function(){for(var e=0,c=0;c<t.length;c++)e+=t[c].quantity;A(e)}()}),[t,c]),Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsx)("svg",{className:"circle2",height:"80",width:"80",children:Object(p.jsx)("circle",{cx:"40",cy:"40",r:"24",fill:"#2f2926"})}),Object(p.jsx)("div",{className:"cart-icon",onClick:function(){f(!h),e.showMenu("hide")},children:Object(p.jsx)("h1",{children:Object(p.jsx)(q.a,{color:"secondary",badgeContent:v,children:Object(p.jsx)(x.g,{style:{color:"white"}})})})}),h&&Object(p.jsxs)("div",{className:"cart-card",children:[Object(p.jsx)("h1",{className:"cart-title",children:"Your order"}),0===t.length&&Object(p.jsx)("p",{style:{textAlign:"center",fontSize:"0.8em"},children:"Go on. Treat yourself! \ud83d\ude42"}),t.map((function(e){return Object(p.jsxs)("div",{className:"cart-item",children:[Object(p.jsx)("h3",{className:"cart-item-title",children:e.title}),Object(p.jsxs)("p",{className:"cart-price",children:[e.price," kr"]}),Object(p.jsx)("button",{className:"remove",onClick:function(){return t=e.id,c=e.quantity,a=e.price,void s(function(e,t,c){return{type:"REMOVE_ITEM",payload:{id:e,quantity:t,price:c}}}(t,c,a));var t,c,a},children:Object(p.jsx)(x.c,{style:{color:"#e5674e"}})}),Object(p.jsx)("button",{className:"increase",onClick:function(){return t=e.id,c=e.quantity,a=e.price,void s(function(e,t,c){return{type:"INCREMENT_ITEM",payload:{id:e,quantity:t,price:c}}}(t,c,a));var t,c,a},children:Object(p.jsx)(x.e,{})}),Object(p.jsx)("p",{className:"cart-item-quantity",children:e.quantity}),Object(p.jsx)("button",{className:"decrease",onClick:function(){return t=e.id,c=e.quantity,a=e.price,void s(function(e,t,c){return{type:"DECREMENT_ITEM",payload:{id:e,quantity:t,price:c}}}(t,c,a));var t,c,a},children:Object(p.jsx)(x.d,{})})]},e.id)})),t.length>0&&Object(p.jsxs)("div",{className:"cart-total",children:[r>0&&Object(p.jsx)("p",{className:"c-discount",children:"Discount"}),r>0&&Object(p.jsxs)("p",{className:"c-discamount",children:["- ",r," kr"]}),Object(p.jsx)("h2",{className:"c-total",children:"Total"}),Object(p.jsxs)("h2",{className:"c-amount",children:[c-r," kr"]}),Object(p.jsx)("p",{className:"including",children:"Inc moms + drone delivery"})]}),t.length>0&&Object(p.jsx)("div",{className:"pay",children:Object(p.jsx)("button",{className:"pay-button",onClick:function(){return function(){s({type:"CHECK_DISCOUNT"});for(var e=[],c=0;c<t.length;c++)for(var a=0;a<t[c].quantity;a++)e.push(t[c].id);w(e)}()},children:"Take my money!"})})]}),C.length>0&&Object(p.jsxs)("div",{className:"pay-now",children:[Object(p.jsx)("img",{src:U,alt:"airbean logo"}),Object(p.jsx)("h1",{children:"Soon... coffee!"}),r>0&&Object(p.jsxs)("p",{children:[Object(p.jsx)(M.a,{width:"350",height:"744",opacity:"0.6",numberOfPieces:"100",recycle:"false",confettiSource:{x:175,y:190,w:20,h:20}}),"Woohoo! You unlocked the Gothenburg 400 discount! Your discount today is"," ",Object(p.jsxs)("strong",{children:[r," kr"]})]}),Object(p.jsxs)("h1",{children:["Total to pay: ",c-r," kr"]}),Object(p.jsx)("button",{className:"go",onClick:function(){return k.apply(this,arguments)},children:"Let's go!"})]})]})},B=c(115),V=c(114);var X=function(){var e=Object(a.useState)((function(){return[]})),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!1),s=Object(i.a)(n,2),o=s[0],u=s[1],b=Object(a.useState)(!1),O=Object(i.a)(b,2),f=O[0],m=O[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),A=v[0],y=v[1],N=Object(a.useState)(!1),C=Object(i.a)(N,2),k=C[0],E=C[1],I=Object(d.b)(),U=function(e,t){"clickaway"!==t&&m(!1)};return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://secure-plains-75893.herokuapp.com/api/coffee");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(c),E(!1),u(!0),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),u(!1),E(!1),console.log("is a heckin error");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}E(!0),function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)(T,{showMenu:function(){y("hide"===A?"":"hide")}}),Object(p.jsx)("h1",{className:"menu-title ".concat(A),children:"Menu"}),o&&!k&&c.map((function(e){return Object(p.jsxs)("div",{className:"menu-container ".concat(A),children:[Object(p.jsx)("button",{className:"add",onClick:function(){return t=e.id,c=e.title,a=e.price,I(function(e,t,c,a){return{type:"ADD_TO_CART",payload:{id:e,title:t,price:c,quantity:a}}}(t,c,a,1)),void m(!0);var t,c,a},children:Object(p.jsx)(x.a,{style:{color:"#2F2926"}})}),Object(p.jsx)(B.a,{anchorOrigin:{horizontal:"center",vertical:"bottom"},open:f,autoHideDuration:1500,onClose:U,children:Object(p.jsx)(V.a,{onClose:U,severity:"success",children:"Added to cart!"})}),Object(p.jsx)("h3",{className:"coffee",children:e.title}),Object(p.jsx)("p",{className:"desc",children:e.desc}),Object(p.jsxs)("h3",{className:"coffee-price",children:[e.price," kr"]})]},e.id)})),!o&&!k&&Object(p.jsxs)("div",{className:"whoops",children:[Object(p.jsx)("h3",{children:"Aw shucks! Something went sideways... please try again!"}),Object(p.jsx)("img",{src:w,alt:"spilled coffee"})]}),k&&Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h2",{children:"Loading..."}),Object(p.jsx)(h.a,{style:{color:"#0e927d"}})]}),Object(p.jsx)("img",{className:"footer",src:D,alt:"footer-img"})]})},Q=(c(84),c.p+"static/media/drone.48571d77.svg"),Z=c.p+"static/media/delivered.d386f073.svg";var R=function(){var e=Object(d.c)((function(e){return e.currentUser})),t=Object(O.g)(),c=Object(a.useState)(""),r=Object(i.a)(c,2),n=r[0],s=r[1],o=Object(a.useState)({}),u=Object(i.a)(o,2),b=u[0],f=u[1],m=Object(a.useState)(!1),x=Object(i.a)(m,2),g=x[0],v=x[1],A=Object(a.useState)(!1),y=Object(i.a)(A,2),N=y[0],C=y[1],E=Object(a.useState)(!1),D=Object(i.a)(E,2),I=D[0],U=D[1];Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(l.a.mark((function t(){var c,a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return U(!0),t.prev=1,t.next=4,fetch("https://secure-plains-75893.herokuapp.com/api/order/".concat(e.userID));case 4:return c=t.sent,t.next=7,c.json();case 7:a=t.sent,r=a.reverse(),console.log(r),v(!1),f(r[0]),s(r[0].status),C(!0),U(!1),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(1),console.log("Task failed successfully"),v(!0),U(!1);case 22:case"end":return t.stop()}}),t,null,[[1,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var q=function(){t.push("/nav")};return Object(p.jsxs)("div",{className:"order-status",children:[!g&&!I&&N&&Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsxs)("p",{className:"orderNumber",children:["Order number ",Object(p.jsxs)("strong",{children:["#",b.orderNumber]})]}),"Delivered"===n?Object(p.jsx)("img",{src:Z,alt:"drone and coffee cup",className:"drone"}):Object(p.jsx)("img",{src:Q,alt:"airbean drone",className:"drone"})]}),"Delivered"===n?Object(p.jsx)("div",{className:"middle",children:Object(p.jsxs)("h3",{children:["Your last order was delivered on ",k(b.ETA).format("MMMM D")," at"," ",k(b.ETA).format("h:mm a")]})}):Object(p.jsxs)("div",{className:"middle",children:[Object(p.jsx)("h1",{children:"Your order is on the way!"}),Object(p.jsx)("p",{children:n})]}),Object(p.jsx)("button",{className:"cool",onClick:q,children:"Ok, cool!"})]}),g&&Object(p.jsxs)("div",{className:"whoops",children:[Object(p.jsx)("h3",{children:"Nothing to see here!"}),Object(p.jsx)("img",{src:w,alt:"spilled coffee"}),Object(p.jsx)("button",{className:"cool",onClick:q,children:"Go back"})]}),I&&Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h2",{children:"Fetching order... hang tight..."}),Object(p.jsx)(h.a,{style:{color:"#0e927d"}})]})]})};var K=function(){var e=Object(a.useState)("#2f2926"),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(d.c)((function(e){return e.currentUser}));return Object(p.jsxs)("div",{className:"App",style:{backgroundColor:c},children:[Object(p.jsx)(v,{}),Object(p.jsxs)(O.d,{children:[Object(p.jsx)(O.b,{exact:!0,path:"/",children:Object(p.jsx)(f,{})}),Object(p.jsx)(O.b,{path:"/nav",children:n.loggedIn?Object(p.jsx)(y,{updateColor:function(e){r(e)}}):Object(p.jsx)(O.a,{to:"/"})}),Object(p.jsx)(O.b,{path:"/profile",children:n.loggedIn?Object(p.jsx)(E,{}):Object(p.jsx)(O.a,{to:"/"})}),Object(p.jsx)(O.b,{path:"/about",children:n.loggedIn?Object(p.jsx)(I,{}):Object(p.jsx)(O.a,{to:"/"})}),Object(p.jsx)(O.b,{path:"/menu",children:n.loggedIn?Object(p.jsx)(X,{}):Object(p.jsx)(O.a,{to:"/"})}),Object(p.jsx)(O.b,{path:"/status",children:n.loggedIn?Object(p.jsx)(R,{}):Object(p.jsx)(O.a,{to:"/"})})]})]})},L=c(57),J=c(21),P=c(6),H={currentUser:{},cart:[],total:0,discount:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return Object(P.a)(Object(P.a)({},e),{},{currentUser:t.payload});case"LOGOUT":return Object(P.a)(Object(P.a)({},e),{},{currentUser:{},cart:[],total:0,discount:0});case"ADD_TO_CART":var c=t.payload,a=e.cart.find((function(e){return e.id===c.id}));if(a)return a.quantity=a.quantity+1,Object(P.a)(Object(P.a)({},e),{},{cart:Object(J.a)(e.cart),total:e.total+c.price});c.quantity=1;var r=e.total+c.price;return Object(P.a)(Object(P.a)({},e),{},{cart:[].concat(Object(J.a)(e.cart),[c]),total:r});case"INCREMENT_ITEM":var n=e.cart.find((function(e){return e.id===t.payload.id}));n.quantity=n.quantity+1;var s=e.total+n.price;return Object(P.a)(Object(P.a)({},e),{},{total:s});case"DECREMENT_ITEM":var i=e.cart.find((function(e){return e.id===t.payload.id}));if(1===i.quantity){var o=e.cart.filter((function(e){return e.id!==t.payload.id})),l=e.total-i.price;return Object(P.a)(Object(P.a)({},e),{},{cart:o,total:l})}i.quantity=i.quantity-1;var j=e.total-i.price;return Object(P.a)(Object(P.a)({},e),{},{total:j});case"REMOVE_ITEM":var u=e.cart.find((function(e){return e.id===t.payload.id})),d=e.cart.filter((function(e){return e.id!==t.payload.id})),b=e.total-u.price*u.quantity;return Object(P.a)(Object(P.a)({},e),{},{cart:d,total:b});case"CHECK_DISCOUNT":var O=e.cart.find((function(e){return 1===e.id})),h=e.cart.find((function(e){return 7===e.id}));if(O&&h&&O.quantity===h.quantity){var p=21*O.quantity;return Object(P.a)(Object(P.a)({},e),{},{cart:Object(J.a)(e.cart),discount:p})}if(O&&h&&O.quantity>h.quantity){var f=21*h.quantity;return Object(P.a)(Object(P.a)({},e),{},{cart:Object(J.a)(e.cart),discount:f})}if(O&&h&&O.quantity<h.quantity){var m=21*O.quantity;return Object(P.a)(Object(P.a)({},e),{},{cart:Object(J.a)(e.cart),discount:m})}return Object(P.a)(Object(P.a)({},e),{},{cart:Object(J.a)(e.cart),discount:0});case"EMPTY_CART":return Object(P.a)(Object(P.a)({},e),{},{cart:[],total:0,discount:0});default:return e}},G=c(47),Y=c(113),W=c(58),F=c(52);G.a.use(W.a).use(Y.a).use(F.a).init({debug:!1,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{}}}});G.a;var _=Object(L.a)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(A.a,{basename:"/airbean-coffee",children:Object(p.jsx)(d.a,{store:_,children:Object(p.jsx)(K,{})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.5c17dd8c.chunk.js.map