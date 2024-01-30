"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[206],{4206:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(2791),a=t(4420),o="ContactFormAdd_form__JfbOl",s=t(3634),c=t(2187),i=t(3553),l=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},d=function(e){return e.filter.filter},h=(0,i.P1)(l,d,(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),x=function(){return{contacts:(0,a.v9)(l),isLoading:(0,a.v9)(u),error:(0,a.v9)(m),filter:(0,a.v9)(d),contactsAndFilter:(0,a.v9)(h)}},f=t(8627),_=t(184),j=function(){var e=(0,a.I0)(),n=x().contacts,t=(0,f.a)().user;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h2",{children:"Create contact"}),(0,_.jsx)("div",{className:o,children:(0,_.jsx)("div",{children:(0,_.jsxs)("form",{onSubmit:function(r){r.preventDefault();var a=r.currentTarget.elements.name.value.trim(),o=r.currentTarget.elements.number.value.trim();n.some((function(e){return e.name.toLowerCase()===a.toLowerCase()||e.phone===o}))?alert("".concat(t.name," The contact is already in your book")):(e((0,s.uK)({name:a,number:o})),r.currentTarget.reset())},className:o,children:[(0,_.jsx)("label",{children:(0,_.jsx)("input",{placeholder:"Name",type:"text",name:"name",required:!0})}),(0,_.jsx)("label",{children:(0,_.jsx)("input",{placeholder:"Phone number",type:"tel",name:"number",required:!0})}),(0,_.jsx)("button",{type:"submit",children:(0,_.jsx)(c.iJQ,{})})]})})})]})},b="ContactsList_list__box__no-st",p="ContactsList_list__mmE3Y",v="ContactsList_list__box_contact__CGxy-",g=t(9439),C=t(4942),y=t(1413),N=t(4164),k={modal__backdrop:"Modal_modal__backdrop__Bvr-f",modal__box:"Modal_modal__box__YRX0y",form:"Modal_form__FEIVf"},F=document.querySelector("#modal__root"),L=function(e){var n=e.item,t=e.toogle,o=(0,a.I0)(),c=(0,r.useState)({name:n.name,number:n.number}),i=(0,g.Z)(c,2),l=i[0],u=i[1],m=l.name,d=l.number,h=function(e){var n=e.target,t=n.name,r=n.value;u((function(e){return(0,y.Z)((0,y.Z)({},e),{},(0,C.Z)({},t,r))}))};return(0,N.createPortal)((0,_.jsx)("div",{className:k.modal__backdrop,children:(0,_.jsx)("div",{className:k.modal__box,children:(0,_.jsxs)("form",{className:k.form,onSubmit:function(e){e.preventDefault();var r={name:m,number:d,id:n.id};o((0,s.uJ)(r)),t()},autoComplete:"off",children:[(0,_.jsxs)("label",{className:k.label,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",value:m,autoComplete:"name",onChange:h})]}),(0,_.jsxs)("label",{className:k.label,children:["Number",(0,_.jsx)("input",{type:"phone",name:"number",value:d,autoComplete:"phone",onChange:h})]}),(0,_.jsx)("button",{type:"submit",children:"Edit contact"})]})})}),F)},w=t(9128),I=t(9108),T=function(e){var n=e.item,t=(0,a.I0)(),o=(0,r.useState)(!1),c=(0,g.Z)(o,2),i=c[0],l=c[1],u=function(){l((function(e){return!e}))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("li",{className:p,children:[(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("b",{children:n.name})," ",(0,_.jsx)("b",{children:n.number})]}),(0,_.jsx)("button",{type:"button",onClick:u,children:(0,_.jsx)(w.$jT,{})}),(0,_.jsx)("button",{type:"button",onClick:function(){return e=n.id,void t((0,s.GK)(e));var e},children:(0,_.jsx)(I.Psi,{})})]},n.id),i&&(0,_.jsx)(L,{item:n,toogle:u})]})},S=function(){var e=x(),n=e.contacts,t=e.contactsAndFilter;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("h3",{children:["Your phonebook has ",n.length," contacts"]}),t.length>0?(0,_.jsxs)("h3",{children:["contacts found ",t.length," "]}):(0,_.jsx)("h3",{children:"Contact not found"}),(0,_.jsx)("ul",{className:b,children:t.map((function(e){return(0,_.jsx)(T,{item:e},e.id)}))})]})},Z=t(4808),q=function(){var e=(0,a.I0)(),n=x().filter;return(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:"Filter"}),(0,_.jsx)("label",{children:(0,_.jsx)("input",{type:"text",placeholder:"Find contacts by name...",value:n,onChange:function(n){e((0,Z.T)(n.target.value))}})})]})},E=function(){var e=(0,a.I0)(),n=x(),t=n.isLoading,o=n.showModal;return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"contact",children:(0,_.jsxs)("div",{className:"contact__form_box",children:[(0,_.jsx)(j,{}),(0,_.jsx)(q,{}),t&&(0,_.jsx)("h2",{children:"Request in progress..."}),o&&(0,_.jsx)(L,{}),(0,_.jsx)(S,{})]})})})}}}]);
//# sourceMappingURL=206.b67c94bc.chunk.js.map