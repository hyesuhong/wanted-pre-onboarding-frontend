import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/signup'>sign up</Link>
					</li>
					<li>
						<Link to='/signin'>sign in</Link>
					</li>
					<li>
						<Link to='/todo'>todo</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
