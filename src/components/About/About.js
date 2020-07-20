import React from 'react';
import Emoji from ".././Emoji/Emoji.js";
import Ravi from "./images/Ravi.png"
import Prashant from "./images/Prashant.JPG"
import { SocialIcon } from 'react-social-icons';


const About = () => {
	
		return (
			<div id="setting" className="  pa2  profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
				<h1 className="about-head center"><u>Diary App Developers</u></h1>
				<div className="about-container">
					<div className="center partner">
						<h2>Creator</h2>
						<img src={Prashant} className="br2 shadow-3" alt="Prashant"/>
						<h4>Prashant Kumar</h4>
						
					</div>
					<div className="partner center">
						<h2>Contributor</h2>
						<img src={Ravi} className="br2 shadow-5" alt="Ravi"/>
						<h4>Ravi Kumar</h4>
					</div>
				</div>
			</div>
		
	);	
	
	
}
export default About;