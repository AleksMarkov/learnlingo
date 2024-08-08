"use strict";(self.webpackChunklearnlingo=self.webpackChunklearnlingo||[]).push([[931],{1153:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(2791),i=r(4164),n=r(2683);const a=n.ZP.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{$background:t}=e;return t||"rgba(0, 0, 0, 0)"}};
  z-index: 9999;
`,s=n.ZP.div`
  position: fixed;
  top: ${e=>{let{$top:t}=e;return t||"50%"}};
  left: ${e=>{let{$left:t}=e;return t||"50%"}};
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  min-height: ${e=>{let{$Height:t}=e;return t?`${t}px`:"130px"}};
  border-radius: 30px;
  border: ${e=>{let{$border:t}=e;return t||"none"}};
  padding: 32px;
  color: var(--text-color);
  background-color: var(--primary-bg-color);
  z-index: 10000;
  width: ${e=>{let{$Width:t}=e;return t?`${t}px`:"200px"}};

  }
`,l=n.ZP.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: 1440px) {
    &:hover svg,
    &:focus svg {
      filter: drop-shadow(1px 1px 3px var(--additional-bg-color));
    }
  }
`;var d=r(184);const c=e=>{let{children:t,width:r,height:n,onClose:c,top:p,left:x,border:g,background:h}=e;const u=document.getElementById("modal-root");(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.code&&c()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[c]);return(0,i.createPortal)((0,d.jsx)(a,{onClick:e=>{e.target===e.currentTarget&&(c(),e.stopPropagation())},$background:h,children:(0,d.jsxs)(s,{$Width:r,$Height:n,onClick:e=>e.stopPropagation(),$top:p,$left:x,$border:g,children:[(0,d.jsx)(l,{type:"button","aria-label":"Close modal",onClick:()=>{c()},children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024",children:(0,d.jsx)("path",{fill:"none",stroke:"var(--text-color)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"85.333",d:"M768 256 256 768M256 256l512 512"})})}),t]})}),u)}},9931:(e,t,r)=>{r.d(t,{Z:()=>D});var o=r(2791),i=r(7689),n=r(1087),a=r(4420),s=r(9176),l=r(2683);const d=l.ZP.header`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1184px;
  height: 48px;
  border: none;
`,c=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,p=l.ZP.img`
  width: 28px;
  height: 28px;
`,x=l.ZP.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--text-color);
  margin: 0;
`,g=l.ZP.nav`
  display: flex;
  align-items: center;
  gap: 28px;
`,h=l.ZP.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--text-color);
  background-color: ${e=>e.active?"var(--btn-icon-bg)":"transparent"};
  padding: 8px 16px;
  border-radius: 8px;

  &:hover {
    background-color: ${e=>e.active?"var(--btn-hover-bg)":"transparent"};
    cursor: pointer;
  }
`,u=l.ZP.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`,m=l.ZP.a`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  margin-right: 8px;
  color: var(--text-color);
  &:hover {
    background-color: var(--additional-bg-color);
    cursor: pointer;
  }
`,b=l.ZP.button`
  width: 166px;
  height: 48px;
  padding: 14px 39px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: var(--primary-bg-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #505458;
  }
`,f=l.ZP.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--btn-icon-bg);
`;const v=r.p+"static/media/ukraine.d34743a6d4214a7edfd037c74ed2da93.svg",w=l.ZP.div`
  .theme-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    ul {
      list-style-type: none;
      padding: 10;
      margin: 10;
    }

    li {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      transition: transform 0.2s, background-color 0.3s;

      &:hover {
        transform: scale(1.05);
        background-color: lighten(0.1);
      }

      &.active {
        font-weight: bold;
        border-bottom: 2px solid currentColor;
      }
    }
  }
`;var j=r(1153),k=r(6184),y=r(184);const P=e=>{let{closeMenu:t}=e;const r=["#fbe9ba","#cbded3","#bfd6ea","#f2c0bd","#f4c8ba"],{currentTheme:i,setCurrentTheme:n}=(0,o.useContext)(k.N);return(0,y.jsx)(j.Z,{width:200,height:240,onClose:()=>t(!1),top:"36%",left:"52%",border:"none",background:" rgba(0, 0, 0, 0.05)",children:(0,y.jsx)(w,{children:(0,y.jsx)("div",{className:"theme-selector",children:(0,y.jsx)("ul",{children:["yellow","green","blue","brown","pink"].map(((e,t)=>(0,y.jsx)("li",{onClick:()=>(e=>{n(e)})(e),className:i===e?"active":"",style:{backgroundColor:r[t]},children:e},e)))})})})})};var Z=r(1134),C=r(4695),z=r(8007);const $=z.Ry().shape({email:z.Z_().email("Invalid email format").required("Email is required"),password:z.Z_().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").required("Password is required")});var L=r(6735),S=r(2685);const I=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 438px;
  height: 112px;
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
`,M=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 438px;
  height: 126px;
  left: 64px;
  top: 216px;

  input {
    width: 438px;
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
`,N=l.ZP.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 80%;
  transform: translateY(-50%);
  cursor: pointer;
`,T=l.ZP.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 168px;
  position: absolute;
  width: 438px;
  height: 60px;
  left: 64px;
  top: 382px;
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
`,E=l.ZP.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;
`,q=l.ZP.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--btn-icon-bg);
  color: var(--text-color);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  z-index: 20000;
`;const H=r.p+"static/media/eye-off.8866ee17a8445084c2644f76756a4fc7.svg";const U=r.p+"static/media/eye-on.0b3944f1d5b39e740c5aa8689c67dc15.svg",W=e=>{let{closeMenu:t}=e;const r=(0,a.I0)(),[i,n]=(0,o.useState)(!1),[l,d]=(0,o.useState)(""),{register:c,handleSubmit:p,formState:{errors:x}}=(0,Z.cI)({resolver:(0,C.X)($)});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.Z,{width:566,height:506,onClose:()=>t(!1),top:"50%",left:"50%",border:"none",background:"rgba(0, 0, 0, 0.5)",children:(0,y.jsxs)("form",{onSubmit:p((async e=>{try{const{userCredential:o}=await(async e=>{let{email:t,password:r}=e;const o=(0,L.v0)(),i=await(0,L.e5)(o,t,r),n=await i.user.getIdToken();return{userCredential:i,token:n}})(e),{email:i,displayName:n}=o.user;r((0,s.x4)({email:i,displayName:n})),d("User logged in successfully"),setTimeout((()=>{d(""),t()}),2e3)}catch(o){d("Error logging in: "+o.message),setTimeout((()=>{d("")}),5e3)}})),children:[(0,y.jsxs)(I,{children:[(0,y.jsx)("h2",{children:"Log In"}),(0,y.jsx)("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for a teacher."})]}),(0,y.jsxs)(M,{children:[(0,y.jsx)("input",{type:"email",placeholder:"Email",...c("email")}),x.email&&(0,y.jsx)(E,{children:x.email.message}),(0,y.jsx)("input",{type:i?"text":"password",placeholder:"Password",...c("password")}),x.password&&(0,y.jsx)(E,{children:x.password.message}),(0,y.jsx)(N,{src:i?U:H,alt:"toggle password visibility",onClick:()=>{n(!i)}})]}),(0,y.jsx)(T,{type:"submit",children:"Log In"})]})}),l&&(0,y.jsx)(q,{children:l})]})},F=z.Ry().shape({name:z.Z_().min(2,"Name must be at least 2 characters").max(32,"Maximum name length is 32 symbols").required("Name is required"),email:z.Z_().email("Invalid email format").required("Email is required"),password:z.Z_().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").required("Password is required")}),R=l.ZP.div`
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
`,_=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 472px;
  height: 198px;
  top: 238px;
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
`,B=l.ZP.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 86%;
  transform: translateY(-50%);
  cursor: pointer;
`,X=l.ZP.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 472px;
  height: 60px;
  left: 64px;
  top: 476px;
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
`,Y=l.ZP.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;
`,A=l.ZP.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--btn-icon-bg);
  color: var(--text-color);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  z-index: 20000;
`,V=e=>{let{closeMenu:t}=e;const[r,i]=(0,o.useState)(!1),[n,l]=(0,o.useState)(""),d=(0,a.I0)(),{register:c,handleSubmit:p,formState:{errors:x}}=(0,Z.cI)({resolver:(0,C.X)(F)});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.Z,{width:566,height:600,onClose:()=>t(!1),top:"50%",left:"50%",border:"none",background:"rgba(0, 0, 0, 0.5)",children:(0,y.jsxs)("form",{onSubmit:p((async e=>{try{const{userCredential:r,token:o}=await(async e=>{let{name:t,email:r,password:o}=e;const i=(0,L.v0)(),n=(0,S.N8)(),a=await(0,L.Xb)(i,r,o);await(0,L.ck)(a.user,{displayName:t}),await(0,S.t8)((0,S.iH)(n,"users/"+a.user.uid),{name:t,email:r});const s=await a.user.getIdToken();return{userCredential:a,token:s}})(e);localStorage.setItem("token",o);const i={uid:r.user.uid,email:r.user.email,displayName:r.user.displayName};d((0,s.x4)(i)),l("User registered successfully"),setTimeout((()=>{l(""),t()}),5e3)}catch(r){l("Error registering user: "+r.message),setTimeout((()=>{l("")}),5e3)}})),children:[(0,y.jsxs)(R,{children:[(0,y.jsx)("h2",{children:"Registration"}),(0,y.jsx)("p",{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"})]}),(0,y.jsxs)(_,{children:[(0,y.jsx)("input",{placeholder:"Name",...c("name")}),x.name&&(0,y.jsx)(Y,{children:x.name.message}),(0,y.jsx)("input",{placeholder:"Email",...c("email")}),x.email&&(0,y.jsx)(Y,{children:x.email.message}),(0,y.jsx)("input",{placeholder:"Password",type:r?"text":"password",...c("password")}),x.password&&(0,y.jsx)(Y,{children:x.password.message}),(0,y.jsx)(B,{src:r?U:H,alt:"toggle password visibility",onClick:()=>{i(!r)}})]}),(0,y.jsx)(X,{type:"submit",children:"Sign Up"})]})}),n&&(0,y.jsx)(A,{children:n})]})},D=()=>{const[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),[k,Z]=(0,o.useState)(null),C=(0,o.useRef)(null),z=(0,a.I0)(),$=(0,i.s0)(),S=(0,i.TH)();(0,o.useEffect)((()=>{C.current&&(C.current.style.stroke="var(--btn-icon-bg)");const e=(0,L.v0)();(0,L.Aj)(e,(e=>{Z(e||null)}))}),[]);return(0,y.jsxs)(d,{children:[(0,y.jsxs)(c,{children:[(0,y.jsx)(p,{src:v,alt:"LearnLingo Logo"}),(0,y.jsx)(x,{children:"LearnLingo"})]}),(0,y.jsxs)(g,{children:[(0,y.jsx)(n.rU,{to:"/",children:(0,y.jsx)(h,{active:"/"===S.pathname,children:"Home"})}),(0,y.jsx)(n.rU,{to:"/teachers",children:(0,y.jsx)(h,{active:"/teachers"===S.pathname,children:"Teachers"})}),k&&(0,y.jsx)(n.rU,{to:"/favorites",children:(0,y.jsx)(h,{active:"/favorites"===S.pathname,children:"Favorites"})}),(0,y.jsxs)(h,{onClick:()=>t(!0),children:[e&&(0,y.jsx)(P,{closeMenu:()=>t(!1)}),"Theme"]})]}),(0,y.jsxs)(u,{children:[(0,y.jsxs)(f,{ref:C,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,y.jsx)("path",{d:"M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,y.jsx)("path",{d:"M8.33333 5.83325L12.5 9.99992M12.5 9.99992L8.33333 14.1666M12.5 9.99992L2.5 9.99992",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),k?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{onClick:async()=>{const e=(0,L.v0)();await(0,L.w7)(e),z((0,s.kS)()),localStorage.removeItem("token"),Z(null),$("/")},children:"Log out"}),(0,y.jsx)(h,{children:k.displayName||k.email})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m,{onClick:()=>l(!0),children:[r&&(0,y.jsx)(W,{closeMenu:()=>l(!1)}),"Log in"]}),(0,y.jsxs)(b,{onClick:()=>j(!0),children:[w&&(0,y.jsx)(V,{closeMenu:()=>j(!1)}),"Registration"]})]})]})]})}}}]);
//# sourceMappingURL=931.ad5346ee.chunk.js.map