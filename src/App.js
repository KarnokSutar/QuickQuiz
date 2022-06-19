import Quizlist from "./components/QuizList";
import Header from "./components/Header";
import {useState,useReducer } from "react";
import Button from "./UI/Button";
import QuizProvider from "./store/QuizProvider";
import Score from "./components/Score";


const defaultState ={
start: true,
loading:false,
submit:false,
scorePage: false,
playAgain:false,
showQuiz:false
}
function stateReducer(state, action){
 if (action.type==="CLICKED_START"){
  return{
start: false,
loading:true,
submit:false,
scorePage: false,
playAgain:false,
valueOfshowQuiz:false
  }}

if (action.type==="LOADING_COMPLETED"){
  return{
start: false,
loading:false,
submit:true,
scorePage: false,
playAgain:false,
showQuiz:true
  }}
if(action.type==="SHOW_SCORE"){
  return{
start: false,
loading:false,
submit:false,
scorePage: true,
playAgain:false,
showQuiz:false
  }
}
if(action.type==="PLAY_AGAIN"){
  return{
start: true,
loading:false,
submit:false,
scorePage: false,
playAgain:false,
showQuiz:false
  }
}
  return defaultState;
}

//let submitButton =false;
const dummy_quizes = [{"id": 0, "category":"Entertainment: Video Games","type":"boolean","difficulty":"medium","question":"Nintendo started out as a playing card manufacturer.","correct_answer":"True","incorrect_answers":["True","False", "True"]},
{ "id": 1,"category":"Entertainment: Japanese Anime & Manga",
"type":"multiple","difficulty":"medium",
"question":"In JoJo&#039;s Bizarre Adventure, winch character is able to accelerate time?",
"correct_answer":"Enrico Pucci","incorrect_answers":["Jotaro Kujo","Jolyne Cujoh","Kujo Jotaro"]},
{ "id": 2,"category":"Entertainment: Music","type":"boolean","difficulty":"medium","question":"Pink Guy&#039;s debut album was &quot;Pink Season&quot;.",
"correct_answer":"False","incorrect_answers":["True","False", "True"]}]

function App() {
  const[quizes, setTenQuizes] =useState(dummy_quizes);
  const [currentState, dispatchStateAction] = useReducer(
    stateReducer,
    defaultState
  );
 

   function playAgainHandler (){
    dispatchStateAction({type:"PLAY_AGAIN"})
   }
async function quizFetchHandler(){
dispatchStateAction({type:"CLICKED_START"})
const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
const data = await response.json();
const quiz = await data.results;
dispatchStateAction({type:"LOADING_COMPLETED"})
setTenQuizes(quiz);
}
function scorePageHandler(){
  dispatchStateAction({type:"SHOW_SCORE"})
}
//console.log(quizFetchHandler());
//const quizes = quizFetchHandler;
  return (
    <QuizProvider>
    <Header showTimer ={currentState.showQuiz} showSubmitButton= {currentState.submit} seeScore = {scorePageHandler} />
        {currentState.showQuiz && <Quizlist quiz = {quizes}/>}
        {currentState.start && <Button onClick={quizFetchHandler}>Start</Button>}
        {currentState.loading && <Button >Loading...</Button>}
        {currentState.scorePage && <Score playAgain = {playAgainHandler}/>}
    </QuizProvider>
  );
}

export default App;
