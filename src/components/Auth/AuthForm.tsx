import { styled } from 'styled-components';
import Title from '../ui/Title';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

interface authform {
	title: string;
	button: { testId: string; text: string; isValid: boolean };
	formInputs: {
		[key: string]: {
			value: string;
		};
	};
	formInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	formSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({
	title,
	button,
	formInputs,
	formInputChangeHandler,
	formSubmitHandler,
}: authform) => {
	return (
		<>
			<Title title={title} />
			<Form onSubmit={formSubmitHandler}>
				<UList>
					<li>
						<label>Email</label>
						<InputField
							type='email'
							name='email'
							testId='email-input'
							value={formInputs.email.value}
							onChange={formInputChangeHandler}
							required
						/>
					</li>
					<li>
						<label>Password</label>
						<InputField
							type='password'
							name='password'
							testId='password-input'
							value={formInputs.password.value}
							onChange={formInputChangeHandler}
							required
						/>
					</li>
				</UList>
				<Button testId={button.testId} disabled={!button.isValid}>
					{button.text}
				</Button>
			</Form>
		</>
	);
};

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

export default AuthForm;
