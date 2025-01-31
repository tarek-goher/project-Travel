let search=document.querySelector('.search-form')
let icon =document.querySelector('.search-icon')
let log =document.querySelector('.login-form')
let user =document.querySelector('.user')
let closee =document.querySelector('#close')
let icons=document.querySelector('#mnue-bar')
let nav=document.querySelector('.navbar')
let videobtn=document.querySelectorAll('.video-btn')




icon . onclick=function(){

    icon.classList.toggle("fa-times");
    search.classList.toggle("active")
}
 

user.onclick=function(){
    log.style.top='0'
}

closee.onclick=function(){
    log.style.top='-120%'
}
icons.onclick=function(){
    icons.classList.toggle("fa-times")
     nav.classList.toggle("active")
}
videobtn.forEach(slide =>{
    slide.addEventListener("click" , function(){
document.querySelector(".controls .blue").classList.remove("blue")
slide.classList.add("blue")
let src=slide.getAttribute("data-src")
document.querySelector("#video-slider").src =src
    })
})

console.log(videobtn)




