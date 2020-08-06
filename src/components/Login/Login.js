import React from 'react';
import "./Login.css";


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			signIn:{
				email : '',
				password: ''
			},
			signUp:{
				name:'',
				diaryName:"Diary Name",
				email : '',
				password: ''

			}
		}
	}
	signUpContent = (e) => {
		//console.log(e.target.value,e.target.placeholder)
		if ( e.target.placeholder === "Your Name"){
			this.setState(Object.assign(this.state.signUp,{name : e.target.value}))
		}else if ( e.target.placeholder === "Email"){
			this.setState(Object.assign(this.state.signUp,{email : e.target.value}))
		}else if ( e.target.placeholder === "Password"){
			this.setState(Object.assign(this.state.signUp,{password : e.target.value}))
		}else if ( e.target.placeholder === "Diary Name"){
			this.setState(Object.assign(this.state.signUp,{diaryName : e.target.value}))
		}
	}
	onSubmitSignUp = () => {
		const { name, email, password, diaryName } = this.state.signUp
		if (email !== '' && password !== "" && name !== ''){
			if (diaryName !== ""){
				fetch("http://localhost:5000/signUp",{
					method: "post",
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify({
						email:this.state.signUp.email,
						name:this.state.signUp.name,
						diaryName:this.state.signUp.diaryName,
						password:this.state.signUp.password
					})
				}).then(res => res.json())
				.then(user => {
					console.log(user,"outside")
					if (user.id){
						console.log(user,"inside")
						this.props.loadUser(user)
						this.props.onRouteChange("home")		
					}
				})
			}		
		}
	}
	signInContent = (e) => {
		if ( e.target.placeholder === "Email"){
			this.setState(Object.assign(this.state.signIn,{email : e.target.value}))
		}else if ( e.target.placeholder === "Password"){
			this.setState(Object.assign(this.state.signIn,{password : e.target.value}))
		}
	}
	onSubmitSignIn = () => {
		const { email, password} = this.state.signIn
		if (email !== '' && password !== ""){
			fetch("http://localhost:5000/signIn",{
					method: "post",
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify({
						email:this.state.signIn.email,
						password:this.state.signIn.password
					})
				}).then(res => res.json())
				.then(user => {
					if (user.id){
						this.props.loadUser(user)
						this.props.onRouteChange("home")		
					}
				})
		}
	}
	componentDidMount() {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');
		    signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		});

		// document.body.style.background="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./Diarywallper.png) no-repeat center center fixed";
	}

render(){
	return (
		<div>
			<div className="container" id="container">
				<div className="form-container sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						
						{/*---<span>or use your email for registration</span>---*/}
						<input className="w-100" type="text" placeholder="Your Name" onChange={this.signUpContent} required/>
						<input className="w-100" type="text" placeholder="Diary Name" onChange={this.signUpContent} required/>
						<input className="w-100" type="email" placeholder="Email" onChange={this.signUpContent} required/>
						<input className="w-100" type="password" placeholder="Password" onChange={this.signUpContent} required />
						{/*<input className="w-100" type="password" placeholder="Confirm Password" required />*/}
						<button className="formbutton" onClick={this.onSubmitSignUp}>Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						
						{/*---<span>or use your account</span>---*/}
						<input className="w-100" type="email" placeholder="Email" onChange={this.signInContent} required/>
						<input className="w-100" type="password" placeholder="Password" onChange={this.signInContent} required/>
						
						<button className="formbutton" onClick={this.onSubmitSignIn}>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost formbutton" id="signIn">Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost formbutton" id="signUp" >Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
}
	

export default Login;