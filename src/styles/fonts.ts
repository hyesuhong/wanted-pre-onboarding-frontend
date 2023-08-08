import PretendardBlack from 'pretendard/dist/web/static/woff/Pretendard-Black.woff';
import PretendardExtraBold from 'pretendard/dist/web/static/woff/Pretendard-ExtraBold.woff';
import PretendardBold from 'pretendard/dist/web/static/woff/Pretendard-Bold.woff';
import PretendardSemiBold from 'pretendard/dist/web/static/woff/Pretendard-SemiBold.woff';
import PretendardMedium from 'pretendard/dist/web/static/woff/Pretendard-Medium.woff';
import PretendardRegular from 'pretendard/dist/web/static/woff/Pretendard-Regular.woff';
import PretendardLight from 'pretendard/dist/web/static/woff/Pretendard-Light.woff';
import PretendardExtraLight from 'pretendard/dist/web/static/woff/Pretendard-ExtraLight.woff';
import PretendardThin from 'pretendard/dist/web/static/woff/Pretendard-Thin.woff';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: 'Pretendard';
		font-weight: 900;
		font-display: swap;
		src: url(${PretendardBlack}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 800;
		font-display: swap;
		src: url(${PretendardExtraBold}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 700;
		font-display: swap;
		src: url(${PretendardBold}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 600;
		font-display: swap;
		src: url(${PretendardSemiBold}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 500;
		font-display: swap;
		src: url(${PretendardMedium}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 400;
		font-display: swap;
		src: url(${PretendardRegular}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 300;
		font-display: swap;
		src: url(${PretendardLight}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 200;
		font-display: swap;
		src: url(${PretendardExtraLight}) format('woff');
	}
	@font-face {
		font-family: 'Pretendard';
		font-weight: 100;
		font-display: swap;
		src: url(${PretendardThin}) format('woff');
	}
`;
