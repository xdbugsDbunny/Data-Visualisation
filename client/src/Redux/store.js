import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getChartDataReducer} from './Reducer/dataReducer';
import {getFilterDataReducer} from './Reducer/filterReducer';
import thunk from 'redux-thunk'
const reducer = combineReducers({
    chartdata : getChartDataReducer,
    // filterdata : getFilterDataReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;