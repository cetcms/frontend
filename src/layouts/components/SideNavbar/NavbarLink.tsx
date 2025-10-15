import { Icon } from '@iconify/react';
import { Divider, NavLink, NavLinkProps, Tooltip } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router';

export type NavbarLinkProps = Omit<NavLinkProps, 'children'> & {
  icon?: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  path: string;
  type?: 'divider';
  collapsed?: boolean;
  width?: number;
};

export const NavbarLink = ({ icon, label, path, type, collapsed, width = 60, ...navLinkProps }: NavbarLinkProps) => {
  if (type === 'divider') {
    return <Divider size="xs" w="calc(100% - 1rem)" />;
  }
  navLinkProps.styles = {
    root: {
      padding: 0,
      width: width - 20,
      height: width - 20,
      borderRadius: '0.5rem',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  };
  if (!collapsed) {
    navLinkProps.leftSection = icon && <Icon icon={icon} fontSize="1.2em" />;
    navLinkProps.styles = {
      root: {
        borderRadius: '0.5rem',
      },
    };
  }

  return (
    <Tooltip label={label} position="right" withArrow disabled={!collapsed}>
      <NavLink
        label={icon ? <Icon icon={icon} fontSize="1.8em" /> : label}
        component={Link}
        to={path}
        variant="filled"
        {...navLinkProps}
      />
    </Tooltip>
  );
};
