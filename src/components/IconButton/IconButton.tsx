import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';
import { Icon } from '@tabler/icons-react';
import React from 'react';

export interface IconButtonProps extends Omit<ActionIconProps, 'children'> {
  icon: Icon;
  tooltip?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, tooltip, ...props }) => {
  const button = (
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
