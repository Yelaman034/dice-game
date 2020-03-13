// Тоглогчийн ээлжийг хадгалах хувьсагч , нэгдүгээр тоглогч 0 , хоёрдугаар тоглогч 1
var activePlayer = 1;

// Тоглогчийн цуглуулсан оноо хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжний цуглуулж байгаа оноо хадгалах хувьсагч
var roundScore = 0;

//Шоо аль талаар буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй байдлаар үүснэ.

var dice;
dice = Math.random() * 6 + 1;
dice = Math.floor(dice);

console.log("Шоо " + dice);

// window.document.querySelector("#score-0").textContent = dice;

//Хоёр тоглогчийн оноог 0 болгий.
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

//Шоо аль тал буусаныг алаг болгий
document.querySelector(".dice").style.display = "none";

//Тоглогчийн roundScore 0 болгий.
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
