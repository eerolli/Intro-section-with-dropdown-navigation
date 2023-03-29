let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let arrowFeatures = document.querySelector(".arrow-one");
let arrowCompany = document.querySelector(".arrow-two");
let subMenuFeatures = document.querySelector(".sub-menu-one");
let subMenuCompany = document.querySelector(".sub-menu-two");
let features = document.querySelector(".features");
let company = document.querySelector(".company");

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})

features.addEventListener('click', ()=>{
    subMenuFeatures.classList.toggle("active");
    arrowFeatures.classList.toggle("active");
})

company.addEventListener('click', ()=>{
    subMenuCompany.classList.toggle("active");
    arrowCompany.classList.toggle("active");
})