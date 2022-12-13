import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import './index.module.scss';
import Navbar from './components/navbar/navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from './components/aboutMe/aboutMe';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='experience' element={<SomeExampleComponent />} />
      <Route path='aboutMe' element={<AboutMe />} />
      <Route path='/navbar' element={<Navbar />}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
