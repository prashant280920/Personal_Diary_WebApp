import React from 'react';
import Emoji from './Emoji.js';

const EmojiList = () => {
	 
	const emoji = [
		{
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}

		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️",
			onClick:function(e){
				document.getElementById("qual").value = 
				document.getElementById("qual").value+e.target.textContent; 
				
			}
		},
		{
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
					<Emoji className={emoji[i].className}
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