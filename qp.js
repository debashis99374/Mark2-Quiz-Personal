var score=0;
var userName=prompt('what is your name?= ')
console.log('Welcome '+userName+' to Debashis quiz')
console.log('---------------------------------------------')

function play(question,answer) {
  var userAnswer=prompt(question);
  if (userAnswer===answer){
    console.log('correct')
    score+=1
  }else{
    console.log('wrong')
  }
  console.log(score)
  console.log('---------------')
  
}
 var questionOne={
  question:'what is my nick name= ',
  answer:'gugula'
};
var questionTwo={
  question:'whats my hobby= ',
  answer:'coading'
};
var questionThree={
  question:'what i like to eat= ',
  answer:'sahi panner'
};
var questionFour={
  question:'Am i a lazy person= ',
  answer:'maybe'
};
var questionFive={
  question:'Do i like you=',
  answer:'yes'
};
var a=[questionOne,questionTwo,questionThree,questionFour,questionFive];
for(let i=0;i<a.length;i++){
var currentQuestion=a[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log('---------------')
console.log('thank you for your time   ')
console.log('have a nice day!!')