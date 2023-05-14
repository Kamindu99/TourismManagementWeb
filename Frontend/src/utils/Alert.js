import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Alert(props) {

    const { title, description, handleClose, show, alertAction } = props

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {alertAction ?
                        alertAction()
                        :
                        <>
                            <Button variant="primary" onClick={handleClose}>
                                Continue
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Alert;