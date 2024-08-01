import ClassHelper from '@/services/ClassHelper';

export default class FieldFilter {
  id?: string;
  fieldId?: string;

  constructor(i?: FieldFilter) {
    ClassHelper.BuildClass(this, i);
  }

  static GetClassName(): string {
    return 'fieldFilter';
  }
}
