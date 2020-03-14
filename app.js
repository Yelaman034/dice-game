// Тоглогчийн ээлжийг хадгалах хувьсагч , нэгдүгээр тоглогч 0 , хоёрдугаар тоглогч 1
var activePlayer = 1;

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
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
