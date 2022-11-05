import classes from './FabButton.module.css'

function FabButton(props) {
    return (
        <div className={classes.container}>
            <span onClick={props.onClick}>Submit</span>
        </div>
    )
}
export default FabButton;