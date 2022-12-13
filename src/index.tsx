import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Experience from './components/experience/experience';
import Navbar from './components/navbar/navbar';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import './index.module.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";







const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/home' element={<Home />}/>
      <Route path='experience' element={<Experience />} />
      <Route path='/navbar' element={<Navbar />}/>
      <Route path='/projects' element={<Project />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
