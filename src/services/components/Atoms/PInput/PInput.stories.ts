import { Meta, StoryObj } from '@storybook/vue3';
import PInput from './PInput.vue';

export default {
  title: 'Atoms/PInput',
  component: PInput,
  argTypes: {
    // disabled: { control: { type: 'boolean' } },
    text: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },

  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    text: 'text',
  },
} as Meta<typeof PInput>;

const Template: StoryObj<typeof PInput> = (args) => ({
  components: { PInput },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <PInput />
    </div>`,
});

export const Input = Template.bind({});
Input.args = { placeholder: 'Placeholder', label: 'Label', text: 'text' };
