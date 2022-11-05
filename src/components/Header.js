import classes from './Header.module.css'
import QuizContext from '../store/quiz-context';
import { useContext, useEffect, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom'


function MyTimer(props) {
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(3)
    // var timer;
    useEffect(() => {
        var timer = setInterval(() => {
            setSecond(second - 1)
            console.log("running")
        }, 1000);
        if (second === 0 && minute === 0) {
            props.timeOver();
        }
        if (second === 0) {
            setMinute(minute - 1)
            setSecond(60)
        }

        return () => clearInterval(timer);
    }, [minute, second, props])
    return (
        <div className={classes.timer}>
            <span>{minute}:</span>{second > 9 ? <span>{second}</span> : <span>0{second}</span>}
        </div>
    )
}

function Header(props) {
    const quizCtx = useContext(QuizContext)
    const matchQuizes = useMatch("/quizes")
    const matchAnswers = useMatch("/answer")
    const isLoading = quizCtx.quizLoading
    console.log(isLoading)
    const navigate = useNavigate();
    function submitHandler() {
        if (quizCtx.pickedAnsAr) { quizCtx.calculatePoint(); }
        props.seeScore();
    }
    function returnToHomeHandler() {
        navigate('/')
    }
    return (
        <div className={classes.header}>
            <span>Quick Quiz</span>
            {matchQuizes && !isLoading && <MyTimer timeOver={submitHandler} />}
            {matchQuizes && <button className={classes.button} onClick={submitHandler}>Submit</button>}
            {matchAnswers && <button className={classes.button} onClick={returnToHomeHandler}>Home</button>}        </div>
    )
}
export default Header;