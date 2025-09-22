import { NavLink } from 'react-router';

import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <h1>
        <NavLink to="/auth/login">Login</NavLink>
      </h1>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
