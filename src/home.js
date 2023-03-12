///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: home.js
// Description: This is the home file for the application.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import lavileHuntThree from '../src/images/Lavile-Hunt-3.png';
import tempWebsiteBrandImage from '../src/images/Website-Header-Image-Cropped.png';

// CreateContentItems Factory: Will create and control the content items in the maincontent section for the home page.
const CreateContentItems = () =>{
    const mainContent = document.querySelector('.main-content');

    // MainContentColumnOne: Create items for column one in the main content section.
    const CreateMainContentColumnOne = () =>{
        const mainContentColOne = document.createElement('div'); 
        mainContentColOne.classList.add('main-content-col-one');
        const mainContentButtonOne = document.createElement('button');
        mainContentButtonOne.innerHTML = 'Join The Journey';

        const mainContentColOneItem = document.createElement('div');
        mainContentColOneItem.textContent = 'Welcome To Tribes';
        mainContentColOneItem.appendChild(mainContentButtonOne);
        mainContentColOne.appendChild(mainContentColOneItem);

        mainContent.appendChild(mainContentColOne); 
    }

    // MainContentColumnTwo: Create items for column two in the main content section.
    const CreateMainContentColumnTwo = () => {
        const mainContentColTwo = document.createElement('div');
        mainContentColTwo.classList.add('main-content-col-two');

        //Note: Column two will be news section for the main content section.
        for(let i = 0; i < 7; i++){
            const mainContentColTwoItems = document.createElement('div');
            mainContentColTwo.appendChild(mainContentColTwoItems);
        }
        console.log(`Testing the main content column two length: ${mainContentColTwo.childElementCount}`); // Testing
        for(let i = 1; i < mainContentColTwo.childElementCount; i++){
            for (let j = 0; j < 3; j++){
                const insideMainContentTwoItem = document.createElement('div');
                mainContentColTwo.childNodes[i].appendChild(insideMainContentTwoItem);
            }
        }
        mainContentColTwo.childNodes[0].textContent = "News";

        // Testing: Date testing for each news date section.
        // Will have to input my own custom dates since the Date() method will produce a 
        // new date for every section.
        const newsDateOne = new Date();
        console.log(`Testing News Date One: ${newsDateOne}`); // Testing
        console.log(`Testing News Year: ${newsDateOne.getFullYear()}`); // Testing
        console.log(`Testing News Month: ${newsDateOne.getMonth() + 1}`); // Testing
        console.log(`Testing News Day: ${newsDateOne.getDate()}`); // Testing
        mainContentColTwo.childNodes[1].childNodes[0].textContent = 'March-6-2023';
        mainContentColTwo.childNodes[1].childNodes[1].textContent = `Information and details about our first project, The Electronic One, can be found on its
        developer preview page. It is still a conceptual design project at this point, but our vision is to turn this project into a visual immersive piece of art
        with full scale gameplay. The developer link below is all you need to click on in regard to the project.`;
        const developerPreview = document.createElement('button');
        developerPreview.classList.add('news-developer-preview');
        developerPreview.innerHTML = 'The Electronic One';
        mainContentColTwo.childNodes[1].childNodes[2].appendChild(developerPreview);

        mainContentColTwo.childNodes[2].childNodes[0].textContent = 'March-11-2023';
        mainContentColTwo.childNodes[2].childNodes[1].textContent = `Our commitment to technology and creative development is one our main focuses at Tribes Plus.`;
        const tribesPlus = document.createElement('button');
        tribesPlus.classList.add('news-tribes-plus');
        tribesPlus.innerHTML = 'Tribes Plus +';
        mainContentColTwo.childNodes[2].childNodes[2].appendChild(tribesPlus);
    
        mainContent.appendChild(mainContentColTwo);
    }

    return {CreateMainContentColumnOne, CreateMainContentColumnTwo};
}

// CurrentModuleButton(): Highlights the current module button.
export function CurrentHomeModuleButton(){
    console.log("You are on the home page..."); // Testing
    const homeButton = document.querySelector('.navigation-header > div:nth-child(2) button');
    homeButton.classList.add('current-module');
}

// MainHeader(): Main header section for the home page. 
function MainHeader(){
    const mainHeader = document.querySelector('.main-header');

    const mainHeaderImage = document.createElement('img');
    mainHeaderImage.src = lavileHuntThree;

    mainHeader.appendChild(mainHeaderImage);
}

// TempHeader(): Temp header will display temporary info for the header if there is an image. 
function TempHeader(){
    const mainHeader = document.querySelector('.main-header');

    const tempHeader = document.createElement('div');
    tempHeader.classList.add('temp-header');

    mainHeader.appendChild(tempHeader);
    
    for (let i = 0; i < 3; i++)
    {
        const tempHeaderItems = document.createElement('div');
        tempHeader.appendChild(tempHeaderItems);
    }

    tempHeader.childNodes[0].textContent = 'The Electronic One';
    tempHeader.childNodes[1].textContent = 'The one who claims System, claims the beginning and the end.';
    
    const tempHeaderButton = document.createElement('button');
    tempHeaderButton.innerHTML = "Developer Preview";
    tempHeader.childNodes[2].appendChild(tempHeaderButton);
}

// MainContent(): Main Content for the home page.
function MainContent(){
    const mainContentColumns = CreateContentItems();
    mainContentColumns.CreateMainContentColumnOne();
    mainContentColumns.CreateMainContentColumnTwo();
}

// LoadHome(): Loads the home page.
export function LoadHome(){
    CurrentHomeModuleButton();
    MainHeader();
    TempHeader();

    MainContent();
}