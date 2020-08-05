import React from 'react';
import Calender from "./.././Calender/Calender.js";
import Mood from "./Mood.js";
import Emoji from ".././Emoji/Emoji.js";
import Women from "../Setting/Avatar_images/Women.png";
import Man from "../Setting/Avatar_images/Man.png";
import Old_Man from "../Setting/Avatar_images/Old_Man.png";
import Old_Women from "../Setting/Avatar_images/Old_Women.png";
import Boy from "../Setting/Avatar_images/Boy.png";
import Girl from "../Setting/Avatar_images/Girl.png";

class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			Avatar:Women
		}
	}
	
	
	NewAvatar = () => {
		const avatar = this.props.Avatar
		if (avatar === "Man"){
  			this.setState({Avatar:Man})
  		}else if (avatar === "Women"){
  			this.setState({Avatar:Women})
  		}else if (avatar === "Old_Women"){
  			this.setState({Avatar:Old_Women})
  		}else if (avatar === "Boy"){
  			this.setState({Avatar:Boy})
  		}else if (avatar === "Girl"){
  			this.setState({Avatar:Girl})
  		}else if (avatar === "Old_Man"){
  			this.setState({Avatar:Old_Man})
  		}
	}
	componentDidMount(){
		this.NewAvatar();
	}
		
	render(){
		
		const { email, Month, Year, rightClmChange , aboutChange, mouseOverImage, mouseOutImage} = this.props
		return (
		<div className=" pa2 profiles" style={{height:"100%",width:"100%",margin:"0px"}}>
			<Emoji onClick={rightClmChange} className="pointer settingIcon dib" symbol="⚙️" label="setting" title="Setting"/>
			 <Emoji onMouseOver={mouseOverImage} onMouseOut={mouseOutImage} onClick={aboutChange} className="imgChange grow pointer dib aboutIcon" symbol="📘" label="about" title="About Developers" />
			<h1 className="p-feel"><u>Avatar</u></h1>
			<div className="center">
				<img src={this.state.Avatar} alt="Avatar" id="myAvatar" />
			</div>
			<h1 className="p-cal"><u>Calender</u></h1>
			<Calender email={email} Month={Month} Year={Year}/>
			<h1 className="p-feel">How You feel Today?</h1>
			<Mood />
		</div>
		);
	}
			
	
	
}
export default Profile;