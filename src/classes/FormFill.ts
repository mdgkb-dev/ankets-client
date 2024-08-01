import Field from '@/classes/Field';
import FieldFill from '@/classes/FieldFill';
// import FieldFillVariant from '@/classes/FieldFillVariant';
import Form from '@/classes/Form';
import FileInfo from '@/services/classes/FileInfo';
import ClassHelper from '@/services/ClassHelper';

export default class FormFill {
  id?: string;
  date = new Date();
  editMode = false;
  userFormId?: string;
  fillingPercentage = 0;
  @ClassHelper.GetClassConstructor(FieldFill)
  fieldFills: FieldFill[] = [];
  num = '';
  //
  formId?: string;

  constructor(i?: FormFill) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(formId?: string): FormFill {
    const item = new FormFill();
    item.id = ClassHelper.CreateUUID();
    item.formId = formId;
    // item.fieldFills.push(...FieldFill.CreateMany(research.fields));
    return item;
  }

  addFieldFill(fieldFill: FieldFill): void {
    this.fieldFills.push(fieldFill);
  }

  getFieldFill(fieldId: string): FieldFill | undefined {
    return this.fieldFills?.find((i: FieldFill) => i.fieldId === fieldId);
  }

  pushRegisterProperty(propertyId: string): void {
    const registerPropertyToPatient = new FieldFill();
    registerPropertyToPatient.researchResultId = propertyId;
    this.fieldFills.push(registerPropertyToPatient);
  }

  getRegisterPropertyToPatient(propertyId: string): FieldFill[] {
    return this.fieldFills.filter((r: FieldFill) => r.researchResultId === propertyId);
  }

  getOrCreateFieldFill(field: Field): FieldFill {
    let fieldFill = this.getFieldFill(field.id as string);
    if (!fieldFill) {
      fieldFill = FieldFill.Create(field);
      this.addFieldFill(fieldFill);
    }
    return fieldFill;
  }

  getFileInfos(): FileInfo[] {
    const fileInfos: FileInfo[] = [];
    this.fieldFills.forEach((i: FieldFill) => fileInfos.push(...i.getFileInfos()));
    return fileInfos;
  }

  calculateFilling(): void {
    const filledFieldFills = this.fieldFills.filter((a: FieldFill) => a.filled).length;
    const allFieldFills = this.fieldFills.length;
    this.fillingPercentage = Math.round((filledFieldFills / allFieldFills) * 100);
  }

  getFieldFillByFieldId(fieldId: string): FieldFill | undefined {
    return this.fieldFills.find((a: FieldFill) => a.fieldId === fieldId);
  }

  // calculateScores(fieldFillVariants: FieldFillVariant[]): number {
  //   let sum = 0;
  //   this.fieldFills.forEach((a: FieldFill) => {
  //     const selectedVariant = fieldFillVariants.find((av: FieldFillVariant) => av.id === a.fieldFillVariantId);
  //     if (selectedVariant) {
  //       sum += selectedVariant.score;
  //     }
  //   });
  //   return sum;
  // }

  getFieldVariantFieldFill(fieldVariantId: string): FieldFill | undefined {
    return this.fieldFills.find((a: FieldFill) => a.fieldVariantId === fieldVariantId);
  }

  getFieldsFieldFillsMap(fields: Field[]): { [key: string]: number } {
    const map: { [key: string]: number } = {};
    fields.forEach((q: Field) => {
      if (q.code) {
        const fieldFill = this.getFieldFillByFieldId(q.id as string)?.valueNumber as number;
        map[q.code] = fieldFill;
      }
    });
    return map;
  }

  getIdWithoutDashes(): string {
    return this.id ? this.id.replaceAll(/[^a-zA-Z]+/g, '') : '';
  }
}
