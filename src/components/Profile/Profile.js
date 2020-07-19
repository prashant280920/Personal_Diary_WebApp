import React from 'react';
import Calender from "./.././Calender/Calender.js";
import Mood from "./Mood.js";
import Emoji from ".././Emoji/Emoji.js";

const Profile = ({ Month, Year, rightClmChange }) => {
	console.log("Pro",Month,Year)
		return (
		<div className=" pa2 profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			 <Emoji onClick={rightClmChange} className="pointer settingIcon" symbol="⚙️" label="setting" />
			<h1 className="p-cal"><u>Calender</u></h1>
			<Calender Month={Month} Year={Year}/>
			<h1 className="p-feel">How You feel Today?</h1>
			<Mood />
		</div>
	);	
	
	
}
export default Profile;