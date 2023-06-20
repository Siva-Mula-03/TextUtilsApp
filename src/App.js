import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {

  const [Mode,setMode]=useState('light'); 
  const [alert,setAlert]=useState(null);
  const [theme,setTheme]=useState(Mode);


  const showAlert=(message,type)=>
  {
     setAlert(
      {
        msg:message,
        type:type
      }
     )

     setTimeout(() => {
          setAlert(null);
     }, 2000);

  
  }

  const changetheme1=()=>
  {
    setTheme('lightgreen');
    document.body.style.backgroundColor='lightgreen';
    showAlert("lightgreen mode has been enabled","success");
  }
  const changetheme2=()=>
  {
    setTheme('yellow');
    document.body.style.backgroundColor='yellow';
    showAlert("yellow mode has been enabled","succsess");
  }
  const changetheme3=()=>
  {
    setTheme('red');
    document.body.style.backgroundColor='red';
    showAlert("red mode has been enabled","success");
  }
  const changetheme4=()=>
  {
    setTheme('cyan');
    document.body.style.backgroundColor='cyan';
    showAlert("cyan mode has been enabled","success");
  }
  const togglemode=()=>
  {
    if(Mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-dark';
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils-light';
    }
  }
  //Whether dark mode is enabled or not
  return (
    <>
   {/*<Router>  */}

   <Navbar title="TextUtils" mode={Mode} togglemode={togglemode} theme1={changetheme1} theme2={changetheme2} theme3={changetheme3} theme4={changetheme4}/>
   <Alert alert={alert}/>
 <div className="container my-3">
 <TextForm heading="Enter The Text below" mode={Mode} showAlert={showAlert} theme1={changetheme1} theme2={changetheme2} theme3={changetheme3} theme4={changetheme4}/>
{/* /* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="">
          <TextForm heading="Enter The Text below" mode={Mode} showAlert={showAlert} theme1={changetheme1} theme2={changetheme2} theme3={changetheme3} theme4={changetheme4}/>
          </Route>
  </Switch>*/ }
 
 </div>
 {/* </Router> */}
   </>
  );
}

export default App;
