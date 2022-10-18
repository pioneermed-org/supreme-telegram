import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Chakra, { CThemeProvider,CReset, CColorModeProvider,
//   CBox} from '@chakra-ui/vue'
import "bootstrap/dist/css/bootstrap.css";
import './index.css'


const app = createApp(App)
import "bootstrap/dist/js/bootstrap.js";

app.use(router)

app.mount('#app')
// Vue.use(Chakra)

// new Vue({
//   render(h) {
   
//     return h(CThemeProvider, [
//       h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])
//     ]);
//   }
// }).$mount("#app");

