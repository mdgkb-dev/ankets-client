import ValueTypes from '@/services/types/ValueTypes';

import DateFieldEdit from './DateFieldEdit.vue';
import NumberFieldEdit from './NumberFieldEdit.vue';
import RadioFieldEdit from './RadioFieldEdit.vue';
import SetFieldEdit from './SetFieldEdit.vue';
import StringFieldEdit from './StringFieldEdit.vue';

const FiedlsEditsComponents: Record<ValueTypes, Component> = {
  [ValueTypes.String]: StringFieldEdit,
  [ValueTypes.Number]: NumberFieldEdit,
  [ValueTypes.Date]: DateFieldEdit,
  [ValueTypes.Radio]: RadioFieldEdit,
  [ValueTypes.Set]: SetFieldEdit,
};

export default FiedlsEditsComponents;
