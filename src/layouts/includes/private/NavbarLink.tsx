import { Divider, NavLink, NavLinkProps, Tooltip } from '@mantine/core';
import type { Icon } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router';

export interface NavbarLinkProps {
  icon?: Icon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  path: string;
  type?: 'divider';
  collapsed?: boolean;
}

export const NavbarLink = ({ icon: Icon, label, active, onClick, path, type, collapsed }: NavbarLinkProps) => {
  if (type === 'divider') {
    return <Divider size="xs" w="calc(100% - 1rem)" />;
  }

  const navLinkAttrs: NavLinkProps = {
    label: Icon ? <Icon size={24} stroke={1.5} /> : label,
    styles: {
      root: {
        width: 40,
        height: 40,
        padding: 0,
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
    navLinkAttrs.styles = {
      root: {
        borderRadius: '0.5rem',
      },
    };
    navLinkAttrs.leftSection = Icon && <Icon size={24} stroke={1.5} />;
  }

  return (
    <Tooltip label={label} position="right" withArrow disabled={!collapsed}>
      <NavLink component={Link} to={path} active={active} onClick={onClick} variant="filled" {...navLinkAttrs} />
    </Tooltip>
  );
};
