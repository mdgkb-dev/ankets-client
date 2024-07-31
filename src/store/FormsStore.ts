import Form from '@/classes/Form';
import BaseStore from '@/services/BaseStore';

class S extends BaseStore<Form> {
  constructor() {
    super(Form, 'forms');
  }
}

const store: S = new S();
export default store;
