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
});

// Init for:
//  Show header on scroll down past signature
//  Hide header on scroll up past signature
function initHeaderScrolling() {
    window.addEventListener('scroll', (event) => {
        // Grab our scroll Y coords
        const currentScroll = window.pageYOffset;

        // If we're lower than the signature, show header
        pageHeader.classList.toggle('fadein', currentScroll > 220);

        // If we're higher than the signature, hide header 
        pageHeader.classList.toggle('fadeout', currentScroll < 220);
    });
};

// Init for aside's expand/collapse button
function initAside() {
    const asideExpBtnContainer = document.querySelector('#aside-infobox-btn-container');
    const asideExp = document.querySelector('#aside-infobox-content');
    const asideExpBtn = document.querySelector('#aside-infobox-btn');

    asideExpBtnContainer.addEventListener('click', () => {
        asideExp.classList.toggle('closed');
        asideExpBtn.classList.toggle('closed');
    });
};

function initNav() {
    const nav = document.querySelector('nav');
    const navListPs = document.querySelectorAll('.navbox-btn-p');
    const navHbBtn = document.querySelector('#head-hamburger-btn');

    navHbBtn.addEventListener('click', () => {
        navListPs.forEach((element) => {
            element.classList.toggle('closed');
        })
        nav.classList.toggle('closed');
    });
};