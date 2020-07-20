import React from 'react';
import Calender from "./.././Calender/Calender.js";
import Mood from "./Mood.js";
import Emoji from ".././Emoji/Emoji.js";

const Profile = ({ Month, Year, rightClmChange , aboutChange, mouseOverImage, mouseOutImage}) => {
	console.log("Pro",Month,Year)
		return (
		<div className=" pa2 profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			<Emoji onClick={rightClmChange} className="pointer settingIcon dib" symbol="⚙️" label="setting" title="Setting"/>
			 <Emoji onMouseOver={mouseOverImage} onMouseOut={mouseOutImage} onClick={aboutChange} className="imgChange grow pointer dib aboutIcon" symbol="📘" label="about" title="About Developers" />
			<h1 className="p-cal"><u>Calender</u></h1>
			<Calender Month={Month} Year={Year}/>
			<h1 className="p-feel">How You feel Today?</h1>
			<Mood />
		</div>
	);	
	
	
}
export default Profile;