import React from 'react';
import "./diary.css";
import Emoji from ".././Emoji/Emoji.js";
import EmojiList from ".././Emoji/EmojiList.js";
import Profile from ".././Profile/Profile.js";

class Diary extends React.Component {
	 
	render(){
		return (
			<div className ="bg-black br3 pv4 pl4 pr0" id="text">
				<div className="dib  h-100 mh1 w-60 textarea">
				  
					<textarea id="qual"className="br3" maxLength="1100" defaultValue="Add Title"></textarea>
					<h2 className="H1">Dec 2, 2013 -<div className="dib stylechar"> &#128448;</div><div className="dib styleletter"> No Food</div><Emoji className="dib stylechar" symbol="💭" label="Comment" /> <div className="dib styleletter"> No Comment</div></h2>
					<div className="H4"><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /></div>
					<div id="emoji-dropdown"><div className="dropdown"> <Emoji className="dropbtn" symbol="😀" label="cloud" /><div className="dropdown-content">
						<EmojiList/>
					</div></div></div>
					<h6 className="H2">---------------------------------------------------<div className="dib star">{/*&#8902;&#128448;*/}	&#9734;</div>-------------------------------------------------------</h6> 	
					<h6 className="H3">---------------------------------------------------<div className="dib star">&#8902;</div>-------------------------------------------------------</h6> 
					<div className="H5"><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /><Emoji className="cld" symbol="☁️" label="cloud" /><Emoji className="dib cloud" symbol="☁️" label="cloud" /></div>
					
				</div>
				<div className="dib ml1 h-100 rightclm">
					<div className="w-100 " id="search-box">
						<input type="search" placeholder="Enter Year" />
						<input type="search" placeholder="Enter Month" />

					</div>	
					<div className="bg-white br3 w-100" id="profile">
						<Profile />
					</div>
				</div>
			</div>
		)
	}
}
export default Diary;