import React from 'react';

const QuizContext = React.createContext({
correctAnsAr:[],
pickedAnsAr:[],
questions:[],
point:0,
quizLoading:true,
calculatePoint: ()=>{},
getCorrectandPickedAnsfromQuizItem:(id, correctAns,PickedAns)=>{},
setCorrectAnsArandPickedAnsArraytoNull: ()=>{},
setCorrectAnsAr:()=>{},
setPickedAnsAr:()=>{},
setQuestions: ()=>{}
}
)
export default QuizContext;