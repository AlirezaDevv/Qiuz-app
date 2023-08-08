import resetState from "./reset-state";
import selectAnswer from "./select-answer";

const questions = [
    {
      question: "which is largest animal in the world",
      answers: [
        { text: "shark", correct: false },
        { text: "blue whale", correct: true },
        { text: "elephant", correct: false },
        { text: "giraffe", correct: false },
      ],
    },
    {
      question: "which is the smallest contry in the world",
      answers: [
        { text: "vatican city", correct: true },
        { text: "bhutan", correct: false },
        { text: "nepal", correct: false },
        { text: "shri lanka", correct: false },
      ],
    },
    {
      question: "which is the largest desert in the world",
      answers: [
        { text: "kalahari", correct: false },
        { text: "gobi", correct: false },
        { text: "sahara", correct: false },
        { text: "antarctica", correct: true },
      ],
    },
    {
      question: "which is samllest continent in the world",
      answers: [
        { text: "asia", correct: false },
        { text: "australia", correct: true },
        { text: "europe", correct: false },
        { text: "africa", correct: false },
      ],
    },
  ];

const question = document.querySelector("#question");
const answers = document.querySelector("#answers");


export default function showQuestion(currentQindex) {
    resetState();
    let currentQ = questions[currentQindex];
    let questionNo = currentQindex + 1;
    question.innerHTML = questionNo + ". " + currentQ.question;
  let i = 0;
    currentQ.answers.forEach((answer) => {
      i++;
      const button = document.createElement("button");
      button.innerHTML = i + ". " + answer.text;
      button.classList =
        "btn w-full border-2 border-solid border-gray-900 px-5 py-3 rounded-md text-slate-900 text-left my-3 disabled:cursor-no-drop";
      answers.appendChild(button);
      if (answer.correct) {
        button.dataset.correct =  answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  