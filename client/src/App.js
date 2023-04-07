import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getChartData } from './Redux/Action/Actions'
import ScatterChart from './Charts/ScatterChart';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';

function App() {
  const {data} = useSelector(state=>state.chartdata)

  const dispatch= useDispatch()
  useEffect(()=>{
      dispatch(getChartData())
  },[dispatch])

  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path='/scatterchart' element={<ScatterChart data={data}/>} />
            <Route  path='/barchart' element={<BarChart data={data}/>} />
            <Route  path='/piechart' element={<PieChart data={data}/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
