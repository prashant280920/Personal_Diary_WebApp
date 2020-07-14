import React from 'react';
import Emoji from './Emoji.js';
 


// ✋👌👍👎✊👊🤛🤜🤚👋🤟✍️👏👐🙌🤲🙏🤝🌹🥀🌺🌻🌼🌷🍇🍈🍉🍊🍋
// 🍌🍍🍓🍒🍐🍑🍏🍎🥭🥝🍅🥥🥑🍆🥔🥕🍔🍟🍕🌭🥪🌮🌯🥙🎂🍰🌜☀️
// 🌞⭐🌟⛅⛈️🌤️🌥️🌧️🌨️🌩️🌪️🌫️🌬️🌀🎉🎊✨🎈🎁🏏🏑🏀🏐🏅⚽🏸
// 🙎🙅🙆💁🙋🙇🤦🤷💆💇
const EmojiList = () => {
	 
	const emoji = [
		{ key:"1",label:"smileys",className:"size",symbol:"😀",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;}	},
		{ key:"2",label:"smileys",className:"size",symbol:"😁",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;}},
		{ key:"3",label:"smileys",className:"size",symbol:"😂",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"4",label:"smileys",className:"size",symbol:"🤣",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"5",label:"smileys",className:"size",symbol:"😃",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"6",label:"smileys",className:"size",symbol:"😄",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"7",label:"smileys",className:"size",symbol:"😅",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"8",label:"smileys",className:"size",symbol:"😆",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"9",label:"smileys",className:"size",symbol:"😉",	onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"10",label:"smileys",className:"size",symbol:"😊",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"11",label:"smileys",className:"size",symbol:"😋",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"12",label:"smileys",className:"size",symbol:"😎",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"13",label:"smileys",className:"size",symbol:"😍",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"14",label:"smileys",className:"size",symbol:"😘",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"15",label:"smileys",className:"size",symbol:"🥰",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"16",label:"smileys",className:"size",symbol:"😗",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"17",label:"smileys",className:"size",symbol:"😙",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"18",label:"smileys",className:"size",symbol:"😚",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"19",label:"smileys",className:"size",symbol:"😐",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"20",label:"smileys",className:"size",symbol:"🙂",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"21",label:"smileys",className:"size",symbol:"🤗",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"22",label:"smileys",className:"size",symbol:"🤩",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"23",label:"smileys",className:"size",symbol:"🤔",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"24",label:"smileys",className:"size",symbol:"🤨",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"25",label:"smileys",className:"size",symbol:"😐",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"26",label:"smileys",className:"size",symbol:"😑",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"27",label:"smileys",className:"size",symbol:"😶",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"28",label:"smileys",className:"size",symbol:"🙄",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"29",label:"smileys",className:"size",symbol:"😏",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"30",label:"smileys",className:"size",symbol:"😣",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"31",label:"smileys",className:"size",symbol:"😥",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"32",label:"smileys",className:"size",symbol:"😮",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"33",label:"smileys",className:"size",symbol:"🤐",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"34",label:"smileys",className:"size",symbol:"😯",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"35",label:"smileys",className:"size",symbol:"😪",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"36",label:"smileys",className:"size",symbol:"😫",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"37",label:"smileys",className:"size",symbol:"😴",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"38",label:"smileys",className:"size",symbol:"😌",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"39",label:"smileys",className:"size",symbol:"😛",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"40",label:"smileys",className:"size",symbol:"😜",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"41",label:"smileys",className:"size",symbol:"😝",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"42",label:"smileys",className:"size",symbol:"🤤",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"43",label:"smileys",className:"size",symbol:"😒",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"44",label:"smileys",className:"size",symbol:"😓",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"45",label:"smileys",className:"size",symbol:"😔",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"46",label:"smileys",className:"size",symbol:"😕",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"47",label:"smileys",className:"size",symbol:"🙃",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"48",label:"smileys",className:"size",symbol:"🤑",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"49",label:"smileys",className:"size",symbol:"😲",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"50",label:"smileys",className:"size",symbol:"☹️",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"51",label:"smileys",className:"size",symbol:"🙁",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;}	},
		{ key:"52",label:"smileys",className:"size",symbol:"😖",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;}},
		{ key:"53",label:"smileys",className:"size",symbol:"😞",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"54",label:"smileys",className:"size",symbol:"😟",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"55",label:"smileys",className:"size",symbol:"😤",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"56",label:"smileys",className:"size",symbol:"😢",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"57",label:"smileys",className:"size",symbol:"😭",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"58",label:"smileys",className:"size",symbol:"😦",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"59",label:"smileys",className:"size",symbol:"😧",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"60",label:"smileys",className:"size",symbol:"😨",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"61",label:"smileys",className:"size",symbol:"😩",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"62",label:"smileys",className:"size",symbol:"🤯",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"63",label:"smileys",className:"size",symbol:"😬",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"64",label:"smileys",className:"size",symbol:"😰",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"65",label:"smileys",className:"size",symbol:"😱",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"66",label:"smileys",className:"size",symbol:"🥵",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"67",label:"smileys",className:"size",symbol:"🥶",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"68",label:"smileys",className:"size",symbol:"😳",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"69",label:"smileys",className:"size",symbol:"🤪",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"70",label:"smileys",className:"size",symbol:"😵",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"71",label:"smileys",className:"size",symbol:"😡",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"72",label:"smileys",className:"size",symbol:"😠",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"73",label:"smileys",className:"size",symbol:"🤬",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"74",label:"smileys",className:"size",symbol:"😷",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"75",label:"smileys",className:"size",symbol:"🤒",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"76",label:"smileys",className:"size",symbol:"🤕",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},

// 
		{ key:"77",label:"smileys",className:"size",symbol:"🤢",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"78",label:"smileys",className:"size",symbol:"🤮",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"79",label:"smileys",className:"size",symbol:"🤧",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"80",label:"smileys",className:"size",symbol:"😇",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"81",label:"smileys",className:"size",symbol:"🤠",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"82",label:"smileys",className:"size",symbol:"🥳",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"83",label:"smileys",className:"size",symbol:"🥴",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"84",label:"smileys",className:"size",symbol:"🥺",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"85",label:"smileys",className:"size",symbol:"🤥",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"86",label:"smileys",className:"size",symbol:"🤫",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"87",label:"smileys",className:"size",symbol:"🤭",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"88",label:"smileys",className:"size",symbol:"🧐",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"89",label:"smileys",className:"size",symbol:"🤓",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"90",label:"smileys",className:"size",symbol:"💪",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"91",label:"smileys",className:"size",symbol:"🦵",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"92",label:"smileys",className:"size",symbol:"🦶",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"93",label:"smileys",className:"size",symbol:"👈",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"94",label:"smileys",className:"size",symbol:"👉",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"95",label:"smileys",className:"size",symbol:"☝️",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"96",label:"smileys",className:"size",symbol:"👆",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"97",label:"smileys",className:"size",symbol:"🖕",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"98",label:"smileys",className:"size",symbol:"👇",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"99",label:"smileys",className:"size",symbol:"✌️",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"100",label:"smileys",className:"size",symbol:"🤞",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"101",label:"smileys",className:"size",symbol:"🖖",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"102",label:"smileys",className:"size",symbol:"🤘",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"103",label:"smileys",className:"size",symbol:"🤙",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"104",label:"smileys",className:"size",symbol:"🤞",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
		{ key:"105",label:"smileys",className:"size",symbol:"🖐️",onClick:function(e){document.getElementById("qual").value = document.getElementById("qual").value+e.target.textContent;	}},
							
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