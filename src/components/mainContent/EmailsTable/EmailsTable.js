import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import EmailRow from './EmailRow/EmailRow';
import * as actions from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { serverDns } from '../../../config';

const StyledTable = styled(Table)`
  background: #fff;
  font-size: 14px;
  overflow-x: visible;

  thead th {
    position: sticky;
    top: 0;
    background: #313a69;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
    max-width: 100px;
  }
  tbody td {
    max-width: 100px;
    border: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const EmailsTable = () => {
  const dispatch = useDispatch();
  const emails = useSelector(state => state.emails.emails);
  const filterBy = useSelector(state => state.emails.filterBy);
  const tableType = useSelector(state => state.emails.tableType);
  const searchFilterText = useSelector(state => state.emails.searchFilterText);

  useEffect(() => {
    fetch(`${serverDns}:3001/emails`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(actions.fetchEmails(data));
      });
  }, []);

  return (
    <StyledTable striped bordered responsive size='sm'>
      <thead>
        <tr>
          <th>
            <input
              type='checkbox'
              onChange={() => dispatch(actions.selectAllEmails())}
            />
          </th>
          <th>ID</th>
          {tableType ? (
            <>
              <th>Request Time</th>
              <th>Requested By</th>
            </>
          ) : (
            <th>Sent Time</th>
          )}

          <th>Recipient</th>
          <th>Sender</th>
          <th>Subject</th>
          <th>Categorized As</th>
        </tr>
      </thead>
      <tbody>
        {emails.map(email => {
          return email.sender.indexOf(searchFilterText) !== -1 &&
            email.isRequested === tableType &&
            (email.status === filterBy || filterBy === 'All Requests') ? (
            <EmailRow key={email.id} data={email} />
          ) : null;
        })}
      </tbody>
    </StyledTable>
  );
};

export default EmailsTable;
