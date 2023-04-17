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
const $a1e64b1eb7c2bcc9$var$pageBody = document.body;
// Get header 
const $a1e64b1eb7c2bcc9$var$pageHeader = document.querySelector("header");
// Aside
const $a1e64b1eb7c2bcc9$var$asideExpBtnContainer = document.querySelector("#aside-infobox-btn-container");
const $a1e64b1eb7c2bcc9$var$asideExp = document.querySelector("#aside-infobox-content");
const $a1e64b1eb7c2bcc9$var$asideExpBtn = document.querySelector("#aside-infobox-btn");
// Nav
const $a1e64b1eb7c2bcc9$var$nav = document.querySelector("nav");
const $a1e64b1eb7c2bcc9$var$navListBtns = document.querySelectorAll(".navbox-btn");
const $a1e64b1eb7c2bcc9$var$navListBtnPs = document.querySelectorAll(".navbox-btn-p");
const $a1e64b1eb7c2bcc9$var$navHbBtn = document.querySelector("#head-hamburger-btn");
///
/*
########################
## Page Functionality ##
########################
*/ // Called when page has been completely loaded
window.addEventListener("load", function() {
    console.log("Page loaded, starting postload scripts~");
    $a1e64b1eb7c2bcc9$var$initNav();
    $a1e64b1eb7c2bcc9$var$initHeaderScrolling();
    $a1e64b1eb7c2bcc9$var$initAside();
//initProjects();
});
// Init:
//  Show header on scroll down past signature
//  Hide header on scroll up past signature
function $a1e64b1eb7c2bcc9$var$initHeaderScrolling() {
    document.body.addEventListener("scroll", ()=>{
        // Grab our scroll Y coords
        const currentScroll = document.body.scrollTop;
        // If we're lower than the signature, show header
        $a1e64b1eb7c2bcc9$var$pageHeader.classList.toggle("fadein", currentScroll > 220);
        // If we're higher than the signature, hide header 
        $a1e64b1eb7c2bcc9$var$pageHeader.classList.toggle("fadeout", currentScroll < 220);
    });
}
// Init aside's expand/collapse button
function $a1e64b1eb7c2bcc9$var$initAside() {
    $a1e64b1eb7c2bcc9$var$asideExpBtnContainer.addEventListener("click", ()=>{
        $a1e64b1eb7c2bcc9$var$asideExp.classList.toggle("closed");
        $a1e64b1eb7c2bcc9$var$asideExpBtn.classList.toggle("closed");
    });
}
// Init nav's context menu button
function $a1e64b1eb7c2bcc9$var$initNav() {
    $a1e64b1eb7c2bcc9$var$navHbBtn.addEventListener("click", ()=>{
        // Remove nav labels
        $a1e64b1eb7c2bcc9$var$navListBtnPs.forEach((element)=>{
            element.classList.toggle("closed");
        });
        // Shrink actual buttons so overlay thing is lessened
        $a1e64b1eb7c2bcc9$var$navListBtns.forEach((element)=>{
            element.classList.toggle("closed");
        });
        // Shrink nav size in body grid
        $a1e64b1eb7c2bcc9$var$pageBody.classList.toggle("retract");
    });
}
function $a1e64b1eb7c2bcc9$var$initProjects() {}


//# sourceMappingURL=index.616c9d4b.js.map
