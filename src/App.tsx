// App.tsx
import React from 'react'
import Experience from './components/experience/experience';
import MyFirstComponent from './components/myFirstComponent';



const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <Experience />
    </div>
  );
}

export default App;