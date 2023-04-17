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

///
// DOM
  // Get body
  const pageBody = document.body;
  // Get header 
  const pageHeader = document.querySelector('header');

  // Aside
  const asideExpBtnContainer = document.querySelector('#aside-infobox-btn-container');
  const asideExp = document.querySelector('#aside-infobox-content');
  const asideExpBtn = document.querySelector('#aside-infobox-btn');

  // Nav
  const nav = document.querySelector('nav');
  const navListBtns = document.querySelectorAll('.navbox-btn');
  const navListBtnPs = document.querySelectorAll('.navbox-btn-p');
  const navHbBtn = document.querySelector('#head-hamburger-btn');
///


/*
########################
## Page Functionality ##
########################
*/

// Called when page has been completely loaded
window.addEventListener('load', function() {
    console.log('Page loaded, starting postload scripts~')
    initNav();
    initHeaderScrolling();
    initAside();
    //initProjects();
});

// Init:
//  Show header on scroll down past signature
//  Hide header on scroll up past signature
function initHeaderScrolling() {
    document.body.addEventListener('scroll', () => {
        // Grab our scroll Y coords
        const currentScroll = document.body.scrollTop;
        
        // If we're lower than the signature, show header
        pageHeader.classList.toggle('fadein', currentScroll > 220);

        // If we're higher than the signature, hide header 
        pageHeader.classList.toggle('fadeout', currentScroll < 220);
    });
};

// Init aside's expand/collapse button
function initAside() {
    asideExpBtnContainer.addEventListener('click', () => {
        asideExp.classList.toggle('closed');
        asideExpBtn.classList.toggle('closed');
    });
    
};

// Init nav's context menu button
function initNav() {
    navHbBtn.addEventListener('click', () => {
        // Remove nav labels
        navListBtnPs.forEach((element) => {
            element.classList.toggle('closed');
        })
        // Shrink actual buttons so overlay thing is lessened
        navListBtns.forEach((element) => {
            element.classList.toggle('closed');
        })
        // Shrink nav size in body grid
        pageBody.classList.toggle('retract');
    });
};

function initProjects() {
    
};