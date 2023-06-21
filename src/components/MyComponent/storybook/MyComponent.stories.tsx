import type { Meta, StoryObj } from '@storybook/react';

import { MyComponent } from '..';

const meta = {
  title: 'Storie/Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MyComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'MyComponent',
  },
};
