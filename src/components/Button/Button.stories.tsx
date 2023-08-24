import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const meta: Meta<ButtonProps> = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    icon: {
      type: "function"
    },
    children: {
      defaultValue: "Button"
    }
  }
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    type: 'primary',
    children: 'Primary button'
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    type: 'secondary',
    children: 'Secondary button'
  }
}

export const Icon: StoryObj<ButtonProps> = {
  args: {
    type: 'secondary',
    children: <FaCanadianMapleLeaf />
  }
}
