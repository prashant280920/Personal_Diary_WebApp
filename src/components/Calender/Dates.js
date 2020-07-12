import React from 'react';
const Months = [
		
		{
			key:"1",
			start:1,
			end:31
		},
		{
			key:"2",
			start:1,
			end:28
		},
		{
			key:"3",
			start:1,
			end:31
		},
		{
			key:"4",
			start:1,
			end:30
		},
		{
			key:"5",
			start:1,
			end:31
		},
		{
			key:"6",
			start:1,
			end:30
		},
		{
			key:"7",
			start:1,
			end:31
		},
		{
			key:"8",
			start:1,
			end:31
		},
		{
			key:"9",
			start:1,
			end:30
		},
		{
			key:"10",
			start:1,
			end:31
		},
		{
			key:"11",
			start:1,
			end:30
		},
		{
			key:"12",
			start:1,
			end:31
		}

	]
	
const Dates = ({ Month, Year }) => {
	console.log(Month,Year)
	var t='';
		for (var i=Months[Month].start;i<=Months[Month].end;i++){
			t+=('<div class="bg-light-green dib br3 grow pa1 ma1 tc" style="height:30px;width:11%;">'+ i+'</div>')
		}
	
		return(
			<div className="dib center" style={{height:"100%",width:"100%"}} dangerouslySetInnerHTML={{ __html: t }} />
		);	
		
}	

export default Dates;