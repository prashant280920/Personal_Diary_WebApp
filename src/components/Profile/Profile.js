import React from 'react';
import Calender from "./.././Calender/Calender.js";

const Profile = ({ Month, Year }) => {
	console.log("Pro",Month,Year)
		return (
		<div className=" pa2 profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			<h1 className="p-cal"><u>Calender</u></h1>
			<Calender Month={Month} Year={Year}/>
		</div>
	);	
	
	
}
export default Profile;