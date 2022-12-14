// App.tsx
import React from 'react'
import Experience from './components/experience/experience';
import Project from './components/projects/project';



const App: React.FC = () => {
  return (
    <div>
      <Experience />
      <Project />
    </div>
  );
}

export default App;