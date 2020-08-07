import React from 'react';
import './App.css';
import Login from "./components/Login/Login.js";
import Diary from "./components/Diary/diary.js";
import $ from "jquery";
import { IconContext } from "react-icons";
import { GoSignOut } from "react-icons/go";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      route:"signIn",
      user:{
        id : "",
        name:"",
        email:"",
        diaryName:"",
        joined:'',
        Avatar:"",
        textColor:""
      }
      
      }
  }
  loadUser = (data) => {

    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      diaryName:data.diaryname,
      joined:data.joined,
      Avatar:data.avatar,
      textColor:data.textcolor
    }})
  }
 
   changeDiaryName = (newName) => {
    this.setState(Object.assign(this.state.user,{diaryName : newName}))
   }
   onRouteChange = (route) => {
    this.setState({route:route})
    }
    loadDiaryName = (name) => {
      this.setState(Object.assign(this.state.user,{diaryName : name}))
    }

    // componentDidMount(){
    //   // if(this.state.route !== "signIn"){

    //   // document.getElementById("root").style="width:100%;height:100%;"
    //   // }else{
    //   //   document.getElementById("root").style="";
    //   // }

    //   // document.body.style.background="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("+Diarywallper+") no-repeat center center fixed";
    //   // document.body.style.backgroundSize="cover";
    //  }
     
	  
   render(){
    console.log("first")
    this.state.route !== "signIn"
    ? document.getElementById("root").style="width:100%;height:100%;"
    : document.getElementById("root").style="";
      return (
        <div className="full">
         { this.state.route === "signIn"
         ? <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
         :<div className="full ">
          <div className="center Diaryname">
            <h1 id="name">{this.state.user.diaryName}</h1>
            <h1 id="email" style={{display:"none"}}>{this.state.user.email}</h1>
            <IconContext.Provider value={{  className: " pointer sign-out-icon" }}>
            <div className="sign-out-icon-container" onClick={() => this.onRouteChange("signIn")}>
              <GoSignOut />
              <p className="pointer">Sign Out</p>
            </div>
          </IconContext.Provider>
          </div>
          <div className="App  w-100 "> 
            <Diary id={this.state.user.id} email={this.state.user.email} Avatar={this.state.user.Avatar} textColor={this.state.user.textColor} diaryName={this.state.user.diaryName} changeTheme={this.changeTheme} changeDiaryName={this.changeDiaryName}/>
           </div>
          </div>
          }
        </div>
       
    
  );  
   }
  
}

export default App;
