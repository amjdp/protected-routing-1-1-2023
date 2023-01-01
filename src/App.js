import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Private1 from './components/Private1';
import Private2 from './components/Private2';
import Public1 from './components/Public1';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route element={<Home/>} path="/"></Route>
      <Route element={<Private1/>} path="/private1"></Route>
      <Route element={<Private2/>} path="/private2"></Route>
      <Route element={<Public1/>} path="/public1"></Route>
      <Route element={<Login/>} path="/login"></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
