import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion';

const UploadMenu = ({stateCode, states, clickAction, files, fileChangeAction}) => {

    return(
        <Accordion className="upload-menu" style={{ padding: '10px'}}>
            <Accordion.Toggle as={Button} size="lg" block eventKey="0" 
                variant={states[stateCode].color} 
                onClick={clickAction}
            >
                {states[stateCode].text}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Form>
                    <Form.File 
                        // label={files.map((item => 
                        //     <text>{item.name}</text>
                        // ))}
                        label="upload"
                        custom
                        multiple
                        onChange={fileChangeAction}
                    />
                </Form>
            </Accordion.Collapse>
        </Accordion>
    );
}

export default UploadMenu;