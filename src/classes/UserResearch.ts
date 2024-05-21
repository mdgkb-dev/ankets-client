import ClassHelper from '@/services/ClassHelper';
import Research from '@/classes/Research'

export default class UserResearch {
  id = '';
  userId = '';
  researchId = '';
  research: Research = new Research();
  route = '';
  // searchGroup: SearchGroup = new SearchGroup();
  searchElementMetas: any[] = [];
  num = '';
  constructor(i?: UserResearch) {
    ClassHelper.BuildClass(this, i);
  }

  // (год/месяц/день/порядковый номер эксперта/порядковый номер анкеты - 2024/01/24/03/01)
  setNum(experNum: string, anketNum: string) {
    const d = new Date()
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    this.num = `${year}/${month}/${day}/${Math.floor(Math.random() * 20)}/${Math.floor(Math.random() * 100)}`
  }
}
