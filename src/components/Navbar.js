import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  const lists = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 1,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <header>
      <div id="logo">
        <img alt="logo" src={logo} />
      </div>
      <nav id="navBar">
        {lists.map((list) => (
          <NavLink
            key={list.id}
            to={list.path}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
              borderBottom: isActive ? 'solid 2px red' : 'solid 2px blue',
            })}
          >
            {list.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
