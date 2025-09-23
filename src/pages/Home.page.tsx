import { NavLink } from 'react-router';
import { ColorSchemeToggle, Welcome } from 'src/components';

export const HomePage = () => {
  return (
    <>
      <h1>
        <NavLink to="/auth/login">Login</NavLink>
      </h1>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
};
