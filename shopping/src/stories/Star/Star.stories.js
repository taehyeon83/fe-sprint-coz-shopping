import {Star} from "./Star";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Star",
  component: Star,
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Star",
  },
};

export const Secondary = {
  args: {
    label: "Star",
  },
};
