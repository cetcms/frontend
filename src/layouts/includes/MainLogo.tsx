import { Center } from '@mantine/core';
import { Link } from 'react-router';
import logoColor from 'src/assets/images/logo-color.svg';
import logoWhite from 'src/assets/images/logo-white.svg';

export function MainLogo() {
  return (
    <Link to="/">
      <Center className="main-logo" lightHidden>
        <img src={logoWhite} alt="Logo" width="200px" />
      </Center>
      <Center className="main-logo" darkHidden>
        <img src={logoColor} alt="Logo" width="200px" />
      </Center>
    </Link>
  );
}
