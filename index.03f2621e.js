var $f4a84e0312d6e6fb$exports = {};
$f4a84e0312d6e6fb$exports = JSON.parse('[{"thumb":"url","name":"Studbud","tags":["Desktop","Study"]},{"thumb":"url","name":"Convey","tags":["Mobile","Transport"],"carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}}]');


const $a1e64b1eb7c2bcc9$var$projectDataNo = $f4a84e0312d6e6fb$exports.length;
console.log($f4a84e0312d6e6fb$exports);
// DOM
// Get body
const $a1e64b1eb7c2bcc9$var$pageBody = document.body;
/*
########################
## Page Functionality ##
########################
*/ // Called when page has been completely loaded
window.addEventListener("load", function() {
    console.log("Page loaded, starting postload scripts~");
    // Init website functionality basics
    $a1e64b1eb7c2bcc9$var$initNav();
    $a1e64b1eb7c2bcc9$var$initHead();
    $a1e64b1eb7c2bcc9$var$initAside();
    // Finally, init projects functionality
    $a1e64b1eb7c2bcc9$var$initProjects();
});
// Init nav's context menu button
function $a1e64b1eb7c2bcc9$var$initNav() {
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
        $a1e64b1eb7c2bcc9$var$pageBody.classList.toggle("retract");
    });
}
// Init header that appears/vanishes based on scroll pos (before/after signature image)
function $a1e64b1eb7c2bcc9$var$initHead() {
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
function $a1e64b1eb7c2bcc9$var$initAside() {
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
function $a1e64b1eb7c2bcc9$var$initProjects() {
    // Render for all entries
    for(i = 0; i < $a1e64b1eb7c2bcc9$var$projectDataNo; i++)$a1e64b1eb7c2bcc9$var$renderProject(i);
}
// Populate projects section with projects from DB
function $a1e64b1eb7c2bcc9$var$renderProject(pos) {
    // Grab project thumb carousel and template
    const projectThumbCardousel = document.querySelector("#projects-big-cardousel");
    const projectThumbTemplate = document.querySelector("template.projects-big-card-template");
    // Grab details
    const projectThumbPrefab = projectThumbTemplate.content.cloneNode(true);
    const projectTPhead = projectThumbPrefab.querySelector(".projects-big-card-details-h3");
    const projectTPtags = projectThumbPrefab.querySelector(".projects-big-card-details-p");
    console.log(projectThumbPrefab);
    // Fill new project metadata
    projectTPhead.textContent = $f4a84e0312d6e6fb$exports[pos].name;
    projectTPtags.textContent = $f4a84e0312d6e6fb$exports[pos].tags;
    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}


//# sourceMappingURL=index.03f2621e.js.map
