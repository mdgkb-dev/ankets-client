import AnswerVariant from '@/classes/AnswerVariant';
import Field from '@/classes/Field';
import ClassHelper from '@/services/ClassHelper';
import Strings from '@/services/Strings';

export default class FormSection {
  id?: string;
  name = '';
  order = 0;
  @ClassHelper.GetClassConstructor(Field)
  fields: Field[] = [];
  formId?: string;

  constructor(i?: FormSection) {
    ClassHelper.BuildClass(this, i);
  }

  static GetClassName(): string {
    return 'formSection';
  }

  static Create(formId?: string): FormSection {
    const item = new FormSection();
    item.id = ClassHelper.CreateUUID();
    item.formId = formId;
    return item;
  }

  addField(): Field {
    const item = Field.Create(this.id);
    this.fields.push(item);
    this.sortFields();
    return item;
  }

  sortFields(): void {
    this.fields.forEach((item: Field, index: number) => (item.order = index));
  }

  // getAnswers(result: ResearchResult): { [key: string]: number } {
  //   const results: { [key: string]: number } = {};
  //   this.fields.forEach((q: Field) => {
  //     results[q.code] = result.getOrCreateAnswer(q).valueNumber ?? 0;
  //   });
  //   return results;
  // }
  //
  getAnswerVariants(): AnswerVariant[] {
    const a: AnswerVariant[] = [];
    this.fields.forEach((q: Field) => a.push(...q.answerVariants));
    return a;
  }

  // getNotFilledFields(researchResult: ResearchResult, fields: Field[]): Field[] {
  //   return this.showOnlyNotFilled ? fields.filter((q: Field) => !researchResult.getAnswer(q.id as string)?.filled) : fields;
  // }
  //
  // getFilledFields(researchResult: ResearchResult, fields: Field[]): Field[] {
  //   return this.showOnlyFilled ? fields.filter((q: Field) => researchResult.getAnswer(q.id as string)?.filled) : fields;
  // }
  //
  // getFieldsByString(): Field[] {
  //   return this.filterString === '' ? this.fields : this.fields.filter((q: Field) => Strings.StringsEquals(q.name, this.filterString));
  // }
}
