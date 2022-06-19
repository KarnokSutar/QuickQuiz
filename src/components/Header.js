import classes from './Header.module.css'
import QuizContext from '../store/quiz-context';
import { useContext, useEffect, useState } from 'react';


function MyTimer(props){
    const[second, setSecond]=useState(30)
    // var timer;
useEffect(()=>{
    var timer = setInterval(() => {
        setSecond(second-1) 
        console.log("running")
     }, 1000);
     if (second === 0){
        props.timeOver();
     }
     return ()=>clearInterval(timer);
})
 return(
    <div>
        <span>00:</span>
        <span>{second}</span>
    </div>
 )
 }

function Header (props){
    const quizCtx = useContext(QuizContext)
function submitHandler(){
   if(quizCtx.pickedAnsAr) { quizCtx.calculatePoint();}
    console.log(quizCtx.pickedAnsAr)
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