window.onload = function () {
  let questionBox = document.querySelectorAll(".question");
  let arrow = document.querySelectorAll(".question img");
  let question = document.querySelectorAll(".question p");
  let answer = document.querySelectorAll("li > p");
  let isVisible = [false, false, false, false, false];
  for (let i in questionBox) {
    questionBox[i].onclick = function () {
      if (!isVisible[i]) {
        answer[i].style.display = "block";
        answer[i].style.top = "15px";
        arrow[i].style.transform = "rotate(180deg)";
        question[i].style.fontWeight = "bold";
        isVisible[i] = true;
      } else {
        answer[i].style.display = "none";
        answer[i].style.top = "0px";
        arrow[i].style.transform = "rotate(0deg)";
        question[i].style.fontWeight = "normal";
        isVisible[i] = false;
      }
    };
  }
};
