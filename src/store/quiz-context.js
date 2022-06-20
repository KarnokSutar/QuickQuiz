import React from 'react';

const QuizContext = React.createContext({
correctAnsAr:[],
pickedAnsAr:[],
point:0,
calculatePoint: ()=>{},
getCorrectandPickedAnsfromQuizItem:(id, correctAns,PickedAns)=>{},
setCorrectAnsArandPickedAnsArraytoNull: ()=>{},
setCorrectAnsAr:()=>{},
setPickedAnsAr:()=>{}
}
)
export default QuizContext;