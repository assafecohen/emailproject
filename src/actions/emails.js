import {
  SEARCH_FILTER,
  FILTER_BY,
  SELECT_ALL_EMAILS,
  SELECT_EMAIL,
  FETCH_EMAILS,
  CHANGE_EMAIL_STATUS,
  TABLE_TYPE,
  DELETE_EMAIL
} from './actionsTypes';

export const selectEmail = id => ({
  type: SELECT_EMAIL,
  id
});
export const selectAllEmails = () => ({
  type: SELECT_ALL_EMAILS
});
export const searchFilter = searchFilterText => ({
  type: SEARCH_FILTER,
  searchFilterText
});
export const filterBy = filterBy => ({
  type: FILTER_BY,
  filterBy
});
export const fetchEmails = emails => ({
  type: FETCH_EMAILS,
  emails
});
export const changeEmailStatus = status => ({
  type: CHANGE_EMAIL_STATUS,
  status
});
export const deleteEmail = id => ({
  type: DELETE_EMAIL
});
export const tableType = tableType => ({
  type: TABLE_TYPE,
  tableType
});
