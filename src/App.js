import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailsTable from './components/mainContent/EmailsTable/EmailsTable';
import ActionsBar from './components/mainContent/ActionsBar';
import Sidebar from './components/Sidebar/Sidebar';
import Detail from './components/mainContent/Details';
function App() {
  return (
    <Fragment>
      <Container fluid style={{ background: '#ECECEC', height: '100%' }}>
        <Row style={{ height: '100%' }}>
          <Col lg={2} style={{ borderRight: '2px solid #dedede' }}>
            <Sidebar />
          </Col>
          <Col lg={10} style={{ height: '100%', padding: '20px' }}>
            <Container fluid style={{ height: '5%' }}>
              <ActionsBar />
            </Container>
            <Container
              fluid
              style={{
                height: '70%',
                overflowY: 'auto',
                marginBottom: '20px'
              }}
            >
              <EmailsTable />
            </Container>
            <Container fluid style={{ height: '25%', background: '#fff' }}>
              <Detail />
            </Container>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
