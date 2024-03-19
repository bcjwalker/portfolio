
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiree4ca"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiree4ca"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("lW9CP", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $ff867b2756918b0e$export$6503ec6e8aabbaf; }, function (v) { return $ff867b2756918b0e$export$6503ec6e8aabbaf = v; });
var $ff867b2756918b0e$export$6503ec6e8aabbaf;
var $ff867b2756918b0e$export$f7ad0328861e2f03;
"use strict";
var $ff867b2756918b0e$var$mapping = new Map();
function $ff867b2756918b0e$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$ff867b2756918b0e$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $ff867b2756918b0e$var$resolve(id) {
    var resolved = $ff867b2756918b0e$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$ff867b2756918b0e$export$6503ec6e8aabbaf = $ff867b2756918b0e$var$register;
$ff867b2756918b0e$export$f7ad0328861e2f03 = $ff867b2756918b0e$var$resolve;

});

var $972b5fe3651ae16f$exports = {};

(parcelRequire("lW9CP")).register(new URL("", import.meta.url).toString(), JSON.parse('["7Q4rr","index.cb0eb2fb.js","iZ0P4","thumb.f2bf334c.jpg","3Y2YU","thumb.ecdbf45a.jpg","9tyfR","thumb.a6d67c57.jpg"]'));

/*
#############
## Modules ##
#############
*/ // Glob file paths (see https://en.parceljs.org/module_resolution.html#glob-file-paths)
var $431a0c3aa739169f$exports = {};
var $6dc34c1a73dd0b2d$exports = {};
$6dc34c1a73dd0b2d$exports = new URL("thumb.f2bf334c.jpg", import.meta.url).toString();


var $652d4a21ca28120e$exports = {};
$652d4a21ca28120e$exports = new URL("thumb.ecdbf45a.jpg", import.meta.url).toString();


var $955e2e34a7f0c3ae$exports = {};
$955e2e34a7f0c3ae$exports = new URL("thumb.a6d67c57.jpg", import.meta.url).toString();


$431a0c3aa739169f$exports = {
    "biodiversity": {
        "thumb": $6dc34c1a73dd0b2d$exports
    },
    "convey": {
        "thumb": $652d4a21ca28120e$exports
    },
    "studbud": {
        "thumb": $955e2e34a7f0c3ae$exports
    }
};


var $f4a84e0312d6e6fb$exports = {};
$f4a84e0312d6e6fb$exports = JSON.parse('[{"id":"studbud","name":"Studbud","tags":["Desktop","Educational"],"date":"2021","desc":"A browser-based Kanban study tracker with integrated Pomodoro timer."},{"id":"convey","name":"Convey","tags":["Mobile","Transport"],"date":"2022","desc":"text here","carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}},{"id":"biodiversity","name":"Biodiversity in the Human Era","tags":["Desktop","Infovis"],"date":"2023","desc":"text here","carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}}]');


console.log((0, (/*@__PURE__*/$parcel$interopDefault($431a0c3aa739169f$exports))));
//const projectData = require("./assets/projects-db.json");
console.log((0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports))));
// Number of projects for recursive access
const $a1e64b1eb7c2bcc9$var$projectDataNo = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports))).length;
console.log($a1e64b1eb7c2bcc9$var$projectDataNo);
// DOM
// Get body
const $a1e64b1eb7c2bcc9$var$pageBody = document.body;
// Get projects stuff necessary globally
const $a1e64b1eb7c2bcc9$var$projectsContainer = document.querySelector("#main-projects-container");
const $a1e64b1eb7c2bcc9$var$projectsBigGrid = document.querySelector("#projects-big");
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
    $a1e64b1eb7c2bcc9$var$initEffects();
    // Finally, init projects functionality
    $a1e64b1eb7c2bcc9$var$initProjects();
// TEMPTEMP: Show projects open
//renderProjectOpen(0);
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
// Init epic FX
function $a1e64b1eb7c2bcc9$var$initEffects() {}
////
// Projects:
//   All code for the projects section to work
////
// Init project section
function $a1e64b1eb7c2bcc9$var$initProjects() {
    // Render a card for all entries
    for(let i = 0; i < $a1e64b1eb7c2bcc9$var$projectDataNo; i++)$a1e64b1eb7c2bcc9$var$renderProjectCard(i);
}
// Render project card thumbnail in grid
function $a1e64b1eb7c2bcc9$var$renderProjectCard(pos) {
    // DOM
    // Grab project thumb carousel and template, then clone
    const projectThumbCardousel = document.querySelector("#projects-bigcardousel");
    const projectThumbTemplate = document.querySelector("template.projects-bigcard-template");
    const projectThumbPrefab = projectThumbTemplate.content.cloneNode(true);
    // Grab details from prefab clone (TP)
    const projectTProot = projectThumbPrefab.querySelector(".projects-bigcard");
    const projectTPdtlsRoot = projectThumbPrefab.querySelector(".projects-bigcard-details-container");
    const projectTPthumb = projectThumbPrefab.querySelector(".projects-bigcard-thumb-img");
    const projectTPhead = projectThumbPrefab.querySelector(".projects-bigcard-details-h3");
    const projectTPtagList = projectThumbPrefab.querySelector(".projects-bigcard-details-taglist");
    const projectTPdesc = projectThumbPrefab.querySelector(".projects-bigcard-details-desc");
    console.log(projectThumbPrefab);
    // Thumb url from JSON DB id
    projectTPthumb.src = (0, (/*@__PURE__*/$parcel$interopDefault($431a0c3aa739169f$exports)))[`${(0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].id}`]["thumb"];
    console.log(projectTPthumb.src);
    // Fill new project metadata
    // Card title, just grab name
    projectTPhead.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].tags;
    for(let x = 0; x < projectTags.length; x++)// New DOM element for each tag
    projectTPtagList.appendChild($a1e64b1eb7c2bcc9$var$renderProjectCardTags(projectTags[x]));
    // Project details
    //const projectFooter = projectData[pos].date;
    projectTPdesc.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].date;
    // Calculate px of how much we're shifting the details container on hover state
    // Work out how many extra lines the title will reach when rendered in full
    const TPheadExtraLines = Math.round((0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].name.length / 24);
    // Base offset (150px) plus however many extra line heights (42) we need 
    // to push up the container by
    const TPheadHoverOffset = `${150 + TPheadExtraLines * 42}px`;
    projectTProot.style.setProperty("--hover-bottom", TPheadHoverOffset);
    // Go give the card functionality!
    $a1e64b1eb7c2bcc9$var$initProjectCard(pos, projectTProot);
    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}
// Set up project card tag DOM
function $a1e64b1eb7c2bcc9$var$renderProjectCardTags(tag) {
    const projectTPtag = document.createElement("button");
    projectTPtag.classList.add("projects-bigcard-tag");
    projectTPtag.textContent = tag;
    return projectTPtag;
}
// Set up project card tag DOM
function $a1e64b1eb7c2bcc9$var$renderProjectCardFooter(tag) {
    const projectTPfoot = document.createElement("p");
    projectTPfoot.classList.add("projects-bigcard-footer");
    projectTPfoot.textContent = tag;
    return projectTPfoot;
}
// Set up card functionality
function $a1e64b1eb7c2bcc9$var$initProjectCard(pos, card1) {
    card1.addEventListener("click", ()=>{
        $a1e64b1eb7c2bcc9$var$renderProjectOpen(pos);
    });
}
// Render project window to work section
function $a1e64b1eb7c2bcc9$var$renderProjectOpen(pos) {
    // DOM
    // Grab project open template, then clone
    const projectOpenTemplate = document.querySelector("template.project-big-open-template");
    const projectOpenPrefab1 = projectOpenTemplate.content.cloneNode(true);
    // Grab details from prefab clone (OP)
    const projectOProot = projectOpenPrefab1.querySelector(".project-big-open");
    const projectOPhead = projectOpenPrefab1.querySelector(".project-big-open-header");
    const projectOPheadTxt = projectOPhead.querySelector(".project-big-open-header-title");
    const projectOPtagList = projectOPhead.querySelector(".project-big-open-header-taglist");
    const projectOPdesc = projectOpenPrefab1.querySelector(".project-big-open-desc");
    // Header
    // Set project title
    projectOPheadTxt.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].tags;
    for(let x = 0; x < projectTags.length; x++)// New DOM element for each tag
    projectOPtagList.appendChild($a1e64b1eb7c2bcc9$var$renderProjectCardTags(projectTags[x]));
    projectOPdesc.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($f4a84e0312d6e6fb$exports)))[pos].desc;
    // Go give the window functionality!
    //initProjectOpen(pos);
    // Add back button functionality
    const projectBkBtn = projectOPhead.querySelector(".project-big-open-header-backbtn");
    projectBkBtn.addEventListener("click", ()=>{
        // Render project open 
        $a1e64b1eb7c2bcc9$var$projectsContainer.removeChild(projectOProot);
        // Show projects grid
        $a1e64b1eb7c2bcc9$var$projectsBigGrid.classList.toggle("closed");
    });
    // Hide projects grid
    $a1e64b1eb7c2bcc9$var$projectsBigGrid.classList.toggle("closed");
    // Render project open 
    $a1e64b1eb7c2bcc9$var$projectsContainer.appendChild(projectOpenPrefab1);
}
// Set up project window functionality
function $a1e64b1eb7c2bcc9$var$initProjectOpen(pos) {
    card.addEventListener("click", ()=>{
        // Hide projects grid
        $a1e64b1eb7c2bcc9$var$projectsBigGrid.classList.toggle("closed");
        // Render project open 
        $a1e64b1eb7c2bcc9$var$projectsContainer.appendChild(projectOpenPrefab);
    });
}


//# sourceMappingURL=index.cb0eb2fb.js.map
