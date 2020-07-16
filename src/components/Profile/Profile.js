import React from 'react';
import Calender from "./.././Calender/Calender.js";
import Mood from "./Mood.js";

const Profile = ({ Month, Year }) => {
	console.log("Pro",Month,Year)
		return (
		<div className=" pa2 profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			<h1 className="p-cal"><u>Calender</u></h1>
			<Calender Month={Month} Year={Year}/>
			<h1 className="p-feel">How You feel Today?</h1>
			<Mood />
		</div>
	);	
	
	
}
export default Profile;