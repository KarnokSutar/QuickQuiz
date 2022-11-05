import { useContext, useReducer } from "react";
import classes from './QuizItem.module.css'
import QuizContext from "../store/quiz-context";
import { Fragment } from "react/cjs/react.production.min";
//const QuizItemContext = react.createContext();
const defaultQuizState = {
    selectA: false,
    selectB: false,
    selectC: false,
    selectD: false
}
function quizReducer(state, action) {
    if (action.type === "A") {

        return {
            selectA: true,
            selectB: false,
            selectC: false,
            selectD: false
        }
    }
    if (action.type === "B") {
        return {
            selectA: false,
            selectB: true,
            selectC: false,
            selectD: false
        }
    }
    if (action.type === "C") {

        return {
            selectA: false,
            selectB: false,
            selectC: true,
            selectD: false
        }
    }
    if (action.type === "D") {

        return {
            selectA: false,
            selectB: false,
            selectC: false,
            selectD: true
        }
    }
    return defaultQuizState;
}

function QuizItem(props) {
    const quizCtx = useContext(QuizContext);
    let correrctOption;
    for (let i = 0; i < 4; i++) {
        if (props.correctAns === props.options[i]) {
            correrctOption = i;
        }
    }
    const [quizState, dispatchquizAction] = useReducer(
        quizReducer,
        defaultQuizState
    );
    function optionAClickHandler() {
        console.log(props.id);
        console.log(props.correctAns);
        dispatchquizAction({ type: "A" })
        quizCtx.getCorrectandPickedAnsfromQuizItem(props.id, correrctOption, 0)
    }
    function optionBClickHandler() {
        dispatchquizAction({ type: "B" })
        quizCtx.getCorrectandPickedAnsfromQuizItem(props.id, correrctOption, 1)
    }
    function optionCClickHandler() {
        dispatchquizAction({ type: "C" })
        quizCtx.getCorrectandPickedAnsfromQuizItem(props.id, correrctOption, 2);
    }
    function optionDClickHandler() {
        dispatchquizAction({ type: "D" })
        quizCtx.getCorrectandPickedAnsfromQuizItem(props.id, correrctOption, 3)
    }

    return (

        <Fragment>
            {/* <li>
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
</li> */}

            <Fragment>
                <div className={classes.question}>{props.id}. {props.question}</div>
                <div className={classes.answers}>
                    <ul >
                        <li className={` ${quizState.selectA === true ? classes.onselect : classes.options}`} onClick={optionAClickHandler}> <span>A</span><p>{props.options[0]}</p></li>
                        <li className={` ${quizState.selectB === true ? classes.onselect : classes.options}`} onClick={optionBClickHandler}> <span>B</span><p>{props.options[1]}</p></li>
                        <li className={` ${quizState.selectC === true ? classes.onselect : classes.options}`} onClick={optionCClickHandler}> <span>C</span><p>{props.options[2]}</p></li>
                        <li className={` ${quizState.selectD === true ? classes.onselect : classes.options}`} onClick={optionDClickHandler}> <span>D</span><p>{props.options[3]}</p></li>
                    </ul>
                </div>
            </Fragment>

        </Fragment>
    )
}
export default QuizItem;
