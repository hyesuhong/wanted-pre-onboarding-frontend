import { AllHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const Input = styled.input`
	width: 100%;
	height: 30px;
	border: none;
	border-bottom: 1px solid ${(props) => props.theme.black};
	outline: none;
	opacity: 0.6;
	font-size: 14px;

	&:focus {
		opacity: 1;
		border-bottom-color: ${(props) => props.theme.blue};
	}
`;

interface Props extends AllHTMLAttributes<HTMLInputElement> {
	testId: string;
}

export default function InputField({ testId, ...props }: Props) {
	return <Input data-testid={testId} {...props} />;
}
