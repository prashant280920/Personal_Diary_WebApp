import React from 'react';
const Months = [
		{
			key:"0",
			name:"",
			start:1,
			end:31
		},
		{
			key:"1",
			name:"Jan",
			start:1,
			end:31
		},
		{
			key:"2",
			name:"Feb",
			start:1,
			end:28
		},
		{
			key:"3",
			name:"Mar",
			start:1,
			end:31
		},
		{
			key:"4",
			name:"Apr",
			start:1,
			end:30
		},
		{
			key:"5",
			name:"May",
			start:1,
			end:31
		},
		{
			key:"6",
			name:"Jun",
			start:1,
			end:30
		},
		{
			key:"7",
			name:"Jul",
			start:1,
			end:31
		},
		{
			key:"8",
			name:"Aug",
			start:1,
			end:31
		},
		{
			key:"9",
			name:"Sep",
			start:1,
			end:30
		},
		{
			key:"10",
			name:"Oct",
			start:1,
			end:31
		},
		{
			key:"11",
			name:"Nov",
			start:1,
			end:30
		},
		{
			key:"12",
			name:"Dec",
			start:1,
			end:31
		}

	]
	
const Dates = ({ Month, Year }) => {
	
	var a = new Date();
	var t='';

		for (var i=Months[Month].start;i<=Months[Month].end;i++){
			
			
			if (Year<a.getFullYear() || Month<a.getMonth()+1){
				t+=('<div class="bg-light-green dib br3 grow pa1 ma1 tc" onclick="trying()" style="height:30px;width:11%;">'+ i+'</div>')	
				console.log("first")
			}else if (Year === a.getFullYear() && Month === a.getMonth()+1){
				if (i<=a.getDate()){
					t+=('<div class="bg-light-green dib br3 grow pa1 ma1 tc" onclick="trying()" style="height:30px;width:11%;">'+ i+'</div>')
					console.log(2,1)
				}else{
					t+=('<div class="bg-red dib br3 grow pa1 ma1 tc" style="height:30px;width:11%;">'+ i+'</div>')
					console.log(2,2)
				}
			}else if (Year === a.getFullYear() && Month > a.getMonth()+1){
				t+=('<div class="bg-red dib br3 grow pa1 ma1 tc" style="height:30px;width:11%;">'+ i+'</div>')
				console.log(3)
			}
			
		}
	
		return(
			<div className="dib center" style={{height:"100%",width:"100%"}} dangerouslySetInnerHTML={{ __html: t }} />
		);	
		
}	

export default Dates;