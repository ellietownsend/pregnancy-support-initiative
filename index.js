const box3 = document.getElementById("box-3")
const box2 = document.getElementById("box-2")

let puposeTabVisitied = false;

box2.addEventListener("click", function(){
    puposeTabVisitied = true;
})

if(!puposeTabVisitied){
    box3.addEventListener("click", function(){
    alert("Please view our \"Purpose Statmenet\" tab before continuing to this section.")
})
}


