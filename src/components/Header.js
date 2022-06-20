import classes from './Header.module.css'
import QuizContext from '../store/quiz-context';
import { useContext, useEffect, useState } from 'react';



function MyTimer(props){
    const[second, setSecond]=useState(0)
    const[minute, setMinute]=useState(3)
    // var timer;
useEffect(()=>{
    var timer = setInterval(() => {
        setSecond(second-1) 
        console.log("running")
     }, 1000);
     if (second === 0 && minute===0){
        props.timeOver();}
        if (second===0){
            setMinute(minute-1)
            setSecond(60)
        }
     
     return ()=>clearInterval(timer);
}, [minute, second, props])
 return(
    <div>
        <span>{minute}:</span>
        { second>9 ? <span>{second}</span>: <span>0{second}</span>}
    </div>
 )
 }

function Header (props){
    const quizCtx = useContext(QuizContext)

function submitHandler(){
   if(quizCtx.pickedAnsAr) { quizCtx.calculatePoint();}
props.seeScore();
}
    return(
        <div className={classes.header}>
            <h1>Quick Quiz</h1>
            {props.showTimer && <MyTimer timeOver ={submitHandler}/>}
          {props.showSubmitButton && <button className={classes.button} onClick={submitHandler}>Submit</button>}      </div>
    )
}
export default Header;