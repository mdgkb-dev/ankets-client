import { MutationTree } from 'vuex';

import FilterModel from '@/services/classes/filters/FilterModel';
import FilterQuery from '@/services/classes/filters/FilterQuery';
import FTSP from '@/services/classes/filters/FTSP';
import SortModel from '@/services/classes/SortModel';

import { State } from './state';

const mutations: MutationTree<State> = {
  filterExists(state: State, filterExists: boolean) {
    state.filterExists = filterExists;
  },
  setFTSP(state: State, ftsp: FTSP) {
    state.ftsp = new FTSP(ftsp);
  },
  setTrigger(state, trigger: string) {
    if (trigger == 'manual' && state.trigger == 'manual') {
      trigger = 'click';
    }
    state.trigger = trigger;
  },
  resetId(state) {
    state.filterQuery.id = undefined;
    state.filterQuery = new FilterQuery();
  },
  setStoreModule(state, storeModule: string) {
    state.storeModule = storeModule;
  },
  setRestore(state) {
    state.restore = !state.restore;
  },
  setAction(state, action: string) {
    state.action = action;
  },
  setOffset(state, offset: number) {
    state.ftsp.p.offset = offset * state.ftsp.p.limit;
  },
  setWithDeleted(state, withDeleted: boolean) {
    state.filterQuery.withDeleted = withDeleted;
  },
  resetQueryFilter(state) {
    state.filterQuery.reset();
  },
  setFilterModel(state, filterModel: FilterModel) {
    state.filterQuery.setFilterModel(filterModel);
  },
  resetFilterModels(state) {
    state.filterQuery.filterModels = [];
  },
  replaceSortModel(state, sortModel: SortModel) {
    state.filterQuery.sortModels = [];
    state.filterQuery.sortModels.push(sortModel);
  },
  addSortModels(state, sortModels: SortModel[]) {
    state.sortModels = sortModels;
  },
  setSortModel(state, sortModel: SortModel) {
    state.filterQuery.sortModel = sortModel;
    // let item = state.filterQuery.sortModels.find((i: SortModel) => i.id === sortModel.id);
    // if (item) {
    //   item = sortModel;
    // } else {
    //   state.filterQuery.sortModels.push(sortModel);
    // }
  },
  spliceSortModel(state, id: string) {
    state.filterQuery.sortModel = undefined;
    // const index = state.filterQuery.sortModels.findIndex((i: SortModel) => i.id === id);
    // if (index > -1) state.filterQuery.sortModels.splice(index, 1);
  },
  spliceFilterModel(state, id: string) {
    state.filterQuery.spliceFilterModel(id);
    const index = state.filterQuery.filterModels.findIndex((i: FilterModel) => i.id === id);
    if (index > -1) {
      state.filterQuery.filterModels.splice(index, 1);
    }
  },
  setDefaultSortModel(state) {
    state.setDefaultSortModel = !state.setDefaultSortModel;
  },
  checkSortModels(state) {
    if (state.filterQuery.sortModels.length > 0) {
      return;
    }
    const defaultSort = state.sortModels.find((sortModel: SortModel) => sortModel.default);
    if (defaultSort) {
      state.filterQuery.sortModels.push(defaultSort);
    }
  },
};

export default mutations;
