import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import theme from 'typography-theme-lincoln'

theme.plugins = [new CodePlugin()]

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const options = typography.options
export const scale = typography.scale