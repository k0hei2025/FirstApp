import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './component/Friend-List.vue'
import AddFriend from './component/AddFriend.vue'

const app = createApp(App);
app.component('friend-list', FriendContact)
app.component('add-friend-form', AddFriend)

app.mount('#app')
