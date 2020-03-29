import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { serverDns } from '../../config';

const StyledDiv = styled.div`
  background: #fff;
  font-size: 12px;
  padding-bottom: 10px;
  background: #ececec;

  label {
    padding: 5px;
  }
  #actionSelect1 {
    padding: 3px;
    background: #ececec;
    border: 1px solid #dedede;
    :hover {
      cursor: pointer;
    }
  }
  #downloadEML {
    font-size: 10px;
    align-height: center;
  }
  #search {
    background: url(https://img.icons8.com/search/) no-repeat;
    background-size: contain;
    padding-left: 30px;
    background-color: white;
  }
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 3px 8px;
  :hover {
    background: #858588;
    border-radius: 3px;
  }
  :active {
    background: #858588;
    border-radius: 3px;
  }
`;
const ActionsBar = () => {
  const tableType = useSelector(state => state.emails.tableType);
  const dispatch = useDispatch();
  const handleRefreshEmails = () => {
    fetch(`${serverDns}:3001/emails`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(actions.fetchEmails(data));
      });
  };

  return (
    <StyledDiv fluid>
      <Row className='justify-content-md-center'>
        <Col>
          <div>
            <label htmlFor='actionSelect'>Status</label>
            <select
              id='actionSelect'
              onChange={e => dispatch(actions.filterBy(e.target.value))}
            >
              <option value='All Requests'>All Requests</option>
              <option value='Approved'>Approved</option>
              <option value='Rejected'>Rejected</option>
            </select>
          </div>
        </Col>

        <Col>
          <StyledButton
            onClick={() => dispatch(actions.changeEmailStatus('Approved'))}
          >
            Release
          </StyledButton>
        </Col>
        <Col>
          {tableType === 'ReleaseRequests' ? (
            <StyledButton
              onClick={() => dispatch(actions.changeEmailStatus('Rejected'))}
            >
              Reject
            </StyledButton>
          ) : (
            <StyledButton
              onClick={() => dispatch(actions.deleteEmail('Delete'))}
            >
              Delete
            </StyledButton>
          )}
        </Col>
        <Col>
          <StyledButton onClick={() => handleRefreshEmails()}>
            Refresh
          </StyledButton>
        </Col>
        <Col>
          <input
            id='search'
            type='text'
            placeholder='Search'
            onChange={e => dispatch(actions.searchFilter(e.target.value))}
          />
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ActionsBar;
