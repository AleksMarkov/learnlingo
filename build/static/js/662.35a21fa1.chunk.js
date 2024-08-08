"use strict";(self.webpackChunklearnlingo=self.webpackChunklearnlingo||[]).push([[662],{3333:(e,i,t)=>{t.d(i,{Z:()=>r});t(2791);const r=t.p+"static/media/Group 82.f00e07c359d2557f7d174d3800fd00f6.svg"},4638:(e,i,t)=>{t.d(i,{Z:()=>r});t(2791);const r=t.p+"static/media/Star.c2ae40ef3216365e53fa34928bb928f3.svg"},8323:(e,i,t)=>{t.d(i,{Z:()=>r});t(2791);const r=t.p+"static/media/book-open-01.818b41995f0a0349a370ae28b73e4fa6.svg"},5985:(e,i,t)=>{t.d(i,{Z:()=>r});t(2791);const r=t.p+"static/media/heartOn.b9a7834e44d8b869a190a5af63eab30b.svg"},3728:(e,i,t)=>{t.d(i,{Z:()=>b});var r=t(2791),o=t(2683);const n=o.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 14px;
  gap: 20px;
  width: 1184px;
  height: 74px;
`,l=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,a=o.ZP.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8a8a89;
`,s=o.ZP.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 221px;
  height: 48px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
`,x=o.ZP.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 198px;
  height: 48px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
`,c=o.ZP.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 124px;
  height: 48px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
`,d=o.ZP.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: var(--text-color);
`,p=o.ZP.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 18px;
  top: calc(50% - 10px);
`,h=o.ZP.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  max-height: 200px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow-y: auto;
`,g=o.ZP.div`
  padding: 6px 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: rgba(3.6, 4, 4.6, 0.2);
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    background-color: var(--additional-bg-color);
  }
`;const f=t.p+"static/media/chevron-down.24cd320d509ea2ebbeb4265f8030bafb.svg";var u=t(184);const b=e=>{let{languages:i,levels:t,prices:o,selectedLanguage:b,selectedLevel:m,selectedPrice:v,onSelectLanguage:w,onSelectLevel:j,onSelectPrice:y}=e;const[Z,P]=(0,r.useState)(!1),[k,z]=(0,r.useState)(!1),[C,S]=(0,r.useState)(!1);return(0,u.jsxs)(n,{children:[(0,u.jsxs)(l,{children:[(0,u.jsx)(a,{children:"Languages"}),(0,u.jsxs)(s,{onClick:()=>{P(!Z),z(!1),S(!1)},children:[(0,u.jsx)(d,{children:b||"Select"}),(0,u.jsx)(p,{src:f,alt:"chevron down"}),Z&&(0,u.jsx)(h,{children:i.map(((e,i)=>(0,u.jsx)(g,{onClick:()=>(e=>{w("All"===e?"":e),P(!1)})(e),children:e},i)))})]})]}),(0,u.jsxs)(l,{children:[(0,u.jsx)(a,{children:"Level of knowledge"}),(0,u.jsxs)(x,{onClick:()=>{z(!k),P(!1),S(!1)},children:[(0,u.jsx)(d,{children:m||"Select"}),(0,u.jsx)(p,{src:f,alt:"chevron down"}),k&&(0,u.jsx)(h,{children:t.map(((e,i)=>(0,u.jsx)(g,{onClick:()=>(e=>{j("All"===e?"":e),z(!1)})(e),children:e},i)))})]})]}),(0,u.jsxs)(l,{children:[(0,u.jsx)(a,{children:"Price"}),(0,u.jsxs)(c,{onClick:()=>{S(!C),P(!1),z(!1)},children:[(0,u.jsxs)(d,{children:[v||"Select"," $"]}),(0,u.jsx)(p,{src:f,alt:"chevron down"}),C&&(0,u.jsx)(h,{children:o.map(((e,i)=>(0,u.jsxs)(g,{onClick:()=>(e=>{y(e),S(!1)})(e),children:[e," $"]},i)))})]})]})]})}},9392:(e,i,t)=>{t.d(i,{Z:()=>L});var r=t(2791),o=t(1134),n=t(4695),l=t(8007);const a=l.Ry().shape({fullName:l.Z_().min(2,"Full name must be at least 2 characters").max(32,"Full name cannot be longer than 32 characters").required("Full name is required"),email:l.Z_().email("Invalid email format").required("Email is required"),phoneNumber:l.Z_().matches(/^[0-9]+$/,"Phone number must be numeric").min(10,"Phone number must be at least 10 digits").max(15,"Phone number cannot be longer than 15 digits").required("Phone number is required")});var s=t(2683);const x=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 472px;
  height: 134px;
  left: 64px;
  top: 64px;
  background-color: var(--primary-bg-color);

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: var(--text-color);
    text-align: left;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(18, 20, 23, 0.8);
    text-align: left;
  }
`,c=s.ZP.div`
  width: 200px;
  height: 44px;
  background-color: var(--primary-bg-color);
  display: flex;
  position: absolute;
  top: 218px;
  left: 64px;
  gap: 14px;
  opacity: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,d=s.ZP.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
`,p=s.ZP.div`
  width: 142px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: #8a8a89;
  }
`,h=s.ZP.div`
  width: 472px;
  height: 64px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 302px;
  left: 64px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: var(--text-color);
`,g=s.ZP.div`
  width: 472px;
  position: absolute;
  top: 386px;
  left: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,f=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u=s.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,b=s.ZP.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--btn-icon-bg);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--btn-icon-bg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`,m=s.ZP.label`
  font-size: 16px;
  color: var(--text-color);
`,v=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 472px;
  height: 198px;
  top: 520px;
  left: 64px;

  input {
    width: 472px;
    height: 54px;
    padding: 16px 18px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: var(--text-color);

    ::placeholder {
      color: var(--text-color);
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      opacity: 1;
    }

    &:focus {
      border-color: var(--btn-hover-bg);
      outline: none;
    }
  }
`,w=s.ZP.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 215px;
  position: absolute;
  width: 472px;
  height: 60px;
  left: 64px;
  top: 758px;
  background-color: var(--btn-icon-bg);
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: var(--btn-hover-bg);
  }
`,j=s.ZP.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-bg-color);
  color: var(--text-color);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: 1;
`,y=s.ZP.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`,Z=s.ZP.div`
  width: 400px;
  height: 88px;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
`,P=s.ZP.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
`,k=s.ZP.div`
  width: 284px;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;
  color: var(--text-color);

  span {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #8a8a89;
  }
`,z=s.ZP.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;
`;var C=t(1153),S=t(184);const L=e=>{let{teacher:i,onClose:t}=e;const[l,s]=(0,r.useState)("Career and business"),[L,N]=(0,r.useState)(!1),{register:q,handleSubmit:_,formState:{errors:F}}=(0,o.cI)({resolver:(0,n.X)(a)}),$=e=>{s(e.target.value)};return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(C.Z,{width:600,height:882,onClose:t,top:"50%",left:"50%",border:"none",background:"rgba(0, 0, 0, 0.5)",children:[(0,S.jsxs)("form",{onSubmit:_((e=>{N(!0),setTimeout((()=>{N(!1),t()}),3e3)})),children:[(0,S.jsxs)(x,{children:[(0,S.jsx)("h2",{children:"Book trial lesson"}),(0,S.jsx)("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."})]}),(0,S.jsxs)(c,{children:[(0,S.jsx)(d,{src:i.avatar_url}),(0,S.jsxs)(p,{children:[(0,S.jsx)("span",{children:"Your teacher "}),i.name," ",i.surname]})]}),(0,S.jsx)(h,{children:"What is your main reason for learning English?"}),(0,S.jsxs)(g,{children:[(0,S.jsx)(f,{children:["Career and business","Lesson for kids","Living abroad"].map((e=>(0,S.jsxs)(u,{children:[(0,S.jsx)(b,{type:"radio",name:"reason",value:e,checked:l===e,onChange:$}),(0,S.jsx)(m,{children:e})]},e)))}),(0,S.jsx)(f,{children:["Exams and coursework","Culture, travel or hobby"].map((e=>(0,S.jsxs)(u,{children:[(0,S.jsx)(b,{type:"radio",name:"reason",value:e,checked:l===e,onChange:$}),(0,S.jsx)(m,{children:e})]},e)))})]}),(0,S.jsxs)(v,{children:[(0,S.jsx)("input",{placeholder:"Full name",...q("fullName")}),F.fullName&&(0,S.jsx)(z,{children:F.fullName.message}),(0,S.jsx)("input",{placeholder:"Email",...q("email")}),F.email&&(0,S.jsx)(z,{children:F.email.message}),(0,S.jsx)("input",{placeholder:"Phone number",type:"text",...q("phoneNumber")}),F.phoneNumber&&(0,S.jsx)(z,{children:F.phoneNumber.message})]}),(0,S.jsx)(w,{type:"submit",children:"Book"})]}),L&&(0,S.jsxs)(j,{children:[(0,S.jsx)(y,{children:"Your request for a trial lesson has been sent to your teacher:"}),(0,S.jsxs)(Z,{children:[(0,S.jsx)(P,{src:i.avatar_url}),(0,S.jsxs)(k,{children:[i.name," ",i.surname]})]})]})]})})}},8829:(e,i,t)=>{t.d(i,{Z:()=>d});t(2791);var r=t(2683);const o=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 968px;
  height: 200px;
`,n=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 968px;
  height: 84px;
`,l=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`,a=r.ZP.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--text-color);
`,s=r.ZP.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);
`;var x=t(4638),c=t(184);const d=e=>{let{reviews:i}=e;return(0,c.jsx)(o,{children:i.map(((e,i)=>(0,c.jsxs)(n,{children:[(0,c.jsxs)(l,{children:[e.reviewer_name,(0,c.jsxs)(a,{children:[(0,c.jsx)("img",{src:x.Z,width:"16",height:"16",alt:"star"}),e.reviewer_rating.toFixed(1)]})]}),(0,c.jsx)(s,{children:e.comment})]},i)))})}},5462:()=>{}}]);
//# sourceMappingURL=662.35a21fa1.chunk.js.map