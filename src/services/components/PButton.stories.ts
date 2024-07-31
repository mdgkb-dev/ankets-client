import '@/services/styles/index.css';

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
      <PButton skin="text" type="primary" width="120px" margin="20px">Кнопка</PButton>
      <PButton skin="text" type="success" width="120px" margin="20px">Кнопка</PButton>
      <PButton skin="text" type="warning" width="120px" margin="20px">Кнопка</PButton>
      <PButton skin="text" type="danger" width="120px" margin="20px">Кнопка</PButton>
      <PButton skin="text" type="neutral" width="120px" margin="20px">Кнопка</PButton>
    </div>
  `,
});

// export const DefaultButton: StoryFn<typeof Button> = (args) => ({
//   components: { Button },
//   setup() {
//     return { args };
//   },
//   template: '<PButton v-bind="args">Кнопка</PButton>',
// });

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { color: 'primary' };
