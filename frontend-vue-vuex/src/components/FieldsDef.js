import moment from 'moment';

export default [
  {
    name: 'id',
    title: '番号',
    visible: true
  },
  {
    name: 'name',
    title: '名称'
  },
  {
    name: 'detail',
    title: '詳細'
  },
  // {
  //   name: 'created_at',
  //   title: '登録日',
  //   sortField: 'created_at',
  //   formatter(value) {
  //     if (value) {
  //       return moment(value).format('YYYY/MM/DD');
  //     }
  //   }
  // },
  // {
  //   name: 'updated_at',
  //   title: '更新日時',
  //   sortField: 'updated_at',
  //   formatter(value) {
  //     if (value) {
  //       return moment(value).format('YYYY/MM/DD HH:mm');
  //     }
  //   }
  // },
  '__slot:actions',
  // {
  //   name: 'actions', //編集ボタンなどを表示する列
  //   title: 'アクション'
  // },
];
