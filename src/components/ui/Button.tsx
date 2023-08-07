import { AllHTMLAttributes } from 'react';
import { styled } from 'styled-components';

type Size = 'large' | 'medium' | 'small';

const ButtonEl = styled.button<{ $elSize: Size; $isPrimary: boolean }>`
	background: ${(props) =>
		props.$isPrimary ? props.theme.blue : props.theme.white};
	border: ${(props) =>
		props.$isPrimary ? 'none' : `1px solid ${props.theme.blue}`};
	color: ${(props) =>
		props.$isPrimary ? props.theme.white : props.theme.black};
	padding: ${(props) =>
		props.$elSize === 'large'
			? '11px 21px'
			: props.$elSize === 'medium'
			? '6px 15px'
			: '4px 8px'};

	&:disabled {
		background: #aaa;
	}
`;

interface Props extends AllHTMLAttributes<HTMLButtonElement> {
	testId: string;
	$elSize?: Size;
	$isPrimary?: boolean;
}

export default function Button({
	type,
	testId,
	children,
	$elSize = 'medium',
	$isPrimary = true,
	...props
}: Props) {
	return (
		<ButtonEl
			data-testid={testId}
			{...props}
			$elSize={$elSize}
			$isPrimary={$isPrimary}
		>
			{children}
		</ButtonEl>
	);
}
