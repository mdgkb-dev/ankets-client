import FormSection from '@/classes/FormSection';
import ClassHelper from '@/services/ClassHelper';

export default class Form {
  id?: string;
  name = '';
  order = 0;
  isLaboratory = false;
  @ClassHelper.GetClassConstructor(FormSection)
  formSections: FormSection[] = [];
  isEdit = false;
  withDates = false;
  withScores = false;

  selectedForExport = false;
  filterString = '';
  showOnlyNotFilled = false;
  showOnlyFilled = false;

  constructor(i?: Form) {
    ClassHelper.BuildClass(this, i);
  }

  static GetClassName(): string {
    return 'Form';
  }

  static Create(): Form {
    const item = new Form();
    item.id = ClassHelper.CreateUUID();
    return item;
  }

  editRegisterGroup(isEdit?: boolean): void {
    this.isEdit = isEdit ?? !this.isEdit;
  }

  addFormSection(): FormSection {
    const item = FormSection.Create(this.id);
    this.formSections.push(item);
    Sorter.Sort(this.formSections);
    return item;
  }
}
