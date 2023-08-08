import startQuiz from "./start-quiz";


// const questions = [
//   {
//     question: "which is largest animal in the world",
//     answers: [
//       { text: "shark", correct: false },
//       { text: "blue whale", correct: true },
//       { text: "elephant", correct: false },
//       { text: "giraffe", correct: false },
//     ],
//   },
//   {
//     question: "which is the smallest contry in the world",
//     answers: [
//       { text: "vatican city", correct: true },
//       { text: "bhutan", correct: false },
//       { text: "nepal", correct: false },
//       { text: "shri lanka", correct: false },
//     ],
//   },
//   {
//     question: "which is the largest desert in the world",
//     answers: [
//       { text: "kalahari", correct: false },
//       { text: "gobi", correct: false },
//       { text: "sahara", correct: false },
//       { text: "antarctica", correct: true },
//     ],
//   },
//   {
//     question: "which is samllest continent in the world",
//     answers: [
//       { text: "asia", correct: false },
//       { text: "australia", correct: true },
//       { text: "europe", correct: false },
//       { text: "africa", correct: false },
//     ],
//   },
// ];

// const question = document.querySelector("#question");
// const answers = document.querySelector("#answers");
// const next = document.querySelector("#next");

// let currentQindex = 0;
// let score = 0;

// function startQuiz() {
//   currentQindex = 0;
//   score = 0;
//   next.innerHTML = "Next";

//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQ = questions[currentQindex];
//   let questionNo = currentQindex + 1;
//   question.innerHTML = questionNo + ". " + currentQ.question;
// let i = 0;
//   currentQ.answers.forEach((answer) => {
//     i++;
//     const button = document.createElement("button");
//     button.innerHTML = i + ". " + answer.text;
//     button.classList =
//       "btn w-full border-2 border-solid border-gray-900 px-5 py-3 rounded-md text-slate-900 text-left my-3 disabled:cursor-no-drop";
//     answers.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct =  answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   next.style.display = "none";

//   while (answers.firstChild) {
//     answers.removeChild(answers.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";

//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }

//   Array.from(answers.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   next.style.display = "block";
// }

// function showScore() {
//   resetState();
//   question.innerHTML = `Your Score is ${score} of ${questions.length} `;

//   next.innerHTML = "play again";
//   next.style.display = "block";
// }

// function handleNext() {
//   currentQindex++;

//   if (currentQindex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// next.addEventListener("click", () => {
//   if (currentQindex < questions.length) {
//     handleNext(currentQindex);
//   } else {
//     startQuiz();
//   }
// });

startQuiz();
