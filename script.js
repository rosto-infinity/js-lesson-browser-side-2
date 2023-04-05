const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");
const mousemove = document.querySelector('.mousemove');
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const menu = document.getElementById("menu");
// console.log(menu);

questionContainer.style.border = "5px dashed red";
questionContainer.style.borderRadius = "10px";
questionContainer.addEventListener(
  "click", () => {
    questionContainer.classList.toggle('question-click')
  });
//---------------------click --------------- 
btn1.addEventListener(
  "click", () => {
    btn1.style.background = 'green';
    response.style.background = 'green';
    response.classList.add('show-response');
  });
btn2.addEventListener(
  "click", () => {
    btn2.style.background = 'red';
    response.style.background = 'red';
    response.classList.add('show-response');

  });
//--------------------------
// Mouvement de la souris 
//------mousemove-----
window.addEventListener('mousemove',
  (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
  });
//------mousedown --------
window.addEventListener('mousedown',
  () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  });
//---------mouseup --------
window.addEventListener('mouseup',
  () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  });
//-------mouseenter -------
questionContainer.addEventListener(
  "mouseenter", () => {
    questionContainer.style.background = "pink";
  });
//------------mouseout ------
questionContainer.addEventListener(
  "mouseout", () => {
    questionContainer.style.background = "rgba(0,0,0,0.3)";
  });
//-------------mouseover -------
response.addEventListener('mouseover',
  () => {
    response.style.transform = "rotate(1deg)";
  });
//--------------------------
// KeyPress event
document.addEventListener("keypress",
  (e) => {
    // console.log(e);
    // console.log(e.key);
    key.textContent = e.key;

    if (e.key === "j") {
      keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
      keypressContainer.style.background = "teal";
    } else {
      keypressContainer.style.background = "red";
    }
  });
//--------------------------
// Scroll Event
window.addEventListener("scroll",
  () => {
    // console.log(window.scrollY);
    if (window.scrollY > 110) {
      menu.style.top = 0;
    } else {
      menu.style.top = "-50px";
    }
  });