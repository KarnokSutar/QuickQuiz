import classes from './Button.module.css'

function Button(props){
    return(
        
        <div className={classes.container}>
            <div className={classes.center}>
            <button className={classes.button} onClick={props.onClick}>{props.children}</button>
</div>
        </div>
    )
}
export default Button;