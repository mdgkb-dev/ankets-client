import ClassHelper from '@/services/ClassHelper';

export default class FieldVariant {
  id?: string;
  name = '';
  fieldId?: string;

  constructor(i?: FieldVariant) {
    ClassHelper.BuildClass(this, i);
  }
  static Create(fieldId?: string): FieldVariant {
    const item = new FieldVariant();
    item.id = ClassHelper.CreateUUID();
    item.fieldId = fieldId;
    return item;
  }
}
