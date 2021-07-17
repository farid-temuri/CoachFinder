import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index.js';
import BaseButton from './comopnents/ui/BaseButton.vue';
import BaseBadge from './comopnents/ui/BaseBadge.vue';
import BaseCard from './comopnents/ui/BaseCard.vue';
import BaseSpinner from './comopnents/ui/BaseSpinner.vue';
import BaseDialog from './comopnents/ui/BaseDialog.vue';



const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);



app.mount('#app');