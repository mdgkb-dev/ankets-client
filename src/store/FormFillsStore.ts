import FormFill from '@/classes/FormFill';
import BaseStore from '@/services/BaseStore';

class S extends BaseStore<FormFill> {
  constructor() {
    super(FormFill, 'form-fills');
  }
}

const store: S = new S();
export default store;
