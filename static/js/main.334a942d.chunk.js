(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/react.2e01c74f.svg"},,,function(e,a,t){e.exports=t.p+"static/media/github.cbc38ef1.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/computer.ca042db5.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/stackoverflow.6c469ad2.svg"},function(e,a,t){e.exports=t.p+"static/media/codesandbox.083d18ce.svg"},function(e,a,t){e.exports=t.p+"static/media/upwork-icon.f46b3d21.svg"},function(e,a,t){e.exports=t.p+"static/media/replit-icon.e4730e37.svg"},function(e,a,t){e.exports=t.p+"static/media/linkedin.c1eb2740.svg"},function(e,a,t){e.exports=t.p+"static/media/pin.64c56c72.svg"},function(e,a,t){e.exports=t.p+"static/media/tie.4a04f9f0.svg"},function(e,a,t){e.exports=t.p+"static/media/portfolio-image.65fb1478.png"},function(e,a,t){e.exports=t.p+"static/media/portfolio_resume.d98bda09.pdf"},,function(e,a,t){e.exports=t.p+"static/media/api.63f68ccc.svg"},function(e,a,t){e.exports=t.p+"static/media/backend.a42040d5.svg"},function(e,a,t){e.exports=t.p+"static/media/repair.1464053c.svg"},function(e,a,t){e.exports=t.p+"static/media/puzzle.b5fac2be.svg"},function(e,a,t){e.exports=t.p+"static/media/python.26c488dd.svg"},function(e,a,t){e.exports=t.p+"static/media/blog-app.492c118a.PNG"},function(e,a,t){e.exports=t.p+"static/media/hardware_store.4ba98a82.jpg"},function(e,a,t){e.exports=t.p+"static/media/chat-app.524cf16f.png"},function(e,a,t){e.exports=t.p+"static/media/sepsis-app.9fb5174d.PNG"},function(e,a,t){e.exports=t.p+"static/media/smart-spoon-img.ac89f275.png"},function(e,a,t){e.exports=t.p+"static/media/taxi-app.2854543b.PNG"},function(e,a,t){e.exports=t(54)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),i=t.n(c),s=(t(47),t(21)),l=t.n(s),o=t(22),m=t.n(o),d=t(23),u=t.n(d),p=t(24),b=t.n(p),_=t(25),E=t.n(_),g=t(12),v=t.n(g),h=t(26),f=t.n(h),N=t(27),y=t.n(N),k=t(28),w=t.n(k),C=t(29),j=t.n(C),x=t(4),S=function(){return r.a.createElement(x.b.div,{className:"sidebar",variants:{hidden:{x:"-20vw"},visible:{x:0,transition:{delay:.1,duration:.5,type:"spring"}}},initial:"hidden",animate:"visible"},r.a.createElement("img",{src:w.a,alt:"avatar",className:"sidebar__avatar"}),r.a.createElement("div",{className:"sidebar__name"},"Chinmay ",r.a.createElement("span",null,"Dali")," "),r.a.createElement("div",{className:"sidebar__item sidebar__title"},"Web Developer"),r.a.createElement("a",{href:j.a,download:"resume.pdf"},r.a.createElement("div",{className:"sidebar__item sidebar__resume"},r.a.createElement("img",{src:y.a,alt:"resume",className:"sidebar__icon"}),"Download Resume")),r.a.createElement("figure",{className:"sidebar__social-icons my-2"},r.a.createElement("a",{href:"https://www.linkedin.com/in/chinmay-395/"},r.a.createElement("img",{src:E.a,alt:"LinkedIn",className:"sidebar__icon mr-3"})),r.a.createElement("a",{href:"https://stackoverflow.com/users/9984976/chinmay-dali"},r.a.createElement("img",{src:l.a,alt:"stackoverflow",className:"sidebar__icon mr-3"})),r.a.createElement("a",{href:"https://www.upwork.com/freelancers/~0143861af59c56c0b0"},r.a.createElement("img",{src:u.a,alt:"UpWork",className:"sidebar__icon"}))),r.a.createElement("figure",{className:"sidebar__social-icons my-2"},r.a.createElement("a",{href:"https://repl.it/@ChinmayDali"},r.a.createElement("img",{src:b.a,alt:"stackoverflow",className:"sidebar__icon mr-3"})),r.a.createElement("a",{href:"https://codesandbox.io/u/Chinmay-395"},r.a.createElement("img",{src:m.a,alt:"codeSandbox",className:"sidebar__icon"}))),r.a.createElement("div",{className:"sidebar__contact"},r.a.createElement("div",{className:"sidebar__item sidebar__github"},r.a.createElement("a",{href:"https://github.com/Chinmay-395"},r.a.createElement("img",{src:v.a,alt:"github",className:"sidebar__icon mr-3"}),"github")),r.a.createElement("div",{className:"sidebar__location"},r.a.createElement("img",{src:f.a,alt:"location",className:"sidebar__icon mr-3"}),"Mumbai, India"),r.a.createElement("div",{className:"sidebar__item"},"chinmaydali395@gmail.com"),r.a.createElement("div",{className:"sidebar__item"},"+919820808300")),r.a.createElement("div",{className:"sidebar__item sidebar__email",onClick:function(){window.open("mailto:chinmaydali395@gmail.com")}},"email me"))},T=t(11),A=t(7),O=function(){var e=Object(n.useState)(""),a=Object(T.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){var e=window.location.href;console.log(e),e.endsWith("/")?c("About"):e.endsWith("/projects")?c("Projects"):e.endsWith("/resume")&&c("Resume")}),[t]);return r.a.createElement(x.b.div,{className:"navbar",variants:{hidden:{y:"-30vh",opacity:0},visible:{y:0,opacity:1,transition:{delay:.2,duration:.7,type:"spring"}}},initial:"hidden",animate:"visible"},r.a.createElement("div",{className:"navbar__active"},t),r.a.createElement("div",{className:"navbar__items"},"About"!==t&&r.a.createElement(A.b,{to:"/"},r.a.createElement("div",{className:"navbar__item",onClick:function(){return c("About")}},"About")),"Resume"!==t?r.a.createElement(A.b,{to:"/resume"},r.a.createElement("div",{className:"navbar__item",onClick:function(){return c("Resume")}},"Resume")):null,"Projects"!==t&&r.a.createElement(A.b,{to:"/projects"},r.a.createElement("div",{className:"navbar__item",onClick:function(){return c("Projects")}},"Projects"))))},I=t(1),P=function(e){var a=e.skill,t=a.icon,n=a.title,c=a.about;return r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"skill-card"},r.a.createElement("img",{src:t,alt:"icon",className:"skill-card__icon"}),r.a.createElement("div",{className:"skill-card-body"},r.a.createElement("h6",{className:"skill-card__title"},n),r.a.createElement("p",{className:"skill_card__content"},c))))},R=t(31),D=t.n(R),W=t(32),L=t.n(W),M=t(16),J=t.n(M),B=t(33),F=t.n(B),U=t(34),G=t.n(U),Q=[{icon:J.a,title:"Frontend Development",about:"I can build a beautiful and scalable SPA ReactJS"},{icon:L.a,title:"Backend  Development",about:[r.a.createElement(r.a.Fragment,null,"Developing rhobust backend using frameworks like",r.a.createElement("strong",null," ASP.NET core"),",",r.a.createElement("strong",null," ExpressJS "),"&"," ",r.a.createElement("strong",null," Django"))]},{icon:D.a,title:"Technologies",about:[r.a.createElement(r.a.Fragment,null,"Worked with REST and GraphQL for APIs and Web-Assembly, Web-RTC, Web-Sockets")]},{icon:F.a,title:"Database",about:"Worked with SqLite & Postgres for SQL, MongoDB as NoSQL and Redis key-value database"},{icon:G.a,title:"Test-Driven Developer",about:[r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null," CypressIO "),"for UI testing and for backend",r.a.createElement("strong",null," PyTest framework "),"for django &",r.a.createElement("strong",null," Jest "),"for ExpressJs")]},{icon:J.a,title:"DevOps",about:[r.a.createElement(r.a.Fragment,null,"Used ",r.a.createElement("strong",null," Docker "),"for containerizing and",r.a.createElement("strong",null," Travis-CI "),"for CI/CD pipeline")]}],z=(t(53),function(){return r.a.createElement(x.b.div,{className:"about",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement("h6",{className:"about__intro"},"A Full-Stack Test-Driven developer building saas web-apps; Effectuating ideas into implementations."),r.a.createElement("div",{className:"container about__container"},r.a.createElement("h6",{className:"about__heading"},"What I offer"),r.a.createElement("div",{className:"row"},Q.map((function(e){return r.a.createElement(P,{skill:e})})))))}),H=function(e){var a=e.value,t=a.icon,n=a.name,c=a.level,i="".concat(c,"%");return r.a.createElement("div",{className:"bar"},r.a.createElement("div",{className:"bar__wrapper",style:{width:i}},r.a.createElement("span",{className:"bar__name"},r.a.createElement("img",{src:t,alt:"icon",className:"bar__icon mr-2"}),n)))},q=t(9),X=t.n(q),Z=t(35),K=[{icon:t.n(Z).a,name:"Python",level:"60"},{icon:X.a,name:"javascript",level:"65"},{icon:X.a,name:"C#",level:"30"},{icon:X.a,name:"react",level:"85"},{icon:X.a,name:"Django",level:"75"},{icon:X.a,name:"Express",level:"65"},{icon:X.a,name:" ASP.NET Core",level:"25"}],V=function(){return r.a.createElement(x.b.div,{className:"container resume",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit",id:"overflow_check"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 resume-card"},r.a.createElement("h4",{className:"resume-card__heading"},"Education"),r.a.createElement("div",{className:"resume-card__body"},r.a.createElement("h5",{className:"resume-card__title"},"BE in Information Technology"),r.a.createElement("p",{className:"resume-card__name"},"Mumbai University(2017-2021)"))),r.a.createElement("div",{className:"col-lg-12 resume-card"},r.a.createElement("h4",{className:"resume-card__heading"},"Experience"),r.a.createElement("div",{className:"resume-card__body"},r.a.createElement("h5",{className:"resume-card__title"},"Software Engineer"),r.a.createElement("p",{className:"resume-card__name"},"ONETURE TECHNOLOGIES Aug 2021 - Present"),r.a.createElement("p",{className:"resume-card__details"},"\u2022 Worked closely with customer support to respond quickly to user issues, permanently solve them, and reduce the turnaround time to fixes. ",r.a.createElement("br",null),"\u2022 Implemented new C# class library for SQL server database access layer and updated previous web page frameworks ",r.a.createElement("br",null),"\u2022 Tech Stack: C#, ASP.NET, XML, SOAP, HTTP, SQL, MS SQL Server, Reactjs Angular, Typescript, Jquery, Azure")),r.a.createElement("div",{className:"resume-card__body"},r.a.createElement("h5",{className:"resume-card__title"},"Software Engineer"),r.a.createElement("p",{className:"resume-card__name"},"NUZPAPR TECHNOLOGIES May 2021 - Aug 2021"),r.a.createElement("p",{className:"resume-card__details"},"\u2022 Developed a web app that gives authenticated employees access to an anonymous forum and community where they may talk about problems. The platform\u2019s features include OAuth implementation, checking whether a debate is open or closed, a likes counter, and user points. Middleware authorization, e-mail and in-app push notification ",r.a.createElement("br",null),"\u2022 Tech Stack: Mongodb, Expressjs, Nodejs, Nextjs, Reactjs, redux, websockets, AWS, cypressio")),r.a.createElement("div",{className:"resume-card__body"},r.a.createElement("h5",{className:"resume-card__title"},"RPA Developer intern"),r.a.createElement("p",{className:"resume-card__name"},"XLNC Technologies (2019)"),r.a.createElement("p",{className:"resume-card__details"},"I built a automated bot that would scrape all the articles related to the client using Automation Anywhere software")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 resume-languages"},r.a.createElement("h5",{className:"reume-language__heading"},"Language and Framework"),r.a.createElement("div",{className:"resume-language__body mt-3"},K.map((function(e){return r.a.createElement(H,{value:e})}))))))},Y=t(36),$=t.n(Y),ee=t(37),ae=t.n(ee),te=t(38),ne=t.n(te),re=t(39),ce=t.n(re),ie=t(40),se=t.n(ie),le=t(41),oe=t.n(le),me=[{name:"Parkinsons Support System",image:se.a,deployed_url:"https://github.com/Chinmay-395/IOT-PROJECT",github_url:"https://github.com/Chinmay-395/IOT-PROJECT",category:["C++","IOT"]},{name:"Sepsis Diagnostic System",image:ce.a,deployed_url:"https://github.com/Chinmay-395/Sepsis-Website",github_url:"https://github.com/Chinmay-395/Sepsis-Website",category:["react.js","django","postgres","websocket"]},{name:"Uber Clone",image:oe.a,deployed_url:"https://github.com/Chinmay-395/Ride-Hailing",github_url:"https://github.com/Chinmay-395/Ride-Hailing",category:["react.js","django","postgres","websocket"]},{name:"Realtime Chat App",image:ne.a,deployed_url:"https://github.com/Chinmay-395/Chat-Application",github_url:"https://github.com/Chinmay-395/Chat-Application",category:["django","websocket"]},{name:"Medium-blog Clone",image:$.a,deployed_url:"https://github.com/Chinmay-395/Medium-Blog-Clone",github_url:"https://github.com/Chinmay-395/Medium-Blog-Clone",category:["django","react.js"]},{name:"Zoom Clone",image:ae.a,deployed_url:"!#",category:["node.js","WebRTC"]}],de=function(e){var a=e.project,t=a.name,n=a.image,c=a.deployed_url,i=a.github_url;return r.a.createElement("div",{className:"projectrCard col-md-6 col-lg-4 my-2"},r.a.createElement("figure",{className:"projectCard__wrapper"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:n,alt:t,className:"projectCard__image"})),r.a.createElement("div",{className:"projectCard__title"},r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:v.a,alt:"github link",className:"projectCard__icon"})),t)))},ue=function(){var e=Object(n.useState)(me),a=Object(T.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)("All"),s=Object(T.a)(i,2),l=s[0],o=s[1],m=function(e){var a=me.filter((function(a){return a.category.includes(e)}));c(a),o(e)};return r.a.createElement(x.b.div,{className:"container projects",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement("div",{className:"projects__navbar"},r.a.createElement("div",{className:"All"===l&&"projects__navbar-active",onClick:function(){c(me),o("All")}},"All"),r.a.createElement("div",{className:"django"===l&&"projects__navbar-active",onClick:function(){return m("django")}},"Django"),r.a.createElement("div",{className:"react.js"===l&&"projects__navbar-active",onClick:function(){return m("react.js")}},"React"),r.a.createElement("div",{className:"node.js"===l&&"projects__navbar-active",onClick:function(){return m("node.js")}},"NodeJS"),r.a.createElement("div",{className:"websocket"===l&&"projects__navbar-active",onClick:function(){return m("websocket")}},"Web-Sockets"),r.a.createElement("div",{className:"IOT"===l&&"projects__navbar-active",onClick:function(){return m("IOT")}},"IOT"),r.a.createElement("div",{className:"WebRTC"===l&&"projects__navbar-active",onClick:function(){return m("WebRTC")}},"WebRTC")),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(de,{key:e.name,project:e})}))))};var pe=function(){var e=Object(I.g)();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container app__container"},r.a.createElement("div",{className:"row app__row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(S,null)),r.a.createElement("div",{className:"col-lg-9 app__main-content",id:"internal_scrollbar"},r.a.createElement(O,null),r.a.createElement(x.a,{exitBeforeEnter:!0},r.a.createElement(I.d,{location:e,key:e.key},r.a.createElement(I.b,{exact:!0,path:"/"},r.a.createElement(z,null)),r.a.createElement(I.b,{path:"/resume"},r.a.createElement(V,null)),r.a.createElement(I.b,{path:"/projects",component:ue}),r.a.createElement(I.b,null,r.a.createElement(I.a,{to:"/"}))))))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,null,r.a.createElement(pe,null))),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.334a942d.chunk.js.map