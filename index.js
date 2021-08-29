    let vew= document.querySelector(".view");
    let card = document.querySelectorAll(".card-body");
    let cardl = document.querySelector(".cardsl");
   let blank =document.querySelector(".coming");
    
    
    vew.addEventListener("click", () => {
    blank.style.display = "block";
    card.style.display = "none";
    });

    cardl.addEventListener("click", () => {
    card.style.display = "block";
    blank.style.display = "none";
    });