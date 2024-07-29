export default interface IStorePaginator {
  Count: () => Ref<number>;
  FTSP: () => Promise<void>;
}
