const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");
const mousemove = document.querySelector('.mousemove');
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const menu = document.getElementById("menu");
// console.log(menu);
const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
const select = document.querySelector("select");
// console.log(select);
const form = document.querySelector("form");
let pseudo = "";
let language = "";
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
//Evenement sur les inputs
// Form Event



inputName.addEventListener("input",
  (e) => {
    pseudo = e.target.value;

  });
select.addEventListener("input",
  (e) => {
    language = e.target.value;

  });
form.addEventListener("submit",
  (e) => {
    e.preventDefault();

    if (cgv.checked) {
      document.querySelector('form>div').innerHTML = `
       <h3>Pseudo : ${pseudo}</h3>
        <h4>langage préféré : ${language}</h4>
        `;
    } else {
      alert("Veuilez acceptez les CGV");
    }
  });

//------------------------------------------
//Load event
window.addEventListener(
  "load", () => {
    // console.log("Document chargé !");
  });
//------------------------------------------
//ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener(
    "click",
    () => {
      box.style.transform = "scale(0.7)";
    });
});


//------------------------------------
//BOM
//-----------------------------------
// console.log(window.innerHeight);
// console.log(window.scrollX);


//Confirm
btn2.addEventListener(
  "click",
  () => {
    confirm("Voulez-vous vraiment vous tromper ?");
  });


//prompt
btn1.addEventListener(
  "click",
  () => {
    let answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML += `
      <h3> <b>Bravo ${answer} </b>  </h3> `;
  });
// Timer: compte à rebours 
// setTimeout : Temps en miliseconde avant de declencher 

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";

}, 2000);

// setInterval(() => {
//   document.body.innerHTML += `
//   <div class="box">
//   <h2> Nouvelle boite ! </h2>
//   </div>`;
// }, 1000);

// setInterval()--------
//-----------------------------------
let interval = setInterval(() => {
  // document.body.innerHTML += `
  // <div class="box">
  // <h2> Nouvelle boite ! </h2>
  // </div>`;
}, 300000);

// clearInterval()--------
//-----------------------------------
document.body.addEventListener(
  "click",
  (e)=>{
    // console.log(e.target);
    // clearInterval(interval);
});

// remove()--------
//-----------------------------------
document.body.addEventListener(
  "click",
  (e)=>{
    // e.target.remove();
    clearInterval(interval);
});
//Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
  // location.replace("https://www.hostinger.com/");

   window.onload = ()=>{
      // location.href ="https://www.hostinger.com/";
    }  
    // console.log(navigator.userAgent);  
    
    // History
    // console.log(window.history);
    window.history.back();
    history.go(-2);
    
  
  
 

     