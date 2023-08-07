import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		black: string;
		white: string;
		blue: string;
	}
}
