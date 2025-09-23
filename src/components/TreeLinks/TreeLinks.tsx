import { Divider, NavLink, ScrollArea, ScrollAreaProps, Stack } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import { MenuLinkItem } from 'src/config/menuLinks';

import { LinkArrow } from './LinkArrow';

interface RenderLinkProps {
  pathname: string;
  link: MenuLinkItem;
}

const RenderLink: React.FC<RenderLinkProps> = ({ link, pathname }) => {
  const { t } = useTranslation();
  const childrenCount = link.children?.length || 0;

  if (link.type === 'divider') {
    return <Divider size="xs" />;
  }

  const isActive = link.path === pathname || (link.children && link.children.some((child) => child.path === pathname));

  if (link.children && childrenCount > 0) {
    const isChildActive = link.children.some((child) => child.path === pathname);
    const activeIndex = link.children.findIndex((child) => child.path === pathname);
    return (
      <NavLink
        key={link.id}
        label={t(link.label) || link.label}
        leftSection={link.icon ? <link.icon size={16} stroke={1.5} /> : undefined}
        style={{
          borderRadius: 'var(--mantine-radius-default)',
          backgroundColor: isChildActive ? 'var(--mantine-color-primary-light)' : undefined,
        }}
        defaultOpened={isChildActive}
        active={isActive}
        childrenOffset={10}
      >
        {link.children.map((child, index) => (
          <NavLink
            key={child.id}
            component={Link}
            to={child.path || '#'}
            label={t(child.label) || child.label}
            active={pathname === child.path}
            leftSection={
              <LinkArrow
                isLast={index === childrenCount - 1}
                isActive={pathname === child.path}
                isBefore={activeIndex > -1 && index < activeIndex}
                isAfter={activeIndex > -1 && index > activeIndex}
              />
            }
            style={{
              borderRadius: 'var(--mantine-radius-default)',
              padding: '0px 8px',
              backgroundColor: 'transparent',
            }}
          />
        ))}
      </NavLink>
    );
  }

  return (
    <NavLink
      key={link.id}
      component={Link}
      to={link.path || '#'}
      label={t(link.label) || link.label}
      leftSection={link.icon ? <link.icon size={16} stroke={1.5} /> : undefined}
      active={isActive}
      style={{ borderRadius: 'var(--mantine-radius-default)' }}
    />
  );
};

export interface TreeLinksProps {
  links?: MenuLinkItem[];
}

export const TreeLinks: React.FC<TreeLinksProps & ScrollAreaProps> = ({ links = [], ...props }) => {
  const location = useLocation();
  return (
    <ScrollArea {...props}>
      <Stack gap="xs">
        {links.map((link) => (
          <RenderLink key={link.id} link={link} pathname={location.pathname} />
        ))}
      </Stack>
    </ScrollArea>
  );
};
