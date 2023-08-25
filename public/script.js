/*
#############
## Modules ##
#############
*/

// Glob file paths (see https://en.parceljs.org/module_resolution.html#glob-file-paths)
import projectImgs from "./assets/projects/**/*.jpg";
console.log(projectImgs)

/*
###############
## Variables ##
###############
*/

// Get project DB
import projectData from "./assets/projects-db.json";
//const projectData = require("./assets/projects-db.json");
console.log(projectData);
// Number of projects for recursive access
const projectDataNo = projectData.length;
console.log(projectDataNo);


// DOM
  // Get body
  const pageBody = document.body;

  // Get projects stuff necessary globally
  const projectsContainer = document.querySelector('#main-projects-container')
  const projectsBigGrid = document.querySelector('#projects-big');

/*
########################
## Page Functionality ##
########################
*/

// Called when page has been completely loaded
window.addEventListener('load', function() {
    console.log('Page loaded, starting postload scripts~')

    // Init website functionality basics
    initNav();
    initHead();
    initAside();
    initEffects();

    // Finally, init projects functionality
    //initProjects();

    // TEMPTEMP: Show projects open
    renderProjectOpen(0);
});

// Init nav's context menu button
function initNav() {
    // DOM
    const nav = document.querySelector('nav');
    const navListBtns = document.querySelectorAll('.navbox-btn');
    const navListBtnPs = document.querySelectorAll('.navbox-btn-p');
    const navHbBtn = document.querySelector('#head-hamburger-btn');

    navHbBtn.addEventListener('click', () => {
        // Shrink actual buttons so overlay thing is lessened
        // Remove nav labels
        navListBtns.forEach((element) => {
            element.classList.toggle('closed');
        });
        // Shrink nav size in body grid
        pageBody.classList.toggle('retract');
    });
}

// Init header that appears/vanishes based on scroll pos (before/after signature image)
function initHead() {
    // DOM
    const pageHeader = document.querySelector('header');

      document.body.addEventListener('scroll', () => {
        // Grab our scroll Y coords
        const currentScroll = document.body.scrollTop;
        
        // If we're lower than the signature, show header
        pageHeader.classList.toggle('fadein', currentScroll > 220);

        // If we're higher than the signature, hide header 
        pageHeader.classList.toggle('fadeout', currentScroll < 220);
    });
}

// Init aside's expand/collapse button
function initAside() {
    // DOM
    const asideExpBtnContainer = document.querySelector('#aside-infobox-btn-container');
    const asideExp = document.querySelector('#aside-infobox-content');
    const asideExpBtn = document.querySelector('#aside-infobox-btn');

    asideExpBtnContainer.addEventListener('click', () => {
        asideExp.classList.toggle('closed');
        asideExpBtn.classList.toggle('closed');
    });
}

// Init epic FX
function initEffects() {
    
}

////
// Projects:
//   All code for the projects section to work
////

// Init project section
function initProjects() { 

    // Create a card for all entries
    for(i = 0; i < projectDataNo; i++) {
        renderProjectCard(i);
    };
}

// Render project card thumbnail in grid
function renderProjectCard(pos) {
    // DOM
    // Grab project thumb carousel and template, then clone
    const projectThumbCardousel = document.querySelector('#projects-bigcardousel');
    const projectThumbTemplate = document.querySelector('template.projects-bigcard-template');
    const projectThumbPrefab = projectThumbTemplate.content.cloneNode(true);
    // Grab details from prefab clone (TP)
    const projectTProot = projectThumbPrefab.querySelector('.projects-bigcard');
    const projectTPdtlsRoot = projectThumbPrefab.querySelector('.projects-bigcard-details-container');
    const projectTPthumb = projectThumbPrefab.querySelector('.projects-bigcard-thumb-img');
    const projectTPhead = projectThumbPrefab.querySelector('.projects-bigcard-details-h3');
    const projectTPtagList = projectThumbPrefab.querySelector('.projects-bigcard-details-taglist');
    const projectTPdesc = projectThumbPrefab.querySelector('.projects-bigcard-details-desc');
    console.log(projectThumbPrefab);

    // Thumb url from JSON DB id
    projectTPthumb.src = projectImgs[`${projectData[pos].id}`]['thumb'];
    console.log(projectTPthumb.src);

    // Fill new project metadata
    // Card title, just grab name
    projectTPhead.textContent = projectData[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = projectData[pos].tags;
    for (x = 0; x < projectTags.length; x++) {
        // New DOM element for each tag
        projectTPtagList.appendChild(renderProjectCardTags(projectTags[x]));
    };

    // Project details
    //const projectFooter = projectData[pos].date;
    projectTPdesc.textContent = projectData[pos].date;

    // Calculate px of how much we're shifting the details container on hover state
    // Work out how many extra lines the title will reach when rendered in full
    const TPheadExtraLines = Math.round(projectData[pos].name.length / 24)
    // Base offset (150px) plus however many extra line heights (42) we need 
    // to push up the container by
    const TPheadHoverOffset = `${150 + (TPheadExtraLines * 42)}px`;
    projectTProot.style.setProperty('--hover-bottom', TPheadHoverOffset);

    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}

// Set up project card tag DOM
function renderProjectCardTags(tag) {
    const projectTPtag = document.createElement('button');
    projectTPtag.classList.add('projects-bigcard-tag');
    projectTPtag.textContent = tag;

    return projectTPtag;
}

// Set up project card tag DOM
function renderProjectCardFooter(tag) {
    const projectTPfoot = document.createElement('p');
    projectTPfoot.classList.add('projects-bigcard-footer');
    projectTPfoot.textContent = tag;

    return projectTPfoot;
}

function renderProjectOpen(pos) {
    // DOM
    // Grab project open template, then clone
    const projectOpenTemplate = document.querySelector('template.project-big-open-template');
    const projectOpenPrefab = projectOpenTemplate.content.cloneNode(true);
    // Grab details from prefab clone (OP)
    const projectOProot = projectOpenPrefab.querySelector('.project-big-open');
    const projectOPhead = projectOpenPrefab.querySelector('.project-big-open-header');
        const projectOPheadTxt = projectOPhead.querySelector('.project-big-open-header-title');
        const projectOPtagList = projectOPhead.querySelector('.project-big-open-header-taglist');
    const projectOPdesc = projectOpenPrefab.querySelector('.project-big-open-desc');

    // Header
    // Set project title
    projectOPheadTxt.textContent = projectData[pos].name;
    // Card tags, grab tag array then push contents as individual elements 
    const projectTags = projectData[pos].tags;
    for (x = 0; x < projectTags.length; x++) {
        // New DOM element for each tag
        projectOPtagList.appendChild(renderProjectCardTags(projectTags[x]));
    };

    projectOPdesc.textContent = projectData[pos].desc;

    // Hide projects grid
    projectsBigGrid.classList.toggle('closed');
    // Render project open 
    projectsContainer.appendChild(projectOpenPrefab);
}