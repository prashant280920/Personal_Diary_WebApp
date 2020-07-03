import React from 'react';
import "./Login.css";


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email : '',
			password: '',
			name: ''
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
	}

render(){
	return (
		<div>
			<div className="container" id="container">
				<div className="form-container sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						
						{/*---<span>or use your email for registration</span>---*/}
						<input className="w-100" type="text" placeholder="Name" required/>
						<input className="w-100" type="email" placeholder="Email" required/>
						<input className="w-100" type="password" placeholder="Password" required />
						<input className="w-100" type="password" placeholder="Confirm Password" required />
						<button>Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						
						{/*---<span>or use your account</span>---*/}
						<input className="w-100" type="email" placeholder="Email" required/>
						<input className="w-100" type="password" placeholder="Password" required/>
						
						<button>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn">Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost" id="signUp">Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
}
	

export default Login;