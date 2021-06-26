// Adding an image changer

// store a reference to your <img> element in the myImage variable
let myImage = document.querySelector('img');

// make this variable's onclick event handler propert equal to a function with no name ('anonymous' function)
// every time this element is clicked:
myImage.onclick = function() {
    // the code retrieves the value of the image's src attribute
    let mySrc = myImage.getAttribute('src');
    // the code uses a conditional to check if the src value is equal to the path of the original image
    if(mySrc === 'images/quokka-medium.jpg') {
        /* if it is, the code changes the src value to the path of the second image
        forcing the other image to be loaded inside the <img> tag */
        myImage.setAttribute('src', 'images/quokka-smiling-medium.jpg');
        /* if it isn't (meaning it must already have changed), the src value swaps back to the 
        original image path, to the original state*/
    } else {
        myImage.setAttribute('src', 'images/quokka-medium.jpg');
    }
} 

// Adding a personalised welcome message

// takes references to the new button and the heading, storing each inside variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function to set the personlised greeting
function setUserName() {
    /* prompt() displays a dialog box similar to alert()
    it asks the user to enter data, and stores it in a variable after the user clicks 'OK' */
    let myName = prompt('Please enter your name.');
    // if my name has NO value, run setUserName() again from the start
    if(!myName) {
        setUserName();
    /* if it does have a value, i.e. the above statement is not True, then store the value in 
    localStorage and set it as the heading's text
    */
    } else {
        /* call on an API localstorage, which allows us to store data in the browser and retrieve it later;
        use localstorage's setItem() function to create and store a data item called 'name' and
        set its value to the myName variable which contains the user's entry for the name */
        localStorage.setItem('name', myName);
        // set the textContent of the heading to a string, plus the user's newly stored name
        myHeading.textContent = 'Welcome to Musiglo, ' + myName + '!';
    }
}

// initialisation code: it structures the app when it first loads

/* first line uses the negation operator (logical not, represented by the !) to check whether
the name data exists*/
if(!localStorage.getItem('name')) {
    // if not, the setUserName() function runs to create it
    setUserName();
    // if it exists, i.e. the user set a user name during a previous visit
} else {
    // we retrieve the stored name using getItem()
    let storedName = localStorage.getItem('name');
    // and set the textContent of the heading to a string plus the user's name - see setUserName()
    myHeading.textContent = 'Welcome to Musiglo, ' + storedName + '!';
}

/* put the onclick event handler on the button - when clicked, setUserName() runs -
this allows the user to enter a different name by pressing the button */
myButton.onclick = function() {
    setUserName();
}