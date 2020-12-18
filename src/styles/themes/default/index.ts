import { lighten } from 'polished'

export default new (function () {
  this.active_color = '#202020'
  this.placeholder_color = lighten(0.6, this.active_color)
  this.disabled_color = lighten(0.6, this.active_color)

  this.text = {
    default: '#000000'
  }

  this.bg = {
    default: 'white'
  }

  this.validation = {
    valid: '#24B44C',
    invalid: '#e84a62',
  }

  this.default_font_size = '62.5%'
  this.border_radius = '0.8rem'

  this.inner_box_shadow_size = 'inset 0 0 0.2rem 0 '
  this.inner_box_shadow_color = 'rgba(0, 0, 0, 0.24)'
})()
