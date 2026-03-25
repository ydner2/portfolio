(function(){
    "use strict";
    console.log("running JS");

    const navtoggle = document.querySelector("#navtoggle");
    const navbar = document.querySelector("#navbar");
    let navcounter = 0;

        navtoggle.addEventListener("click", function(){
            if(navcounter==0){
                navbar.removeAttribute("class")
                navcounter = 1;
            } else{
                console.log(navcounter);
                navbar.className = "hiddennav";
                navcounter = 0;
            }
        }); //end nav toggle event
})();