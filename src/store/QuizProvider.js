import QuizContext from "./quiz-context";
import {useState } from "react";
let updatedPoint =0;
function QuizProvider(props){
const [correctAnsArray, setCorrectAnsArray] =useState()
const [pickedAnsArray, setPickedAnsArray] =useState()
const[totalPoint, setTotalPoint] =useState(0)
console.log(totalPoint);
function calculatePointHandler(){
 
  console.log(correctAnsArray)
for (let i=1; i<correctAnsArray.length; i++){
   
    if( pickedAnsArray[i] && correctAnsArray[i] ===pickedAnsArray[i])
    {updatedPoint = updatedPoint + 1;} else{updatedPoint = updatedPoint - .25}
console.log(updatedPoint)
} 
console.log(updatedPoint)
console.log(totalPoint)
console.log("point")
setTotalPoint(updatedPoint);
console.log(totalPoint)

}
const quizContext = {
  correctAnsAr:correctAnsArray,
  pickedAnsAr:pickedAnsArray,
  point:updatedPoint,
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