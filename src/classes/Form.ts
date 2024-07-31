import ClassHelper from '@/services/ClassHelper';

export default class Form {
  id?: string;
  name = '';

  constructor(i?: Form) {
    ClassHelper.BuildClass(this, i);
  }
}
