(function () {

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
parcelRegister("9xqYB", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf; }, function (v) { return $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = v; });
var $6f1c1f1b2dada3ed$export$6503ec6e8aabbaf;
var $6f1c1f1b2dada3ed$export$f7ad0328861e2f03;
"use strict";
var $6f1c1f1b2dada3ed$var$mapping = new Map();
function $6f1c1f1b2dada3ed$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$6f1c1f1b2dada3ed$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $6f1c1f1b2dada3ed$var$resolve(id) {
    var resolved = $6f1c1f1b2dada3ed$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$6f1c1f1b2dada3ed$export$6503ec6e8aabbaf = $6f1c1f1b2dada3ed$var$register;
$6f1c1f1b2dada3ed$export$f7ad0328861e2f03 = $6f1c1f1b2dada3ed$var$resolve;

});

parcelRegister("cHmwT", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", function () { return $93eafa1434f2e08a$export$bdfd709ae4826697; }, function (v) { return $93eafa1434f2e08a$export$bdfd709ae4826697 = v; });
var $93eafa1434f2e08a$export$bdfd709ae4826697;
var $93eafa1434f2e08a$export$c9e73fbda7da57b6;
var $93eafa1434f2e08a$export$5a759dc7a1cfb72a;
"use strict";
var $93eafa1434f2e08a$var$bundleURL = {};
function $93eafa1434f2e08a$var$getBundleURLCached(id) {
    var value = $93eafa1434f2e08a$var$bundleURL[id];
    if (!value) {
        value = $93eafa1434f2e08a$var$getBundleURL();
        $93eafa1434f2e08a$var$bundleURL[id] = value;
    }
    return value;
}
function $93eafa1434f2e08a$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $93eafa1434f2e08a$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $93eafa1434f2e08a$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $93eafa1434f2e08a$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$93eafa1434f2e08a$export$bdfd709ae4826697 = $93eafa1434f2e08a$var$getBundleURLCached;
$93eafa1434f2e08a$export$c9e73fbda7da57b6 = $93eafa1434f2e08a$var$getBaseURL;
$93eafa1434f2e08a$export$5a759dc7a1cfb72a = $93eafa1434f2e08a$var$getOrigin;

});

var $3fb8917ba793bc22$exports = {};


(parcelRequire("9xqYB")).register((parcelRequire("cHmwT")).getBundleURL("ihKoB"), JSON.parse('["ihKoB","index.6fc81dd8.js","j4MT3","thumb.f2bf334c.jpg","jkNVD","thumb.ecdbf45a.jpg","3AADh","thumb.a6d67c57.jpg"]'));

/*
#############
## Modules ##
#############
*/ // Glob file paths (see https://en.parceljs.org/module_resolution.html#glob-file-paths)
var $1390d44b4638509a$exports = {};
var $6a4f6ed12d4752f2$exports = {};

$6a4f6ed12d4752f2$exports = (parcelRequire("cHmwT")).getBundleURL("ihKoB") + "thumb.f2bf334c.jpg";


var $f5c395f448c57b89$exports = {};

$f5c395f448c57b89$exports = (parcelRequire("cHmwT")).getBundleURL("ihKoB") + "thumb.ecdbf45a.jpg";


var $c89a82f737a6eac3$exports = {};

$c89a82f737a6eac3$exports = (parcelRequire("cHmwT")).getBundleURL("ihKoB") + "thumb.a6d67c57.jpg";


$1390d44b4638509a$exports = {
    "biodiversity": {
        "thumb": $6a4f6ed12d4752f2$exports
    },
    "convey": {
        "thumb": $f5c395f448c57b89$exports
    },
    "studbud": {
        "thumb": $c89a82f737a6eac3$exports
    }
};


var $829ae6dc27d91a64$exports = {};
$829ae6dc27d91a64$exports = JSON.parse('[{"id":"studbud","name":"Studbud","tags":["Desktop","Educational"],"date":"2021","desc":"A browser-based Kanban study tracker with integrated Pomodoro timer."},{"id":"convey","name":"Convey","tags":["Mobile","Transport"],"date":"2022","desc":"text here","carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}},{"id":"biodiversity","name":"Biodiversity in the Human Era","tags":["Desktop","Infovis"],"date":"2023","desc":"text here","carousel-1":{"slides":["url","url"],"descs":["desc","desc"]},"carousel-2":{"slides":["url","url"],"descs":["desc","desc"]}}]');


console.log((0, (/*@__PURE__*/$parcel$interopDefault($1390d44b4638509a$exports))));
//const projectData = require("./assets/projects-db.json");
console.log((0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports))));
// Number of projects for recursive access
const $dc22a61828523e3d$var$projectDataNo = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports))).length;
console.log($dc22a61828523e3d$var$projectDataNo);
// DOM
// Get body
const $dc22a61828523e3d$var$pageBody = document.body;
// Get projects stuff necessary globally
const $dc22a61828523e3d$var$projectsContainer = document.querySelector("#main-projects-container");
const $dc22a61828523e3d$var$projectsBigGrid = document.querySelector("#projects-big");
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
    $dc22a61828523e3d$var$initEffects();
    // Finally, init projects functionality
    $dc22a61828523e3d$var$initProjects();
// TEMPTEMP: Show projects open
//renderProjectOpen(0);
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
// Init epic FX
function $dc22a61828523e3d$var$initEffects() {}
////
// Projects:
//   All code for the projects section to work
////
// Init project section
function $dc22a61828523e3d$var$initProjects() {
    // Render a card for all entries
    for(let i = 0; i < $dc22a61828523e3d$var$projectDataNo; i++)$dc22a61828523e3d$var$renderProjectCard(i);
}
// Render project card thumbnail in grid
function $dc22a61828523e3d$var$renderProjectCard(pos) {
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
    projectTPthumb.src = (0, (/*@__PURE__*/$parcel$interopDefault($1390d44b4638509a$exports)))[`${(0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].id}`]["thumb"];
    console.log(projectTPthumb.src);
    // Fill new project metadata
    // Card title, just grab name
    projectTPhead.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].tags;
    for(let x = 0; x < projectTags.length; x++)// New DOM element for each tag
    projectTPtagList.appendChild($dc22a61828523e3d$var$renderProjectCardTags(projectTags[x]));
    // Project details
    //const projectFooter = projectData[pos].date;
    projectTPdesc.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].date;
    // Calculate px of how much we're shifting the details container on hover state
    // Work out how many extra lines the title will reach when rendered in full
    const TPheadExtraLines = Math.round((0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].name.length / 24);
    // Base offset (150px) plus however many extra line heights (42) we need 
    // to push up the container by
    const TPheadHoverOffset = `${150 + TPheadExtraLines * 42}px`;
    projectTProot.style.setProperty("--hover-bottom", TPheadHoverOffset);
    // Go give the card functionality!
    $dc22a61828523e3d$var$initProjectCard(pos, projectTProot);
    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}
// Set up project card tag DOM
function $dc22a61828523e3d$var$renderProjectCardTags(tag) {
    const projectTPtag = document.createElement("button");
    projectTPtag.classList.add("projects-bigcard-tag");
    projectTPtag.textContent = tag;
    return projectTPtag;
}
// Set up project card tag DOM
function $dc22a61828523e3d$var$renderProjectCardFooter(tag) {
    const projectTPfoot = document.createElement("p");
    projectTPfoot.classList.add("projects-bigcard-footer");
    projectTPfoot.textContent = tag;
    return projectTPfoot;
}
// Set up card functionality
function $dc22a61828523e3d$var$initProjectCard(pos, card1) {
    card1.addEventListener("click", ()=>{
        $dc22a61828523e3d$var$renderProjectOpen(pos);
    });
}
// Render project window to work section
function $dc22a61828523e3d$var$renderProjectOpen(pos) {
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
    projectOPheadTxt.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].tags;
    for(let x = 0; x < projectTags.length; x++)// New DOM element for each tag
    projectOPtagList.appendChild($dc22a61828523e3d$var$renderProjectCardTags(projectTags[x]));
    projectOPdesc.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($829ae6dc27d91a64$exports)))[pos].desc;
    // Go give the window functionality!
    //initProjectOpen(pos);
    // Add back button functionality
    const projectBkBtn = projectOPhead.querySelector(".project-big-open-header-backbtn");
    projectBkBtn.addEventListener("click", ()=>{
        // Render project open 
        $dc22a61828523e3d$var$projectsContainer.removeChild(projectOProot);
        // Show projects grid
        $dc22a61828523e3d$var$projectsBigGrid.classList.toggle("closed");
    });
    // Hide projects grid
    $dc22a61828523e3d$var$projectsBigGrid.classList.toggle("closed");
    // Render project open 
    $dc22a61828523e3d$var$projectsContainer.appendChild(projectOpenPrefab1);
}
// Set up project window functionality
function $dc22a61828523e3d$var$initProjectOpen(pos) {
    card.addEventListener("click", ()=>{
        // Hide projects grid
        $dc22a61828523e3d$var$projectsBigGrid.classList.toggle("closed");
        // Render project open 
        $dc22a61828523e3d$var$projectsContainer.appendChild(projectOpenPrefab);
    });
}

})();
//# sourceMappingURL=index.6fc81dd8.js.map
