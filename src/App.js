import React from 'react';
import './App.css';
import Login from "./components/Login/Login.js";
import Diary from "./components/Diary/diary.js";
import $ from "jquery";
class App extends React.Component{
  
 
   

  
    componentDidMount(){
      
       document.getElementById("root").style="width:100%;height:100%;";
     
     }
     
	 // 
   render(){
    console.log("rerender")
      return (

     // <Login />
    <div className="full ">
        <div className="center diaryname">
          <h1 id="name">Diary Name</h1>
        </div>
        <div className="App  w-100 "> 
          <Diary changeTheme={this.changeTheme} />
         </div>
    </div>
  );  
   }
  
}

export default App;
