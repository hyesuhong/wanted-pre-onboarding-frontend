import { useAuth } from '../contexts/AuthContext';
import AuthForm from '../components/Auth/AuthForm';
import AuthGuide from '../components/Auth/AuthGuide';
import { AuthPageInfo } from '../constants/auth';
import useForm, { inputProps } from '../hooks/useForm';

const initialValue = '';

export default function Signin() {
	const { title, button, otherLink } = AuthPageInfo.SIGNUP;
	const { signUp } = useAuth();

	const inputs: inputProps = {
		email: {
			value: initialValue,
			validator: (value) => value.indexOf('@') > -1,
		},
		password: { value: initialValue, validator: (value) => value.length > 7 },
	};

	const submitHandler = async () => {
		await signUp({ email: form.email.value, password: form.password.value });
	};

	const { form, handleChange, handleSubmit, isFormValid } = useForm({
		inputs,
		submitHandler,
	});

	return (
		<>
			<AuthForm
				title={title}
				button={{ ...button, isValid: isFormValid }}
				formInputs={form}
				formInputChangeHandler={handleChange}
				formSubmitHandler={handleSubmit}
			/>
			<AuthGuide otherLink={otherLink} />
		</>
	);
}
