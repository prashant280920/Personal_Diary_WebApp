import React from 'react';
import Dates from './Dates.js';


const Calender = ({ Month, Year }) => {
	console.log("Cal",Month,Year)
	return (
		<div className="pa2" style={{height:"40%",width:"100%"}}>
			<Dates Month={Month} Year={Year}/>
		</div>
	);
}
export default Calender;