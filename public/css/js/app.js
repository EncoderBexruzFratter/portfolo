let hamburger = document.querySelector('#hamburger')
let x = document.querySelector('#x')
let hidden = document.querySelector("#hidden")
hamburger.addEventListener('click' , function(){
    hidden.classList.add("trans-none")
    x.addEventListener('click' , function(){
        hidden.classList.remove("trans-none")
    })
})