import React from 'react';
import "./diary.css";


class Diary extends React.Component {
	render(){
		return (
			<div className ="h-100 w-90" id="text">
				<div className="dib mh3 h-100 ma2 w-60 textarea">
				  
					<textarea id="qual"className="br2">Add Title</textarea>
					<h1 className="H1">Dec 2, 2013</h1>
					<h6 className="H2">------------------------------------------------------------------⭐-------------------------------------------------------</h6> 
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