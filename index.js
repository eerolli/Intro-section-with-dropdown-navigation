let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let arrowFeatures = document.querySelector(".arrow-one");
let arrowCompany = document.querySelector(".arrow-two");
let subMenuFeatures = document.querySelector(".sub-menu-one");
let subMenuCompany = document.querySelector(".sub-menu-two");
let features = document.querySelector(".features");
let company = document.querySelector(".company");
let dtSubMenuFeatures = document.querySelector(".dt-sub-menu-one");
let dtSubMenuCompany = document.querySelector(".dt-sub-menu-two");
let dtFeatures = document.querySelector(".dt-features");
let dtCompany = document.querySelector(".dt-company");

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

dtFeatures.addEventListener('click', ()=>{
    dtSubMenuFeatures.classList.toggle("active");
    const dtArrowFeatures = document.querySelector(".dt-arrow-one").classList.toggle("active");
})

dtCompany.addEventListener('click', ()=>{
    dtSubMenuCompany.classList.toggle("active");
    const dtArrowCompany = document.querySelector(".dt-arrow-two").classList.toggle("active");
})