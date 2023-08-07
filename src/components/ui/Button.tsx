import { AllHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const ButtonEl = styled.button`
	background: ${(props) => props.theme.blue};
	border: none;
	color: ${(props) => props.theme.white};
	padding: 6px 15px;

	&:disabled {
		background: #aaa;
	}
`;

interface Props extends AllHTMLAttributes<HTMLButtonElement> {
	testId: string;
}

export default function Button({ type, testId, children, ...props }: Props) {
	return (
		<ButtonEl data-testid={testId} {...props}>
			{children}
		</ButtonEl>
	);
}
