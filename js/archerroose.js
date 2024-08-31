$(document).ready(function(){
    mainSlider();
    titlehamburger();
    shopSlider();
    wineMove();
});

function mainSlider(){
    $('.mainFirstSlider').bxSlider({
        wrapperClass: "mainFirst"

    });
}

function titlehamburger(){
    $("label").click(function(){
        $("#show").toggleClass("active");
    });
}

function shopSlider(){
    $('.shopSlide').bxSlider({
        wrapperClass: "shopFirst"

    });
}


function wineMove(){

var bigPic = document.querySelector("#wine");
var smallPic = document.querySelectorAll(".small"); 
var cup = document.querySelector("#wine");

for(var i=0; i<smallPic.length; i++){
    smallPic[i].addEventListener("click", chagePic);
}

function chagePic(){
    var newPic = this.src;
    bigPic.setAttribute("src", newPic); 
}

}