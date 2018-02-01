import {
  DefaultPage,
  Flatbonds,
  EditProfile,
  Performance,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'profile', name: 'Edit profile', component: EditProfile },
    { path: 'performance', name: 'Performance', component: Performance },
  ],
};
