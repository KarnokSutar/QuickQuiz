import classes from './AnswersItem.module.css'
import { Fragment } from "react/cjs/react.production.min";
import { useContext } from 'react';
import QuizContext from '../store/quiz-context';

function AnswersItem(props) {
    var option1Class = classes.options
    var option2Class = classes.options
    var option3Class = classes.options
    var option4Class = classes.options
    let wrongAnswerClass;

    const quizCTX = useContext(QuizContext);
    const correctOption = quizCTX.correctAnsAr[props.id];
    const pickedOption = quizCTX.pickedAnsAr[props.id]

    switch (pickedOption) {

        case 0: if (correctOption === 0) { option1Class = classes.correctOption }
        else {
            option1Class = classes.incorrectOption
            wrongAnswerClass = classes.wrongAnswer
        }
            break;
        case 1: if (correctOption === 1) { option2Class = classes.correctOption }
        else {
            option2Class = classes.incorrectOption
            wrongAnswerClass = classes.wrongAnswer
        }
            break;
        case 2: if (correctOption === 2) { option3Class = classes.correctOption }
        else {
            option3Class = classes.incorrectOption
            wrongAnswerClass = classes.wrongAnswer
        }
            break;
        case 3: if (correctOption === 3) { option4Class = classes.correctOption }
        else {
            option4Class = classes.incorrectOption
            wrongAnswerClass = classes.wrongAnswer
        }
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <div className={`${classes.question} ${wrongAnswerClass}`}>{props.id}. {props.question}</div>
            <div className={classes.answers}>
                <ul >
                    <li className={`${option1Class} ${correctOption === 0 && classes.correctOption}`}> <span>A</span><p>{props.options[0]}</p></li>

                    <li className={`${option2Class} ${correctOption === 1 && classes.correctOption}`}> <span>B</span><p>{props.options[1]}</p></li>

                    <li className={`${option3Class} ${correctOption === 2 && classes.correctOption}`}> <span>C</span><p>{props.options[2]}</p></li>

                    <li className={`${option4Class} ${correctOption === 3 && classes.correctOption}`}> <span>D</span><p>{props.options[3]}</p></li>

                </ul>
            </div>
        </Fragment>
    )
}
export default AnswersItem;