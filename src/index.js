///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: index.js
// Description: This is the main index javascript file for this application.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { LoadDOMContent } from "./DOM-Content";
import { LoadHome, CurrentHomeModuleButton } from "./home";

console.log("Main index initailized...");

LoadDOMContent();
LoadHome();

// NavSelection(): Navigation Selection Module Pattern
const NavSelection = (() => {
    const homeButton = document.querySelector('.navigation-header > div:nth-child(2) button');

    homeButton.addEventListener('click', CurrentHomeModuleButton);
})();