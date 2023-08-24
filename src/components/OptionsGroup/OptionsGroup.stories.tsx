import { Meta, StoryObj } from "@storybook/react";
import { OptionsGroup, OptionsGroupProps } from ".";

const meta: Meta<OptionsGroupProps> = {
  title: "Atomic/OptionsGroup",
  component: OptionsGroup,
  parameters: {
    layout: "centered"
  },
};

export default meta;

export const Primary: StoryObj<OptionsGroupProps> = {
  args: {
    options: [
      {
        id: 1,
        title: "E-book",
        body: "R$ 00,00",
        footer: ".pdf, .epub, .mob"
      },
      {
        id: 2,
        title: "Impresso",
        body: "R$ 00,00",
        footer: ".pdf, .epub, .mob"
      },
      {
        id: 3,
        title: "Impresso + E-book",
        body: "R$ 00,00",
        footer: ".pdf, .epub, .mob"
      }
    ]
  }
}

export const Secondary: StoryObj<OptionsGroupProps> = {
  args: {
  }
}
