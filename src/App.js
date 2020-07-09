import React from 'react';
import './App.css';
import Login from "./components/Login/Login.js";
import Diary from "./components/Diary/diary.js";
function App() {
  
	 document.getElementById("root").style="width:100%;height:100%;";
  return (

  	// <Login />
  	<div className="full ">
        <div className="center diaryname">
  	  		<h1>Diary Name</h1>
        </div>
  	  	<div className="App  w-100 ">	
  	      <Diary />
  	     </div>
  	</div>
  );
}

export default App;
