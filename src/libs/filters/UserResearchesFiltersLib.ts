import UserResearch from '@/classes/UserResearch';
import FilterModel from '@/services/classes/filters/FilterModel';
import ClassHelper from '@/services/ClassHelper';
import { DataTypes } from '@/services/interfaces/DataTypes';

const UserResearchFiltersLib = (() => {
  function byUserId(id?: string): FilterModel {
    const filterModel = FilterModel.Create(UserResearch, ClassHelper.GetPropertyName(UserResearch).userId, DataTypes.String);
    filterModel.value1 = id;
    return filterModel;
  }

  function byResearchId(id?: string): FilterModel {
    const filterModel = FilterModel.Create(UserResearch, ClassHelper.GetPropertyName(UserResearch).researchId, DataTypes.String);
    filterModel.value1 = id;
    return filterModel;
  }

  return {
    byUserId,
    byResearchId
  };
})();

export default UserResearchFiltersLib;
