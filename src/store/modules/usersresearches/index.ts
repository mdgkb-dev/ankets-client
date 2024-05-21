import { Module } from 'vuex';

import UserResearch from '@/classes/UserResearch';
import getBaseDefaultState from '@/services/store/baseModule/baseIndex';
import IBasicState from '@/services/store/baseModule/baseState';
import RootState from '@/store/types';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export type State = IBasicState<UserResearch>;
export const getDefaultState = (): State => {
  return {
    ...getBaseDefaultState(UserResearch),
  };
};

const state = getDefaultState();

const namespaced = true;

export const usersResearches: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
