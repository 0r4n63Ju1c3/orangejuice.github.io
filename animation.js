'use strict';

function typeWriter(el, two) {
    const textArray = document.getElementById(el).innerHTML.split('');
    document.getElementById(el).innerHTML = '';
    document.getElementById(two).innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (document.getElementById(el).innerHTML += letter), 95 * i)
    );
    setTimeout(() => outPrint(two), 95 * textArray.length + 50);
}

function outPrint(two){
    const outArray = ['A','n','d','r','e','w', ' ', 'L', 'e', 'e']
    outArray.forEach((letter, i) =>
        setTimeout(() => (document.getElementById(two).innerHTML += letter), 20 * i)
    );
}

//window.onload is not needed anymore
typeWriter('shelltype', 'one');
