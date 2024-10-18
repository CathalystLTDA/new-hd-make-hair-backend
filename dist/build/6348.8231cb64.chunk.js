"use strict";(self.webpackChunknew_hd_make_hair_backend=self.webpackChunknew_hd_make_hair_backend||[]).push([[6348],{76348:(I,D,_)=>{_.r(D),_.d(D,{LoginEE:()=>T});var E=_(92132),d=_(48653),t=_(94061),n=_(83997),o=_(30893),l=_(54894),i=_(63891),O=_(77392),P=_(77452),r=_(21247),C=_(15126),M=_(63299),h=_(67014),s=_(59080),L=_(79275),A=_(14718),a=_(21272),K=_(82437),m=_(61535),g=_(5790),x=_(12083),j=_(35223),f=_(5409),y=_(74930),c=_(2600),S=_(48940),$=_(41286),N=_(56336),F=_(13426),z=_(84624),G=_(77965),Z=_(54257),H=_(71210),J=_(51187),Q=_(39404),V=_(58692),X=_(501),Y=_(57646),u=_(23120),e=_(44414),p=_(25962),k=_(14664),w=_(42588),b=_(90325),q=_(62785),__=_(87443),E_=_(41032),s_=_(22957),a_=_(93179),t_=_(73055),n_=_(15747),O_=_(85306),D_=_(26509),d_=_(32058),P_=_(81185),M_=_(82261);const B=(0,i.default)(d.c)`
  flex: 1;
`,T=R=>{const{formatMessage:U}=(0,l.A)(),{isLoading:W,data:v=[]}=(0,O.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!W&&v.length===0?(0,E.jsx)(O.L,{...R}):(0,E.jsx)(O.L,{...R,children:(0,E.jsx)(t.a,{paddingTop:7,children:(0,E.jsxs)(n.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(n.s,{children:[(0,E.jsx)(B,{}),(0,E.jsx)(t.a,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.o,{variant:"sigma",textColor:"neutral600",children:U({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(B,{})]}),(0,E.jsx)(P.S,{providers:v,displayAllProviders:!1})]})})})}},77452:(I,D,_)=>{_.d(D,{S:()=>r});var E=_(92132),d=_(90151),t=_(68074),n=_(79739),o=_(83997),l=_(30893),i=_(54894),O=_(71389),P=_(63891);const r=({providers:s,displayAllProviders:L})=>{const{formatMessage:A}=(0,i.A)();return L?(0,E.jsx)(d.x,{gap:4,children:s.map(a=>(0,E.jsx)(t.E,{col:4,children:(0,E.jsx)(M,{provider:a})},a.uid))}):s.length>2&&!L?(0,E.jsxs)(d.x,{gap:4,children:[s.slice(0,2).map(a=>(0,E.jsx)(t.E,{col:4,children:(0,E.jsx)(M,{provider:a})},a.uid)),(0,E.jsx)(t.E,{col:4,children:(0,E.jsx)(n.m,{label:A({id:"global.see-more"}),children:(0,E.jsx)(h,{as:O.Link,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(C,{justifyContent:"center",children:s.map(a=>(0,E.jsx)(M,{provider:a},a.uid))})},C=(0,P.default)(o.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,M=({provider:s})=>(0,E.jsx)(n.m,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.o,{children:s.displayName})})}),h=P.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
