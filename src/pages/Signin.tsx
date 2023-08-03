import { useEffect, useState } from 'react';
import { useValidator } from '../hooks/useValidator';

export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validation, setValidation] = useState(false);

	const emailValid = useValidator(email, (value) => value.indexOf('@') >= 0);
	const pwValid = useValidator(password, (value) => value.length >= 8);

	const onSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
		console.log('로그인');
	};

	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value, name },
		} = ev;

		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
		}
	};

	useEffect(() => {
		setValidation(emailValid && pwValid);
	}, [emailValid, pwValid]);

	return (
		<form onSubmit={onSubmit}>
			<input
				type='email'
				name='email'
				data-testid='email-input'
				value={email}
				onChange={onChange}
			/>
			<input
				type='password'
				name='password'
				data-testid='password-input'
				value={password}
				onChange={onChange}
			/>
			<button data-testid='signin-button' disabled={!validation}>
				로그인
			</button>
		</form>
	);
}
