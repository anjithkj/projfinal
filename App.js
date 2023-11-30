import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';

import Student from './Components/Student/Student';
import Home from './Components/Home/Home';
import Studentview from './Components/Student/Studentview';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/student' element={<Student method='post'/>}></Route>
<Route path='/studentview' element={<Studentview method='GET'/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
