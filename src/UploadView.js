import React from 'react';
import MainNavbar from './MainNavbar';
import UploadMenu from './UploadMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UploadStatusPie from './UploadStatusPie';
import StatusCard from './StatusTable';
import SystemLogCard from './SystemLogCard';

const UploadView = () => {

    // These are the states allowed to the upload menu to be in.
    const states = [
        { color: 'dark', text: 'Upload Packages' },
        { color: 'light', text: 'Click Here To Upload' },
        { color: 'success', text: 'Finished !' },
    ];

    // This is the state code, it's an index from the states array.
    const [stateCode, setStateCode] = React.useState(0);

    // This is the pie's active index.
    const [activeIndex, setActiveIndex] = React.useState(0);

    // This is visibility feature for the upload button. 
    // It determines whether or not the pie and charts will be shown.
    const [visibility, setVisibility] = React.useState(false);

    // This is the files information that uploaded.
    const [files, setFiles] = React.useState([]);

    const uploadClick = () => {
        switch (stateCode) {
            case 0:
                break;
            case 1:
                setVisibility(true);
                break;
            case 2:
            default:
          }
    }

    const onFilesChange = (event) => {
        console.log(event.target.files);
        // for (file in event.target.files) {
        //     console.log.apply(file.name);
        // }
        //setFiles(event.target.files);
        setStateCode(1);
    };

    const onPieEnter = (data, index) => {
        setActiveIndex(index);
    };

    return(
        <React.Fragment>
            <Container fluid="true">
            <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                <MainNavbar/>
            </Row>
            {/* <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                <APIMenu
                    isVisible={true}
                />
            </Row> */}
                <Row>
                    <Col sm={4}></Col>
                    <Col>
                        <UploadMenu 
                            stateCode={stateCode} 
                            states={states} 
                            clickAction={uploadClick}
                            fileChangeAction={event =>onFilesChange(event)}
                            files={files}
                        />
                    </Col>
                    <Col sm={4}></Col>
                </Row>
                <Row>
                    <UploadStatusPie 
                        activeIndex={activeIndex}
                        isVisible={visibility}
                        onMouse={onPieEnter}
                    />
                </Row>
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <StatusCard
                            isVisible={visibility}
                        />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8}>
                        <SystemLogCard
                            isVisible={visibility}
                        />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default UploadView;