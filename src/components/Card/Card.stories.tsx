import { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Atomic/Card",
  component: Card,
  parameters: {
    layout: "centered"
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: "lalala"
  }
}
