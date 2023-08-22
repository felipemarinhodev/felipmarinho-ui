import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {}
}
