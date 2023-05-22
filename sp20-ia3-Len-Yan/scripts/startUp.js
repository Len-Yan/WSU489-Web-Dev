//Start-up functions run when page is loaded.
//1. Include the HTML snippets:
includeHTML();
//2. Define global vars and function bindings
//Set up UI state
var menuOpen = false; //Boolean variable to capture the state of the side menu.
var mode = "loginMode"; //Variable captures current UI mode

//Associative array maps modes to page titles
var modeToTitle = {
    //TO DO: Fill in
    "editmode":"My Data",
    "mode2":"Something",
    "loginMode": "Welcome to Assignemnt Tracker"
};
var modes = ["loginMode","editmode","mode2"];

var pageLocked = false;

//Bind bottomBarBtnClick function to all elements of class bottomBarBtn
var bottomBtns = document.getElementsByClassName("bottomBarBtn");
for (var i = 0; i < bottomBtns.length; ++i) {
    bottomBtns[i].addEventListener("click",bottomBarBtnClick);
}

//Bind closeAbout function to all elements of class close
var closeBtns = document.getElementsByClassName("close");
for (var i = 0; i < closeBtns.length; ++i) {
    closeBtns[i].addEventListener("click",closeAbout);
}

//Execute function to set start state of app
startUp();