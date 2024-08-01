import ClassHelper from '@/services/ClassHelper';

export default class AnswerVariant {
  id?: string;
  name = '';
  score = 0;
  order = 0;
  showMoreFields = false;

  fieldId?: string;

  constructor(i?: AnswerVariant) {
    ClassHelper.BuildClass(this, i);
  }
  static Create(fieldId?: string): AnswerVariant {
    const item = new AnswerVariant();
    item.id = ClassHelper.CreateUUID();
    item.fieldId = fieldId;
    return item;
  }
}
