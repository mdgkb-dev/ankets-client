import AnswerVariant from '@/classes/AnswerVariant';
// import ChartData from '@/classes/chartData/ChartData';
// import ChartDataSet from '@/classes/chartData/ChartDataSet';
import Field from '@/classes/Field';
// import Formula from '@/classes/Formula';
// import ResearchResult from '@/classes/ResearchResult';
import ClassHelper from '@/services/ClassHelper';
import DateTimeFormat from '@/services/DateFormat';
import Strings from '@/services/Strings';

export default class Research {
  id?: string;
  name = '';
  order = 0;
  isLaboratory = false;
  @ClassHelper.GetClassConstructor(Field)
  fields: Field[] = [];
  isEdit = false;
  withDates = false;
  withScores = false;
  // @ClassHelper.GetClassConstructor(Formula)
  // formulas: Formula[] = [];
  //
  // selectedFormula?: Formula;
  selectedForExport = false;
  filterString = '';
  showOnlyNotFilled = false;
  showOnlyFilled = false;
  //
  date = '';
  constructor(i?: Research) {
    ClassHelper.BuildClass(this, i);
  }

  static GetClassName(): string {
    return 'research';
  }

  static Create(): Research {
    const item = new Research();
    item.id = ClassHelper.CreateUUID();
    return item;
  }

  editRegisterGroup(isEdit?: boolean): void {
    this.isEdit = isEdit ?? !this.isEdit;
  }

  addField(): Field {
    const item = Field.Create(this.id);
    this.fields.push(item);
    this.setFieldsOrder();
    return item;
  }

  removeRegisterProperty(index: number): void {
    const idForDelete = this.fields[index].id;
    this.fields.splice(index, 1);
  }

  sortProperties(): void {
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

  getNotFilledFields(researchResult: ResearchResult, fields: Field[]): Field[] {
    return this.showOnlyNotFilled ? fields.filter((q: Field) => !researchResult.getAnswer(q.id as string)?.filled) : fields;
  }

  getFilledFields(researchResult: ResearchResult, fields: Field[]): Field[] {
    return this.showOnlyFilled ? fields.filter((q: Field) => researchResult.getAnswer(q.id as string)?.filled) : fields;
  }

  getFieldsByString(): Field[] {
    return this.filterString === '' ? this.fields : this.fields.filter((q: Field) => Strings.StringsEquals(q.name, this.filterString));
  }
  //
  // getFilteredFields(researchResult: ResearchResult): Field[] {
  //   return this.showOnlyNotFilled
  //     ? this.getNotFilledFields(researchResult, this.getFieldsByString())
  //     : this.getFilledFields(researchResult, this.getFieldsByString());
  // }
  //
  // selectFormula(item: Formula): void {
  //   this.selectedFormula = item;
  // }

  // getChartDataSets(researchResults: ResearchResult[], dateBirth: Date, isMale: boolean): ChartData {
  //   const dateFormatter = new DateTimeFormat();
  //   const data = new ChartData();
  //   data.labels = researchResults.map((rr: ResearchResult) => dateFormatter.format(rr.date));
  //
  //   if (this.withScores) {
  //     const dataSet = new ChartDataSet();
  //     dataSet.label = 'Баллы';
  //     researchResults.forEach((rr: ResearchResult) => {
  //       dataSet.data.push(rr.calculateScores(this.getAnswerVariants()));
  //       dataSet.results.push(rr.date.toString());
  //     });
  //     data.datasets.push(dataSet);
  //     return data;
  //   }
  //
  //   this.formulas.forEach((f: Formula) => {
  //     const dataSet = new ChartDataSet();
  //     dataSet.label = f.name;
  //     dataSet.backgroundColor = f.color;
  //     researchResults.forEach((rr: ResearchResult) => {
  //       const res = f.getResult(rr.getFieldsAnswersMap(this.fields), isMale, dateFormatter.getMonthsDiff(dateBirth, rr.date));
  //       if (res) {
  //         dataSet.results.push(res.result);
  //         dataSet.data.push(res.value);
  //       }
  //     });
  //     data.datasets.push(dataSet);
  //   });
  //
  //   return data;
  // }

  setFieldsOrder(): void {
    this.fields.forEach((q: Field, i: number) => (q.order = i));
  }
}
