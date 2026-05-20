/* ────────────────────────────────────────
   TOKENS
──────────────────────────────────────── */
:root{
  --bg:#07070e;
  --bg2:#0d0d18;
  --bg3:#111120;
  --card:#111120;
  --card-h:#181828;
  --a:#c8f135;      /* accent yellow-green */
  --a2:#a8d420;
  --txt:#ededf5;
  --m:#6a6a85;
  --border:rgba(255,255,255,0.06);
  --ba:rgba(200,241,53,0.18);
  --glow:0 0 50px rgba(200,241,53,0.09);
  --r:16px;--rs:10px;
  --ease:cubic-bezier(.4,0,.2,1);
  --T:.32s;
  --fd:'Plus Jakarta Sans',sans-serif;
  --fm:'Space Mono',monospace;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{
  background:var(--bg);color:var(--txt);
  font-family:var(--fd);line-height:1.72;
  overflow-x:hidden;cursor:none;
  -webkit-font-smoothing:antialiased;
}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
button{font-family:var(--fd);cursor:pointer}
.dot{color:var(--a)}

/* ────────────────────────────────────────
   LOADER
──────────────────────────────────────── */
.loader{
  position:fixed;inset:0;z-index:9999;background:var(--bg);
  display:flex;align-items:center;justify-content:center;
  transition:opacity .55s ease,visibility .55s ease;
}
.loader.hidden{opacity:0;visibility:hidden}
.loader-inner{position:relative;width:60px;height:60px;display:flex;align-items:center;justify-content:center}
.loader-txt{
  position:absolute;font-family:var(--fd);font-size:1rem;
  font-weight:800;color:var(--a);letter-spacing:-1px;
}
.loader-circle{
  stroke-dasharray:176;stroke-dashoffset:176;
  animation:lCircle 1s var(--ease) forwards;
  transform-origin:30px 30px;
}
@keyframes lCircle{to{stroke-dashoffset:0}}

/* ────────────────────────────────────────
   CURSOR
──────────────────────────────────────── */
.cur{
  width:36px;height:36px;border:1.5px solid var(--a);
  border-radius:50%;position:fixed;top:0;left:0;
  pointer-events:none;z-index:9998;
  transform:translate(-50%,-50%);
  transition:width .25s var(--ease),height .25s var(--ease),
             background .25s,border-color .25s,transform .1s ease;
}
.cur2{
  width:7px;height:7px;background:var(--a);
  border-radius:50%;position:fixed;top:0;left:0;
  pointer-events:none;z-index:9999;
  transform:translate(-50%,-50%);
  transition:transform .06s linear;
}
body.on-link .cur{width:54px;height:54px;background:rgba(200,241,53,.08)}

/* ────────────────────────────────────────
   NAV
──────────────────────────────────────── */
.nav{
  position:fixed;inset:0 0 auto 0;z-index:500;
  display:flex;align-items:center;gap:1rem;
  padding:1.1rem 3rem;
  background:rgba(7,7,14,.82);
  backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);
  border-bottom:1px solid var(--border);
  transition:padding var(--T) var(--ease);
}
.nav.s{padding:.72rem 3rem}
.logo{
  font-family:var(--fd);font-size:1.55rem;font-weight:800;
  letter-spacing:-1.5px;margin-right:auto;color:var(--txt);
}
.logo span{color:var(--a)}
.nav-ul{display:flex;list-style:none;gap:.15rem}
.nav-a{
  display:block;padding:.48rem 1rem;border-radius:50px;
  font-size:.875rem;font-weight:500;color:var(--m);
  transition:color var(--T),background var(--T);
}
.nav-a:hover,.nav-a.active{color:var(--txt);background:rgba(255,255,255,.05)}
.nav-admin{
  padding:.48rem 1.15rem;border:1px solid var(--ba);
  border-radius:50px;font-size:.8rem;font-weight:600;color:var(--a);
  transition:background var(--T),color var(--T);white-space:nowrap;
}
.nav-admin:hover{background:var(--a);color:var(--bg)}
.hamburger{
  display:none;flex-direction:column;gap:5px;
  background:none;border:none;padding:4px;
}
.hamburger span{
  display:block;width:22px;height:2px;
  background:var(--txt);border-radius:2px;
  transition:var(--T) var(--ease);
}

/* Mobile drawer */
.drawer{
  position:fixed;top:0;right:-100%;bottom:0;z-index:600;
  width:min(300px,85vw);background:var(--bg2);
  border-left:1px solid var(--border);
  display:flex;flex-direction:column;
  padding:5rem 2rem 2rem;gap:1.5rem;
  transition:right .35s var(--ease);
}
.drawer.open{right:0}
.drawer-close{
  position:absolute;top:1.2rem;right:1.2rem;
  background:none;border:none;font-size:1.3rem;color:var(--m);
}
.drawer-overlay{
  position:fixed;inset:0;z-index:590;
  background:rgba(0,0,0,.6);backdrop-filter:blur(4px);
  opacity:0;pointer-events:none;transition:opacity .3s;
}
.drawer-overlay.show{opacity:1;pointer-events:all}
.d-link{font-size:1.35rem;font-weight:700;color:var(--txt);transition:color var(--T)}
.d-link:hover{color:var(--a)}

/* ────────────────────────────────────────
   UTILITIES
──────────────────────────────────────── */
.wrap{max-width:1160px;margin:0 auto;padding:0 2rem}
.section{padding:6.5rem 0}
.alt{background:var(--bg2)}

/* Reveal */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .65s var(--ease),transform .65s var(--ease)}
.reveal.vis{opacity:1;transform:translateY(0)}

/* Fade-up hero items */
.fade-up{opacity:0;transform:translateY(22px)}
.fade-up.vis{opacity:1;transform:translateY(0);transition:opacity .6s var(--ease),transform .6s var(--ease)}
.d1{transition-delay:.05s}.d2{transition-delay:.15s}.d3{transition-delay:.25s}
.d4{transition-delay:.35s}.d5{transition-delay:.45s}.d6{transition-delay:.55s}

/* Section headers */
.sec-top{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}
.sec-num{font-family:var(--fm);font-size:.7rem;color:var(--a);letter-spacing:.12em}
.sec-tag{font-size:.7rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--m)}
.sec-h2{
  font-size:clamp(1.9rem,3.8vw,2.8rem);font-weight:800;
  line-height:1.14;letter-spacing:-.5px;margin-bottom:2.75rem;
}
.sec-h2 mark{background:none;color:var(--a);-webkit-text-fill-color:var(--a)}

/* Buttons */
.btn-solid{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.88rem 2.1rem;background:var(--a);color:var(--bg);
  font-size:.92rem;font-weight:700;border-radius:50px;border:none;
  position:relative;overflow:hidden;cursor:pointer;
  transition:transform var(--T) var(--ease),box-shadow var(--T) var(--ease);
}
.btn-solid::before{
  content:'';position:absolute;inset:0;
  background:rgba(255,255,255,.28);
  transform:translateX(-110%) skewX(-18deg);
  transition:transform .5s var(--ease);
}
.btn-solid:hover::before{transform:translateX(110%) skewX(-18deg)}
.btn-solid:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(200,241,53,.28)}
.btn-solid:active{transform:translateY(-1px)}
.btn-outline{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.88rem 2.1rem;border:1.5px solid rgba(255,255,255,.14);
  border-radius:50px;font-size:.92rem;font-weight:600;color:var(--txt);
  transition:border-color var(--T),color var(--T),transform var(--T);
}
.btn-outline:hover{border-color:var(--a);color:var(--a);transform:translateY(-3px)}

/* ────────────────────────────────────────
   HERO
──────────────────────────────────────── */
.hero{
  min-height:100vh;display:flex;align-items:center;
  padding:8rem 0 5rem;position:relative;overflow:hidden;
}
.hero-canvas{position:absolute;inset:0;z-index:0;pointer-events:none}
.hero-radial{
  position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(ellipse 70% 60% at 70% 55%,rgba(200,241,53,.045) 0%,transparent 65%),
    radial-gradient(ellipse 55% 55% at 15% 80%,rgba(100,180,255,.03) 0%,transparent 65%);
}
.hero-wrap{
  display:grid;grid-template-columns:1fr 480px;
  align-items:center;gap:3.5rem;
  position:relative;z-index:1;
}
.hero-left{display:flex;flex-direction:column;gap:1.6rem}
.badge{
  display:inline-flex;align-items:center;gap:.65rem;
  padding:.42rem 1.1rem;border:1px solid var(--ba);
  border-radius:50px;font-size:.8rem;font-weight:500;color:var(--a);
  width:fit-content;
}
.badge-dot{
  width:8px;height:8px;background:var(--a);border-radius:50%;flex-shrink:0;
  animation:bdot 2s ease infinite;
}
@keyframes bdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}
.h1{
  font-size:clamp(3rem,6.5vw,5.5rem);font-weight:900;
  line-height:.96;letter-spacing:-2.5px;
  display:flex;flex-direction:column;gap:.04em;
}
.h1-white{color:var(--txt)}
.h1-accent{color:var(--a)}
.hero-role{
  font-family:var(--fm);font-size:.85rem;color:var(--m);
  letter-spacing:.04em;
}
.hero-bio{font-size:.97rem;color:var(--m);line-height:1.78;max-width:520px}
.hero-bio strong{color:var(--txt);font-weight:600}
.hero-btns{display:flex;gap:.9rem;flex-wrap:wrap}
.hero-socials{display:flex;gap:.55rem;flex-wrap:wrap}
.soc-pill{
  padding:.38rem .9rem;border:1px solid var(--border);
  border-radius:50px;font-size:.78rem;color:var(--m);
  transition:border-color var(--T),color var(--T),transform var(--T);
}
.soc-pill:hover{border-color:var(--a);color:var(--a);transform:translateY(-2px)}

/* Avatar */
.hero-right{display:flex;align-items:center;justify-content:center}
.av-wrap{position:relative;display:flex;align-items:center;justify-content:center}
.av-svg{width:100%;max-width:440px;filter:drop-shadow(0 0 44px rgba(200,241,53,.07))}

/* SVG animations */
.spin-cw{animation:sc 26s linear infinite;transform-origin:220px 220px}
.spin-ccw{animation:sc 18s linear infinite reverse;transform-origin:220px 220px}
@keyframes sc{to{transform:rotate(360deg)}}

.node-pulse{animation:np 2.8s ease-out infinite}
.n1{animation-delay:0s}.n2{animation-delay:.7s}.n3{animation-delay:1.4s}.n4{animation-delay:2.1s}
@keyframes np{0%{r:5.5;opacity:.7}80%{r:12;opacity:0}100%{r:12;opacity:0}}

.blink-dots circle{animation:bd 1.4s ease infinite}
@keyframes bd{0%,100%{opacity:.4}50%{opacity:1}}

/* Floating chips */
.chip{
  position:absolute;background:var(--card);border:1px solid var(--border);
  border-radius:50px;padding:.28rem .75rem;
  font-size:.7rem;font-weight:600;white-space:nowrap;
  box-shadow:0 4px 20px rgba(0,0,0,.4);
  animation:flt 4s ease-in-out infinite;
}
.chip-1{top:6%;left:-2%;animation-delay:0s}
.chip-2{top:16%;right:-4%;animation-delay:.9s}
.chip-3{bottom:22%;right:-5%;animation-delay:1.8s}
.chip-4{bottom:10%;left:-4%;animation-delay:2.7s}
.chip-5{top:44%;left:-8%;animation-delay:1.4s}
@keyframes flt{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}

/* Scroll hint */
.scroll-hint{
  position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:.5rem;z-index:1;
}
.sh-line{width:1px;height:50px;background:linear-gradient(to bottom,var(--a),transparent);animation:shd 2s ease infinite}
@keyframes shd{0%,100%{opacity:1;scaleY:1}50%{opacity:.4;transform:scaleY(.5)}}
.scroll-hint span{font-family:var(--fm);font-size:.62rem;letter-spacing:.14em;color:var(--m)}

/* ────────────────────────────────────────
   ABOUT
──────────────────────────────────────── */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:start}
.about-left h2{margin-bottom:1.2rem}
.about-left p{color:var(--m);font-size:.93rem;margin-bottom:.9rem}
.about-quote{
  margin:1.5rem 0;padding:1rem 1.25rem;
  border-left:3px solid var(--a);background:rgba(200,241,53,.04);
  border-radius:0 var(--rs) var(--rs) 0;
  font-style:italic;font-size:.88rem;color:var(--m);
}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem}
.stat{text-align:center;padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);transition:border-color var(--T)}
.stat:hover{border-color:var(--ba)}
.stat-n{display:block;font-family:var(--fm);font-size:1.8rem;font-weight:700;color:var(--a)}
.stat-l{display:block;font-size:.68rem;color:var(--m);margin-top:.25rem;line-height:1.3}
.about-right{display:flex;flex-direction:column;gap:1.25rem}
.info-box{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--r);padding:1.5rem;
  transition:border-color var(--T),box-shadow var(--T);
}
.info-box:hover{border-color:var(--ba);box-shadow:var(--glow)}
.ib-head{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--a);margin-bottom:1rem}
.ib-item{margin-bottom:.9rem;padding-bottom:.9rem;border-bottom:1px solid var(--border)}
.ib-title{font-size:.88rem;font-weight:600;margin-bottom:.2rem}
.ib-sub{font-size:.8rem;color:var(--m)}
.ib-yr{font-size:.7rem;color:var(--a);font-weight:600;margin-top:.2rem}
.chip-wrap{display:flex;flex-wrap:wrap;gap:.45rem}
.tag-chip{
  padding:.28rem .75rem;background:rgba(200,241,53,.07);
  border:1px solid var(--ba);border-radius:50px;
  font-size:.72rem;color:var(--a);font-weight:500;
}

/* ────────────────────────────────────────
   SKILLS
──────────────────────────────────────── */
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(205px,1fr));gap:1.1rem}
.sk-card{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--r);padding:1.5rem;
  transition:border-color var(--T),transform var(--T),box-shadow var(--T);
  position:relative;overflow:hidden;
}
.sk-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2.5px;
  background:linear-gradient(90deg,var(--a),var(--a2));
  transform:scaleX(0);transform-origin:left;transition:transform var(--T);
}
.sk-card:hover{border-color:var(--ba);transform:translateY(-5px);box-shadow:var(--glow)}
.sk-card:hover::before{transform:scaleX(1)}
.sk-icon{font-size:2rem;margin-bottom:.9rem}
.sk-name{font-size:.95rem;font-weight:700;margin-bottom:.25rem}
.sk-level{font-size:.75rem;color:var(--m);margin-bottom:.75rem}
.sk-bar{height:3px;background:rgba(255,255,255,.05);border-radius:2px;overflow:hidden}
.sk-fill{height:100%;background:linear-gradient(90deg,var(--a),var(--a2));border-radius:2px;width:0;transition:width 1.3s var(--ease)}

/* ────────────────────────────────────────
   PROJECTS
──────────────────────────────────────── */
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:1.35rem}
.pj-card{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--r);overflow:hidden;
  display:flex;flex-direction:column;
  transition:border-color var(--T),transform var(--T),box-shadow var(--T);
}
.pj-card:hover{border-color:var(--ba);transform:translateY(-7px);box-shadow:0 22px 55px rgba(0,0,0,.35),var(--glow)}
.pj-thumb{
  height:168px;display:flex;align-items:center;justify-content:center;
  font-size:4rem;position:relative;overflow:hidden;
}
.pj-thumb::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom,transparent 45%,var(--card));
}
.pj-body{padding:1.4rem;flex:1;display:flex;flex-direction:column;gap:.5rem}
.pj-tag{
  display:inline-block;padding:.2rem .7rem;
  background:rgba(200,241,53,.07);border:1px solid var(--ba);
  border-radius:50px;font-size:.67rem;font-weight:600;color:var(--a);width:fit-content;
}
.pj-title{font-size:1.05rem;font-weight:700}
.pj-desc{font-size:.82rem;color:var(--m);flex:1;line-height:1.65}
.pj-links{display:flex;gap:.6rem;margin-top:.6rem;flex-wrap:wrap}
.pj-btn{
  display:inline-flex;align-items:center;gap:.3rem;
  padding:.35rem .85rem;border:1px solid var(--border);
  border-radius:50px;font-size:.73rem;font-weight:600;
  transition:border-color var(--T),color var(--T),transform var(--T);
}
.pj-btn:hover{border-color:var(--a);color:var(--a);transform:translateY(-2px)}
.pj-btn.primary-btn{background:var(--a);color:var(--bg);border-color:var(--a)}
.pj-btn.primary-btn:hover{background:var(--a2);border-color:var(--a2)}

/* ────────────────────────────────────────
   CERTIFICATIONS
──────────────────────────────────────── */
.certs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(255px,1fr));gap:1.1rem}
.ct-card{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--r);padding:1.4rem;
  display:flex;align-items:flex-start;gap:1rem;
  transition:border-color var(--T),transform var(--T),box-shadow var(--T);
}
.ct-card:hover{border-color:var(--ba);transform:translateY(-4px);box-shadow:var(--glow)}
.ct-icon{font-size:1.8rem;flex-shrink:0}
.ct-name{font-size:.88rem;font-weight:700;margin-bottom:.25rem;line-height:1.3}
.ct-body{font-size:.77rem;color:var(--m);margin-bottom:.4rem;line-height:1.5}
.ct-yr{font-size:.7rem;color:var(--a);font-weight:700}

/* ────────────────────────────────────────
   CONTACT
──────────────────────────────────────── */
.contact-sub{color:var(--m);font-size:.95rem;margin-bottom:2.5rem;margin-top:-1.5rem}
.contact-top{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));
  gap:1rem;margin-bottom:2.5rem;
}
.cinfo-card{
  background:var(--card);border:1px solid var(--border);border-radius:var(--r);
  padding:1.35rem;display:flex;align-items:center;gap:1rem;
  transition:border-color var(--T),transform var(--T),box-shadow var(--T);
}
.cinfo-card:hover{border-color:var(--ba);transform:translateY(-4px);box-shadow:var(--glow)}
.cinfo-icon{font-size:1.35rem;flex-shrink:0;width:36px;text-align:center}
.cinfo-lbl{font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--m);margin-bottom:.18rem}
.cinfo-val{font-size:.8rem;font-weight:500;word-break:break-all}
.cform-box{
  background:var(--card);border:1px solid var(--border);
  border-radius:var(--r);padding:2.25rem;
}
.cform-box h3{font-size:1.2rem;font-weight:700;margin-bottom:1.75rem}
.f2col{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.fg{display:flex;flex-direction:column;gap:.45rem;margin-bottom:1.1rem}
.fg label{font-size:.72rem;font-weight:600;color:var(--m);text-transform:uppercase;letter-spacing:.06em}
.fg input,.fg textarea{
  background:var(--bg2);border:1.5px solid var(--border);
  border-radius:var(--rs);padding:.82rem 1rem;
  color:var(--txt);font-family:var(--fd);font-size:.9rem;
  outline:none;resize:vertical;
  transition:border-color var(--T),box-shadow var(--T);
}
.fg input:focus,.fg textarea:focus{border-color:var(--a);box-shadow:0 0 0 3px rgba(200,241,53,.07)}
.fmsg{margin-top:.85rem;font-size:.88rem;font-weight:500;color:var(--a)}
.fmsg.err{color:#ff6b6b}

/* ────────────────────────────────────────
   FOOTER
──────────────────────────────────────── */
.footer{padding:2rem 0;border-top:1px solid var(--border)}
.footer-in{display:flex;align-items:center;gap:2rem;flex-wrap:wrap}
.f-brand{font-family:var(--fd);font-size:1.25rem;font-weight:800}
.f-brand span{color:var(--a)}
.f-copy{color:var(--m);font-size:.78rem;flex:1}
.f-top{
  padding:.38rem .9rem;border:1px solid var(--border);
  border-radius:50px;font-size:.76rem;
  transition:border-color var(--T),color var(--T),transform var(--T);
}
.f-top:hover{border-color:var(--a);color:var(--a);transform:translateY(-2px)}

/* ────────────────────────────────────────
   SCROLLBAR / SELECTION
──────────────────────────────────────── */
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:rgba(200,241,53,.2);border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:var(--a)}
::selection{background:var(--a);color:var(--bg)}

/* ────────────────────────────────────────
   RESPONSIVE
──────────────────────────────────────── */
@media(max-width:1000px){
  .hero-wrap{grid-template-columns:1fr;gap:3rem;text-align:left}
  .hero-right{order:-1}
  .av-svg{max-width:300px}
  .about-grid{grid-template-columns:1fr;gap:2rem}
  .stats-row{grid-template-columns:repeat(2,1fr)}
  .nav{padding:1rem 1.5rem}
  .nav.s{padding:.68rem 1.5rem}
}
@media(max-width:640px){
  .nav-ul,.nav-admin{display:none}
  .hamburger{display:flex}
  .hero{padding:7rem 0 4rem}
  .section{padding:4.5rem 0}
  .h1{font-size:clamp(2.6rem,11vw,3.8rem);letter-spacing:-1.5px}
  .f2col{grid-template-columns:1fr}
  .chip-1,.chip-5{left:-1%}
  .chip-2,.chip-3{right:-1%}
  .av-svg{max-width:260px}
}
