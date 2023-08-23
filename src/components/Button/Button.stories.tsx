import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered"
  }
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    type: 'primary',
    text: 'Primary button'
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    type: 'secondary',
    text: 'Secondary button'
  }
}
