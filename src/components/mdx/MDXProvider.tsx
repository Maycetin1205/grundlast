import { MDXProvider } from '@mdx-js/react'
import Rechenweg from './Rechenweg'
import Term from '../content/Term'
import Analogie from '../content/Analogie'
import Tipp from '../content/Tipp'
import Warnung from '../content/Warnung'
import Beispiel from '../content/Beispiel'
import Formel from '../content/Formel'
import MonoBox from '../content/MonoBox'
import Schritte from '../content/Schritte'
import Glossar from '../content/Glossar'
import Quellen from '../content/Quellen'
import MetaBar from '../content/MetaBar'
import ChapterFooter from '../content/ChapterFooter'
import StepByStep, { Ergebnis } from '../content/StepByStep'
import Schritt from '../content/Schritt'
import Breadcrumb from '../content/Breadcrumb'
import Section from '../content/Section'
import Divider from '../content/Divider'
import SubnettingRechner from '../tools/SubnettingRechner'

// Alle benutzerdefinierten MDX-Komponenten zentral registriert.
// Kapitel-MDX kann die Inhaltskomponenten ohne lokale Imports nutzen.
const components = {
  Term,
  Rechenweg,
  Analogie,
  Tipp,
  Warnung,
  Beispiel,
  Formel,
  MonoBox,
  Schritte,
  Glossar,
  Quellen,
  MetaBar,
  ChapterFooter,
  StepByStep,
  Schritt,
  Ergebnis,
  Breadcrumb,
  Section,
  Divider,
  SubnettingRechner,
}

interface Props {
  children: React.ReactNode
}

export default function GrundlastMDXProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
