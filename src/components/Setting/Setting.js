import React from 'react';
import "../Diary/diary.css";
import Emoji from ".././Emoji/Emoji.js";
import Women from "./Avatar_images/Women.png";
import Men from "./Avatar_images/Men.png";
import { TiArrowBack} from "react-icons/ti";
import { IconContext } from "react-icons";

const Setting = (props) => {
	
		return (
		<div id="setting" className="  pa2  profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			<IconContext.Provider value={{  className: " pointer back" }}>
				  <div className="back-container" onClick={props.onBack}>
				    <TiArrowBack />
				    <p>Back</p>
				  </div>
				</IconContext.Provider>
			<h1 className="set-head center"><Emoji className="set-ico" symbol="🛠️🔧" label="setting" /><u>Setting</u><Emoji className="set-ico" symbol="🛠️🔧" label="setting" /></h1>
			<h3 className="set-text">Change Avatar</h3>
			<div className="center Avatar-container">
				<div className="Avatar active br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Men} className="" alt="Men Avatar"/>
					<h4 style={{margin:"0px"}} > Men </h4>
				</div>
				<div className="Avatar br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar br2 dib grow pointer" onClick={props.avatarSelection}>
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
			</div>
			<h3 className="set-text">Change Diary Name</h3>
			<div className="center diaryName">
					<input className="dib"  type="text" placeholder="Diary Name"/>	
			</div>
			<h3 className="set-text">Choose Text Color</h3>
			<div className="center text-container">
				<div className="box pointer text-color active grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#000"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#192eaf"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#25bf31"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#ffeb3b"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#fb8c00"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#f32b1d"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#f30a59"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#a90abf"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#10b0c5"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#7b3b23"}}></div>
				<div className="box pointer text-color grow-large dib" onClick={props.textColorSelection} style={{backgroundColor:"#607d8b"}}></div>
			</div>
			<div className="saveBtn center grow pointer" onClick={props.saveChanges}>
				<h3 className="">Save Changes</h3>
			</div>
		</div>
	);	
	
	
}
export default Setting;