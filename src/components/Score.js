import classes from './Score.module.css'
import QuizContext from '../store/quiz-context';
import { useContext } from 'react';
import Card from '../UI/Card';
import { Fragment } from 'react/cjs/react.production.min';

function Score(props){
    const quizCtx = useContext(QuizContext);
    let banner ="You are OK"
    if(5<quizCtx.point <9){banner ="You are above average"}
    if(quizCtx.point>9){banner ="You are a Genius!!!"}
    if(quizCtx.point<5){banner ="LoL!!! You Suck at this Game!"}
    function playAgainHandler(){
        props.playAgain();
    }

    return(
        <Fragment>
        <section className={classes.quizes}>
        <Card><p className={classes.banner}>{banner}</p></Card>
        </section>
        <div className={classes.center}>
        <p className={classes.score}>Your Score: <br/> {quizCtx.point} out of 10</p>
        <button className={classes.button} onClick={playAgainHandler}>Want to Play Again?</button>
        </div>
        
        </Fragment>
    )
}
export default Score;