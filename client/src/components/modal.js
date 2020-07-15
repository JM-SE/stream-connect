import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modal-background">
            <div
                onClick={props.onDismiss}
                className="modal-card "
                style={{ marginTop: '12em' }}
            >
                <div
                    onClick={(event) => event.stopPropagation()}
                    className="modal-card-body"
                >
                    <div className="modal-card-title title is-3 ml-3 mt-3">
                        {props.title}
                    </div>
                    <div className="modal-card-body subtitle is-4">
                        {props.content}
                    </div>
                    <div className="modal-card-body level-right">
                        {props.actions}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
