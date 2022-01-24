import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => {
  const lists = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 3,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 4,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <header>
      <div id="logo">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
        />
        <span>
          Space Traveller&apos;s Hub
        </span>
      </div>

      <nav id="navBar">
        {lists.map((list) => (
          <NavLink
            className="navLink"
            key={list.id}
            to={list.path}
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
            })}
          >
            {list.text}
          </NavLink>
        ))}
      </nav>
    </header>

  );
};

export default Header;
