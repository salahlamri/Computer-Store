let btnMenu = document.getElementById("open-menu")
let menu = document.getElementById("menu")
btnMenu.addEventListener("click",()=>{
    btnMenu.classList.toggle("fa-times");
    menu.classList.toggle("active")
})

// ::::::::::::::::::::::::::::::::::Tabs Our service :::::::::::::::::::::::::::::::::::
// Ul classe= tabs
// father div class=pcs
// boxhp===>
// boxmac===>
// boxdell===>
// boxthink===>
// boxasus===>

let TabsLi = document.querySelectorAll(".tabs li");
let AllBoxes = document .querySelectorAll(".pcs div");


TabsLi.forEach((li) => {
li.addEventListener("click",RemoveActive);
li.addEventListener("click",ManageBoxes);
});

// Remove Class Active From All lis And Add To current

function RemoveActive(){
    TabsLi.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

// MAnges Boxxes To pcs 

function ManageBoxes(){
    AllBoxes.forEach((Box) => {
        Box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block"
    })
}


// Scroling

let spanEle = document.querySelector(".up")
window.onscroll = function(){
    if(this.scrollY >= 800){
        spanEle.classList.add("show");
    }else{
        spanEle.classList.remove("show");
    }
}
spanEle.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}