import ClassHelper from '@/services/ClassHelper';

export default class Research {
  id?: string;
  name = '';
  constructor(i?: Research) {
    ClassHelper.BuildClass(this, i);
  }
}
