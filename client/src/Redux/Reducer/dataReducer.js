import * as actionType from '../Constants/Constants'


export const getChartDataReducer = (state = {data: []},action) => {
  switch (action.type) {
    case actionType.GET_CHART_DATA_SUCCESS:
        return {data : action.payload}
    case actionType.GET_CHART_DATA_FAIL:
        return { error : action.payload}
    default:
        return state;
  }
}
