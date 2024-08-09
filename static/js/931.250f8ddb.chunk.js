"use strict";(self.webpackChunklearnlingo=self.webpackChunklearnlingo||[]).push([[931],{1153:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(2791),o=i(4164),a=i(2683);const n=a.ZP.div`
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
`,s=a.ZP.div`
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

  @media (max-width: 600px) {
    width: 80%;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 12px;
  }
`,d=a.ZP.button`
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
`;var l=i(184);const p=e=>{let{children:t,width:i,height:a,onClose:p,top:x,left:c,border:h,background:g}=e;const m=document.getElementById("modal-root");(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.code&&p()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[p]);return(0,o.createPortal)((0,l.jsx)(n,{onClick:e=>{e.target===e.currentTarget&&(p(),e.stopPropagation())},$background:g,children:(0,l.jsxs)(s,{$Width:i,$Height:a,onClick:e=>e.stopPropagation(),$top:x,$left:c,$border:h,children:[(0,l.jsx)(d,{type:"button","aria-label":"Close modal",onClick:()=>{p()},children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024",children:(0,l.jsx)("path",{fill:"none",stroke:"var(--text-color)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"85.333",d:"M768 256 256 768M256 256l512 512"})})}),t]})}),m)}},9931:(e,t,i)=>{i.d(t,{Z:()=>D});var r=i(2791),o=i(7689),a=i(1087),n=i(4420),s=i(9176),d=i(2683);const l=d.ZP.header`
  margin: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  height: 48px;

  @media (max-width: 840px) {
    width: auto;
    height: auto;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`,p=d.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 840px) {
    width: auto;
    height: auto;
  }
`,x=d.ZP.img`
  width: 28px;
  height: 28px;
`,c=d.ZP.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color);
  margin: 0;

  @media (max-width: 840px) {
    font-size: 1rem;
    width: auto;
    height: auto;
    margin-right: 8px;
  }
  @media (max-width: 762px) {
    font-size: 0.8rem;
    margin-right: 4px;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
  }
`,h=d.ZP.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 840px) {
    gap: 8px;
    width: auto;
    height: auto;
  }
  @media (max-width: 762px) {
    font-size: 0.8rem;
    gap: 4px;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
  }
`,g=d.ZP.a`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color);
  background-color: ${e=>e.active?"var(--btn-icon-bg)":"transparent"};
  padding: 8px 16px;
  border-radius: 8px;

  @media (max-width: 840px) {
    gap: 8px;
    width: auto;
    height: auto;
  }

  @media (max-width: 762px) {
    font-size: 0.8rem;
    gap: 4px;
    padding: 4px 8px;
  }

  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
    gap: 2px;
  }

  &:hover {
    background-color: ${e=>e.active?"var(--btn-hover-bg)":"transparent"};
    cursor: pointer;
  }
`,m=d.ZP.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 762px) {
    font-size: 0.8rem;
    gap: 4px;
    width: auto;
    height: auto;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
    gap: 2px;
  }
`,u=d.ZP.a`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  &:hover {
    background-color: var(--additional-bg-color);
    cursor: pointer;
  }
  @media (max-width: 762px) {
    font-size: 0.8rem;
    width: auto;
    height: auto;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
  }
`,f=d.ZP.button`
  width: auto;
  height: 48px;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-bg-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;

  @media (max-width: 762px) {
    font-size: 0.8rem;
    width: auto;
    height: auto;
    padding: 8px 16px;
  }

  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
    padding: 4px 8px;
  }

  &:hover {
    background-color: #505458;
  }
`,w=d.ZP.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--btn-icon-bg);
`;const b=i.p+"static/media/ukraine.d34743a6d4214a7edfd037c74ed2da93.svg",v=d.ZP.div`
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
`;var j=i(1153),y=i(6184),k=i(184);const z=e=>{let{closeMenu:t}=e;const i=["#fbe9ba","#cbded3","#bfd6ea","#f2c0bd","#f4c8ba"],{currentTheme:o,setCurrentTheme:a}=(0,r.useContext)(y.N);return(0,k.jsx)(j.Z,{width:200,height:240,onClose:()=>t(!1),top:"36%",left:"52%",border:"none",background:" rgba(0, 0, 0, 0.05)",children:(0,k.jsx)(v,{children:(0,k.jsx)("div",{className:"theme-selector",children:(0,k.jsx)("ul",{children:["yellow","green","blue","brown","pink"].map(((e,t)=>(0,k.jsx)("li",{onClick:()=>(e=>{a(e)})(e),className:o===e?"active":"",style:{backgroundColor:i[t]},children:e},e)))})})})})};var P=i(1134),Z=i(4695),C=i(8007);const $=C.Ry().shape({email:C.Z_().email("Invalid email format").required("Email is required"),password:C.Z_().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").required("Password is required")});var L=i(6735),S=i(2685);const I=d.ZP.div`
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
  @media (max-width: 600px) {
    justify-content: center;
    gap: 10px;
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`,M=d.ZP.div`
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

    @media (max-width: 600px) {
      width: 100%;
      left: 32px;
    }

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

  @media (max-width: 600px) {
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 180px;
    input {
      width: 100%;
    }
  }
`,N=d.ZP.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 80%;
  transform: translateY(-50%);
  cursor: pointer;
`,T=d.ZP.button`
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

  @media (max-width: 600px) {
    width: 80%;
    padding: 16px;
    left: 32px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    padding: 16px;
  }
`,E=d.ZP.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;
`,q=d.ZP.div`
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

  @media (max-width: 600px) {
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 16px 24px;
  }
`;const H=i.p+"static/media/eye-off.8866ee17a8445084c2644f76756a4fc7.svg";const U=i.p+"static/media/eye-on.0b3944f1d5b39e740c5aa8689c67dc15.svg",W=e=>{let{closeMenu:t}=e;const i=(0,n.I0)(),[o,a]=(0,r.useState)(!1),[d,l]=(0,r.useState)(""),{register:p,handleSubmit:x,formState:{errors:c}}=(0,P.cI)({resolver:(0,Z.X)($)});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{width:566,height:506,onClose:()=>t(!1),top:"50%",left:"50%",border:"none",background:"rgba(0, 0, 0, 0.5)",children:(0,k.jsxs)("form",{onSubmit:x((async e=>{try{const{userCredential:r}=await(async e=>{let{email:t,password:i}=e;const r=(0,L.v0)(),o=await(0,L.e5)(r,t,i),a=await o.user.getIdToken();return{userCredential:o,token:a}})(e),{email:o,displayName:a}=r.user;i((0,s.x4)({email:o,displayName:a})),l("User logged in successfully"),setTimeout((()=>{l(""),t()}),2e3)}catch(r){l("Error logging in: "+r.message),setTimeout((()=>{l("")}),5e3)}})),children:[(0,k.jsxs)(I,{children:[(0,k.jsx)("h2",{children:"Log In"}),(0,k.jsx)("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for a teacher."})]}),(0,k.jsxs)(M,{children:[(0,k.jsx)("input",{type:"email",placeholder:"Email",...p("email")}),c.email&&(0,k.jsx)(E,{children:c.email.message}),(0,k.jsx)("input",{type:o?"text":"password",placeholder:"Password",...p("password")}),c.password&&(0,k.jsx)(E,{children:c.password.message}),(0,k.jsx)(N,{src:o?U:H,alt:"toggle password visibility",onClick:()=>{a(!o)}})]}),(0,k.jsx)(T,{type:"submit",children:"Log In"})]})}),d&&(0,k.jsx)(q,{children:d})]})},F=C.Ry().shape({name:C.Z_().min(2,"Name must be at least 2 characters").max(32,"Maximum name length is 32 symbols").required("Name is required"),email:C.Z_().email("Invalid email format").required("Email is required"),password:C.Z_().min(8,"Password must be at least 8 characters").max(64,"Maximum password length is 64 symbols").required("Password is required")}),R=d.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  @media (max-width: 600px) {
    justify-content: center;
    gap: 10px;
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`,_=d.ZP.div`
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
    @media (max-width: 600px) {
      width: 100%;
    }
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

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 200px;
    input {
      width: 100%;
    }
  }
`,B=d.ZP.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 86%;
  transform: translateY(-50%);
  cursor: pointer;
`,X=d.ZP.button`
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

  @media (max-width: 600px) {
    width: 80%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 400px;
  }
`,Y=d.ZP.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;
`,A=d.ZP.div`
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

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 16px 24px;
  }
`,V=e=>{let{closeMenu:t}=e;const[i,o]=(0,r.useState)(!1),[a,d]=(0,r.useState)(""),l=(0,n.I0)(),{register:p,handleSubmit:x,formState:{errors:c}}=(0,P.cI)({resolver:(0,Z.X)(F)});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{width:598,height:600,onClose:()=>t(!1),top:"50%",left:"50%",border:"none",background:"rgba(0, 0, 0, 0.5)",children:(0,k.jsxs)("form",{onSubmit:x((async e=>{try{const{userCredential:i,token:r}=await(async e=>{let{name:t,email:i,password:r}=e;const o=(0,L.v0)(),a=(0,S.N8)(),n=await(0,L.Xb)(o,i,r);await(0,L.ck)(n.user,{displayName:t}),await(0,S.t8)((0,S.iH)(a,"users/"+n.user.uid),{name:t,email:i});const s=await n.user.getIdToken();return{userCredential:n,token:s}})(e);localStorage.setItem("token",r);const o={uid:i.user.uid,email:i.user.email,displayName:i.user.displayName};l((0,s.x4)(o)),d("User registered successfully"),setTimeout((()=>{d(""),t()}),5e3)}catch(i){d("Error registering user: "+i.message),setTimeout((()=>{d("")}),5e3)}})),children:[(0,k.jsxs)(R,{children:[(0,k.jsx)("h2",{children:"Registration"}),(0,k.jsx)("p",{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"})]}),(0,k.jsxs)(_,{children:[(0,k.jsx)("input",{placeholder:"Name",...p("name")}),c.name&&(0,k.jsx)(Y,{children:c.name.message}),(0,k.jsx)("input",{placeholder:"Email",...p("email")}),c.email&&(0,k.jsx)(Y,{children:c.email.message}),(0,k.jsx)("input",{placeholder:"Password",type:i?"text":"password",...p("password")}),c.password&&(0,k.jsx)(Y,{children:c.password.message}),(0,k.jsx)(B,{src:i?U:H,alt:"toggle password visibility",onClick:()=>{o(!i)}})]}),(0,k.jsx)(X,{type:"submit",children:"Sign Up"})]})}),a&&(0,k.jsx)(A,{children:a})]})},D=()=>{const[e,t]=(0,r.useState)(!1),[i,d]=(0,r.useState)(!1),[v,j]=(0,r.useState)(!1),[y,P]=(0,r.useState)(null),Z=(0,r.useRef)(null),C=(0,n.I0)(),$=(0,o.s0)(),S=(0,o.TH)();(0,r.useEffect)((()=>{Z.current&&(Z.current.style.stroke="var(--btn-icon-bg)");const e=(0,L.v0)();(0,L.Aj)(e,(e=>{P(e||null)}))}),[]);return(0,k.jsxs)(l,{children:[(0,k.jsxs)(p,{children:[(0,k.jsx)(x,{src:b,alt:"LearnLingo Logo"}),(0,k.jsx)(c,{children:"LearnLingo"})]}),(0,k.jsxs)(h,{children:[(0,k.jsx)(a.rU,{to:"/",children:(0,k.jsx)(g,{active:"/"===S.pathname,children:"Home"})}),(0,k.jsx)(a.rU,{to:"/teachers",children:(0,k.jsx)(g,{active:"/teachers"===S.pathname,children:"Teachers"})}),y&&(0,k.jsx)(a.rU,{to:"/favorites",children:(0,k.jsx)(g,{active:"/favorites"===S.pathname,children:"Favorites"})}),(0,k.jsxs)(g,{onClick:()=>t(!0),children:[e&&(0,k.jsx)(z,{closeMenu:()=>t(!1)}),"Theme"]})]}),(0,k.jsxs)(m,{children:[(0,k.jsxs)(w,{ref:Z,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,k.jsx)("path",{d:"M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M8.33333 5.83325L12.5 9.99992M12.5 9.99992L8.33333 14.1666M12.5 9.99992L2.5 9.99992",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),y?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{onClick:async()=>{const e=(0,L.v0)();await(0,L.w7)(e),C((0,s.kS)()),localStorage.removeItem("token"),P(null),$("/")},children:"Log out"}),(0,k.jsx)(g,{children:y.displayName||y.email})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(u,{onClick:()=>d(!0),children:[i&&(0,k.jsx)(W,{closeMenu:()=>d(!1)}),"Log in"]}),(0,k.jsxs)(f,{onClick:()=>j(!0),children:[v&&(0,k.jsx)(V,{closeMenu:()=>j(!1)}),"Registration"]})]})]})]})}}}]);
//# sourceMappingURL=931.250f8ddb.chunk.js.map