import IOrdered from '@/services/interfaces/IOrdered';
export default class Sorter {
  static Sort(ordered: IOrdered[]) {
    ordered.forEach((o: IOrdered, i: number) => (o.order = i));
  }
}
