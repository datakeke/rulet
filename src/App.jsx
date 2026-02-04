import { useState } from "react";
import "./App.css";

// function App() {
//   const [x, setX] = useState(11);

//   function AddNumber() {
//     setX(x + 1);
//   }





function App() {
const [imageurl, setimageurl] = useState("./dice-1.png");
 const [count, setCount] = useState(0);
 const [plaier, setplaier] = useState(true);

const [plaier1, setplaier1] = useState(0);
const [plaier2, setplaier2] = useState(0);




 
function Roll() {
  const x =  Math.floor(Math.random() * 6) + 1;
     
if (x === 1){
  setCount(0);
  setplaier(!plaier);

}








else
   

  setCount(count + x);


if (x ===1)
setimageurl("./dice-1.png");
else if (x ===2)
setimageurl("./dice-2.png");
else if (x ===3)
setimageurl("./dice-3.png");
else if (x ===4)
setimageurl("./dice-4.png");
else if (x ===5)
setimageurl("./dice-5.png");
else if (x ===6)
setimageurl("./dice-6.png");

}


function Hold() {
  setplaier(!plaier);
  setCount(0);

  let newPlayerOne = plaier1;
  let newPlayerTwo = plaier2;

  if (plaier) {
    newPlayerOne = plaier1 + count;
    setplaier1(newPlayerOne);
  } else {
    newPlayerTwo = plaier2 + count;
    setplaier2(newPlayerTwo);
  }

  // Check winning condition AFTER updating scores
  if (newPlayerOne >= 100) {
    alert("Player 1 winner");
    setplaier1(0);
    setplaier2(0);
    setCount(0);
  } else if (newPlayerTwo >= 10) {
    alert("Player 2 winner");
    setplaier1(0);
    setplaier2(0);
    setCount(0);
  }



 
}

  return (
    <main class="page">
      <div class="board">
        <section class="player yellow" style={{backgroundColor: plaier ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.3)"}}>
          <h2 >Player 1</h2>
          <div class="score">{plaier1}</div>

          <div class="current-box">
            <span class="label">CURRENT</span>
            <span class="current-score">{plaier ? count : 0}</span>
          </div>
        </section>

<img className="dice" src={imageurl} />
      

        <section class="player red" style={{backgroundColor: plaier ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.6)"}}>
          <h2>Player 2</h2>
          <div class="score">{plaier2}</div>

          <div class="current-box">
            <span class="label">CURRENT</span>
            <span class="current-score">{!plaier ? count : 0}</span>
          </div>
        </section>
        <button onClick={Roll} className="btn">
       roll
        </button>
   <button onClick={Hold} className="btn1">
         hold
        </button>



      </div>
    </main>
  );
}

export default App;
