const cursor = document.querySelector(".cursor-glow")

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX+"px"
cursor.style.top = e.clientY+"px"

})

/* parallax iPhone style */

document.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth/2 - e.clientX)/40
let y = (window.innerHeight/2 - e.clientY)/40

document.querySelector(".hero").style.transform =
`translate(${x}px,${y}px)`

}
