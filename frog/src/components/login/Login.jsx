import {Field, reduxForm} from 'redux-form'
import { maxLength, required } from '../../utils/valodators/validators'
import { Input } from '../FormControl/FormControl'

const maxLength20 = maxLength(20)

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Login"} name={'login'} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={'password'} component={Input} validate={[required, maxLength20]} />
			</div>
			<div>
				<Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
			</div>
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
		console.log(formData)
		}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login