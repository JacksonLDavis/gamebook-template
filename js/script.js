// Code written by Jackson L. Davis

// when index.html is opened, show the first page
let initialPage = "intro"
showPage(initialPage)

/**
 * Shows the specified page
 * 
 * @param {string} pageName: the ID of the page to show, page IDs must be unique
 */
function showPage(pageName) {
    let pages = document.getElementsByClassName("page");

    // hide all pages
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // show the current page
    let pageToShow = document.getElementById(pageName);
    pageToShow.style.display = "block";
}
