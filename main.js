document.querySelector(".displayMode").addEventListener("click",() =>{
// document.body.classList.toggle("dark-theme")
document.querySelector(".header").classList.toggle("darkheader")
document.querySelector(".options").classList.toggle("optionsdark")
document.querySelector(".displayMode").classList.toggle("displayDarkMode")
document.querySelectorAll(".option").forEach(n=>{n.classList.toggle("optionlistdark") })
document.querySelectorAll(".extension").forEach(n=>{n.classList.toggle("extensiondark")  })
document.querySelectorAll(".title").forEach(n=>{n.classList.toggle("titledark")  })
document.querySelectorAll(".removeBottonn").forEach(n=>{n.classList.toggle("removeBottonndark")  })
document.querySelectorAll(".switch").forEach(n=>{n.classList.toggle("switchdark")  })
let image =document.querySelector(".displayMode img")
if(document.body.classList.contains("dark-theme")){
    document.body.classList.remove("dark-theme")
    image.src="assets/images/icon-moon.svg"
}else{
        document.body.classList.add("dark-theme")
        image.src="assets/images/icon-sun.svg"
}
})
document.querySelectorAll(".switch").forEach(x=>{
    x.addEventListener("change",()=>{

let extensionCards = document.querySelectorAll(".extension")
 extensionCards.forEach(card=>{
 let switchInput = card.querySelector(".switch")
if(switchInput.checked){
    card.dataset.filter="a"//active
}else{
    card.dataset.filter="n"
    }
   })
  })
 })
function filterCards(filter){
    let extensionCards = document.querySelectorAll(".extension")
 extensionCards.forEach((card)=>{
    if(card.dataset.filter===filter || filter==="all"){
        card.style.display="flex"
    }else{
          card.style.display="none"
    }
 })

}
document.querySelector(".all").addEventListener("click",()=>filterCards("all"))
document.querySelector(".inactive").addEventListener("click",()=>filterCards("n"))
document.querySelector(".active").addEventListener("click",()=>filterCards("a"))