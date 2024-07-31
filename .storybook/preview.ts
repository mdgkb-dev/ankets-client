import { Preview } from '@storybook/vue3';

export const parameters = {
  rootAttributes: [
    {
      root: 'html',
      attribute: 'data-platform',
      defaultState: {
        name: 'Ankets',
        value: 'ankets',
      },
      states: [
        {
          name: 'Ankets',
          value: 'ankets',
        },
      ],
    },
    {
      root: 'html',
      attribute: 'data-theme',
      defaultState: {
        name: 'Light',
        value: 'light',
      },
      states: [
        {
          name: 'Dark',
          value: 'dark',
        },
        {
          name: 'Light',
          value: 'light',
        },
      ],
    },
  ],
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    ...parameters,
  },
};

import '@/services/styles/brandbook.css';
import '@/services/styles/index.css';

export default preview;
