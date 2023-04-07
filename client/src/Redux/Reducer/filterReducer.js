import * as actionType from '../Constants/Constants'


export const getFilterDataReducer = (state = [],action) => {
  switch (action.type) {
    case actionType.GET_FILTER_DATA_SUCCESS:
        return {data : action.payload}
    case actionType.GET_FILTER_DATA_SUCCESS:
        return { error : action.payload}
    default:
        return state;
  }
}
