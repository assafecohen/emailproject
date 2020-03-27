import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import * as actions from '../../actions/';

import { useDispatch } from 'react-redux';

const StyledButton = styled.button`
  background: none;
  border: none;
`;
const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: '40px' }}>
      <Row>
        <StyledButton
          onClick={() => dispatch(actions.tableType('ReleaseRequests'))}
        >
          Release Requests
        </StyledButton>
      </Row>
      <Row>
        <StyledButton
          onClick={() => dispatch(actions.tableType('AllQuarantined'))}
        >
          All Quarantined Emails
        </StyledButton>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Sidebar;
