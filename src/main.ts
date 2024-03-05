import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

kintone.events.on('app.record.index.show', (event: KintoneEvent) => {
  const element = kintone.app.getHeaderMenuSpaceElement()!
  createApp(App).mount(element)
  return event
})