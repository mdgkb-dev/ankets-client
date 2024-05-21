import { ActionTree } from 'vuex';

import UserResearch from '@/classes/UserResearch';
import HttpClient from '@/services/HttpClient';
import getBaseActions from '@/services/store/baseModule/baseActions';
import RootState from '@/store/types';

import { State } from './index';

const httpClient = new HttpClient('users-researches');

const actions: ActionTree<State, RootState> = {
  ...getBaseActions<UserResearch, State>(httpClient),
};

export default actions;
