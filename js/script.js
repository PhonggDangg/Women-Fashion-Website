const chitiet = document.querySelector(".chitiet")
const baoquan = document.querySelector(".baoquan")
const size = document.querySelector(".title-item-size")
if(baoquan){
    baoquan.addEventListener("click",function(){
        baoquan.style.borderBottom = "3px solid black";
        baoquan.style.fontWeight = "bold";
        chitiet.style.borderBottom = "none";
        chitiet.style.fontWeight = "normal";
        size.style.borderBottom = "none";
        size.style.fontWeight = "normal";
        document.querySelector(".content-chitiet").style.display = "none";
       document.querySelector(".content-baoquan").style.display = "block";
       document.querySelector(".content-size").style.display = "none";
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        chitiet.style.borderBottom = "3px solid black";
        chitiet.style.fontWeight = "bold";
        baoquan.style.borderBottom = "none";
        baoquan.style.fontWeight = "normal";
        size.style.borderBottom = "none";
        size.style.fontWeight = "normal";
       document.querySelector(".content-chitiet").style.display = "flex";
       document.querySelector(".content-baoquan").style.display = "none";
       document.querySelector(".content-size").style.display = "none";
    })

}
if(size){
    size.addEventListener("click",function(){
        size.style.borderBottom = "3px solid black";
        size.style.fontWeight = "bold";
        baoquan.style.borderBottom = "none";
        baoquan.style.fontWeight = "normal";
        chitiet.style.borderBottom = "none";
        chitiet.style.fontWeight = "normal";
        document.querySelector(".content-chitiet").style.display = "none";
       document.querySelector(".content-baoquan").style.display = "none";
       document.querySelector(".content-size").style.display = "block";
    })

}

const butTon = document.querySelector(".procduct-content-right-bottom-top")
if (butTon) {
    butTon.addEventListener("click",function () {
        document.querySelector(".procduct-content-right-bottom-content").classList.toggle("activeB")
    })
}

