document.addEventListener("DOMContentLoaded", () =>{

    //DESPLEGAR FOOTER
    const profile = document.querySelector("#profile");
    const footer = document.querySelector("#footer");
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const profilePC = document.querySelector("#profilePC");

    profile.addEventListener("click", ()=>{
        footer.classList.remove("translate-x-full");
        footer.classList.add("translate-x-0");

    })


    // CERRAR FOOTER
    document.addEventListener("click", (e) =>{
        if(!footer.contains(e.target) && e.target !== profile){
            footer.classList.add("translate-x-full");
            footer.classList.remove("translate-x-0");

        }
    })




 
})