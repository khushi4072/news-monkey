import './App.css';
import React ,{Component} from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



export class App extends Component{
  
  
  render(){
    return(
      <>
      <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <br></br>
        <br></br>

        <Routes>
        <Route exact path="/" element={<News pagesize={5} country="in" category="general"></News>} />
        <Route exact path="/entertainment" element={<News key="entertainment" pagesize={5} country="in" category="entertainment"></News>} />

        <Route exact path="/sports" element={<News key="sports" pagesize={5} country="in" category="sports"></News>} />
        <Route exact path="/health" element={<News  key="health"pagesize={5} country="in" category="health"></News>} />
        <Route exact path="/technology" element={<News  key="technology"pagesize={5} country="in" category="technology"></News>} />
        <Route exact path="/science" element={<News key="science" pagesize={5} country="in" category="science"></News>} />
        <Route exact path="/business" element={<News  key="business"pagesize={5} country="in" category="business"></News>} />
        <Route exact path="/general" element={<News key="general"pagesize={5} country="in" category="general"></News>} />



       

        </Routes>
      </div>
      </BrowserRouter>
      </>

    )
  }


}

export default App;
