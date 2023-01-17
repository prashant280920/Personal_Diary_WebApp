import React from 'react';
// var moment = require('moment'); // require
// moment().format(); 

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
	
const Dates = ({ email, Month, Year }) => {
	const monthInTwoDigit = ["","01","02","03","04","05","06","07","08","09","10","11","12"] 
	var month = monthInTwoDigit[Month]
	var a = new Date();
	var t='';
	console.log(email)
	// fetch("https://still-atoll-20251.herokuapp.com/fav",{
	fetch("http://localhost:3000/fav",{
          method: "post",
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            email:email,
            month:month,
            year:String(Year) 
          })
        }).then(res => res.json())
        .then(content => {
        	for(var i =0; i<content.length;i++){
          	// 	 var milisec = Date.parse(content[0].dates);
          	// 	 var m = moment.unix(milisec).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
          	// console.log(m)
          	document.getElementById(String(parseInt(content[i].dates.slice(8,10)))).classList.add("save")
          	document.getElementById(String(parseInt(content[i].dates.slice(8,10)))).style.borderBottom = "5px solid #0c11a0"	
          	if(content[i].fav){
          		document.getElementById(String(parseInt(content[i].dates.slice(8,10)))).classList.add("fav")	
          	}
          }
        })


		for (var i=Months[Month].start;i<=Months[Month].end;i++){
			
			
			if (Year<a.getFullYear() || Month<a.getMonth()+1){
				t+=('<div id="'+String(i)+  '" class="Date dib  grow-large pointer br2 ma1 mb0 tc" onclick="trying()" style="height:30px;width:11%;">'+ i+'</div>')	
			}else if (Year === a.getFullYear() && Month === a.getMonth()+1){
				if (i<=a.getDate()){
					t+=('<div id="'+String(i)+  '" class="Date dib  grow-large br2 pointer ma1 mb0 tc" onclick="trying()" style="height:30px;width:11%;">'+ i+'</div>')
				}else{
					t+=('<div id="'+String(i)+  '" class="Date_disabled dib br2 mb0 ma1 tc" style="height:30px;width:11%;">'+ i+'</div>')
				}
			}else if (Year === a.getFullYear() && Month > a.getMonth()+1){
				t+=('<div id="'+String(i)+  '" class="Date_disabled dib br2  ma1 mb0 tc" style="height:30px;width:11%;">'+ i+'</div>')
			}
			
		}
	
		return(
			<div className="dib center" style={{height:"100%",width:"100%"}} dangerouslySetInnerHTML={{ __html: t }} />
		);	
		
}	

export default Dates;