import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,body {
		width: 100%;
		min-height: 100vh;
		font-family: "Pretendard", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul li, ol li {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;
