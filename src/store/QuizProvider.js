import QuizContext from "./quiz-context";
import {useState } from "react";

var correctAnsArr =[];
var pickedAnsArr =[];
let updatedPoint =0;
function QuizProvider(props){

  const decodeHTML = function (html) {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

const [correctAnsArray, setCorrectAnsArray] =useState()
const [pickedAnsArray, setPickedAnsArray] =useState()
const[totalPoint, setTotalPoint] =useState(0)
const[questions, setQuestion] =useState([])
const[quizLoading, setQuizLoading] =useState(true);

function calculatePointHandler(){
 
  console.log(correctAnsArray)
for (let i=1; i<correctAnsArray.length; i++){
   
    if( pickedAnsArray[i]>=0 && correctAnsArray[i] ===pickedAnsArray[i])
    {updatedPoint = updatedPoint + 1;} else{updatedPoint = updatedPoint - .25}
console.log(updatedPoint)
} 
console.log(updatedPoint)
console.log(correctAnsArray);
console.log(pickedAnsArray);
console.log("point")
setTotalPoint(updatedPoint);
updatedPoint=0;
console.log(totalPoint)

}
function setCorrectAnsArandPickedAnsArraytoNullHandler (){
  console.log(correctAnsArray)
  setCorrectAnsArray([]);
  setPickedAnsArray([]);
  console.log("ARRAY_CLEARED")
  console.log(correctAnsArray);
  correctAnsArr =[];
  pickedAnsArr =[];
}
function setAnsAr(id,correctAns,pickedAns){
correctAnsArr[id]= correctAns;
pickedAnsArr[id]=pickedAns;
setCorrectAnsArray(correctAnsArr);
setPickedAnsArray(pickedAnsArr);

}
async function setQuestionsHandler(){
  setQuizLoading(true)
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
const data = await response.json();
const results = await data.results;
const quizes = results.map((quiz,index)=>{
 const incorrect_answers = quiz.incorrect_answers.map(a => decodeHTML(a));
  return { 
    id:index+1,
    question: decodeHTML(quiz.question),
    correctAns: decodeHTML(quiz.correct_answer),
    options:shuffle([...incorrect_answers, quiz.correct_answer])}
  })
setQuestion(quizes);
  console.log(questions);
  setQuizLoading(false)
}

const quizContext = {
  correctAnsAr:correctAnsArray,
  pickedAnsAr:pickedAnsArray,
  questions:questions,
  point:totalPoint,
  quizLoading: quizLoading,
  setCorrectAnsArandPickedAnsArraytoNull:setCorrectAnsArandPickedAnsArraytoNullHandler,
  getCorrectandPickedAnsfromQuizItem:setAnsAr,
  calculatePoint: calculatePointHandler,
  setCorrectAnsAr: setCorrectAnsArray,
  setPickedAnsAr:setPickedAnsArray,
  setQuestions: setQuestionsHandler
};
    
      return (
        <QuizContext.Provider value={quizContext}>
          {props.children}
        </QuizContext.Provider>
      );
    
}
export default QuizProvider;