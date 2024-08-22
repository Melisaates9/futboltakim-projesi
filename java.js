let scoreTeam = 0;
function scoresayısı() {
  scoreTeam++;
  document.querySelector(".score1").innerHTML = scoreTeam;
}
function scores() {
  if (scoreTeam > 0) {
    scoreTeam--;
    document.querySelector(".score1").innerHTML = scoreTeam;
  } else {
    alert("Skor zaten 0. daha fazla azaltılamaz");
  }
}
let scoreTeam2 = 0;
function artırma() {
  scoreTeam2++;
  document.querySelector(".score2").innerHTML = scoreTeam2;
}
function azaltma() {
  if (scoreTeam2 > 0) {
    scoreTeam2--;
    document.querySelector(".score2").innerHTML = scoreTeam2;
  } else {
    alert("Skor zaten 0. daha fazla azaltılamaz");
  }
}
function changeScore1() {
  const score = prompt("Yeni gol sayısını giriniz");
  if (!isNaN(score) && score !== null) {
    //isNaN =rakam olup olmadığını anlamana yardımcı oluyor iken - !== null ise ! yerine herhangi bir rakam girilip girilmediğini algılayıp uyarı veriyor.
    document.querySelector(".score1").innerHTML = score;
    scoreTeam = score;
  } else {
    alert("Sadece sayı girilebilir!'");
  }
}
function changeScore2() {
  const score = prompt("Yeni gol sayısını giriniz");
  if (!isNaN(score) && score !== null) {
    //isNaN =rakam olup olmadığını anlamana yardımcı oluyor iken - !== null ise ! yerine herhangi bir rakam girilip girilmediğini algılayıp uyarı veriyor.
    document.querySelector(".score2").innerHTML = score;
    scoreTeam2 = score;
  } else {
    alert("Sadece sayı girilebilir!'");
  }
}
function reset1() {
  document.querySelector(".score1").innerHTML = 0;
  scoreTeam = 0;
}
function reset2() {
  document.querySelector(".score2").innerHTML = 0;
  scoreTeam = 0;
}

function changeTeamName1() {
  let score1 = prompt("Yeni takım adını giriniz:");
  if (score1 !== null && score1.trim() !== "") {
    document.querySelector(".teamName").innerHTML = score1;
  }
}
function changeTeamName2(){
    let score2 = prompt("Yeni takım adını giriniz:");
    if(score2 !== null && score2.trim()!== ""){ 
document.querySelector(".teamName2").innerHTML = score2
    }
    }