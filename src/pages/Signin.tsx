import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import useValidator from '../hooks/useValidator';
import { useAuth } from '../contexts/AuthContext';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import Title from '../components/ui/Title';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;

	width: 260px;
`;

const UList = styled.ul`
	width: 100%;

	& > li {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		font-size: 16px;

		&:not(:last-child) {
			margin-bottom: 10px;
		}
	}
`;

const Para = styled.p`
	display: flex;
	justify-content: space-between;
	width: 260px;
	margin-top: 30px;

	font-size: 14px;
	color: #aaa;

	& > span {
		display: flex;
		color: ${(props) => props.theme.black};

		&::after {
			content: '>';
			/* margin-left: 2px; */
			transition: transform 0.3s;
		}

		&:hover::after {
			transform: translateX(3px);
		}
	}
`;

export default function Signin() {
	const { signIn } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validation, setValidation] = useState(false);

	const emailValid = useValidator(email, (value) => value.indexOf('@') >= 0);
	const pwValid = useValidator(password, (value) => value.length >= 8);

	const onSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();

		await signIn({ email, password });
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
			<Title title='로그인' />
			<Form onSubmit={onSubmit}>
				<UList>
					<li>
						<label>Email</label>
						<InputField
							type='email'
							name='email'
							testId='email-input'
							value={email}
							onChange={onChange}
							required
						/>
					</li>
					<li>
						<label>Password</label>
						<InputField
							type='password'
							name='password'
							testId='password-input'
							value={password}
							onChange={onChange}
							required
						/>
					</li>
				</UList>
				<Button testId='signin-button' disabled={!validation}>
					로그인
				</Button>
			</Form>

			<Para>
				처음 오셨나요?
				<span>
					<Link to='/signup'>회원가입하기</Link>
				</span>
			</Para>
		</>
	);
}
