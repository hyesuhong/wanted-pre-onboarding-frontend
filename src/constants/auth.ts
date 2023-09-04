import { ROUTES } from './routes';

export const AuthPageInfo = {
	SIGNIN: {
		title: '로그인',
		button: { testId: 'signin-button', text: '로그인' },
		otherLink: {
			to: ROUTES.SIGNUP,
			text: '회원가입',
			infoMsg: '아직 회원이 아니신가요?',
		},
	},
	SIGNUP: {
		title: '회원가입',
		button: { testId: 'signup-button', text: '가입하기' },
		otherLink: {
			to: ROUTES.SIGNIN,
			text: '로그인',
			infoMsg: '이미 가입하셨나요?',
		},
	},
};
