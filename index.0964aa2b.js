(function () {
var $829ae6dc27d91a64$exports = {};
$829ae6dc27d91a64$exports = JSON.parse('[{"thumb":"url","name":"Studbud","tags":["Desktop","Study"]},{"thumb":"url","name":"Convey","tags":["Mobile","Transport"],"carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}}]');


const $dc22a61828523e3d$var$projectDataNo = $829ae6dc27d91a64$exports.length;
console.log($829ae6dc27d91a64$exports);
// DOM
// Get body
const $dc22a61828523e3d$var$pageBody = document.body;
/*
########################
## Page Functionality ##
########################
*/ // Called when page has been completely loaded
window.addEventListener("load", function() {
    console.log("Page loaded, starting postload scripts~");
    // Init website functionality basics
    $dc22a61828523e3d$var$initNav();
    $dc22a61828523e3d$var$initHead();
    $dc22a61828523e3d$var$initAside();
    // Finally, init projects functionality
    $dc22a61828523e3d$var$initProjects();
});
// Init nav's context menu button
function $dc22a61828523e3d$var$initNav() {
    // DOM
    const nav = document.querySelector("nav");
    const navListBtns = document.querySelectorAll(".navbox-btn");
    const navListBtnPs = document.querySelectorAll(".navbox-btn-p");
    const navHbBtn = document.querySelector("#head-hamburger-btn");
    navHbBtn.addEventListener("click", ()=>{
        // Shrink actual buttons so overlay thing is lessened
        // Remove nav labels
        navListBtns.forEach((element)=>{
            element.classList.toggle("closed");
        });
        // Shrink nav size in body grid
        $dc22a61828523e3d$var$pageBody.classList.toggle("retract");
    });
}
// Init header that appears/vanishes based on scroll pos (before/after signature image)
function $dc22a61828523e3d$var$initHead() {
    // DOM
    const pageHeader = document.querySelector("header");
    document.body.addEventListener("scroll", ()=>{
        // Grab our scroll Y coords
        const currentScroll = document.body.scrollTop;
        // If we're lower than the signature, show header
        pageHeader.classList.toggle("fadein", currentScroll > 220);
        // If we're higher than the signature, hide header 
        pageHeader.classList.toggle("fadeout", currentScroll < 220);
    });
}
// Init aside's expand/collapse button
function $dc22a61828523e3d$var$initAside() {
    // DOM
    const asideExpBtnContainer = document.querySelector("#aside-infobox-btn-container");
    const asideExp = document.querySelector("#aside-infobox-content");
    const asideExpBtn = document.querySelector("#aside-infobox-btn");
    asideExpBtnContainer.addEventListener("click", ()=>{
        asideExp.classList.toggle("closed");
        asideExpBtn.classList.toggle("closed");
    });
}
////
// Projects:
//   All code required for the projects section to work
////
// Init project section
function $dc22a61828523e3d$var$initProjects() {
    // Render for all entries
    for(i = 0; i < $dc22a61828523e3d$var$projectDataNo; i++)$dc22a61828523e3d$var$renderProject(i);
}
// Populate projects section with projects from DB
function $dc22a61828523e3d$var$renderProject(pos) {
    // Grab project thumb carousel and template
    const projectThumbCardousel = document.querySelector("#projects-big-cardousel");
    const projectThumbTemplate = document.querySelector("template.projects-big-card-template");
    // Grab details
    const projectThumbPrefab = projectThumbTemplate.content.cloneNode(true);
    const projectTPhead = projectThumbPrefab.querySelector(".projects-big-card-details-h3");
    const projectTPtags = projectThumbPrefab.querySelector(".projects-big-card-details-p");
    console.log(projectThumbPrefab);
    // Fill new project metadata
    projectTPhead.textContent = $829ae6dc27d91a64$exports[pos].name;
    projectTPtags.textContent = $829ae6dc27d91a64$exports[pos].tags;
    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}

})();
//# sourceMappingURL=index.0964aa2b.js.map
