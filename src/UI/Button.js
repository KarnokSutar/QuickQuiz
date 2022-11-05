import classes from './Button.module.css'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import QuizContext from '../store/quiz-context';

function Button(props){
    const quizCTX = useContext(QuizContext);
    const navigate = useNavigate();
function quizFetchHandler(){
            quizCTX.setQuestions();
            quizCTX.setCorrectAnsArandPickedAnsArraytoNull();
            console.log(quizCTX.questions);
            console.log(quizCTX.point);
          navigate('/quizes');
          }
    
    return(
        
        <div className={classes.container}>
            <div className={classes.center}>
            <button className={classes.button} onClick={quizFetchHandler}>{props.children}</button>
</div>
        </div>
    )
}
export default Button;