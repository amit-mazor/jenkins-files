import React from 'react';
import Container from 'react-bootstrap/Container';
import MainNavbar from './MainNavbar';
import Row from 'react-bootstrap/esm/Row';
import ListGroup from 'react-bootstrap/esm/ListGroup';

const RESTAPIView = ({isVisible}) => {

    const data = [
        { description: "Uploads a package", method: 'POST', path: '/upload/package-name' },
        { description: "Checks whether a package is exists on Nexus", method: 'GET', path: '/check/package-name' },
    ];

    if(!isVisible){
        // return null;
    }

    return(
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                    <MainNavbar/>
                </Row>
                <Container>
                {data.map((item => 
                    <ListGroup className="my-2" style={ { 'padding': '20px' }}>
                    <ListGroup.Item>
                        <h2 style={ { 'margin': 'center'}}>{item.method}</h2> 
                        <h6 style={ { 'margin': 'center'}}>{item.description}</h6> 
                        <h4>{item.path}</h4>
                    </ListGroup.Item>
                    </ListGroup>
                ))}
                </Container>
            </Container>
        </React.Fragment>
    );
}

export default RESTAPIView;