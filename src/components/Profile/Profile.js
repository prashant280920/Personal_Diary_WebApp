import React from 'react';
import Calender from "./.././Calender/Calender.js";

const Profile = ({ Month, Year }) => {
	console.log("Pro",Month,Year)
		return (
		<div className=" pa2" style={{height:"100%",width:"100%",margin:"0px"}}>
			<Calender Month={Month} Year={Year}/>
		</div>
	);	
	
	
}
export default Profile;