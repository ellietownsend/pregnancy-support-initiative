const box2 = document.getElementById("box-2")
const box3 = document.getElementById("box-3")
const box4 = document.getElementById("box-4")
const box5 = document.getElementById("box-5")
const box6 = document.getElementById("box-6")
const box7 = document.getElementById("box-7")

let puposeTabVisitied = false;
let welcomeTabVisited = false;
let onlineTabVisited = false;
let bodyTab = false;
let inpersonSupport = false;
let finalMessage = false;


box2.addEventListener("click", function(){
    puposeTabVisitied = true;
})

box3.addEventListener("click", function(){
    welcomeTabVisited = true;
})

box4.addEventListener("click", function(){
    onlineTabVisited = true;
})

box5.addEventListener("click", function(){
    bodyTab = true;
})

box6.addEventListener("click", function(){
    inpersonSupport = true;
})

box7.addEventListener("click", function(){
    finalMessage = true;
})


box3.addEventListener("click", function(){
    if(!puposeTabVisitied){
        alert("Please view our \"Purpose Statmenet\" tab before continuing to this section.")
    }
})

box4.addEventListener("click", function(){
    if(!welcomeTabVisited){
        alert("Please view our \"Welcome Message\" tab before continuing to this section.")
    }
})

box5.addEventListener("click", function(){
    if(!onlineTabVisited){
        alert("Please view our \"Online Support\" tab before continuing to this section.")
    }
})

box6.addEventListener("click", function(){
    if(!bodyTab){
        alert("Please view our \"The Body\" tab before continuing to this section.")
    }
})

box7.addEventListener("click", function(){
    if(!inpersonSupport){
        alert("Please view our \"In-Person Support\" tab before continuing to this section.")
    }
})



