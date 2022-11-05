// import Quizlist from "./components/QuizList";
import Header from "./components/Header";
import {lazy, Suspense } from "react";
// import Button from "./UI/Button";
import QuizProvider from "./store/QuizProvider";
// import Score from "./components/Score";
import { Route, Routes, useNavigate} from "react-router-dom";
import FabButton from "./components/FabButton";

function App() {

  const Button = lazy(()=>import('./UI/Button'))
  const Quizlist = lazy(()=>import('./components/QuizList'))
  const Score = lazy(()=>import('./components/Score'))
  const AnswersList = lazy(()=>import('./components/AnswersList'))
  const navigate = useNavigate();
// const quizCTX = useContext(QuizContext)
   function playAgainHandler (){
    navigate('/')
   }

function scorePageHandler(){
  navigate('/score');
}
//console.log(quizFetchHandler());
//const quizes = quizFetchHandler;
  return (
    <QuizProvider>
    <Header seeScore = {scorePageHandler} />
    <main>
    <Suspense fallback={<div>Loading..</div>}>
   <Routes>
    {/* <Route path="/" element={<Header showTimer ={false} showSubmitButton= {false} seeScore = {scorePageHandler} />}/> */}
    <Route path="/quizes" element ={<Quizlist seeScore = {scorePageHandler}/>}/>
    <Route path="/" element ={<Button>Start</Button>}/>
    <Route path="/score" element ={<Score playAgain = {playAgainHandler}/>}/>
    <Route path="/answer" element ={<AnswersList/>}/>
    <Route path="/progress" element ={<FabButton/>}/>
  
    {/* <Route  {currentState.showQuiz && <Quizlist quiz = {quizes}/>} 
        {currentState.start && <Button onClick={quizFetchHandler}>Start</Button>}
       {currentState.loading && <Button >Loading...</Button>} 
         */}
    </Routes>
    </Suspense>
    {/* {currentState.scorePage && <Score playAgain = {playAgainHandler}/>} */}
    </main>
    </QuizProvider>
  );
}

export default App;
