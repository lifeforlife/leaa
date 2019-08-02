import _lang from './_lang.lang';

const home = '主页';
const playground = '游乐园';
const test = '测试';
const lab = '实验室';
const user = '用户';
const role = '角色';
const permission = '权限';
const category = '分类';
const article = '文章';
const ax = '广告';
const attachment = '附件';

export default {
  home,
  login: _lang.login,
  regist: _lang.register,
  //
  playground,
  test,
  lab,
  showStore: '展示 Store',
  testApollo: '测试 Apollo',
  //
  user,
  createUser: `${_lang.create}${user}`,
  editUser: `${_lang.edit}${user}`,
  //
  role,
  createRole: `${_lang.create}${role}`,
  editRole: `${_lang.edit}${role}`,
  //
  permission,
  createPermission: `${_lang.create}${permission}`,
  editPermission: `${_lang.edit}${permission}`,
  //
  category,
  createCategory: `${_lang.create}${category}`,
  editCategory: `${_lang.edit}${category}`,
  //
  article,
  createArticle: `${_lang.create}${article}`,
  editArticle: `${_lang.edit}${article}`,
  //
  ax,
  createAx: `${_lang.create}${ax}`,
  editAx: `${_lang.edit}${ax}`,
  //
  attachment,
  createAttachment: `${_lang.create}${attachment}`,
  editAttachment: `${_lang.edit}${attachment}`,
};
