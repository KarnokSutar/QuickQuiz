import React from 'react';

const QuizContext = React.createContext({
correctAnsAr:[],
pickedAnsAr:[],
point:0,
calculatePoint: ()=>{},
setCorrectAnsAr: ()=>{},
setPickedAnsAr:()=>{}
}
)
export default QuizContext;