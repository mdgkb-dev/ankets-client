import ClassHelper from '@/services/ClassHelper';

export default class FieldExample {
  id?: string;
  name = '';
  order = 0;
  fieldId?: string;

  constructor(i?: FieldExample) {
    ClassHelper.BuildClass(this, i);
  }
}
