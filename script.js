AOS.init();

particlesJS.load('particles-js','https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');

const words=["AI Developer","Data Analyst","Web Developer"];

let i=0;
let timer;

function typingEffect(){

let word=words[i].split("");

var loopTyping=function(){

if(word.length>0){

document.getElementById('typing').innerHTML+=word.shift();

}else{

deletingEffect();

return false;

};

timer=setTimeout(loopTyping,120);

};

loopTyping();

}

function deletingEffect(){

let word=words[i].split("");

var loopDeleting=function(){

if(word.length>0){

word.pop();

document.getElementById('typing').innerHTML=word.join("");

}else{

if(words.length>(i+1)){

i++;

}else{

i=0;

};

typingEffect();

return false;

};

timer=setTimeout(loopDeleting,60);

};

loopDeleting();

}

typingEffect();


function openPopup(){

document.getElementById("popup").style.display="flex";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}