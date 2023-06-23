let viewMeButton = document.getElementById("clickToViewButton");
let aboutMe = document.getElementById("blurb");
document.getElementById("clickToHideButton").style.visibility="hidden";
aboutMe.style.visibility="hidden";
function unHide () {
    aboutMe.style.visibility="visible";
    viewMeButton.style.visibility="hidden";
    document.getElementById("clickToHideButton").style.visibility="visible";
}
function hide () {
    aboutMe.style.visibility="hidden";
    viewMeButton.style.visibility="visible";
    document.getElementById("clickToHideButton").style.visibility = "hidden";
}
viewMeButton.onclick =unHide;
document.getElementById("clickToHideButton").onclick=hide;