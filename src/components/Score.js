import classes from './Score.module.css'
import QuizContext from '../store/quiz-context';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import ProgressBar from './ProgressBar';

function Score(props){
    const quizCtx = useContext(QuizContext);
    const navigate = useNavigate();
    function seeAnswerHandler(){
navigate('/answer');
    }
    const pointPerccentage = ((quizCtx.point/10)*100).toFixed(0)
    let banner ="You are OK"
    if(5<quizCtx.point <9){banner ="You are above average"}
    if(quizCtx.point>9){banner ="You are a Genius!!!"}
    if(quizCtx.point<5){banner ="LoL!!! You Suck at this Game!"}
    function playAgainHandler(){
        console.log("hello")
        quizCtx.setCorrectAnsArandPickedAnsArraytoNull()
        console.log(quizCtx.correctAnsAr);
        propsPlayAgain();
    }
    function propsPlayAgain(){
props.playAgain();
    }

    return(
        <div className={classes.body}>
        <section className={classes.quizes}>
        <div className={classes.banner}><p >{banner}</p></div>
        </section>
        <div className={classes.score}> <p>Your Score: <br/> {quizCtx.point} out of 10</p>
       <div className={classes.center}><ProgressBar done ={pointPerccentage}/></div>  </div>
        <div className={classes.buttonContainer}> <button className={classes.button} onClick={playAgainHandler}>Want to Play Again?</button>
        <button className={classes.button} onClick={seeAnswerHandler}>Check the Answers</button> </div>
        </div>
    )
}
export default Score;