
const LoginForm = () => {
	return (
		<form>
			<div>
				<input placeholder={"Login"} />
			</div>
			<div>
				<input placeholder={"Password"} />
			</div>
			<div>
				<input type={"checkbox"} placeholder="Login" />
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const Login = (props) => {
	return (
		<div>
			<h1>Login</h1>
			<LoginForm />
		</div>
	)
}

export default Login