import React from 'react';

function Guest(){
	return(
		<>
		<h1>Please Login</h1>
		<button>Login</button>
		</>
		)
}

function Welcome(){
	return(
	<>
		<h1>Hi Himanshi</h1>
		<button>Logout</button>
	</>
	)
}

const Register = (props)=>{
	console.log(props);
	const loggedIn = props.loggedIn;

	if(loggedIn){ 
		return <Welcome />
	}
	return <Guest />
}

export default Register;