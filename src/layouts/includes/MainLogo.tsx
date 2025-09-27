import { Center, Image } from '@mantine/core';
import { Link } from 'react-router';
import logoColor from 'src/assets/images/logo-color.svg';
import logoWhite from 'src/assets/images/logo-white.svg';

export interface MainLogoProps {
  width: number;
}
export const MainLogo: React.FC<MainLogoProps> = ({ width }) => {
  return (
    <Link to="/">
      <Center className="main-logo" lightHidden>
        <Image src={logoWhite} alt="Logo" w={width - 27} />
      </Center>
      <Center className="main-logo" darkHidden>
        <Image src={logoColor} alt="Logo" w={width - 27} />
      </Center>
    </Link>
  );
};
