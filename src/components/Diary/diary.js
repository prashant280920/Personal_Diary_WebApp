import React from 'react';
import "./diary.css";


class Diary extends React.Component {
	render(){
		return (
			<div className ="bg-black br3 pv4 pl4 pr0" id="text">
				<div className="dib  h-100 mh1 w-60 textarea">
				  
					<textarea id="qual"className="br3" maxlength="1100">Add Title</textarea>
					<h2 className="H1">Dec 2, 2013 -<div className="dib stylechar"> &#128448;</div><div className="dib styleletter"> No Food</div> <div className="dib stylechar">💭</div><div className="dib styleletter"> No Comment</div></h2>
					<h3 className="H4">☁️<div className="dib cloud">☁️</div></h3>
					<h6 className="H2">---------------------------------------------------<div className="dib star">{/*&#8902;&#128448;*/}	&#9734;</div>-------------------------------------------------------</h6> 
					
					<h6 className="H3">---------------------------------------------------<div className="dib star">&#8902;</div>-------------------------------------------------------</h6> 
					<div className="H5">☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div>☁️<div className="dib cloud">☁️</div></div>
				</div>
				<div className="dib h-100 rightclm">
					<div className="w-100 " id="search-box">
						<input type="search" placeholder="Enter Year" />
						<input type="search" placeholder="Enter Month" />

					</div>	
					<div className="bg-white br3 w-100" id="profile"></div>
				</div>
			</div>
		)
	}
}
export default Diary;