import React from 'react';
import './App.css';
import Login from "./components/Login/Login.js";
import Diary from "./components/Diary/diary.js";
import $ from "jquery";
// import Diarywallper from "./Diarywallper.png"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      signIn:false,
      DiaryName:'Diary Name'
      
      }
  }
 
   changeDiaryName = (newName) => {
    this.setState({DiaryName:newName})
   }

  
    componentDidMount(){
      if(this.state.signIn){

      
      }

      // document.body.style.background="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("+Diarywallper+") no-repeat center center fixed";
      // document.body.style.backgroundSize="cover";
     }
     
	 // 
   render(){
     document.getElementById("root").style="width:100%;height:100%;";
      return (

     // <Login />
    <div className="full ">
        <div className="center Diaryname">
          <h1 id="name">{this.state.DiaryName}</h1>
        </div>
        <div className="App  w-100 "> 
          <Diary changeTheme={this.changeTheme} changeDiaryName={this.changeDiaryName}/>
         </div>
    </div>
  );  
   }
  
}

export default App;
