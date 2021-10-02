import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {


    return (
        <div className={classes.backdrop} onClick={props.onClose}>

        </div>
    )
}

const ModalOverlay = (props) => {
    return (
            <div className={classes.modal}>
                <div className={classes.content}>
                    {props.children}
                </div>
            </div>

    )
}

const Modal = (props) => {
    const ElementProtal = document.getElementById('overlay')
    return (
        <>
          {ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/>, ElementProtal)  }
          {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, ElementProtal)  }
            {/* <ModalOverlay /> */}
        </>
    )
}


export default Modal;