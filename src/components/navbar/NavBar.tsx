import { NavBarStyle } from './style';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
	return <NavBarStyle>
		<img src={logo} alt="logo inCicle" />
	</NavBarStyle>
}

export default NavBar;