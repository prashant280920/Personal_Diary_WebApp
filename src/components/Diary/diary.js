import React from 'react';
import "./diary.css";


class Diary extends React.Component {
	render(){
		return (
			<div className =" w-80" id="text">
				<div className="dib mh3 h-100 ma2 w-50 textarea">
				  
					<textarea id="qual"className="br3">Add Title</textarea>
					<h2 className="H1">Dec 2, 2013</h2>
					<h6 className="H2">---------------------------------------------------<div className="dib star">&#8902;</div>-------------------------------------------------------</h6> 
					
					<h6 className="H3">---------------------------------------------------<div className="dib star">&#8902;</div>-------------------------------------------------------</h6> 
				</div>
				<div className="dib w-30 h-100">
					<div className="w-100 " id="search-box">
						<input type="search" placeholder="Enter Year" />
						<input type="search" placeholder="Enter Month" />

					</div>	
					<div className=" w-100" id="profile"></div>
				</div>
			</div>
		)
	}
}
export default Diary;