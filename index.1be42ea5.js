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
parcelRequire.register("lW9CP", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $ff867b2756918b0e$export$6503ec6e8aabbaf; }, function (v) { return $ff867b2756918b0e$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $ff867b2756918b0e$export$f7ad0328861e2f03; }, function (v) { return $ff867b2756918b0e$export$f7ad0328861e2f03 = v; });
var $ff867b2756918b0e$export$6503ec6e8aabbaf;
var $ff867b2756918b0e$export$f7ad0328861e2f03;
"use strict";
var $ff867b2756918b0e$var$mapping = {};
function $ff867b2756918b0e$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$ff867b2756918b0e$var$mapping[keys[i]] = pairs[keys[i]];
}
function $ff867b2756918b0e$var$resolve(id) {
    var resolved = $ff867b2756918b0e$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$ff867b2756918b0e$export$6503ec6e8aabbaf = $ff867b2756918b0e$var$register;
$ff867b2756918b0e$export$f7ad0328861e2f03 = $ff867b2756918b0e$var$resolve;

});

var $6a231b1c84e3ad4f$exports = {};

(parcelRequire("lW9CP")).register(JSON.parse('{"7Q4rr":"index.1be42ea5.js","iZ0P4":"thumb.f2bf334c.jpg","3Y2YU":"thumb.ecdbf45a.jpg","9tyfR":"thumb.a6d67c57.jpg"}'));

var $6a81313c9639729e$exports = {};
var $85d43633a9b4d0f7$exports = {};

$85d43633a9b4d0f7$exports = new URL((parcelRequire("lW9CP")).resolve("iZ0P4"), import.meta.url).toString();


var $d3450c403eafbfd6$exports = {};

$d3450c403eafbfd6$exports = new URL((parcelRequire("lW9CP")).resolve("3Y2YU"), import.meta.url).toString();


var $8b70f0a35834cd88$exports = {};

$8b70f0a35834cd88$exports = new URL((parcelRequire("lW9CP")).resolve("9tyfR"), import.meta.url).toString();


$6a81313c9639729e$exports = {
    "biodiversity": {
        "thumb": $85d43633a9b4d0f7$exports
    },
    "convey": {
        "thumb": $d3450c403eafbfd6$exports
    },
    "studbud": {
        "thumb": $8b70f0a35834cd88$exports
    }
};


console.log((0, (/*@__PURE__*/$parcel$interopDefault($6a81313c9639729e$exports))));
var $f4a84e0312d6e6fb$exports = {};
$f4a84e0312d6e6fb$exports = JSON.parse('[{"id":"studbud","name":"Studbud","tags":["Desktop","Educational"],"date":"2021","desc":"text here"},{"id":"convey","name":"Convey","tags":["Mobile","Transport"],"date":"2022","desc":"text here","carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}},{"id":"biodiversity","name":"Biodiversity in the Human Era","tags":["Desktop","Infovis"],"date":"2023","desc":"text here","carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}}]');


console.log($f4a84e0312d6e6fb$exports);
// Number of projects for recursive access
const $a1e64b1eb7c2bcc9$var$projectDataNo = $f4a84e0312d6e6fb$exports.length;
console.log($a1e64b1eb7c2bcc9$var$projectDataNo);
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
//   All code for the projects section to work
////
// Init project section
function $a1e64b1eb7c2bcc9$var$initProjects() {
    // Create a card for all entries
    for(i = 0; i < $a1e64b1eb7c2bcc9$var$projectDataNo; i++)$a1e64b1eb7c2bcc9$var$renderProjectCard(i);
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
    const projectTPdtlsRoot = projectThumbPrefab.querySelector(".projects-bigcard-details");
    const projectTPthumb = projectThumbPrefab.querySelector(".projects-bigcard-thumb-img");
    const projectTPhead = projectThumbPrefab.querySelector(".projects-bigcard-details-h3");
    const projectTPtagList = projectThumbPrefab.querySelector(".projects-bigcard-details-taglist");
    console.log(projectThumbPrefab);
    // Thumb url from JSON DB id
    projectTPthumb.src = (0, (/*@__PURE__*/$parcel$interopDefault($6a81313c9639729e$exports)))[`${$f4a84e0312d6e6fb$exports[pos].id}`]["thumb"];
    console.log(projectTPthumb.src);
    // Fill new project metadata
    // Card title, just grab name
    projectTPhead.textContent = $f4a84e0312d6e6fb$exports[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = $f4a84e0312d6e6fb$exports[pos].tags;
    for(x = 0; x < projectTags.length; x++)// New DOM element for each tag
    projectTPtagList.appendChild($a1e64b1eb7c2bcc9$var$renderProjectCardTags(projectTags[x]));
    // Calculate px of how much we're shifting the details container on hover state
    // Work out how many extra lines the title will reach when rendered in full
    const TPheadExtraLines = Math.round($f4a84e0312d6e6fb$exports[pos].name.length / 24);
    // Base offset (100px) plus however many extra line heights (42) we need 
    // to push up the container by
    const TPheadHoverOffset = `${180 + TPheadExtraLines * 42}px`;
    projectTProot.style.setProperty("--hover-bottom", TPheadHoverOffset);
    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}
// Set up project card tag DOM
function $a1e64b1eb7c2bcc9$var$renderProjectCardTags(tag) {
    const projectTPtag = document.createElement("p");
    projectTPtag.classList.add("projects-bigcard-tag");
    projectTPtag.textContent = tag;
    return projectTPtag;
}
function $a1e64b1eb7c2bcc9$var$getHeight(element) {
    element = element.cloneNode(true);
    element.style.visibility = "hidden";
    document.body.appendChild(element);
    var height = element.scrollWidth;
    document.body.removeChild(element);
    element.style.visibility = "visible";
    return height;
}


//# sourceMappingURL=index.1be42ea5.js.map
