import React from 'react';
import Emoji from ".././Emoji/Emoji.js";
import Ravi from "./images/Ravi.png"
import Prashant from "./images/Prashant.JPG";
import { SocialIcon } from 'react-social-icons';



const About = () => {
	
		return (
			<div id="setting" className="  pa2  profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
				<h1 className="about-head center"><u>Diary App Developers</u></h1>
				<div className="about-container">
					<div className="center pa2 mb3 partner">
						<h2>Creator</h2>
						<img src={Prashant} className="br2 shadow-1" alt="Prashant"/>
						<h4>Prashant Kumar</h4>
						<div className="social">
							<ul>
								<li className="dib  grow-large"><SocialIcon style={{height: 40, width: 40 }} target="_blank" url={`http://instagram.com/prashant282000/`} bgColor="black" fgColor="white" /></li>
								<li className="dib mh3 grow-large"><SocialIcon style={{height: 40, width: 40 }} target="_blank" url={`http://facebook.com/profile.php?id=100011930971393`} bgColor="black" fgColor="white" /></li>
								<li className="dib  grow-large"><SocialIcon style={{height: 40, width: 40 }} target="_blank" url={`http://github.com/prashant280920`} bgColor="black" fgColor="white" /></li>
							</ul>
						</div>
					</div>
					<div className="partner center">
						<h2>Contributor</h2>
						<img src={Ravi} className="br2 shadow-1" alt="Ravi"/>
						<h4>Ravi Kumar</h4>
						<div className="social">
							<ul>
								<li className="dib grow-large"><SocialIcon style={{height: 40, width: 40 }} target="_blank" url={`http://instagram.com/kumar._.ravi/`} bgColor="black" fgColor="white" /></li>
								<li className="dib mh3 grow-large"><SocialIcon style={{height: 40, width: 40 }} target="_blank" url={`http://facebook.com/profile.php?id=100030335002073`} bgColor="black" fgColor="white" /></li>
								<li className="dib grow-large"><SocialIcon style={{height: 40, width: 40 }} target="_blank" url={`http://github.com/RaviKumar7870`} bgColor="black" fgColor="white" /></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		
	);	
	
	
}
export default About;