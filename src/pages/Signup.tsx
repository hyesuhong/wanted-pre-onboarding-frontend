import { useEffect, useState } from 'react';
import useValidator from '../hooks/useValidator';
import { postSignUp } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validation, setValidation] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string>();

	const emailValid = useValidator(email, (value) => value.indexOf('@') >= 0);
	const pwValid = useValidator(password, (value) => value.length >= 8);

	const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		await postSignUp({ email, password })
			.then((res) => {
				if (res.status === 201) {
					navigate('/signin');
				}
			})
			.catch((error) => {
				console.error(error);
				setErrorMsg('이미 존재하는 메일 주소 입니다.');
			});
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
		<>
			<form method='POST' onSubmit={onSubmit}>
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
				<button data-testid='signup-button' disabled={!validation}>
					회원가입
				</button>
			</form>
			{errorMsg && <p>{errorMsg}</p>}
		</>
	);
}
