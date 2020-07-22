import React from 'react';
import Calender from "./.././Calender/Calender.js";
import Mood from "./Mood.js";
import Emoji from ".././Emoji/Emoji.js";
import Women from "../Setting/Avatar_images/Women.png";
import Men from "../Setting/Avatar_images/Men.png";

const Profile = ({ Month, Year, Avatar, rightClmChange , aboutChange, mouseOverImage, mouseOutImage}) => {
	console.log("Pro",Month,Year)
	
		// var c = document.getElementById("myCanvas");
		// var ctx = c.getContext("2d");
		// var img = document.getElementById("Avatar-img");
		// console.log(img)
		// ctx.drawImage(img, 10, 10);
	
		return (
		<div className=" pa2 profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			<Emoji onClick={rightClmChange} className="pointer settingIcon dib" symbol="⚙️" label="setting" title="Setting"/>
			 <Emoji onMouseOver={mouseOverImage} onMouseOut={mouseOutImage} onClick={aboutChange} className="imgChange grow pointer dib aboutIcon" symbol="📘" label="about" title="About Developers" />
			<h1 className="p-feel"><u>Avatar</u></h1>
			<div className="center">
				<img useRef="image" src={Avatar} id="myAvatar" />
			</div>
			<h1 className="p-cal"><u>Calender</u></h1>
			<Calender Month={Month} Year={Year}/>
			<h1 className="p-feel">How You feel Today?</h1>
			<Mood />
		</div>
	);	
	
	
}
export default Profile;