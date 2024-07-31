import AnswerVariant from '@/classes/AnswerVariant';
import BaseStore from '@/services/BaseStore';

class S extends BaseStore<AnswerVariant> {
  constructor() {
    super(AnswerVariant, 'answer-variants');
  }
}

const store: S = new S();
export default store;
