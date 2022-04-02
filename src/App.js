import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';

function App() {
  const [item, setİtem] = useState([[]]);
  const setState = (param) => {
    setİtem(param);
  }
  const [errMessage,setErrMessage]=useState("")
  const errMessageFunc=(param)=>{
    setErrMessage(param);
  }
  setTimeout(() => {
  
    setErrMessage(" ")
  }, 5000);
  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setState={setState} errMessageFunc={errMessageFunc}/>
        <Error errMessage={errMessage}/>
        <ResidentsList item={item}/>
      </div>
    </div>
  );
}

export default App;
