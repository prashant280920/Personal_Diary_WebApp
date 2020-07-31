import React from 'react';
import Dates from './Dates.js';


const Calender = ({ email, Month, Year }) => {
	console.log("Cal",Month,Year)
	return (
		<div className="pa2" style={{height:"35%",width:"100%"}}>
			<Dates email={email} Month={Month} Year={Year}/>
		</div>
	);
}
export default Calender;