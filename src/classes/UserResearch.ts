import ClassHelper from '@/services/ClassHelper';
import Research from '@/classes/Research'
import User from '@/classes/User'
import ResearchResult from '@/classes/ResearchResult';

export default class UserResearch {
  id = '';
  userId = '';
  user: User = new User();
  researchId = '';
  research: Research = new Research();
  route = '';
  // searchGroup: SearchGroup = new SearchGroup();
  searchElementMetas: any[] = [];
  num = '';
  createdAt?: Date
  @ClassHelper.GetClassConstructor(ResearchResult)
  researchResults: ResearchResult[] = [];

  constructor(i?: UserResearch) {
    ClassHelper.BuildClass(this, i);
  }
  static GetClassName(): string {
    return 'userResearch'
  }
  static Create(): UserResearch {
    const item = new UserResearch()
    item.id = ClassHelper.CreateUUID()
    return item
  }

  assign(userId: string, researchId: string) {
    this.userId = userId
    this.researchId = researchId
    this.setNum()
  }

  // (год/месяц/день/порядковый номер эксперта/порядковый номер анкеты - 2024/01/24/03/01)
  setNum() {
    const d = new Date()
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    this.num = `${year}/${month}/${day}/${Math.floor(Math.random() * 20)}/${Math.floor(Math.random() * 100)}`
  }

  getLastResult(): ResearchResult | undefined {
    if (this.researchResults.length === 0) {
      return;
    }
    return this.researchResults[this.researchResults.length - 1];
  }

}
