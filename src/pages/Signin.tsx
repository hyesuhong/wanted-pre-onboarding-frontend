export default function Signin() {
	const onSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
		alert('로그인');
	};
	return (
		<form onSubmit={onSubmit}>
			<input type='email' name='email' data-testid='email-input' />
			<input type='password' name='password' data-testid='password-input' />
			<button data-testid='signin-button'>로그인</button>
		</form>
	);
}
