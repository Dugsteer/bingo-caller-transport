// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const blue = window.matchMedia("(max-width: 800px)");
const imgdiv = document.getElementById('imgdiv');
const title = document.getElementById('title');
const container = document.getElementById('container');

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);


//GENERAL SCRIPT
const bingoArray = [
  "ambulance.png",
  "balloon.png",
  "bike.png",
  "car.png",
  "coach.png",
  "digger.png",
  "ecar.png",
  "firetruck.png",
  "helicopter.png",
  "limo.png",
  "lorry.png",
  "motorbike.png",
  "plane.png",
  "sailingboat.png",
  "schoolbus.png",
  "speedboat.png",
  "submarine.png",
  "taxi.png",
  "train.png",
  "van.png",
];

  const gameboard = document.getElementById("gameboard");
  
  const newArray = [];
  
  function shuffle(bingoArray) {
    var j, x, i;
    for (i = bingoArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = bingoArray[i];
      bingoArray[i] = bingoArray[j];
      bingoArray[j] = x;
      clicker2.innerHTML = `${bingoArray.length} to go`;

    }
    return bingoArray;
  }
  
  const button0 = document.getElementById("button0");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const clicker2 = document.getElementById("clicker2");
  
  function bingoCall() {
    button1.style.display = "none";
    button2.style.display = "none";
    imgdiv.style.display = "none";
    title.style.display = "none";
    container.style.gridTemplateRows = "auto minmax(20rem, auto)"
    gameboard.classList.add("unCenter");
    gameboard.innerHTML = "";
    const oldArray = bingoArray;
    var blue = oldArray.shift();
    clicker2.innerHTML = oldArray.length > 0 ? `${oldArray.length} to go` : `RESET`;
    newArray.push(blue);
    fillHTML();
  }
  
  function bingoCall1() {
    button0.style.display = "none";
    button2.style.display = "none";
    imgdiv.style.display = "none";
    title.style.display = "none";
    container.style.gridTemplateRows = "10rem auto;"
    gameboard.classList.add("unCenter");
    gameboard.innerHTML = "";
    const oldArray = bingoArray;
    var blue = oldArray.shift();
    clicker2.innerHTML = oldArray.length > 0 ? `${oldArray.length} to go` : `RESET`;
    newArray.push(blue);
    fillHTML1();
    }
  
  
  function bingoCall2() {
    button1.style.display = "none";
    button0.style.display = "none";
    imgdiv.style.display = "none";
    title.style.display = "none";
    container.style.gridTemplateRows = "10rem auto;"
    gameboard.classList.add("unCenter");
    gameboard.innerHTML = "";
    const oldArray = bingoArray;
    var blue = oldArray.shift();
    clicker2.innerHTML = oldArray.length > 0 ? `${oldArray.length} to go` : `RESET`;
    newArray.push(blue);
    fillHTML2();
  }
  
  function fillHTML() {
    // for (var i=0; i<newArray.length;i++){
    //   gameboard.innerHTML =
    newArray.forEach(function (item) {
      var div = document.createElement("div");
      div.innerHTML = `
    <div class="minicard text-center">
    <img src="./img/${item}">
    <h3 class="minicard__h3">${item.slice(0, -4)}</h3>
  </div>
  `;
      gameboard.appendChild(div);
    });
  }
  
  function fillHTML1() {
    newArray.forEach(function (item) {
      let div = document.createElement("div");
      (item.length < 2) ? console.log('no') : 
      div.innerHTML = `
    <div class="minicard text-center d-flex justify-content-center">
    <img src="./img/${item}">
  </div>
  `;
      gameboard.appendChild(div);
    });
  }
  
  
  function fillHTML2() {
    // for (var i=0; i<newArray.length;i++){
    //   gameboard.innerHTML =
    newArray.forEach(function (item) {
      var div = document.createElement("div");
      div.innerHTML = `
    <div class="minicard text-center d-flex justify-content-center">
    <h3 class="minicard__h3">${item.slice(0, -4)}</h3>
  </div>
  `;
      gameboard.appendChild(div);
    });
  }
  
  
  shuffle(bingoArray);