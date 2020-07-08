import React from 'react';
import Emoji from './Emoji.js';


const EmojiList = () => {
	const emoji = [
		{
			label:"cloud",
			className:"",
			symbol:"☁️"
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️"
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️"
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️"
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️"
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️"
		},
		{
			label:"cloud",
			className:"size",
			symbol:"☁️"
		}
	]
	return (
		<div>{
	   		emoji.map((user,i) => {
				return (
					<Emoji className={emoji[i].className}
					symbol={emoji[i].symbol} 
					label={emoji[i].label}
					 />);
			})
	   	}
		</div>
	);
}

export default EmojiList;