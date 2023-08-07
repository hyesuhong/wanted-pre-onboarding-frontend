import { AllHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const Label = styled.label`
	position: relative;
	flex: 1;

	display: flex;
	align-items: center;

	& > input {
		flex: 0 0 16px;
		height: 16px;
		border: 1px solid ${(props) => props.theme.black};
		margin-right: 5px;
		border-radius: 0;
		accent-color: ${(props) => props.theme.blue};
	}

	& > span {
		flex: 1;
		line-height: 30px;
	}
`;

interface Props extends AllHTMLAttributes<HTMLInputElement> {
	itemId: number;
	todoText: string;
}

export default function Checkbox({
	itemId,
	checked,
	onChange,
	todoText,
}: Props) {
	return (
		<>
			<Label>
				<input
					type='checkbox'
					value={itemId}
					checked={checked}
					onChange={onChange}
				/>
				<span>{todoText}</span>
			</Label>
		</>
	);
}
