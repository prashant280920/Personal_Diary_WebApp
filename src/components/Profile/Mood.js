import React from 'react';

class Mood extends React.Component {
	constructor(){
		super();
		this.state = {
			}
	}
		size = (e) => {
			var targetValue = e.target.textContent;
			var moodl=["forhappy","forsad","forangry","forlovely","forawful"]
			var moodList = document.getElementsByClassName("moodBox");
		
			for(var i = 0; i < moodList.length; i++){
				console.log(moodList[i].textContent.includes(targetValue))
				  if (moodList[i].textContent.includes(targetValue) ){
				  	moodList[i].lastElementChild.classList.add(moodl[i]);
				  	
				  }else{
				  	moodList[i].lastElementChild.classList.remove(moodl[i]);
				  }
			}
			
		}
		render(){
			return (
			<div className="" style={{height:"20%",width:"100%",margin:"0px"}}>
				
				<div className="moodBox grow-large center" onClick={this.size}><div className="mood " >😊</div><p onClick={this.size} className="happy">Happy</p></div>
				<div className="moodBox grow-large center" onClick={this.size}><div className="mood " >😔</div><p onClick={this.size} className="sad">Sad</p></div>
				<div className="moodBox grow-large center" onClick={this.size}><div className="mood " >😡</div><p onClick={this.size} className="angry">Angry</p></div>
				<div className="moodBox grow-large center" onClick={this.size}><div className="mood " >🥰</div><p onClick={this.size} className="lovely">Lovely</p></div>
				<div className="moodBox grow-large center" onClick={this.size}><div className="mood " >🤢</div><p onClick={this.size} className="awful">Awful</p></div>
				
			</div>
		);		
		}
		
	
	
}
export default Mood;