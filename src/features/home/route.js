import {
  DefaultPage,
  Flatbonds,
  EditProfile,
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
  ],
};
