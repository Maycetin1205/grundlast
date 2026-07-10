import { MDXProvider } from '@mdx-js/react'
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
import Breadcrumb from '../content/Breadcrumb'
import Section from '../content/Section'
import Divider from '../content/Divider'
import Vertiefung from '../content/Vertiefung'
import SubnettingRechner from '../tools/SubnettingRechner'
import BinaerDezimalPrototyp from '../tools/BinaerDezimalPrototyp'
import TeilungsVisualizer from '../tools/TeilungsVisualizer'
import NibbleUebersetzer from '../tools/NibbleUebersetzer'
import ChmodWerkbank from '../tools/ChmodWerkbank'
import { cn } from '../../lib/cn'
import type { SVGProps, TableHTMLAttributes } from 'react'

function LessonTable({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="lesson-table-wrap">
      <table className={cn(className)} {...props} />
    </div>
  )
}

function LessonSvg({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <div className="lesson-diagram-wrap">
      <svg className={cn('lesson-diagram', className)} {...props} />
    </div>
  )
}

// Alle benutzerdefinierten MDX-Komponenten zentral registriert.
// Kapitel-MDX kann die Inhaltskomponenten ohne lokale Imports nutzen.
const components = {
  table: LessonTable,
  svg: LessonSvg,
  Term,
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
  Breadcrumb,
  Section,
  Divider,
  Vertiefung,
  SubnettingRechner,
  BinaerDezimalPrototyp,
  TeilungsVisualizer,
  NibbleUebersetzer,
  ChmodWerkbank,
}

interface Props {
  children: React.ReactNode
}

export default function GrundlastMDXProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
