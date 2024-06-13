import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/types';

const initialState = {
  users: [],
  loading: false,
  filteredUsers: [], // Add filteredUsers to the initial state
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case 'FETCH_USERS':
        return {
          ...state,
          users: action.payload
        };
      case 'FILTER_USERS_BY_USERNAME':
        const searchTerm = action.payload.toLowerCase();
        const filteredUsers = state.users.filter(user =>
          user.username.toLowerCase().includes(searchTerm)
        );
        return {
          ...state,
          filteredUsers
        };
    default:
      return state;
  }
};

export default usersReducer;