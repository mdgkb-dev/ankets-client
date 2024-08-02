import ValueTypes from '@/services/types/ValueTypes';

import DateField from './DateField.vue';
import NumberField from './NumberField.vue';
import RadioField from './RadioField.vue';
import SetField from './SetField.vue';
import StringField from './StringField.vue';

const FiedlsComponents: Record<ValueTypes, Component> = {
  [ValueTypes.String]: StringField,
  [ValueTypes.Number]: NumberField,
  [ValueTypes.Date]: DateField,
  [ValueTypes.Radio]: RadioField,
  [ValueTypes.Set]: SetField,
};

export default FiedlsComponents;
