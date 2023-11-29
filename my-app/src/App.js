import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import GoalInput from './components/GoalInput'
import Layout from './components/Layout'
import Switches from './components/Switches'
import Instrucciones from './components/Instrucciones'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from './context/ThemeContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeContext>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/GoalInput' element={<GoalInput />} ></Route>
              <Route path='/Instrucciones' element={<Instrucciones />} ></Route>
              <Route path='/Switches' element={<Switches />} ></Route>
              <Route path='*' element={<h1>Not Found</h1>} ></Route>
            </Route>
          </Routes>
        </ThemeContext>
      </BrowserRouter>
    </div>
  );
}

export default App;