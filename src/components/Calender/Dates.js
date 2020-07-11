import React from 'react';
const Months = [
		{
			key:"1",
			start:1,
			end:31
		}
	]
	
const Dates = () => {
	var t='';
		for (var i=Months[0].start;i<=Months[0].end;i++){
			t+=('<div class="bg-light-green dib br3 grow pa1 ma1 tc" style="height:30px;width:11%;">'+ i+'</div>')
		}
	
		return(
			<div className="dib center" style={{height:"100%",width:"100%"}} dangerouslySetInnerHTML={{ __html: t }} />
		);	
		
}	

export default Dates;