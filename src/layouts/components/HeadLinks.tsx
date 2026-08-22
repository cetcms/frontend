import { Icon } from '@iconify/react';
import { Button, Card, Divider, Group } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import type { MenuItem } from 'src/router/menus';

export interface HeadLinksProps {
  links?: MenuItem[];
}

export const HeadLinks: React.FC<HeadLinksProps> = ({ links }) => {
  const { t } = useTranslation(['navbar']);
  const location = useLocation();
  const currentLink = links?.find((link) => link.path && location.pathname.startsWith(link.path));
  const active = currentLink?.id || '';

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
