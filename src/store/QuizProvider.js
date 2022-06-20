import QuizContext from "./quiz-context";
import {useState } from "react";

var correctAnsArr =[];
var pickedAnsArr =[];
let updatedPoint =0;
function QuizProvider(props){
const [correctAnsArray, setCorrectAnsArray] =useState()
const [pickedAnsArray, setPickedAnsArray] =useState()
const[totalPoint, setTotalPoint] =useState(0)

function calculatePointHandler(){
 
  console.log(correctAnsArray)
for (let i=1; i<correctAnsArray.length; i++){
   
    if( pickedAnsArray[i] && correctAnsArray[i] ===pickedAnsArray[i])
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

const quizContext = {
  correctAnsAr:correctAnsArray,
  pickedAnsAr:pickedAnsArray,
  point:totalPoint,
  setCorrectAnsArandPickedAnsArraytoNull:setCorrectAnsArandPickedAnsArraytoNullHandler,
  getCorrectandPickedAnsfromQuizItem:setAnsAr,
  calculatePoint: calculatePointHandler,
  setCorrectAnsAr: setCorrectAnsArray,
  setPickedAnsAr:setPickedAnsArray
};
    
      return (
        <QuizContext.Provider value={quizContext}>
          {props.children}
        </QuizContext.Provider>
      );
    
}
export default QuizProvider;