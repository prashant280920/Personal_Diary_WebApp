import React from 'react';
import Emoji from ".././Emoji/Emoji.js";
import Women from "./Avatar_images/Women.png";
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
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}} > Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
				<div className=" Avatar dib grow pointer">
					<img src={Women} className="br2" alt="Women Avatar"/>
					<h4 style={{margin:"0px"}}> Women </h4>
				</div>
			</div>
			<h3 className="set-text">Change Diary Name</h3>
			<div className="center">
					<input className="dib diaryName" type="text" placeholder="Diary Name"/>	
			</div>
			<h3 className="set-text">Choose Text Color</h3>
			<div className="center text-container">
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
				<div className="dib box"><div className="text-color grow-large dib"></div></div>
			</div>
		</div>
	);	
	
	
}
export default Setting;