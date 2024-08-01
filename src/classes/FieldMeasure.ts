import ClassHelper from '@/services/ClassHelper';

export default class FieldMeasure {
  id?: string;
  name = '';
  order = 0;

  constructor(i?: FieldMeasure) {
    ClassHelper.BuildClass(this, i);
  }
}
