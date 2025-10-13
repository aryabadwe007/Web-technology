import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter, Routes, Route, NavLink, Link
} 
from 'react-router-dom'
import Home from './Router/Home';
import AboutUs from './Router/Aboutus';
import Contact from './Router/Contact';
import Count from './Counter/Count';
import Case from './ULCases/upperlower'
import StudentInfo from './Student/details';
import Graduate from './Student/grad';
function App() {
  return (
    <>
      {/* <Count></Count> */}
 
   <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to='/Home'>Home</NavLink>
        </li>
        <li>
          <Link to='/Aboutus'>About us</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li>
          <Link to='/Count'>Count</Link>
        </li>

        <li>
          <Link to='/upperlower'>Cases</Link>
        </li>
        <li>
          <Link to='/details'>Studentinfo</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/Aboutus' element = {<AboutUs />} />
      <Route path='/Contact' element = {<Contact />}/>
      <Route path='/Count' element={<Count />}></Route>
      <Route path='/upperlower' element={<Case />}/>
      <Route path='/details' element={<StudentInfo />}/>
    </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
