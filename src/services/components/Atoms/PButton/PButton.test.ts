import { mount } from '@vue/test-utils';

import PButton from './PButton.vue';

test('это должно работать', () => {
  const wrapper = mount(PButton, {
    props: {
      text: 'Test',
    },
  });
  expect(wrapper.text()).toContain('Test');
});
