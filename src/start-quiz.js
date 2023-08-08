// import showQuestion from "./show-question";

// const next = document.querySelector("#next");


let currentQindex = 0;
let score = 0;
export default function startQuiz() {
  currentQindex = 0;
  score = 0;
  next.innerHTML = "Next";

  showQuestion(currentQindex);
}
