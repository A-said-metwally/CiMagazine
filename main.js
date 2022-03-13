let NavBar = document.querySelector('.nav-bar')
let links = document.querySelectorAll(".links li")
let ShowMenu = document.querySelector("#show-hide");
let SubMenu = document.querySelector(".sub-menu")
let toggelMenu = document.querySelector("#toggel-menu")
let navLinks = document.querySelector(".links")
let up = document.querySelector('.up')

// let NavFontColor = document.querySelector(':root')

let dailyRepPic = document.querySelector(".d-report .left")
window.onscroll = function(){
    var height = window.scrollY
    if(height >= 400){
        up.style.display = "block"
        // NavBar.classList.add('scroling')
    }else{
        up.style.display = "none"

        // NavBar.classList.remove('scroling')
    }
    // console.log(height)
}

up.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

links.forEach((link)=>{
    link.addEventListener("click",function(e){
        // e.preventDefault()
        links.forEach((l)=>{
            l.classList.remove('active')
        })
        this.classList.add('active')

    })
})

SubMenu.classList.add("hide")
ShowMenu.addEventListener("click",function(e){
    e.preventDefault()
    SubMenu.classList.toggle("hide")
})

toggelMenu.addEventListener("click",function(){
    if(navLinks.style.display === "block"){
        navLinks.style.display = "none"
    }else{
        navLinks.style.display = "block"

    }
})