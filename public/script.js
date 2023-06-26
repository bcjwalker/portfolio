/*
#############
## Modules ##
#############
*/



/*
###############
## Variables ##
###############
*/

// Get project DB
const projectData = require("./assets/projects-db.json");
const projectDataNo = projectData.length;
console.log(projectData);

// DOM
  // Get body
  const pageBody = document.body;


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

    // Finally, init projects functionality
    initProjects();
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

////
// Projects:
//   All code required for the projects section to work
////

// Init project section
function initProjects() { 

    // Create a card for all entries
    for(i=0; i < projectDataNo; i++) {
        renderProjectCard(i);
    };
}

// Render project card thumbnail in grid
function renderProjectCard(pos) {
    // Grab project thumb carousel and template
    const projectThumbCardousel = document.querySelector('#projects-big-cardousel');
    const projectThumbTemplate = document.querySelector('template.projects-big-card-template');

        // Grab details
        const projectThumbPrefab = projectThumbTemplate.content.cloneNode(true);
        const projectTPhead = projectThumbPrefab.querySelector('.projects-big-card-details-h3')
        const projectTPtags = projectThumbPrefab.querySelector('.projects-big-card-tag')
        console.log(projectThumbPrefab);

    // Fill new project metadata
    projectTPhead.textContent = projectData[pos].name;
    projectTPtags.textContent = projectData[pos].tags;

    // Append to cardousel
    projectThumbCardousel.appendChild(projectThumbPrefab);
}