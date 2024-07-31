import AnswerVariant from '@/classes/AnswerVariant';
import FieldExample from '@/classes/FieldExample';
import FieldMeasure from '@/classes/FieldMeasure';
import FieldVariant from '@/classes/FieldVariant';
import ValueType from '@/services/classes/ValueType';
import ClassHelper from '@/services/ClassHelper';

export default class Field {
  id?: string;
  name = '';
  code = '';
  valueTypeId?: string;
  order = 0;
  ageCompare = false;

  @ClassHelper.GetClassConstructor(AnswerVariant) answerVariants: AnswerVariant[] = [];
  answerVariantsForDelete: string[] = [];

  @ClassHelper.GetClassConstructor(FieldExample)
  fieldExamples: FieldExample[] = [];
  @ClassHelper.GetClassConstructor(FieldVariant)
  fieldVariants: FieldVariant[] = [];

  valueType: ValueType = new ValueType();
  @ClassHelper.GetClassConstructor(FieldMeasure)
  fieldMeasures: FieldMeasure[] = [];
  showSet = false;
  showRadio = false;
  isEdit = false;

  @ClassHelper.GetClassConstructor(Field)
  children: Field[] = [];

  // @ClassHelper.GetClassConstructor(Field)
  // parent?: Field;
  parentId?: string;

  researchId?: string;
  selected = false;

  constructor(i?: Field) {
    ClassHelper.BuildClass(this, i);
    this.changeRelation([this.valueType]);
  }
  static Create(researchId?: string): Field {
    const item = new Field();
    item.id = ClassHelper.CreateUUID();
    item.researchId = researchId;
    return item;
  }

  getRegisterPropertyRadioOriginalValue(id: string): string {
    const radio = this.answerVariants.find((propertyRadio: AnswerVariant) => propertyRadio.id === id);
    if (radio) {
      return radio.name;
    }
    return '';
  }

  addRadioItem(item?: AnswerVariant): void {
    this.answerVariants.push(new AnswerVariant(item));
  }

  removeRadioItem(i: number): void {
    const idForDelete = this.answerVariants[i].id;
    if (idForDelete) {
      this.answerVariantsForDelete.push(idForDelete);
    }
    this.answerVariants.splice(i, 1);
  }

  changeRelation(valueTypes: ValueType[]): void {
    const valueType = valueTypes.find((i: ValueType) => i.id === this.valueTypeId);
    if (!valueType) {
      return;
    }
    if (valueType.isRadio()) {
      this.showRadio = true;
      this.showSet = false;
      return;
    }
    if (valueType.isSet()) {
      this.showSet = true;
      this.showRadio = false;
      return;
    }
    this.showSet = false;
    this.showRadio = false;
    this.valueType = valueType;
  }

  editRegisterProperty(isEdit?: boolean): void {
    this.isEdit = isEdit ?? !this.isEdit;
  }

  sortExamples(): void {
    this.fieldExamples.forEach((item: FieldExample, index: number) => (item.order = index));
  }

  addRegisterPropertyMeasure(item?: FieldMeasure): void {
    this.fieldMeasures.push(new FieldMeasure(item));
  }

  addRegisterPropertyVariant(): void {
    this.fieldVariants.push(new FieldVariant());
  }

  getIdWithoutDashes(): string {
    return this.id ? this.id.replaceAll(/[^a-zA-Z]+/g, '') : '';
  }

  static GetClassName(): string {
    return 'Field';
  }

  setType(item: ValueType): void {
    this.valueType = item;
    this.valueTypeId = item.id;
  }

  setName(item: string): void {
    this.name = item;
  }

  addAnswerVariant(): AnswerVariant {
    const item = AnswerVariant.Create(this.id);
    item.name = 'Вариант';
    this.answerVariants.push(item);
    return item;
  }
  addChild(): Field {
    const item = Field.Create();
    item.parentId = this.id;
    item.name = 'Вопрос';
    this.children.push(item);
    return item;
  }
  addFieldVariant(): FieldVariant {
    const item = FieldVariant.Create(this.id);
    this.fieldVariants.push(item);
    return item;
  }
  copy(): Field {
    const item = new Field(this);
    item.id = ClassHelper.CreateUUID();
    item.answerVariants.forEach((i: AnswerVariant) => {
      i.id = ClassHelper.CreateUUID();
      i.fieldId = item.id;
    });
    item.children = item.children.map((i: Field) => {
      const childCopy = i.copy();
      childCopy.parentId = item.id;
      return childCopy;
    });
    return item;
  }
}
