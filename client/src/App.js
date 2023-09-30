import React from 'react'
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SuccessPage from './components/SuccessPage';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<SuccessPage/>} path='/paymentSuccess'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App