import { theme } from 'lib/theme'
import 'styled-components'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  // tslint:disable-next-line
  interface DefaultTheme extends ThemeInterface {}
}
