import React from 'react';
import { Button, Modal } from 'react-bootstrap'; 

const ModalItem = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Recipe Editor</Modal.Title>
        </Modal.Header>

        <Modal.Body closeButton>
            <div className="form-group">
                <label className="control-label">Name</label>
                <input type="text" className="form-control"
                value={props.recipe.name} onChange={props.handleName}
                placeholder="What do you call it?"/>
            </div>
            <div className="form-group">
                <label className="control-label">Ingredients</label>
                <input type="text" className="form-control"
                value={props.recipe.ingredients} onChange={props.handleIngredients}
                placeholder="What do you need?"/>
            </div>
            <div className="form-group">
                <label className="control-label">Instructions</label>
                <input type="text" className="form-control"
                value={props.recipe.instructions} onChange={props.handleInstructions}
                placeholder="How do you do it?"/>
            </div>
            <Button bsStyle="primary" className="center-block" onClick={props.onClickSave}>Save</Button>  
        </Modal.Body>

    </Modal>
)

export default ModalItem; 