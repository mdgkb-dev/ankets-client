import FormSection from '@/classes/FormSection';
import BaseStore from '@/services/BaseStore';

class S extends BaseStore<FormSection> {
  constructor() {
    super(FormSection, 'form-sections');
  }
}

const store: S = new S();
export default store;
