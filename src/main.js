import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './component/Friend-List.vue'

const app = createApp(App);
app.component('friend-list', FriendContact)

app.mount('#app')
