import Research from '@/classes/Research';
import BaseStore from '@/services/BaseStore';

class S extends BaseStore<Research> {
  constructor() {
    super(Research, 'researches');
  }
}

const store: S = new S();
export default store;
