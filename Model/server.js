
const Open = document.querySelector(".open-btn")
const close = document.querySelector(".close-btn")
const content = document.querySelector(".overlay-box")

Open.addEventListener("click",function(){
    content.classList.add(`open-model`)
})
close.addEventListener("click",function(){
    content.classList.remove(`open-model`)
})

