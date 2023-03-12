///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: DOM-Content
// Description: Main javscript file for all DOM content.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import tribesStudioLogoA2 from '../src/images/Tribes-Studio-Logo-A2.png';
import dropdownMenu from '../src/images/menu-custom.png';

// LoadDOMContent(): Loads the DOM content for the entire application.
export function LoadDOMContent(){
    console.log("Dom Contenting Loaded...");
    const content = document.getElementById('content');

    const navigationHeader = document.createElement('div');
    navigationHeader.classList.add('navigation-header');

    const mobileNavigationHeader = document.createElement('div');
    mobileNavigationHeader.classList.add('mobile-navigation-header');

    const mainHeader = document.createElement('div');
    mainHeader.classList.add('main-header');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    
    const mainFooter = document.createElement('div');
    mainFooter.classList.add('main-footer');


    // Testing DOM content:
    console.log(content);
    console.log(navigationHeader);
    console.log(mainHeader);
    console.log(mainContent);
    console.log(mainFooter);
    console.log("\n");

    // content appending items
    content.appendChild(navigationHeader);
    content.appendChild(mobileNavigationHeader);
    content.appendChild(mainHeader);
    content.appendChild(mainContent);
    content.appendChild(mainFooter);

    NavigationContent();
    MobileNavigationContent();
    MainFooterContent();
}

// NavigationContent(): The navigation content above the header.
function NavigationContent(){
    const navigationHeader = document.querySelector('.navigation-header');
    const logo = document.createElement('img');
    const homeButton = document.createElement('button');
    const projectsButton = document.createElement('button');
    const streamingButton = document.createElement('button');
    const aboutUsButton = document.createElement('button');
    const contactUsButton = document.createElement('button');
    const donateButton = document.createElement('button');

    // logo.src = tribesStudioLogoA2;
    homeButton.innerHTML = 'Home';
    projectsButton.innerHTML = 'Projects';
    streamingButton.innerHTML = 'Streaming';
    aboutUsButton.innerHTML = 'About Us';
    contactUsButton.innerHTML = 'Contact Us';
    donateButton.innerHTML = 'Donate';
    
    // Create navigation header items.
    for (let i = 0; i < 7; i++)
    {
        const navigationHeaderItems = document.createElement('div');
        navigationHeader.appendChild(navigationHeaderItems);
    }
    navigationHeader.childNodes[0].appendChild(logo);
    navigationHeader.childNodes[1].appendChild(homeButton);
    navigationHeader.childNodes[2].appendChild(projectsButton);
    navigationHeader.childNodes[3].appendChild(streamingButton);
    navigationHeader.childNodes[4].appendChild(aboutUsButton);
    navigationHeader.childNodes[5].appendChild(contactUsButton);
    navigationHeader.childNodes[6].appendChild(donateButton);
}

// MobileNavigationContent(): Navigation header for a minimized desktop page, mobile devices, and tablet devices.
function MobileNavigationContent(){
    // mobile navigation header
    const mobileNavigationHeader = document.querySelector('.mobile-navigation-header');

    // mobile dropdown image
    const mobileDropdownImage = document.createElement('img');
    mobileDropdownImage.src = dropdownMenu;

    // mobile dropdown menu
    const mobileDropdownMenu = document.createElement('div');
    mobileDropdownMenu.classList.add('mobile-drop-down-menu');
    mobileDropdownMenu.classList.add('hide-window');
    for (let i = 0; i < 5; i++)
    {
        const mobileDropdownMenuItems = document.createElement('div');
        mobileDropdownMenu.appendChild(mobileDropdownMenuItems);
    }
    const mobileProjectsButton = document.createElement('button');
    mobileProjectsButton.innerHTML = 'Projects';
    const mobileStreamingButton = document.createElement('button');
    mobileStreamingButton.innerHTML = 'Streaming';
    const mobileAboutUsButton = document.createElement('button');
    mobileAboutUsButton.innerHTML = 'About Us';
    const mobileContactUsButton = document.createElement('button');
    mobileContactUsButton.innerHTML = 'Contact Us';
    const mobileDonateButton = document.createElement('button');
    mobileDonateButton.innerHTML = 'Donate';
    mobileDropdownMenu.childNodes[0].appendChild(mobileProjectsButton); 
    mobileDropdownMenu.childNodes[1].appendChild(mobileStreamingButton);
    mobileDropdownMenu.childNodes[2].appendChild(mobileAboutUsButton);
    mobileDropdownMenu.childNodes[3].appendChild(mobileContactUsButton);
    mobileDropdownMenu.childNodes[4].appendChild(mobileDonateButton);

    mobileDropdownImage.addEventListener('click', ()=>{
        mobileDropdownMenu.classList.remove('hide-window');
        mobileDropdownMenu.classList.add('drop-down-initiated');
    });

    window.onclick = function(e){
        console.log('User Clicks'); // Testing
        if (!e.target.matches('.mobile-navigation-header > div:nth-child(1) img[src]'))
        {
            if (mobileDropdownMenu.classList.contains('drop-down-initiated'))
            {
                mobileDropdownMenu.classList.remove('drop-down-initiated');
                mobileDropdownMenu.classList.add('hide-window');
            }
        }
    }

    // mobile dropdown logo
    const mobileLogo = document.createElement('img');

    const mobileNavigationHeaderItemOne = document.createElement('div');
    const mobileNavigationHeaderItemTwo = document.createElement('div');

    mobileNavigationHeaderItemOne.appendChild(mobileDropdownImage);
    mobileNavigationHeaderItemOne.appendChild(mobileDropdownMenu);
    mobileNavigationHeaderItemTwo.appendChild(mobileLogo);

    mobileNavigationHeader.appendChild(mobileNavigationHeaderItemOne);
    mobileNavigationHeader.appendChild(mobileNavigationHeaderItemTwo);
}

// MainFooterContent(): The footer content for the entire application.
function MainFooterContent(){
    const mainFooter = document.querySelector('.main-footer');


    for (let i = 0; i < 4; i++)
    {
        const mainFooterItems = document.createElement('div');
        mainFooter.appendChild(mainFooterItems);
    }
    mainFooter.childNodes[0].textContent = 'Powered by Tribes Plus +';
}