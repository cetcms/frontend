import { Image } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import colorLogo from 'src/assets/images/logo-color.svg';
// import whiteLogo from 'src/assets/images/logo-white.svg';

export const MainLogo: React.FC = () => {
  // const theme = useMantineTheme();
  // const primaryColor = theme.colors[theme.primaryColor][6];
  const { width } = useViewportSize();
  const [collapsed, setCollapsed] = useState(width < 768);

  useEffect(() => {
    setCollapsed(width < 768);
  }, [width]);

  return collapsed ? (
    <></>
  ) : (
    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <Image src={colorLogo} alt="Logo" />
    </NavLink>
  );
};
