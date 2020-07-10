import React from 'react';
import Emoji from './Emoji.js';

const EmojiList = () => {
	 
	const emoji = [
		{
			key:"1",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}

		},
		{
			key:"2",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			key:"3",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			key:"4",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			key:"5",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			key:"6",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			key:"7",
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		}
	]
	return (
		<div>{
	   		emoji.map((user,i) => {
				return (
					<Emoji key={emoji[i].key}
					className={emoji[i].className}
					symbol={emoji[i].symbol} 
					label={emoji[i].label}
					onClick={emoji[i].onClick}
					 />);
					}
			)
	   	}
		</div>
	);
}

export default EmojiList;