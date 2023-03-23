import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';
import Movienav from './Components/Movienav';
import Moviehome from './Components/Moviehome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Moviehome></Moviehome><Routes>
        
        <Route path='/' element={<Moviehome></Moviehome>}></Route>
        <Route path='Movie' element={<Movie data={{id: '',moviename: '',director: '',language:'',genere:'',releaseyear:''}}
        method="post" />}/>

          </Routes></BrowserRouter>
    
    </div>
  );
}

export default App;
