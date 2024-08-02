import { v4 as uuidv4 } from 'uuid';

import Field from '@/classes/Field';
import FieldFillFile from '@/classes/FieldFillFile';
// import SelectedFieldFillVariant from '@/classes/SelectedFieldFillVariant';
import FileInfo from '@/services/classes/FileInfo';
import ClassHelper from '@/services/ClassHelper';

export default class FieldFill {
  id?: string;
  valueString?: string;
  valueOther?: string;
  valueNumber?: number;
  valueDate?: Date;
  order = 0;

  // @ClassHelper.GetClassConstructor(SelectedFieldFillVariant)
  // selectedFieldFillVariants: SelectedFieldFillVariant[] = [];
  // selectedFieldFillVariantsForDelete: string[] = [];
  patientId?: string;

  fieldId?: string;
  answerVariantId?: string;
  filled = false;

  researchResultId?: string;

  @ClassHelper.GetClassConstructor(FieldFillFile)
  answerFiles: FieldFillFile[] = [];
  answerFilesForDelete: string[] = [];

  constructor(i?: FieldFill) {
    ClassHelper.BuildClass(this, i);
  }

  static Create(field: Field): FieldFill {
    const item = new FieldFill();
    item.id = uuidv4();
    item.fieldId = field.id;
    item.order = field.order;
    item.valueNumber = 0;
    item.valueString = '';
    item.valueDate = new Date();
    return item;
  }

  setString(value: string): void {
    this.valueString = value;
    this.filled = this.valueString.length > 0;
  }

  setRadio(value?: string): void {
    this.answerVariantId = value;
    this.filled = !!this.answerVariantId;
  }

  static CreateMany(fields: Field[]): FieldFill[] {
    return fields.map((q: Field) => FieldFill.Create(q));
  }

  addFile(): FieldFillFile {
    const file = new FieldFillFile();
    file.id = uuidv4();
    file.answerId = this.id;
    this.answerFiles.push(file);
    return file;
  }

  getFileInfos(): FileInfo[] {
    const fileInfos: FileInfo[] = [];
    this.answerFiles.forEach((af: FieldFillFile) => fileInfos.push(af.fileInfo));
    return fileInfos;
  }

  getSelectedAnswerVariant(answerVariantId?: string): boolean {
    // if (registerPropWithDateId) {
    //   return this.registerPropertySetToPatient?.some(
    //     (i: RegisterPropertySetToPatient) => i.registerPropertySetId === setId && i.propWithDateId === registerPropWithDateId
    //   );
    // }
    // return this.selectedFieldFillVariants?.some((i: SelectedFieldFillVariant) => i.answerVariantId === answerVariantId);
    return true;
  }

  setSelectedFieldFillVariant(selected: boolean, answerVariantId?: string): void {
    if (selected) {
      // const item = SelectedFieldFillVariant.Create(this.id, answerVariantId);
      // if (registerPropWithDateId) {
      //   registerPropertySetToPatient.propWithDateId = registerPropWithDateId;
      // }
      // this.selectedFieldFillVariants.push(item);
      return;
    }
    // const findedIndex = this.selectedFieldFillVariants.findIndex((v: SelectedFieldFillVariant) => v.answerVariantId === answerVariantId);
    // ClassHelper.RemoveFromClassByIndex(findedIndex, this.selectedFieldFillVariants, this.selectedFieldFillVariantsForDelete);
  }
  static GetClassName(): string {
    return 'answer';
  }
}
