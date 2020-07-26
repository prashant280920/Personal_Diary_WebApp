import React from 'react';
import "./diary.css";
import Emoji from ".././Emoji/Emoji.js";
import EmojiList from ".././Emoji/EmojiList.js";
import Profile from ".././Profile/Profile.js";
import Setting from ".././Setting/Setting.js";
import About from ".././About/About.js";
import $ from 'jquery';
import 'tachyons';
import Women from "../Setting/Avatar_images/Women.png";
import Man from "../Setting/Avatar_images/Man.png";
import Old_Man from "../Setting/Avatar_images/Old_Man.png";
import Old_Women from "../Setting/Avatar_images/Old_Women.png";
import Boy from "../Setting/Avatar_images/Boy.png";
import Girl from "../Setting/Avatar_images/Girl.png";
import { IconContext } from "react-icons";
import { GiSave } from "react-icons/gi";
// import Diarywallper from "./Diarywallper.png"

class Diary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			newRoute:"profile",		
			Month:new Date().getMonth()+1,
			Year:new Date().getFullYear(),
			Avatar:Women,
			DiaryName:'',
			textColor:"#000"
			}
	}
	monthInText = (value) => {
		console.log("hi")
		var text = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
		return(text[value])
	} 
	

	onMonthChange = (e) => {
		var a = e.target.value
		console.log("monthchange")
		if (a <=12 && a>=1){
			this.setState({Month:parseInt(e.target.value)})
			var month = document.getElementsByClassName("H1")[0].innerHTML
			console.log("check",this.state.Month,this.monthInText(this.state.Month))
			 var c = month.replace(month.slice(0,3),this.monthInText(a));
			  
      c = c.replace(c.slice(4,6),"01")
      document.getElementsByClassName("H1")[0].innerHTML = c;
      var star = document.getElementById("favorite");
      star.textContent= "☆";
      star.style.left="93%";
      star.title="Add Favorite";

     
		}
	
	}
	 onYearChange = (e) => {
	 	console.log("year")
	 	var a = e.target.value
	 	if(a <= new Date().getFullYear() && a>=2000 ){
	 		this.setState({Year:parseInt(e.target.value)})

		var year = document.getElementsByClassName("H1")[0].innerHTML
			 var c = year.replace(year.slice(8,12),(e.target.value));
			 document.getElementsByClassName("H1")[0].innerHTML = c;	
	 	}

		
	}
	
	changeFavSymbol = (e) => {
		console.log("yes",this.state.Month,new Date().getMonth()+1,this.state.Month <= (new Date().getMonth()),this.state.Year,new Date().getFullYear(),this.state.Year <=new Date().getYear())
	if (this.state.Month <= (new Date().getMonth()+1) && this.state.Year <=new Date().getFullYear() ){
		console.log("yo")
		var content = e.target.textContent;
    var date = document.getElementsByClassName("H1")[0].innerHTML.slice(4,6);
    if (date[0]==="0"){
        date = date[1];
       
      }
    if (content === "☆"){
      e.target.textContent='⭐';
      e.target.style.left="92%";
      e.target.title="Remove Favorite";
      
      console.log(date)
      
       document.getElementById(date).classList.add("fav") 
    }
    else{
      e.target.textContent='☆';
      e.target.style.left="93%";
      e.target.title="Add Favorite";
       document.getElementById(date).classList.remove("fav")
    }
		
	}
    
    
  }
  onBack = () => {
  	this.setState({newRoute:"profile"})
  }
  animate = () => {
  	console.log("working")
  	this.setState({newRoute:"setting"})

  }
  about = () => {
	this.setState({newRoute:"about"})

  }
   mouseOverImage = () => {
        var img = document.getElementsByClassName("imgChange")[0];
        img.textContent = "📖";
       }

    mouseOutImage = () => {
        var img = document.getElementsByClassName("imgChange")[0];
        img.textContent = "📘";
       }
    avatarSelection = (e) => {
    	
  		if (e.target.classList.value.includes("Avatar")){
  			var current = document.getElementsByClassName("Avatar active");
  			if(current[0]){
  					current[0].className = current[0].className.replace(" active", "");
  			e.target.classList.add("active")
  				
  			}else{
  				e.target.parentNode.classList.add("active")	
  					
  			}
    		
  		}else{
  			var current = document.getElementsByClassName("Avatar active");
  			console.log(current)
  			if(current[0]){
  				current[0].className = current[0].className.replace(" active", "");
  				e.target.parentNode.classList.add("active")	
  			
  			}else{
  					e.target.parentNode.classList.add("active")	
  				
  			}

    		
  		}
  		
  	
  	}
  	textColorSelection = (e) => {
  		var current = document.getElementsByClassName("text-color active")
  		current[0].className = current[0].className.replace("active","");
  		e.target.classList.add("active")
  		console.log(e.target.style.backgroundColor)
  		this.setState({textColor:e.target.style.backgroundColor})
  	}
  	saveChanges = (e) => {
  		var avatar= document.getElementsByClassName("Avatar active")[0].firstElementChild.alt;
  		if (avatar === "Man Avatar"){
  			this.setState({Avatar:Man})
  		}else if (avatar === "Women Avatar"){
  			this.setState({Avatar:Women})
  		}else if (avatar === "Old_Women Avatar"){
  			this.setState({Avatar:Old_Women})
  		}else if (avatar === "Boy Avatar"){
  			this.setState({Avatar:Boy})
  		}else if (avatar === "Girl Avatar"){
  			this.setState({Avatar:Girl})
  		}else if (avatar === "Old_Man Avatar"){
  			this.setState({Avatar:Old_Man})
  		}
  		var newDiaryName = document.getElementsByClassName("diaryName")[0].firstElementChild.value;
  		if (newDiaryName !== ""){
  			this.props.changeDiaryName(newDiaryName)
  		}
  		var newTextColor = document.getElementsByClassName("text-color active")[0].style.backgroundColor
  		this.setState({textColor:newTextColor})
  		document.getElementById("qual").style.color = newTextColor;
  		this.setState({newRoute:"profile"})
  	}
	 
	changeTheme = () => {
	 	
	  console.log("Ka Ho")
	  if ($("button").text()==="Light Mode"){
	    console.log("hi");
	    $( ".H1" ).addClass( "H1-Dark" );
	    $( ".H2" ).addClass( "H2-Dark" );
	    $( ".H3" ).addClass( "H3-Dark" );
	    $( "textarea" ).addClass( "textarea-Dark" );
	    $( ".profiles" ).addClass( "profiles-dark" );

	    $("button").text("Dark Mode")
	}
	  else{
	    ($("button").text("Light Mode"));
	    $( ".H1" ).removeClass( "H1-Dark" );
	    $( ".H3" ).removeClass( "H3-Dark" );
	    $( ".H2" ).removeClass( "H2-Dark" );
	    $( "textarea" ).removeClass( "textarea-Dark" );
	    $( ".profiles" ).removeClass( "profiles-dark" );
	    console.log("Na ho")
  }


	 }
	 componentDidMount(){
	 	document.getElementById("qual").style.color=this.state.textColor;
	 	console.log(document.getElementById("qual").style.color)
	 	// document.getElementByTagName("body").style.backgr
	 	// document.body.style.backgroundColor="red";
	 	 // document.body.style.background="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("+Diarywallper+") no-repeat center center fixed";
    //   document.body.style.backgroundSize="cover";
	 }


	render(){
		
		return (
			<div className ="bg-black br3 pv4 pl4 pr0" id="text">
				<div className="dib  h-100 mh1 w-60 textarea">

				  
					<textarea id="qual"className="br3" maxLength="1100" defaultValue="Add Title"></textarea>

					<h2 className="H1">{`${this.monthInText(this.state.Month)}`} 01, {`${this.state.Year}`} -<div className="dib stylechar"> &#128448;</div><div className="dib styleletter"> No Food</div><Emoji className="dib stylechar" symbol="💭" label="Comment" /> <div className="dib styleletter"> No Comment</div></h2>
					<div className="H4"><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /></div>
					<div id="emoji-dropdown" className="pointer "><div  className="dropdown grow"> <Emoji className="dropbtn" title="Add Emoji" symbol="😀" label="smiley" /><div className="dropdown-content">
						<EmojiList/>
					</div></div></div>
					<IconContext.Provider value={{  className: " pointer save-icon" }}>
			            <div className="save-icon-container" >
			              <GiSave />
			              <p className="pointer">Save</p>
			            </div>
			        </IconContext.Provider>
					{/*<button id="btt" onClick={this.changeTheme}>Light Mode</button>*/}
					<h6 className="H2">---------------------------------------------------------------<div className="dib star">{/*&#8902;&#128448;*/}	&#9734;</div>----------------------------------------------------------------</h6> 	
					<h6 className="H3">-----------------------------------------------------------------<div className="dib star">&#8902;</div>----------------------------------------------------------------</h6> 
					<div className="H5">
							<Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /></div>
					<span id='favorite' title="Add Favorite" className="pointer" onClick={this.changeFavSymbol}  role="img" aria-label="">☆</span>
				</div>
				<div className="dib ml1 h-100 rightclm">
					<div className="w-100 " id="search-box">
						<label style={{color:"white"}}>Enter Month</label>
						<label style={{color:"white"}}>Enter Year</label>
						<input className="date-search" type="number" max="12" min="1" defaultValue={this.state.Month} onChange={this.onMonthChange} />
						<input className="date-search" type="number"  max={new Date().getFullYear()} min="2000" defaultValue={this.state.Year} onChange={this.onYearChange}/>

					</div>	
					<div className="bg-white br3 w-100" id="profile">
						{ this.state.newRoute === "profile"
							?<Profile Avatar={this.state.Avatar} Month={this.state.Month} Year={this.state.Year} rightClmChange={this.animate} mouseOverImage={this.mouseOverImage} mouseOutImage={this.mouseOutImage} aboutChange={this.about}/>	
							: (this.state.newRoute === "setting" )
							?<Setting onBack={this.onBack} avatarSelection={this.avatarSelection} textColorSelection={this.textColorSelection} saveChanges={this.saveChanges}/>
							: <About onBack={this.onBack} />
						

						}
						
					</div>
				</div>
			</div>
		)
	}
}
export default Diary;