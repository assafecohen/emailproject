import {
  SEARCH_FILTER,
  FILTER_BY,
  SELECT_ALL_EMAILS,
  SELECT_EMAIL,
  FETCH_EMAILS,
  REJECT_SELECTED_EMAILS,
  APPROVE_SELECTED_EMAILS,
  TABLE_TYPE
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
export const rejectSelectedEmails = () => ({
  type: REJECT_SELECTED_EMAILS
});
export const approveSelectedEmails = () => ({
  type: APPROVE_SELECTED_EMAILS
});
export const tableType = tableType => ({
  type: TABLE_TYPE,
  tableType
});
