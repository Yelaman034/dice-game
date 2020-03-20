// Тоглогчийн ээлжийг хадгалах хувьсагч , нэгдүгээр тоглогч 0 , хоёрдугаар тоглогч 1
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноо хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжний цуглуулж байгаа оноо хадгалах хувьсагч
var roundScore = 0;

//Шоо аль талаар буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй байдлаар үүснэ.
var diceNumber = Math.floor(Math.random() * 6 + 1);

// window.document.querySelector("#score-0").textContent = dice;

//Хоёр тоглогчийн оноог 0 болгий.
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

//Шоо аль тал буусаныг алаг болгий
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Тоглогчийн roundScore 0 болгий.
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//Roll dice btn идэвтэй болгох!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//1.Callback function бичсэн нь

// document.querySelector(".btn-roll").addEventListener("click", dicePlay);
// function dicePlay() {
//     var diceNumber;
//     diceNumber = Math.random() * 6 + 1;
//     diceNumber = Math.floor(diceNumber);
//     alert("Шоо шидлээ: " + diceNumber);
//   }
//2.Anonymous function бичсэн зүгээр юм байна. Мэргэжлийн маяг
// Шоо хаях eventListener
document.querySelector(".btn-roll").addEventListener("click", function() {
  //Санамсаргүй байдлаар 1 - 6 тоог гаргах diceNumber хувьсагч
  var diceNumber = Math.floor(Math.random() * 6 + 1);

  //Шооны зургыг гаргах
  diceDom.style.display = "block";

  //Санамсаргүй байдлаар үүсэн доог аваад веб дээр гаргана.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Идэвхтэй тоглогчийн буусан оноог current score дээр нэмэх

  if (diceNumber !== 1) {
    //diceNumber = 1 бол буссан оноог Active тоглогчид нэмнэ.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //Хэрвээ diceNumber = 1 бол тоглогчийн ээлжийн оноог 0 болгож дараагийн тоглогч руу шилжинэ.
    //Тэр active тоглогч руу оноог нэмнэ.Active тоглогчийг улаан цэгээр оноож өгнө.
    // nextDice();
    document.getElementById("current-" + activePlayer).textContent = 0;
    diceDom.style.display = "none";
    roundScore = 0;
    if (activePlayer == 1) {
      activePlayer = 0;
    } else {
      activePlayer = 1;
    }
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //classList ээр div дотор хоёр class байгаа шалгаж (add) аар class нэмж болно бас (remove) аар class устгаж болно.
    //энэ ээлжлэн шилжих байдлаар явагдах тул (toggle) ийг ашиглан.
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  // scores[0] = scores[0] + roundScore;
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!!";
  } else {
    nextDice();
  }
});
//
function nextDice() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  diceDom.style.display = "none";
  roundScore = 0;
  if (activePlayer == 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
