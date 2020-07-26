import React from 'react';
import './App.css';
import Login from "./components/Login/Login.js";
import Diary from "./components/Diary/diary.js";
import $ from "jquery";
import { IconContext } from "react-icons";
import { GoSignOut } from "react-icons/go";
// import Diarywallper from "./Diarywallper.png"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      route:"signn",
      isSignedIn:false,
      DiaryName:'Diary Name'
      
      }
  }
 
   changeDiaryName = (newName) => {
    this.setState({DiaryName:newName})
   }
   onRouteChange = (route) => {
    this.setState({route:route})
    }
    loadDiaryName = (name) => {
      this.setState({DiaryName:name})
    }

    componentDidMount(){
      // if(this.state.route !== "signIn"){

      // document.getElementById("root").style="width:100%;height:100%;"
      // }else{
      //   document.getElementById("root").style="";
      // }

      // document.body.style.background="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("+Diarywallper+") no-repeat center center fixed";
      // document.body.style.backgroundSize="cover";
     }
     
	  
   render(){
    console.log(this.state.DiaryName)
    this.state.route !== "signIn"
    ? document.getElementById("root").style="width:100%;height:100%;"
    : document.getElementById("root").style="";
      return (
        <div className="full">
         { this.state.route === "signIn"
         ? <Login onRouteChange={this.onRouteChange} diaryName={this.loadDiaryName}/>
         :<div className="full ">
          <div className="center Diaryname">
            <h1 id="name">{this.state.DiaryName}</h1>
            <IconContext.Provider value={{  className: " pointer sign-out-icon" }}>
            <div className="sign-out-icon-container" onClick={() => this.onRouteChange("signIn")}>
              <GoSignOut />
              <p className="pointer">Sign Out</p>
            </div>
          </IconContext.Provider>
          </div>
          <div className="App  w-100 "> 
            <Diary changeTheme={this.changeTheme} changeDiaryName={this.changeDiaryName}/>
           </div>
      </div>
        }
        </div>
       
    
  );  
   }
  
}

export default App;
