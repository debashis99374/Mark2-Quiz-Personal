var score = 0;
var response = "";
var userName = prompt("May i ask your name sir?= ");
console.log("Welcome to my personal Quiz " + userName + " sir");
console.log("lets go....")

function play(question, answer) {
  var UserAnswer =prompt(question);
  if (UserAnswer === answer) {
    score += 1;
    response = "Right";
  } else {
    Response = "Wrong";
  }
  console.log(response);
  console.log("score is = " + score);
  console.log("---------------------");
}
var Question1 = {
  question: "What is my name?",
  answer: "Debashis"
};
var Question2 = {
  question: "What is my age?",
  answer: "22"
};
var Question3 = {
  question: "What is my hight?",
  answer: "6 Feet"
};
var Question4 = {
  question: "Am i a Vegan?",
  answer: "No"
};
var Question5 = {
  question: "What is my favourate colour?",
  answer: "Green"
};
var Question6 = {
  question: "Do i love Meditation?",
  answer: "Yes"
};
var Question7 = {
  question: "Cricket or Football?",
  answer: "Football"
};
var Question8 = {
  question: "Guess my nickname?",
  answer: "Dev"
};
var Question9 = {
  question: "Who is my idol?",
  answer: "Me"
};
var Question10 = {
  question: "Do i love you?",
  answer: "Yes"
};

var listOfQuestions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10];
for (let i = 0; i < listOfQuestions.length; i++) {
  play(listOfQuestions[i].question, listOfQuestions[i].answer);
}

console.log("Thank you for your valuable time " + userName + " sir");
console.log("Have a nice day!!!");
console.log("----------------------------------------END-------------------------------------------------------------------");
