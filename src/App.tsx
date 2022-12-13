// App.tsx
import React from 'react'
import Experience from './components/experience/experience';
import MyFirstComponent from './components/myFirstComponent';
import Project from './components/projects/project';



const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <Experience />
      <Project />
    </div>
  );
}

export default App;