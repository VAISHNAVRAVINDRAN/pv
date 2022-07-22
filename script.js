const left_arrow = document.getElementById("left");
const right_arrow = document.getElementById("right");
var carousel_length = document.querySelector(".top-projects").children.length;
var i = 1;
var j=1;
const like_nfilled = document.querySelector(".like-1-nfilled");
const like_filled = document.querySelector(".like-1-filled");
const no_likes = document.querySelector(".no-likes-1");
const follow_btn_1 = document.querySelector(".follow-btn-1");
left_arrow.addEventListener("click", left_carousel);
right_arrow.addEventListener("click", right_carousel);
like_nfilled.addEventListener("click", liked);
like_filled.addEventListener("click", nliked);
follow_btn_1.addEventListener("click", follow);
function left_carousel() {
console.log("Left Button Pressed\n"+i);
if(i<=carousel_length) {
if(i==0) {
i=1;
}
var n = ".top-projects :nth-child("+i+")";
const div = document.querySelector(n);
div.style.zIndex = 1;
console.log("Carousel Length : "+carousel_length,"\nValue Of i : "+i);
if(i==0) {
i=1;
}else {
i--;
}
}
}
function right_carousel() {
console.log("Right Button Pressed\n");
if(i<carousel_length) {
i++;
var n = ".top-projects :nth-child("+i+")";
const div = document.querySelector(n);
div.style.zIndex = carousel_length;
console.log("Carousel Length : "+carousel_length,"\nValue Of i : "+i);
}
}
function liked() {
like_nfilled.style.display="none";
like_filled.style.display="flex";
var nli=no_likes.innerText;
no_likes.innerText=Math.floor(nli+1);
}
function nliked() {
like_filled.style.display="none";
like_nfilled.style.display="flex";
var nli=no_likes.innerText;
no_likes.innerText=Math.floor(nli-1);
}
function follow() {
follow_btn_1.innerText="Following";
follow_btn_1.addEventListener("click", unfollow);
}
function unfollow() {
follow_btn_1.innerText="Follow";
}
/*
function adding() {
var carousel_length = document.querySelector(".top-projects").children.length;
const div=document.createElement("div");
div.classList.add("hash-1");
if(carousel_length==1) {
div.style.zIndex=carousel_length;
div.setAttribute('id', 'hash-1-top');
var a=div.getAttribute('id');
console.log(div.style.zIndex,carousel_length,a);
}
else{
console.log("helo");
document.getElementById("hash-1-top").style.zIndex=carousel_length+1;
var s=div.style.zIndex=carousel_length-1;
console.log("created",s);
}
div.innerText=j++;
document.querySelector(".top-projects").appendChild(div);
}*/
