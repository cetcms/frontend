import type { Meta, StoryObj } from '@storybook/react';

import { MainLogo } from './MainLogo';

const meta: Meta<typeof MainLogo> = {
  component: MainLogo,
  title: 'MainLogo',
};

export default meta;
export type Story = StoryObj<typeof MainLogo>;

export const Primary = {
  args: {},
};
