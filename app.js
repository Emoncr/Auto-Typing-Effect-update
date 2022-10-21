const textEl = document.querySelector(".text_container");
const otherProff = ['Web-desiner','Web-devoloper', 'Engineer', 'Singer' ]
let otherProffIndex = 0;
let characterIndex = 0

dynamicText();

function dynamicText() {
    characterIndex++
    textEl.innerHTML=`
    <h1>I am a <span>${otherProff[otherProffIndex].slice(0,characterIndex)}</span></h1>
    `
    if(characterIndex === otherProff[otherProffIndex].length){
        otherProffIndex++
        characterIndex =0
    }
    if(otherProffIndex === otherProff.length){
        otherProffIndex= 0
    }
    setTimeout(dynamicText, 300);
};