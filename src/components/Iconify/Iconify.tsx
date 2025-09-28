import { Icon, IconProps, addCollection } from '@iconify/react';
import React from 'react';

import solarIcons from './icons/solar.json';
addCollection(solarIcons);

export const Iconify: React.FC<IconProps> = (props) => {
  return <Icon {...props} />;
};
