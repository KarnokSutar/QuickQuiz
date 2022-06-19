import { Fragment, useContext, useReducer } from "react";
import classes from './QuizItem.module.css'
import QuizContext from "../store/quiz-context";

const correctAns = []
const pickedAns = []
const defaultQuizState ={
   selectA : false,
   selectB :false,
   selectC : false, 
   selectD : false 
}
function quizReducer(state, action){
if(action.type === "A"){
   
    return{
        selectA:true,
        selectB:false ,
        selectC:false, 
        selectD:false  
    }
}
if(action.type === "B"){
    return{
        selectA:false,
        selectB:true ,
        selectC:false, 
        selectD:false  
    }
}
if(action.type === "C"){
    
    return{
        selectA:false,
        selectB:false ,
        selectC:true, 
        selectD:false  
    }
}
if(action.type === "D"){
    
    return{
        selectA:false,
        selectB:false ,
        selectC:false, 
        selectD:true  
    }
}
return defaultQuizState;
}

function QuizItem(props){
const quizCtx = useContext(QuizContext);
function ansProvider(){
    quizCtx.setCorrectAnsAr(correctAns)
    quizCtx.setPickedAnsAr(pickedAns)
}
    //const[selectA, setSelect] =useState(false)
    const [quizState, dispatchquizAction] = useReducer(
        quizReducer,
        defaultQuizState
      );
    function optionAClickHandler(){
        console.log(props.id);
        console.log(props.correctAns);
        dispatchquizAction({type:"A"})
        const id = + props.id;
  correctAns[id] = props.correctAns;
   pickedAns[id] = props.options[0];
   ansProvider();
    }
    function optionBClickHandler(){
        dispatchquizAction({type:"B"})
    pickedAns[props.id] = props.options[1];
    correctAns[props.id] = props.correctAns;
   ansProvider();
    }
    function optionCClickHandler(){
        dispatchquizAction({type:"C"})
    correctAns[props.id] = props.correctAns;
    pickedAns[props.id] = props.options[2];
    ansProvider();
    }
    function optionDClickHandler(){
        dispatchquizAction({type:"D"})
    correctAns[props.id] = props.correctAns;
    pickedAns[props.id] = props.options[3];
    ansProvider();
    }

    return(

        <Fragment>
            <li>
<div className={classes.question}>{props.id}. {props.question}</div>
<div className=  {classes.options}>  
<button className={` ${quizState.selectA === true ? classes.onselect : classes.option}`}
onClick ={optionAClickHandler}> A. {props.options[0]} </button>
<button className={` ${quizState.selectB === true ? classes.onselect : classes.option}`}
onClick ={optionBClickHandler} > B. {props.options[1]} </button>
<button className={` ${quizState.selectC === true ? classes.onselect : classes.option}`}
onClick ={optionCClickHandler} > C. {props.options[2]} </button>
<button className={` ${quizState.selectD === true ? classes.onselect : classes.option}`} 
onClick ={optionDClickHandler}> D. {props.options[3]} </button>
</div>
</li>

        </Fragment>
    )
}
export default QuizItem;