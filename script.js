window.onload = function () {
    var myForm = document.getElementById("myForm");
    // var button11 = document.getElementById("button11");
    var results = document.getElementById("results");
    var myButton = document.getElementById("myButton");
    var welcomePage = document.getElementById("Wellcomepage");
    var submitBtn = document.getElementById("submit");
    var results = document.getElementById("results");
    var addBtn = document.getElementById("add");
    var button = document.getElementById("button"); // Ensure this exists
    var age02 = document.getElementById("age02"); // Ensure this exists
    var age1 = document.getElementById("age1"); 
    var age0 = document.getElementById("age"); 
    var age01 = document.getElementById("age01"); 
    var age05 = document.getElementById("age05"); 
    var text1 = document.getElementById("text1"); 

    // Hide elements initially
    if (myForm) myForm.style.display = "none";
    if (results) results.style.visibility = "hidden"
    if (text1) text1.style.display = "none"
    if (button) button.style.display = "none";

    // Hide button initially
    if (button) button.style.visibility = "hidden";

    // Show form on button click
    if (myButton) {
        myButton.onclick = function () {
            if (myForm) myForm.style.display = "block";
            if (welcomePage) welcomePage.style.display = "none";
            myButton.style.display = "none";
        };
    }

    // Submit button functionality
    if (submitBtn) {
        submitBtn.onclick = function () {
            if (myForm) myForm.style.display = "none";
            if (button) button.style.display = "block";
            if (age02) age02.style.visibility = "visible"; // Ensure the element exists before setting visibility
            hideButton();
        };
    }
};

// Function to show results
function myFunction() {
    var results = document.getElementById("results");
    if (results) results.style.visibility ="hidden";
}

// Dummy hideButton function to prevent errors
function hideButton() {
    var button = document.getElementById("button");
    if (button) button.style.visibility = "hidden";
}

// gender boy
if (age0) {
    age0.onclick = function () {
        if (age28) age28.style.visibility ="visible";
        if (age27) age27.style.visibility ="hidden";
    };
}

// gender girl
if (age01) {
    age01.onclick = function () {
        if (age27) age27.style.visibility ="visible";
        if (age28) age28.style.visibility ="hidden";
    };
}


// tiny tots
if (age05) {
    age05.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// 20s
if (age04) {
    age04.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// 6b
if (age1) {
    age1.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 7b
if (age2) {
    age2.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 8b
if (age3) {
    age3.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 9b
if (age4) {
    age4.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 10b
if (age5) {
    age5.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 11b
if (age6) {
    age6.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 12b
if (age7) {
    age7.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 13b
if (age8) {
    age8.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 14b
if (age9) {
    age9.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 15b
if (age10) {
    age10.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 15b
if (age11) {
    age11.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 15b
if (age12) {
    age12.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}

// / 15b
if (age13) {
    age13.onclick = function () {
        if (text1) text1.style.visibility = "visible";
        if (results) results.style.visibility ="visible";
        if (age05) age05.style.visibility = "hidden";
        if (age04) age04.style.visibility = "hidden";
        if (age01) age01.style.visibility = "hidden";
        if (age0) age0.style.visibility = "hidden";
        if (age03) age03.style.visibility = "hidden";
        if (age27) age27.style.visibility ="hidden";
        if (age28) age28.style.visibility ="hidden";
    };
}