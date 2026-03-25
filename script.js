(function(){
    "use strict";
    console.log("running JS");

    const navtoggle = document.querySelector("#navtoggle");
    const navbar = document.querySelector("#navbar");
    let navcounter = 0;

        navtoggle.addEventListener("click", function(){
            navbar.classList.toggle("hiddennav");
        });

        window.addEventListener("resize", function(){
            if(window.innerWidth >= 600){
                navbar.classList.remove("hiddennav");
            }

            if(window.innerWidth <= 600){
                navbar.className="hiddennav";
            }
        }); //end window resize nav toggle
})();