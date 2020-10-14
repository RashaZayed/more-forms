import React, {useState} from 'react';
import Form from './components/Form'
import Results from './components/Results'


import './App.css';

function App() {
  const [state ,setState ] = useState({
    firstName : "",
    lastName: "",
    email:"",
    password: "",
    confirmPassword:"",
  })
   
  return (
    <div className="App">
      < Form input={state}  setInput={setState} />
      <Results data={state}  />
      
     
    </div>
  );
}

export default App;
