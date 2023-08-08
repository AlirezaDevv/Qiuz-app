const next = document.querySelector("#next");
const answers = document.querySelector("#answers");



export default function resetState() {
    next.style.display = "none";
  
    while (answers.firstChild) {
      answers.removeChild(answers.firstChild);
    }
  }