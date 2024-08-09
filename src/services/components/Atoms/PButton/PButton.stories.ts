import { Meta, StoryFn } from '@storybook/vue3';

import PButton from './PButton.vue';

export default {
  title: 'Atoms/PButton',
  component: PButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'neutral'],
      defaultValue: 'primary',
    },
  },
} as Meta<typeof PButton>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { PButton },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <PButton skin="base" type="primary" width="120px" margin="20px">Primary</PButton>
      <PButton skin="base" type="info" width="120px" margin="20px">Info</PButton>
      <PButton skin="base" type="success" width="120px" margin="20px">Success</PButton>
      <PButton skin="base" type="warning" width="120px" margin="20px">Warning</PButton>
      <PButton skin="base" type="danger" width="120px" margin="20px">Danger</PButton>
      <PButton skin="base" type="neutral" width="120px" margin="20px">Neutral</PButton>
      <PButton skin="base" type="disabled" width="120px" margin="20px">Disabled</PButton>
    </div>
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <PButton skin="text" type="primary" width="120px" margin="20px">Primary</PButton>
      <PButton skin="text" type="info" width="120px" margin="20px">Info</PButton>
      <PButton skin="text" type="success" width="120px" margin="20px">Success</PButton>
      <PButton skin="text" type="warning" width="120px" margin="20px">Warning</PButton>
      <PButton skin="text" type="danger" width="120px" margin="20px">Danger</PButton>
      <PButton skin="text" type="neutral" width="120px" margin="20px">Neutral</PButton>
      <PButton skin="text" type="del" width="120px" margin="20px">Del</PButton>
    </div>`,
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { color: 'primary' };
