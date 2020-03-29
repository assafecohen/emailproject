import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import * as actions from '../../actions/';
import { useDispatch, useSelector } from 'react-redux';

const StyledButton = styled.button`
  background: none;
  border: none;
  transition: background 0.2s;
  background: ${props => (props.tableType ? '#b8d9e8' : 'none')};
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const tableType = useSelector(state => state.emails.tableType);

  return (
    <Container style={{ marginTop: '40px' }}>
      <Row>
        <StyledButton
          tableType={tableType}
          onClick={() => dispatch(actions.tableType(1))}
        >
          Release Requests
        </StyledButton>
      </Row>
      <Row>
        <StyledButton
          tableType={!tableType}
          onClick={() => dispatch(actions.tableType(0))}
        >
          All Quarantined Emails
        </StyledButton>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Sidebar;
