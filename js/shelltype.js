'use strict';

function typeWriter(el, two) {
    const textArray = document.getElementById(el).innerHTML.split('');
    document.getElementById(el).innerHTML = '';  // Clear initial text
    document.getElementById(two).innerHTML = ''; // Clear second element text

    // Type the text letter by letter
    textArray.forEach((letter, i) =>
        setTimeout(() => (document.getElementById(el).innerHTML += letter), 95 * i)
    );

    // After finishing the first part, type Andrew Lee in the second element
    setTimeout(() => outPrint(two), 95 * textArray.length + 50);
}

function outPrint(two) {
    const outArray = ['A', 'n', 'd', 'r', 'e', 'w', ' ', 'L', 'e', 'e'];
    
    // Type "Andrew Lee" letter by letter in the second element
    outArray.forEach((letter, i) =>
        setTimeout(() => (document.getElementById(two).innerHTML += letter), 20 * i)
    );
}

window.onload = function () {
    //run on load
    typeWriter('shelltype', 'whoamiName');
   let intervalId = setInterval(() => {
    // Check if the first element's content is completely typed
    if (document.getElementById('shelltype').innerHTML === '') {
        clearInterval(intervalId); // Prevent running if it is already typing
    } else {
        typeWriter('shelltype', 'whoamiName');
    }
}, 7000);  
};