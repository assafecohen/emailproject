import {
  SEARCH_FILTER,
  FILTER_BY,
  SELECT_EMAIL,
  SELECT_ALL_EMAILS,
  FETCH_EMAILS,
  CHANGE_EMAIL_STATUS,
  TABLE_TYPE
} from '../actions/actionsTypes';
import { serverDns } from '../config';
const initalState = {
  emails: [],
  selectEmails: false,
  filterBy: 'All Requests',
  searchFilterText: '',
  tableType: 'ReleaseRequests'
};

const emails = (state = initalState, action) => {
  switch (action.type) {
    case SELECT_EMAIL:
      const updateEmails = state.emails.map(email => {
        if (email.id === action.id) {
          email.selected = !email.selected;
        }
        return email;
      });
      return {
        ...state,
        emails: updateEmails
      };
    case TABLE_TYPE:
      return { ...state, tableType: action.tableType };

    case SELECT_ALL_EMAILS:
      return {
        ...state,
        emails: state.emails.map(email => {
          if (
            email.status === state.filterBy ||
            state.filterBy === 'All Requests'
          ) {
            email.selected = !state.selectEmails;
          }
          return email;
        }),
        selectEmails: !state.selectEmails
      };
    case FILTER_BY:
      return {
        ...state,
        filterBy: action.filterBy
      };
    case SEARCH_FILTER:
      return {
        ...state,
        searchFilterText: action.searchFilterText
      };
    case FETCH_EMAILS:
      return {
        ...state,
        emails: action.emails
      };
    case CHANGE_EMAIL_STATUS:
      const updatedEmails = state.emails.filter(email => {
        if (email.selected !== 0) {
          email.status = action.status;
          return email;
        }
      });
      console.log(updatedEmails, 'updatedEmails');
      if (updatedEmails.length) {
        fetch(`${serverDns}:3001/emails`, {
          method: 'PUT',
          body: JSON.stringify({
            updatedEmails
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then(response => response.json())
          .then(json => console.log(json));

        return {
          ...state,
          emails: state.emails
        };
      }

    default:
      return state;
  }
};

export default emails;
