import presetUnocssIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirective from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

const PRESET = {
  UNO: presetUno(),
  ICON: presetUnocssIcons(),
  FONT: presetWebFonts({
    provider: 'none',
    fonts: {
      default:
        "'Helvetica Neue', 'Helvetica', 'Arial', 'PingFang HK', 'PingFang-SC-Regular', 'PingFang', 'Hiragino Sans GB', 'STHeiti', 'Microsoft JhengHei', sans-serif",
      sans: "ui-sans-serif, system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: 'ui-monospace, monospace',
    },
  }),
}

export default defineConfig({
  presets: Object.values(PRESET),
  theme: {
    colors: {
      primary: '#57cc99',
      fontColor: '#484848',
      warningColor: '#d62828',
      // default: '#57cc99',
      // primary: '#8fc0a9',
      // primaryLight: '#c8d5b9',
      // secondary: '#68b0ab',
      // secondaryDark: '#4a7c59',
    },
  },
  transformers: [transformerDirective()],
  content: {
    pipeline: {
      include: [/\.(ts|tsx|js|jsx|css|html)($|\?)/],
    },
  },
})
