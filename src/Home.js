import React from 'react';
import MainNavbar from './MainNavbar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  return (
    <React.Fragment>
        <Container fluid>
            <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                <MainNavbar/>
            </Row>
            <Container>
                <HomeCarousel/>
            </Container>
        </Container>
    </React.Fragment>
  );
}

export default Home;
