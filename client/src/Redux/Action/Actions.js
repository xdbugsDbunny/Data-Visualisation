import axios from 'axios'

import * as actionType from '../Constants/Constants'

const URL = "http://localhost:8000"

export const getChartData = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${URL}/dashboard`)
    dispatch({type:actionType.GET_CHART_DATA_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:actionType.GET_CHART_DATA_FAIL,payload:error.message})
  }
}