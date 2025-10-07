import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';
import { Icon } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router';

export type IconButtonProps = Omit<ActionIconProps, 'children'> & {
  to?: any;
  icon: Icon;
  tooltip?: string;
  onClick?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, tooltip, to, ...props }) => {
  const button = to ? (
    <ActionIcon radius="xl" variant="default" to={to} component={Link} {...props}>
      <Icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  ) : (
    <ActionIcon radius="xl" variant="default" {...props}>
      <Icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );

  if (tooltip) {
    return (
      <Tooltip label={tooltip} position="top" withArrow>
        {button}
      </Tooltip>
    );
  }

  return button;
};
