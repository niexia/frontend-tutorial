import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null, {
      'navbar-title': '🎧 fe tutorial'
    })
  },
})
