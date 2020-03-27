import React from 'react';
import * as actions from '../../../../actions/';
import { useDispatch, useSelector } from 'react-redux';

const EmailRow = ({ data }) => {
  const dispatch = useDispatch();
  const tableType = useSelector(state => state.emails.tableType);

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          checked={data.selected}
          onChange={() => dispatch(actions.selectEmail(data.id))}
        />
      </td>
      <td>{data.id}</td>
      {tableType === 'ReleaseRequests' ? (
        <td>{data.requestTime}</td>
      ) : (
        <td>{data.sentTime}</td>
      )}
      <td>{data.requestedBy}</td>
      <td>{data.recipient}</td>
      <td>{data.sender}</td>
      <td>{data.subject}</td>
      <td>{data.categorizedAs}</td>
    </tr>
  );
};

export default EmailRow;
