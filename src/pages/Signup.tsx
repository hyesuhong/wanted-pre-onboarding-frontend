export default function Signup() {
	const onSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
		alert('회원가입');
	};
	return (
		<form onSubmit={onSubmit}>
			<input type='email' name='email' data-testid='email-input' />
			<input type='password' name='password' data-testid='password-input' />
			<button data-testid='signup-button'>회원가입</button>
		</form>
	);
}
