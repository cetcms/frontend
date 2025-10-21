import { Icon } from '@iconify/react';
import { Button, Card, Divider, Group } from '@mantine/core';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import type { MenuItem } from 'src/router/menus';

export interface HeadLinksProps {
  links?: MenuItem[];
}

export const HeadLinks: React.FC<HeadLinksProps> = ({ links }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [active, setActive] = React.useState(() => {
    const currentPath = location.pathname;
    const currentLink = links?.find((link) => link.path && currentPath.startsWith(link.path));
    return currentLink?.id || '';
  });

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = links?.find((link) => link.path && currentPath.startsWith(link.path));
    setActive(currentLink?.id || '');
  }, [location.pathname, links]);
  return (
    <>
      <Card
        p="xs"
        radius={0}
        withBorder
        style={{
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
          boxShadow: 'none',
        }}
      >
        <Group gap="xs">
          {links?.map((link) => {
            if (link.type === 'divider') {
              return <Divider orientation="vertical" key={link.id} />;
            }

            return (
              <Button
                key={link.id}
                variant={active === link.id ? 'filled' : 'default'}
                radius="md"
                component={Link}
                to={link.path || '#'}
                leftSection={link.icon ? <Icon icon={link.icon} fontSize={16} /> : undefined}
                onClick={() => setActive(link.id)}
              >
                {t(link.label)}
              </Button>
            );
          })}
        </Group>
      </Card>
    </>
  );
};
