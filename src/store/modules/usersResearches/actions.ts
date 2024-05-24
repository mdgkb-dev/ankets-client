import { ActionTree } from 'vuex';

import UserResearch from '@/classes/UserResearch';
import getBaseActions from '@/services/store/baseModule/baseActions';
import RootState from '@/store/types';

import { State } from './index';

const actions: ActionTree<State, RootState> = {
  ...getBaseActions<UserResearch, State>('users-researches'),
};

export default actions;
