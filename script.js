const slides = document.querySelector(".slides")

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

next.onclick = () => {

slides.scrollBy({

left:300,
behavior:"smooth"

})

}

prev.onclick = () => {

slides.scrollBy({

left:-300,
behavior:"smooth"

})

}
