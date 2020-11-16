let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let nameHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Enter your name:');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        nameHeading.textContent = 'Welcome, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    nameHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {setUserName();}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/earth.png') {
      myImage.setAttribute('src','images/desat_earth.png');
    } else {
      myImage.setAttribute('src','images/earth.png');
    }
}