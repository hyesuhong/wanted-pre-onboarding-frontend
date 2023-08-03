import { useEffect, useState } from 'react';
import useValidator from '../hooks/useValidator';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../services/auth';

export default function Signin() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validation, setValidation] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string>();

	const emailValid = useValidator(email, (value) => value.indexOf('@') >= 0);
	const pwValid = useValidator(password, (value) => value.length >= 8);

	const onSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();

		await postSignIn({ email, password })
			.then((res) => {
				// console.log(res);
				if (res.status === 200) {
					localStorage.setItem('access_token', res.data.access_token);
					navigate('/todo');
				}
			})
			.catch((error) => {
				console.error(error);
				setErrorMsg('아이디 혹은 비밀번호가 다릅니다.');
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
				<button data-testid='signin-button' disabled={!validation}>
					로그인
				</button>
			</form>
			{errorMsg && <p>{errorMsg}</p>}
		</>
	);
}
