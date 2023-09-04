import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface authGuide {
	otherLink: { to: string; text: string; infoMsg: string };
}

const AuthGuide = ({ otherLink }: authGuide) => {
	return (
		<>
			<Para>
				{otherLink.infoMsg}
				<span>
					<Link to={otherLink.to}>{otherLink.text}</Link>
				</span>
			</Para>
		</>
	);
};

const Para = styled.p`
	display: flex;
	justify-content: space-between;
	width: 260px;
	margin-top: 30px;

	font-size: 14px;
	color: #aaa;

	& > span {
		display: flex;
		color: ${(props) => props.theme.black};

		&::after {
			content: '>';
			/* margin-left: 2px; */
			transition: transform 0.3s;
		}

		&:hover::after {
			transform: translateX(3px);
		}
	}
`;

export default AuthGuide;
