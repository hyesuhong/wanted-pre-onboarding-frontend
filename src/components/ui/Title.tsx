import { styled } from 'styled-components';

const Heading = styled.h2`
	font-size: 20px;
	font-weight: 700;
	color: ${(props) => props.theme.black};
	margin-bottom: 40px;
`;

interface Props {
	title: string;
}

export default function Title({ title }: Props) {
	return <Heading>{title}</Heading>;
}
