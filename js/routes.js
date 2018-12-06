// console.log('routes');
import home from './pages/home-cmp.js'
import emailApp from './pages/email/email-app-cmp.js'
import keeperApp from './pages/keeper/keeper-app-cmp.js'
import composeEmail from './cmps/email/compose-email-cmp.js'
// import previewNote from './pages/keeper/preview-note-cmp.js'
import editNote from './pages/keeper/edit-note-cmp.js'
import emailDetails from './pages/email/email-details-cmp.js'

const routes = [
    {path: '/', component: home},     
    {path: '/email-app', component: emailApp},     
    {path: '/compose', component: composeEmail},    
    {path: '/email-app/:emailId', component: emailApp},
    {path: '/keeper-app', component: keeperApp},
    //IT couses a bug- why??
  //  { path: '/keeper-app/:noteId', component: previewNote },
    // the '?' is for if it is edit or add - both use edit page
    { path: '/keeper-app/edit/:noteId?', component: editNote },
    { path: '/keeper-app/add/:type', component: editNote , props: true},
  ];



Vue.use(VueRouter);
var appRouter = new VueRouter({routes})

export default appRouter;


