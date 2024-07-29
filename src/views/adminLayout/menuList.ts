import IAdminMenu from '@/services/interfaces/IAdminMenu';

const menuList: IAdminMenu[] = [
  {
    name: 'Исследования',
    to: '',
    icon: 'el-icon-info',
    children: [
      {
        name: 'Список',
        to: '/admin/researches',
        icon: 'el-icon-info',
      },
    ],
  },
];

export default menuList;
