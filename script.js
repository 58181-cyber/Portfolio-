/* ULTRA SMOOTH SCROLL */

document.documentElement.style.scrollBehavior = "smooth";


/* CURSOR GLOW FOLLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});


/* 3D PARALLAX */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width/2;
const centerY = rect.height/2;

const rotateX = -(y-centerY)/12;
const rotateY = (x-centerX)/12;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0)";
});

});


/* HOVER LIGHTING */

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,0.25),
rgba(255,255,255,0.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,0.08)";

});

});


/* DYNAMIC GRADIENT */

let hue = 0;

setInterval(()=>{

hue+=0.5;

document.body.style.background =
`radial-gradient(circle at 20% 20%,hsl(${hue},70%,60%),transparent 50%),
radial-gradient(circle at 80% 80%,hsl(${hue+60},70%,60%),transparent 50%),
#050b25`;

},120);


/* GLASS DEPTH */

window.addEventListener("scroll",()=>{

const scroll = window.scrollY;

cards.forEach((card,i)=>{

card.style.transform += ` translateZ(${scroll*0.02}px)`;

});

});
