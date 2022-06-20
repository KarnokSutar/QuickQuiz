
import { Fragment } from 'react/cjs/react.production.min';
import classes from './Modal.module.css'

function Backdrop(props){
return (
    <div className={classes.backdrop}
         onClick = {props.onClose}
    ></div>
)
}

function ModalOverlay(props){
return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
)
}

function Modal(props){
return (<Fragment>
<Backdrop onClose ={props.onClose}/>
<ModalOverlay>{props.children}</ModalOverlay>
</Fragment>
)
}

export default Modal;