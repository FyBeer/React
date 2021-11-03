import {Field, reduxForm} from 'redux-form'
import { maxLength, required } from '../../utils/valodators/validators'
import { Input } from '../FormControl/FormControl'
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Redirect } from "react-router"

const maxLength20 = maxLength(20)

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={'email'} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={'password'} type={'password'} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
			</div>
			{ props.error && <h2>{props.error}</h2>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm ({

	form: 'login'
}) (LoginForm)



const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
		}

		if (props.isAuth) return <Redirect to={'/profile'} />

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)