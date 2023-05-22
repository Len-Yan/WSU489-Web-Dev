//
//eventHandlers.js -- This file defines the JavaScript functions necessary to
//update the app in response to user interaction.
//

  //startUp -- This function sets up the initial state of the app: Login page is
  //visible, bottom bar is invisible, all menu items invisible except feed items,
  //menu bottom disabled, UI mode = login
  function startUp() {
    //Hide all pages except for Login Page, which is the start page.
    //TO DO: Fill in
    document.getElementById("editmode_dataPageDiv").style.display = "none";
    document.getElementById("editmode_addPageDiv").style.display = "none";
    document.getElementById("mode2_dataPageDiv").style.display = "none";
    document.getElementById("CreateIDDiv").style.display = "none";
    document.getElementById("loginModeDiv").style.display = "block";

    //Clear all text from email and password fields
    //TO DO: Fill in
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";

    //Set top bar text
    //TO DO: Fill in
    document.getElementById("topBarTitle").textContent = "Welcome to MyApp";

    //Hide the bottom bar initially
    //TO DO: Fill in
    document.getElementById("bottomBar").style.visibility = "hidden";

    //Hide all menu items except for items of current mode:
    //TO DO: Fill in


    //Disable menu button:
    //TO DO: Fill in
    document.getElementById("menuBtn").disabled = true;

    //Set current mode
    //TO DO: Fill in
    mode = "loginMode";

    //set the input focus to the email field
    //TO DO: Fill in
    document.getElementById("emailInput").focus();

    //default ste time, not really need it
    document.getElementById("dueDate").valueAsNumber = 
    Date.now()-(new Date()).getTimezoneOffset()*60000;

    //Potentially clear out the "My Rounds" table
    //Note that we aren't deleting from localStorage since we're prepping for
    //new login.
    let roundsTable = document.getElementById("AssignTable");
    if (!roundsTable.rows[1].innerHTML.includes ("colspan")) {
      //We have a non-empty table and must clear out rows
      while (roundsTable.rows.length > 1) {
        roundsTable.deleteRow(1);
      } 
      //Add new row to indicate empty table.
      let newRow = roundsTable.insertRow();
      newRow.innerHTML = "<td colspan='5' style='font-style: italic'>No Data</td>"; 
    }
  }

  //clearAssignmentForm -- Helper function that clears out data previously entered
function clearRoundForm() {
  document.getElementById("AssignmentNumber").valueAsNumber = "1";
  document.getElementById("dueDate").value = "";
  document.getElementById("AssignmentType").value = "Individule";
  document.getElementById("AssignmentScore").value = "80";
  document.getElementById("roundNotes").value = "";
}


  //document click: When the user clicks anywhere in the doc and the menu is open
  //we need to close it and toggle menu state variable.
  document.addEventListener("click",function(e) {
    if (menuOpen) {
      if(!pageLocked){
        document.getElementById("menuBtnIcon").classList.remove("fa-times"); 
        //Change hamburger to X when menu open
        document.getElementById("menuBtnIcon").classList.add("fa-bars");
      }
      document.getElementById("sideMenu").style.width = "0px"; //close menu
      menuOpen = false;
    }
});
 
//menuBtn click: When the top-left side menu button is clicked and the menu
//is closed, we need to open it and toggle menu state variable.
document.getElementById("menuBtn").addEventListener("click", function (e) {
  if (pageLocked) { //user is clicking left arrow to exit locked page
    pageLocked = false;
    //restore hamburger icon
    document.getElementById("menuBtnIcon").classList.remove("fa-arrow-left");
    document.getElementById("menuBtnIcon").classList.add("fa-bars");
    //Hide current page
    var currModePages = document.getElementsByClassName(mode);
    for (var i = 0; i < currModePages.length; ++i) {
      currModePages[i].style.display = "none"; //hide
    }
    //Show main mode page
    document.getElementById(mode + "_dataPageDiv").style.display = "block";
    //Restore main mode page title
    document.getElementById("topBarTitle").textContent = modeToTitle[mode];
    //Re-enable bottom bar buttons
    document.getElementById("bottomBar").classList.remove("disabledButton");
    e.stopPropagation();
    return;
  }
  
  if (!menuOpen) {
    document.getElementById("menuBtnIcon").classList.remove("fa-bars"); 
    //Change hamburger to X when menu open
    document.getElementById("menuBtnIcon").classList.add("fa-times");
    document.getElementById("sideMenu").style.width = "250px"; //open up menu
    menuOpen = true;
    e.stopPropagation();
  }
});   

//bottomBarBtnClick -- When a button in the bottom bar is clicked, we potentially
//need to toggle the mode.
var bottomBarBtnClick = function() {
  //TO DO: Fill in
  if (mode != this.id) {
    var prevMode = mode;
    mode = this.id;
    //Change mode button:
    document.getElementById(prevMode).classList.remove("menuItemSelected");
    this.classList.add("menuItemSelected");
    //Change page title:
    document.getElementById("topBarTitle").textContent = modeToTitle[mode];
    //Change page content
    //Hide pages from previous mode

    //hide all current page
    var currPages = document.getElementsByClassName(prevMode);
    for (var i = 0; i < currPages.length; ++i) {
      currPages[i].style.display = "none"; 
    }

    //show mainpage
    document.getElementById(mode + "_dataPageDiv").style.display = "block";

    //Change menu items:
    var oldItems = document.getElementsByClassName(prevMode + "Item");
    var newItems = document.getElementsByClassName(mode + "Item");
        for (var i = 0; i < oldItems.length; ++i) {
      oldItems[i].style.display = "none";
    }
    for (var i = 0; i < newItems.length; ++i) {
      newItems[i].style.display = "block";
    }
  }
}
 
//
document.getElementById("createBtn").onclick = function(e){
  document.getElementById("loginModeDiv").style.display = "none";
  document.getElementById("CreateIDDiv").style.display = "block";
  document.getElementById("menuBtn").disabled = true;
  document.getElementById("confirmBtn").onclick = function(e) {
  startUp();
  alert("app may broke after now()");
  };
}



/*
//new user
document.getElementById("confirmBtn").onclick = function (e) {
  e.preventDefault();
  document.getElementById("saveIcon").classList.add("fas", "fa-spinner", "fa-spin");
  var pass = document.getElementById("newPassword").value;
  var pass2 = document.getElementById("rePassword").value;
  if (pass != pass2) {
    alert("Please make sure you enter same password in both password box");
  } 
}
*/

/*
document.getElementById("loginBtn").onclick = function(e){
  alert("Password must contain at least 1 upercase, 1 lower case and 1 number of 8 to 15 digets long ");
}
*/

//login -- This function sets the initial app state after login. It is called
//from setTimeout after the button spinner has commenced.bottombar
function login() {
  //Stop spinner
 //TO DO: Fill in
  document.getElementById("loginBtnIcon").classList.remove("fas","fa-spinner","fa-spin");
  //Enable menu button:
  //TO DO: Fill in
  document.getElementById("menuBtn").disabled = false;
  //Show bottom bar buttons and highlight feed mode button
  //TO DO: Fill in
  document.getElementById("bottomBar").style.visibility = "visible";
  document.getElementById("editmode").classList.add("menuItemSelected");
  document.getElementById("mode2").classList.remove("menuItemSelected");

  mode = "editmode"
  //Change title bar to that of app start page
  //TO DO: Fill in
  document.getElementById("topBarTitle").textContent = modeToTitle[mode];
  //Show only the menu items for current mode
  //TO DO: Fill in
  //var modeItems = document.getElementsByClassName("editmodeItem");

  var username = document.getElementById("emailInput").value;
  document.getElementById("userID").textContent = username.split("@")[0];
  

  //hide login screen and show feed screen
  //TO DO: Fill in
  document.getElementById("loginModeDiv").style.display = "none";
  document.getElementById("editmode_dataPageDiv").style.display = "block";

  //Set mode to current mode
  //TO DO: Fill in
  var feedItems = document.getElementsByClassName(mode + "Item");
  for (var i = 0; i < feedItems.length; ++i) {
    feedItems[i].style.display = "block";
  }

  //local store
  let thisUser = document.getElementById("emailInput").value;
  localStorage.setItem("userName",thisUser);
  //check data
  let data = localStorage.getItem("AssignmentUserData");
  if (data == null) { 
    //No user app data stored yet -- create blank record for current user
    localStorage.setItem("AssignmentUserData",
      JSON.stringify({thisUser : {"rounds" : {}, "roundCount": 0}}));  
  } else {
    //app data exists -- check if data exists for thisUser
    data = JSON.parse(data);
    if  (!data.hasOwnProperty(thisUser)) { 
      //No data for this user -- create empty data
      data[thisUser] = {"rounds": {}, "roundCount": 0}; 
      localStorage.setItem("AssignmentUserData",JSON.stringify(data));
    }
    else{
      for (const round in data[thisUser].rounds){
        addToOrUpdateRoundTable(true, data[thisUser].rounds[round].roundNum);
      }
    }
  }
}

//loginInterface submit: When the login button is clicked, we rely on form
//pattern matching to ensure validity of username and password. To log in, we
//switch the mode to "feedMode" and make the necessary UI and state changes.

document.getElementById("loginInterface").onsubmit = function(e) {
  //Start spinner:
  document.getElementById("loginBtnIcon").classList.add("fas","fa-spinner","fa-spin");
  setTimeout(login,1000);
  e.preventDefault(); //Prevents form refresh -- the default behavior
};
  
//Menu Buttons
//About page
document.getElementById("aboutBtn").onclick = function(e) {
  document.getElementById("aboutModal").style.display = "block";
};

//closeAbout click: When the user clicks a button to cloe the modal About box, hide the
//dialog box. Note that this function is bound to the two items with class
//"close" in function startUp
function closeAbout(e) {
  document.getElementById("aboutModal").style.display = "none";
}

//logOutBtn click: When the user logs out, we need to reset the app to its start
//state, with the login page visible
document.getElementById("logOutBtn").onclick = function(e) {
  //Restore starting app state
  startUp();
};

//logRoundForm SUBMIT: When the user clicks the "Save" button to save a newly
//entered speedgolf round, we need to save it to local storage
document.getElementById("logAssignmentForm").onsubmit = function(e) {
  e.preventDefault(); //We do NOT want the button to trigger a page reload!
  //Start spinner
  document.getElementById("saveIcon").classList.add("fas", "fa-spinner", "fa-spin");
  //Set spinner to spin for one second, after which saveRoundData will be called
  setTimeout(saveRoundData,1000);
}

/*
//new user
document.getElementById("newAccount").onsubmit = function(e) {
  e.preventDefault(); //We do NOT want the button to trigger a page reload!
  document.getElementById("saveIcon").classList.add("fas", "fa-spinner", "fa-spin");
  alert("not able to save yet");
}
*/

//saveRoundData -- Callback function called from logRoundForm's submit handler.
//Stops the spinner and then saves the entered round data to local storage.
function saveRoundData() {

  //Stop spinner
  document.getElementById("saveIcon").classList.remove("fa-spinner", "fa-spin");

  //Retrieve from localStorage this user's rounds and roundCount
  let thisUser = localStorage.getItem("userName");
  let data = JSON.parse(localStorage.getItem("AssignmentUserData"));

  //Initialize empty JavaScript object to store this new round
  let thisRound = {}; //iniitalize empty object for this round
  let temp; //temporary value for storying DOM elements as needed

  //Store the data
  thisRound.assign = document.getElementById("AssignmentNumber").value; 
  thisRound.date = document.getElementById("dueDate").value;
  temp = document.getElementById("AssignmentType");
  thisRound.type = temp.options[temp.selectedIndex].value;
  thisRound.score = document.getElementById("AssignmentScore").value;
  thisRound.notes = document.getElementById("roundNotes").value;

  //Determine whether we're saving new or editing existing round, saving accordingly
  let savetext = document.getElementById("savetext").textContent;
  let addNew;

  if(savetext == "Save Assignment Data"){
    addNew = true;
    thisRound.roundNum = ++(data[thisUser].roundCount);
    data[thisUser].rounds[thisRound.roundNum] = thisRound;
  }
  else{
    addNew = false;
    thisRound.roundNum = Number(localStorage.getItem("roundIndex")); 
  }

  //Add this round to associative array of rounds
  data[thisUser].rounds[thisRound.roundNum] = thisRound;

  //Commit updated user data to app data in local storage
  localStorage.setItem("AssignmentUserData",JSON.stringify(data));

 //Go back to "My Rounds" page by programmatically clicking the menu button
 document.getElementById("menuBtn").click();

 //Clear form to ready for next use
 clearRoundForm();
 addToOrUpdateRoundTable(addNew, thisRound.roundNum);
}

//addToOrUpdateRoundTable -- Helper function that adds a new round with unique index
//roundIndex to the "My Rounds" table. The round is a "condensed view" that
//shows only the date, course and score for the round, together with buttons to
//view/edit the detailed round data and delete the round data.
function addToOrUpdateRoundTable(add, roundIndex) {
  let data = JSON.parse(localStorage.getItem("AssignmentUserData"));
  let user = localStorage.getItem("userName");
  let roundData = data[user].rounds[roundIndex]; //the round data to add/edit
  let roundsTable = document.getElementById("AssignTable");
  let roundRow;

  //console.log(add);
  if (add) { //add new row
    //Test whether table is empty
    if (roundsTable.rows[1].innerHTML.includes ("colspan")) {
      //empty table! Need to remove this row before adding new one
      roundsTable.deleteRow(1);
     }
     roundRow = roundsTable.insertRow(1); //insert new row
     roundRow.id = "r-" + roundIndex; //set id of this row so we can edit/delete later per user input
  } else { //update existing row
    roundRow = document.getElementById("r-" + roundIndex);
  }
  //Add/update row with five cols to table
  roundRow.innerHTML = "<td>" + roundData.assign + "</td><td>" +
   roundData.date + "</td><td>" + roundData.type + "</td><td>" +
   roundData.score +
   "<td><button onclick='editRound(" + roundIndex + ")'><span class='fas fa-eye'>" +
   "</span>&nbsp;<span class='fas fa-edit'></span></button></td>" +
   "<td><button onclick='confirmDelete(" + roundIndex + ")'>" +
   "<span class='fas fa-trash'></span></button></td>";
}

//editRound: Event handler called when "View/Edit" button clicked in "My Rounds"
//table. roundIndex indicates the index of the round that was clicked. Grab
//the round data from local storage, fill it into the edit form and transition
//to the view/edit round page.
function editRound(roundIndex) {
  //Grab appropriate round to view/edit from localStorage
  let data = JSON.parse(localStorage.getItem("AssignmentUserData"));
  let user = localStorage.getItem("userName");
  
  //Pre-populate form with round data
  fillRoundForm(data[user].rounds[roundIndex]);

  //Set local storage var to index of round being edited. This will allow us to
  //save updated data to correct round when the user clicks "Update Round Data"
  localStorage.setItem("roundIndex",roundIndex);

  //Transition to round view/edit page with "Update" label for form submit button
  document.getElementById("savetext").textContent = "Update Assignment";
  transitionToLockedPage("editmode_addPageDiv","View/Edit");
}

//transitionToLockedPage: Take the user to a locked page that is subsidiary to
//the main mode page. The new page is identified by lockedPageId and should have
//the title lockedPageTitle. Note: Any other tweaks to the locked page (e.g., 
//changing of button labels or hiding/showing of input fields and controls) must
//be done manually before or after calling this function.
function transitionToLockedPage(lockedPageId, lockedPageTitle) {
  //Swap pages:
  document.getElementById(mode + "_dataPageDiv").style.display = "none";
  document.getElementById(lockedPageId).style.display = "block";
  //Change page title:
  document.getElementById("topBarTitle").textContent = lockedPageTitle;
  //Set pageLocked to true, thus indicating that we're on a page that may only
  //be exited by clicking on the left arrow at top left
  pageLocked = true;
  //When pageLocked is true, the menu  icon is the left arrow
  document.getElementById("menuBtnIcon").classList.remove("fa-times");
  document.getElementById("menuBtnIcon").classList.remove("fa-bars");
  document.getElementById("menuBtnIcon").classList.add("fa-arrow-left");
  //When pageLocked is true, the bottom bar buttons are disabled
  document.getElementById("bottomBar").classList.add("disabledButton");
 }

//fillRoundForm -- When the user chooses to view/edit an existing round, we need
//to fill the round form with the corresponding round data and provide the
//option to update the data
function fillRoundForm(round) {
  document.getElementById("AssignmentNumber").value = round.assign;
  document.getElementById("dueDate").value = round.date;
  document.getElementById("AssignmentType").value = round.type;
  document.getElementById("AssignmentScore").value = round.score;
  document.getElementById("roundNotes").value = round.notes;
}

//confirmDelete: Event handler called when "Delete" button clicked in "My Rounds"
//table. roundIndex indicates the index of the round tht was clicked. We presenta
//modal dialog box asking user to confirm the deletion. The confirm button event
//handler calls on the function deleteRound, which does the deletion.
function confirmDelete(roundIndex) {
  //Preserve index of round to delete for deleteRound function
  localStorage.setItem("pendingDelete",roundIndex); 
  //Show the modal dialog box
  document.getElementById("deleteModal").style.display = "block";
}

//cancelDelete: Event handler called when "No, do not delete" button clicked in
//the confirm delete modal dialog. In this case, we simply hide the dialog box
//aclear out the "pendingDelete" local storage item
function cancelDelete() {
  localStorage.setItem("pendingDelete","");
  document.getElementById("deleteModal").style.display = "none";
}

//deleteRound: Event handler called when "Yes, delete round" button clicked in
//confirm delete dialog box. We fetch the index of round to delete from local
//storage and delete the corresponding row from the table and record from the
//rounds array. We also hide the dialog box.
function deleteRound() {
  //Hide modal dialog box
  document.getElementById("deleteModal").style.display = "none";
  //Grab user data from localStorage
  let data = JSON.parse(localStorage.getItem("AssignmentUserData"));
  let user = localStorage.getItem("userName");
  let roundIndex = Number(localStorage.getItem("pendingDelete"));
  let row, roundsTable, newRow;
  //delete round from rounds associative array and save back to localStorage
  delete data[user].rounds[roundIndex];
  localStorage.setItem("AssignmentUserData",JSON.stringify(data));
  //delete the row from the table
  row = document.getElementById("r-" + roundIndex);
  row.parentNode.removeChild(row);
  //If we're now down to just header row, we need to add a row saying that no
  //rounds have been added yet
  roundsTable = document.getElementById("AssignTable");
  if (roundsTable.rows.length == 1) {
    //Add new row
    newRow = roundsTable.insertRow();
    newRow.innerHTML = "<td colspan='5' style='font-style: italic'>No Data</td>"; 
  }
}


//logRoundItem click: Take the user to the log round page  
//(document.getElementById("AddDataBtn").onclick)  = function(e) {
function add(e){
  //Swap pages:
  document.getElementById("editmode_dataPageDiv").style.display = "none";
  document.getElementById("editmode_addPageDiv").style.display = "block";
  //Change page title:
  document.getElementById("topBarTitle").textContent = "Log New Assignment";
  //Set label of form button appropriately
  document.getElementById("savetext").textContent = "Save Assignment Data";
  //Set pageLocked to true, thus indicating that we're on a page that may only
  //be exited by clicking on the left arrow at top left
  pageLocked = true;
  //When pageLocked is true, the menu  icon is the left arrow
  document.getElementById("menuBtnIcon").classList.remove("fa-times");
  document.getElementById("menuBtnIcon").classList.remove("fa-bars");
  document.getElementById("menuBtnIcon").classList.add("fa-arrow-left");
  //When pageLocked is true, the bottom bar buttons are disabled
  document.getElementById("bottomBar").classList.add("disabledButton");
}

document.getElementById("AddDataBtn").onclick = function(e){ add(e);}
document.getElementById("floatbtn").onclick = function(e){ add(e);}