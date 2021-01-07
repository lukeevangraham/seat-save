(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{313:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(17),s=n.n(i),o=n(14),u=n(12),l=n(18),d=n(155),j=n(20),b=n(356),p=n(357),h=n(16),O=n.n(h),m=n(28),v=n(156),x=n.n(v).a.create({baseURL:"/"}),f="CREATE_EVENT",g="FETCH_EVENTS",y="FETCH_EVENT",S="FETCH_POPULATED_EVENT",E="DELETE_EVENT",w="EDIT_EVENT",C="CREATE_GROUP",G="EDIT_GROUP",_="DELETE_GROUP",T="CREATE_GROUP_START",k="SIGN_IN",I="SIGN_OUT",N="FETCH_MAX_GROUP_SIZE",A="FETCH_CHURCH_SETTINGS",D=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/event");case 2:n=e.sent,t({type:g,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/event/".concat(e));case 2:a=t.sent,n({type:y,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.delete("event/".concat(e));case 2:t.sent,n({type:E,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(){return{type:T}},M=n(365),P=n(157),U=n(158),F=n(165),V=n(163),H=function(e){Object(F.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(P.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onAuthChange=function(t){if(t){var n=e.auth.currentUser.get().getBasicProfile();e.props.signIn(n)}else e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e.adminRedirect=e.props.isAdmin?Object(a.jsx)(j.a,{to:"/admin"}):null,e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"666797596660-g0ss4568pfnjesar12r2n0irheeg92n1.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(M.a,{to:"/event-create",component:o.b,children:"Create Event"})}),Object(a.jsx)("li",{children:Object(a.jsx)("div",{children:Object(a.jsx)(M.a,{to:"/settings",component:o.b,children:"Settings"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("div",{onClick:this.onSignOutClick,children:Object(a.jsx)(M.a,{to:"#",component:o.b,children:"Sign Out"})})})]})}):Object(a.jsx)("div",{onClick:this.onSignInClick,children:Object(a.jsx)(M.a,{to:"#",component:o.b,children:"Admin"})})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[this.adminRedirect,this.renderAuthButton()]})}}]),n}(c.a.Component),B=Object(u.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.post("/user",e);case 2:(a=t.sent).data.email?n({type:k,payload:a.data}):(console.log("RES REAL: ",a.data.errorMessage),alert(a.data.errorMessage),n({type:I,payload:a.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},signOut:function(){return{type:I}}})(H),Z=function(e){var t=Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:Object(a.jsx)(M.a,{component:o.b,to:"/",children:"RB Community Church | Seat Save"})}),Object(a.jsx)(B,{})]});return window.location.pathname.startsWith("/embed")&&(console.log("TRUE"),console.log("PROPS: ",e.children)),Object(a.jsxs)("div",{children:[t,Object(a.jsx)("main",{children:e.children})]})},W=n(30),X=n(362),q=n(351),J=n(355),$=n(354),Q=n(349),Y=n(352),K=n(353),ee=n(350),te=n(348),ne=n(95),ae=n.n(ne),re=n(96),ce=n.n(re),ie=n(361),se=Object(te.a)((function(e){return{paper:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),oe=function(e){var t=se(),n=Object(r.useState)(!1),c=Object(W.a)(n,2),i=c[0],s=c[1],u=Object(r.useState)(""),l=Object(W.a)(u,2),d=l[0],j=l[1],b=Object(r.useState)(""),p=Object(W.a)(b,2),h=p[0],O=p[1],m=Object(r.useState)(""),v=Object(W.a)(m,2),x=v[0],f=v[1],g=Object(a.jsxs)("div",{className:t.paper,children:[Object(a.jsx)("h2",{children:d}),Object(a.jsx)("p",{children:h}),Object(a.jsx)("div",{children:x})]}),y=function(t,n,r){"del"===t&&(j("Delete Event"),O("Are you sure you want to delete this event named: ".concat(r)),f(Object(a.jsxs)("div",{children:[Object(a.jsx)(ie.a,{variant:"contained",color:"secondary",onClick:function(){return function(t){e.delete(t),S()}(n)},children:"Delete"}),Object(a.jsx)(ie.a,{style:{marginLeft:"1rem"},variant:"contained",onClick:S,children:"Cancel"})]}))),s(!0)},S=function(){s(!1)};return Object(a.jsxs)(Q.a,{component:ee.a,children:[Object(a.jsx)(X.a,{open:i,onClose:S,"aria-labelledby":"delete-event-confirmation","aria-describedby":"delete-event-confirm",children:g}),Object(a.jsxs)(q.a,{"aria-label":"event table",children:[Object(a.jsx)(Y.a,{children:Object(a.jsxs)(K.a,{children:[Object(a.jsx)($.a,{}),Object(a.jsx)($.a,{children:"Event"}),Object(a.jsx)($.a,{align:"right",children:"Day"}),Object(a.jsx)($.a,{align:"right",children:"Date"}),Object(a.jsx)($.a,{align:"right",children:"Time"}),Object(a.jsx)($.a,{align:"right",children:"Open Spots"}),e.isAuth?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)($.a,{align:"right",children:"Admin"}),Object(a.jsx)($.a,{align:"right",children:"Groups"})]}):null]})}),Object(a.jsx)(J.a,{children:e.events.map((function(t){return Object(a.jsxs)(K.a,{children:[Object(a.jsx)($.a,{component:"th",scope:"row",children:Object(a.jsx)(M.a,{component:o.b,to:"/reserve/".concat(t._id),children:Object(a.jsx)(ie.a,{variant:"contained",color:"primary",children:"Reserve"})})}),Object(a.jsx)($.a,{children:t.eventName}),Object(a.jsx)($.a,{align:"right",children:new Date(t.date).toLocaleDateString("us-en",{weekday:"short"})}),Object(a.jsx)($.a,{align:"right",children:new Date(t.date).toLocaleDateString()}),Object(a.jsx)($.a,{align:"right",children:new Date(t.date).toLocaleTimeString([],{timeStyle:"short"})}),Object(a.jsx)($.a,{align:"right",children:t.openSpots}),e.isAuth?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)($.a,{align:"right",children:[" ",Object(a.jsx)(M.a,{component:o.b,to:"/events/edit/".concat(t._id),color:"textPrimary",children:Object(a.jsx)(ae.a,{fontSize:"small"})}),Object(a.jsx)(M.a,{component:o.b,to:"#",color:"textPrimary",children:Object(a.jsx)(ce.a,{style:{marginLeft:5},fontSize:"small",onClick:function(){return y("del",t._id,t.eventName)}})})]}),Object(a.jsx)($.a,{align:"right",children:Object(a.jsx)(M.a,{component:o.b,to:"/reservations/".concat(t._id),children:"View"})})]}):null]},t._id)}))})]})]})},ue=Object(u.b)((function(e){return{events:e.event}}),{fetchUpcomingEvents:D,deleteEvent:z})((function(e){Object(r.useEffect)((function(){e.fetchUpcomingEvents()}),[e.fetchUpcomingEvents]);var t=Object(a.jsx)("div",{children:"Loading..."});return e.events.events.length&&(t=Object(a.jsx)(oe,{events:e.events.events,isAuth:e.isAuth,delete:e.deleteEvent})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Event List"}),t,Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})})),le=n(8),de=n(50),je=n(360),be=n(359),pe=n(358),he=function(e){var t=e.label,n=e.input,r=e.meta,c=r.touched,i=r.invalid,s=r.error,o=Object(de.a)(e,["label","input","meta"]);return Object(a.jsx)(pe.a,Object(le.a)(Object(le.a)({label:t,placeholder:t,error:c&&i,helperText:c&&s},n),o))},Oe=function(e){var t=e.label,n=e.input,r=e.meta,c=(r.touched,r.invalid,r.error,Object(de.a)(e,["label","input","meta"]));return Object(a.jsx)(pe.a,Object(le.a)(Object(le.a)({id:"datetime-local",label:t,type:"datetime-local",InputLabelProps:{shrink:!0}},n),c))},me=Object(be.a)({form:"event"})((function(e){var t=e.handleSubmit;e.pristine,e.reset,e.submitting,e.classes;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"eventName",component:he,label:"Event Name"})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"date",component:Oe,label:"Event Date & Time"})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"openSpots",component:he,type:"number",label:"Open Spots",inputProps:{min:0}})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(ie.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})})),ve=Object(u.b)((function(e){return{created:e.event.created}}),{createEvent:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.post("/event",e);case 2:a=t.sent,n({type:f,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},startCreateGroup:L})((function(e){Object(r.useEffect)((function(){e.startCreateGroup()}),[e.startCreateGroup]);var t=e.created?Object(a.jsx)(j.a,{to:"/"}):null;return Object(a.jsxs)(c.a.Fragment,{children:[t,Object(a.jsx)("h2",{children:"Create An Event:"}),Object(a.jsx)(me,{onSubmit:function(t){e.createEvent(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})})),xe=function(e){var t=e.label,n=e.input,r=e.meta,c=r.touched,i=r.invalid,s=r.error,o=Object(de.a)(e,["label","input","meta"]);return Object(a.jsx)(pe.a,Object(le.a)(Object(le.a)({label:t,placeholder:t,error:c&&i,helperText:c&&s},n),o))},fe=function(e){var t=e.handleSubmit;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"groupName",component:xe,label:"Group Name"})}),Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"email",component:xe,type:"email",label:"Email"})}),Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"groupSize",component:xe,type:"number",label:"How Many People in Your Group?",inputProps:{min:1,max:e.maxGroupSize},style:{width:"300px"}})}),e.auth?Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"note",component:xe,label:"Note"})}):null,Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:e.signupMessage}),Object(a.jsx)(ie.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"}),e.auth&&!window.location.pathname.startsWith("/embed")?Object(a.jsx)("div",{style:{marginTop:"2rem"},children:Object(a.jsx)(M.a,{component:o.b,to:"/embed/reserve/".concat(e.event._id),children:"Embeddable form"})}):null]})},ge=fe=Object(be.a)({form:"reserve",validate:function(e){var t={};return["groupName","email","groupSize"].forEach((function(n){e[n]||(t[n]="Required")})),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address"),t}})(fe),ye=n(161),Se=n.n(ye),Ee=n(162),we=n.n(Ee),Ce=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Reservation Confirmation"}),console.log("GROUP: ",e.group,e.event),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Group Name: "}),e.group.groupName," ",Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Group Size: "}),e.group.groupSize," ",Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Email: "}),e.group.email," ",Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Event Name: "}),e.event.eventName," ",Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Event Date: "}),new Date(e.event.date).toLocaleDateString("en-us")," ",Object(a.jsx)("br",{}),Object(a.jsx)("strong",{children:"Event Time: "}),new Date(e.event.date).toLocaleTimeString("en-us",{timeStyle:"short"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("strong",{children:["Time Reservation Made:"," ",(new Date).toLocaleString("en-us",{dateStyle:"short",timeStyle:"short"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"The above details have been sent to you."}),Object(a.jsx)("br",{}),Object(a.jsxs)(ie.a,{variant:"contained",color:"primary",onClick:function(){return window.print()},children:[Object(a.jsx)(Se.a,{}),"Print"]}),"  ",Object(a.jsx)(o.b,{to:"/",children:Object(a.jsxs)(ie.a,{variant:"contained",color:"primary",children:[Object(a.jsx)(we.a,{}),"Close"]})})]})]})},Ge=Object(u.b)((function(e,t){return{event:e.event.events.filter((function(e){return e._id===t.match.params.id})),created:e.group.created,group:e.group.group,isSignedIn:e.auth.isSignedIn,maxGroupSize:e.church.maxGroupSize,signupMessage:e.church.signupMessage}}),{fetchEvent:R,createGroup:function(e,t){return function(){var n=Object(m.a)(O.a.mark((function n(a){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.post("/group/".concat(e),t);case 2:r=n.sent,a({type:C,payload:r.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},startCreateGroup:L})((function(e){Object(r.useEffect)((function(){return e.fetchEvent(e.match.params.id),console.log("FETCHING EVENT"),function(){return e.startCreateGroup()}}),[e.fetchEvent]);var t=Object(a.jsx)("div",{children:"Loading ..."});return e.event.length>0&&(t=Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Make Reservation"}),Object(a.jsxs)("h4",{children:[e.event[0].eventName," -"," ",new Date(e.event[0].date).toLocaleDateString("us-en",{weekday:"short"}),", ",new Date(e.event[0].date).toLocaleString("en-us",{dateStyle:"short",timeStyle:"short"})]}),Object(a.jsx)(ge,{onSubmit:function(t){e.createGroup(e.match.params.id,t)},event:e.event[0],auth:e.isSignedIn,maxGroupSize:Math.min(e.maxGroupSize,e.event[0].openSpots),signupMessage:e.signupMessage})]})),Object(a.jsxs)("div",{children:[console.log("PROPS: ",e.event),console.log("CREATED: ",e.created),e.created?Object(a.jsx)(Ce,{group:e.group.dbGroup,event:e.event}):t]})}));n(311);function _e(){return Math.round(20*Math.random())-10}function Te(){var e=50+_e(),t=50+_e();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var ke=Object(te.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Ie(){var e=ke(),t=c.a.useState(Te),n=Object(W.a)(t,1)[0],r=c.a.useState(!1),i=Object(W.a)(r,2),s=i[0],o=i[1],u=Object(a.jsxs)("div",{style:n,className:e.paper,children:[Object(a.jsx)("h2",{id:"simple-modal-title",children:"Text in a modal"}),Object(a.jsx)("p",{id:"simple-modal-description",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),Object(a.jsx)(Ie,{})]});return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",onClick:function(){o(!0)},children:"Open Modal"}),Object(a.jsx)(X.a,{open:s,onClose:function(){o(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:u})]})}var Ne=Object(u.b)((function(e,t){return{event:e.event.events}}),{fetchEvent:R,deleteEvent:z})((function(e){Object(r.useEffect)((function(){e.fetchEvent(e.match.params.id)}),[]);return Object(a.jsx)(Ie,{title:"Delete ".concat(e.event.eventName),content:"Are you sure you want to delete this event?"})})),Ae=(n(312),Object(u.b)((function(e,t){return{event:e.event.events.filter((function(e){return e._id===t.match.params.id})),created:e.event.created}}),{fetchEvent:R,editEvent:function(e,t){return function(){var n=Object(m.a)(O.a.mark((function n(a){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.put("event/".concat(e),t);case 2:r=n.sent,a({type:w,payload:r.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){Object(r.useEffect)((function(){e.fetchEvent(e.match.params.id)}),[e.fetchEvent]);var t=e.created?Object(a.jsx)(j.a,{to:"/"}):null,n=Object(a.jsx)("p",{children:"Hello"});if(e.event.length=1){var c=e.event[0];c&&(c.date=new Date(new Date(c.date).toString().split("GMT")[0]+" UTC").toISOString().split(".")[0]),n=Object(a.jsx)(me,{initialValues:e.event[0],onSubmit:function(t){e.editEvent(e.match.params.id,t)}})}return Object(a.jsxs)("div",{children:[t,Object(a.jsx)("h2",{children:"Event Edit"}),n]})}))),De=Object(u.b)((function(e){return{events:e.event.events}}),{fetchUpcomingEvents:D})((function(e){Object(r.useEffect)((function(){e.fetchUpcomingEvents()}),[e.fetchUpcomingEvents]);var t=Object(a.jsx)("div",{children:"Loading..."});return e.events.length>0&&(t=Object(a.jsx)(oe,{events:e.events,admin:!0})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Reservation List"}),t]})})),Re=Object(te.a)((function(e){return{paper:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ze=function(e){var t=Re(),n=Object(r.useState)(!1),c=Object(W.a)(n,2),i=c[0],s=c[1],u=Object(r.useState)(""),l=Object(W.a)(u,2),d=l[0],j=l[1],b=Object(r.useState)(""),p=Object(W.a)(b,2),h=p[0],O=p[1],m=Object(r.useState)(""),v=Object(W.a)(m,2),x=v[0],f=v[1],g=Object(a.jsxs)("div",{className:t.paper,children:[Object(a.jsx)("h2",{children:d}),Object(a.jsx)("p",{children:h}),Object(a.jsx)("div",{children:x})]}),y=function(t,n,r,c){"del"===t&&(j("Delete Group"),O("Are you sure you want to delete this group named: ".concat(r)),f(Object(a.jsxs)("div",{children:[Object(a.jsx)(ie.a,{variant:"contained",color:"secondary",onClick:function(){return function(t,n){e.delete(t,n,e.event[0]._id),S()}(n,c)},children:"Delete"}),Object(a.jsx)(ie.a,{style:{marginLeft:"1rem"},variant:"contained",onClick:S,children:"Cancel"})]}))),s(!0)},S=function(){s(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(X.a,{open:i,onClose:S,"aria-labelledby":"delete-group-confirmation","aria-describedby":"delete-group-confirm",children:g}),Object(a.jsxs)("h3",{children:["Groups for: ",e.event[0].eventName," -"," ",new Date(e.event[0].date).toLocaleString()]}),Object(a.jsx)(Q.a,{component:ee.a,children:Object(a.jsxs)(q.a,{"aria-label":"group table",children:[Object(a.jsx)(Y.a,{children:Object(a.jsxs)(K.a,{children:[Object(a.jsx)($.a,{children:"Group"}),Object(a.jsx)($.a,{align:"right",children:"Quantity"}),Object(a.jsx)($.a,{align:"right",children:"Email"}),Object(a.jsx)($.a,{align:"right",children:"Note"}),Object(a.jsx)($.a,{align:"right",children:"Edit"})]})}),Object(a.jsx)(J.a,{children:e.event[0].groups.map((function(e){return Object(a.jsxs)(K.a,{children:[Object(a.jsx)($.a,{component:"th",scope:"row",children:e.groupName}),Object(a.jsx)($.a,{align:"right",children:e.groupSize}),Object(a.jsx)($.a,{align:"right",children:e.email}),Object(a.jsx)($.a,{align:"right",children:e.note}),Object(a.jsxs)($.a,{align:"right",children:[Object(a.jsx)(M.a,{component:o.b,to:"/reservations/edit/".concat(e._id),color:"textPrimary",children:Object(a.jsx)(ae.a,{fontSize:"small"})}),Object(a.jsx)(M.a,{component:o.b,to:"#",color:"textPrimary",children:Object(a.jsx)(ce.a,{style:{marginLeft:5},fontSize:"small",onClick:function(){return y("del",e._id,e.groupName,e.groupSize)}})})]})]},e._id)}))})]})})]})},Le=Object(u.b)((function(e){return{event:e.event.events}}),{fetchPopulatedEvent:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("event/admin/".concat(e));case 2:a=t.sent,n({type:g,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteGroup:function(e,t,n){return function(){var a=Object(m.a)(O.a.mark((function a(r){var c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x.delete("/group/".concat(e,"/").concat(t,"/").concat(n));case 2:c=a.sent,r({type:_,payload:c.data});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){Object(r.useEffect)((function(){e.fetchPopulatedEvent(e.match.params.id)}),[e.fetchEvent]);var t=Object(a.jsx)("div",{children:"Loading..."});return e.event[0]&&e.event[0].groups&&(t=Object(a.jsx)(ze,{event:e.event,delete:e.deleteGroup})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Reservations"}),t]})})),Me=Object(u.b)((function(e,t){return{group:e.event.events[0].groups.filter((function(e){return e._id===t.match.params.id})),isSignedIn:e.auth.isSignedIn,eventId:e.event.events[0]._id,created:e.group.created}}),{startCreateGroup:L,editGroup:function(e,t){return function(){var n=Object(m.a)(O.a.mark((function n(a){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.put("/group/".concat(e),t);case 2:r=n.sent,a({type:G,payload:r.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){Object(r.useEffect)((function(){return function(){return e.startCreateGroup()}}),[]);var t=e.created?Object(a.jsx)(j.a,{to:"/"}):null;return Object(a.jsxs)("div",{children:[t,Object(a.jsx)("h2",{children:"Reservation Edit"}),Object(a.jsx)(ge,{initialValues:e.group[0],auth:e.isSignedIn,onSubmit:function(t){var n=e.group[0].groupSize-t.groupSize;t.eventId=e.eventId,t.sizeDifference=n,e.editGroup(e.match.params.id,t)}})]})})),Pe=n(363),Ue=n(366),Fe=function(e){var t=e.label,n=e.input,r=e.meta,c=r.touched,i=r.invalid,s=r.error,o=Object(de.a)(e,["label","input","meta"]);return Object(a.jsx)(pe.a,Object(le.a)(Object(le.a)({label:t,placeholder:t,error:c&&i,helperText:c&&s},n),o))},Ve=function(e){var t=e.fields,n=e.meta,r=n.touched,c=n.error,i=n.submitFailed,s=e.input;return Object(a.jsxs)(Ue.a,{style:{maxWidth:360,marginTop:"27px",marginBottom:"27px"},children:[t.map((function(e,n){return Object(a.jsxs)("li",{style:{display:"flex",alignItems:"flex-end"},children:[Object(a.jsx)(je.a,Object(le.a)({style:{width:"80%",marginBottom:".5rem"},name:"".concat(e,".adminEmail"),type:"email",component:Fe,label:"Admin Email"},s)),Object(a.jsx)(ie.a,{style:{width:"5%",padding:0,minWidth:25,marginBottom:".5rem"},variant:"contained",color:"secondary",onClick:function(){return t.remove(n)},children:"X"})]},n)})),Object(a.jsx)(ie.a,{variant:"contained",onClick:function(){return t.push({})},children:"Add Admin Email"}),(r||i)&&c&&Object(a.jsx)("span",{children:c})]})},He=function(e){var t=e.handleSubmit;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"maxGroupSize",component:Fe,label:"Max. Group Size",type:"number",inputProps:{min:1}})}),Object(a.jsx)("div",{children:Object(a.jsx)(Pe.a,{name:"adminEmail",component:Ve})}),Object(a.jsx)("div",{children:Object(a.jsx)(je.a,{name:"signupMessage",component:Fe,label:"Signup Message",style:{width:"100%"},multiline:!0,rows:13})}),Object(a.jsx)("br",{}),Object(a.jsx)(ie.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})},Be=He=Object(be.a)({form:"settings",validate:function(e){var t={};return["groupName","email","groupSize"].forEach((function(n){e[n]||(t[n]="Required")})),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address"),t}})(He),Ze=Object(u.b)((function(e){return{church:e.church}}),{fetchChurchSettings:function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("church/admin");case 2:n=e.sent,t({type:A,payload:n.data[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateChurchSettings:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.put("church/admin",e);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){c.a.useEffect((function(){e.fetchChurchSettings()}),[]);var t=Object(a.jsx)("div",{children:"Loading..."});return e.church.adminEmail.length>0&&(t=Object(a.jsx)(Be,{initialValues:e.church,onSubmit:function(t){e.updateChurchSettings(t)}})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Settings"}),t]})})),We=Object(j.g)(Object(u.b)((function(e){return{isAuthenticated:e.auth.isSignedIn,maxGroupSize:e.church.maxGroupSize}}),{fetchMaxGroupSize:function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/church");case 2:n=e.sent,t({type:N,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){Object(r.useEffect)((function(){e.fetchMaxGroupSize()}),[]);var t=Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/",exact:!0,component:ue}),Object(a.jsx)(j.b,{path:"/reserve/:id",exact:!0,component:Ge}),Object(a.jsx)(j.b,{path:"/embed/reserve/:id",exact:!0,component:Ge})]});return e.isAuthenticated&&(t=Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/",exact:!0,render:function(e){return Object(a.jsx)(ue,{isAuth:!0})}}),Object(a.jsx)(j.b,{path:"/event-create",component:ve}),Object(a.jsx)(j.b,{path:"/events/edit/:id",component:Ae}),Object(a.jsx)(j.b,{path:"/events/delete/:id",component:Ne}),Object(a.jsx)(j.b,{path:"/reservations",exact:!0,component:De}),Object(a.jsx)(j.b,{path:"/reservations/:id",exact:!0,component:Le}),Object(a.jsx)(j.b,{path:"/reservations/edit/:id",exact:!0,component:Me}),Object(a.jsx)(j.b,{path:"/reserve/:id",exact:!0,component:Ge}),Object(a.jsx)(j.b,{path:"/settings",exact:!0,component:Ze})]})),Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(p.a,{maxWidth:"md",children:Object(a.jsx)(Z,{children:t})})]})}))),Xe=n(364),qe={maxGroupSize:null,adminEmail:[],adminFirstName:"",adminLastName:"",signupMessage:""},Je=n(164),$e={events:[],created:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(le.a)(Object(le.a)({},e),{},{events:t.payload,created:!1});case y:return e.events.length?Object(le.a)(Object(le.a)({},e),{},{events:e.events.map((function(e){return e._id===t.payload._id?e=t.payload:e}))}):Object(le.a)(Object(le.a)({},e),{},{events:e.events.concat(t.payload)});case f:return Object(le.a)(Object(le.a)({},e),{},{events:[].concat(Object(Je.a)(e.events),[t.payload]),created:!0});case S:return Object(le.a)(Object(le.a)({},e),{},{events:t.payload});case E:return Object(le.a)(Object(le.a)({},e),{},{events:e.events.filter((function(e){return e._id!==t.payload}))});case w:return Object(le.a)(Object(le.a)({},e),{},{created:!0,events:e.events.filter((function(e){return e._id!==t.payload}))});case _:return Object(le.a)(Object(le.a)({},e),{},{events:[t.payload.dbEvent]});default:return e}},Ye={created:!1},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(le.a)(Object(le.a)({},e),{},{created:!1});case C:return Object(le.a)(Object(le.a)({},e),{},{group:t.payload,created:!0});case G:return Object(le.a)(Object(le.a)({},e),{},{created:!0});case _:return Object(le.a)({},e);default:return e}},et={isSignedIn:null,userId:{adminOf:[]}},tt=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(le.a)(Object(le.a)({},e),{},{isSignedIn:!0,userId:t.payload});case I:return Object(le.a)(Object(le.a)({},e),{},{isSignedIn:!1,userId:et.userId});default:return e}},church:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(le.a)(Object(le.a)({},e),{},{maxGroupSize:t.payload[0].maxGroupSize,signupMessage:t.payload[0].signupMessage});case A:return Object(le.a)(Object(le.a)({},e),{},{adminEmail:t.payload.adminEmail,adminFirstName:t.payload.adminFirstName,adminLastName:t.payload.adminLastName,maxGroupSize:t.payload.maxGroupSize,signupMessage:t.payload.signupMessage});default:return e}},event:Qe,group:Ke,form:Xe.a}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,at=Object(l.e)(tt,nt(Object(l.a)(d.a)));s.a.render(Object(a.jsx)(u.a,{store:at,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(We,{})})}),document.querySelector("#root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.e4924896.chunk.js.map