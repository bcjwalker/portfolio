(function () {
/*
#############
## Modules ##
#############
*/ /*
###############
## Variables ##
###############
*/ ///
// DOM
// Get body
const $dc22a61828523e3d$var$pageBody = document.body;
// Get header 
const $dc22a61828523e3d$var$pageHeader = document.querySelector("header");
// Aside
const $dc22a61828523e3d$var$asideExpBtnContainer = document.querySelector("#aside-infobox-btn-container");
const $dc22a61828523e3d$var$asideExp = document.querySelector("#aside-infobox-content");
const $dc22a61828523e3d$var$asideExpBtn = document.querySelector("#aside-infobox-btn");
// Nav
const $dc22a61828523e3d$var$nav = document.querySelector("nav");
const $dc22a61828523e3d$var$navListBtns = document.querySelectorAll(".navbox-btn");
const $dc22a61828523e3d$var$navListBtnPs = document.querySelectorAll(".navbox-btn-p");
const $dc22a61828523e3d$var$navHbBtn = document.querySelector("#head-hamburger-btn");
///
/*
########################
## Page Functionality ##
########################
*/ // Called when page has been completely loaded
window.addEventListener("load", function() {
    console.log("Page loaded, starting postload scripts~");
    $dc22a61828523e3d$var$initNav();
    $dc22a61828523e3d$var$initHeaderScrolling();
    $dc22a61828523e3d$var$initAside();
//initProjects();
});
// Init:
//  Show header on scroll down past signature
//  Hide header on scroll up past signature
function $dc22a61828523e3d$var$initHeaderScrolling() {
    document.body.addEventListener("scroll", ()=>{
        // Grab our scroll Y coords
        const currentScroll = document.body.scrollTop;
        // If we're lower than the signature, show header
        $dc22a61828523e3d$var$pageHeader.classList.toggle("fadein", currentScroll > 220);
        // If we're higher than the signature, hide header 
        $dc22a61828523e3d$var$pageHeader.classList.toggle("fadeout", currentScroll < 220);
    });
}
// Init aside's expand/collapse button
function $dc22a61828523e3d$var$initAside() {
    $dc22a61828523e3d$var$asideExpBtnContainer.addEventListener("click", ()=>{
        $dc22a61828523e3d$var$asideExp.classList.toggle("closed");
        $dc22a61828523e3d$var$asideExpBtn.classList.toggle("closed");
    });
}
// Init nav's context menu button
function $dc22a61828523e3d$var$initNav() {
    $dc22a61828523e3d$var$navHbBtn.addEventListener("click", ()=>{
        // Remove nav labels
        $dc22a61828523e3d$var$navListBtnPs.forEach((element)=>{
            element.classList.toggle("closed");
        });
        // Shrink actual buttons so overlay thing is lessened
        $dc22a61828523e3d$var$navListBtns.forEach((element)=>{
            element.classList.toggle("closed");
        });
        // Shrink nav size in body grid
        $dc22a61828523e3d$var$pageBody.classList.toggle("retract");
    });
}
function $dc22a61828523e3d$var$initProjects() {}

})();
//# sourceMappingURL=index.4efb8ce4.js.map
