import React from 'react';
import SideBar from './SideBar';
import '../assets/css/styleP.css'


function App() {
  return (
    <React.Fragment>
      <div className='bg-app' id="wrapper">
      <SideBar />
      </div>
    </React.Fragment>
  );
}

export default App;
