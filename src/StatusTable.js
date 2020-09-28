import React from 'react';
import successLogo from './status-success.svg';
import warningLogo from './status-warning.svg';
import errorLogo from './status-error.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const StatusTable = ({isVisible}) => {

    const successStatus = <img alt="" src={successLogo} className="justify-content-center"/>;
    const warningStatus = <img alt="" src={warningLogo} className="d-inline-block align-top"/>;
    const errorStatus = <img alt="" src={errorLogo} className="d-inline-block align-center"/>;

    const data = [
        { name: 'nodejs.12.4.rpm', value: successStatus },
        { name: 'git.1.5.3.rpm', value: successStatus },
        { name: 'java_1.8.0.el7.rpm', value: errorStatus },
        { name: 'reacharts.tar.gz', value: successStatus },
        { name: 'NexusUploaderShow.pptx', value: warningStatus },
    ];

    if(!isVisible) {
        return null;
    }

    return(
        <Container style={{ padding: '21%'}}>
            <Row className="justify-content-md-center">
                <Col>
                    <Card>
                        <Card.Header as="h5">Packages Status</Card.Header>
                    </Card>
                    <Table bordered hover size="sm">
                        <tbody>
                            {data.map((item => 
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default StatusTable;