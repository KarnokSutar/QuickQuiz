import classes from './Container.module.css'
import Button from './Button'

function Container(props){
    return(
        <div className={classes.container}>
            <div className={classes.center}>
<Button onClick={props.onClick}>Start</Button>
</div>
        </div>
    )
}
export default Container;