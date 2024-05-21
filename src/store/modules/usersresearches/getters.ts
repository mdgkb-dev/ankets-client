import { GetterTree } from 'vuex';

import UserResearch from '@/classes/UserResearch';
import getBaseGetters from '@/services/store/baseModule/baseGetters';
import RootState from '@/store/types';

import { State } from './index';

const getters: GetterTree<State, RootState> = {
  ...getBaseGetters<UserResearch, State>(),
};

export default getters;
