import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const SystemLogCard = ({isVisible}) => {

    const data = "This is the log and this is the second log line";

    if(!isVisible) {
        return null;
    }

    return(
        <Container  style={{ padding: '10%'}}>
            <Row className="justify-content-md-center">
                <Col>
                <Card>
                    <Card.Header as="h5">System Log</Card.Header>
                </Card>
                <Table striped bordered hover >
                    <ListGroup variant="light">
                        {data}
                    </ListGroup>
                </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default SystemLogCard;