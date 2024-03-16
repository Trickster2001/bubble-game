console.log("Hello World!");

let hitRn = 0;
let timer = 10;
let score = 0;

const makeBubble = () => {
  let pBottom = document.querySelector("#pBottom");
  let clutter = "";
  for(let i=0; i<=215; i++){
    var rnd = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rnd}</div>`;
  }  
  pBottom.innerHTML = clutter;
}
makeBubble();

const changeHit = ()=>{
  hitRn = Math.floor(Math.random()*10)
  document.querySelector("#hit").textContent = hitRn;
}

const myTimer = ()=>{
  let myInt = setInterval(() => {
    if(timer>0){
      timer--;
      document.querySelector("#time").textContent=timer;
    }else {
      document.querySelector("#pBottom").style.flexDirection="column";
      document.querySelector("#pBottom").innerHTML=`<h1>Game Over</h1>
      <h1>Your Score is ${score}</h1>`
      clearInterval(myInt);
    }
  }, 1000);
}
myTimer();

const incScore = ()=>{
  score+=10;
  document.querySelector("#scr").textContent=score
}

document.querySelector("#pBottom").addEventListener("click", (dets)=>{
  if(hitRn===Number(dets.target.textContent)){
    incScore()
  }
  makeBubble();
  changeHit();
})