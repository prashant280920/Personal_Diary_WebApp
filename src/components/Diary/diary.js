import React from 'react';
import "./diary.css";
import Emoji from ".././Emoji/Emoji.js";
import EmojiList from ".././Emoji/EmojiList.js";
import Profile from ".././Profile/Profile.js";

class Diary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
						
			Month:new Date().getMonth()+1,
			Year:new Date().getFullYear()
			}
	}
	monthInText = (value) => {
		var text = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
		return(text[value])
	} 
	

	onMonthChange = (e) => {
		var a = e.target.value
		console.log(a)
		if (a <=12 && a>=1){
			this.setState({Month:parseInt(e.target.value)})		
		}
	
	}
	 onYearChange = (e) => {
		this.setState({Year:parseInt(e.target.value)})
	}
	 changeTheme = (e) => {
	 	console.log(e.target.value)
	 }

	render(){
	
		return (
			<div className ="bg-black br3 pv4 pl4 pr0" id="text">
				<div className="dib  h-100 mh1 w-60 textarea">
				  
					<textarea id="qual"className="br3" maxLength="1100" defaultValue="Add Title"></textarea>
					<h2 className="H1">{`${this.monthInText(this.state.Month)}`} 2, {`${this.state.Year}`} -<div className="dib stylechar"> &#128448;</div><div className="dib styleletter"> No Food</div><Emoji className="dib stylechar" symbol="💭" label="Comment" /> <div className="dib styleletter"> No Comment</div></h2>
					<div className="H4"><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /></div>
					<div id="emoji-dropdown"><div className="dropdown"> <Emoji className="dropbtn" symbol="😀" label="cloud" /><div className="dropdown-content">
						<EmojiList/>
					</div></div></div>
					{/*<button id="btt" onClick={this.changeTheme}>Hi</button>*/}
					<h6 className="H2">---------------------------------------------------<div className="dib star">{/*&#8902;&#128448;*/}	&#9734;</div>-------------------------------------------------------</h6> 	
					<h6 className="H3">---------------------------------------------------<div className="dib star">&#8902;</div>-------------------------------------------------------</h6> 
					<div className="H5"><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /></div>
					
				</div>
				<div className="dib ml1 h-100 rightclm">
					<div className="w-100 " id="search-box">
						<label style={{color:"white"}}>Enter Month</label>
						<label style={{color:"white"}}>Enter Year</label>
						<input type="number" max="12" min="1" defaultValue={this.state.Month} onChange={this.onMonthChange} />
						<input type="number"  max="2020" min="2000" defaultValue={this.state.Year} onChange={this.onYearChange}/>

					</div>	
					<div className="bg-white br3 w-100" id="profile">
						<Profile Month={this.state.Month} Year={this.state.Year}/>
					</div>
				</div>
			</div>
		)
	}
}
export default Diary;