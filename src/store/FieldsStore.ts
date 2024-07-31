import Field from '@/classes/Field';
import BaseStore from '@/services/BaseStore';

class S extends BaseStore<Field> {
  constructor() {
    super(Field, 'fields');
  }
}

const store: S = new S();
export default store;
