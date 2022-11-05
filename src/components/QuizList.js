import QuizItem from './QuizItem'
import Card from '../UI/Card';
import classes from './Quizlist.module.css'
import { useContext } from 'react';
import QuizContext from '../store/quiz-context';
import FabButton from './FabButton';
function Quizlist(props){
const quizCtx = useContext(QuizContext);
const quizItem = quizCtx.questions.map((quiz)=>(
  <section className={classes.quizes}><Card> <QuizItem
    id = {quiz.id}
    question ={quiz.question}
    correctAns={quiz.correctAns}
    options ={quiz.options}
    ></QuizItem> </Card>
    </section>
))
function submitHandler(){
  if(quizCtx.pickedAnsAr) { quizCtx.calculatePoint();}
props.seeScore();
}
console.log(quizCtx.questions);
return(
      <div className={classes.container}>
    {quizCtx.quizLoading ? <div className={classes.background}><div className={classes.backdrop}> <div className={classes.loader}/></div></div>: <ul>{quizItem}</ul>}
<FabButton onClick={submitHandler}/>
    </div> 

)

}
export default Quizlist;