import { createApp } from 'vue'
import App from './App.vue'

// импорт компонентов
import components from '@/components'
// импорт директив
import directives from '@/directives'

const app = createApp(App)
// directives.forEach(directive => {
//     app.directive(directive.name, directive)
// })
components.forEach(component => {
    app.component(component.name, component)
})


app.mount('#app')
