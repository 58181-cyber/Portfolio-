const slides = document.querySelector(".slides")

let scrollAmount = 0

setInterval(()=>{

scrollAmount += 1

slides.scrollLeft = scrollAmount

if(scrollAmount > slides.scrollWidth){

scrollAmount = 0

}

},20)
