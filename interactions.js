let viewMeButton = document.getElementById("clickToViewButton");
let aboutMe = document.getElementById("blurb");
let aboutMeBox = document.getElementById("aboutMeBox");
aboutMeBox.style.height="5rem";
aboutMeBox.style.marginBottom="5rem";
aboutMeBox.style.width="20rem";
document.getElementById("clickToHideButton").style.visibility="hidden";
aboutMe.style.visibility="hidden";
function unHide () {
    aboutMe.style.visibility="visible";
    viewMeButton.style.visibility="hidden";
    aboutMeBox.style.height="";
    aboutMeBox.style.width="";
    document.getElementById("clickToHideButton").style.visibility="visible";
}
function hide () {
    aboutMe.style.visibility="hidden";
    aboutMeBox.style.height="5rem";
    aboutMeBox.style.width="20rem";
    viewMeButton.style.visibility="visible";
    document.getElementById("clickToHideButton").style.visibility = "hidden";
}
viewMeButton.onclick =unHide;
document.getElementById("clickToHideButton").onclick=hide;