import { Icon } from '@iconify/react';
import { Divider, NavLink, NavLinkProps, Tooltip } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router';

export interface NavbarLinkProps {
  icon?: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  path: string;
  type?: 'divider';
  collapsed?: boolean;
  width?: number;
}

export const NavbarLink = ({ icon, label, active, onClick, path, type, collapsed, width = 60 }: NavbarLinkProps) => {
  if (type === 'divider') {
    return <Divider size="xs" w="calc(100% - 1rem)" />;
  }

  const navLinkAttrs: NavLinkProps = {
    label: icon ? <Icon icon={icon} fontSize="1.8em" /> : label,
    styles: {
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
    },
  };
  if (!collapsed) {
    navLinkAttrs.label = label;
    navLinkAttrs.leftSection = icon && <Icon icon={icon} fontSize="1.2em" />;
    navLinkAttrs.styles = {
      root: {
        borderRadius: '0.5rem',
      },
    };
  }

  return (
    <Tooltip label={label} position="right" withArrow disabled={!collapsed}>
      <NavLink component={Link} to={path} active={active} onClick={onClick} variant="filled" {...navLinkAttrs} />
    </Tooltip>
  );
};
