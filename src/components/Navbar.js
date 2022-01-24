import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => (
  <header>
    <div id="logo">
      <img alt="logo" src={logo} />
    </div>
    <nav id="navBar">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/dragons">Dragons</NavLink>
      <NavLink to="/profile">My profile</NavLink>
    </nav>
  </header>
);

export default Navbar;
