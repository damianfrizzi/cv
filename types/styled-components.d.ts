import 'styled-components'
import { theme } from '../theme'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  // tslint:disable-next-line
  interface DefaultTheme extends ThemeInterface {}
}
