import { MutationTree } from 'vuex';

import UserResearch from '@/classes/UserResearch';
import getBaseMutations from '@/services/store/baseModule/baseMutations';

import { State } from './index';

const mutations: MutationTree<State> = {
  ...getBaseMutations<UserResearch, State>(UserResearch),
};

export default mutations;
